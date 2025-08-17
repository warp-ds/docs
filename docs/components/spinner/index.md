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

title: Spinner
description: A spinner informs users about the loading of content.
category: Overlays
placeholder:
  label: Spinner component
frameworks:
- name: Android
  status: released
- name: iOS
  status: released
- name: Figma
---
# {{ $frontmatter.title }}
{{ $frontmatter.description }}

<DsComponentStatus align="left" hide-unsupported />

::: warning Native only
For the web implementation of a "spinner", see [CSS - Animation - Spinner](../../foundations/css-classes/animation#spinner).
:::

## Example
<ThemeSwitcher />
<spinner-example />

## Usage

<component-design-guidelines name="Warp - Components / Spinner" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components-2.0?node-id=900-35603&t=jDaOykQhPf30zVST-0" />

## Framework(s)
<DsCodeTabs />

<component-questions />