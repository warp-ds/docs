<script setup>
  import Vue from './vue.md';
  import Elements from './elements.md';
  import React from './react.md';
  import ReactBeta from './react-beta.md';
  import Android from './android.md';
  import iOS from './ios.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# Button

{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example
<ThemeSwitcher />
<button-example />

## Usage

<component-design-guidelines name="Warp - Components / Button" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=384-34743&mode=design" />

### Accessibility
If the button doesn't have visible text content, such as when used with only an
icon, an `aria-label` prop must be provided for accessibility.

<component-questions />

## Frameworks

<tabs-content>
  <template #react-beta>
    <ReactBeta />
  </template>
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