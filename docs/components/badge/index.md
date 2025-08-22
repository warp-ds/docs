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

title: Badge
description: Badge is used for showing a small amount of non-interactive color-categorized
  metadata, like a status or count.
category: Layout
placeholder:
  label: Badge component
frameworks:
- name: React
  status: released
- name: Vue
  status: released
- name: Elements
  status: released
- name: Android
  status: released
- name: iOS
  status: released
- name: Figma
---
# {{ $frontmatter.title }}
{{ $frontmatter.description }}

<DsComponentStatus align="left" hide-unsupported />

## Example
<ThemeSwitcher />
<badge-example />

## Usage

<component-design-guidelines name="Warp - Components / Badge" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=249-11911&mode=design&t=CxdPkiD3C2rBtqKv-0" />

## Framework(s)

<DsCodeTabs />

<component-questions />