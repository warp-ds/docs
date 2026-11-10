#!/usr/bin/env node
// Throwaway Stage 2 script: derive the content-mapping table and redirect map from the
// current docs tree + the placement rules in redesign/02-ia-plan.md.
// Usage: node redesign/scripts/build-mapping.mjs
// Outputs: redesign/content-mapping.csv, redesign/02-content-mapping.md, redesign/redirect-map.json

import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const DOCS = 'docs';
const OUT = 'redesign';
const WEB_FW = ['elements', 'react', 'react-19', 'vue'];
const NATIVE = ['ios', 'android'];
const LEGACY_SUFFIX = { react: 'code-react', 'react-19': 'code-react-19', vue: 'code-vue' };

// ---------- helpers
function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (['.vitepress', 'public', 'node_modules', '.DS_Store'].includes(name)) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, acc);
    else if (name.endsWith('.md')) acc.push(relative(DOCS, full).replace(/\\/g, '/'));
  }
  return acc;
}
const routeOf = (rel) => {
  const p = rel.replace(/\.md$/, '');
  if (p === 'index') return '/';
  if (p.endsWith('/index')) return `/${p.slice(0, -'index'.length)}`;
  return `/${p}`;
};
const fileOf = (url) => (url.endsWith('/') ? `docs${url}index.md` : `docs${url}.md`);
const isStub = (rel) => /<InProgressStatus\b|Status - in progress/i.test(readFileSync(join(DOCS, rel), 'utf8'));

const files = walk(DOCS).sort();
const rows = []; // {old, oldUrl, news:[url], action, notes}
const redirects = {};
const newPages = new Map(); // url -> note (pages created that have no single old source)

function add(old, news, action, notes = '', redirectTo = undefined) {
  const oldUrl = routeOf(old);
  rows.push({ old: `docs/${old}`, oldUrl, news, action, notes });
  const target = redirectTo ?? news[0];
  if (target && target !== oldUrl) redirects[oldUrl] = target;
}

// ---------- components / patterns
function itemInfo(type, name) {
  const dir = join(DOCS, type, name);
  const fw = existsSync(join(dir, 'frameworks'))
    ? readdirSync(join(dir, 'frameworks'))
        .filter((f) => f.endsWith('.md'))
        .map((f) => f.replace(/\.md$/, ''))
    : [];
  const shared = ['overview', 'usage', 'styling', 'accessibility'].filter((p) => existsSync(join(dir, `${p}.md`)));
  const platforms = [];
  if (fw.some((f) => WEB_FW.includes(f))) platforms.push('web');
  for (const n of NATIVE) if (fw.includes(n)) platforms.push(n);
  return { fw, shared, platforms };
}

const TOAST = 'toast';
const items = {};
for (const type of ['components', 'patterns']) {
  items[type] = {};
  for (const name of readdirSync(join(DOCS, type))) {
    if (statSync(join(DOCS, type, name)).isDirectory()) items[type][name] = itemInfo(type, name);
  }
}

// Pattern rule (see plan §3): patterns are design guidance first, so Web gets the pattern's
// design pages even without web code. Only applies when the pattern has shared pages.
for (const p of Object.values(items.patterns))
  if (p.shared.length && !p.platforms.includes('web')) p.platforms.unshift('web');

// Toast rule (plan §3, open question Q5): archive on Web + Android (deprecated there),
// keep the iOS code page because warp-ios has no deprecation marker.
const toastTarget = (page, platform) => {
  if (platform === 'ios') return '/ios/components/toast/code';
  if (platform === 'android') return '/android/components/snackbar/code';
  const map = { overview: 'overview', usage: 'usage', accessibility: 'accessibility' };
  return `/web/components/snackbar/${map[page] ?? 'code'}`;
};

// final page sets per platform, used for redirect fallbacks and the coverage summary
const pageSet = { web: {}, ios: {}, android: {} };
const put = (platform, type, name, page) => {
  const k = `${type}/${name}`;
  pageSet[platform][k] ??= new Set();
  pageSet[platform][k].add(page);
};

