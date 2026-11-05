# Shared snippets (opt-in)

This folder is **not routed** (`srcExclude` in `config.js`) and not indexed by search.

A platform page *may* reuse a platform-agnostic fragment from here; no page is required to:

```md
<!--@include: @/_shared/components/button/anatomy.md-->
<!--@include: @/_shared/components/button/anatomy.md#variants-->
```

- Layout: `_shared/{components|patterns|foundations}/{name}/{topic}.md`; optional regions with `<!-- #region name -->` … `<!-- #endregion name -->`.
- Keep snippets platform-agnostic: no code, no behaviour or accessibility claims.
- Use absolute links only (relative links are not rebased when included).
- `pnpm check:site` fails on an include that does not resolve (VitePress leaves missing includes silently).
