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
  <!-- same media card as the components grid; the card opens the first platform, the header switch on
       that page moves between platforms -->
  <ul class="dc-grid dc-grid--3">
    <li v-for="p in patterns" :key="p.slug">
      <a :href="p.platforms[0].href" class="dc-card dc-card--media">
        <span class="dc-card__media" aria-hidden="true">
          <component :is="p.svg" v-if="p.svg" />
        </span>
        <span class="dc-card__body">
          <span class="dc-card__title">{{ p.title }}</span>
          <span class="dc-card__meta">{{ p.platforms.map((pl) => pl.label).join(' · ') }}</span>
        </span>
      </a>
    </li>
  </ul>
</template>
