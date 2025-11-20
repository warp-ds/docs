<script setup>
import { useData, withBase } from 'vitepress';
import { computed, onMounted, ref } from 'vue';

const isDev = !!import.meta?.env?.DEV;
const { page } = useData();

// e.g. "components/slider/" from "components/slider/code.md"
const currentDir = computed(() => page.value.relativePath.replace(/[^/]+$/, ''));

// ----- load data.json relative to the page -----
const data = ref(null);
const dataError = ref(null);
onMounted(async () => {
  const url = withBase(`/${currentDir.value}data.json`);
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    data.value = await res.json();
  } catch (e) {
    dataError.value = `${url} → ${e?.message || e}`;
    if (isDev) console.error('[DynamicComponentCodeTabs] data.json fetch failed:', dataError.value);
  }
});

// ----- pre-compile framework markdown under components/**/frameworks/*.md -----
// vitepress dev root is `docs/`, so absolute globs start with "/"
const mdMap = import.meta.glob('/components/**/frameworks/*.md', {
  eager: true,
  import: 'default',
});

function findMdBySuffix(suffix) {
  for (const k of Object.keys(mdMap)) {
    const norm = k.replace(/\\/g, '/');
    if (norm.endsWith(suffix)) return mdMap[k];
  }
  return null;
}

function fileStem(name) {
  return name.trim().toLowerCase().replace(/\s+/g, '-');
}
function slotKey(name) {
  if (name === 'iOS') return 'iOS'; // keep exact case for slot name
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

const panels = computed(() => {
  const fw = data.value?.frameworks ?? [];
  return fw.map((fr) => {
    const stem = fileStem(fr.name);
    const suffix = `/${currentDir.value}frameworks/${stem}.md`; // -> "/components/slider/frameworks/react19.md"
    const comp = findMdBySuffix(suffix);
    return {
      slot: slotKey(fr.name),
      label: fr.name, // shown in tab head
      component: comp,
      status: fr.status,
      reason: fr.reason,
      hasContent: !!comp && fr.status !== 'unsupported',
      _debugSuffix: suffix,
    };
  });
});

const tabsOrder = computed(() => panels.value.map((p) => p.slot));
</script>

<template>
  <!-- Render ONLY your existing tabs component to avoid layout shifts -->
  <tabs-content v-if="data" :tabs-order="tabsOrder" storage-key="dynamic-component-code-tabs">
    <!-- Panels -->
    <template v-for="p in panels" :key="p.slot" #[p.slot]>
      <component v-if="p.hasContent" :is="p.component" />
      <div v-else>
        <h3>Not supported (yet).</h3>
        <p v-if="p.reason">{{ p.reason }}</p>
        <p v-if="isDev" style="opacity:.7;font-size:.85em">
          (dev) looked for: <code>{{ p._debugSuffix }}</code>
        </p>
      </div>
    </template>

    <!-- Per-tab head overrides: append (beta) without touching CSS -->
    <template v-for="p in panels" :key="`head-${p.slot}`" #[`tab-head-${p.slot}`]>
      <span>{{ p.label }}</span>
      <span v-if="p.status === 'beta'"><span class="beta-badge">beta</span></span>
    </template>
  </tabs-content>

  <div v-else-if="dataError"><em>Couldn’t load data.json</em><br /><small>{{ dataError }}</small></div>
  <div v-else><em>Loading frameworks…</em></div>
</template>
