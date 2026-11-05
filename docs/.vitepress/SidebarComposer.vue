<script setup>
// Composes the sidebar: shared sections + Platform switcher + the selected platform's tree.
// The config sidebar renders the tree the current page belongs to (so prev/next and active state
// stay native); this component, mounted in the sidebar-nav-before/after slots, renders the rest.

// Internal default-theme component (allowed by vitepress' `./dist/*` export). VitePress is pinned.
import VPSidebarGroup from 'vitepress/dist/client/theme-default/components/VPSidebarGroup.vue';
import { computed } from 'vue';
import { usePlatform } from './composables/platform.js';
import PlatformSwitcher from './PlatformSwitcher.vue';
import { platformSidebars } from './sidebar/platform.js';
import { sharedSidebar } from './sidebar/shared.js';

const props = defineProps({
  position: { type: String, required: true, validator: (v) => ['before', 'after'].includes(v) },
});

const { routePlatform, selectedPlatform } = usePlatform();
const onPlatformPage = computed(() => Boolean(routePlatform.value));
const showBefore = computed(() => props.position === 'before' && onPlatformPage.value);
const showAfter = computed(() => props.position === 'after' && !onPlatformPage.value);
</script>

<template>
  <div v-if="showBefore" class="sidebar-composer">
    <VPSidebarGroup :items="sharedSidebar" />
    <div class="platform-block">
      <PlatformSwitcher />
    </div>
  </div>
  <div v-else-if="showAfter" class="sidebar-composer">
    <div class="platform-block">
      <PlatformSwitcher />
    </div>
    <VPSidebarGroup :key="selectedPlatform" :items="platformSidebars[selectedPlatform]" />
  </div>
</template>

<style scoped>
.platform-block {
  margin: 8px 0 0;
  padding: 16px 0 8px;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
