<script setup>
  import iOS from './ios.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
  import android from './android.md';
</script>

# Callout

{{ data.description }}

::: warning Native only!
For the web implementation of a "callout", see [Components - Attention - Callout](/components/attention/#callout).
:::

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example
<ThemeSwitcher />
<callout-example />

## Usage

<component-design-guidelines name="Warp - Components / Callout" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components-2.0?node-id=381-42328&t=ypV9S2xFCv8kSzjB-0" />

<component-questions />

## Frameworks

<tabs-content>
<template #iOS>
    <iOS />
  </template>
  <template #android>
    <android />
  </template>
</tabs-content>
