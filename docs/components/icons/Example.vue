<script setup>
import { computed, ref } from 'vue';
import { iconNames } from './iconNames';

const searchTerm = ref('');
const filteredIcons = computed(() =>
  iconNames.filter((name) => name.toLowerCase().includes(searchTerm.value.toLowerCase())),
);
</script>

<template>
  <div class="component space-y-16" style="background-color: var(--vp-sidebar-bg-color);">
    <div class="m-8">
      <input v-model="searchTerm" type="text" placeholder="Search icons..."
        class="block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected" />
    </div>
    <div class="grid gap-24 grid-cols-4 md:grid-cols-4 m-8">
      <div v-for="icon in filteredIcons" :key="icon" class="flex flex-col items-center text-center">
        <div style="display:flex;background-color: #fff;border-radius: 4px;width:100%;height: 56px;padding: 8px 16px;gap: 10px;align-self: stretch;justify-content: center;
align-items: center;">
          <w-icon :name="icon" size="medium" locale="en" />
        </div>
        <span class="text-s mt-8" style="color:var(--vp-c-text-1);">{{ icon }}</span>
      </div>
    </div>
  </div>
</template>
