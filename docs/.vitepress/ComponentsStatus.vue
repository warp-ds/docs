<script setup>
// Platform availability for a component/pattern page: "Available on: Web · iOS · Android".
// Links go to the same page kind on the other platform (fallback: overview). Platforms without
// the item are left out. On Web Code pages it also lists the frameworks (React/Vue = legacy).
import { withBase } from 'vitepress';
import { computed } from 'vue';
import { equivalentUrl, PLATFORMS, usePlatform } from './composables/platform.js';
import manifest from './platform-manifest.json';

const FRAMEWORK_LABELS = { elements: 'Elements', react: 'React', 'react-19': 'React 19', vue: 'Vue' };

const { current } = usePlatform();

const platforms = computed(() => {
  const c = current.value;
  if (!c?.type) return [];
  return PLATFORMS.filter((p) => manifest[p.id]?.[c.type]?.[c.name]).map((p) => ({
    ...p,
    current: p.id === c.platform,
    href: withBase(equivalentUrl(c, p.id)),
  }));
});

const frameworks = computed(() => {
  const c = current.value;
  if (c?.platform !== 'web' || !c.page.startsWith('code')) return [];
  return (manifest.web[c.type]?.[c.name]?.frameworks ?? []).map((fw) => ({
    name: FRAMEWORK_LABELS[fw] ?? fw,
    status: fw === 'elements' ? 'released' : 'legacy',
  }));
});
</script>

<template>
  <div v-if="platforms.length" class="availability">
    <nav aria-label="Platform availability" class="platforms">
      <span class="caption">Available on:</span>
      <ul>
        <li v-for="p in platforms" :key="p.id">
          <a :href="p.href" :class="{ current: p.current }" :aria-current="p.current ? 'page' : undefined">{{ p.label }}</a>
        </li>
      </ul>
    </nav>
    <div v-if="frameworks.length" class="fw-badges" role="list" aria-label="Web frameworks">
      <WarpBadge v-for="fw in frameworks" :key="fw.name" role="listitem" :framework="fw.name" :status="fw.status" />
    </div>
  </div>
</template>

<style scoped>
.availability {
  margin: 1.5rem 0 2rem;
}

.platforms {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.caption {
  color: var(--vp-c-text-2);
}

.platforms ul {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.platforms li {
  margin: 0;
}

.platforms a {
  display: inline-block;
  padding: 2px 10px;
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

.platforms a:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.fw-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;
}
</style>
