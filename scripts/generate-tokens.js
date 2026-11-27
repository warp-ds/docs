import { readFileSync, writeFileSync } from 'node:fs';

/**
 * Builds docs/.vitepress/tokens.json, the data behind the <TokenTable /> on the tokens overview page.
 *
 * Source: the published theme CSS files, at the same @warp-ds/css version the docs depend on.
 * Each brand file holds both modes: a `data-w-theme=light` block and a `data-w-theme=dark` block.
 * Only semantic colour tokens (`--w-s-color-*`) are kept. Each one is resolved to
 * [primitive name, hex], e.g. ['blue-600', '#0063fb'].
 *
 * Run with: pnpm generate-tokens
 */

// Same order as warp-theme-switcher.js. `id` is the theme file name on assets.finn.no.
const brands = [
  { id: 'dba-dk', name: 'DBA' },
  { id: 'finn-no', name: 'Finn' },
  { id: 'tori-fi', name: 'Tori' },
  { id: 'blocket-se', name: 'Blocket' },
  { id: 'neutral-com', name: 'Neutral' },
  { id: 'vend-com', name: 'Vend' },
];
const modes = ['light', 'dark'];
const prefix = '--w-s-color-';
const outFile = 'docs/.vitepress/tokens.json';
// Tokens left out of the table until we confirm they are in use. Delete the pattern to bring them back.
// icon-notification: waiting on devs to confirm it is used anywhere in code.
const hiddenTokens = [/^icon-.*notification/];

const { version } = JSON.parse(readFileSync('node_modules/@warp-ds/css/package.json', 'utf8'));

function parseBlocks(css) {
  return [...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)].map(([, selector, body]) => ({
    selector: selector.trim(),
    decls: Object.fromEntries(
      body
        .split(';')
        .filter(Boolean)
        .map((decl) => {
          const i = decl.indexOf(':');
          return [decl.slice(0, i), decl.slice(i + 1)];
        }),
    ),
  }));
}

function resolveMode(brand, mode, blocks) {
  const block = blocks.find(
    (b) => b.selector.includes(`data-w-theme=${mode}`) && Object.keys(b.decls).some((k) => k.startsWith(prefix)),
  );
  if (!block) throw new Error(`${brand} (${mode}): no block with semantic colour tokens found`);

  const tokens = {};
  for (const [name, value] of Object.entries(block.decls)) {
    if (!name.startsWith(prefix)) continue;
    if (hiddenTokens.some((pattern) => pattern.test(name.slice(prefix.length)))) continue;
    const ref = value.match(/^var\((--[a-z0-9-]+)\)$/)?.[1];
    const hex = ref && block.decls[ref];
    if (!hex?.startsWith('#')) {
      throw new Error(`${brand} (${mode}): ${name} does not resolve to a primitive hex value (got "${value}")`);
    }
    tokens[name.slice(prefix.length)] = [ref.slice('--w-'.length), hex];
  }
  return tokens;
}

const values = {};
for (const { id } of brands) {
  const url = `https://assets.finn.no/pkg/@warp-ds/css/${version}/tokens/${id}.css`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Could not fetch ${url} (HTTP ${response.status})`);
  const blocks = parseBlocks(await response.text());
  values[id] = Object.fromEntries(modes.map((mode) => [mode, resolveMode(id, mode, blocks)]));
}

// Every brand and mode must define exactly the same tokens, or the table would have gaps.
const tokenNames = Object.keys(values[brands[0].id].light);
for (const { id } of brands) {
  for (const mode of modes) {
    const names = Object.keys(values[id][mode]);
    const missing = tokenNames.filter((n) => !names.includes(n));
    const extra = names.filter((n) => !tokenNames.includes(n));
    if (missing.length || extra.length) {
      throw new Error(`${id} (${mode}) differs from ${brands[0].id} (light). Missing: ${missing}. Extra: ${extra}`);
    }
  }
}

const data = { version, prefix, brands, tokens: tokenNames, values };
writeFileSync(outFile, `${JSON.stringify(data, null, 2)}\n`);
console.log(
  `Wrote ${outFile}: ${tokenNames.length} tokens x ${brands.length} brands x ${modes.length} modes (@warp-ds/css ${version})`,
);
