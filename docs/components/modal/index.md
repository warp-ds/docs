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

title: Modal
description: A modal is a focused dialog that temporarily blocks the interface to
  request a specific decision or input. Because it pauses the experience, use it sparingly
  for high-priority tasks.
category: Overlays
placeholder:
  label: Modal component
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
---
# {{ $frontmatter.title }}
{{ $frontmatter.description }}

<DsComponentStatus align="left" hide-unsupported />

## Example
<ThemeSwitcher />
<modal-example />

## Overview
A modal overlays the page and prevents interaction with the underlying UI until the user completes an action (for example, confirm, cancel, or provide required input). This interruption is useful for time-sensitive or high-impact decisions, but it can be disruptive if overused. When a modal is necessary, keep content concise, make the primary action clear, offer a safe dismiss option, and avoid stacking multiple modals.

## Usage
<component-design-guidelines name="Warp - Components / Modal" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=354-18223&mode=design" />

### Accessibility
Modal needs either aria-label or aria-labelledby to be accessible to screen readers.

All dialogs must have a title. Titles appear in bold at the top of the dialog and use a few words to convey the outcome of what will happen if a user continues with an action. Use the property title for this.

## Framework(s)
<DsCodeTabs />

<component-questions />
