# WARP Portal redesign — kickoff prompt

You are working in the `warp-docs` repository (Warp Design System documentation, VitePress). Your job is to restructure and redesign the WARP Portal in stages. This prompt covers **Stage 0 (Preparation), Stage 1 (Research), Stage 2 (Planning)** and **Stage 3 (Iteration 1: new top-level structure + Web / iOS / Android as independent sections + new navigation shell)**.

Run Stages 0–2 in one go, writing an artifact for each. **Stop after Stage 2 and wait for my explicit approval before changing any code or content under `docs/`.** Then run Stage 3.

---

## 1. Goal

Today the portal mixes all frameworks inside one component tree (`/components/{name}/frameworks/{framework}`). The current setup was made for a hybrid approach and no longer fits a native-first organisation. Target state:

- A small set of **shared, platform-agnostic sections**: Get Started, Foundation (Design Language), About Warp.
- **Three independent platform sections: Web, iOS, Android.** Each owns its own Foundation, Components and Patterns, so each platform can be documented on its own schedule and depth.
- **Common touch points are opt-in, never required**: the shared Foundation (Design Language), cross-links between the same component on other platforms, and an optional shared-snippet mechanism a page *may* use.
- A new navigation shell modelled on the Figma Make prototype: new header, shared sections in the sidebar, plus a **Platform switcher** (Web / iOS / Android) that swaps the platform tree.

## 2. Decisions already made (do not re-litigate)

| Topic | Decision |
|---|---|
| Stack | **Stay on VitePress 1.x.** Keep Biome, UnoCSS (`@warp-ds/uno`, `@warp-ds/preset-docs`), existing Vue components. The Figma Make prototype (React) is a visual + IA reference only. Do not port its code. |
| Content model | **Fully independent pages per platform.** Each platform has its own complete component pages. Duplication is accepted. Shared touch points: cross-platform links, and an optional include mechanism a page can choose to use. Nothing forces a platform to share. |
| Web frameworks | **Elements is primary.** The Web component Code page leads with Elements. React, React 19 and Vue stay as secondary tabs or sub-pages, clearly marked as legacy. |
| Old URLs | **Must keep working via client-side redirects.** GitHub Pages has no server redirects. Every old URL maps to its new URL. |
| Iteration 1 scope | **IA + new navigation shell.** New top-level sections, platform split, content moved, redirects, new header + sidebar with Platform switcher. Visual polish (home page redesign, article layout, typography) comes in a later iteration. |
| Diátaxis | **Guiding principle only** in iteration 1. Use it as a lens for research and IA placement decisions. No Diátaxis frontmatter, no page-type templates, no content rewrites yet. |
| Process | Stages 0–2 run without stopping. **Stop before implementation** with a plan for approval. |
| Artifacts | Markdown in `redesign/` at the repo root (outside `docs/`, not published). |
| Git | Work on a feature branch. **Do not commit, push or open a PR unless I ask.** |

## 3. Sources

Read all of them in Stage 0. Use the tools noted.

1. **Target structure (Miro):** https://miro.com/app/board/uXjVHgLsK-k=/?moveToWidget=3458764689510072405 — frame "Structure" (id `3458764689510072405`). Also read the frames "🚂 The Pain Train 🚂" (`3458764647401123392`), "Suggestion box 📥" (`3458764651560004297`) and "Let this simmer" (`3458764651580352659`). Use the Miro MCP (`miro_canvas_search`, then `miro_canvas_read_as_svg` with `widget_ids`). Connectors give the tree edges: follow `data-start` to `data-end`.
2. **Prototype (Figma Make):** https://www.figma.com/make/xkw5dtWF0hF7JRL0DwNG5c/Design-System-Documentation-Site — `create_session` does **not** support Make files. Call `get_design_context` with `fileKey=xkw5dtWF0hF7JRL0DwNG5c`, `nodeId=0:1` (load `skill://figma/figma-design-to-code/SKILL.md` first), then read `src/App.tsx` and `src/index.css` via `ReadMcpResourceTool` (server `figma`, URI `file://figma/make/source/xkw5dtWF0hF7JRL0DwNG5c/src/App.tsx`). Look at the image resources for visuals. **Note:** the article body copy in the prototype ("Warp is the intelligent terminal…", `brew install --cask warp`) is filler from an unrelated product. Ignore it.
3. **Visual + IA reference:** https://fluent2.microsoft.design/ — study the top-level IA, how platforms are separated, how a component page switches between platforms, what is shared vs platform-specific, header/sidebar behaviour.
4. **Documentation framework:** https://diataxis.fr/ — tutorials / how-to guides / reference / explanation. Use it to judge where content belongs and to spot pages that mix types.
5. **This repo:** `CLAUDE.md`, `docs/.vitepress/config.js`, `sidebar-generator.js`, `sidebar-foundations.js`, `frameworks-manifest.json`, `scripts/generate-frameworks.js`, `.husky/pre-commit`, `docs/.vitepress/theme/index.js`, `FrameworkTabs.vue`, `ComponentsStatus.vue`, `DsFrameworkStatus.md` (components and patterns).
6. **VitePress docs:** use Context7 MCP (per CLAUDE.md) for: multi-sidebar by path, `rewrites`, dynamic routes (`[param].paths.js`), `<!--@include: -->` markdown includes, theme Layout slots and overriding default theme components (`VPSidebar`, `VPNav`), `useRoute`/`useRouter`/`onBeforeRouteChange`, `cleanUrls`, local search config, `transformPageData`/`buildEnd` hooks.

