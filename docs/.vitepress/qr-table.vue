<script setup>
import camelcase from 'camelcase';
import { useData } from 'vitepress';
import { computed } from 'vue';
import { data } from '../supported.data.js';

const pageData = useData();
const props = defineProps({ list: Array });
const dataTitle = computed(() => camelcase(pageData.page.value.title.replace(/[^\w\s]/gi, '')));
const rows = computed(() => props.list ?? data[dataTitle.value]);
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Class</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="[cls, desc] in rows">
        <td><code :class="{'line-through': desc === null}">{{ cls }}</code></td>
        <td v-if="desc === null">Unsupported</td>
        <td v-else>
          <code class="whitespace-pre-line">
            {{ desc }}
          </code>
        </td>
      </tr>
    </tbody>
  </table>
</template>
