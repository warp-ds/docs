#!/usr/bin/env node
// One-off (round 5): every tab of a component/pattern repeats the same "See also" line, so related
// components are one click away on Accessibility and Code too (it used to be on Overview and Usage only).
// The line is copied from overview.md (or usage.md) and inserted after the lead paragraph that follows
// <ComponentsStatus />.
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dryRun = process.argv.includes('--dry-run');
const SEE_ALSO = /^See also .*$/m;
const changed = [];
const problems = [];

for (const platform of ['web', 'ios', 'android']) {
  for (const type of ['components', 'patterns']) {
    const base = join('docs', platform, type);
    if (!existsSync(base)) continue;
    for (const item of readdirSync(base, { withFileTypes: true }).filter((d) => d.isDirectory())) {
      const dir = join(base, item.name);
      const files = readdirSync(dir).filter((f) => f.endsWith('.md'));
      const source = ['overview.md', 'usage.md'].find(
        (f) => files.includes(f) && SEE_ALSO.test(readFileSync(join(dir, f), 'utf8')),
      );
      if (!source) continue;
      const line = readFileSync(join(dir, source), 'utf8').match(SEE_ALSO)[0];
      for (const file of files) {
        const path = join(dir, file);
        const src = readFileSync(path, 'utf8');
        if (SEE_ALSO.test(src)) continue;
        const status = src.match(/^<ComponentsStatus \/>[ \t]*\n+/m);
        if (!status) {
          problems.push(path);
          continue;
        }
        const start = status.index + status[0].length;
        const rest = src.slice(start);
        // the lead paragraph: plain text up to the first blank line (not a heading, component or list)
        const isProse = /^[A-Za-z*_[`]/.test(rest) && !/^[<#|!-]/.test(rest);
        const leadEnd = isProse
          ? start + (rest.search(/\n\s*\n/) === -1 ? rest.length : rest.search(/\n\s*\n/))
          : start;
        const out = isProse
          ? `${src.slice(0, leadEnd)}\n\n${line}${src.slice(leadEnd)}`
          : `${src.slice(0, start)}${line}\n\n${src.slice(start)}`;
        changed.push(path);
        if (!dryRun) writeFileSync(path, out);
      }
    }
  }
}

console.log(JSON.stringify({ changed: changed.length, problems, files: changed }, null, 1));
