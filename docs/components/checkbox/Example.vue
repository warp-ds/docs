<script setup>
import { wToggle } from '@warp-ds/vue';
import { ref } from 'vue';

const toggleModel = ref([]);
const invalidToggleModel = ref([1]);
const disabledToggleModel = ref([2]);
const indeterminateToggleModel = ref();

const toggles = [
  { label: 'One', value: 1, 'data-test': 'toggle:1' },
  { label: 'Two', value: 2, 'data-test': 'toggle:2' },
];

const indeterminateToggle = [{ label: 'All selected', value: 1, 'data-test-indeterminate': 'toggle:1' }];
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="t4">Default</h3>
      <w-toggle checkbox v-model="toggleModel" label="Checkbox Toggle" :toggles="toggles" />
    </div>
    <div>
      <h3 class="t4">Disabled</h3>
      <w-toggle checkbox disabled v-model="disabledToggleModel" label="Disabled checkbox Toggle" :toggles="toggles" />
    </div>
    <div>
      <h3 class="t4">Invalid</h3>
      <w-toggle checkbox invalid v-model="invalidToggleModel" label="Invalid checkbox Toggle" :toggles="toggles" />
    </div>
    <div>
      <h3 class="t4">Indeterminate</h3>
      <w-toggle :indeterminate="!indeterminateToggleModel" v-model="indeterminateToggleModel" checkbox label="Indeterminate checkbox Toggle" :toggles="indeterminateToggle" />
    </div>
  </div>
</template>
