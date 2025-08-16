<script setup>
  import Vue from './vue.md';
  import React from './react.md';
  import Elements from './elements.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# {{ data.title }}
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

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