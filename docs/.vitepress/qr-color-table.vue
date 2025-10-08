<script setup>
import { IconStarFull24 } from '@warp-ds/icons/vue';
import { computed } from 'vue';
import { data } from '../supported.data.js';

const props = defineProps({
  dataId: String,
});
const rows = computed(() => props.list ?? data[props.dataId]);
const outlineClasses = 'outline outline-4 outline-offset-2 border bg-[--w-gray-200] my-6';

const v2Replacements = {
  's-bg-info-selected': 's-bg-info',
  's-bg-info-selected-hover': 's-bg-info',
  's-bg-negative-selected': 's-bg-negative',
  's-bg-negative-selected-hover': 's-bg-negative',
  's-bg-positive-selected': 's-bg-positive',
  's-bg-positive-selected-hover': 's-bg-positive',
  's-bg-warning-selected': 's-bg-warning',
  's-bg-warning-selected-hover': 's-bg-warning',
  's-border-focused': 's-border-focus',
  's-divide-focused': 's-divide-focus',
  's-outline-focused': 's-outline-focus',
  's-border-negative-selected': 's-border-negative',
  's-border-negative-selected-hover': 's-border-negative',
  's-divide-negative-selected': 's-border-negative',
  's-divide-negative-selected-hover': 's-border-negative',
  's-outline-negative-selected': 's-border-negative',
  's-outline-negative-selected-hover': 's-border-negative',
  's-text-notification': 's-text-inverted-static',
  's-icon-notification': 's-icon-inverted-static',
};

const v2Additions = [
  's-border-focus',
  's-divide-focus',
  's-outline-focus',
  's-text-static',
  's-text-inverted-static',
  's-icon-static',
  's-icon-inverted-static',
];

const getCellBgColor = (cls) => {
  if (/^s-(icon|text)-inverted-static$/.test(cls)) {
    return 's-bg-notification';
  }
  if (/^s-(icon|text)-static$/.test(cls)) {
    return 's-bg-negative-subtle';
  }
  if (/^s-(text|icon|border|outline|divide)-inverted/.test(cls) || /^s-bg$/.test(cls)) {
    return 's-bg-inverted s-text-inverted';
  }
  return 's-bg';
};
</script>

<template>
  <table class="docs-table">
    <thead>
      <tr>
        <th>Class</th>
        <th>Color</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="[cls, desc] in rows">
        <td><code :class="{'line-through': desc === null || v2Replacements[cls]}">{{ cls }}</code><sup v-if="v2Additions.includes(cls)" title="Added in v2" class="s-bg-warning s-text-inverted px-4 ml-4 rounded">v2</sup></td>
        <td v-if="desc === null" colspan="2">Unsupported</td>
        <td v-else-if="v2Replacements[cls]" colspan="2">Replaced by <code>{{ v2Replacements[cls] }}</code> in <span class="s-bg-warning rounded px-4 s-text-inverted text-detail">v2</span></td>
        <template v-else>
          <td :class="getCellBgColor(cls)">
            <div v-if="/^(s-)?divide/.test(cls)" class="flex justify-center divide-x-4" :class="cls">
              <div class="text-right pr-6">A</div>
              <div class="pl-6">B</div>
            </div>
            <div v-else :class="[cls, { 'border-4': /^(s-)?border/.test(cls) }, { 'h-24': !/^(s-)?(text|icon)/.test(cls) }, { [outlineClasses]: /^(s-)?outline/.test(cls) } ]" class="w-64 px-8 text-center rounded-8">
              <icon-star-full-24 v-if="/^s-icon/.test(cls)" class="m-auto my-4" />
              <span v-else-if="/^(s-)?text/.test(cls)" class="text-l">Text</span>
            </div>
          </td>
          <td>
            <code class="whitespace-pre-line">
              {{ desc }}
            </code>
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>
