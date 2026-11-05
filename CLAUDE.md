# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Warp Design System documentation site, built with VitePress. It has shared, platform-agnostic sections (Get started, Foundation / Design Language, About Warp) and three **independent platform sections: Web, iOS and Android**. Each platform owns its own components and patterns pages. On Web, Warp Elements (web components) is the primary implementation; React, React 19 and Vue are documented as legacy.

## Common Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server with hot reload
pnpm build            # Build static site (outputs to docs/.vitepress/dist)
pnpm serve            # Serve built site locally
pnpm check            # Run Biome linting + formatting (with auto-fix)
pnpm lint             # Lint only (with auto-fix)
pnpm format           # Format only (with auto-fix)
pnpm lint:check       # Lint without fixing (CI check)
pnpm generate-manifest    # Regenerate platform-manifest.json from the platform docs tree (alias: generate-frameworks)
pnpm check:site           # After `pnpm build`: redirects, internal links and @include checks
```

## Architecture

### Content Structure

```
docs/
├── .vitepress/            # config, theme, custom Vue components, sidebar/, redirects.json, platform-manifest.json
├── index.md               # Home
├── get-started/           # Shared: design/, web/, ios/, android/ onboarding
├── foundations/           # Shared Foundation (Design Language): about/, tokens, typography, dataviz, …
├── about/                 # Shared: help/ (FAQ, support, requests, …), whats-new/ (blog), platform-coverage
├── web/
│   ├── foundations/       # Web-only foundation: css-classes, customization, dark-mode, keyboard, font-weights
│   ├── components/{name}/ # overview.md, usage.md, [styling.md], code.md, [accessibility.md]
│   │                      # code.md = Elements; legacy tabs: code-react.md, code-react-19.md, code-vue.md
│   └── patterns/{name}/
├── ios/
│   ├── components/{name}/ # overview.md, usage.md, code.md, [accessibility.md]
│   └── patterns/{name}/
├── android/               # same shape as ios/
├── _shared/               # opt-in include snippets, never routed (see _shared/README.md)
└── public/                # static assets, served at the same URL (e.g. /components/button/…)
```

- Sources live where they are served (no `rewrites`). Do not put `foo.md` next to a `foo/` folder (GitHub Pages may redirect `/foo` to `/foo/`); that is why the legacy Web code pages are flat siblings (`code-react.md`).
- Platforms are independent: a component page on one platform never has to match another. A platform only lists components it actually has.
- Pages with frontmatter `seeded: true` were copied from the Web docs and still need checking against the platform source. A notice is shown automatically. Remove the flag once reviewed.
- Old URLs (`/components/…`, `/patterns/…`, `/blog/…`, …) redirect via `docs/.vitepress/redirects.json`: stub pages written in `buildEnd` (`build/redirect-stubs.js`), router hooks (`theme/index.js`) and a 404 fallback (`RedirectNotFound.vue`). When you move or delete a page, add an entry (old URL → new URL, no chains).

### Platform Manifest System

The platform sidebars, the availability line, the Web code tabs and the overview grids are generated from a manifest:

1. Pages live at `docs/{web,ios,android}/{components,patterns}/{name}/{page}.md`
2. `pnpm generate-manifest` (`scripts/generate-manifest.js`) scans them and writes `docs/.vitepress/platform-manifest.json`: per platform and item, its `pages`, `seeded` pages and (Web) `frameworks`. A Web `code.md` with frontmatter `elements: false` means there is no Elements implementation.
3. `sidebar/platform.js` builds each platform tree from the manifest. `sidebar/shared.js` holds the shared sections. `config.js` maps `/web/`, `/ios/`, `/android/` and `/` to the trees.
4. `SidebarComposer.vue` (in the `sidebar-nav-before/after` slots) adds the shared sections, the `PlatformSwitcher` and the other tree. It imports the internal `VPSidebarGroup` from `vitepress/dist/…`, so re-check it when upgrading VitePress (pinned at 1.6.4).
5. The pre-commit hook regenerates the manifest when platform component/pattern pages change.

### Custom Documentation Components

These Vue components are registered globally for use in markdown files:

| Component | Purpose |
|-----------|---------|
| `<ComponentsStatus />` | Platform availability ("Available on: Web · iOS · Android", linking to the same page on each platform); framework badges on Web code pages |
| `<FrameworkTabs />` | Web Code page tabs: Elements + legacy React / React 19 / Vue (renders nothing on iOS/Android) |
| `<DsOverview type platform />` | Filterable grid of a platform's components or patterns |
| `<PlatformCoverage type />` | Generated platform/framework coverage table |
| `<Do>`, `<DoDont>` | Do/Don't guidance blocks with images |
| `<TabsContent>` | Generic tab container with slots |
| `<Cards>`, `<Card>` | Card grid layouts |
| `<ThemeSwitcher />` | Brand theme toggle for examples |
| `<WidthController />` | Responsive example container |

### Styling

- Uses UnoCSS with `@warp-ds/uno` preset for Warp design tokens
- `@warp-ds/preset-docs` provides documentation-specific utilities (prefixed `pd-`)
- Custom shortcuts defined in `config.js`: `ex-font`, `ex-box`, `ex-inner-box`, `ex-pic-no`
- Component safelists defined in `safelist.js`

## Code Style

- Biome for linting/formatting (see `biome.json`)
- Single quotes, trailing commas, semicolons
- 2-space indentation, 120 char line width
- Use `import type` for type-only imports

## Adding a New Component

Add it to each platform that has it; platforms are independent.

1. Web: create `docs/web/components/{name}/` with `overview.md`, `usage.md`, `accessibility.md` and `code.md` (Elements). Add `code-react.md` / `code-react-19.md` / `code-vue.md` only for existing legacy implementations.
2. iOS / Android: create `docs/{ios,android}/components/{name}/` with at least `overview.md` and `code.md`. Write `accessibility.md` only from behaviour verified against the platform source.
3. Put `<ComponentsStatus />` under the H1 of every page, and `<FrameworkTabs />` on Web code pages.
4. Run `pnpm generate-manifest`. The component then appears in that platform's sidebar, overview grid, availability line and the coverage page.
5. Run `pnpm build && pnpm check:site`.

## Notes

- Always use Context7 MCP when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.
