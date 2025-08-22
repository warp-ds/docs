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

title: Popover
description: A Popover is a message box that is displayed floating over page content
  after pressing a trigger element, like an info-icon.
category: Overlays
placeholder:
  label: Popover component
frameworks:
- name: React
  status: released
- name: Vue
  status: released
- name: Elements
  status: released
- name: Android
  status: released
---
# {{ $frontmatter.title }}
{{ $frontmatter.description }}

<DsComponentStatus align="left" hide-unsupported />

## Example
<ThemeSwitcher />
<popover-example />

## Usage

<component-design-guidelines name="Warp - Components / Popover" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components?node-id=1308-38513&node-type=canvas&t=kRrtnWerTmpa3PeU-0" />

## Framework(s)
<DsCodeTabs />

<component-questions />