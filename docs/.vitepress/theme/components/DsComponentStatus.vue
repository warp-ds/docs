<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';
import { ALLOWED_FRAMEWORK_KEYS, canonicalizeFramework, FRAMEWORK_ORDER, normalizeStatus } from './utils/frameworks.js';

const props = defineProps({
  align: { type: String, default: 'auto' }, // 'auto' | 'left' | 'center'
  hideUnsupported: { type: Boolean, default: false }, // also hides 'planned' below
});

const { frontmatter } = useData();

const items = computed(() => {
  const arr = Array.isArray(frontmatter.value?.frameworks) ? frontmatter.value.frameworks : [];
  const mapped = [];
  for (const f of arr) {
    const c = canonicalizeFramework(f?.name);
    if (!c || !ALLOWED_FRAMEWORK_KEYS.has(c.key)) continue;
    const status = normalizeStatus(f?.status);
    if (props.hideUnsupported && (status === 'unsupported' || status === 'planned')) continue;
    mapped.push({ ...c, status });
  }
  return mapped.sort((a, b) => FRAMEWORK_ORDER.indexOf(a.key) - FRAMEWORK_ORDER.indexOf(b.key));
});

const justifyClass = computed(() => {
  if (props.align === 'left') return 'fw-left';
  if (props.align === 'center') return 'fw-center';
  return 'fw-auto';
});
</script>

<template>
  <div class="fw-badges" :class="justifyClass" role="list" aria-label="Framework support status">
    <DsBadge
      v-for="it in items"
      :key="it.key"
      :framework="it.label"
      :icon="it.icon"
      :status="it.status"
      size="sm"
    />
  </div>
</template>

<style scoped>
.fw-badges { display:flex; flex-wrap:wrap; gap:8px; align-items:center; margin:.5rem 0 1rem; }
.fw-auto { justify-content:center; }
@media (min-width:960px) { .fw-auto { justify-content:flex-start; } }
.fw-left { justify-content:flex-start; }
.fw-center { justify-content:center; }
</style>
