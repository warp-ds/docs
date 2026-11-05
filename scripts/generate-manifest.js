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

function scanItem(platform, type, name) {
  const dir = join(DOCS, platform, type, name);
  const pages = PAGE_ORDER.filter((p) => existsSync(join(dir, `${p}.md`)));
  if (!pages.length) return null;
  const entry = { title: toTitle(name), pages };
  const seeded = pages.filter((p) => frontmatter(join(dir, `${p}.md`)).seeded === 'true');
  if (seeded.length) entry.seeded = seeded;
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
}

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
