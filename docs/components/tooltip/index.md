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

title: Tooltip
description: A tooltip is a message box that is displayed when a user hovers over
  or gives focus to a UI element.
category: Overlays
placeholder:
  label: Tooltip component
frameworks:
- name: React
  status: released
- name: Vue
  status: released
- name: Elements
  status: released
- name: iOS
  status: released
- name: Android
  status: released
---
# {{ $frontmatter.title }}
{{ $frontmatter.description }}

<DsComponentStatus align="left" hide-unsupported />

## Overview
Tooltips should be used sparingly and contain succinct, supplementary information.

## Example
<ThemeSwitcher />
<tooltip-example />

## Usage

<component-design-guidelines name="Warp - Components / Tooltip" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components-2.0?node-id=1308-38514&t=ypV9S2xFCv8kSzjB-0" />

## Framework(s)
<DsCodeTabs />

<component-questions />