---
title: Framework Support Matrix
outline: false
---

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

// 1) Load all component data.json files (relative to this page inside /components)
const modules = import.meta.glob('./**/data.json', { eager: true })

// 2) Normalize framework names to your canonical headers
const NAME_MAP = {
  'react-beta': 'React 19',
  'react19': 'React 19',
  'react 19': 'React 19',
  'react': 'React',
  'vue': 'Vue',
  'elements': 'Elements',
  'android': 'Android',
  'ios': 'iOS'
}
const CANONICAL = ['React', 'React 19', 'Vue', 'Elements', 'Android', 'iOS']

// 3) Normalize statuses to your four values
function normalizeStatus(s) {
  const v = (s || '').toLowerCase()
  if (v === 'released' || v === 'supported') return 'supported'
  if (v === 'developing' || v === 'in-progress' || v === 'wip') return 'developing'
  if (v === 'planned' || v === 'todo') return 'planned'
  return v ? 'unsupported' : '' // empty when missing
}

// 4) Dark/light palette
const { isDark } = useData()
const palette = computed(() => isDark.value
  ? { label: '2f3136', supported: '2e7d32', developing: 'a46000', planned: '0b5fad', unsupported: '6e6e6e', logo: 'ffffff' }
  : { label: 'f2f3f5', supported: '2e7d32', developing: 'a46000', planned: '0b5fad', unsupported: '9e9e9e', logo: '000000' }
)

function badgeUrl({ label, status, logo }) {
  const p = palette.value
  const color = p[status] || p.unsupported
  const safeLabel = encodeURIComponent(label)
  const safeStatus = encodeURIComponent(status)
  return `https://img.shields.io/badge/${safeLabel}-${safeStatus}-${color}?logo=${logo}&style=flat&labelColor=${p.label}&logoColor=${p.logo}`
}

function logoFor(framework) {
  switch (framework) {
    case 'React':
    case 'React 19': return 'react'
    case 'Vue':      return 'vue.js'
    case 'Elements': return 'webcomponentsdotorg'
    case 'Android':  return 'android'
    case 'iOS':      return 'apple'
    default:         return ''
  }
}

// 5) Build rows from the JSON
function slugFromPath(path) {
  // ./button/data.json or ./components/button/data.json -> button
  const m = path.match(/(?:^|\/)components?\/([^/]+)\/data\.json$/) || path.match(/\/([^/]+)\/data\.json$/)
  return m ? m[1] : path
}

function normalizeName(raw) {
  const key = String(raw || '').toLowerCase().trim()
  return NAME_MAP[key] || raw
}

// rows: { title, slug, statuses: { [framework]: 'supported'|'developing'|'planned'|'unsupported'|'' } }
const rows = Object.entries(modules)
  .map(([path, mod]) => {
    const data = (mod && mod.default) ? mod.default : mod
    const slug = slugFromPath(path)
    const title = data?.title || slug
    const statuses = Object.create(null)

    const frameworks = Array.isArray(data?.frameworks) ? data.frameworks : []
    for (const fw of frameworks) {
      const name = normalizeName(fw.name)
      if (!CANONICAL.includes(name)) continue // skip non-code entries like Figma
      statuses[name] = normalizeStatus(fw.status)
    }

    for (const key of CANONICAL) {
      if (!(key in statuses)) statuses[key] = ''
    }

    return { title, slug, statuses }
  })
  .sort((a, b) => a.title.localeCompare(b.title))

// 6) Counts per framework for "supported"
const counts = {}
for (const key of CANONICAL) {
  counts[key] = rows.filter(r => r.statuses[key] === 'supported').length
}

// 7) Headers as { key, label } so we can show "React (32)" but still index with the key
const headers = CANONICAL.map(key => ({ key, label: `${key} (${counts[key]})` }))
</script>
# Framework coverage
<div class="matrix-wrap">
  <table class="matrix">
    <thead>
      <tr>
        <th class="sticky left">Component</th>
        <th v-for="h in headers" :key="h.key" class="sticky">
          {{ h.label }}
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
          <img
            v-else
            class="badge"
            :alt="`${h.key}: ${row.statuses[h.key]}`"
            :src="badgeUrl({ label: h.key, status: row.statuses[h.key], logo: logoFor(h.key) })"
            height="18"
            loading="lazy"
            decoding="async"
          />
        </td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.matrix-wrap {
  overflow: auto;
  margin: 1rem 0 2rem;
  xborder: 1px solid var(--vp-c-divider);
  xborder-radius: 10px;
  margin-right: calc(-1 * var(--vp-sidebar-width)); /* pull to the right */
}

/* Table basics */
.matrix {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
  border-radius: 10px;
}

/* Header */
.matrix thead th {
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
  text-align: left;
  padding: .75rem .75rem;
  white-space: nowrap;
}

/* First column sticky */
.matrix th.left {
  position: sticky;
  left: 0;
  z-index: 3;
  background: var(--vp-c-bg);
  border-right: 1px solid var(--vp-c-divider);
}

/* Body cells */
.matrix tbody th.left {
  text-align: left;
  font-weight: 600;
  padding: .5rem .75rem;
  white-space: nowrap;
}

.matrix .cell {
  padding: .35rem .5rem;
  text-align: center;
  vertical-align: middle;
  min-width: 120px; /* keeps badges from squishing too hard */
  border-bottom: 1px solid var(--vp-c-divider);
}

.matrix .badge {
  height: 18px;
  vertical-align: middle;
}

.matrix .na {
  color: var(--vp-c-text-3);
  font-size: 12px;
}
</style>