for (const type of ['components', 'patterns']) {
  for (const [name, info] of Object.entries(items[type])) {
    const base = (pl) => `/${pl}/${type}/${name}`;
    const nativePlatforms = info.platforms.filter((p) => p !== 'web');
    const hasWeb = info.platforms.includes('web');

    if (type === 'components' && name === TOAST) {
      for (const page of info.shared) {
        add(
          `${type}/${name}/${page}.md`,
          [],
          'archive',
          'Deprecated: archive; redirect to Snackbar',
          toastTarget(page, 'web'),
        );
      }
      for (const f of info.fw) {
        if (f === 'ios') {
          add(
            `${type}/${name}/frameworks/ios.md`,
            [`${base('ios')}/code`],
            'move',
            'warp-ios Toast has no deprecation marker (Q5)',
          );
          put('ios', type, name, 'code');
        } else {
          const pl = WEB_FW.includes(f) ? 'web' : f;
          add(
            `${type}/${name}/frameworks/${f}.md`,
            [],
            'archive',
            `Deprecated on ${pl}; redirect to Snackbar`,
            toastTarget('code', pl),
          );
        }
      }
      continue;
    }

    // shared design pages
    for (const page of info.shared) {
      const old = `${type}/${name}/${page}.md`;
      const stub = isStub(old);
      const news = [];
      const notes = [];
      let action;
      if (hasWeb) {
        news.push(`${base('web')}/${page}`);
        put('web', type, name, page);
        action = 'move';
        const seedTargets = [];
        if (['overview', 'usage'].includes(page) && !stub) {
          for (const n of nativePlatforms) {
            seedTargets.push(`${base(n)}/${page}`);
            put(n, type, name, page);
          }
        }
        if (seedTargets.length) {
          news.push(...seedTargets);
          action = 'move + seed';
          notes.push(`seed ${seedTargets.map((s) => s.split('/')[1]).join('+')} (strip web examples, seeded: true)`);
        }
        if (page === 'accessibility' && nativePlatforms.length)
          notes.push('not copied to native (needs source verification)');
        if (stub) notes.push('in-progress stub: web only');
      } else {
        // native-only component: page was written for native already
        if (page === 'usage' && stub) {
          action = 'drop';
          notes.push('in-progress stub, native-only component; redirect to overview');
          const first = nativePlatforms[0];
          rows.push({ old: `docs/${old}`, oldUrl: routeOf(old), news: [], action, notes: notes.join('; ') });
          redirects[routeOf(old)] = `${base(first)}/overview`;
          continue;
        }
        const targets = page === 'accessibility' ? nativePlatforms.slice(0, 1) : nativePlatforms;
        for (const n of targets) {
          news.push(`${base(n)}/${page}`);
          put(n, type, name, page);
        }
        action = targets.length > 1 ? 'move + copy' : 'move';
        notes.push('native-only component');
        if (page === 'accessibility') notes.push('verify against platform source before publishing');
      }
      add(old, news, action, notes.join('; '));
    }

    // framework pages
    const webCode = info.fw.filter((f) => WEB_FW.includes(f));
    if (hasWeb && type === 'components' && !webCode.includes('elements') && webCode.length) {
      newPages.set(
        `${base('web')}/code`,
        `New: Code page with "no Elements implementation" note + legacy tabs (${webCode.join(', ')})`,
      );
      put('web', type, name, 'code');
    }
    for (const f of info.fw) {
      const old = `${type}/${name}/frameworks/${f}.md`;
      if (f === 'elements') {
        add(old, [`${base('web')}/code`], 'move', 'Elements = primary Code page');
        put('web', type, name, 'code');
      } else if (WEB_FW.includes(f)) {
        add(old, [`${base('web')}/${LEGACY_SUFFIX[f]}`], 'move', 'legacy framework tab');
        put('web', type, name, LEGACY_SUFFIX[f]);
      } else {
        add(old, [`${base(f)}/code`], 'move', '');
        put(f, type, name, 'code');
      }
    }
  }
}

