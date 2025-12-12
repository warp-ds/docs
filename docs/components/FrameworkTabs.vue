<template>
  <nav ref="tabsRef" class="framework-tabs" role="tablist" aria-label="Framework selection">
    <a
      v-for="tab in tabs"
      :key="tab.url"
      :href="tab.url"
      class="framework-tab"
      :class="{ active: isActive(tab.name) }"
      role="tab"
      :aria-selected="isActive(tab.name)"
    >
      {{ tab.name }}
    </a>
  </nav>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  props: {
    /**
     * Array of tab objects with `name` and `url` properties
     * Example: [{ name: 'Vue', url: './vue' }, { name: 'React', url: './react' }]
     */
    tabs: {
      type: Array,
      required: true,
      validator: (tabs) => tabs.every((tab) => tab.name && tab.url),
    },
    /**
     * Optional: The name of the currently active tab.
     * If not provided, it will be auto-detected from the first H2 heading on the page.
     */
    activeTab: {
      type: String,
      default: '',
    },
    /**
     * Whether to hide the H2 heading that the active tab was detected from.
     * Useful when you want VitePress search to work but don't want duplicate headings.
     */
    hideHeading: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const detectedTab = ref('');
    const tabsRef = ref(null);

    onMounted(() => {
      // Find the H2 element that is immediately before this component
      const tabsEl = tabsRef.value;
      if (!tabsEl) return;

      // Walk backwards through siblings to find the preceding H2
      let sibling = tabsEl.previousElementSibling;
      let h2 = null;

      while (sibling) {
        if (sibling.tagName === 'H2') {
          h2 = sibling;
          break;
        }
        sibling = sibling.previousElementSibling;
      }

      if (h2) {
        if (!props.activeTab) {
          detectedTab.value = h2.textContent?.trim() || '';
        }
        // Hide the H2 if requested (keeps it in DOM for VitePress search)
        if (props.hideHeading) {
          h2.style.position = 'absolute';
          h2.style.width = '1px';
          h2.style.height = '1px';
          h2.style.padding = '0';
          h2.style.margin = '-1px';
          h2.style.overflow = 'hidden';
          h2.style.clip = 'rect(0, 0, 0, 0)';
          h2.style.whiteSpace = 'nowrap';
          h2.style.border = '0';
        }
      }
    });

    const isActive = (tabName) => {
      const active = props.activeTab || detectedTab.value;
      return tabName.toLowerCase() === active.toLowerCase();
    };

    return {
      detectedTab,
      isActive,
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
