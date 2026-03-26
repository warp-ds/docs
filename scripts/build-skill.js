#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'node-html-parser';
import TurndownService from 'turndown';
import skillConfig from '../skill.config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const TEMP_ROOT = path.join(ROOT_DIR, 'cache/agent-skill');
const TEMP_DOCS_DIR = path.join(TEMP_ROOT, 'docs');
const TEMP_DIST_DIR = path.join(TEMP_DOCS_DIR, '.vitepress/dist');
const OUTPUT_DIR = path.join(ROOT_DIR, skillConfig.skill.outputDir);
let currentOutputDir = OUTPUT_DIR;
const PACKAGE_JSON_PATH = path.join(ROOT_DIR, 'package.json');
const PACKAGE_JSON = JSON.parse(readFileSync(PACKAGE_JSON_PATH, 'utf8'));
const CHECK_MODE = process.argv.includes('--check');
const PAGE_TYPE_LABELS = {
  overview: 'Overview',
  usage: 'Usage',
  styling: 'Styling',
  accessibility: 'Accessibility',
};

function toPosixPath(value) {
  return value.split(path.sep).join('/');
}

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function ensureDir(dirPath) {
  mkdirSync(dirPath, { recursive: true });
}

function resetDir(dirPath) {
  rmSync(dirPath, { recursive: true, force: true });
  ensureDir(dirPath);
}

function listMarkdownFiles(dirPath) {
  const items = [];
  if (!existsSync(dirPath)) {
    return items;
  }

  for (const entry of readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      items.push(...listMarkdownFiles(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.md')) {
      items.push(fullPath);
    }
  }

  return items;
}

function listDirectories(dirPath) {
  if (!existsSync(dirPath)) {
    return [];
  }

  return readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith('.'));
}

function fileExists(relativePath) {
  return existsSync(path.join(DOCS_DIR, relativePath));
}

function routeFromSourcePath(relativePath) {
  if (relativePath === 'index.md') {
    return '';
  }

  if (relativePath.endsWith('/index.md')) {
    return relativePath.slice(0, -'index.md'.length);
  }

  return relativePath.replace(/\.md$/, '');
}

function htmlPathFromSourcePath(relativePath) {
  if (relativePath === 'index.md') {
    return path.join(TEMP_DIST_DIR, 'index.html');
  }

  if (relativePath.endsWith('/index.md')) {
    return path.join(TEMP_DIST_DIR, relativePath.replace(/index\.md$/, 'index.html'));
  }

  return path.join(TEMP_DIST_DIR, relativePath.replace(/\.md$/, '.html'));
}

function publicUrlFromSourcePath(relativePath) {
  const route = routeFromSourcePath(relativePath);
  if (!route) {
    return skillConfig.skill.baseUrl;
  }
  return `${skillConfig.skill.baseUrl}/${route.replace(/\/$/, '')}`;
}

function publicBaseUrlFromSourcePath(relativePath) {
  if (relativePath === 'index.md') {
    return `${skillConfig.skill.baseUrl}/`;
  }
  if (relativePath.endsWith('/index.md')) {
    return `${publicUrlFromSourcePath(relativePath)}/`;
  }
  return publicUrlFromSourcePath(relativePath);
}

