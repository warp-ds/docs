<script setup>
import { withBase } from 'vitepress';
import { computed, ref } from 'vue';
import manifest from './frameworks-manifest.json';

const svgModules = import.meta.glob('../components/*/placeholder.svg', { eager: true, import: 'default' });

const placeholderBySlug = (() => {
  const map = Object.create(null);
  for (const [key, mod] of Object.entries(svgModules)) {
    const s = String(key).replace(/\\/g, '/');
    const slug = s.match(/\/components\/([^/]+)\/placeholder\.svg$/)?.[1];
    if (slug) map[slug] = mod;
  }
  return map;
})();

const allItems = Object.keys(manifest).map((it) => {
  return {
    slug: it,
    title: it[0].toUpperCase() + it.slice(1),
    description: it + ' component description.',
    frameworks: manifest[it],
    svgComponent: placeholderBySlug[it],
    href: withBase(`/components/${it}/`),
    placeholder: { label: it },
  };
});

const allFrameworks = computed(() => {
  const set = new Set();
  for (const fwList of Object.values(manifest)) {
    for (const fw of fwList) {
      set.add(fw.name);
    }
  }
  return Array.from(set);
});

const q = ref('');
const picked = ref([]);

const filtered = computed(() => {
  const query = q.value.trim().toLowerCase();
  const sel = picked.value.map((v) => String(v).toLowerCase());

  return allItems.filter((it) => {
    const textOk = !query || it.title.toLowerCase().includes(query);

    const fwNames = manifest[it.slug].map((f) => f.name.toLowerCase());
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

      <div class="flex flex-wrap gap-8">
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
      <em>No components match your filter.</em>
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
