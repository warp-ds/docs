<script setup>
import { ref } from 'vue';
import { wSlider } from '@warp-ds/vue';

const maximum = 10_000_000;
const minimum = 1000;

const currentValueEnabled = ref(5_000_000);
const currentValueDisabled = ref(1_000_000);
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Enabled</h3>
      <p>Current value: {{ currentValueEnabled }}</p>
      <w-slider
        v-model="currentValueEnabled"
        :min="minimum"
        :max="maximum"
        :step="1000"
        label="a large number slider"
      />
    </div>
    <div>
      <h3 class="h4">Disabled</h3>
      <p>Current value: {{ currentValueDisabled }}</p>
      <w-slider
        disabled
        v-model="currentValueDisabled"
        :min="minimum"
        :max="maximum"
        :step="1000"
        label="a large number slider"
      />
    </div>
  </div>
</template>
