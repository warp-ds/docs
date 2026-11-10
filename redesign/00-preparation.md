# Stage 0 — Preparation

Date: 2026-11-05 · Branch: `redesign/ia-platform-split` (from `origin/main` @ `641e231`) · Nothing committed.

## 1. Branch and baseline

- Local `main` was 64 commits behind `origin/main`. I fast-forwarded it (`--ff-only`), then branched. The untracked `redesign/` folder was not touched.
- `pnpm install`: OK (pnpm 11.1.0, VitePress 1.6.4, vitepress-plugin-llms 1.14.0).
- `pnpm build`: **passes**. 20.6 s wall time (19.2 s reported by VitePress). **519 HTML files** (518 pages + `404.html`), plus `llms.txt` / `llms-full.txt` and per-page `.md` copies from the llms plugin. Full log: [baseline/build.log](baseline/build.log).
  - **Dead links: 0 reported.** Caveat: `ignoreDeadLinks` skips every link that starts with `/docs`, and links in Vue `<script>` card arrays are never checked. "0" is therefore a weaker guarantee than it looks. The expected Toast → Snackbar dead link does not show up because the relative link `../snackbar/overview.md` resolves today.
  - 14 asset warnings ("didn't resolve at build time"): `stars-background.svg` ×2, `../../images/{20s-scientists.jpg, 50s-scientists.jpg, 50s-scientists_240.jpg, office-warping.png, repeatable.png}` ×2 each, `...` ×2.
  - 1 chunk-size warning (>500 kB).
  - 1 Rollup warning: `wButton` imported but unused in `docs/components/radio-buttons/Example.vue`.
- `pnpm lint:check`: **clean** (78 files, no fixes). Log: [baseline/lint.log](baseline/lint.log).
- Baseline URL list for redirect coverage: [baseline/old-urls.txt](baseline/old-urls.txt) (518 URLs; identical to the inventory routes).

## 2. Sources read

