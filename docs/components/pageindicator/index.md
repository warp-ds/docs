---
# Frontmatter reference (keep this comment block):
# - title:        Human-readable component name (Sentence case).
# - description:  One short sentence that also works as SEO meta description.
# - category:     Free text, but keep it consistent (e.g. Actions | Feedback | Forms | Navigation | Data display | Layout | Utilities).
# - frameworks:   Add one entry per platform you document.
#
#   Legal framework names (case-sensitive, exactly as written):
#     React | React 19 | Vue | Elements | Android | iOS | Figma
#   Notes:
#     • Use “iOS” (small i, capital OS) — not iOs/IOS/etc.
#
#   Legal status values (lowercase):
#     released | beta | developing | planned | deprecated | unsupported
#   Tips:
#     • Use lowercase for status.
#     • `reason` is optional, shown when unsupported/planned/etc.
#
title: Page indicator
description: A page indicator shows the total amount of pages (or images) and the
  current page using dots.
category: Actions
placeholder:
  label: Page indicator component
frameworks:
- name: React 19
  status: Beta
- name: iOS
  status: Released
---

<script setup>
  import Overview from './overview.md';
  import Usage from './usage.md';
  import Styling from './styling.md';
  import Dev from './code.md';
  import Accessibility from './accessibility.md';
</script>

# {{ $frontmatter.title }}
{{ $frontmatter.description }}

<DsComponentStatus align="left" hide-unsupported />

<tabs-content variant="main">
  <template #Overview>
    <overview />
  </template>
  <template #Usage>
    <usage />
  </template>
  <template #Styling>
    <styling />
  </template>
  <template #Code>
    <dev />
  </template>
  <template #Accessibility>
    <accessibility />
  </template>
</tabs-content>

<component-questions />
