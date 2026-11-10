<!-- Draft for warp-ds/elements. Not filed. -->

# Docs: links in package docs resolve to `/docs/docs/…` on the Warp docs site

## Problem

Several package docs in this repo link to other components with root-relative links that already include the docs site base, for example:

```md
[Alert](/docs/components/alert/overview)
```

The Warp docs site (warp-ds/docs, VitePress, `base: '/docs/'`) pulls these files in with `<!--@include: …/node_modules/@warp-ds/elements/dist/docs/<component>/*.md-->`. VitePress adds the base to root-relative Markdown links, so the link renders as `/docs/docs/components/alert/overview`, which is a 404 on https://warp-ds.github.io.

Seen in `@warp-ds/elements@2.13.0`:

| File | Line(s) | Link |
|---|---|---|
| `packages/badge/docs/accessibility.md` | 36 | `[Alert](/docs/components/alert/overview)` |
| `packages/badge/docs/usage.md` | 54 | `[Alert](/docs/components/alert/overview)` |
| `packages/toast/docs/usage.md` | 25 | `[Alert](/docs/components/alert/overview)` |
| `packages/toast/docs/examples.md` | 13, 23 | `[Alert](/docs/components/alert/overview)` |

Related: `packages/icon/docs/usage.md` line 3 links to `https://warp-ds.github.io/docs/components/icons/overview`. That works today only through a redirect.

## Context: new docs URLs

The docs site is being split into Web / iOS / Android sections. Old URLs keep working via redirects, but the canonical Web URLs become:

- `/web/components/alert/overview` (was `/components/alert/overview`)
- `/web/components/icons/overview` (was `/components/icons/overview`)

## Suggested fix

Inside the package docs, link without the base, using the new Web paths:

```md
[Alert](/web/components/alert/overview)
```

For the icon docs, use `/web/components/icons/overview` (no host), or `https://warp-ds.github.io/docs/web/components/icons/overview` if the file is also read outside the docs site, for example in Storybook.

## How to verify

In warp-ds/docs, after bumping `@warp-ds/elements`:

```sh
pnpm build && pnpm check:site
```

Then remove the `KNOWN_BROKEN_LINKS` entry in `scripts/check-site.mjs`.
