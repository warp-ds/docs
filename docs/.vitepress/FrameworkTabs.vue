<template>
  <nav v-if="tabs.length > 1" ref="tabsRef" class="framework-tabs" aria-label="Web framework">
    <a
      v-for="tab in tabs"
      :key="tab.file"
      :href="'./' + tab.file"
      class="framework-tab"
      :class="{ active: tab.file === currentFile }"
      :aria-current="tab.file === currentFile ? 'page' : undefined"
    >
      {{ tab.name }}
    </a>
  </nav>
</template>

<script>
// Web Code page tabs: Elements (primary) + legacy React / React 19 / Vue pages.
// Renders nothing on iOS/Android Code pages. Still visually hides the preceding H2 (kept for search).
import { computed, onMounted, ref } from 'vue';
import { usePlatform } from './composables/platform.js';
import manifest from './platform-manifest.json';

const TABS = {
  elements: { file: 'code', name: 'Elements' },
  react: { file: 'code-react', name: 'React (legacy)' },
  'react-19': { file: 'code-react-19', name: 'React 19 (legacy)' },
  vue: { file: 'code-vue', name: 'Vue (legacy)' },
};

export default {
  setup() {
    const { current } = usePlatform();
    const tabsRef = ref(null);

    const currentFile = computed(() => current.value?.page ?? null);

    const tabs = computed(() => {
      const c = current.value;
      if (c?.platform !== 'web' || !c.type) return [];
      const entry = manifest.web[c.type]?.[c.name];
      if (!entry?.frameworks) return [];
      const list = entry.frameworks.map((fw) => TABS[fw]).filter(Boolean);
      // components without Elements still get a "Code" landing tab
      if (!entry.frameworks.includes('elements')) list.unshift({ file: 'code', name: 'Overview' });
      return list;
    });

    onMounted(() => {
      const tabsEl = tabsRef.value;
      if (!tabsEl) return;
      let sibling = tabsEl.previousElementSibling;
      while (sibling) {
        if (sibling.tagName === 'H2') {
          sibling.classList.add('visually-hidden');
          break;
        }
        sibling = sibling.previousElementSibling;
      }
    });

    return { tabs, currentFile, tabsRef };
  },
};
</script>

<style scoped>
.framework-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-top: 32px;
  margin-bottom: 24px;
  padding-bottom: 0;
}

.framework-tab {
  display: inline-flex;
  align-items: center;
  padding: 12px 16px;
  font-weight: bold;
  font-size: 16px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.framework-tab:hover {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.framework-tab.active {
  color: var(--vp-c-brand-1);
  border-bottom-color: var(--vp-c-brand-1);
}

.framework-tab:focus {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: -2px;
  border-radius: 4px 4px 0 0;
}

.framework-tab:focus:not(:focus-visible) {
  outline: none;
}
</style>
