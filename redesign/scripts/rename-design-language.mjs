#!/usr/bin/env node
// One-off: after `git mv docs/foundations docs/design-language`, rewrite links that point at
// Design Language pages, and add redirects /foundations/... -> /design-language/... .
// Image/asset URLs under /foundations/ (served from docs/public/foundations) are left untouched.
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DL = 'docs/design-language';

function walk(dir, exts, acc = []) {
  for (const name of readdirSync(dir)) {
    if (['node_modules', 'dist', 'cache', 'public', '.DS_Store'].includes(name)) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, exts, acc);
    else if (exts.some((e) => name.endsWith(e))) acc.push(full);
  }
  return acc;
}

/** Does `rest` (the part after "foundations/") name a Design Language page? */
function isPage(rest) {
  const p = rest
    .split('#')[0]
    .split('?')[0]
    .replace(/\.(md|html)$/, '')
    .replace(/\/$/, '');
  if (p === '') return existsSync(join(DL, 'index.md'));
  return existsSync(join(DL, `${p}.md`)) || existsSync(join(DL, p, 'index.md'));
}

// foundations/ at the start of a link target, after "/", "/docs/" or "../" — but not web|ios|android/foundations/
const TARGET = /(^|\/docs\/|^\/|(?:\.\.\/)+)foundations\/([^\s"')]*)/;
let changed = 0;
const rewrite = (target) => {
  const m = target.match(TARGET);
  if (!m || m.index !== 0 || !isPage(m[2])) return target;
  changed++;
  return target.replace(TARGET, `${m[1]}design-language/${m[2]}`);
};

const files = [...walk('docs', ['.md']), ...walk('docs/.vitepress', ['.js', '.vue'])].filter(
  (f) => !f.startsWith('docs/.vitepress/dist'),
);
const seen = new Set();
for (const file of files) {
  if (seen.has(file)) continue;
  seen.add(file);
  const src = readFileSync(file, 'utf8');
  const out = src
    .replace(/(\]\(\s*<?)([^)\s>]+)/g, (_, a, t) => a + rewrite(t))
    .replace(/((?<![:\w-])href=)(["'])([^"']+)\2/g, (_, a, q, t) => `${a}${q}${rewrite(t)}${q}`)
    .replace(/(\b(?:href|link):\s*)(["'])([^"']+)\2/g, (_, a, q, t) => `${a}${q}${rewrite(t)}${q}`);
  if (out !== src) writeFileSync(file, out);
}

// redirects: every Design Language page's old URL, plus retargeting existing entries
const mapPath = 'docs/.vitepress/redirects.json';
const map = JSON.parse(readFileSync(mapPath, 'utf8'));
const pages = walk(DL, ['.md']).map((f) => {
  const rel = f.slice(DL.length + 1).replace(/\.md$/, '');
  return rel === 'index' ? '' : rel.endsWith('/index') ? rel.slice(0, -'index'.length) : rel;
});
let added = 0;
for (const p of pages) {
  map[`/foundations/${p}`] = `/design-language/${p}`;
  added++;
}
let retargeted = 0;
for (const [k, v] of Object.entries(map)) {
  if (v.startsWith('/foundations/') && isPage(v.slice('/foundations/'.length))) {
    map[k] = `/design-language/${v.slice('/foundations/'.length)}`;
    retargeted++;
  }
}
const sorted = Object.fromEntries(Object.entries(map).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(mapPath, `${JSON.stringify(sorted, null, 2)}\n`);
console.log(
  JSON.stringify({
    linksRewritten: changed,
    redirectsAdded: added,
    redirectsRetargeted: retargeted,
    total: Object.keys(sorted).length,
  }),
);
