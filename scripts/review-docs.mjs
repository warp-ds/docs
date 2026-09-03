#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, normalize } from 'node:path';
import { inflateSync } from 'node:zlib';

const ROOT = process.cwd();
const COMPONENT_DOC = /^docs\/components\/([^/]+)\/(.+)$/;
const COMPONENT_ASSET = /^docs\/public\/components\/([^/]+)\/(.+)$/;
const CORE_PAGES = ['overview.md', 'usage.md', 'accessibility.md'];
const IMAGE_EXTENSIONS = new Set(['.gif', '.jpeg', '.jpg', '.png', '.svg', '.webp']);

function git(args) {
  return execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' }).trim();
}

function parseArguments(argv) {
  const options = { base: '', report: '' };
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--') continue;
    if (argument === '--base') options.base = argv[++index] || '';
    else if (argument === '--report') options.report = argv[++index] || '';
    else throw new Error(`Unknown argument: ${argument}`);
  }
  if (!options.base) throw new Error('Usage: review-docs.mjs --base <git-ref> [--report <path>]');
  return options;
}

function changedFiles(base) {
  const output = git(['diff', '--name-only', '--diff-filter=ACMRD', base, 'HEAD']);
  return output ? output.split('\n').filter(Boolean) : [];
}

function addedFiles(base) {
  const output = git(['diff', '--name-only', '--diff-filter=A', base, 'HEAD']);
  return new Set(output ? output.split('\n').filter(Boolean) : []);
}

function addedLines(base, file) {
  const diff = git(['diff', '--unified=0', base, 'HEAD', '--', file]);
  return diff
    .split('\n')
    .filter((line) => line.startsWith('+') && !line.startsWith('+++'))
    .map((line) => line.slice(1));
}

