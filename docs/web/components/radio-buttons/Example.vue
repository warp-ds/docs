<script setup>
import { wButton, wToggle } from '@warp-ds/vue';
import { ref } from 'vue';

const isJustified = ref(false);
const multiToggleModelSmall = ref('');
const multiToggleModel = ref('');

const toggles = [
  { label: 'One', value: 1, 'data-test': 'toggle:1' },
  { label: 'Two', value: 2, 'data-test': 'toggle:2' },
];
</script>

<template>
  <div class="component space-y-16">
    <h3 class="t4">Default</h3>
    <w-toggle id="radio-button-group" radio-button :equal-width="isJustified" v-model="multiToggleModel" label="Radio-button Toggle" :toggles="toggles" />

    <h3 class="t4">Small</h3>
    <w-toggle id="radio-button-group-small" small radio-button :equal-width="isJustified" v-model="multiToggleModelSmall" label="Small Radio-button Toggle" :toggles="toggles" />

    <demo-controls>
      <w-button aria-controls="radio-button-group" small utility @click="isJustified = !isJustified">{{ isJustified ? 'Unjustify radio button groups' : 'Justify radio button groups' }}</w-button>
    </demo-controls>
  </div>
</template>
