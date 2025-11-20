<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';

const { page } = useData();

// ex: "components/slider/" from "components/slider/index.md"
const currentDir = computed(() => page.value.relativePath.replace(/[^/]+$/, ''));
const dirAbs = computed(() => `/${currentDir.value}`);

/* Load *this component's* tab files */
const tabMap = import.meta.glob('/components/**/tab_*.md', { eager: true, import: 'default' });
const tabData = import.meta.glob('/components/**/tab_*.md', { eager: true, import: '__pageData' });

/* Default order if no numeric prefix is provided */
const DEFAULT_ORDER = new Map([
  ['overview', 10],
  ['usage', 20],
  ['styling', 30],
  ['code', 40], // label "Code" but safe slot "CodeTab"
  ['accessibility', 50],
]);

const titleCase = (s) => s.replace(/\w\S*/g, (t) => t[0].toUpperCase() + t.slice(1));
const normPath = (k) => String(k).replace(/\\/g, '/');
const inThisDir = (k, dir) => normPath(k).startsWith(dir);
const fileName = (k) => normPath(k).split('/').pop() || '';

function parseName(fn) {
  // "tab_20-usage.md" -> { order: 20, stem: "usage" }
  // "tab_usage.md"    -> { order: undefined, stem: "usage" }
  const base = fn.replace(/^tab_/, '').replace(/\.md$/, '');
  const m = base.match(/^(\d+)[-_](.+)$/);
  return m ? { order: Number(m[1]), stem: m[2] } : { order: undefined, stem: base };
}

function labelFromStem(stem) {
  return titleCase(stem.replace(/[-_]+/g, ' ').trim());
}

// Map stems → safe slot names (avoid native <code>)
function slotForStem(norm) {
  if (norm === 'overview') return 'Overview';
  if (norm === 'usage') return 'Usage';
  if (norm === 'styling') return 'Styling';
  if (norm === 'code') return 'CodeTab'; // ← avoid <code>
  if (norm === 'accessibility') return 'Accessibility';
  return `tab-${norm.replace(/[^a-z0-9]+/g, '-')}`;
}

const tabs = computed(() => {
  const dir = dirAbs.value;
  const items = Object.keys(tabMap)
    .filter((k) => inThisDir(k, dir))
    .map((k) => {
      const fname = fileName(k);
      const { order, stem } = parseName(fname);
      const norm = stem.toLowerCase();

      // label can be overridden by the tab MD's frontmatter.title
      const fmTitle = tabData[k]?.frontmatter?.title;
      const label = fmTitle || labelFromStem(stem);

      const slot = slotForStem(norm);
      const resolvedOrder = order ?? DEFAULT_ORDER.get(norm) ?? 90;

      return { slot, label, order: resolvedOrder, component: tabMap[k] };
    })
    .sort((a, b) => a.order - b.order || a.label.localeCompare(b.label));

  // Dedupe by slot (in case someone created both tab_code.md and tab_40-code.md)
  const seen = new Set();
  const deduped = [];
  for (const t of items) {
    if (seen.has(t.slot)) continue;
    seen.add(t.slot);
    deduped.push(t);
  }
  return deduped;
});

const tabsOrder = computed(() => tabs.value.map((t) => t.slot));
</script>

<template>
  <tabs-content variant="main" :tabs-order="tabsOrder" v-if="tabs.length" storage-key="ds-main-tabs">
    <!-- Panels -->
    <template v-for="t in tabs" :key="t.slot" #[t.slot]>
      <component :is="t.component" />
    </template>

    <!-- Tab headers -->
    <template v-for="t in tabs" :key="`head-${t.slot}`" #[`tab-head-${t.slot}`]>
      <span>{{ t.label }}</span>
    </template>
  </tabs-content>

  <div v-else>
    <em>No <code>tab_*.md</code> files found next to this component’s <code>index.md</code>.</em>
  </div>
</template>