// best landing page for an item on its preferred platform
function bestFor(type, name, page) {
  const order = ['web', 'ios', 'android'];
  for (const pl of order) {
    const set = pageSet[pl][`${type}/${name}`];
    if (!set) continue;
    if (page && set.has(page)) return `/${pl}/${type}/${name}/${page}`;
    if (set.has('overview')) return `/${pl}/${type}/${name}/overview`;
    return `/${pl}/${type}/${name}/${[...set][0]}`;
  }
  return null;
}

// dropped native-only usage stubs: send to that platform's overview (already set), re-check existence
// directory roots that never were pages (prompt requires them)
for (const type of ['components', 'patterns']) {
  for (const name of Object.keys(items[type])) {
    const target = name === TOAST ? '/web/components/snackbar/overview' : bestFor(type, name, 'overview');
    for (const k of [
      `/${type}/${name}`,
      `/${type}/${name}/`,
      `/${type}/${name}/frameworks`,
      `/${type}/${name}/frameworks/`,
    ]) {
      redirects[k] = target;
    }
  }
}

// ---------- everything else (explicit rules)
const rules = [
  // [regex on old rel path, (m) => new url | null, action, notes, redirectOverride]
  [/^index\.md$/, () => '/', 'keep', 'update cards to new URLs'],
  [/^pre-migrating\.md$/, () => null, 'archive', 'orphan, stale Fabric note', '/get-started/web/migrate-from-fabric/'],
  [/^components\/index\.md$/, () => '/web/components/', 'replace', 'DsOverview per platform (web/ios/android indexes)'],
  [/^patterns\/index\.md$/, () => '/web/patterns/', 'replace', 'DsOverview per platform'],
  [
    /^(components|patterns)\/DsFrameworkStatus\.md$/,
    () => '/about/platform-coverage',
    'replace',
    'one generated matrix from manifest',
  ],
  [/^get-started\/index\.md$/, () => '/get-started/', 'keep', 'update cards'],
  [
    /^get-started\/designers\/([^/]+)\/index\.md$/,
    (m) => `/get-started/design/${m[1]}/`,
    'move',
    'Design › Getting access / set up',
  ],
  [/^get-started\/developers\/web\/index\.md$/, () => '/get-started/web/', 'move', 'Web › Getting access / set up'],
  [
    /^get-started\/developers\/web\/web-components\.md$/,
    () => null,
    'drop',
    'one-line pointer page',
    '/get-started/web/',
  ],
  [/^get-started\/developers\/web\/([^/]+)\/index\.md$/, (m) => `/get-started/web/${m[1]}/`, 'move', ''],
  [/^get-started\/developers\/(ios|android)\/index\.md$/, (m) => `/get-started/${m[1]}/`, 'move', ''],
  [
    /^get-started\/mission-values-principles\/index\.md$/,
    () => '/foundations/about/',
    'move',
    'Foundation › About DS (header "About DS")',
  ],
  [
    /^help\/authoring-guide\/index\.md$/,
    () => '/about/help/authoring-guide/',
    'move',
    'Help › Support › How to contribute',
  ],
  [/^help\/([^/]+)\/index\.md$/, (m) => `/about/help/${m[1]}/`, 'move', ''],
  [
    /^collaborate\/request-new-component\/index\.md$/,
    () => '/about/help/requests/new-component/',
    'move',
    'Help › Requests',
  ],
  [
    /^collaborate\/request-component-changes\/index\.md$/,
    () => '/about/help/requests/component-changes/',
    'move',
    'Help › Requests',
  ],
  [/^blog\/index\.md$/, () => '/about/whats-new/', 'move', 'What\'s new (header "Changelog")'],
  [/^blog\/posts\/(\d{4})\/([^/]+)\.md$/, (m) => `/about/whats-new/${m[1]}/${m[2]}`, 'move', ''],
  [/^foundations\/index\.md$/, () => '/foundations/', 'keep', 'update cards'],
  [/^foundations\/css-classes\/(.+)\.md$/, (m) => `/web/foundations/css-classes/${m[1]}`, 'move', 'Web › Foundation'],
  [
    /^foundations\/(customization|font-weights)\/index\.md$/,
    (m) => `/web/foundations/${m[1]}/`,
    'move',
    'Web › Foundation',
  ],
  [
    /^foundations\/keyboard\/([^/]+)\/index\.md$/,
    (m) => `/web/foundations/keyboard/${m[1]}/`,
    'move',
    'Web › Foundation › General web guidelines',
  ],
  [/^foundations\/dark-mode\/elements\.md$/, () => '/web/foundations/dark-mode/', 'move', 'Web › Foundation'],
  [/^foundations\/dark-mode\/react\.md$/, () => '/web/foundations/dark-mode/react', 'move', 'legacy'],
  [/^foundations\/(.+)$/, (m) => routeOf(`foundations/${m[1]}`), 'keep', 'shared Design Language'],
];

