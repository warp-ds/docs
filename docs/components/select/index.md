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
description: A dropdown component allows users to choose a single value from a list
  of options in a limited space.
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

## Overview
Selects (sometimes known as "dropdowns" or "pickers") allow users to choose from a list of options in a limited space. The list of options can change based on the context.

## Example
<ThemeSwitcher />
<select-example />

## Usage

<component-design-guidelines name="Warp - Components / Select" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=384-34748&mode=design" />

### Accessibility

If a visible label isn't specified, an `aria-label` should be provided to the
Select for accessibility. If the field is labeled by a separate element, an
`aria-labelledby` prop should be provided using the id of the labeling element
instead.

## Framework(s)
<DsCodeTabs />

<component-questions />