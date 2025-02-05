<script setup>
  import Vue from './vue.md';
  import React from './react.md';
  import data from './data.json';
  import iOS from './ios.md';
  import Android from './android.md';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# Tabs
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Examples
<ThemeSwitcher />
<tabs-example />

## Usage

<component-design-guidelines name="Warp - Components / Tabs" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=377-23908&mode=designA" />

### Accessibility
Focus management and ARIA attributes are handled automatically.

::: warning Warning
The `name` attributes will be used to generate `id` attributes (prefixed with `warp-tab-` and `warp-tabpanel-`), and therefore they must be unique throughout the entire DOM.
This is because aria-controls and aria-labelledby rely on id attributes, and they are required for the tabs to be ARIA compliant.
:::

<component-questions />

## Frameworks

<tabs-content>
  <template #react>
    <react />
  </template>
  <template #vue>
    <vue />
  </template>
      <template #iOS>
    <iOS />
  </template>
      <template #android>
    <android />
  </template>
</tabs-content>
