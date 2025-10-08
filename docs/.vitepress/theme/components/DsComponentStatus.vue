<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';

const props = defineProps({
  align: { type: String, default: 'auto' }, // 'auto' | 'left' | 'center'
  hideUnsupported: { type: Boolean, default: false }, // also hides 'planned' below
});

const { frontmatter } = useData();

/* Canonical mapping: key (stable), label (UI), icon (for DsBadge) */
function canon(name) {
  const n = String(name || '')
    .toLowerCase()
    .trim();
  if (n === 'react19' || n === 'react 19' || n === 'react-beta' || n === 'react beta') {
    return { key: 'react19', label: 'React 19', icon: 'react' };
  }
  if (n === 'react') return { key: 'react', label: 'React', icon: 'react' };
  if (n === 'vue') return { key: 'vue', label: 'Vue', icon: 'vue' };
  if (n === 'elements' || n === 'webcomponents') {
    return { key: 'elements', label: 'Elements', icon: 'webcomponents' };
  }
  if (n === 'android') return { key: 'android', label: 'Android', icon: 'android' };
  if (n === 'ios' || n === 'apple') {
    return { key: 'ios', label: 'iOS', icon: 'apple' };
  }
  return null;
}

const ORDER = ['react', 'react19', 'vue', 'elements', 'android', 'ios'];
const ALLOWED = new Set(ORDER);

function normStatus(s) {
  const v = String(s || '')
    .toLowerCase()
    .trim();
  return ['released', 'beta', 'developing', 'planned', 'deprecated', 'unsupported'].includes(v) ? v : 'unsupported';
}

const items = computed(() => {
  const arr = Array.isArray(frontmatter.value?.frameworks) ? frontmatter.value.frameworks : [];
  const mapped = [];
  for (const f of arr) {
    const c = canon(f?.name);
    if (!c || !ALLOWED.has(c.key)) continue;
    const status = normStatus(f?.status);
    if (props.hideUnsupported && (status === 'unsupported' || status === 'planned')) continue;
    mapped.push({ ...c, status });
  }
  return mapped.sort((a, b) => ORDER.indexOf(a.key) - ORDER.indexOf(b.key));
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
