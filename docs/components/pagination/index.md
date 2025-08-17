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

title: Pagination
description: Pagination is used to split up long datasets into multiple 'pages'
category: Navigation
placeholder:
  label: Pagination component
frameworks:
- name: React
  status: released
---
# {{ $frontmatter.title }}
{{ $frontmatter.description }}

<DsComponentStatus align="left" hide-unsupported />

## Overview
Pagination is used on various listing pages. It's typically found at the end of search result pages, My Ads, Favorite lists, or anywhere a long list of items are divided up and presented to users over multiple pages. Since pagination is a fairly basic and familiar feature, it's reasonable to expect that users would benefit from a consistent design and behaviour. Consistency reduces cognitive load, which in turn leads to less frustrated and more happy users.

## Example
<ThemeSwitcher />
<pagination-example />

## Accessibility

The current page is indicated by aria-current="page". There is a screen reader only Heading that reads `Pages` in each locale. The buttons are anchor tags marked with role="button".

The component is fully accessible.

## Framework(s)
<DsCodeTabs />