### 3.1 Target structure (transcribed from the Miro "Structure" frame)

```
Warp Design System
├── Get Started
│   ├── Design
│   │   ├── Getting access / set up
│   │   │   ├── Warp in Figma
│   │   │   ├── Designing for multibrand
│   │   │   ├── Building custom components with Warp
│   │   │   └── Migrate from Fabric
│   │   ├── Resources
│   │   └── Required reading
│   ├── Web
│   │   ├── Getting access / set up
│   │   ├── Resources
│   │   ├── Required reading
│   │   ├── Building custom components
│   │   └── Migration → From Fabric, From React/Vue
│   ├── iOS      → Getting access / set up, Resources, Required reading
│   └── Android  → Getting access / set up, Resources, Required reading
├── Using AI → Agent Skills, Figma Make, Replit   (prototype labels it "AI": Claude, Figma Make, Replit)
├── Foundation (Design Language)
│   ├── About DS
│   ├── Design principles → Explaining the design language
│   ├── Colors → Primitives
│   ├── Icons, Illustrations, Typography, Elevation, Dark Mode, Motion
│   ├── Data Visualisation, Accessibility, UX writing, Language support
│   └── Designing for AI
├── About Warp
│   ├── Help → FAQ, Support (How to contribute, Collaboration needs), Requests, Bug reports
│   └── What's new / Change log / Blog
├── Web
│   ├── Foundation
│   │   ├── General web design guidelines
│   │   ├── Resources → Templates, Skills, Plugins, Storybook
│   │   └── Semantic tokens, etc.
│   ├── Components → {Component}: Overview (anatomy, variants), Usage (component design guidelines),
│   │                Behaviour (dos and don'ts), Code, A11y
│   └── Patterns → {Pattern}: Usage, Code?
├── iOS      → same shape as Web ("..." in Miro; the prototype mirrors the Web tree)
└── Android  → same shape as Web
```

Where Miro and the prototype differ (for example "Using AI" placement, whether Behaviour is a separate page), note it in research and propose a resolution in the plan.

### 3.2 Pain points the redesign must address (from "Pain Train" + "Suggestion box")

- Framework information mixed together, all frameworks in one context, awkward navigation for frameworks/design/a11y, no clear path per user (e.g. an iOS dev).
- Inconsistent structure; need standardised component pages and page-level structures.
- Patterns look like a dead end; missing patterns and docs.
- No AI guidance (skills, MCP, plugins) in Getting started.
- Missing "What is Warp" / why / principles; boring landing page.
- No versioning details per component; What's new not updated regularly.
- No way to preview native examples.

Iteration 1 only has to fix the **navigation/structure** items. Record the rest as later-iteration backlog in the plan.

## 4. Current state (verify; may have changed)

- VitePress 1.6.4, `base: '/docs/'`, `cleanUrls: true`, sitemap host `https://warp-ds.github.io/docs/`, local search, `vitepress-plugin-llms` in production, editLink to GitHub.
- Top nav: Get started, Foundations, Components, Patterns, What's new. Sidebars are keyed by path in `config.js`. `/components/` and `/patterns/` sidebars come from `sidebar-generator.js` reading `frameworks-manifest.json`.
- Component page set: `overview.md`, `usage.md`, `styling.md` (some), `accessibility.md`, `frameworks/{android,elements,ios,react,react-19,vue}.md`. About 149 framework pages, about 500 Markdown pages in total.
- `scripts/generate-frameworks.js` scans `docs/{components,patterns}/*/frameworks/*.md`. `.husky/pre-commit` runs `pnpm check` and regenerates the manifest when framework files change.
- Shared components registered in `theme/index.js`: `ComponentsStatus`, `FrameworkTabs`, `DoDont`/`Do`, `TabsContent`, `Cards`/`Card`, `ThemeSwitcher`, `WidthController`, and others.
- Foundations today: accessibility, brands, css-classes, customization, dark-mode, data-visualization, elevation, font-weights, illustrations, keyboard, motion, tokens, typography.
- Other sections: `get-started/` (designers, developers/{web,android,ios}, mission-values-principles), `help/`, `collaborate/`, `blog/`.
- `components/toast` is deprecated in favour of Snackbar.

