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

title: Text field
description: A single-line text input component.
category: Forms
placeholder:
  label: Text field component
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
<textfield-example />

## Usage

<component-design-guidelines name="Warp - Components / Input" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=162-3118&mode=design&t=BeQTJcCWRTnsK9fC-0" />

### Accessibility

If a visible label isn't specified, an `aria-label` must be provided to the text field for accessibility.
If the field is labeled by a separate element, an `aria-labelledby` prop must be provided using the id of the labeling element instead.

## Framework(s)
<DsCodeTabs />

<component-questions />