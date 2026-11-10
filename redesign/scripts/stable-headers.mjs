#!/usr/bin/env node
// One-off (round 4): give every component/pattern page the same header on every tab.
//   "# Alert - Overview" -> "# Alert", and <ComponentsStatus /> moves directly under the H1, so the
//   header (breadcrumb row, H1, page tabs) is identical across Overview / Usage / Code / Accessibility.
//   The page-specific lead paragraph(s) stay where they are and now start the page body.
// Search results and the browser title get the page kind back from config.js (`_render`, `transformPageData`).
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dryRun = process.argv.includes('--dry-run');
let changed = 0;
const problems = [];

for (const platform of ['web', 'ios', 'android']) {
  for (const type of ['components', 'patterns']) {
    const base = join('docs', platform, type);
    let items = [];
    try {
      items = readdirSync(base, { withFileTypes: true }).filter((d) => d.isDirectory());
    } catch {
      continue;
    }
    for (const item of items) {
      for (const file of readdirSync(join(base, item.name)).filter((f) => f.endsWith('.md'))) {
        const path = join(base, item.name, file);
        const src = readFileSync(path, 'utf8');
        const h1 = src.match(/^# (.+)$/m);
        const status = src.match(/^<ComponentsStatus \/>[ \t]*\n/m);
        if (!h1 || !status || status.index < h1.index) {
          problems.push(path);
          continue;
        }
        const name = h1[1].replace(/\s+-\s+[^-]+$/, '').trim();
        const headerEnd = h1.index + h1[0].length;
        const between = src
          .slice(headerEnd, status.index)
          .replace(/^\n+/, '')
          .replace(/\n{3,}/g, '\n\n');
        const after = src.slice(status.index + status[0].length);
        const lead = between.trim() ? `${between.replace(/\n+$/, '')}\n\n` : '';
        const out = `${src.slice(0, h1.index)}# ${name}\n\n<ComponentsStatus />\n\n${lead}${after.replace(/^\n+/, '')}`;
        if (out !== src) {
          changed++;
          if (!dryRun) writeFileSync(path, out);
        }
      }
    }
  }
}

console.log(JSON.stringify({ changed, problems }));
