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

title: Combo box
description: A combo box combines a dropdown list with an editable text input, allowing
  users to either select an option or type their own.
category: Actions
placeholder:
  label: Combo box component
frameworks:
- name: React
  status: released
- name: Elements
  status: released
---
# {{ $frontmatter.title }}
{{ $frontmatter.description }}

<DsComponentStatus align="left" hide-unsupported />

A combo box is the combination of an `<input type="text"/>` and a list.
The list is designed to help the user arrive at a value, but the value does not necessarily have to come from that list.
Don't think of it like a `<select/>`, but more of an input with some suggestions.
You can, however, validate that the value comes from the list, that's up to your app.

## Example

![Combobox](/components/combobox.png)

## Framework(s)
<DsCodeTabs />


<component-questions />