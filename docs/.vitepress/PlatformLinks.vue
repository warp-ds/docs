<script setup>
// Opt-in cross-links between the shared Design Language and platform foundation pages.
//  - On a Design Language page: "Platform specifics" — every platform page whose frontmatter has
//    `designLanguage: <this page>` (collected into platform-manifest.json by generate-manifest).
//  - On a platform page with `designLanguage:` frontmatter: a link back to the shared guidance.
import { useData, withBase } from 'vitepress';
import { computed } from 'vue';
import { PLATFORMS } from './composables/platform.js';
import manifest from './platform-manifest.json';

const { page, frontmatter } = useData();

const pageUrl = computed(() => {
  const p = page.value.relativePath.replace(/\.md$/, '');
  return p.endsWith('/index') ? `/${p.slice(0, -'index'.length)}` : `/${p}`;
});

const platformGroups = computed(() => {
  const links = manifest.designLanguage?.[pageUrl.value] ?? [];
  return PLATFORMS.map((p) => ({
    ...p,
    links: links.filter((l) => l.platform === p.id).map((l) => ({ ...l, href: withBase(l.url) })),
  })).filter((g) => g.links.length);
});

const backLink = computed(() => {
  const target = frontmatter.value.designLanguage;
  if (!target || typeof target !== 'string') return null;
  const slug = target.replace(/^\/design-language\//, '').split('/')[0] || 'design-language';
  const label = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
  return { href: withBase(target), label };
});
</script>

<template>
  <nav v-if="platformGroups.length" class="platform-links" aria-label="Platform specifics">
    <span class="caption">Platform specifics:</span>
    <span v-for="g in platformGroups" :key="g.id" class="group">
      <strong>{{ g.label }}</strong>
      <template v-for="(l, i) in g.links" :key="l.url">
        <a :href="l.href">{{ l.title }}</a><span v-if="i < g.links.length - 1">, </span>
      </template>
    </span>
  </nav>
  <nav v-else-if="backLink" class="platform-links" aria-label="Shared guidance">
    <span class="caption">Shared guidance:</span>
    <a :href="backLink.href">Design Language › {{ backLink.label }}</a>
  </nav>
</template>

<style scoped>
.platform-links {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 6px 16px;
  margin: 0 0 16px;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  font-size: 13px;
  line-height: 1.6;
}

.caption {
  color: var(--vp-c-text-2);
}

.group strong {
  margin-right: 6px;
  color: var(--vp-c-text-1);
}

.platform-links a {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  text-decoration: none;
}

.platform-links a:hover {
  text-decoration: underline;
}

.platform-links a:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
  border-radius: 2px;
}
</style>
