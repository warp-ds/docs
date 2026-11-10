# Figma Make prototype notes (raw, read 2026-11-05)

File: xkw5dtWF0hF7JRL0DwNG5c (React + Tailwind v4, single App.tsx, hash routing `#<node-id>`). 16 PNGs = iteration screenshots of the same shell (Getting access / set up page).

## Nav tree in code (differs from Miro)
- Get Started → Design / Web / iOS / Android (each: Getting access / set up, Resources, Required reading) **+ AI (Claude, Figma Make, Replit)** — AI nested under Get Started, labelled "AI", "Agent Skills" → "Claude".
- Design subtree has no Warp in Figma / multibrand / custom comp / Migrate children; Web has no Building custom components / Migration.
- Foundation (Design Language): About DS, Design principles (→ Explaining the design language), Colors (→ Primitives), Icons, Illustrations, Typography, Elevation, Dark Mode, Motion, Data Visualisation, Accessibility, UX writing, Language support. **No "Designing for AI"**.
- About Warp → Help (FAQ, Support → How to contribute / Collaboration needs, Requests, Bug reports), What's new / Change log / Blog.
- Web / iOS / Android (identical via createPlatformChildren): Foundation (General [web] design guidelines, Resources → Templates/Skills/Plugins/Storybook/"Type something", Semantic tokens, etc.), Components → Component → Overview, Usage, Code, A11y (**no Behaviour page**), Patterns → Pattern → Usage, Code.

## Shell features
Header (fixed, 68px, blur): logo mark + "warp" | "Docs" (→ home); search trigger "Search documentation ⌘K"; Changelog link; About DS link; "Get started" primary button (→ design-access). Mobile ≤820px: hamburger left, divider+Docs hidden, search collapses to icon, CTA + top links hidden (top links hidden ≤1040px).
Sidebar (292px, surface bg): shared sections rendered as uppercase accordion headers (Get Started, Foundation, About Warp); nested branches collapsible (all closed by default, state not persisted); active item highlighted with aria-current=page. Divider, then "PLATFORM" label + custom select (button aria-haspopup=listbox, aria-expanded; menu role=listbox with role=option buttons, aria-selected, ✓ on selected; Escape closes; no arrow-key handling, no focus management) + the selected platform's tree below.
Platform select behaviour: initial platform = platform containing the current page id, else 'web'. Navigating to any platform page sets the platform (URL → switcher sync). Changing platform **navigates to the first page of that platform** (Foundation › General design guidelines) — does not try to keep the same component. Choice not persisted (no localStorage).
Sidebar footer: "All systems operational" status dot (filler).
Mobile drawer: slides in from left, scrim button closes, heading "Documentation" + close button. No focus trap.
Search: ⌘K/Ctrl+K opens modal dialog (role=dialog aria-modal), autofocus input, "Suggested pages" (first 7) when empty, result rows = label + section, footer hints ↑↓ ↵ esc (arrow nav not implemented), ESC closes, overlay click closes.
Article page: breadcrumbs (Docs / section / … parent), eyebrow = top section name, H1, lede (description), meta "Updated this week • 4 min read", sections separated by rules, callout "In this guide", numbered steps, dark code block with Copy button, "Where to go next" 2 cards (next pages), footer "Was this page helpful? Yes/No" + "Edit this page ↗", prev/next pagination, right TOC "On this page" sticky + divider + "Give feedback". Content max 720px + 180px TOC.
Home: hero (eyebrow, big H1 "Design, build, and ship coherent experiences.", lede, Get started button), "Explore the system" 3 numbered cards (Foundations, Components, Patterns), "Quick links" 2x2 (CSS classes, Icons, Colors, Templates), dark "Collaborate" band (How to contribute, Submit a request, Get help).
Visual tokens: neutral greys (#171716 ink, #f8f8f7 surface, #e5e5e1 line), Inter, accent = ink (black). Not Warp tokens — translate to Warp semantic tokens.
Filler to ignore: article body ("Warp is the intelligent terminal…", brew install), meta text, status footer.
