<script setup>
  import React from './react.md';
  import Elements from './elements.md';
  import iOS from './ios.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
  import android from './android.md';
</script>

## Frameworks

<tabs-content>
  <template #react>
    <react />
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