## 5. Standing rules for this repo (from my memory, they still apply)

- Do/Don't guidance always uses `<DoDont>`, always ships `imgurl` placeholders, overview images use a gray backdrop, few high-quality pairs, none on accessibility pages.
- Toast is deprecated; link Snackbar (`/components/snackbar/overview.md`, which moves under the new structure). The local dead-link error for Toast is expected.
- In design prose (overview/usage/accessibility), web means Elements only: no React/Vue there. Framework code pages keep React/Vue (now as legacy tabs on the Web Code page).
- Verify behaviour and accessibility claims against source (`warp-ds/elements`, `warp-ios`, `warp-android` on GitHub; `gh` is authenticated) before documenting them. When seeding iOS/Android pages, do not copy web behaviour claims across platforms without checking.
- Code style: Biome, single quotes, trailing commas, semicolons, 2-space indent, 120 cols, `import type` for type-only imports.

---

## Stage 0 — Preparation

1. Create a branch `redesign/ia-platform-split` from up-to-date `main`. Run `pnpm install`, `pnpm build` and `pnpm lint:check`. Record the baseline: build time, warnings, dead-link output.
2. Read every source in §3. Confirm or correct §3.1 against the live Miro board.
3. Build a **content inventory** with a small throwaway script (keep it under `redesign/scripts/`, not in `scripts/`). One row per Markdown page: current path, section, component/pattern name, page kind (overview/usage/styling/a11y/framework/guide/other), platform (web/ios/android/shared), framework, title, rough length, inbound-link count, and anything odd (empty, placeholder, deprecated).
4. List every place that hardcodes the current URL shape: `config.js`, sidebar generators, manifest script, husky hook, `ComponentsStatus.vue`, `FrameworkTabs.vue`, `DsFrameworkStatus.md`, `DsOverview.vue`, cards on the home page, in-content links (grep `/components/`, `/patterns/`, `/foundations/`, `frameworks/`), `llms` plugin config, and the warp-docs Claude skills/plugins that assume the old paths (list them; do not change them).

**Artifact:** `redesign/00-preparation.md` (baseline, source notes, hardcoded-path list) + `redesign/inventory.csv`.

## Stage 1 — Research

Answer these questions, with evidence (links, screenshots described in text, code references):

1. **Fluent 2:** top-level IA; how Web / iOS / Android are separated; whether component pages are per platform or shared with a platform switch; what lives in shared "design" pages vs platform pages; header, sidebar and platform-switch interaction; how they handle a component that exists on only some platforms.
2. **Prototype:** list every shell feature (header items, search ⌘K, sidebar accordion, Platform select and its URL-sync behaviour, breadcrumbs, eyebrow, TOC, prev/next, feedback, edit link, mobile drawer, home sections). Mark each one as **iteration 1 (nav shell)** or **later (visual polish)**.
3. **Miro vs prototype vs Fluent 2:** where they disagree, and a recommendation for each.
4. **Diátaxis lens:** for each top-level section and for the component page set, say which Diátaxis types it holds today and where pages mix types. Flag candidates for later splitting. Do not rewrite anything.
5. **VitePress feasibility** (Context7): the best way to (a) render a platform-scoped sidebar with a Platform switcher that follows the URL; (b) extend or override the default theme header and sidebar without forking the whole theme; (c) serve client-side redirects for old `cleanUrls` paths on GitHub Pages (options: generated stub pages with meta-refresh + JS, a router `onBeforeRouteChange` hook with a redirect map, a 404-page fallback). Compare them on SEO, flash of content, search indexing and build cost, and recommend one; (d) keep local search useful across three parallel trees (scoping, or result labels per platform); (e) an optional shared-snippet mechanism (`<!--@include: -->` from a non-routed folder) that stays opt-in.
6. **Coverage matrix:** for each component and pattern, which platforms have docs today (from the manifest + inventory). This decides which platform pages exist after the split.

**Artifact:** `redesign/01-research.md`.

## Stage 2 — Planning (stop for approval at the end)

Produce `redesign/02-ia-plan.md` containing:

