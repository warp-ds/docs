# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Warp Design System documentation site, built with VitePress. It has shared, platform-agnostic sections (Get started, Design Language, About Warp) and three **independent platform sections: Web, iOS and Android**. Each platform owns its own components and patterns pages. On Web, Warp Elements (web components) is the primary implementation; React, React 19 and Vue are documented as legacy.

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
├── design-language/       # Shared Design Language: about/, tokens, typography, dark mode, dataviz, …
├── patterns/index.md      # Shared Patterns landing page (lists each pattern and its platforms)
├── about/                 # Shared: help/ (FAQ, support, requests, …), whats-new/ (blog), platform-coverage
├── web/
│   ├── foundations/       # Web-only foundation: css-classes, customization, dark-mode, keyboard, font-weights
│   ├── components/{name}/ # overview.md, usage.md, [styling.md], code.md, [accessibility.md]
│   │                      # code.md = Elements; legacy tabs: code-react.md, code-react-19.md, code-vue.md
│   └── patterns/{name}/
├── ios/
│   ├── foundations/       # iOS foundation: tokens, typography, theming, … (written from warp-ios source)
│   ├── components/{name}/ # overview.md, usage.md, code.md, [accessibility.md]
│   └── patterns/{name}/
├── android/               # same shape as ios/
├── _shared/               # opt-in include snippets, never routed (see _shared/README.md)
└── public/                # static assets, served at the same URL (e.g. /components/button/…)
```

- Sources live where they are served (no `rewrites`). Do not put `foo.md` next to a `foo/` folder (GitHub Pages may redirect `/foo` to `/foo/`); that is why the legacy Web code pages are flat siblings (`code-react.md`).
- Platforms are independent: a component page on one platform never has to match another. A platform only lists components it actually has.
- Pages with frontmatter `seeded: true` were copied from the Web docs and still need checking against the platform source. A notice is shown automatically. Remove the flag once reviewed. Pages written from the platform source code but not yet reviewed by the platform team (the iOS/Android foundation pages) use frontmatter `pendingReview: true` instead, which shows a similar notice. Older pages that may be out of date (e.g. Get started guides, also under `get-started/{web,ios,android}/`) use `needsReview: true`.
- Patterns are their own section (as in production): on `/patterns/` and `/{platform}/patterns/…` the sidebar shows only that platform's patterns under the switcher (`patternSidebars` in `sidebar/platform.js`), not Foundation/Components. A platform lists only the patterns it documents (Empty states: iOS + Android).
- The layout is full width (Fluent 2 style): sidebar pinned left, outline pinned right, and a fixed 768px reading column (`--warp-doc-width` in `theme/custom.css`) that does not depend on the page. The home page (`index.md`, `layout: page`, `<HomeLanding />`) keeps the sidebar visible from the start.
- Cross-links between the Design Language and platform foundations are opt-in: a platform foundation page adds frontmatter `designLanguage: /design-language/<topic>/`. Both pages then show the same header switch, `Design Language | Web | iOS | Android` (collected by `pnpm generate-manifest`; a platform with several pages on one topic opens a menu).
- Every doc page gets a context row above the H1 (`PageContext.vue`, `doc-before` slot): a breadcrumb, and on component/pattern pages a `Web | iOS | Android` switch (platforms without the item are shown as unavailable).
- Component and pattern pages have one header on every tab, so switching tabs never moves the content: the H1 is the item name only (`# Alert`), with `<ComponentsStatus />` directly under it (status badges, page tabs, plus the Framework control on Web code pages). The item description (one lead paragraph) is written only on the Overview tab, right after `<ComponentsStatus />`; `config.js` uses it as the meta description of every tab of that item. The "See also" line follows it on Overview and Usage only. Usage, Code, Styling and Accessibility start with their own content. Each tab is a separate page; search results and the browser title add the page kind back (`config.js`: `Web › Alert › Usage`).
- Old URLs (`/components/…`, `/patterns/…`, `/foundations/…`, `/blog/…`, …) redirect via `docs/.vitepress/redirects.json`: stub pages written in `buildEnd` (`build/redirect-stubs.js`), router hooks (`theme/index.js`) and a 404 fallback (`RedirectNotFound.vue`). When you move or delete a page, add an entry (old URL → new URL, no chains).

### Platform Manifest System

The platform sidebars, the header switch and status badges, the Web code tabs and the overview grids are generated from a manifest:

