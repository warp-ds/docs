<script setup>
  import Vue from './vue.md';
  import React from './react.md';
  import Android from './android.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# Checkbox

{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example

<checkbox-example />

## Usage

<component-design-guidelines name="Warp - Components / Checkbox" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components-2.0?m=auto&node-id=381-40975&t=LAzGLAB7cHRWfpOJ-1" />

<component-questions />

## Frameworks

<tabs-content>
  <template #react>
   <react />
  </template>
  <template #vue>
    <vue />
  </template>
  <template #android>
    <android />
  </template>
</tabs-content>