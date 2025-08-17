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

title: Checkbox
description: Checkboxes allow users to select one or more options from a number of
  choices.
category: Forms
placeholder:
  label: Checkbox component
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
<checkbox-example />

## Usage

<component-design-guidelines name="Warp - Components / Checkbox" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components-2.0?m=auto&node-id=381-40975&t=LAzGLAB7cHRWfpOJ-1" />

## Framework(s)
<DsCodeTabs />

<component-questions />