1. Pages live at `docs/{web,ios,android}/{components,patterns}/{name}/{page}.md`
2. `pnpm generate-manifest` (`scripts/generate-manifest.js`) scans them and writes `docs/.vitepress/platform-manifest.json`: per platform and item, its `pages`, `seeded` pages, `status` (frontmatter `status:`, omitted when released) and (Web) `frameworks`; per platform, its top-level `foundations` pages; and `designLanguage`, the reverse map of cross-links. A Web `code.md` with frontmatter `elements: false` means there is no Elements implementation.
3. `sidebar/platform.js` builds each platform tree from the manifest. `sidebar/shared.js` holds the shared sections. `config.js` maps `/web/`, `/ios/`, `/android/` and `/` to the trees.
4. `SidebarComposer.vue` (in the `sidebar-nav-before/after` slots) adds the shared sections, the `PlatformSwitcher` and the other tree. It imports the internal `VPSidebarGroup` from `vitepress/dist/…`, so re-check it when upgrading VitePress (pinned at 1.6.4).
5. The pre-commit hook regenerates the manifest when platform component/pattern pages change.

### Custom Documentation Components

These Vue components are registered globally for use in markdown files:

| Component | Purpose |
|-----------|---------|
| `<ComponentsStatus />` | Page header under the H1: status badges (this platform's implementations: `Elements released`, `React legacy`, …), page tabs (Overview, Usage, Styling, Code, Accessibility), the Framework control on Web Code pages, and the seeded-page notice |
| `<FrameworkTabs />` | Marker after the framework H2 on code pages (`## React`): hides that H2 visually (kept for search). The Framework control itself is rendered by `<ComponentsStatus />` |
| `<NavCards :items variant columns />` | The card grid for overview/landing pages (items in frontmatter: `title`, `text`, `href`, optional `icon` from `CardIcon.vue`, `logo`, `meta`, `disabled`); `variant="row"` for compact related links |
| `<PlatformOverview platform />` | Card grid on a platform overview page (`/web/`, `/ios/`, `/android/`): Get started, Foundation, Components, Patterns (with live counts; Patterns is a disabled card where none are documented) and the shared sections |
| `<DsOverview type platform />` | Filterable grid of a platform's components or patterns |
| `<PlatformCoverage type />` | Generated platform/framework coverage table |
| `<Do>`, `<DoDont>` | Do/Don't guidance blocks with images |
| `<TabsContent>` | Generic tab container with slots |
| `<Cards>`, `<Card>` | Card grid layouts |
| `<ThemeSwitcher />` | Brand theme for the live examples (one choice for the whole site, remembered). On Web component/pattern pages the "Theme" dropdown is always in the page header, right of the tabs, on every tab, so the tag is not needed there (it renders nothing). iOS and Android pages have no live examples, so they have no dropdown. On other pages it renders inline |
| `<WidthController />` | Responsive example container |

### Styling

- **Docs UI system** (end of `theme/custom.css`): one spacing scale (`--warp-space-*`: 4, 8, 12, 16, 24, 32, 48, 64), one radius scale (`--warp-radius-s/m/l/xl`: 8 controls, 12 icon tiles/code/callouts/tables, 24 cards, 32 panels) and one card pattern (flat: 1px border, no shadow; hover turns the border brand red) (`.dc-grid`, `.dc-card` with `--media`, `--row` and `--disabled`). Every card on the site (NavCards, PlatformOverview, the components and patterns grids, What's new, the home page) uses it; reuse it rather than styling new cards.
- Overview and landing pages use `<NavCards>` instead of bullet lists of links.
- Typography: Inter; titles are semibold (600), never bold; body text is near-black (`--vp-c-text-1: #1d1d22`). Headings: H2 48px above, H3 32px, H4 24px.

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
3. On every page, use the item name as the H1 (`# Button`, not `# Button - Usage`) and put `<ComponentsStatus />` directly under it. Write the one-paragraph description on `overview.md` only (then "See also", repeated on `usage.md`); other tabs start with their own content. On code pages, add `<FrameworkTabs />` after the framework H2.
4. Run `pnpm generate-manifest`. The component then appears in that platform's sidebar, overview grid, header switch and the coverage page. Its status badge says "released" unless a page sets frontmatter `status:` (`beta`, `developing`, `planned` or `deprecated`).
5. Run `pnpm build && pnpm check:site`.

## Notes

- Always use Context7 MCP when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.
