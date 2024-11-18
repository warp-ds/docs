<script setup>
  import data from './data.json';
  import Elements from './elements.md';
  import iOS from './ios.md';
  import React from './react.md';
  import Vue from './vue.md';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# Tooltip

{{ data.description }}
Tooltips should be used sparingly and contain succinct, supplementary information.


<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example
<ThemeSwitcher />
<tooltip-example />

## Usage

<component-design-guidelines name="Warp - Components / Tooltip" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components-2.0?node-id=1308-38514&t=ypV9S2xFCv8kSzjB-0" />

<component-questions />

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
<template #iOS>
    <iOS />
  </template>
</tabs-content>