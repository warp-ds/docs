#!/usr/bin/env node
// Stage 3 migration: moves/seeds/copies/archives content per redesign/content-mapping.csv and
// rewrites internal links via redesign/redirect-map.json.
// Re-runnable on a fresh main: `node redesign/scripts/build-mapping.mjs && node redesign/scripts/migrate.mjs`
// Requires a clean docs/ tree (git) unless --force.

import { execFileSync } from 'node:child_process';
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmdirSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, posix } from 'node:path';

const ROOT = process.cwd();
const TODAY = new Date().toISOString().slice(0, 10);
const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' });

if (!process.argv.includes('--force') && git('status', '--porcelain', '--', 'docs').trim()) {
  console.error('docs/ has uncommitted changes; aborting (use --force to override)');
  process.exit(1);
}

// ---------- inputs
function parseCsv(text) {
  const rows = [];
  for (const line of text.trim().split('\n').slice(1)) {
    const cells = [];
    let cur = '';
    let q = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (q) {
        if (c === '"' && line[i + 1] === '"') {
          cur += '"';
          i++;
        } else if (c === '"') q = false;
        else cur += c;
      } else if (c === '"') q = true;
      else if (c === ',') {
        cells.push(cur);
        cur = '';
      } else cur += c;
    }
    cells.push(cur);
    rows.push({
      old: cells[0],
      oldUrl: cells[1],
      news: cells[2] ? cells[2].split(' ; ') : [],
      action: cells[3],
      notes: cells[4],
    });
  }
  return rows;
}
const mapping = parseCsv(readFileSync('redesign/content-mapping.csv', 'utf8')).filter((r) => r.old !== '(new)');
const redirects = JSON.parse(readFileSync('redesign/redirect-map.json', 'utf8'));
const baseline = new Set(readFileSync('redesign/baseline/old-urls.txt', 'utf8').trim().split('\n'));

