<script setup>
// Brand theme for the live examples. One choice for the whole site, remembered (warp-theme-switcher.js).
//  - Component/pattern pages: always shown in the page header, right of the tabs, on every tab
//    (ComponentsStatus.vue renders it with `in-header`). A <ThemeSwitcher /> tag in their markdown renders
//    nothing, so existing tags are harmless and new examples need no tag.
//  - Other pages with examples (no item header): rendered inline where the tag is.
import { useData } from 'vitepress';
import { computed, inject, useId } from 'vue';
import { parsePlatformPath } from './composables/platform.js';

const props = defineProps({ inHeader: { type: Boolean, default: false } });

const { current: currentTheme, themes: warpThemes, updateTheme } = inject('warpThemeSwitcher');
const { page } = useData();
const id = useId();

const isItemPage = computed(() => Boolean(parsePlatformPath(page.value.relativePath)?.type));
const visible = computed(() => props.inHeader || !isItemPage.value);
</script>

<template>
  <div v-if="visible" class="theme-switcher" :class="{ 'in-header': inHeader }">
    <label class="label" :for="id">Theme</label>
    <span class="select">
      <select
        :id="id"
        :value="currentTheme"
        title="Brand theme for the examples, on every page"
        @change="(e) => updateTheme(e.target.value)"
      >
        <option v-for="[name, value] in Object.entries(warpThemes)" :key="value" :value="value">{{ name }}</option>
      </select>
      <span class="vpi-chevron-down caret" aria-hidden="true" />
    </span>
  </div>
</template>

<style scoped>
.theme-switcher {
  display: inline-flex;
  align-items: center;
  gap: var(--warp-space-2);
  font-size: 13px;
}

/* inline (pages without an item header) */
.theme-switcher:not(.in-header) {
  margin: var(--warp-space-4) 0;
}

.label {
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.select {
  position: relative;
  display: inline-flex;
  align-items: center;
}

select {
  height: 32px;
  padding: 0 32px 0 12px;
  border: 1px solid var(--warp-control-border);
  border-radius: var(--warp-radius-s);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  appearance: none;
  transition: border-color var(--warp-duration) var(--warp-ease);
}

select:hover {
  border-color: var(--warp-control-border-hover);
}

select:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 1px;
}

.select .caret {
  position: absolute;
  right: 10px;
  width: 14px;
  height: 14px;
  color: var(--vp-c-text-2);
  pointer-events: none;
}
</style>
