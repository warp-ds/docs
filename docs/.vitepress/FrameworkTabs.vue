<template>
  <nav v-if="tabs.length > 1" ref="tabsRef" class="framework-tabs" aria-label="Web framework">
    <span class="caption">Framework:</span>
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
/* Second-level navigation under the page tabs (ComponentsStatus): a compact segmented control */
.framework-tabs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin: 0 0 24px;
  font-size: 13px;
}

.caption {
  margin-right: 2px;
  color: var(--vp-c-text-2);
}

.framework-tab {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  color: var(--vp-c-text-2);
  font-weight: 600;
  text-decoration: none;
}

.framework-tab:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-text-1);
}

.framework-tab.active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.framework-tab:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
</style>