for (const rel of files) {
  if (/^(components|patterns)\/[^/]+\//.test(rel)) continue; // handled above
  const rule = rules.find(([re]) => re.test(rel));
  if (!rule) {
    add(rel, [], 'UNMAPPED', 'no rule');
    continue;
  }
  const [re, to, action, notes, override] = rule;
  const m = rel.match(re);
  const url = to(m);
  add(rel, url ? [url] : [], action, notes, override);
}

// notes for shared foundations kept but flagged
for (const r of rows) {
  if (/^\/foundations\/data-visualization\/tokens\//.test(r.oldUrl))
    r.notes += '; flag: Tokens & CSS is web-ish, split later';
  if (r.oldUrl === '/foundations/elevation/') r.notes += '; flag: contains CSS class names, split later';
  if (r.oldUrl === '/foundations/dark-mode/') r.notes += '; links to Web + Figma dark-mode pages';
}

// directory URLs that 404 today but are guessable
Object.assign(redirects, {
  '/get-started/designers/': '/get-started/design/',
  '/get-started/developers/': '/get-started/',
  '/help/': '/about/',
  '/collaborate/': '/about/help/requests/new-component/',
  '/blog/posts/': '/about/whats-new/',
  '/foundations/css-classes/': '/web/foundations/css-classes/unocss',
  '/foundations/keyboard/': '/web/foundations/keyboard/navigation/',
});

// ---------- new pages without a single old source
for (const [url, note] of [
  ['/get-started/design/', 'New index: Design › Getting access / set up'],
  ['/about/', 'New index: About Warp'],
  ['/about/platform-coverage', 'New: generated platform/framework matrix (replaces 2 DsFrameworkStatus pages)'],
  ['/web/', 'New platform index'],
  ['/ios/', 'New platform index'],
  ['/android/', 'New platform index'],
  ['/web/foundations/', 'New index: Web › Foundation'],
  ['/ios/components/', 'New index (DsOverview platform=ios)'],
  ['/android/components/', 'New index (DsOverview platform=android)'],
  ['/ios/patterns/', 'New index'],
  ['/android/patterns/', 'New index'],
  ['/web/foundations/css-classes/', '— not created; redirect only'],
]) {
  if (!note.startsWith('—')) newPages.set(url, note);
}

// ---------- validate: every redirect target is a planned page
const planned = new Set();
for (const r of rows) for (const n of r.news) planned.add(n);
for (const u of newPages.keys()) planned.add(u);
const problems = [];
for (const [from, to] of Object.entries(redirects)) {
  if (!planned.has(to)) problems.push(`${from} -> ${to} (target not planned)`);
  if (redirects[to]) problems.push(`${from} -> ${to} (chained)`);
}
// file/dir collision check (GitHub Pages: foo.html next to foo/ may 301)
const plannedFiles = [...planned].map(fileOf);
const dirs = new Set(plannedFiles.map((f) => f.split('/').slice(0, -1).join('/')));
for (const f of plannedFiles)
  if (!f.endsWith('/index.md') && dirs.has(f.replace(/\.md$/, ''))) problems.push(`collision: ${f}`);
// every baseline URL is either kept or redirected
const baseline = readFileSync(join(OUT, 'baseline/old-urls.txt'), 'utf8').trim().split('\n');
for (const u of baseline) if (!planned.has(u) && !redirects[u]) problems.push(`baseline URL not covered: ${u}`);

// ---------- write outputs
const sortedRedirects = Object.fromEntries(Object.entries(redirects).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(join(OUT, 'redirect-map.json'), `${JSON.stringify(sortedRedirects, null, 2)}\n`);

const esc = (v) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
const csv = ['old_path,old_url,new_urls,action,notes']
  .concat(
    rows.map((r) => [r.old, r.oldUrl, r.news.join(' ; '), r.action, r.notes].map((v) => esc(String(v))).join(',')),
  )
  .concat([...newPages].map(([u, n]) => ['(new)', '', u, 'new', n].map(esc).join(',')));
writeFileSync(join(OUT, 'content-mapping.csv'), `${csv.join('\n')}\n`);

const actions = {};
for (const r of rows) actions[r.action] = (actions[r.action] ?? 0) + 1;
const group = (r) => {
  const s = r.oldUrl.split('/')[1] || 'root';
  if (s === 'foundations' && r.oldUrl.startsWith('/foundations/css-classes/')) return 'foundations/css-classes';
  if (s === 'blog' && r.oldUrl.startsWith('/blog/posts/')) return 'blog/posts';
  return s;
};
const groups = {};
for (const r of rows) {
  const g = group(r);
  groups[g] ??= [];
  groups[g].push(r);
}
const mdCell = (s) => String(s).replace(/\|/g, '\\|');
let md =
  '# Content mapping — every current page\n\nGenerated by `redesign/scripts/build-mapping.mjs` from the docs tree on branch `redesign/ia-platform-split`. Machine-readable copy: [content-mapping.csv](content-mapping.csv). Redirects: [redirect-map.json](redirect-map.json).\n\n';
md += `**${rows.length} current pages** → actions: ${Object.entries(actions)
  .sort((a, b) => b[1] - a[1])
  .map(([k, v]) => `${k} ${v}`)
  .join(
    ' · ',
  )}. **${newPages.size} new pages** (listed at the end). **${Object.keys(sortedRedirects).length} redirect entries.**\n\n`;
md +=
  'Actions: **keep** (URL unchanged) · **move** (`git mv`, URL changes) · **move + seed** (move to Web, plus a stripped copy flagged `seeded: true` on iOS/Android) · **move + copy** (native-only component page placed on both native platforms) · **replace** (superseded by a generated/new page) · **archive** (`git mv` to `archive/` outside `docs/`) · **drop** (deleted; URL redirected).\n\n';
const order = [
  'root',
  'get-started',
  'foundations',
  'foundations/css-classes',
  'components',
  'patterns',
  'help',
  'collaborate',
  'blog',
  'blog/posts',
];
for (const g of order.concat(Object.keys(groups).filter((k) => !order.includes(k)))) {
  if (!groups[g]) continue;
  md += `## ${g} (${groups[g].length})\n\n| Old URL | New URL(s) | Action | Notes |\n|---|---|---|---|\n`;
  for (const r of groups[g]) {
    const news = r.news.length ? r.news.map((n) => `\`${n}\``).join('<br>') : `→ \`${redirects[r.oldUrl] ?? '—'}\``;
    md += `| \`${mdCell(r.oldUrl)}\` | ${news} | ${r.action} | ${mdCell(r.notes)} |\n`;
  }
  md += '\n';
}
md += `## New pages (${newPages.size})\n\n| New URL | Notes |\n|---|---|\n`;
for (const [u, n] of newPages) md += `| \`${u}\` | ${mdCell(n)} |\n`;
writeFileSync(join(OUT, '02-content-mapping.md'), md);

// coverage summary for the plan
const cov = {};
for (const pl of ['web', 'ios', 'android']) {
  cov[pl] = {
    components: Object.keys(pageSet[pl]).filter((k) => k.startsWith('components/')).length,
    patterns: Object.keys(pageSet[pl]).filter((k) => k.startsWith('patterns/')).length,
    pages: Object.values(pageSet[pl]).reduce((a, s) => a + s.size, 0),
  };
}
console.log('actions:', actions);
console.log('new pages:', newPages.size, 'redirects:', Object.keys(sortedRedirects).length);
console.log('platform coverage after split:', JSON.stringify(cov));
console.log(problems.length ? `PROBLEMS (${problems.length}):\n${problems.join('\n')}` : 'validation: OK');
