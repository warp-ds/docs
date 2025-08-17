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

title: Icons
description: Warp’s icons are crafted to deliver consistency, clarity, and scalability
  across our multi-brand product ecosystem.
category: Form
placeholder:
  label: Icons component
frameworks:
- name: React19
  status: beta
- name: Elements
  status: released
- name: Figma
---
<script setup>
import Overview from './overview.md';
import Styling from './styling.md';
import Dev from './code.md';
import Accessibility from './accessibility.md';
import { mapFrameworkStatuses } from '../utils.js';
</script>

# {{ $frontmatter.title }}
{{ $frontmatter.description }}

<DsComponentStatus align="left" hide-unsupported />

<tabs-content variant="main">
  <template #Overview>
    <overview />
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