<script setup>
  import Vue from './vue.md';
  import Elements from './elements.md';
  import React from './react.md';
  import iOS from './ios.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
  import android from './android.md';
</script>

# Expandable
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Examples
<ThemeSwitcher />
<expandable-example />

## Usage

<component-design-guidelines name="Warp - Components / Expandable (Accordion)" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=162-4360&mode=design" />

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
  <template #android>
    <android />
    </template>
</tabs-content>
