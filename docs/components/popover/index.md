<script setup>
  import data from './data.json';
  import Elements from './elements.md';
  import React from './react.md';
  import Vue from './vue.md';
  import Android from './android.md';

  import { mapFrameworkStatuses } from '../utils.js';
</script>

# {{ data.title }}
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example
<ThemeSwitcher />
<popover-example />

## Usage

<component-design-guidelines name="Warp - Components / Popover" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components?node-id=1308-38513&node-type=canvas&t=kRrtnWerTmpa3PeU-0" />


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
  <template #android>
    <android />
    </template>
</tabs-content>

<component-questions />