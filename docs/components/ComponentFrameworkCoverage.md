---
title: Framework Support Matrix
outline: false
---

<script setup>
// No import needed if WarpBadge is globally registered

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

// 3) Normalize to the clean set
function normalizeStatus(s) {
  const v = String(s || '').toLowerCase().trim()
  if (v === 'released')   return 'released'
  if (v === 'beta')       return 'beta'
  if (v === 'developing') return 'developing'
  if (v === 'planned')    return 'planned'
  return v ? 'unsupported' : '' // empty when missing
}

// Optional: icon keys for WarpBadge
function iconFor(framework) {
  switch (framework) {
    case 'React':
    case 'React 19': return 'react'
    case 'Vue':      return 'vue'
    case 'Elements': return 'webcomponents'
    case 'Android':  return 'android'
    case 'iOS':      return 'apple'
    default:         return ''
  }
}

// 4) Build rows from the JSON
function slugFromPath(path) {
  // ./button/data.json or ./components/button/data.json -> button
  const m = path.match(/(?:^|\/)components?\/([^/]+)\/data\.json$/) || path.match(/\/([^/]+)\/data\.json$/)
  return m ? m[1] : path
}
function normalizeName(raw) {
  const key = String(raw || '').toLowerCase().trim()
  return NAME_MAP[key] || raw
}

// rows: { title, slug, statuses: { [framework]: 'released'|'beta'|'developing'|'planned'|'unsupported'|'' } }
const rows = Object.entries(modules)
  .map(([path, mod]) => {
    const data = (mod && mod.default) ? mod.default : mod
    const slug = slugFromPath(path)
    const title = data?.title || slug
    const statuses = Object.create(null)

    const frameworks = Array.isArray(data?.frameworks) ? data.frameworks : []
    for (const fw of frameworks) {
      const name = normalizeName(fw?.name)
      if (!CANONICAL.includes(name)) continue // skip non-code entries like Figma
      statuses[name] = normalizeStatus(fw?.status)
    }

    // Ensure all canonical columns exist (even if empty)
    for (const key of CANONICAL) {
      if (!(key in statuses)) statuses[key] = ''
    }

    return { title, slug, statuses }
  })
  .sort((a, b) => a.title.localeCompare(b.title))

// 5) Counts per framework for "released"
const counts = {}
for (const key of CANONICAL) {
  counts[key] = rows.filter(r => r.statuses[key] === 'released').length
}

// 6) Headers as { key, label } so we can show "React (32)" but still index by key
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
          <WarpBadge
            v-else
            size="sm"
            :framework="h.key"
            :icon="iconFor(h.key)"
            :status="row.statuses[h.key]"
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
  text-align: left;
  vertical-align: middle;
  min-width: 140px; /* room for the sm pills */
  border-bottom: 1px solid var(--vp-c-divider);
}

/* Optional: lighten the em dash 'no data' */
.matrix .na {
  color: var(--vp-c-text-3);
  font-size: 12px;
}
</style>
