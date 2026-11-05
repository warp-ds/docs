#!/usr/bin/env node
// Post-build site checks (run after `pnpm build`): `pnpm check:site`
//  1. every key in docs/.vitepress/redirects.json has a redirect stub, and its target is a real built page
//  2. every internal <a href> in the built HTML resolves to a built page, stub or asset
//  3. every <!--@include: --> in docs/**/*.md resolves (VitePress leaves missing includes silently)
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, posix, resolve } from 'node:path';

const ROOT = process.cwd();
const DOCS = join(ROOT, 'docs');
const DIST = join(DOCS, '.vitepress/dist');
const BASE = '/docs/';
const problems = { redirects: [], links: [], includes: [] };
// Known issues outside this repo. Remove an entry once it is fixed upstream.
const KNOWN_BROKEN_LINKS = new Set([
  // @warp-ds/elements dist/docs/badge/*.md links to "/docs/components/alert/overview" (base is added twice)
  '/docs/docs/components/alert/overview',
]);

if (!existsSync(DIST)) {
  console.error('docs/.vitepress/dist not found — run `pnpm build` first');
  process.exit(1);
}

function walk(dir, filter, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (!['node_modules', 'dist', 'cache'].includes(name) || dir === DIST) walk(full, filter, acc);
    } else if (filter(name)) acc.push(full);
  }
  return acc;
}

const isStub = (file) => readFileSync(file, 'utf8').includes('<meta http-equiv="refresh"');
/** Resolve a site path (without base) to a dist file, or null. */
function distFileFor(path) {
  const p = decodeURI(path);
  const candidates = p.endsWith('/')
    ? [join(DIST, p, 'index.html')]
    : [join(DIST, `${p}.html`), join(DIST, p), join(DIST, p, 'index.html')];
  return candidates.find((c) => existsSync(c) && statSync(c).isFile()) ?? null;
}

// 1. redirects
const redirects = JSON.parse(readFileSync(join(DOCS, '.vitepress/redirects.json'), 'utf8'));
for (const [from, to] of Object.entries(redirects)) {
  const stub = distFileFor(from);
  if (!stub || !isStub(stub)) problems.redirects.push(`${from}: no redirect stub`);
  const target = distFileFor(to);
  if (!target || isStub(target)) problems.redirects.push(`${from} -> ${to}: target is not a built page`);
}

// 2. internal links in built HTML (skip stubs themselves)
const htmlFiles = walk(DIST, (n) => n.endsWith('.html'));
const seen = new Map();
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  if (html.includes('<meta http-equiv="refresh"')) continue;
  const pageUrl = `/${file.slice(DIST.length + 1).replace(/\\/g, '/')}`;
  for (const m of html.matchAll(/<a\b[^>]*?\shref="([^"]+)"/g)) {
    let href = m[1].replace(/&amp;/g, '&');
    if (/^(https?:|mailto:|tel:|#|javascript:|data:)/i.test(href)) continue;
    href = href.split('#')[0].split('?')[0];
    if (!href) continue;
    const abs = href.startsWith('/') ? href : posix.join(posix.dirname(`${BASE}${pageUrl.slice(1)}`), href);
    if (!abs.startsWith(BASE)) continue;
    const sitePath = `/${abs.slice(BASE.length)}`;
    if (!seen.has(sitePath)) seen.set(sitePath, distFileFor(sitePath.replace(/\.html$/, '')) ?? distFileFor(sitePath));
    if (!seen.get(sitePath) && !KNOWN_BROKEN_LINKS.has(m[1])) problems.links.push(`${pageUrl}: ${m[1]}`);
  }
}

// 3. includes
for (const file of walk(DOCS, (n) => n.endsWith('.md'))) {
  if (file.startsWith(join(DOCS, '.vitepress'))) continue;
  // ignore examples inside code fences
  const src = readFileSync(file, 'utf8').replace(/^(```|~~~)[\s\S]*?^\1/gm, '');
  for (const m of src.matchAll(/<!--\s*@include:\s*([^\s]+?)\s*-->/g)) {
    const target = m[1].replace(/\{[\d,]*\}$/, '').replace(/#[\w-]+$/, '');
    const resolved = target.startsWith('@/') ? join(DOCS, target.slice(2)) : resolve(dirname(file), target);
    if (!existsSync(resolved)) problems.includes.push(`${file.slice(ROOT.length + 1)}: ${m[1]}`);
  }
}

const unique = (a) => [...new Set(a)];
let failed = false;
for (const [k, list] of Object.entries(problems)) {
  const items = unique(list);
  console.log(`${items.length ? '✗' : '✓'} ${k}: ${items.length} problem(s)`);
  for (const i of items.slice(0, 50)) console.log(`   ${i}`);
  if (items.length > 50) console.log(`   … ${items.length - 50} more`);
  if (items.length) failed = true;
}
console.log(
  `checked ${Object.keys(redirects).length} redirects, ${htmlFiles.length} HTML files (${seen.size} unique internal targets)`,
);
process.exit(failed ? 1 : 0);
