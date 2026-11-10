<script setup>
import { useData, withBase } from 'vitepress';

defineProps({
  light: {
    type: String,
    default: '/warp-in-progress-light.webp',
  },
  dark: {
    type: String,
    default: '/warp-in-progress-dark.webp',
  },
  alt: {
    type: String,
    default: 'WARP illustration displaying two WARP astronaut workers on a construction site',
  },
});

const { isDark } = useData();
</script>

<template>
  <img :src="withBase(isDark ? dark : light)" :alt="alt" />
</template>
