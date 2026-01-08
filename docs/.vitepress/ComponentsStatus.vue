<script setup>
import { useRoute } from 'vitepress';
import { computed } from 'vue';
import manifest from './frameworks-manifest.json';

const route = useRoute();

// Parse route to get item name
// Route path looks like: /components/alert/frameworks/vue or /patterns/emptystates/frameworks/ios
const pathSegments = computed(() => {
  const path = route.path.replace(/\.html$/, '');
  return path.split('/').filter(Boolean);
});

// Detect whether we're in components or patterns section
const section = computed(() => {
  if (pathSegments.value.includes('patterns')) return 'patterns';
  if (pathSegments.value.includes('components')) return 'components';
  return null;
});

const itemName = computed(() => {
  // Path: components/alert/frameworks/vue -> alert is at index 1
  // Path: patterns/emptystates/frameworks/ios -> emptystates is at index 1
  const sectionKey = section.value;
  if (!sectionKey) return null;
  const idx = pathSegments.value.indexOf(sectionKey);
  if (idx !== -1 && pathSegments.value[idx + 1]) {
    return pathSegments.value[idx + 1];
  }
  return null;
});

const badges = computed(() => {
  if (!section.value || !itemName.value) return [];
  return manifest[section.value]?.[itemName.value] || [];
});
</script>

<template>
  <div class="fw-badges fw-left" :class="justifyClass" role="list" aria-label="Framework support status">
    <WarpBadge
      v-for="badge in badges"
      :key="badge.label"
      :framework="badge.name"
      status="released"
    />
  </div>
</template>

<style scoped>
.fw-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin: .5rem 0 1rem;
}
.fw-auto { justify-content: center; }
@media (min-width: 960px) {
  .fw-auto { justify-content: flex-start; }
}
.fw-left   { justify-content: flex-start; }
.fw-center { justify-content: center; }
</style>