1. **Final IA tree** with labels and a **URL scheme**. Default proposal to evaluate (change it if research says otherwise):
   - `/get-started/{design,web,ios,android}/…`, `/get-started/ai/…`
   - `/foundations/…` (shared Design Language)
   - `/about/help/…`, `/about/whats-new/` (blog)
   - `/web/{foundations,components,patterns}/…`, `/ios/…`, `/android/…`
   - Component pages: `/{platform}/components/{name}/{overview,usage,code,accessibility}` (decide whether Behaviour/Do-Don't is its own page or a section of Usage).
2. **Top nav + sidebar spec** for the new shell: header contents, which sections sit in the sidebar, Platform switcher behaviour (default platform, URL as source of truth, remembering the last choice, behaviour on shared pages), mobile behaviour. Map each element to the VitePress mechanism chosen in research.
3. **Content mapping table** for **every** current page: old path → new path(s), action (move / split / copy-to-platform / merge / archive / drop), and notes. Rules for the independent-platform model:
   - **Web** component pages: current `overview`/`usage`/`styling`/`accessibility` content (already Elements-oriented) moves to `/web/…`. `code` = `elements.md` as the main content, with React / React 19 / Vue as legacy tabs or sub-pages.
   - **iOS / Android** component pages: `code` comes from `ios.md` / `android.md`. For overview/usage/a11y, propose a seeding strategy (recommended default: seed only platform-agnostic parts such as anatomy, variants and when-to-use from the current shared pages; mark seeded pages with a frontmatter flag such as `seeded: true` for later review; create platform a11y pages only from content verified against platform source). Show the trade-offs and pick one.
   - A platform section only lists components that platform actually has (per the coverage matrix). Cross-platform links ("Also on iOS · Android") come from the manifest.
   - Current `foundations/` pages: split into shared Design Language vs Web Foundation (e.g. `css-classes`, `customization` likely go to Web; `tokens` may need shared + per-platform parts). Decide per page.
   - Deprecated Toast: decide (archive + redirect to Snackbar is the expected default).
4. **Redirect map** draft: `redesign/redirect-map.json` (old → new for every old URL, including section roots and `/components/{name}` roots) and the chosen redirect mechanism.
5. **Tooling changes:** new manifest shape (per platform), changes to `generate-frameworks.js` (or its replacement), sidebar generator(s), husky hook, `ComponentsStatus` / `FrameworkTabs` / framework-status pages, dead-link config, search config, `CLAUDE.md` updates ("Content Structure", "Framework Manifest System", "Adding a New Component").
6. **Optional shared-snippet convention**: folder, naming, how a page opts in, and that no page is required to use it.
7. **Implementation plan for Stage 3** as ordered, independently verifiable steps (each with "done when…" checks). Order the steps so the build stays green after each one.
8. **Risks and open questions** for me, each with a recommended answer.
9. **Later-iteration backlog**: visual redesign (home, article layout, Fluent-style polish), Diátaxis restructuring, AI section content, versioning per component, native previews, What's new automation, updating the warp-docs skills to the new paths.

Then **stop**. Post a short summary of the plan, the open questions, and the links to the artifacts. Do not touch `docs/` until I approve.

## Stage 3 — Iteration 1 implementation (only after approval)

Follow the approved plan step by step. Expected shape:

1. Scaffold the new folders and section index pages (`/web/`, `/ios/`, `/android/`, `/get-started/…`, `/foundations/`, `/about/`).
2. Move/split content according to the mapping table. Use `git mv` where possible so history survives. Rewrite internal links to the new paths.
3. Replace the manifest and sidebar generation with the per-platform version. Update the husky hook.
4. Build the navigation shell: header (logo + "Docs", search, Changelog, About DS, Get started CTA, GitHub) and sidebar (shared sections + Platform switcher driving the platform tree), via the theme mechanism chosen in the plan. Use Warp tokens/UnoCSS, not hardcoded values. Keyboard and screen-reader accessible (the switcher is a real listbox/menu with correct ARIA, focus management, Escape to close).
5. Implement client-side redirects from `redirect-map.json`.
6. Update `ComponentsStatus`, framework-status pages, home-page cards and `CLAUDE.md`.

**Verification before reporting done:**
- `pnpm build` passes with no new dead links compared to the Stage 0 baseline (the Toast/Snackbar one is expected). `pnpm lint:check` is clean.
- A script checks that every key in `redirect-map.json` resolves to an existing built page.
- Run `pnpm dev` and check in a browser: each top-level section, the Platform switcher on Web/iOS/Android, a component that exists on all three platforms, one that exists on only one, the redirect from an old deep URL (for example `/components/button/frameworks/ios`), the mobile drawer, and keyboard navigation of the switcher. Report what you checked and what you saw, including anything that failed.
- Write `redesign/03-iteration-1-report.md`: what changed, the deviations from the plan and why, known gaps, and the next steps.

Leave changes uncommitted (or ask me before committing). No push, no PR unless I ask.
