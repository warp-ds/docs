<script setup>
import { wBreadcrumbs } from '@warp-ds/vue';
</script>

<template>
  <div class="component">
    <w-breadcrumbs>
      <a href="/url/1">Page 1</a>
      <a href="/url/2">Page 2</a>
      <span aria-current="page">Current Page</span>
    </w-breadcrumbs>
  </div>
</template>