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

## Examples
<ThemeSwitcher />
<card-example />

## Usage

<component-design-guidelines name="Warp - Components / Card" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=377-34742&mode=design" />

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