<script setup>
  import data from './data.json';
  import Elements from './elements.md';
  import iOS from './ios.md';
  import React from './react.md';
  import Vue from './vue.md';
  import { mapFrameworkStatuses } from '../utils.js';
  import android from './android.md';

</script>

# {{ data.title }}
{{ data.description }}
<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Overview
Tooltips should be used sparingly and contain succinct, supplementary information.

## Example
<ThemeSwitcher />
<tooltip-example />

## Usage

<component-design-guidelines name="Warp - Components / Tooltip" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components-2.0?node-id=1308-38514&t=ypV9S2xFCv8kSzjB-0" />

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

<component-questions />