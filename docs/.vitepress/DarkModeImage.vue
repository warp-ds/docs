<script setup>
import { useData, withBase } from 'vitepress';

defineProps({
  light: {
    type: String,
    required: true,
  },
  dark: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
});

const { isDark } = useData();
</script>

<template>
  <img :src="withBase(isDark ? dark : light)" :alt="alt" />
</template>
