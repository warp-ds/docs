<script setup>
  import Vue from './vue.md';
  import Elements from './elements.md';
  import React from './react.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# {{ data.title }}
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example

<ThemeSwitcher />
<breadcrumbs-example />

## Usage

### Content

Breadcrumbs expect their component children to be the link "crumbs" that make up the navigation structure.
The component will interject a separator between the crumbs.

<component-design-guidelines name="Warp - Components / Breadcrumbs" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=17-139&mode=design" />

### Accessibility

Breadcrumbs should have a label that identifies the structure as a breadcrumb trail to screen readers.

It is recommended that the crumb for the current page has the `aria-current="page"` attribute set.
Usually this is the last crumb in the  trail.

## Frameworks

<tabs-content>
  <template #react>
    <react />
  </template>
  <template #vue>
    <vue />
  </template>
  <template #elements>
    <elements />
  </template>
</tabs-content>

<component-questions />