<script setup>
// Header directly under the H1 of every component/pattern page. Together with the context row above
// the H1 (PageContext.vue) this is the page header, and it is identical on every tab, so switching tabs
// never moves the content.
//  0. status badges — this platform's implementations and their status ("Elements | released",
//     "React | legacy", …; frontmatter `status:` overrides "released", e.g. deprecated)
//  1. page tabs — Overview | Usage | Styling | Code | Accessibility (each tab is its own page, so URLs,
//     search and prev/next keep working)
//  2. Web Code pages only: a second-level Framework control — Elements + legacy React / React 19 / Vue
//  3. the "pending review" notice for seeded pages, below the header (so the header never shifts)
// The platform switch (Web | iOS | Android) is in PageContext.vue.
import { withBase } from 'vitepress';
import { computed } from 'vue';
import Badge from './Badge.vue';
import { usePlatform } from './composables/platform.js';
import manifest from './platform-manifest.json';
import SeededNotice from './SeededNotice.vue';

const PAGE_LABELS = {
  overview: 'Overview',
  usage: 'Usage',
  styling: 'Styling',
  code: 'Code',
  accessibility: 'Accessibility',
};

const PLATFORM_BADGES = { ios: 'iOS', android: 'Android' };
const LEGACY_BADGES = { react: 'React', 'react-19': 'React 19', vue: 'Vue' };

const FRAMEWORKS = {
  elements: { page: 'code', label: 'Elements' },
  react: { page: 'code-react', label: 'React (legacy)' },
  'react-19': { page: 'code-react-19', label: 'React 19 (legacy)' },
  vue: { page: 'code-vue', label: 'Vue (legacy)' },
};

const { current } = usePlatform();

const entry = computed(() => {
  const c = current.value;
  return c?.type ? manifest[c.platform]?.[c.type]?.[c.name] : null;
});

const itemUrl = (page) => withBase(`/${current.value.platform}/${current.value.type}/${current.value.name}/${page}`);

// legacy Web code pages (code-react, …) belong to the Code tab
const currentPage = computed(() => (current.value?.page?.startsWith('code') ? 'code' : current.value?.page));

const tabs = computed(() =>
  (entry.value?.pages ?? []).map((page) => ({
    page,
    label: PAGE_LABELS[page] ?? page,
    href: itemUrl(page),
    current: page === currentPage.value,
  })),
);

const badges = computed(() => {
  const c = current.value;
  if (!entry.value) return [];
  const status = entry.value.status ?? 'released';
  if (c.platform !== 'web') return [{ label: PLATFORM_BADGES[c.platform], status }];
  const fws = entry.value.frameworks ?? [];
  return [
    ...(fws.includes('elements') ? [{ label: 'Elements', status }] : []),
    ...fws.filter((fw) => LEGACY_BADGES[fw]).map((fw) => ({ label: LEGACY_BADGES[fw], status: 'legacy' })),
  ];
});

const frameworks = computed(() => {
  const c = current.value;
  if (c?.platform !== 'web' || currentPage.value !== 'code' || !entry.value?.frameworks) return [];
  const list = entry.value.frameworks.map((fw) => FRAMEWORKS[fw]).filter(Boolean);
  // components without Elements still get a "Code" landing page
  if (!entry.value.frameworks.includes('elements')) list.unshift({ page: 'code', label: 'Overview' });
  if (list.length < 2) return [];
  return list.map((fw) => ({ ...fw, href: itemUrl(fw.page), current: fw.page === c.page }));
});
</script>

<template>
  <div v-if="entry" class="component-nav">
    <ul v-if="badges.length" class="status" aria-label="Implementation status">
      <li v-for="b in badges" :key="b.label"><Badge :framework="b.label" :status="b.status" /></li>
    </ul>
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
    <nav v-if="frameworks.length" class="frameworks" aria-label="Web framework">
      <span class="caption" aria-hidden="true">Framework</span>
      <ul>
        <li v-for="fw in frameworks" :key="fw.page">
          <a :href="fw.href" :class="{ current: fw.current }" :aria-current="fw.current ? 'page' : undefined">{{
            fw.label
          }}</a>
        </li>
      </ul>
    </nav>
    <SeededNotice in-header />
  </div>
</template>

<style scoped>
.component-nav {
  margin: 16px 0 32px;
}

.status {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 16px;
  padding: 0;
  list-style: none;
}

.status li {
  margin: 0;
  line-height: 1;
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
.frameworks a:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Second level under the Code tab: quiet text links, current one underlined */
.frameworks {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 16px;
  padding: 12px 0 0;
  font-size: 13px;
}

.caption {
  color: var(--vp-c-text-3);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 11px;
}

.frameworks ul {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.frameworks li {
  margin: 0;
}

.frameworks a {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 6px;
  color: var(--vp-c-text-2);
  font-weight: 600;
  text-decoration: none;
}

.frameworks a:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}

.frameworks a.current {
  color: var(--vp-c-text-1);
  background: var(--vp-c-default-soft);
}

.component-nav :deep(.seeded-notice) {
  margin: 16px 0 0;
}

@media (prefers-reduced-motion: reduce) {
  .page-tab {
    transition: none;
  }
}
</style>
