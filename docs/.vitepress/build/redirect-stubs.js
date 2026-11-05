// Build-time: write a small redirect page for every old URL in redirects.json.
// GitHub Pages has no server-side redirects; these stubs handle hard loads, bookmarks and crawlers.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { OLD_URL_PREFIX } from '../redirect-rules.js';

const mapPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'redirects.json');

export function loadRedirects() {
  return JSON.parse(readFileSync(mapPath, 'utf8'));
}

function stub(target, canonical) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting…</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${canonical}">
<meta http-equiv="refresh" content="0; url=${target}">
<script>location.replace(${JSON.stringify(target)} + location.search + location.hash)</script>
</head>
<body>
<p>This page has moved to <a href="${target}">${target}</a>.</p>
</body>
</html>
`;
}

/**
 * @param {{ outDir: string, site: { base: string } }} siteConfig
 * @param {string} hostname e.g. 'https://warp-ds.github.io/docs/'
 */
export function writeRedirectStubs(siteConfig, hostname) {
  const map = loadRedirects();
  const base = siteConfig.site.base.replace(/\/$/, '');
  let count = 0;
  for (const [from, to] of Object.entries(map)) {
    if (!OLD_URL_PREFIX.test(from)) throw new Error(`Redirect key not covered by OLD_URL_PREFIX: ${from}`);
    if (map[to]) throw new Error(`Redirect chain: ${from} -> ${to} -> ${map[to]}`);
    const file = from.endsWith('/')
      ? join(siteConfig.outDir, from, 'index.html')
      : join(siteConfig.outDir, `${from}.html`);
    if (existsSync(file)) throw new Error(`Redirect stub would overwrite a real page: ${from}`);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, stub(`${base}${to}`, `${hostname.replace(/\/$/, '')}${to}`));
    count++;
  }
  console.log(`  ✓ wrote ${count} redirect stubs`);
}
