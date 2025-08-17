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

title: Radio
description: Radios allow users to select a single option from a list.
category: Forms
placeholder:
  label: Radio component
frameworks:
- name: React
  status: released
- name: Vue
  status: released
- name: Android
  status: released
- name: iOS
  status: released
---
# {{ $frontmatter.title }}
{{ $frontmatter.description }}

<DsComponentStatus align="left" hide-unsupported />

## Example
<ThemeSwitcher />
<radio-example />

## Usage
<component-design-guidelines name="Warp - Components / Radio Button" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=377-23900&mode=design" />

## Framework(s)
<DsCodeTabs />

<component-questions />