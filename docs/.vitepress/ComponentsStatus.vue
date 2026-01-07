<script setup>
import { useRoute } from 'vitepress';
import { computed } from 'vue';
import manifest from './frameworks-manifest.json';

const route = useRoute();

// Parse route to get component name and current framework
// Route path looks like: /components/alert/frameworks/vue
const pathSegments = computed(() => {
  const path = route.path.replace(/\.html$/, '');
  return path.split('/').filter(Boolean);
});

const componentName = computed(() => {
  // Path: components/alert/frameworks/vue -> alert is at index 1
  const idx = pathSegments.value.indexOf('components');
  if (idx !== -1 && pathSegments.value[idx + 1]) {
    return pathSegments.value[idx + 1];
  }
  return null;
});

const badges = computed(() => {
  if (!componentName.value) return [];
  return manifest[componentName.value] || [];
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
