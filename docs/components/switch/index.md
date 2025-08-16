<script setup>
  import Vue from './vue.md';
  import React from './react.md';
  import Android from './android.md';
  import iOS from './ios.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# {{ data.title }}
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Examples
<ThemeSwitcher />
<switch-example />

## Usage

<component-design-guidelines name="Warp - Components / Switch" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/
WARP---Components-2.0?m=auto&node-id=7865-20984&t=381wrlkzoSir9LSh-1" />

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
    <template #iOS>
    <iOS />
  </template>
</tabs-content>

<component-questions />