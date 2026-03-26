# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Warp Design System documentation site, built with VitePress. It documents UI components across multiple frameworks: React, React 19, Vue, Elements (Web Components), Android, and iOS.

## Common Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server with hot reload
pnpm build            # Build static site (outputs to docs/.vitepress/dist)
pnpm build:skill      # Generate the committed agent skill in skills/warp-docs
pnpm serve            # Serve built site locally
pnpm check            # Run Biome linting + formatting (with auto-fix)
pnpm check:skill      # Verify the generated skill is up to date
pnpm lint             # Lint only (with auto-fix)
pnpm format           # Format only (with auto-fix)
pnpm lint:check       # Lint without fixing (CI check)
pnpm generate-frameworks  # Regenerate frameworks-manifest.json from component files
```

## Architecture

### Content Structure

```
docs/
├── .vitepress/          # VitePress config, custom Vue components, theme
├── components/          # Component documentation (alert, button, etc.)
│   └── {component}/
│       ├── overview.md
│       ├── usage.md
│       ├── accessibility.md
│       └── frameworks/   # Per-framework implementation docs
│           ├── vue.md
│           ├── react.md
│           ├── react-19.md
│           ├── elements.md
│           ├── android.md
│           └── ios.md
├── patterns/            # UI pattern documentation (same structure as components)
├── foundations/         # Design tokens, colors, typography, spacing
├── get-started/         # Developer/designer onboarding guides
└── blog/                # Release notes and updates
```

### Framework Manifest System

The sidebar for components/patterns is auto-generated from a manifest file:

1. Framework docs live at `docs/components/{name}/frameworks/{framework}.md`
2. Running `pnpm generate-frameworks` scans these files and updates `docs/.vitepress/frameworks-manifest.json`
3. `sidebar-generator.js` reads the manifest to build navigation
4. Pre-commit hook auto-regenerates manifest when framework files change

### Custom Documentation Components

These Vue components are registered globally for use in markdown files:

| Component | Purpose |
|-----------|---------|
| `<ComponentsStatus />` | Shows framework support badges at top of component pages |
| `<FrameworkTabs />` | Framework switcher tabs on implementation pages |
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

1. Create `docs/components/{component-name}/` with `overview.md`, `usage.md`, `accessibility.md`
2. Add framework implementation docs in `frameworks/` subdirectory
3. Run `pnpm generate-frameworks` to update the manifest
4. The component will auto-appear in the sidebar

## Notes

- Always use Context7 MCP when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.
