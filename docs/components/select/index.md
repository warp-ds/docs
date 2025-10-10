---
# Frontmatter reference (keep this comment block):
# - title:        Human-readable component name (Sentence case).
# - description:  One short sentence that also works as SEO meta description.
# - category:     Consistent taxonomy (e.g. Actions | Feedback | Forms | Navigation | Data display | Layout | Utilities).
# - placeholder:  For the overview thumbnail/alt text.
# - frameworks:   Add one entry per platform.
#
#   Legal framework names (case-sensitive):
#     React | React 19 | Vue | Elements | Android | iOS | Figma
#   Notes:
#     • "Figma" is allowed for catalog completeness; it’s ignored by tabs/matrix.
#     • Use “iOS” (capital i + OS).
#
#   Legal status values (lowercase):
#     released | beta | developing | planned | deprecated | unsupported
#   Tips:
#     • Use lowercase for status.
#     • `reason` is optional, shown for unsupported/planned/etc.

title: Select
description: A select is a form input component that lets users choose one option from a predefined list.
category: Forms
placeholder:
  label: Select component
frameworks:
- name: React
  status: released
- name: Vue
  status: released
- name: Elements
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