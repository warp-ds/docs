<template>
  <nav ref="tabsRef" class="framework-tabs" role="tablist" aria-label="Framework selection">
    <a
      v-for="tab in tabs"
      :key="tab.file"
      :href="'./' + tab.file"
      class="framework-tab"
      :class="{ active: tab.file === currentFramework }"
      role="tab"
      :aria-selected="tab.file === currentFramework"
    >
      {{ tab.name }}
    </a>
  </nav>
</template>

<script>
import { useRoute } from 'vitepress';
import { computed, onMounted, ref } from 'vue';
import manifest from '../.vitepress/frameworks-manifest.json';

export default {
  setup() {
    const route = useRoute();
    const tabsRef = ref(null);

    // Parse route to get item name and current framework
    // Route path looks like: /components/alert/frameworks/vue or /patterns/emptystates/frameworks/ios
    const pathSegments = computed(() => {
      const path = route.path.replace(/\.html$/, '');
      return path.split('/').filter(Boolean);
    });

    // Detect whether we're in components or patterns section
    const section = computed(() => {
      if (pathSegments.value.includes('patterns')) return 'patterns';
      if (pathSegments.value.includes('components')) return 'components';
      return null;
    });

    const itemName = computed(() => {
      // Path: components/alert/frameworks/vue -> alert is at index 1
      // Path: patterns/emptystates/frameworks/ios -> emptystates is at index 1
      const sectionKey = section.value;
      if (!sectionKey) return null;
      const idx = pathSegments.value.indexOf(sectionKey);
      if (idx !== -1 && pathSegments.value[idx + 1]) {
        return pathSegments.value[idx + 1];
      }
      return null;
    });

    const currentFramework = computed(() => {
      // Last segment is the framework
      return pathSegments.value[pathSegments.value.length - 1] || null;
    });

    const tabs = computed(() => {
      if (!section.value || !itemName.value) return [];
      return manifest[section.value]?.[itemName.value] || [];
    });

    onMounted(() => {
      // Hide the preceding H2 heading (keeps it in DOM for VitePress search)
      const tabsEl = tabsRef.value;
      if (!tabsEl) return;

      let sibling = tabsEl.previousElementSibling;
      while (sibling) {
        if (sibling.tagName === 'H2') {
          sibling.style.position = 'absolute';
          sibling.style.width = '1px';
          sibling.style.height = '1px';
          sibling.style.padding = '0';
          sibling.style.margin = '-1px';
          sibling.style.overflow = 'hidden';
          sibling.style.clip = 'rect(0, 0, 0, 0)';
          sibling.style.whiteSpace = 'nowrap';
          sibling.style.border = '0';
          break;
        }
        sibling = sibling.previousElementSibling;
      }
    });

    return {
      tabs,
      currentFramework,
      tabsRef,
    };
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
