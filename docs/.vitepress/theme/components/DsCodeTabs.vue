<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';

const { page, frontmatter } = useData();
const isDev = !!import.meta.env.DEV;

const currentDir = computed(() => page.value.relativePath.replace(/[^/]+$/, ''));

// Canonical mapping → { key, label, file }
function canon(name) {
  const n = String(name || '')
    .toLowerCase()
    .trim();
  if (n === 'react 19' || n === 'react19' || n === 'react-beta')
    return { key: 'react19', label: 'React 19', file: 'react-19' };
  if (n === 'react') return { key: 'react', label: 'React', file: 'react' };
  if (n === 'vue') return { key: 'vue', label: 'Vue', file: 'vue' };
  if (n === 'elements' || n === 'webcomponents') return { key: 'elements', label: 'Elements', file: 'elements' };
  if (n === 'android') return { key: 'android', label: 'Android', file: 'android' };
  if (n === 'ios' || n === 'apple') return { key: 'ios', label: 'iOS', file: 'ios' };
  return null;
}
const ALLOWED_KEYS = new Set(['react', 'react19', 'vue', 'elements', 'android', 'ios']);
const CANONICAL_ORDER = ['react19', 'react', 'vue', 'elements', 'android', 'ios'];

const normalizeStatus = (s) => {
  const v = String(s || '')
    .toLowerCase()
    .trim();
  return ['released', 'beta', 'developing', 'planned', 'deprecated'].includes(v) ? v : 'unsupported';
};

// Frontmatter → canonical list (dedup by key)
const fmFrameworks = computed(() => {
  const arr = Array.isArray(frontmatter.value?.frameworks) ? frontmatter.value.frameworks : [];
  const byKey = new Map();
  for (const f of arr) {
    const c = canon(f?.name);
    if (!c || !ALLOWED_KEYS.has(c.key)) continue;
    if (byKey.has(c.key)) continue; // keep first occurrence
    byKey.set(c.key, {
      key: c.key,
      label: c.label,
      file: c.file,
      status: normalizeStatus(f?.status),
      reason: f?.reason || '',
    });
  }
  return Array.from(byKey.values());
});

// Pre-compiled per-framework markdown files
const mdMap = import.meta.glob('/components/**/frameworks/*.md', { eager: true, import: 'default' });
function findMdBySuffix(suffix) {
  for (const k of Object.keys(mdMap)) {
    const norm = k.replace(/\\/g, '/');
    if (norm.endsWith(suffix)) return mdMap[k];
  }
  return null;
}

// Build panels, then enforce canonical order
const panels = computed(() =>
  fmFrameworks.value.map((fr) => {
    const suffix = `/${currentDir.value}frameworks/${fr.file}.md`;
    const comp = findMdBySuffix(suffix);
    const status = fr.status;
    return {
      slot: fr.key,
      label: fr.label,
      component: comp,
      status,
      reason: fr.reason,
      hasContent: !!comp && status !== 'unsupported',
      _debugSuffix: suffix,
    };
  }),
);

const sortedPanels = computed(() => {
  const orderIndex = new Map(CANONICAL_ORDER.map((k, i) => [k, i]));
  return panels.value.slice().sort((a, b) => {
    const ai = orderIndex.has(a.slot) ? orderIndex.get(a.slot) : 999;
    const bi = orderIndex.has(b.slot) ? orderIndex.get(b.slot) : 999;
    return ai - bi;
  });
});

const tabsOrder = computed(() => sortedPanels.value.map((p) => p.slot));
</script>

<template>
  <tabs-content v-if="sortedPanels.length" :tabs-order="tabsOrder" storage-key="ds-code-tabs">
    <!-- Panels -->
    <template v-for="p in sortedPanels" :key="p.slot" #[p.slot]>
      <!-- Beta notice at top of tab body when content exists -->
      <DsBetaNotice v-if="p.status === 'beta' && p.hasContent" class="mb-16" />

      <component v-if="p.hasContent" :is="p.component" />
      <div v-else>
        <h3>Not supported (yet).</h3>
        <p v-if="p.reason">{{ p.reason }}</p>
        <p v-if="isDev" style="opacity:.7;font-size:.85em">
          (dev) looked for: <code>{{ p._debugSuffix }}</code>
        </p>
      </div>
    </template>

    <!-- Tab headings -->
    <template v-for="p in sortedPanels" :key="`head-${p.slot}`" #[`tab-head-${p.slot}`]>
      <span>{{ p.label }}</span>
      <span v-if="p.status === 'beta'" class="beta-badge">beta</span>
      <span v-else-if="p.status === 'deprecated'" class="deprecated-badge">deprecated</span>
    </template>
  </tabs-content>

  <div v-else>
    <em>No frameworks configured in frontmatter.</em>
  </div>
</template>

<style scoped>
.beta-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 6px;
  margin-left: 6px;
  background: var(--ds-fw-chip-beta-bg);
  color: var(--ds-fw-chip-beta-fg);
  font-weight: normal;
}
.deprecated-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 6px;
  margin-left: 6px;
  background: var(--ds-fw-chip-deprecated-bg, #be3830);
  color: var(--ds-fw-chip-deprecated-fg, #fff);
  font-weight: normal;
}
</style>