function normalizeResolvedUrl(url) {
  return url
    .replace(/\/index(?=\/?(?:[#?]|$))/g, '/')
    .replace(/\.html(?=(?:[#?]|$))/g, '')
    .replace(/\.md(?=(?:[#?]|$))/g, '');
}

function resolvePublicUrl(relativeSourcePath, targetUrl) {
  if (!targetUrl) {
    return '';
  }
  if (/^[a-z][a-z0-9+.-]*:/i.test(targetUrl)) {
    return targetUrl;
  }
  if (targetUrl.startsWith('#')) {
    return `${publicUrlFromSourcePath(relativeSourcePath)}${targetUrl}`;
  }
  if (targetUrl.startsWith('/docs/')) {
    return `${skillConfig.skill.baseUrl}${targetUrl.slice('/docs'.length)}`;
  }
  if (targetUrl.startsWith('/')) {
    return `${skillConfig.skill.baseUrl}${targetUrl}`;
  }

  return normalizeResolvedUrl(new URL(targetUrl, publicBaseUrlFromSourcePath(relativeSourcePath)).href);
}

function displayNameFromSlug(slug) {
  return slug
    .split('-')
    .map((part, index) => {
      if (part === 'ios') {
        return 'iOS';
      }
      if (part === 'css') {
        return 'CSS';
      }
      if (part === 'api') {
        return 'API';
      }
      return index === 0 ? `${part.charAt(0).toUpperCase()}${part.slice(1)}` : part;
    })
    .join(' ');
}

function getGuideSourcePaths() {
  const guidePaths = new Set();

  for (const relativePath of skillConfig.guides.root) {
    guidePaths.add(relativePath);
  }
  for (const relativePath of skillConfig.guides.getStarted) {
    guidePaths.add(relativePath);
  }
  for (const relativePath of skillConfig.guides.help) {
    guidePaths.add(relativePath);
  }
  for (const relativePath of skillConfig.guides.foundations) {
    guidePaths.add(relativePath);
  }
  for (const directory of skillConfig.guides.foundationDirectories) {
    const absoluteDir = path.join(DOCS_DIR, directory);
    for (const markdownPath of listMarkdownFiles(absoluteDir)) {
      guidePaths.add(toPosixPath(path.relative(DOCS_DIR, markdownPath)));
    }
  }

  return [...guidePaths].filter((relativePath) => fileExists(relativePath)).sort();
}

function getComponentNames() {
  return listDirectories(path.join(DOCS_DIR, 'components')).filter(
    (name) => !skillConfig.components.exclude.includes(name),
  );
}

function getPatternNames() {
  return listDirectories(path.join(DOCS_DIR, 'patterns')).filter(
    (name) => !skillConfig.patterns.exclude.includes(name),
  );
}

function scanFrameworks(rootDocsDir, type) {
  const section = {};
  const typeDir = path.join(rootDocsDir, type);

  if (!existsSync(typeDir)) {
    return section;
  }

  for (const name of listDirectories(typeDir)) {
    const frameworksDir = path.join(typeDir, name, 'frameworks');
    if (!existsSync(frameworksDir)) {
      continue;
    }

    const frameworks = readdirSync(frameworksDir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
      .map((entry) => entry.name.replace(/\.md$/, ''))
      .sort();

    if (frameworks.length > 0) {
      section[name] = frameworks.map((framework) => ({
        file: framework,
        name:
          framework === 'ios'
            ? 'iOS'
            : framework
                .split('-')
                .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
                .join(' '),
      }));
    }
  }

  return Object.keys(section)
    .sort()
    .reduce((accumulator, key) => {
      accumulator[key] = section[key];
      return accumulator;
    }, {});
}

function copyDocsForBuild() {
  resetDir(TEMP_ROOT);

  cpSync(DOCS_DIR, TEMP_DOCS_DIR, {
    recursive: true,
    filter: (sourcePath) => {
      const relativePath = toPosixPath(path.relative(DOCS_DIR, sourcePath));

      if (!relativePath) {
        return true;
      }
      if (relativePath === 'blog' || relativePath.startsWith('blog/')) {
        return false;
      }
      if (relativePath === '.vitepress/dist' || relativePath.startsWith('.vitepress/dist/')) {
        return false;
      }
      return true;
    },
  });

  const manifest = {
    components: scanFrameworks(TEMP_DOCS_DIR, 'components'),
    patterns: scanFrameworks(TEMP_DOCS_DIR, 'patterns'),
  };
  writeFileSync(
    path.join(TEMP_DOCS_DIR, '.vitepress/frameworks-manifest.json'),
    `${JSON.stringify(manifest, null, 2)}\n`,
    'utf8',
  );
}

function buildTempSite() {
  execFileSync('pnpm', ['exec', 'vitepress', 'build', TEMP_DOCS_DIR], {
    cwd: ROOT_DIR,
    stdio: 'pipe',
    encoding: 'utf8',
  });
}

function tableToMarkdown(tableNode) {
  const headerCells = Array.from(tableNode.querySelectorAll('thead th'));
  const headers = headerCells.map((cell) => cell.textContent.replace(/\s+/g, ' ').trim());
  if (headers.length === 0) {
    return '';
  }

  const rows = [`| ${headers.join(' | ')} |`, `| ${headers.map(() => '---').join(' | ')} |`];

  for (const row of tableNode.querySelectorAll('tbody tr')) {
    const cells = Array.from(row.querySelectorAll('td')).map((cell) => {
      const value = cell.textContent.replace(/\s+/g, ' ').trim().replaceAll('|', '\\|');
      return value;
    });
    rows.push(`| ${cells.join(' | ')} |`);
  }

  return `\n\n${rows.join('\n')}\n\n`;
}

function createTurndownService(relativeSourcePath, { keepFrameworkSupport }) {
  const turndown = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
  });

  turndown.addRule('codeContainer', {
    filter: (node) => {
      const className = node.getAttribute?.('class') || '';
      return node.nodeName === 'DIV' && className.split(/\s+/).some((part) => part.startsWith('language-'));
    },
    replacement: (_content, node) => {
      const codeElement = node.querySelector('pre code');
      if (!codeElement) {
        return '';
      }

      const className = node.getAttribute('class') || '';
      const language =
        className
          .split(/\s+/)
          .find((part) => part.startsWith('language-'))
          ?.replace('language-', '') || '';
      const code = codeElement.textContent.trimEnd();

      return `\n\n\`\`\`${language}\n${code}\n\`\`\`\n\n`;
    },
  });

  turndown.addRule('frameworkBadges', {
    filter: (node) => node.nodeName === 'DIV' && node.classList?.contains('fw-badges'),
    replacement: (_content, node) => {
      if (!keepFrameworkSupport) {
        return '';
      }

      const frameworks = Array.from(node.querySelectorAll('.ds-badge__framework'))
        .map((badge) => badge.textContent.trim())
        .filter(Boolean);
      const uniqueFrameworks = [...new Set(frameworks)];

      return uniqueFrameworks.length > 0 ? `\n\n**Framework support:** ${uniqueFrameworks.join(', ')}\n\n` : '';
    },
  });

  turndown.addRule('tables', {
    filter: 'table',
    replacement: (_content, node) => tableToMarkdown(node),
  });

  turndown.addRule('absoluteLinks', {
    filter: 'a',
    replacement: (content, node) => {
      const href = resolvePublicUrl(relativeSourcePath, node.getAttribute('href') || '');
      return href ? `[${content}](${href})` : content;
    },
  });

  turndown.addRule('absoluteImages', {
    filter: 'img',
    replacement: (_content, node) => {
      const src = resolvePublicUrl(relativeSourcePath, node.getAttribute('src') || '');
      const alt = node.getAttribute('alt') || '';
      return src ? `![${alt}](${src})` : '';
    },
  });

  turndown.addRule('removeUnwanted', {
    filter: (node) => {
      const classList = node.classList;
      const className = node.getAttribute?.('class') || '';
      const tagName = node.nodeName.toLowerCase();

      if (tagName === 'script' || tagName === 'style' || tagName === 'svg' || tagName === 'path') {
        return true;
      }
      if (tagName === 'button' && classList?.contains('copy')) {
        return true;
      }
      if (tagName === 'span' && classList?.contains('lang')) {
        return true;
      }
      if (tagName === 'a' && classList?.contains('header-anchor')) {
        return true;
      }
      if (
        classList?.contains('theme-switcher-container') ||
        classList?.contains('copy') ||
        classList?.contains('lang') ||
        className.includes('VPDocFooter')
      ) {
        return true;
      }
      if (tagName.includes('-') && !node.closest?.('pre') && !classList?.contains('vp-doc')) {
        return true;
      }
      return false;
    },
    replacement: () => '',
  });

  return turndown;
}

function normalizeMarkdown(markdown, { hasInProgress }) {
  let nextMarkdown = markdown
    .replaceAll('\u200B', '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  nextMarkdown = nextMarkdown
    .replace(/^## Questions\?[\s\S]*$/m, '')
    .replace(
      /^\[Android\]\(.+?\)\[Elements\]\(.+?\)\[iOS\]\(.+?\)\[React\]\(.+?\)(?:\[React 19\]\(.+?\))?\[Vue\]\(.+?\)\s*$/gm,
      '',
    )
    .replace(
      /^(\[Android\]\(.+?\))?(?:\[Elements\]\(.+?\))?(?:\[iOS\]\(.+?\))?(?:\[React\]\(.+?\))?(?:\[React 19\]\(.+?\))?(?:\[Vue\]\(.+?\))\s*$/gm,
      '',
    )
    .replace(/^## Status - in progress.*$/gm, '')
    .replace(/^We're working on adding these usage guidelines\s*$/gm, '')
    .replace(/^## Examples?\s*$(?:\n+)(?=## )/gm, '')
    .replace(/^### Inline Demo Markup \d+\s*$(?:\n+)(?=```html)/gm, '')
    .replace(/^!\[Warp [^\]]*\]\([^)]*warp-in-progress[^)]*\)\s*$/gm, '')
    .replace(/^## (?!Inline Demo Markup\s*$).+\n(?:\s*\n)*(?=^## |\s*$)/gm, '')
    .replace(/^### .+\n(?:\s*\n)*(?=^## |^### |\s*$)/gm, '')
    .replace(/^> This page is still in progress in the public docs\.\s*$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  if (hasInProgress) {
    nextMarkdown = `> This page is still in progress in the public docs.\n\n${nextMarkdown}`.trim();
  }

  return nextMarkdown;
}

function extractDescription(markdown) {
  const blocks = markdown
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  for (const block of blocks) {
    const normalizedBlock = block.replace(/\s+/g, ' ').trim();
    const plainText = normalizedBlock.replace(/[*_`[\]()]/g, '').trim();

    if (
      normalizedBlock.startsWith('#') ||
      normalizedBlock.startsWith('>') ||
      normalizedBlock.startsWith('|') ||
      normalizedBlock.startsWith('```') ||
      normalizedBlock.startsWith('**Public docs:**') ||
      normalizedBlock.startsWith('**Framework support:**') ||
      normalizedBlock.startsWith('![') ||
      normalizedBlock.startsWith('- ') ||
      /^\d+\.\s/.test(normalizedBlock) ||
      !/[A-Za-z0-9]/.test(plainText) ||
      /^[^\p{L}\p{N}]+$/u.test(plainText)
    ) {
      continue;
    }

    const firstSentence = normalizedBlock.match(/^.{1,220}?[.!?](?=\s|$)/u)?.[0];
    if (firstSentence) {
      return firstSentence.trim();
    }

    if (normalizedBlock.length <= 220) {
      return normalizedBlock;
    }

    return `${normalizedBlock.slice(0, 217).trimEnd()}...`;
  }

  return '';
}

function extractStyleIsolateBlocks(sourceContent) {
  const matches = sourceContent.matchAll(/<style-isolate>([\s\S]*?)<\/style-isolate>/g);
  return [...matches].map((match) => match[1].trim()).filter(Boolean);
}

function processRenderedPage(relativeSourcePath, { keepFrameworkSupport = false, stripHeading } = {}) {
  const sourceContent = readFileSync(path.join(DOCS_DIR, relativeSourcePath), 'utf8');
  const htmlPath = htmlPathFromSourcePath(relativeSourcePath);
  const htmlContent = readFileSync(htmlPath, 'utf8');
  const parsedHtml = parse(htmlContent);
  const vpDoc = parsedHtml.querySelector('.vp-doc');

  if (!vpDoc) {
    throw new Error(`Could not find .vp-doc for ${relativeSourcePath}`);
  }

  const h1 = vpDoc.querySelector('h1');
  const title = h1
    ? h1.textContent.replaceAll('​', '').trim()
    : displayNameFromSlug(path.basename(relativeSourcePath, '.md'));
  if (h1) {
    h1.remove();
  }

  if (stripHeading) {
    const headings = vpDoc.querySelectorAll('h2, h3');
    const targetHeading = headings.find((heading) => heading.textContent.replaceAll('​', '').trim() === stripHeading);
    if (targetHeading) {
      targetHeading.remove();
    }
  }

  const questionsHeading = vpDoc
    .querySelectorAll('h2, h3')
    .find((heading) => heading.textContent.replaceAll('​', '').trim() === 'Questions?');
  if (questionsHeading?.parentNode?.tagName === 'DIV') {
    questionsHeading.parentNode.remove();
  }

  const pagePublicUrl = publicUrlFromSourcePath(relativeSourcePath);
  const turndown = createTurndownService(relativeSourcePath, { keepFrameworkSupport });
  let markdown = turndown.turndown(vpDoc.innerHTML);
  const hasInProgress = sourceContent.includes('<InProgressStatus');
  markdown = normalizeMarkdown(markdown, { hasInProgress });

  const styleIsolateBlocks = extractStyleIsolateBlocks(sourceContent);
  if (styleIsolateBlocks.length > 0) {
    const examples = styleIsolateBlocks
      .map((block, index) => `### Inline Demo Markup ${index + 1}\n\n\`\`\`html\n${block}\n\`\`\``)
      .join('\n\n');
    markdown = `${markdown}\n\n## Inline Demo Markup\n\n${examples}`.trim();
  }

  markdown = normalizeMarkdown(markdown, { hasInProgress });

  return {
    title,
    description: extractDescription(markdown),
    content: markdown,
    publicUrl: pagePublicUrl,
  };
}

function cleanComponentTitle(title, fallbackSlug) {
  return (
    title.replace(/ - (Overview|Usage|Styling|Accessibility|Frameworks)$/u, '') || displayNameFromSlug(fallbackSlug)
  );
}

function writeFileEnsured(filePath, content) {
  ensureDir(path.dirname(filePath));
  writeFileSync(filePath, `${content.trim()}\n`, 'utf8');
}

function renderPublicDocsLinks(links) {
  return links.map((link) => `[${link.label}](${link.url})`).join(', ');
}

function buildComponentReference(type, name) {
  const pageOrder = skillConfig[type].pageOrder;
  const frameworkOrder = skillConfig[type].frameworkOrder;
  const sourcePrefix = `${type}/${name}`;
  const outputPath = path.join(currentOutputDir, 'references', type, `${name}.md`);
  const publicLinks = [];
  const contentSections = [];
  let referenceTitle = displayNameFromSlug(name);
  let description = '';
  let frameworkSupport = '';

  for (const page of pageOrder) {
    const sourcePath = `${sourcePrefix}/${page}.md`;
    if (!fileExists(sourcePath)) {
      continue;
    }

    const pageData = processRenderedPage(sourcePath, {
      keepFrameworkSupport: page === 'overview',
    });
    referenceTitle = cleanComponentTitle(pageData.title, name);
    description ||= pageData.description;
    if (page === 'overview') {
      const supportMatch = pageData.content.match(/\*\*Framework support:\*\* (.+)/);
      if (supportMatch) {
        frameworkSupport = supportMatch[1].trim();
      }
      pageData.content = pageData.content.replace(/^\*\*Framework support:\*\* .+\n*/m, '').trim();
    }

    publicLinks.push({ label: PAGE_TYPE_LABELS[page], url: pageData.publicUrl });
    contentSections.push(`## ${PAGE_TYPE_LABELS[page]}\n\n${pageData.content}`.trim());
  }

  const frameworkSections = [];
  for (const framework of frameworkOrder) {
    const sourcePath = `${sourcePrefix}/frameworks/${framework}.md`;
    if (!fileExists(sourcePath)) {
      continue;
    }

    const pageData = processRenderedPage(sourcePath, {
      stripHeading: framework === 'ios' ? 'iOS' : displayNameFromSlug(framework),
    });
    publicLinks.push({
      label: framework === 'ios' ? 'iOS' : displayNameFromSlug(framework),
      url: pageData.publicUrl,
    });
    frameworkSections.push(
      `### ${framework === 'ios' ? 'iOS' : displayNameFromSlug(framework)}\n\n${pageData.content}`.trim(),
    );
  }

  if (frameworkSections.length > 0) {
    contentSections.push(`## Frameworks\n\n${frameworkSections.join('\n\n')}`);
  }

  const headerSections = [`# ${referenceTitle}`];
  if (description) {
    headerSections.push(description);
  }
  headerSections.push(`**Public docs:** ${renderPublicDocsLinks(publicLinks)}`);
  if (frameworkSupport) {
    headerSections.push(`**Framework support:** ${frameworkSupport}`);
  }

  writeFileEnsured(outputPath, `${headerSections.join('\n\n')}\n\n${contentSections.join('\n\n')}`);

  return {
    name,
    title: referenceTitle,
    description,
    outputRelativePath: toPosixPath(path.relative(currentOutputDir, outputPath)),
    publicUrl: publicLinks[0]?.url || `${skillConfig.skill.baseUrl}/${type}/${name}`,
  };
}

function getGuideOutputPath(relativeSourcePath) {
  if (!relativeSourcePath.includes('/')) {
    return path.join(currentOutputDir, 'references', 'root', relativeSourcePath);
  }
  return path.join(currentOutputDir, 'references', relativeSourcePath);
}

function buildGuideReference(relativeSourcePath) {
  const pageData = processRenderedPage(relativeSourcePath);
  const outputPath = getGuideOutputPath(relativeSourcePath);
  writeFileEnsured(
    outputPath,
    `# ${pageData.title}\n\n**Full documentation:** ${pageData.publicUrl}\n\n${pageData.content}`,
  );

  return {
    sourcePath: relativeSourcePath,
    title: pageData.title,
    description: pageData.description,
    outputRelativePath: toPosixPath(path.relative(currentOutputDir, outputPath)),
    publicUrl: pageData.publicUrl,
    section: relativeSourcePath.includes('/') ? relativeSourcePath.split('/')[0] : 'root',
  };
}

function renderIndexEntries(entries) {
  return entries
    .map((entry) => {
      const description = entry.description ? ` - ${entry.description}` : '';
      return `- [${entry.title}](${entry.outputRelativePath})${description} ([docs](${entry.publicUrl}))`;
    })
    .join('\n');
}

function buildRootSkill(components, patterns, guides) {
  const groupedGuides = guides.reduce((accumulator, guide) => {
    if (!accumulator[guide.section]) {
      accumulator[guide.section] = [];
    }
    accumulator[guide.section].push(guide);
    return accumulator;
  }, {});

  const guideSections = Object.entries(groupedGuides)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([section, entries]) => {
      const sectionTitle = section === 'root' ? 'Core Pages' : displayNameFromSlug(section);
      return `### ${sectionTitle}\n\n${renderIndexEntries(entries.sort((a, b) => a.title.localeCompare(b.title)))}`;
    })
    .join('\n\n');

  const content = `---
name: ${skillConfig.skill.name}
description: ${skillConfig.skill.description}
license: ${PACKAGE_JSON.license}
metadata:
  author: Warp Design System
  version: "${PACKAGE_JSON.version}"
  homepage: ${skillConfig.skill.baseUrl}
  repository: ${skillConfig.skill.repository}
allowed-tools: Read
---

# ${skillConfig.skill.title}

Use this skill when you need Warp component guidance, framework-specific implementation details, or core design-system setup documentation.

## Quick Start

- Start with the curated guides if you need setup, migration, or core design guidance.
- Use the component files when you need implementation details for a specific component.
- Use the pattern files for higher-level UX guidance.

## Guides

${guideSections}

## Components

${renderIndexEntries(components.sort((a, b) => a.title.localeCompare(b.title)))}

## Patterns

${renderIndexEntries(patterns.sort((a, b) => a.title.localeCompare(b.title)))}
`;

  writeFileEnsured(path.join(currentOutputDir, 'SKILL.md'), content);
}

function listOutputFiles(dirPath) {
  const files = [];
  if (!existsSync(dirPath)) {
    return files;
  }

  for (const entry of readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...listOutputFiles(fullPath));
      continue;
    }
    files.push(fullPath);
  }

  return files;
}

function compareDirectories(leftDir, rightDir) {
  const leftFiles = listOutputFiles(leftDir)
    .map((filePath) => toPosixPath(path.relative(leftDir, filePath)))
    .sort();
  const rightFiles = listOutputFiles(rightDir)
    .map((filePath) => toPosixPath(path.relative(rightDir, filePath)))
    .sort();

  const differences = [];
  const allFiles = [...new Set([...leftFiles, ...rightFiles])].sort();

  for (const relativePath of allFiles) {
    const leftPath = path.join(leftDir, relativePath);
    const rightPath = path.join(rightDir, relativePath);
    const leftExists = existsSync(leftPath);
    const rightExists = existsSync(rightPath);

    if (!leftExists || !rightExists) {
      differences.push(relativePath);
      continue;
    }

    const leftContent = readFileSync(leftPath, 'utf8');
    const rightContent = readFileSync(rightPath, 'utf8');
    if (leftContent !== rightContent) {
      differences.push(relativePath);
    }
  }

  return differences;
}

function generateSkill(outputDir) {
  currentOutputDir = outputDir;
  resetDir(outputDir);

  const componentEntries = getComponentNames().map((name) => buildComponentReference('components', name));
  const patternEntries = getPatternNames().map((name) => buildComponentReference('patterns', name));
  const guideEntries = getGuideSourcePaths().map((relativeSourcePath) => buildGuideReference(relativeSourcePath));

  buildRootSkill(componentEntries, patternEntries, guideEntries);

  return {
    components: componentEntries.length,
    patterns: patternEntries.length,
    guides: guideEntries.length,
  };
}

function main() {
  copyDocsForBuild();
  buildTempSite();

  if (CHECK_MODE) {
    const checkOutputDir = path.join(TEMP_ROOT, 'output');
    const previousOutputDir = OUTPUT_DIR;
    const originalOutputDir = skillConfig.skill.outputDir;
    skillConfig.skill.outputDir = toPosixPath(path.relative(ROOT_DIR, checkOutputDir));
    const summary = generateSkill(checkOutputDir);
    skillConfig.skill.outputDir = originalOutputDir;

    const differences = compareDirectories(previousOutputDir, checkOutputDir);
    if (differences.length > 0) {
      console.error('Generated skill output is out of date.');
      for (const difference of differences.slice(0, 20)) {
        console.error(`- ${difference}`);
      }
      process.exit(1);
    }

    console.log(
      `Skill output is up to date (${summary.components} components, ${summary.patterns} patterns, ${summary.guides} guides).`,
    );
    return;
  }

  const summary = generateSkill(OUTPUT_DIR);
  console.log(`Generated skill output in ${skillConfig.skill.outputDir}`);
  console.log(`- components: ${summary.components}`);
  console.log(`- patterns: ${summary.patterns}`);
  console.log(`- guides: ${summary.guides}`);
}

main();
