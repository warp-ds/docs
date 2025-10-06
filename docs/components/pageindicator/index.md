---
# Frontmatter reference (keep this comment block):
# - title:        Human-readable component name (Sentence case).
# - description:  One short sentence that also works as SEO meta description.
# - category:     Free text, but keep it consistent (e.g. Actions | Feedback | Forms | Navigation | Data display | Layout | Utilities).
# - frameworks:   Add one entry per platform you document.
#
#   Legal framework names (case-sensitive, exactly as written):
#     React | React 19 | Vue | Elements | Android | iOS | Figma
#   Notes:
#     • Use “iOS” (small i, capital OS) — not iOs/IOS/etc.
#
#   Legal status values (lowercase):
#     released | beta | developing | planned | deprecated | unsupported
#   Tips:
#     • Use lowercase for status.
#     • `reason` is optional, shown when unsupported/planned/etc.
#
title: Page indicator
description: A page indicator shows the total amount of pages (or images) and the
  current page using dots.
category: Actions
placeholder:
  label: Page indicator component
frameworks:
- name: React 19
  status: Beta
- name: iOS
  status: Released
- name: Android
  status: released
---

# {{ $frontmatter.title }}
{{ $frontmatter.description }}

<DsComponentStatus align="left" hide-unsupported />

<!--
DsMainTabs — how it works (for authors)

• This page’s tab bar is generated automatically.
• Create one Markdown file per tab in the SAME folder as this index.md.
• Naming: tab_*.md  (examples: tab_overview.md, tab_usage.md, tab_styling.md, tab_code.md, tab_accessibility.md)
• Default order (when unnamed/unnumbered): Overview → Usage → Styling → Code → Accessibility
• To force a custom order, add a number after tab_:
    tab_10-overview.md, tab_20-usage.md, tab_30-styling.md, tab_40-code.md, tab_50-accessibility.md
• Tab label is taken from the tab file’s frontmatter `title:` if present; otherwise it’s derived from the filename.
• Custom tabs are allowed (e.g. tab_experimental.md → “Experimental”).
• No imports needed — the component discovers and renders these files automatically.
• Heading levels: start content in tab files at `##` (H2). The page H1 comes from the main index.md title.
• Code tab: name the file exactly `tab_code.md`.

That’s it — add/edit/remove tab_*.md files and the UI updates on the next build/refresh.
-->
<DsMainTabs />

<component-questions />
