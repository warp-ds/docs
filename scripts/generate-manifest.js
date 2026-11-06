// Generates docs/.vitepress/platform-manifest.json from the per-platform docs tree:
//   docs/{web,ios,android}/{components,patterns}/{name}/{page}.md
// Run with `pnpm generate-manifest` (also run by the pre-commit hook).

import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DOCS = 'docs';
const PLATFORMS = ['web', 'ios', 'android'];
const TYPES = ['components', 'patterns'];
// Sidebar / display order of the pages of a component or pattern
const PAGE_ORDER = ['overview', 'usage', 'styling', 'code', 'accessibility'];
// Web legacy framework pages (tabs on the Code page)
const LEGACY = [
  { file: 'code-react', framework: 'react' },
  { file: 'code-react-19', framework: 'react-19' },
  { file: 'code-vue', framework: 'vue' },
];

/** 'button-group' -> 'Button group' */
function toTitle(slug) {
  const s = slug.replace(/-/g, ' ');
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function frontmatter(file) {
  const m = readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---/);
  const data = {};
  if (!m) return data;
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].trim();
  }
  return data;
}

/** Page title: frontmatter `title` or the first H1, without a trailing platform suffix. */
function pageTitle(file) {
  const src = readFileSync(file, 'utf8');
  const title = frontmatter(file).title || src.match(/^#\s+(.+)$/m)?.[1] || '';
  return title
    .replace(/^['"]|['"]$/g, '')
    .replace(/\s+[—–-]\s+(Web|iOS|Android)$/i, '')
    .trim();
}

function walkMd(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir).sort()) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walkMd(full, acc);
    else if (name.endsWith('.md')) acc.push(full);
  }
  return acc;
}

// Sidebar order of platform foundation pages: set-up first, then tokens; unknown slugs go last (alphabetically)
const FOUNDATION_ORDER = ['theming', 'tokens', 'typography', 'spacing', 'shape', 'elevation', 'icons'];
const foundationRank = (slug) => {
  const i = FOUNDATION_ORDER.indexOf(slug);
  return i === -1 ? FOUNDATION_ORDER.length : i;
};

const urlOf = (file) => {
  const p = file.replace(/^docs\//, '').replace(/\.md$/, '');
  return p.endsWith('/index') ? `/${p.slice(0, -'index'.length)}` : `/${p}`;
};

function scanItem(platform, type, name) {
  const dir = join(DOCS, platform, type, name);
  const pages = PAGE_ORDER.filter((p) => existsSync(join(dir, `${p}.md`)));
  if (!pages.length) return null;
  const entry = { title: toTitle(name), pages };
  const seeded = pages.filter((p) => frontmatter(join(dir, `${p}.md`)).seeded === 'true');
  if (seeded.length) entry.seeded = seeded;
  // optional lifecycle status for the header badges (frontmatter `status:` on any page; default released)
  const status = pages.map((p) => frontmatter(join(dir, `${p}.md`)).status).find(Boolean);
  if (status && status !== 'released') entry.status = status;
  if (platform === 'web' && pages.includes('code')) {
    const frameworks = [];
    if (frontmatter(join(dir, 'code.md')).elements !== 'false') frameworks.push('elements');
    for (const { file, framework } of LEGACY) if (existsSync(join(dir, `${file}.md`))) frameworks.push(framework);
    entry.frameworks = frameworks;
  }
  return entry;
}

const manifest = {};
for (const platform of PLATFORMS) {
  manifest[platform] = {};
  for (const type of TYPES) {
    const typeDir = join(DOCS, platform, type);
    const section = {};
    if (existsSync(typeDir)) {
      for (const name of readdirSync(typeDir).sort()) {
        if (!statSync(join(typeDir, name)).isDirectory()) continue;
        const entry = scanItem(platform, type, name);
        if (entry) section[name] = entry;
      }
    }
    manifest[platform][type] = section;
  }
  // Top-level platform foundation pages (docs/{platform}/foundations/*.md), for the iOS/Android sidebars.
  // (Web keeps a hand-written, nested sidebar in sidebar/web-foundation-items.js.)
  const fDir = join(DOCS, platform, 'foundations');
  manifest[platform].foundations = existsSync(fDir)
    ? readdirSync(fDir)
        .filter((f) => f.endsWith('.md') && f !== 'index.md')
        .map((f) => ({ slug: f.replace(/\.md$/, ''), title: pageTitle(join(fDir, f)) }))
        .sort((a, b) => foundationRank(a.slug) - foundationRank(b.slug) || a.slug.localeCompare(b.slug))
    : [];
}

// Opt-in cross-links: platform pages with `designLanguage: /design-language/...` frontmatter.
// Reverse map: Design Language URL -> [{ platform, url, title }]
const designLanguage = {};
for (const platform of PLATFORMS) {
  for (const file of walkMd(join(DOCS, platform, 'foundations'))) {
    const target = frontmatter(file).designLanguage;
    if (!target) continue;
    designLanguage[target] ??= [];
    designLanguage[target].push({ platform, url: urlOf(file), title: pageTitle(file) });
  }
}
manifest.designLanguage = Object.fromEntries(Object.entries(designLanguage).sort(([a], [b]) => a.localeCompare(b)));

try {
  const out = 'docs/.vitepress/platform-manifest.json';
  writeFileSync(out, `${JSON.stringify(manifest, null, 2)}\n`);
  // Match the repo's Biome style so the pre-commit hook (which runs `pnpm check` first) never commits drift
  execFileSync('node_modules/.bin/biome', ['format', '--write', out], { stdio: 'ignore' });
  const counts = PLATFORMS.map(
    (p) =>
      `${p}: ${Object.keys(manifest[p].components).length} components, ${Object.keys(manifest[p].patterns).length} patterns`,
  );
  console.log(`Generated platform manifest (${counts.join('; ')})`);
} catch (error) {
  console.error(`Failed to write platform manifest: ${error.message}`);
  process.exit(1);
}
