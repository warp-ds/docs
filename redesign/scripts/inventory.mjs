#!/usr/bin/env node
// Throwaway content-inventory script for the IA redesign (Stage 0).
// Usage: node redesign/scripts/inventory.mjs [docsDir] [outCsv]
// Writes one CSV row per Markdown page under docs/ (excluding .vitepress).

import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, posix, relative, resolve } from 'node:path';

const root = resolve(process.argv[2] ?? 'docs');
const outCsv = resolve(process.argv[3] ?? 'redesign/inventory.csv');

const SKIP_DIRS = new Set(['.vitepress', 'node_modules', 'public', 'dist', 'cache']);
const WEB_FW = new Set(['elements', 'react', 'react-19', 'vue']);

function walk(dir, exts, acc = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name) || name === '.DS_Store') continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, exts, acc);
    else if (exts.some((e) => name.endsWith(e))) acc.push(full);
  }
  return acc;
}

// page key = route without base, e.g. "components/button/overview" or "get-started/" for index
function routeOf(relPath) {
  const p = relPath.replace(/\\/g, '/').replace(/\.md$/, '');
  if (p === 'index') return '';
  if (p.endsWith('/index')) return p.slice(0, -'index'.length);
  return p;
}

function parseFrontmatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { fm: {}, body: src };
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^['"]|['"]$/g, '');
  }
  return { fm, body: src.slice(m[0].length) };
}

function classify(rel) {
  const parts = rel.replace(/\.md$/, '').split('/');
  const section = parts.length > 1 ? parts[0] : 'root';
  let item = '';
  let kind = 'guide';
  let platform = 'shared';
  let framework = '';

  if (section === 'components' || section === 'patterns') {
    if (parts.length === 2) {
      kind = parts[1] === 'index' ? 'section-index' : 'status';
    } else {
      item = parts[1];
      if (parts[2] === 'frameworks') {
        kind = 'framework';
        framework = parts[3];
        platform = WEB_FW.has(framework) ? 'web' : framework;
      } else {
        kind = parts[2]; // overview | usage | styling | accessibility
        platform = 'shared(web-oriented)';
      }
    }
  } else if (section === 'blog') {
    kind = parts[1] === 'index' ? 'section-index' : 'blog-post';
  } else if (section === 'foundations') {
    item = parts[1] ?? '';
    if (item === 'css-classes' || item === 'customization') platform = 'web';
    if (item === 'dark-mode' && ['elements', 'react'].includes(parts[2])) {
      platform = 'web';
      framework = parts[2];
    }
    if (parts.at(-1) === 'index' && parts.length === 2) kind = 'section-index';
  } else if (section === 'get-started') {
    if (parts[1] === 'developers') {
      platform = parts[2];
      item = parts[2];
    } else if (parts[1] === 'designers') {
      item = 'design';
    } else item = parts[1] === 'index' ? '' : parts[1];
    if (parts.length === 2 && parts[1] === 'index') kind = 'section-index';
  } else if (section === 'root') {
    kind = parts[0] === 'index' ? 'home' : 'other';
  }
  return { section, item, kind, platform, framework };
}

