<script setup>
import { onMounted, ref } from 'vue';
import { CANONICAL_LABEL_LIST, getFrameworkLabel, normalizeStatus, SIMPLE_ICON_KEYS } from './utils/frameworks.js';
import { extractFrontmatter } from './utils/frontmatter.js';
import { fetchIconPath } from './utils/icons.js';

// Read component pages relative to this file
const modules = import.meta.glob('../../../components/*/index.md', { eager: true });

const CANONICAL = CANONICAL_LABEL_LIST;

function slugFromKey(k) {
  const m = String(k)
    .replace(/\\/g, '/')
    .match(/\/components\/([^/]+)\/index\.md$/);
  return m ? m[1] : k;
}

// Build rows from frontmatter
const rows = Object.entries(modules)
  .map(([key, mod]) => {
    const fm = extractFrontmatter(mod);
    if (!fm || !Array.isArray(fm.frameworks) || fm.frameworks.length === 0) return null;
    const slug = slugFromKey(key);
    const title = fm.title || slug;
    const statuses = Object.create(null);
    for (const fw of fm.frameworks) {
      const name = getFrameworkLabel(fw?.name);
      if (!name || !CANONICAL.includes(name)) continue;
      statuses[name] = normalizeStatus(fw?.status, { allowEmpty: true }) || '';
    }
    for (const c of CANONICAL) if (!(c in statuses)) statuses[c] = '';
    return { title, slug, statuses };
  })
  .filter(Boolean)
  .sort((a, b) => a.title.localeCompare(b.title));

const counts = {};
for (const c of CANONICAL) counts[c] = rows.filter((r) => r.statuses[c] === 'released').length;
const headers = CANONICAL.map((c) => ({ key: c }));

// Map labels to icon keys
const LABEL_TO_ICON_KEY = {
  React: 'react',
  'React 19': 'react19',
  Vue: 'vue',
  Elements: 'elements',
  Android: 'android',
  iOS: 'ios',
};

const iconPaths = ref({});

async function loadHeaderIcons() {
  for (const h of headers) {
    const iconKey = LABEL_TO_ICON_KEY[h.key];
    const siKey = iconKey ? SIMPLE_ICON_KEYS[iconKey] : null;
    if (!siKey) continue;
    const d = await fetchIconPath(siKey);
    if (d) iconPaths.value[h.key] = d;
  }
}
onMounted(loadHeaderIcons);
</script>

<template>
  <div class="matrix-wrap" v-if="rows.length">
    <table class="matrix">
      <thead>
        <tr>
          <th class="sticky left">Component</th>
          <th v-for="h in headers" :key="h.key" class="sticky">
            <span class="fw-head">
              <span class="fw-label">
                <span class="fw-icon" v-if="iconPaths[h.key]">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                    <path :d="iconPaths[h.key]" />
                  </svg>
                </span>
                <span class="fw-text">{{ h.key }}</span>
              </span>
              <span class="fw-count">({{ counts[h.key] }})</span>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.slug">
          <th class="left">
            <a :href="`/docs/components/${row.slug}/`">{{ row.title }}</a>
          </th>
          <td v-for="h in headers" :key="h.key" class="cell">
            <span v-if="row.statuses[h.key] === ''" class="na" aria-label="No data">—</span>
            <span v-else class="status-chip" :class="`status--${row.statuses[h.key]}`">
              {{ row.statuses[h.key] }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div v-else class="matrix-empty">
    <em>No components with <code>frameworks:</code> in frontmatter yet.</em>
  </div>
</template>

<style scoped>
.matrix-wrap { overflow:auto; margin:1rem 0 2rem; margin-right:calc(-1 * var(--vp-sidebar-width)); }
.matrix { width:100%; border-collapse:separate; border-spacing:0; font-size:14px; border-radius:10px; }
.matrix thead th { position:sticky; top:0; z-index:2; background:var(--vp-c-bg); border-bottom:1px solid var(--vp-c-divider); text-align:left; padding:.75rem .75rem; white-space:nowrap; }
.matrix th.left { position:sticky; left:0; z-index:3; background:var(--vp-c-bg); border-right:1px solid var(--vp-c-divider); }
.matrix tbody th.left { text-align:left; font-weight:600; padding:.5rem .75rem; white-space:nowrap; }
.matrix .cell { padding:.35rem .5rem; text-align:left; vertical-align:middle; min-width:140px; border-bottom:1px solid var(--vp-c-divider); }
.matrix .na { color:var(--vp-c-text-3); font-size:12px; }

.fw-head { display:inline-flex; align-items:center; gap:.5rem; }
.fw-label {
  display:inline-flex; align-items:center; gap:.4rem;
  padding:4px 8px; border-radius:999px;
  background: var(--ds-badge-label-bg); color: var(--ds-badge-label-fg);
}
.fw-icon { display:inline-flex; width:14px; height:14px; color: currentColor; }
.fw-text { line-height:1; font-weight:600; }
.fw-count { opacity:.75; font-size:.9em; color: var(--vp-c-text-2); }

.status-chip {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;   /* set 0 for square */
  font-weight: 700;
  font-size: 12px;
  line-height: 1;
  text-transform: lowercase;
}

.status--released   { background: var(--ds-fw-chip-released-bg);   color: var(--ds-fw-chip-released-fg); }
.status--beta       { background: var(--ds-fw-chip-beta-bg);       color: var(--ds-fw-chip-beta-fg); }
.status--developing { background: var(--ds-fw-chip-developing-bg); color: var(--ds-fw-chip-developing-fg); }
.status--planned    { background: var(--ds-fw-chip-planned-bg);    color: var(--ds-fw-chip-planned-fg); }
.status--unsupported{ background: var(--ds-fw-chip-unsupported-bg);color: var(--ds-fw-chip-unsupported-fg); }
.status--deprecated { background: var(--ds-fw-chip-deprecated-bg); color: var(--ds-fw-chip-deprecated-fg); }

</style>