function fileAt(ref, file) {
  try {
    return execFileSync('git', ['show', `${ref}:${file}`], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
  } catch {
    return null;
  }
}

function lineNumber(content, search, start = 0) {
  const index = typeof search === 'string' ? content.indexOf(search, start) : content.slice(start).search(search) + start;
  if (index < start) return 1;
  return content.slice(0, index).split('\n').length;
}

function pngChunks(buffer) {
  const signature = '89504e470d0a1a0a';
  if (buffer.subarray(0, 8).toString('hex') !== signature) throw new Error('Invalid PNG signature');
  const chunks = [];
  let offset = 8;
  while (offset + 12 <= buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.subarray(offset + 4, offset + 8).toString('ascii');
    const data = buffer.subarray(offset + 8, offset + 8 + length);
    chunks.push({ type, data });
    offset += length + 12;
    if (type === 'IEND') break;
  }
  return chunks;
}

function paeth(left, above, upperLeft) {
  const prediction = left + above - upperLeft;
  const leftDistance = Math.abs(prediction - left);
  const aboveDistance = Math.abs(prediction - above);
  const upperLeftDistance = Math.abs(prediction - upperLeft);
  if (leftDistance <= aboveDistance && leftDistance <= upperLeftDistance) return left;
  return aboveDistance <= upperLeftDistance ? above : upperLeft;
}

function unfilterScanlines(data, height, bytesPerPixel, rowBytes) {
  const rows = [];
  let offset = 0;
  for (let y = 0; y < height; y += 1) {
    const filter = data[offset++];
    const source = data.subarray(offset, offset + rowBytes);
    offset += rowBytes;
    const row = Buffer.alloc(rowBytes);
    const previous = rows[y - 1];
    for (let x = 0; x < rowBytes; x += 1) {
      const raw = source[x];
      const left = x >= bytesPerPixel ? row[x - bytesPerPixel] : 0;
      const above = previous ? previous[x] : 0;
      const upperLeft = previous && x >= bytesPerPixel ? previous[x - bytesPerPixel] : 0;
      if (filter === 0) row[x] = raw;
      else if (filter === 1) row[x] = (raw + left) & 0xff;
      else if (filter === 2) row[x] = (raw + above) & 0xff;
      else if (filter === 3) row[x] = (raw + Math.floor((left + above) / 2)) & 0xff;
      else if (filter === 4) row[x] = (raw + paeth(left, above, upperLeft)) & 0xff;
      else throw new Error(`Unsupported PNG filter ${filter}`);
    }
    rows.push(row);
  }
  return rows;
}

export function pngHasTransparentPixel(buffer) {
  const chunks = pngChunks(buffer);
  const header = chunks.find((chunk) => chunk.type === 'IHDR')?.data;
  if (!header || header.length < 13) throw new Error('PNG has no valid IHDR chunk');
  const width = header.readUInt32BE(0);
  const height = header.readUInt32BE(4);
  const bitDepth = header[8];
  const colorType = header[9];
  const interlace = header[12];
  const transparency = chunks.find((chunk) => chunk.type === 'tRNS');

  if (colorType === 3) return Boolean(transparency?.data.some((alpha) => alpha < 255));
  if (colorType === 0 || colorType === 2) return Boolean(transparency);
  if (![4, 6].includes(colorType)) return false;
  if (![8, 16].includes(bitDepth) || interlace !== 0) {
    throw new Error('Only non-interlaced 8-bit and 16-bit alpha PNGs can be verified');
  }

  const channels = colorType === 4 ? 2 : 4;
  const bytesPerChannel = bitDepth / 8;
  const bytesPerPixel = channels * bytesPerChannel;
  const rowBytes = width * bytesPerPixel;
  const compressed = Buffer.concat(chunks.filter((chunk) => chunk.type === 'IDAT').map((chunk) => chunk.data));
  const rows = unfilterScanlines(inflateSync(compressed), height, bytesPerPixel, rowBytes);
  const alphaOffset = (channels - 1) * bytesPerChannel;
  return rows.some((row) => {
    for (let offset = alphaOffset; offset < row.length; offset += bytesPerPixel) {
      if (bytesPerChannel === 1 && row[offset] < 255) return true;
      if (bytesPerChannel === 2 && row.readUInt16BE(offset) < 65535) return true;
    }
    return false;
  });
}

function resolveAssetPath(markdownFile, url) {
  const clean = url.split(/[?#]/, 1)[0];
  if (!clean || /^(?:[a-z]+:|#)/i.test(clean)) return null;
  if (clean.startsWith('/docs/components/')) return join(ROOT, 'docs/public', clean.slice('/docs/'.length));
  if (clean.startsWith('/components/')) return join(ROOT, 'docs/public', clean.slice(1));
  if (clean.startsWith('/')) return join(ROOT, 'docs/public', clean.slice(1));
  return normalize(join(ROOT, dirname(markdownFile), clean));
}

function extractImages(content) {
  const images = [];
  for (const match of content.matchAll(/!\[([^\]]*)\]\(([^\s)]+)(?:\s+["'][^"']*["'])?\)/g)) {
    images.push({ syntax: match[0], url: match[2], alt: match[1], decorative: match[1] === '' });
  }
  for (const match of content.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)) {
    const alt = match[0].match(/\balt=["']([^"']*)["']/i);
    images.push({ syntax: match[0], url: match[1], alt: alt?.[1], decorative: alt?.[1] === '' });
  }
  for (const match of content.matchAll(/<Do(?:\s+not)?\b[^>]*>/g)) {
    const url = match[0].match(/\bimgurl=["']([^"']+)["']/i);
    const alt = match[0].match(/\bimgalt=["']([^"']*)["']/i);
    images.push({ syntax: match[0], url: url?.[1], alt: alt?.[1], decorative: false, doBlock: true });
  }
  return images;
}

function checkDoDont(file, content, add) {
  if (file.endsWith('/accessibility.md') && /<DoDont>/.test(content)) {
    add('error', file, lineNumber(content, '<DoDont>'), 'Accessibility pages must not contain <DoDont> examples.');
  }

  const wrappers = [...content.matchAll(/<DoDont>([\s\S]*?)<\/DoDont>/g)];
  const wrapperOpenCount = (content.match(/<DoDont>/g) || []).length;
  const wrapperCloseCount = (content.match(/<\/DoDont>/g) || []).length;
  if (wrapperOpenCount !== wrapperCloseCount || wrappers.length !== wrapperOpenCount) {
    add('error', file, lineNumber(content, '<DoDont>'), 'Every <DoDont> must have a matching closing tag and may not be nested.');
  }

  for (const wrapper of wrappers) {
    const entries = [...wrapper[1].matchAll(/<Do(?:\s+not)?\b[^>]*>/g)];
    const dos = entries.filter((entry) => !/^<Do\s+not\b/.test(entry[0]));
    const donts = entries.filter((entry) => /^<Do\s+not\b/.test(entry[0]));
    const line = lineNumber(content, wrapper[0]);
    if (dos.length !== 1 || donts.length !== 1) {
      add('error', file, line, '<DoDont> must contain exactly one <Do> and one <Do not>.');
    }
  }

  const outside = content.replace(/<DoDont>[\s\S]*?<\/DoDont>/g, '');
  const stray = outside.match(/<Do(?:\s+not)?\b/);
  if (stray) add('error', file, lineNumber(content, stray[0]), '<Do> and <Do not> must be wrapped in <DoDont>.');
}

function checkMarkdown(file, content, add) {
  if (!/^#\s+\S+/m.test(content)) add('error', file, 1, 'Component page needs an H1 title.');
  if (!/<ComponentsStatus\s*\/>/.test(content)) add('error', file, 1, 'Component page needs <ComponentsStatus />.');
  if (!/<component-questions\s*\/>/.test(content)) add('error', file, 1, 'Component page needs <component-questions />.');

  checkDoDont(file, content, add);
  for (const image of extractImages(content)) {
    const line = lineNumber(content, image.syntax);
    if (image.doBlock && !image.url) add('error', file, line, '<Do> entries require imgurl.');
    if (image.alt === undefined) add('error', file, line, 'Image is missing alt text.');
    else if (!image.decorative && !image.alt.trim()) add('error', file, line, 'Meaningful image alt text may not be empty.');
    if (image.url) {
      const path = resolveAssetPath(file, image.url);
      if (path && !existsSync(path)) add('error', file, line, `Referenced image does not exist: ${image.url}`);
    }
  }
}

export function auditMarkdown(file, content) {
  const findings = [];
  checkMarkdown(file, content, (level, findingFile, line, message) => {
    findings.push({ level, file: findingFile, line, message });
  });
  return findings;
}

export function introducedFindings(current, previous) {
  const previousCounts = new Map();
  for (const finding of previous) {
    const key = `${finding.level}\0${finding.message}`;
    previousCounts.set(key, (previousCounts.get(key) || 0) + 1);
  }
  return current.filter((finding) => {
    const key = `${finding.level}\0${finding.message}`;
    const remaining = previousCounts.get(key) || 0;
    if (!remaining) return true;
    previousCounts.set(key, remaining - 1);
    return false;
  });
}

function checkNewRaster(file, add) {
  const extension = extname(file).toLowerCase();
  if (extension === '.jpg' || extension === '.jpeg') {
    add('error', file, 1, 'New component illustrations must support transparency; use SVG or transparent PNG instead of JPEG.');
    return;
  }
  if (extension !== '.png') return;
  try {
    if (!pngHasTransparentPixel(readFileSync(join(ROOT, file)))) {
      add('error', file, 1, 'New PNG component illustration has no transparent pixels. Use a transparent asset or SVG.');
    }
  } catch (error) {
    add('error', file, 1, `Could not verify PNG transparency: ${error.message}`);
  }
}

function referencesToDeletedAsset(file) {
  const publicPath = file.slice('docs/public/'.length);
  const urls = [`/${publicPath}`, `/docs/${publicPath}`];
  const references = [];
  for (const url of urls) {
    try {
      const output = execFileSync('git', ['grep', '-n', '-F', url, 'HEAD', '--', 'docs'], {
        cwd: ROOT,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
      for (const match of output.matchAll(/^HEAD:([^:]+):(\d+):/gm)) {
        references.push({ file: match[1], line: Number(match[2]), url });
      }
    } catch {
      // git grep exits with 1 when it finds no matches.
    }
  }
  return references;
}

function renderReport(findings, componentFiles) {
  const errors = findings.filter((finding) => finding.level === 'error');
  const warnings = findings.filter((finding) => finding.level === 'warning');
  const lines = [
    '# Deterministic WARP docs checklist',
    '',
    `Affected component files: ${componentFiles.length}`,
    `Errors: ${errors.length}`,
    `Warnings: ${warnings.length}`,
    '',
  ];
  if (!findings.length) lines.push('All deterministic checks passed.');
  else {
    lines.push('## Findings', '');
    for (const finding of findings) {
      lines.push(`- **${finding.level.toUpperCase()}** \`${finding.file}:${finding.line}\` — ${finding.message}`);
    }
  }
  return `${lines.join('\n')}\n`;
}

export function run(base) {
  const changed = changedFiles(base);
  const added = addedFiles(base);
  const componentFiles = changed.filter((file) => COMPONENT_DOC.test(file) || COMPONENT_ASSET.test(file));
  const findings = [];
  const add = (level, file, line, message) => findings.push({ level, file, line, message });

  const componentsWithAddedDocs = new Set(
    [...added]
      .map((file) => file.match(COMPONENT_DOC))
      .filter(Boolean)
      .map((match) => match[1]),
  );
  const newComponents = new Set(
    [...componentsWithAddedDocs].filter((component) => !fileAt(base, `docs/components/${component}/overview.md`)),
  );
  for (const component of newComponents) {
    for (const page of CORE_PAGES) {
      const file = `docs/components/${component}/${page}`;
      if (!existsSync(join(ROOT, file))) add('error', file, 1, `New component requires ${page}.`);
    }
  }

  for (const file of componentFiles) {
    const docMatch = file.match(COMPONENT_DOC);
    if (docMatch && CORE_PAGES.includes(docMatch[2])) {
      if (!existsSync(join(ROOT, file))) {
        const remainingDocs = git(['ls-tree', '-r', '--name-only', 'HEAD', `docs/components/${docMatch[1]}`]);
        if (remainingDocs) add('error', file, 1, `Component is missing required ${docMatch[2]}.`);
      } else {
        const current = auditMarkdown(file, readFileSync(join(ROOT, file), 'utf8'));
        const previousContent = fileAt(base, file);
        const previous = previousContent === null ? [] : auditMarkdown(file, previousContent);
        for (const finding of introducedFindings(current, previous)) {
          add(finding.level, finding.file, finding.line, finding.message);
        }
      }
    }

    const assetMatch = file.match(COMPONENT_ASSET);
    if (assetMatch) {
      if (!existsSync(join(ROOT, file))) {
        for (const reference of referencesToDeletedAsset(file)) {
          add('error', reference.file, reference.line, `Deleted asset is still referenced: ${reference.url}`);
        }
      } else if (added.has(file) && IMAGE_EXTENSIONS.has(extname(file).toLowerCase())) {
        const isOverviewBackdrop = /\/(?:overview|[^/]+-(?:variants?|states?|anatomy))[^/]*\.(?:png)$/i.test(file);
        if (!isOverviewBackdrop) checkNewRaster(file, add);
      }
    }

    if (docMatch && file.endsWith('.md') && existsSync(join(ROOT, file))) {
      const unfinished = addedLines(base, file).find((line) =>
        /<InProgressStatus\s*\/>|\b(?:TBD|TODO|coming soon|visual example pending)\b|^\s*LINK\s*$/i.test(line),
      );
      if (unfinished) {
        add('error', file, 1, `Do not publish unfinished-content markers: ${unfinished.trim()}`);
      }
    }
  }

  return { findings, componentFiles, report: renderReport(findings, componentFiles) };
}

function main() {
  const options = parseArguments(process.argv.slice(2));
  const result = run(options.base);
  process.stdout.write(result.report);
  if (options.report) writeFileSync(join(ROOT, options.report), result.report);
  for (const finding of result.findings) {
    process.stdout.write(`::${finding.level} file=${finding.file},line=${finding.line}::${finding.message}\n`);
  }
  if (result.findings.some((finding) => finding.level === 'error')) process.exitCode = 1;
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) main();