// ---- collect pages
const mdFiles = walk(root, ['.md']);
const pages = mdFiles.map((full) => {
  const rel = relative(root, full).replace(/\\/g, '/');
  const src = readFileSync(full, 'utf8');
  const { fm, body } = parseFrontmatter(src);
  const h1 = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const text = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`|\-[\]()!]/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  const flags = [];
  if (words < 40) flags.push('near-empty');
  if (/\b(TODO|TBD|coming soon|lorem ipsum|placeholder text)\b/i.test(body)) flags.push('placeholder');
  if (/<InProgressStatus\b|Status - in progress/i.test(src)) flags.push('in-progress-stub');
  if (/<w-[a-z-]+[\s>]|<[a-z]+-example\b/.test(body)) flags.push('live-web-example');
  if (/deprecat/i.test(src.slice(0, 1500))) flags.push('deprecated-mention');
  if (/<!--\s*@include:/.test(src)) flags.push('uses-include');
  if (/<ComponentsStatus\b/.test(src)) flags.push('ComponentsStatus');
  if (/<FrameworkTabs\b/.test(src)) flags.push('FrameworkTabs');
  if (/<DsOverview\b/.test(src)) flags.push('DsOverview');
  if (/<script\b/.test(src)) flags.push('script');
  if (/<DoDont\b|<Do\b/.test(src)) flags.push('DoDont');
  return {
    rel,
    route: routeOf(rel),
    title: (fm.title || h1 || '').replace(/"/g, "'"),
    words,
    lines: src.split('\n').length,
    flags,
    ...classify(rel),
  };
});
const byRoute = new Map(pages.map((p) => [p.route, p]));

// ---- inbound links (content links only: .md and .vue under docs/, excluding .vitepress)
const linkSources = [...mdFiles, ...walk(root, ['.vue'])];
const inbound = new Map();
const LINK_RE = /\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)|href=["']([^"']+)["']|link:\s*['"]([^'"]+)['"]/g;

function normalizeTarget(raw, fromRel) {
  if (!raw || /^(https?:|mailto:|tel:|#|javascript:)/i.test(raw)) return null;
  let t = raw.split('#')[0].split('?')[0];
  if (!t) return null;
  if (/\.(png|jpe?g|svg|gif|webp|pdf|css|js)$/i.test(t)) return null;
  if (t.startsWith('/docs/')) t = t.slice(5);
  if (t === '/docs') t = '/';
  let abs;
  if (t.startsWith('/')) abs = t.slice(1);
  else abs = posix.normalize(posix.join(posix.dirname(fromRel), t));
  const trailing = abs.endsWith('/') || abs === '' || abs === '.';
  abs = abs.replace(/^\.\/?/, '').replace(/\.(md|html)$/, '');
  if (trailing) return abs.replace(/\/?$/, '/').replace(/^\/$/, '');
  if (abs.endsWith('/index')) return abs.slice(0, -'index'.length);
  // "components/button" may mean "components/button/" (index) if no such page
  if (!byRoute.has(abs) && byRoute.has(`${abs}/`)) return `${abs}/`;
  return abs;
}

const unresolved = new Map();
for (const full of linkSources) {
  const fromRel = relative(root, full).replace(/\\/g, '/');
  const src = readFileSync(full, 'utf8');
  for (const m of src.matchAll(LINK_RE)) {
    const target = normalizeTarget(m[1] ?? m[2] ?? m[3], fromRel);
    if (target == null) continue;
    if (byRoute.has(target)) {
      if (!inbound.has(target)) inbound.set(target, new Set());
      inbound.get(target).add(fromRel);
    } else {
      unresolved.set(`${fromRel} -> ${target}`, true);
    }
  }
}

// ---- write CSV
const cols = [
  'path',
  'url',
  'section',
  'item',
  'page_kind',
  'platform',
  'framework',
  'title',
  'words',
  'lines',
  'inbound_links',
  'flags',
];
const esc = (v) => {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const rows = pages
  .sort((a, b) => a.rel.localeCompare(b.rel))
  .map((p) =>
    [
      `docs/${p.rel}`,
      `/${p.route}`,
      p.section,
      p.item,
      p.kind,
      p.platform,
      p.framework,
      p.title,
      p.words,
      p.lines,
      inbound.get(p.route)?.size ?? 0,
      p.flags.join(' '),
    ]
      .map(esc)
      .join(','),
  );
writeFileSync(outCsv, `${cols.join(',')}\n${rows.join('\n')}\n`);

// ---- summary to stdout
const count = (key) => {
  const acc = {};
  for (const p of pages) acc[p[key]] = (acc[p[key]] ?? 0) + 1;
  return Object.entries(acc).sort((a, b) => b[1] - a[1]);
};
console.log(`pages: ${pages.length}  -> ${relative(process.cwd(), outCsv)}`);
console.log('by section:', JSON.stringify(count('section')));
console.log('by kind:', JSON.stringify(count('kind')));
console.log('by platform:', JSON.stringify(count('platform')));
console.log(
  'orphans (0 inbound, excl. blog posts):',
  pages.filter((p) => !inbound.has(p.route) && p.kind !== 'blog-post').length,
);
writeFileSync(join(dirname(outCsv), 'inventory-unresolved-links.txt'), `${[...unresolved.keys()].sort().join('\n')}\n`);
console.log(`unresolved internal links: ${unresolved.size} (see inventory-unresolved-links.txt)`);
