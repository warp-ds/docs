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
    description: `${entry.title} ${props.type === 'components' ? 'component' : 'pattern'}.`,
    frameworks: frameworksOf(entry),
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
    <div class="filters py-16 rounded-8 mb-16">
      <div class="pt-8 mb-16">
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

    <cards class="grid grid-cols-1 sm:grid-cols-3 gap-12">
      <card
        v-for="c in filtered"
        :key="c.slug"
        class="flex flex-col border border-gray-200 rounded-md shadow-sm"
        style="background-color: var(--vp-c-muted-bg)"
      >
        <h3 class="h4 text-m! static! mt-16! mx-16!">
          <a :href="c.href" class="block before:content-empty before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 focus:outline-0">
            {{ c.title }}
          </a>
        </h3>

        <div
          class="order-first"
          style="aspect-ratio: 4/3; display:flex; justify-content:center; align-items:center; background-color: var(--vp-c-bg-soft);"
        >
          <component
            v-if="c.svgComponent"
            :is="c.svgComponent"
            :aria-label="c.placeholder.label"
            role="img"
            class="max-w-[80%] max-h-[80%]"
          />
          <div v-else class="placeholder-fallback">{{ c.placeholder.label }}</div>
        </div>

        <p class="m-16! text-s">{{ c.description }}</p>
      </card>
    </cards>

    <div v-if="filtered.length === 0" class="empty">
      <em>No {{ type === 'components' ? 'components' : 'patterns' }} match your filter.</em>
    </div>
  </div>
</template>

<style scoped>
/* Filter buttons (square-ish, accessible) */
.filter-btn {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  min-height: 36px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font: inherit;
  cursor: pointer;
  user-select: none;
  transition: background .15s ease, border-color .15s ease, color .15s ease, box-shadow .15s ease;
}
.filter-btn:hover { background: var(--vp-c-bg-soft); }
.filter-btn:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 2px; }
.filter-btn--active,
.filter-btn[aria-pressed="true"] {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-text-1-inverted);
}
.filter-btn--active:hover,
.filter-btn[aria-pressed="true"]:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
}
@media (forced-colors: active) {
  .filter-btn:focus-visible { outline: 2px solid CanvasText; }
}

.placeholder-fallback { font-size: 12px; opacity: .7; color: var(--vp-c-text-2); }
.empty {
  margin-top: 1rem; padding: 1rem; border: 1px dashed var(--vp-c-border);
  border-radius: 8px; background: var(--vp-c-bg-soft);
}
</style>
