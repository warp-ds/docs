<script setup>
import { wButtonGroup } from '@warp-ds/vue';
import ControlItem from './ControlItem.vue';

defineProps({ state: null, controls: Array, label: String });
</script>

<template>
  <div>
    <h3 class="text-12 font-bold" v-if="label">{{ label }}</h3>
    <w-button-group outlined>
      <control-item v-for="c in controls" v-bind="c" :state="state" />
    </w-button-group>
  </div>
</template>
