// Throwaway (2026-11-09): the component description shows on Overview only; "See also" on Overview + Usage.
// - non-overview tabs: drop the first paragraph after <ComponentsStatus /> when it is the copied description;
// - code*.md and accessibility.md: drop the "See also" paragraph.
// Usage: node redesign/scripts/lead-overview-only.mjs [--dry]
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';

const DRY = process.argv.includes('--dry');
// first paragraphs that are tab content, not a copied description
const KEEP = new Set(['docs/web/components/button-group/code.md', 'docs/web/components/radio-buttons/code.md']);
const isDescription = (p) => p && !/^(<|#|:::|-|\*|\||```|See also)/.test(p) && !p.includes('\n#');

const log = { lead: [], seeAlso: [] };
for (const plat of ['web', 'ios', 'android']) {
  for (const type of ['components', 'patterns']) {
    const dir = `docs/${plat}/${type}`;
    if (!existsSync(dir)) continue;
    for (const name of readdirSync(dir)) {
      if (name.endsWith('.md')) continue;
      for (const page of readdirSync(`${dir}/${name}`).filter((f) => f.endsWith('.md'))) {
        if (page === 'overview.md') continue;
        const file = `${dir}/${name}/${page}`;
        const src = readFileSync(file, 'utf8');
        const marker = '<ComponentsStatus />';
        const at = src.indexOf(marker);
        if (at === -1) continue;
        const head = src.slice(0, at + marker.length);
        const blocks = src.slice(at + marker.length).split(/\n[ \t]*\n/);
        // blocks[0] is the rest of the marker line (usually ''); walk the leading paragraphs
        let i = blocks[0].trim() === '' ? 1 : 0;
        while (i < blocks.length && blocks[i].trim() === '') i++;
        const drop = new Set();
        if (!KEEP.has(file) && isDescription(blocks[i]?.trim())) {
          drop.add(i);
          log.lead.push(file);
          i++;
        }
        const dropSeeAlso = page.startsWith('code') || page === 'accessibility.md';
        if (dropSeeAlso && blocks[i]?.trim().startsWith('See also')) {
          drop.add(i);
          log.seeAlso.push(file);
        }
        if (!drop.size) continue;
        const rest = blocks.filter((_, n) => !drop.has(n)).join('\n\n');
        const out = `${head}\n\n${rest.replace(/^\s+/, '')}`;
        if (!DRY) writeFileSync(file, out);
      }
    }
  }
}
console.log(`description removed: ${log.lead.length} pages; See also removed: ${log.seeAlso.length} pages`);
if (DRY) console.log(log);
