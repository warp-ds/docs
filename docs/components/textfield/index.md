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
<textfield-example />

## Usage

<component-design-guidelines name="Warp - Components / Input" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=162-3118&mode=design&t=BeQTJcCWRTnsK9fC-0" />

### Accessibility

If a visible label isn't specified, an `aria-label` must be provided to the text field for accessibility.
If the field is labeled by a separate element, an `aria-labelledby` prop must be provided using the id of the labeling element instead.

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