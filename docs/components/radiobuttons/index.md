<script setup>
  import Vue from './vue.md';
  import React from './react.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# {{ data.title }}
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example
<ThemeSwitcher />
<radiobuttons-example />

## Frameworks

<tabs-content>
  <template #react>
    <react />
  </template>
  <template #vue>
    <vue />
  </template>
</tabs-content>

<component-questions />