const fileOf = (url) => (url.endsWith('/') ? `docs${url}index.md` : `docs${url}.md`);
const urlOfFile = (file) => {
  const p = file.replace(/^docs\//, '').replace(/\.md$/, '');
  if (p === 'index') return '/';
  if (p.endsWith('/index')) return `/${p.slice(0, -'index'.length)}`;
  return `/${p}`;
};
const ensureDir = (file) => mkdirSync(dirname(file), { recursive: true });
const gitMv = (from, to) => {
  if (from === to) return;
  ensureDir(to);
  git('mv', from, to);
};

// origin (old path) for every resulting docs file, used to resolve relative links
const origin = new Map();
const seeded = []; // {file, from}
const log = { move: 0, seed: 0, copy: 0, archive: 0, drop: 0, replace: 0, assets: 0, generated: 0 };

// ---------- 1. moves (primary target), archive, drop, replace
for (const r of mapping) {
  const src = r.old;
  switch (r.action) {
    case 'keep':
      origin.set(src, src);
      break;
    case 'move':
    case 'move + seed':
    case 'move + copy': {
      const to = fileOf(r.news[0]);
      gitMv(src, to);
      origin.set(to, src);
      log.move++;
      break;
    }
    case 'replace': {
      const to = r.news[0] ? fileOf(r.news[0]) : null;
      if (to && !existsSync(to)) {
        gitMv(src, to);
        origin.set(to, src);
      } else git('rm', '-q', src);
      log.replace++;
      break;
    }
    case 'archive':
      gitMv(src, src.replace(/^docs\//, 'archive/docs/'));
      log.archive++;
      break;
    case 'drop':
      git('rm', '-q', src);
      log.drop++;
      break;
    default:
      throw new Error(`unknown action ${r.action} for ${src}`);
  }
}

// ---------- 2. co-located assets of components/patterns + blog/pattern helpers
function primaryDirFor(type, name) {
  const rows = mapping.filter((r) => r.old.startsWith(`docs/${type}/${name}/`) && r.news.length);
  const dirs = new Set();
  for (const r of rows) for (const n of r.news) dirs.add(dirname(fileOf(n)));
  return [...dirs];
}
for (const type of ['components', 'patterns']) {
  const typeDir = join('docs', type);
  if (!existsSync(typeDir)) continue;
  for (const name of readdirSync(typeDir)) {
    const dir = join(typeDir, name);
    if (!statSync(dir).isDirectory()) continue;
    const assets = readdirSync(dir).filter((f) => !f.endsWith('.md') && f !== '.DS_Store' && f !== 'frameworks');
    if (!assets.length) continue;
    const targets = primaryDirFor(type, name);
    const webTarget = targets.find((d) => d.startsWith('docs/web/'));
    const primary = name === 'toast' ? `archive/docs/${type}/${name}` : (webTarget ?? targets[0]);
    for (const a of assets) {
      const from = join(dir, a);
      if (statSync(from).isDirectory()) continue;
      gitMv(from, join(primary, a));
      log.assets++;
      // placeholder.svg is needed by DsOverview on every platform that lists the item
      if (a === 'placeholder.svg') {
        for (const t of targets) {
          if (t === primary) continue;
          ensureDir(join(t, a));
          copyFileSync(join(primary, a), join(t, a));
        }
      }
    }
  }
}
for (const f of ['Hero.vue', 'ArticleCard.vue', 'posts.data.js']) {
  if (existsSync(`docs/blog/${f}`)) gitMv(`docs/blog/${f}`, `docs/about/whats-new/${f}`);
}
if (existsSync('docs/patterns/utils.js')) gitMv('docs/patterns/utils.js', 'archive/docs/patterns/utils.js'); // unused

// ---------- 3. seeds and copies
function splitFrontmatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
  return m ? { fm: m[1], body: src.slice(m[0].length) } : { fm: '', body: src };
}

// Remove top-level HTML elements that carry live web examples; keep prose, images, DoDont.
function stripWebOnly(body) {
  const fences = [];
  let text = body.replace(/^(```|~~~)[\s\S]*?^\1[^\n]*$/gm, (m) => {
    fences.push(m);
    return `@@WARPFENCE${fences.length - 1}@@`;
  });
  text = text.replace(/<script setup>[\s\S]*?<\/script>\n?/g, (m) => (/from\s+['"]\.\.?\//.test(m) ? '' : m));
  const lines = text.split('\n');
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const open = lines[i].match(/^\s*<([A-Za-z][\w-]*)\b/);
    if (!open) {
      out.push(lines[i]);
      continue;
    }
    const tag = open[1];
    // find the end of this element
    let depth = 0;
    let end = i;
    const openRe = new RegExp(`<${tag}(?=[\\s>/])[^>]*?(/?)>`, 'g');
    const closeRe = new RegExp(`</${tag}\\s*>`, 'g');
    for (let j = i; j < lines.length; j++) {
      for (const m of lines[j].matchAll(openRe)) if (m[1] !== '/') depth++;
      depth -= (lines[j].match(closeRe) ?? []).length;
      end = j;
      if (depth <= 0) break;
    }
    const block = lines.slice(i, end + 1).join('\n');
    const webOnly =
      /<w-[a-z]|<[a-z]+-example\b|<style-isolate\b|<ThemeSwitcher\b|<WidthController\b/.test(block) ||
      ['style-isolate', 'ThemeSwitcher', 'WidthController'].includes(tag);
    if (webOnly) i = end;
    else {
      out.push(...lines.slice(i, end + 1));
      i = end;
    }
  }
  text = out.join('\n');
  // drop headings whose section became empty
  let changed = true;
  while (changed) {
    changed = false;
    const ls = text.split('\n');
    const keep = [];
    for (let i = 0; i < ls.length; i++) {
      const h = ls[i].match(/^(#{2,6})\s/);
      if (h) {
        let j = i + 1;
        while (j < ls.length && (ls[j].trim() === '' || /^<component-questions\s*\/>$/.test(ls[j].trim()))) j++;
        const next = ls[j]?.match(/^(#{1,6})\s/);
        if (j >= ls.length || (next && next[1].length <= h[1].length)) {
          changed = true;
          continue;
        }
      }
      keep.push(ls[i]);
    }
    text = keep.join('\n');
  }
  text = text.replace(/\n{3,}/g, '\n\n');
  return text.replace(/@@WARPFENCE(\d+)@@/g, (_, n) => fences[Number(n)]);
}

const SEED_FLAG_RE =
  /\b(Elements|web ?components?|React|Vue|CSS|class(es)?|attribute|slot|props?|hover|keyboard|mouse|browser|HTML|DOM)\b/i;
const seedReport = [];
for (const r of mapping) {
  if (!['move + seed', 'move + copy'].includes(r.action)) continue;
  const primary = fileOf(r.news[0]);
  const src = readFileSync(primary, 'utf8');
  for (const url of r.news.slice(1)) {
    const to = fileOf(url);
    ensureDir(to);
    if (r.action === 'move + copy') {
      writeFileSync(to, src);
      log.copy++;
    } else {
      const { fm, body } = splitFrontmatter(src);
      const fmLines = [fm, 'seeded: true', `seededFrom: ${r.news[0]}`, `seededAt: ${TODAY}`].filter(Boolean);
      const out = `---\n${fmLines.join('\n')}\n---\n\n${stripWebOnly(body).trimStart()}`;
      writeFileSync(to, out);
      seeded.push({ file: to, from: r.news[0] });
      const hits = out
        .split('\n')
        .map((l, i) => [i + 1, l])
        .filter(([, l]) => SEED_FLAG_RE.test(l) && !l.startsWith('seeded'));
      if (hits.length) seedReport.push({ file: to, hits });
      log.seed++;
    }
    origin.set(to, r.old);
  }
}

// ---------- 4. generated Web code pages for components without an Elements implementation
const LEGACY = [
  ['code-react', 'React'],
  ['code-react-19', 'React 19'],
  ['code-vue', 'Vue'],
];
for (const dir of readdirSync('docs/web/components')) {
  const d = join('docs/web/components', dir);
  if (!statSync(d).isDirectory() || existsSync(join(d, 'code.md'))) continue;
  const legacy = LEGACY.filter(([f]) => existsSync(join(d, `${f}.md`)));
  if (!legacy.length) continue;
  const title = dir.charAt(0).toUpperCase() + dir.slice(1).replace(/-/g, ' ');
  const links = legacy.map(([f, n]) => `- [${n} (legacy)](./${f}.md)`).join('\n');
  writeFileSync(
    join(d, 'code.md'),
    `---\nelements: false\n---\n\n# ${title} - Code\n\n<ComponentsStatus />\n\n<FrameworkTabs />\n\n::: info No Warp Elements implementation yet\n${title} is not available in Warp Elements. The legacy framework implementations are still documented:\n\n${links}\n:::\n`,
  );
  log.generated++;
}

// ---------- 5. link rewriting
const ASSET_RE = /\.(png|jpe?g|svg|gif|webp|pdf|css|js|mjs|json|txt|ico|tsx?|vue)$/i;
function resolveOld(raw, originFile) {
  if (!raw || /^(https?:|mailto:|tel:|#|javascript:|data:|\{|\$)/i.test(raw)) return null;
  const [pathAndQuery, hash = ''] = raw.split('#');
  const [path] = pathAndQuery.split('?');
  if (!path || ASSET_RE.test(path)) return null;
  let p = path;
  let docsPrefix = false;
  if (p === '/docs' || p.startsWith('/docs/')) {
    docsPrefix = true;
    p = p.slice(5) || '/';
  }
  const oldDir = posix.dirname(`/${originFile.replace(/^docs\//, '')}`);
  let abs = p.startsWith('/') ? p : posix.join(oldDir, p);
  const slash = p.endsWith('/') || p === '.' || p === './';
  abs = posix.normalize(abs);
  const hadMd = /\.md$/.test(abs);
  abs = abs.replace(/\.(md|html)$/, '');
  if (abs.endsWith('/index')) abs = abs.slice(0, -'index'.length);
  if (slash && !abs.endsWith('/')) abs += '/';
  const candidates = [abs];
  if (!abs.endsWith('/')) candidates.push(`${abs}/`);
  else if (abs !== '/') candidates.push(abs.slice(0, -1));
  for (const c of candidates) {
    if (redirects[c]) return { url: redirects[c], hash, hadMd, docsPrefix, oldUrl: c };
    if (baseline.has(c)) return { url: c, hash, hadMd, docsPrefix, oldUrl: c };
  }
  return null;
}
function formatAbsolute(res) {
  let u = res.url;
  if (res.hadMd && !u.endsWith('/')) u += '.md';
  if (res.docsPrefix) u = `/docs${u}`;
  return u + (res.hash ? `#${res.hash}` : '');
}
function formatRelative(res, newFile) {
  if (res.docsPrefix) return `/docs${res.url}${res.hash ? `#${res.hash}` : ''}`;
  const newDir = posix.dirname(`/${newFile.replace(/^docs\//, '')}`);
  let rel = posix.relative(newDir, res.url) || '.';
  if (res.url.endsWith('/') && !rel.endsWith('/')) rel += '/';
  if (rel === './' || rel === '.') rel = './';
  return rel + (res.hash ? `#${res.hash}` : '');
}

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (['.vitepress', 'public', 'node_modules', '_shared', '.DS_Store'].includes(name)) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, acc);
    else if (name.endsWith('.md')) acc.push(full);
  }
  return acc;
}
let rewritten = 0;
const unchangedOldLinks = [];
for (const file of walk('docs')) {
  const orig = origin.get(file) ?? file;
  const moved = orig !== file;
  const src = readFileSync(file, 'utf8');
  const platform = file.match(/^docs\/(ios|android)\//)?.[1];
  const resolveFor = (raw) => {
    const res = resolveOld(raw, orig);
    // on native pages, prefer the same platform's page for component/pattern links
    if (res && platform && /^\/web\/(components|patterns)\//.test(res.url)) {
      const local = res.url.replace(/^\/web\//, `/${platform}/`);
      if (existsSync(fileOf(local))) res.url = local;
    }
    return res;
  };
  const sameTarget = (res, raw) => !moved && res.url === res.oldUrl && !raw.startsWith('/docs');
  let out = src.replace(/(\]\(\s*<?)([^)\s>]+)(>?(?:\s+"[^"]*")?\s*\))/g, (m, a, raw, b) => {
    const res = resolveFor(raw);
    if (!res || sameTarget(res, raw)) return m;
    rewritten++;
    return a + formatAbsolute(res) + b;
  });
  out = out.replace(/((?<![:\w-])href=)(["'])([^"']+)\2/g, (m, a, q, raw) => {
    const res = resolveFor(raw);
    if (!res || sameTarget(res, raw)) return m;
    rewritten++;
    return `${a}${q}${formatRelative(res, file)}${q}`;
  });
  out = out.replace(/(\bhref:\s*)(["'])([^"']+)\2/g, (m, a, q, raw) => {
    const res = resolveFor(raw);
    if (!res || sameTarget(res, raw)) return m;
    rewritten++;
    return `${a}${q}${formatRelative(res, file)}${q}`;
  });
  if (out !== src) writeFileSync(file, out);
}

// ---------- 6. remove empty dirs
function pruneEmpty(dir) {
  if (!existsSync(dir) || !statSync(dir).isDirectory()) return;
  for (const n of readdirSync(dir)) {
    if (n === '.DS_Store') continue;
    pruneEmpty(join(dir, n));
  }
  const left = readdirSync(dir).filter((n) => n !== '.DS_Store');
  if (!left.length) {
    for (const n of readdirSync(dir)) execFileSync('rm', [join(dir, n)]);
    rmdirSync(dir);
  }
}
for (const d of [
  'docs/components',
  'docs/patterns',
  'docs/blog',
  'docs/help',
  'docs/collaborate',
  'docs/get-started',
]) {
  pruneEmpty(d);
}

// ---------- reports
let report = `# Seed report (${TODAY})\n\n${seeded.length} seeded pages (frontmatter \`seeded: true\`). Web-only live examples, \`<ThemeSwitcher />\` and local \`<script setup>\` imports were stripped. Lines below mention web-specific terms and need a human check against the platform source before \`seeded\` is removed.\n\n`;
for (const { file, hits } of seedReport) {
  report += `## ${file}\n\n${hits.map(([n, l]) => `- L${n}: ${l.trim().slice(0, 160).replace(/\|/g, '\\|')}`).join('\n')}\n\n`;
}
const clean = seeded.filter((s) => !seedReport.some((r) => r.file === s.file)).map((s) => s.file);
report += `## Seeded pages with no flagged lines (${clean.length})\n\n${clean.map((f) => `- ${f}`).join('\n')}\n`;
writeFileSync('redesign/seed-report.md', report);

console.log(JSON.stringify({ ...log, linksRewritten: rewritten }, null, 0));
if (unchangedOldLinks.length) console.log(unchangedOldLinks.join('\n'));
