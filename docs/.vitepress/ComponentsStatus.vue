<script setup>
// Header directly under the H1 of every component/pattern page. Together with the context row above
// the H1 (PageContext.vue) this is the page header, and it is identical on every tab, so switching tabs
// never moves the content.
//  0. status badges — this platform's implementations and their status ("Elements | released",
//     "React | legacy", …; frontmatter `status:` overrides "released", e.g. deprecated)
//  1. page tabs — Overview | Usage | Styling | Code | Accessibility (each tab is its own page, so URLs,
//     search and prev/next keep working), and the Theme control at the right end of the same row, on every
//     tab (one site-wide choice for the live examples, so new examples on any tab just work)
//  2. Web Code pages only: a second-level Framework control — Elements + legacy React / React 19 / Vue
//  3. the "pending review" notice for seeded pages, below the header (so the header never shifts)
// The platform switch (Web | iOS | Android) is in PageContext.vue.
import { withBase } from 'vitepress';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import Badge from './Badge.vue';
import { usePlatform } from './composables/platform.js';
import manifest from './platform-manifest.json';
import SeededNotice from './SeededNotice.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

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

// Phones: the tabs scroll sideways in one row. Fade the edge that has more tabs behind it, and bring the current
// tab into view when it starts off-screen (e.g. Accessibility).
const tabsEl = ref(null);
const more = ref({ left: false, right: false });

function updateMore() {
  const el = tabsEl.value;
  if (!el) return;
  more.value = { left: el.scrollLeft > 1, right: el.scrollLeft + el.clientWidth < el.scrollWidth - 1 };
}

onMounted(() => {
  const el = tabsEl.value;
  const active = el?.querySelector('.active');
  if (active && active.offsetLeft + active.offsetWidth > el.clientWidth) el.scrollLeft = active.offsetLeft - 16;
  updateMore();
  window.addEventListener('resize', updateMore);
});

onBeforeUnmount(() => window.removeEventListener('resize', updateMore));

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
    <div class="tab-row">
      <nav
        v-if="tabs.length > 1"
        ref="tabsEl"
        class="page-tabs"
        :class="{ 'more-left': more.left, 'more-right': more.right }"
        :aria-label="`${entry.title} pages`"
        @scroll.passive="updateMore"
      >
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
      <!-- brand theme for the live examples: only Web pages have them -->
      <ThemeSwitcher v-if="current?.platform === 'web'" in-header class="tab-row-theme" />
    </div>
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
  gap: 6px;
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
}

.status li {
  margin: 0;
  line-height: 1;
}

/* tabs left, Theme right, one divider under both */
.tab-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  column-gap: var(--warp-space-4);
  min-height: 45px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.page-tabs {
  display: flex;
  flex-wrap: wrap;
  align-self: stretch;
  gap: 4px;
}

.tab-row-theme {
  margin-left: auto;
  padding: 6px 0;
}

/* phones: tabs in one scrollable row with the divider under them, Theme on its own line below */
@media (max-width: 639px) {
  .tab-row {
    border-bottom: 0;
  }

  .page-tabs {
    flex-wrap: nowrap;
    width: 100%;
    overflow-x: auto;
    border-bottom: 1px solid var(--vp-c-divider);
    scrollbar-width: none;
  }

  .page-tabs.more-right {
    -webkit-mask-image: linear-gradient(to right, #000 calc(100% - 48px), transparent);
    mask-image: linear-gradient(to right, #000 calc(100% - 48px), transparent);
  }

  .page-tabs.more-left {
    -webkit-mask-image: linear-gradient(to left, #000 calc(100% - 48px), transparent);
    mask-image: linear-gradient(to left, #000 calc(100% - 48px), transparent);
  }

  .page-tabs.more-left.more-right {
    -webkit-mask-image: linear-gradient(to right, transparent, #000 48px, #000 calc(100% - 48px), transparent);
    mask-image: linear-gradient(to right, transparent, #000 48px, #000 calc(100% - 48px), transparent);
  }

  .page-tab {
    flex: none;
  }

  .tab-row-theme {
    margin: var(--warp-space-3) 0 0;
    padding: 0;
  }
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
  transition:
    color var(--warp-duration) var(--warp-ease),
    border-color var(--warp-duration) var(--warp-ease);
}

.page-tab:hover {
  color: var(--vp-c-text-1);
  border-bottom-color: var(--warp-control-border-hover);
}

.page-tab.active,
.page-tab.active:hover {
  color: var(--vp-c-brand-1);
  border-bottom-color: var(--vp-c-brand-1);
}

.page-tab:focus-visible,
.frameworks a:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.page-tab:focus-visible {
  border-radius: 4px;
}

/* Second level under the Code tab: quiet text links, current one underlined */
/* Framework choice: the same pill chips as the filters on the components overview (DsOverview.vue) */
.frameworks {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 16px;
  padding: 16px 0 0;
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
  gap: var(--warp-space-2);
  margin: 0;
  padding: 0;
  list-style: none;
}

.frameworks li {
  margin: 0;
}

.frameworks a {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0 var(--warp-space-3);
  border: 1px solid var(--warp-control-border);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition:
    color var(--warp-duration) var(--warp-ease),
    border-color var(--warp-duration) var(--warp-ease),
    background-color var(--warp-duration) var(--warp-ease);
}

.frameworks a:hover {
  border-color: var(--warp-control-border-hover);
}

.frameworks a.current {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 45%, transparent);
  background: var(--warp-nav-active-bg);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.frameworks a.current:hover {
  border-color: var(--vp-c-brand-1);
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
