<script setup>
import { withBase } from 'vitepress';
import { computed, ref } from 'vue';
import manifest from './platform-manifest.json';

const props = defineProps({
  type: {
    type: String,
    default: 'components',
    validator: (value) => ['components', 'patterns'].includes(value),
  },
  platform: {
    type: String,
    default: 'web',
    validator: (value) => ['web', 'ios', 'android'].includes(value),
  },
});

const FRAMEWORK_LABELS = { elements: 'Elements', react: 'React', 'react-19': 'React 19', vue: 'Vue' };

// Placeholder illustrations live next to each platform's pages
const svgModules = import.meta.glob(['../{web,ios,android}/{components,patterns}/*/placeholder.svg'], {
  eager: true,
  import: 'default',
});

const placeholderBySlug = computed(() => {
  const map = Object.create(null);
  const regex = new RegExp(`/${props.platform}/${props.type}/([^/]+)/placeholder\\.svg$`);
  for (const [key, mod] of Object.entries(svgModules)) {
    const slug = String(key).replace(/\\/g, '/').match(regex)?.[1];
    if (slug) map[slug] = mod;
  }
  return map;
});

const manifestSection = computed(() => manifest[props.platform]?.[props.type] || {});
const isWeb = computed(() => props.platform === 'web');
const frameworksOf = (entry) => (entry.frameworks || []).map((f) => FRAMEWORK_LABELS[f] || f);

const allItems = computed(() =>
  Object.entries(manifestSection.value).map(([slug, entry]) => ({
    slug,
    title: entry.title,
    frameworks: frameworksOf(entry),
    // short facts instead of a generic description: implementations on Web, lifecycle on native
    meta: [
      entry.status === 'deprecated' ? 'Deprecated' : null,
      props.platform === 'web' ? frameworksOf(entry).join(' · ') : null,
      props.platform !== 'web' && entry.pages.length === 1 && entry.pages[0] === 'code' ? 'Code only' : null,
    ]
      .filter(Boolean)
      .join(' · '),
    svgComponent: placeholderBySlug.value[slug],
    href: withBase(
      `/${props.platform}/${props.type}/${slug}/${entry.pages.includes('overview') ? 'overview' : entry.pages[0]}`,
    ),
    placeholder: { label: entry.title },
  })),
);

// Framework filter only makes sense on Web (Elements + legacy React/Vue)
const allFrameworks = computed(() => {
  if (!isWeb.value) return [];
  const set = new Set();
  for (const item of allItems.value) for (const fw of item.frameworks) set.add(fw);
  return Array.from(set);
});

const q = ref('');
const picked = ref([]);

const filtered = computed(() => {
  const query = q.value.trim().toLowerCase();
  const sel = picked.value.map((v) => String(v).toLowerCase());

  return allItems.value.filter((it) => {
    const textOk = !query || it.title.toLowerCase().includes(query);
    const fwNames = it.frameworks.map((f) => f.toLowerCase());
    const fwOk = sel.length === 0 || sel.some((s) => fwNames.includes(s)); // OR
    return textOk && fwOk;
  });
});

function toggleFramework(name) {
  const i = picked.value.indexOf(name);
  if (i >= 0) picked.value.splice(i, 1);
  else picked.value.push(name);
}

function showAll() {
  picked.value = [];
}
</script>

<template>
  <div class="overview">
    <div class="filters">
      <div class="search">
        <DsSearchInput v-model="q" placeholder="Filter by title or description…" aria-label="Filter components" />
      </div>

      <div v-if="allFrameworks.length" class="flex flex-wrap gap-8">
        <button
          v-for="fw in allFrameworks"
          :key="fw"
          @click="toggleFramework(fw)"
          :aria-pressed="picked.includes(fw)"
          class="filter-btn"
          :class="{ 'filter-btn--active': picked.includes(fw) }"
        >
          {{ fw }}
        </button>
        <button
          @click="showAll"
          :aria-pressed="picked.length === 0"
          class="filter-btn"
          :class="{ 'filter-btn--active': picked.length === 0 }"
        >
          All frameworks
        </button>
      </div>
    </div>

    <ul class="dc-grid dc-grid--3">
      <li v-for="c in filtered" :key="c.slug">
        <a :href="c.href" class="dc-card dc-card--media">
          <span class="dc-card__media">
            <component v-if="c.svgComponent" :is="c.svgComponent" aria-hidden="true" />
            <span v-else class="placeholder-fallback">{{ c.placeholder.label }}</span>
          </span>
          <span class="dc-card__body">
            <span class="dc-card__title">{{ c.title }}</span>
            <span v-if="c.meta" class="dc-card__meta">{{ c.meta }}</span>
          </span>
        </a>
      </li>
    </ul>

    <div v-if="filtered.length === 0" class="empty">
      <em>No {{ type === 'components' ? 'components' : 'patterns' }} match your filter.</em>
    </div>
  </div>
</template>

<style scoped>
/* Filter buttons (square-ish, accessible) */
/* filters: search, then framework chips (same 8px radius as the header switch) */
.filters {
  margin: var(--warp-space-6) 0 0;
}

.search {
  margin-bottom: var(--warp-space-3);
}

.filter-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--warp-space-2);
  min-height: 32px;
  padding: 0 var(--warp-space-3);
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid var(--warp-control-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-family: inherit;
  cursor: pointer;
  user-select: none;
  transition: background .15s ease, border-color .15s ease, color .15s ease, box-shadow .15s ease;
}
.filter-btn:hover { border-color: var(--warp-control-border-hover); }
.filter-btn:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 2px; }
.filter-btn--active,
.filter-btn[aria-pressed="true"] {
  background: var(--warp-nav-active-bg);
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 45%, transparent);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
.filter-btn--active:hover,
.filter-btn[aria-pressed="true"]:hover {
  border-color: var(--vp-c-brand-1);
}
@media (forced-colors: active) {
  .filter-btn:focus-visible { outline: 2px solid CanvasText; }
}

.placeholder-fallback { font-size: 12px; opacity: .7; color: var(--vp-c-text-2); }
.empty {
  margin-top: var(--warp-space-4);
  padding: var(--warp-space-6);
  text-align: center;
  color: var(--vp-c-text-2);
  border: 1px dashed var(--warp-control-border);
  border-radius: var(--warp-radius-m);
  background: var(--vp-c-bg-soft);
}
</style>
