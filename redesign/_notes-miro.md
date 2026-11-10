# Miro notes (raw, read 2026-11-05)

Board: https://miro.com/app/board/uXjVHgLsK-k=/ (2764 items; 4 frames)

## Structure frame (3458764689510072405) — edges verified via connectors
Root "Warp Design System" → Get Started, Using AI, Foundation (Design Language), About Warp, Web, iOS, Android  (7 top-level children; Using AI is top-level, NOT under Get Started)
- Get Started → Design, Web, iOS, Android
  - Design → Getting access / set up (→ Warp in Figma, Designing for multibrand, Building custom components with Warp, Migrate from Fabric), Resources, Required reading
  - Web → Getting access / set up (yellow highlight = open/flagged), Resources, Required reading, Building custom components, Migration (→ From Fabric, From React/Vue)
  - iOS → Getting access / set up, Resources, Required reading
  - Android → Getting access / set up, Resources, Required reading
- Using AI → Agent Skills, Figma Make, Replit
- Foundation (Design Language) → About DS, Design principles (→ Explaining the design language), Colors (→ Primitives), Icons, Illustrations, Typography, Elevation, Dark Mode, Motion, Data Visualisation, Accessbility [sic], UX writing, Language support, Designing for AI
- About Warp → Help (→ FAQ, Support (→ How to contribute, Collaboration needs), Requests, Bug reports), What's new / Change log / Blog
- Web → Foundation (→ General web design guidelines, Resources (→ "Templates/Skills/Plugins" one box, Storybook, <empty box>), Semantic tokens, etc.), Components (→ Component → "Overview - Anatomy, variants / Usage (specific component design guidelines) / Behaviour (Dos and donts) / Code / A11y"), Patterns (→ Pattern → "Usage / Code?")
- iOS → "..."   Android → "..."
Note: "About DS" sits under Foundation, not About Warp.
Outside frame: board also holds an older large map of current site (CSS-classes lists, component nodes w/ Overview/Usage/dos-donts/frameworks) — not in scope.

## Pain Train (3458764647401123392) — green clusters: Navigation/structure, Missing content, Stale content, Presentation, AI tooling integration
Navigation/structure group: Framework information mixed together; awkward navigation structure for different frameworks, design, a11y etc; Sub-par navigation; all frameworks smashed together in the same context; No clear path for each user, ie. iOS dev.
Others: Missing docs; Missing patterns; patterns looks like a dead end; Missing Vend Design Language; No agent skills or plugins; Lacking guidance on using Warp with AI; No AI tool references in getting started; Lacking AI support in general; "How to" for use with agents; Ad-hoc imagery; Inconsistent structure; Inconsistent tone of voice; standardised component pages; Canonical recipes/guidelines for how to design/build things; Missing what is Warp; Warp/Vend Vision; why WARP?; Missing Warp principles - the "Why"; Missing clear connection to Core Experience Strategy; No metrics or data; No way to preview/show native examples; landingpage is a bit boring; What's new doesn't get updated regularly; Lacking versioning details for components; Completeness; Outdated content some places; No contextual examples of how to use components; Missing onboarding tutorials for the different disciplines; No general design, layout, composition guidance; No templates for things other than components; No example gallery (of good designs).

## Suggestion box (3458764651560004297) — green: Site-level navigation, Page-level structure(s), Fill gaps in documentation
Redesign the Portal structure (Web, iOS, Android) + "The current setup was made for a hybrid approach, does not work in the current native one anymore."; Create a simpler navigation for the portal; skills and mcp in "getting started"; Standardise a structure for page types e.g. component pages; Standardise the way we create and display supporting imagery; Add missing docs.

## Let this simmer (3458764651580352659)
Define a clear vision for docs/Portal; Is it a knowledge hub that links to more contextually relevant info elsewhere?; display components on landing page (shadcn); add ready-made UI blocks; Define and standardise change log / version info (+ Can we automate this); Create a "Design for AI" section; Interaction guidelines; composition and layout guidelines; More general design guidance for non-component things; Define a scalable architecture for agents (Design.md, Foundation.md, Component.md, Accessibility.md); Start shaping more complex components (molecules, patterns, templates); user research qs (needs, consumption, what they look for, workflow, tools, expectations, role of docs in flow); Find out if it's worth separating out framework specific information; Find out where disciplines go for framework-specific info; Create a clearer onboarding guide (+ things to do/test before real design/code); What preview mechanisms would be useful? (e.g. Warp Replit template); What AI tools do they need?; Tone of voice; Who should be responsible?
