<script setup>
import { processMarkdown } from './ApiTableUtil.js';

defineProps({
  data: Array,
  headers: Array,
  plainText: Boolean,
});
</script>

<template>
  <table class="docs-table">
    <thead>
      <tr>
        <th v-for="h in headers">{{ h }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data">
        <td v-for="d in row" v-html="plainText ? d : processMarkdown(d)" />
      </tr>
    </tbody>
  </table>
</template>