| # | Source | How | Notes |
|---|---|---|---|
| 1 | Miro board, frames Structure / Pain Train / Suggestion box / Let this simmer | Miro MCP `canvas_search` + `canvas_read_as_svg`, tree rebuilt from connector `data-start`→`data-end` | Raw transcription: [_notes-miro.md](_notes-miro.md) |
| 2 | Figma Make prototype `xkw5dtWF0hF7JRL0DwNG5c` | `get_design_context` (node `0:1`), then `src/App.tsx`, `src/index.css` and 2 of the 16 PNGs (all are iteration screenshots of the same shell) | Raw notes: [_notes-prototype.md](_notes-prototype.md). Article filler copy ignored. |
| 3 | Fluent 2 | Background agent: decoded the Astro `Nav` island props, read the Nav/const JS bundles, `sitemap-0.xml` (131 URLs) and the public Algolia index | Summarised in [01-research.md §1](01-research.md#1-fluent-2) |
| 4 | Diátaxis | `diataxis.fr`, `/compass/`, `/how-to-use-diataxis/` | Summarised in [01-research.md §4](01-research.md#4-diátaxis-lens) |
| 5 | This repo | All files in the brief, plus `bootExamples.js`, `posts.data.js`, `scripts/review-docs.mjs`, `.github/workflows/*` | §4 below |
| 6 | VitePress docs | **Context7 MCP is not connected in this session.** I used the VitePress **v1** docs (`vuejs.github.io/vitepress/v1/`; `vitepress.dev` now documents 2.0 alpha) and checked against the installed `node_modules/vitepress` 1.6.4 source | [01-research.md §5](01-research.md#5-vitepress-feasibility) |

### 2.1 §3.1 checked against the live Miro board

The transcription in the kickoff prompt is **correct edge for edge**. Small details it leaves out:

- Root has **7 children**. "Using AI" is a direct child of the root, not of Get Started.
- **"About DS" sits under Foundation (Design Language)**, not under About Warp.
- Get Started › **Web › "Getting access / set up" is highlighted yellow** (flagged or undecided). It is the only highlighted node.
- Web › Foundation › Resources has a **fourth, empty child box** next to "Templates / Skills / Plugins" (one box) and "Storybook". The prototype renders it as "Type something".
- iOS and Android only have "..." children.
- "Accessbility" is misspelled on the board (cosmetic).
- Outside the four frames, the board also holds a large older map of the **current** site (lists of CSS-class pages, component nodes with Overview / Usage / dos-donts / frameworks). That map is out of scope and was not used.

## 3. Content inventory

Script: [scripts/inventory.mjs](scripts/inventory.mjs) (throwaway, `node redesign/scripts/inventory.mjs docs redesign/inventory.csv`). Output: [inventory.csv](inventory.csv), one row per page. Columns: `path, url, section, item, page_kind, platform, framework, title, words, lines, inbound_links, flags`.

| Measure | Value |
|---|---|
| Markdown pages | **518** (components 261, foundations 163 of which css-classes 124, blog 67, get-started 12, patterns 7, help 4, collaborate 2, root 2) |
| Page kinds | framework 151 · guide 179 · blog-post 66 · overview 41 · usage 41 · accessibility 26 · styling 5 · section-index 5 · status 2 · home 1 · other 1 |
| Platform (by path) | web 219 · shared 121 · shared-but-web-oriented (component overview/usage/a11y) 113 · iOS 34 · Android 31 |
| Component dirs | 40 + 1 pattern (`empty-states`) |
| In-progress stubs | **18 of 41 Usage pages** are `<InProgressStatus />` placeholders, plus `logo/frameworks/ios` |
| Live web examples | **33 of 41 Overview pages** embed `<w-*>` / `*-example` web components. They cannot be copied to native pages as they are. |
| Near-empty (<40 words) | 33 pages (mostly the stubs above; also `get-started/developers/web/web-components`, `help/report-bugs`, `patterns/index`) |
| Orphans | 368 pages have 0 inbound content links. Expected: navigation comes from the sidebar. Notable real orphans: `/pre-migrating` (stale Fabric note, not in any sidebar) and `/get-started/developers/web/web-components` (one-line pointer). |
| Deprecated | `components/toast/*` (overview, usage and a11y say "deprecated in favour of Snackbar") |
| Uses `@include` | 27 Elements framework pages include `node_modules/@warp-ds/elements/dist/docs/<c>/*.md` through depth-relative paths |
| Manual table drift | `components/DsFrameworkStatus.md` is out of sync with the manifest: it is missing `confirmation-dialog` and `logo`, and some statuses are stale |

## 4. Places that hardcode the current URL shape

| Where | What is hardcoded | Impact |
|---|---|---|
| `docs/.vitepress/config.js` | `nav` (`/get-started/`, `/foundations/`, `/components/`, `/patterns/`, `/blog/`); sidebar keys `/`, `/get-started/`, `/foundations/`, `/components/`, `/patterns/`; ~20 literal links in the get-started/help/collaborate sidebars; `ignoreDeadLinks: url.startsWith('/docs')`; `editLink` pattern (path-agnostic, fine) | Rewrite |
| `docs/.vitepress/sidebar-generator.js` | `/${type}/${name}/${page}` and `/${type}/${name}/frameworks/${file}`; `/components/DsFrameworkStatus`, `/patterns/DsFrameworkStatus`; page order `overview, usage, styling, frameworks, accessibility` | Replace |
| `docs/.vitepress/sidebar-foundations.js` | ~150 literal `/foundations/...` links (124 css-classes) | Split into shared and Web |
| `docs/.vitepress/frameworks-manifest.json` | `{components:{name:[{name,file}]}, patterns:{…}}`; framework = file name | Replace with per-platform shape |
| `scripts/generate-frameworks.js` | globs `docs/components/*/frameworks/*.md` and `docs/patterns/*/frameworks/*.md`, name at path index 2 | Replace |
| `scripts/update-framework-status.js` | rewrites `components/DsFrameworkStatus.md` and `patterns/DsFrameworkStatus.md` tables | Retire (the status page becomes generated) |
| `scripts/frameworks-title-touchup.js`, `scripts/move-docs.js` | old globs; `move-docs` copies `components, patterns, foundations…` to `../warp-documentation` | Legacy one-off tools. Leave as they are and note them. |
| `.husky/pre-commit` | regex `docs/(components\|patterns)/.*/frameworks/.*\.md$` → `pnpm generate-frameworks` | Update |
| `docs/.vitepress/ComponentsStatus.vue` | parses `route.path` for `components`/`patterns` + item at index 1; manifest lookup | Rewrite (platform availability) |
| `docs/.vitepress/FrameworkTabs.vue` | same parsing; tabs `href="./{file}"` (relative to `frameworks/`); hides the preceding H2 | Rewrite (Web code tabs) |
| `docs/.vitepress/DsOverview.vue` | `import.meta.glob('../components/*/placeholder.svg')`, `'../patterns/*/placeholder.svg'`; `href: /${type}/${slug}/overview`; framework filter chips | Add a platform prop |
| `docs/.vitepress/bootExamples.js` | 19 imports `../components/<c>/*.vue` (button-group, callout×3, combo-box, icons×2, modal, popover×4, radio-buttons, toast, tooltip×4, utilities) | Update paths; drop Toast |
| `docs/components/DsFrameworkStatus.md`, `docs/patterns/DsFrameworkStatus.md` | manual matrices | Replace |
| `docs/components/index.md`, `docs/patterns/index.md` | `<DsOverview type=…>` | Replace with platform indexes |
| `docs/index.md` (home) | script card hrefs: `foundations/css-classes/unocss`, `components/icons/overview`, `foundations/css-classes/background-color#quick-reference`, `foundations/tokens/intro/`, `foundations`, `components`, `patterns`, `get-started` | Update (the dead-link checker does not see these) |
| `docs/get-started/index.md` | script cards: `mission-values-principles`, `developers/web/`, `developers/ios/`, `developers/android/`, `designers/warp-in-figma/` | Update |
| `docs/foundations/index.md`, `foundations/data-visualization/introduction/index.md` | script card arrays (`page.href`) | Update |
| `docs/blog/posts.data.js` | `createContentLoader('/blog/posts/**/*.md')`, `url: /docs${page.url}` | Update glob |
| In-content links | 213 `](/components/…)` links (147 point to `…/overview.md`), 339 `](/foundations/…)` (mostly images), 23 `](/get-started/…)`, 2 `](/patterns/…)`, 1 help/collaborate, 35 relative `](../…)`/`](./…)`, 0 `](/docs/…)` | Rewrite with a script |
| `@include` paths | 27 Elements pages: `<!--@include: ../../../../node_modules/@warp-ds/elements/dist/docs/<c>/<part>.md-->`. Paths are **relative to file depth**, and **a missing include fails silently** (the comment stays in the output). | Keep the same depth, or switch to `@/../node_modules/...`; verify |
| Images | 111 `imgurl="/docs/components/…"`, 122 `src="/components|patterns|foundations/…"`, markdown images under `/foundations/dataviz/…`, `/components/<c>/…`. All are served from `docs/public/…`. | **No change needed.** Public assets keep their URLs. |
| `vitepress-plugin-llms` | `llmstxt()` with no options. It derives `llms.txt` from the page tree. | No hardcoding; output follows the new tree |
| `scripts/review-docs.mjs` + `.github/workflows/docs-review.yml` | `docs/components/${c}/overview.md`, `docs/components/**`, `docs/public/components/**`, `/docs/components/` → `docs/public` | Update (CI docs review would otherwise stop triggering) |
| `CLAUDE.md` | "Content Structure", "Framework Manifest System", "Adding a New Component" | Update |

### 4.1 Claude skills and plugins that assume the old paths (listed only, not changed)

| Skill / plugin | Location | Assumptions |
|---|---|---|
| `warp-docs-skills` plugin v1.1.0 (`document-component`, `audit-component`, `list-components`) | `~/.claude/plugins/cache/warp-docs/warp-docs-skills/1.1.0/` (source: `github.com/warp-ds/warp-docs-skills`, marketplace clone in `~/.claude/plugins/marketplaces/warp-docs/`) | `config.json`, `PROMPT.md`, `README.md` and the three `SKILL.md` files use `docs/components/<name>/{overview,usage,accessibility}.md`, `frameworks/<fw>.md`, `frameworks-manifest.json`, `pnpm generate-frameworks` |
| User-level copies: `warp-docs` (incl. `audit-run`), `audit-component`, `document-component`, `list-components` | `~/.claude/skills/…` | Same paths; `audit-run` also uses `docs/components/<name>/DoDonts/<page>-<topic>-{do,dont}.svg` and `docs/components/alert/{overview,usage,accessibility}.md` |
| `warp-docs-audit` | listed as a skill; same family as `audit-run` | Same assumptions |
| Memory rule "Toast is deprecated" | auto-memory | Links `/components/snackbar/overview.md`, which becomes `/web/components/snackbar/overview` |

`warp-design` (`~/.claude/skills/warp-design`) does not reference docs paths.
