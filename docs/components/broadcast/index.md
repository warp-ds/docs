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

title: Broadcast
description: Broadcast automatically fetches broadcast messages for the current (or
  a given) url.
category: Layout
placeholder:
  label: Broadcast component
frameworks:
- name: Elements
  status: deprecated
- name: iOS
  status: deprecated
---
# {{ $frontmatter.title }}
{{ $frontmatter.description }}

<DsComponentStatus align="left" hide-unsupported />

Uses toast apis under the hood.

**N.B.** Broadcast should only be included once per page to avoid duplicate broadcast messages being displayed. The preferred method for including broadcast is to use the [broadcast-podlet](https://github.schibsted.io/finn/broadcast-podlet) provided by the communication team.

## Example

See the [toast component](/components/toast/) for examples, as `broadcast` utilizes it to display messages.

## Usage

<component-design-guidelines name="Warp - Components / Broadcast" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=253-14893&mode=design" />

## Framework(s)
<DsCodeTabs />

<component-questions />