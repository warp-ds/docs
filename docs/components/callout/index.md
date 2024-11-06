<script setup>
  import android from './android.md';
  import data from './data.json';
  import Elements from './elements.md';
  import iOS from './ios.md';
  import React from './react.md';
  import Vue from './vue.md';
  
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# Callout

{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example
<ThemeSwitcher />
<callout-example />

## Usage

<component-design-guidelines name="Warp - Components / Callout" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components-2.0?node-id=381-42328&t=ypV9S2xFCv8kSzjB-0" />

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
