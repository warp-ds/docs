<script setup>
// Navigation block under the title of every component/pattern page:
//  1. page tabs — Overview | Usage | Styling | Code | Accessibility (each tab is its own page, so URLs,
//     search and prev/next keep working)
//  2. platform availability — "Available on: Web · iOS · Android", linking to the same page kind
import { withBase } from 'vitepress';
import { computed } from 'vue';
import { equivalentUrl, PLATFORMS, usePlatform } from './composables/platform.js';
import manifest from './platform-manifest.json';

const PAGE_LABELS = {
  overview: 'Overview',
  usage: 'Usage',
  styling: 'Styling',
  code: 'Code',
  accessibility: 'Accessibility',
};

const { current } = usePlatform();

const entry = computed(() => {
  const c = current.value;
  return c?.type ? manifest[c.platform]?.[c.type]?.[c.name] : null;
});

// legacy Web code pages (code-react, …) belong to the Code tab
const currentPage = computed(() => (current.value?.page?.startsWith('code') ? 'code' : current.value?.page));

const tabs = computed(() =>
  (entry.value?.pages ?? []).map((page) => ({
    page,
    label: PAGE_LABELS[page] ?? page,
    href: withBase(`/${current.value.platform}/${current.value.type}/${current.value.name}/${page}`),
    current: page === currentPage.value,
  })),
);

const platforms = computed(() => {
  const c = current.value;
  if (!c?.type) return [];
  return PLATFORMS.filter((p) => manifest[p.id]?.[c.type]?.[c.name]).map((p) => ({
    ...p,
    current: p.id === c.platform,
    href: withBase(equivalentUrl(c, p.id)),
  }));
});
</script>

<template>
  <div v-if="entry" class="component-nav">
    <nav v-if="tabs.length > 1" class="page-tabs" :aria-label="`${entry.title} pages`">
      <a
        v-for="tab in tabs"
        :key="tab.page"
        :href="tab.href"
        class="page-tab"
        :class="{ active: tab.current }"
        :aria-current="tab.current ? 'page' : undefined"
        >{{ tab.label }}</a
      >
    </nav>
    <nav v-if="platforms.length" aria-label="Platform availability" class="platforms">
      <span class="caption">Available on:</span>
      <ul>
        <li v-for="p in platforms" :key="p.id">
          <a :href="p.href" :class="{ current: p.current }" :aria-current="p.current ? 'page' : undefined">{{
            p.label
          }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.component-nav {
  margin: 1.5rem 0 2rem;
}

.page-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.page-tab {
  display: inline-flex;
  align-items: center;
  padding: 10px 14px;
  margin-bottom: -1px;
  border-bottom: 2px solid transparent;
  color: var(--vp-c-text-2);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.page-tab:hover {
  color: var(--vp-c-text-1);
}

.page-tab.active {
  color: var(--vp-c-brand-1);
  border-bottom-color: var(--vp-c-brand-1);
}

.page-tab:focus-visible,
.platforms a:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
  border-radius: 4px;
}

.platforms {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  font-size: 13px;
}

.caption {
  color: var(--vp-c-text-2);
}

.platforms ul {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.platforms li {
  margin: 0;
}

.platforms a {
  display: inline-block;
  padding: 1px 10px;
  border: 1px solid var(--vp-c-border);
  border-radius: 999px;
  color: var(--vp-c-text-1);
  font-weight: 500;
  text-decoration: none;
}

.platforms a:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.platforms a.current {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  font-weight: 700;
}

@media (prefers-reduced-motion: reduce) {
  .page-tab {
    transition: none;
  }
}
</style>
