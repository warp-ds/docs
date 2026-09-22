<script setup>
import { wButton, wToggle } from '@warp-ds/vue';
import { ref } from 'vue';

const isJustified = ref(false);
const rentalPeriod = ref('week');
const sellerType = ref('all');

const periods = [
  { label: 'Day', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' },
];
const sellers = [
  { label: 'All', value: 'all' },
  { label: 'Private', value: 'private' },
  { label: 'Dealer', value: 'dealer' },
];
</script>

<template>
  <div class="component space-y-16">
    <h3 class="t4">Regular</h3>
    <w-toggle id="radio-button-group" radio-button :equal-width="isJustified" v-model="rentalPeriod" label="Rental period" :toggles="periods" />

    <h3 class="t4">Small</h3>
    <w-toggle id="radio-button-group-small" small radio-button :equal-width="isJustified" v-model="sellerType" label="Seller type" :toggles="sellers" />

    <demo-controls>
      <wButton :aria-pressed="isJustified" small utility @click="isJustified = !isJustified">Fill available width</wButton>
    </demo-controls>
  </div>
</template>
