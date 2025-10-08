<script setup>
import { wPill } from '@warp-ds/vue';
</script>

<template>
  <div class="flex flex-wrap gap-16 component">
    <w-pill label="Filter Pill" />
    <w-pill can-close label="Closable Filter Pill" />
    <w-pill suggestion label="Suggestion Pill" />
    <w-pill suggestion can-close label="Closable Suggestion Pill" />
  </div>
</template>