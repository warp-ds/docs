<script setup>
  import Elements from './frameworks/elements.md';
  import React from './frameworks/react.md';
  import React19 from './frameworks/react19.md';
  import Vue from './frameworks/vue.md';
  import Android from './frameworks/android.md';
  import iOS from './frameworks/ios.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

## Frameworks

<tabs-content>
  <template #elements>
    <elements />
  </template>
  <template #react>
    <react />
  </template>
  <template #react19>
    <react19 />
  </template>
  <template #vue>
    <vue />
  </template>
  <template #android>
    <android />
  </template>
  <template #ios>
    <ios />
  </template>
</tabs-content>
