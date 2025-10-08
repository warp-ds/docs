<template>
    <div class="component" ref="el" />
</template>

<script setup>
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { onMounted, ref } from 'vue';
import Pagination from './Pagination';

const el = ref();

onMounted(() => {
  const root = createRoot(el.value);
  root.render(createElement(Pagination, {}, null));
});
</script>

