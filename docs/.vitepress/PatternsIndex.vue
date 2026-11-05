<script setup>
// Cross-platform list of patterns for the /patterns/ landing page, generated from platform-manifest.json.
import { withBase } from 'vitepress';
import { computed } from 'vue';
import { PLATFORMS } from './composables/platform.js';
import manifest from './platform-manifest.json';

const svgModules = import.meta.glob(['../{web,ios,android}/patterns/*/placeholder.svg'], {
  eager: true,
  import: 'default',
});
const placeholderFor = (slug) =>
  Object.entries(svgModules).find(([key]) =>
    key.replace(/\\/g, '/').endsWith(`/patterns/${slug}/placeholder.svg`),
  )?.[1];

const patterns = computed(() => {
  const names = new Set();
  for (const p of PLATFORMS) for (const n of Object.keys(manifest[p.id].patterns)) names.add(n);
  return [...names].sort().map((slug) => {
    const platforms = PLATFORMS.filter((p) => manifest[p.id].patterns[slug]).map((p) => {
      const entry = manifest[p.id].patterns[slug];
      const page = entry.pages.includes('overview') ? 'overview' : entry.pages[0];
      return { ...p, href: withBase(`/${p.id}/patterns/${slug}/${page}`) };
    });
    const first = PLATFORMS.find((p) => manifest[p.id].patterns[slug]);
    return { slug, title: manifest[first.id].patterns[slug].title, platforms, svg: placeholderFor(slug) };
  });
});
</script>

<template>
  <ul class="patterns-index">
    <li v-for="p in patterns" :key="p.slug" class="pattern">
      <div class="art" aria-hidden="true">
        <component :is="p.svg" v-if="p.svg" class="svg" />
      </div>
      <h3 class="title">
        <a :href="p.platforms[0].href">{{ p.title }}</a>
      </h3>
      <p class="platforms">
        <span class="caption">Available on: </span>
        <template v-for="(pl, i) in p.platforms" :key="pl.id">
          <a :href="pl.href">{{ pl.label }}</a><span v-if="i < p.platforms.length - 1" aria-hidden="true"> · </span>
        </template>
      </p>
    </li>
  </ul>
</template>

<style scoped>
.patterns-index {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
}

.pattern {
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
}

.art {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 4 / 3;
  background: var(--vp-c-bg-soft);
}

.svg {
  max-width: 70%;
  max-height: 70%;
}

.title {
  margin: 16px 16px 4px !important;
  padding: 0 !important;
  border: 0 !important;
  font-size: 16px !important;
}

.title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.title a:hover {
  color: var(--vp-c-brand-1);
}

.platforms {
  margin: 0 16px 16px !important;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.platforms a {
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.title a:focus-visible,
.platforms a:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
</style>
