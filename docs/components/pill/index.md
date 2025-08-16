<script setup>
  import Vue from './vue.md';
  import React from './react.md';
  import Elements from './elements.md';
  import Android from './android.md';
  import iOS from './ios.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# {{ data.title }}
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example
<ThemeSwitcher />
<pill-example />

## Usage

<component-design-guidelines name="Warp - Components / Pill" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=374-21835&mode=design" />

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
  <template #iOS>
    <iOS />
  </template>
</tabs-content>

<component-questions />