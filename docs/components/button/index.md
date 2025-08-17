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

title: Button
description: Buttons initiate events or actions within a page, informing users of
  what to expect next.
category: Actions
placeholder:
  label: Button component
frameworks:
- name: React 19
  status: beta
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
---
# {{ $frontmatter.title }}
{{ $frontmatter.description }}

<DsComponentStatus align="left" hide-unsupported />

## Example
<ThemeSwitcher />
<button-example />

## Usage

<component-design-guidelines name="Warp - Components / Button" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=384-34743&mode=design" />

### Accessibility
If the button doesn't have visible text content, such as when used with only an
icon, an `aria-label` prop must be provided for accessibility.

## Framework(s)
<DsCodeTabs />

<component-questions />