<script setup>
import { onMounted, ref } from 'vue';
import { fetchIconNames } from './iconNames';

const iconNames = ref([]);
const sizes = ['small', 'medium', 'large'];
const selectedIcon = ref('');
const selectedSize = ref(sizes[1]);

onMounted(async () => {
  iconNames.value = await fetchIconNames();
  selectedIcon.value = iconNames.value[0] || '';
});
</script>

<template>
  <div class="component space-y-16">
    <div class="space-y-4">
      <w-icon :name="selectedIcon" :size="selectedSize" locale="en" />
    </div>
    <div class="flex gap-4 items-center">
      <label>
        Icon Name:
        <select v-model="selectedIcon" class="block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected">
          <option v-for="name in iconNames" :key="name" :value="name">{{ name }}</option>
        </select>
      </label>
      <label>
        Size:
        <select v-model="selectedSize" class="block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected">
          <option v-for="size in sizes" :key="size" :value="size">{{ size }}</option>
        </select>
      </label>
    </div>
  </div>
</template>
