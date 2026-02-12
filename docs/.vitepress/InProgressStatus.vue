<script setup>
import { useData, withBase } from 'vitepress';

defineProps({
  light: {
    type: String,
    default: '/warp-in-progress-light.png'
  },
  dark: {
    type: String,
    default: '/warp-in-progress-dark.png'
  },
  alt: {
    type: String,
    default: 'Warp ilustration displaying two Warp astronaut workers on a construction site',
  },
});

const { isDark } = useData();
</script>

<template>
  <img :src="withBase(isDark ? dark : light)" :alt="alt" />
</template>
