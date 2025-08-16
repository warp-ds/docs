<script setup>
import { computed, ref, watch, onMounted } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({
  framework: { type: String, required: true },         // "React"
  status:    { type: String, default: 'unsupported' }, // 'released'|'beta'|'developing'|'planned'|'unsupported'
  icon:      { type: String, default: '' },            // 'react'|'vue'|'android'|'apple'|'webcomponents'
  href:      { type: String, default: '' },            // optional link
  size:      { type: String, default: 'md' },          // 'sm'|'md'

  /* optional color overrides (HEX) */
  colorReleased:    { type: String, default: '' },
  colorBeta:        { type: String, default: '' },
  colorDeveloping:  { type: String, default: '' },
  colorPlanned:     { type: String, default: '' },
  colorUnsupported: { type: String, default: '' },
  colorLabelLight:  { type: String, default: '' },     // neutral left bg (light)
  colorLabelDark:   { type: String, default: '' },     // neutral left bg (dark)

  /* border behavior: 'none' (Shields flat), 'neutral' (left bg), 'status' (right bg) */
  border: { type: String, default: 'none' } // 'none' | 'neutral' | 'status'
})

const { isDark } = useData()

function normalizeStatus(s) {
  const v = String(s || '').toLowerCase().trim()
  if (v === 'released')   return 'released'
  if (v === 'beta')       return 'beta'
  if (v === 'developing') return 'developing'
  if (v === 'planned')    return 'planned'
  return 'unsupported'
}
const statusKey = computed(() => normalizeStatus(props.status))

/* theme-aware palette */
const palette = computed(() => {
  const labelLight = props.colorLabelLight || '#f2f3f5'
  const labelDark  = props.colorLabelDark  || '#2f3136'
  const dark = {
    labelBg: labelDark, labelFg: '#ffffff',
    released:    props.colorReleased    || '#2e7d32',
    beta:        props.colorBeta        || '#b07d00',
    developing:  props.colorDeveloping  || '#a46000',
    planned:     props.colorPlanned     || '#0b5fad',
    unsupported: props.colorUnsupported || '#555555',
    statusFgDefault: '#ffffff',
    statusFgOnGrey:  '#ffffff'
  }
  const light = {
    labelBg: labelLight, labelFg: '#111111',
    released:    props.colorReleased    || '#2e7d32',
    beta:        props.colorBeta        || '#a06a00',
    developing:  props.colorDeveloping  || '#a46000',
    planned:     props.colorPlanned     || '#0b5fad',
    unsupported: props.colorUnsupported || '#c4c4c4',
    statusFgDefault: '#ffffff',
    statusFgOnGrey:  '#111111'
  }
  return isDark.value ? dark : light
})

const colors = computed(() => {
  const p = palette.value
  const s = statusKey.value
  const statusBg = p[s]
  const statusFg = (s === 'unsupported') ? p.statusFgOnGrey : p.statusFgDefault
  const borderColor =
    props.border === 'neutral' ? p.labelBg :
    props.border === 'status'  ? statusBg  :
    'transparent'
  return {
    labelBg: p.labelBg,
    labelFg: p.labelFg,
    statusBg,
    statusFg,
    borderColor
  }
})

/* ---------------- Simple Icons fetch (client-only) ---------------- */
const ICON_FILENAME_MAP = {
  react: 'react',
  'react 19': 'react',
  'react19': 'react',
  'react-beta': 'react',
  vue: 'vuedotjs',
  'vue.js': 'vuedotjs',
  vuedotjs: 'vuedotjs',
  android: 'android',
  apple: 'apple',
  ios: 'apple',
  webcomponents: 'webcomponentsdotorg',
  webcomponentsdotorg: 'webcomponentsdotorg',
  elements: 'webcomponentsdotorg'
}

// simple in-memory cache { key: pathD }
const iconCache = new Map()

function keyToFilename(key) {
  const k = String(key || '').toLowerCase().trim()
  return ICON_FILENAME_MAP[k] || ''
}

async function loadIconPath(key) {
  const filename = keyToFilename(key)
  if (!filename) return null
  if (iconCache.has(filename)) return iconCache.get(filename)

  try {
    // Fetch the SVG from jsDelivr (same shapes Shields uses)
    // Pin to a major to avoid surprise changes; bump if you need newer icons.
    const url = `https://cdn.jsdelivr.net/npm/simple-icons@13/icons/${filename}.svg`
    const res = await fetch(url)
    if (!res.ok) return null
    const svg = await res.text()
    // Extract first path's "d" attribute
    const match = svg.match(/<path[^>]*d="([^"]+)"/i)
    const d = match ? match[1] : null
    if (d) iconCache.set(filename, d)
    return d
  } catch {
    return null
  }
}

const iconPath = ref(null)

async function refreshIcon() {
  if (typeof window === 'undefined') { iconPath.value = null; return }
  const key = props.icon || props.framework
  iconPath.value = await loadIconPath(key)
}

onMounted(refreshIcon)
watch(() => [props.icon, props.framework], refreshIcon)
const hasIcon = computed(() => !!iconPath.value)

/* a11y */
const aria = computed(() => `${props.framework}: ${statusKey.value}`)
</script>

<template>
  <!-- Shields-like split: neutral left, colored right, no border by default -->
  <component
    :is="href ? 'a' : 'span'"
    class="warp-badge"
    :class="[
      `warp-badge--${size}`,
      `warp-badge--${statusKey}`,
      { 'warp-badge--border': border !== 'none',
        'warp-badge--border-neutral': border === 'neutral',
        'warp-badge--border-status':  border === 'status' }
    ]"
    :href="href || undefined"
    :aria-label="aria"
    :style="{ '--wb-border': colors.borderColor }"
  >
    <!-- Left segment: framework label (neutral bg) -->
    <span
      class="warp-badge__segment warp-badge__segment--label"
      :style="{ '--wb-bg': colors.labelBg, '--wb-fg': colors.labelFg }"
    >
      <span v-if="hasIcon" class="warp-badge__icon" role="img" aria-hidden="true">
        <!-- Icon path from Simple Icons, colored as label text (logoColor in Shields) -->
        <svg viewBox="0 0 24 24" :width="14" :height="14" fill="currentColor">
          <path v-if="iconPath" :d="iconPath" />
        </svg>
      </span>
      <span class="warp-badge__framework">{{ framework }}</span>
    </span>

    <!-- Divider between segments -->
    <span class="warp-badge__divider"></span>

    <!-- Right segment: status (colored) -->
    <span
      class="warp-badge__segment warp-badge__segment--status"
      :style="{ '--wb-bg': colors.statusBg, '--wb-fg': colors.statusFg }"
    >
      <span class="warp-badge__status">{{ statusKey }}</span>
    </span>
  </component>
</template>

<style scoped>
/* Block */
.warp-badge {
  display: inline-flex;
  align-items: stretch;
  border-radius: 999px;
  overflow: hidden;       /* clip segments to pill */
  text-decoration: none;
  line-height: 1;
  font-weight: 600;
  text-shadow: none;
  box-shadow: none;
  white-space: nowrap;
  border: none;           /* Shields: no outer border by default */
  border-radius: 3px!important;
}

/* Optional border variants */
.warp-badge--border { border: 1px solid var(--wb-border, transparent); }

/* Sizes */
.warp-badge--md { font-size: 13px; }
.warp-badge--sm { font-size: 12px; }

/* Segments */
.warp-badge__segment {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  background: var(--wb-bg);
  color: var(--wb-fg);
  padding: 6px 10px;        /* md defaults */
}
.warp-badge--sm .warp-badge__segment { padding: 3px 8px; gap: .4rem; }

/* Divider between segments (subtle) */
.warp-badge__divider {
  width: 1px;
  background: color-mix(in oklab, var(--wb-border, transparent) 60%, transparent);
}

/* Icon */
.warp-badge__icon {
  display: inline-flex;
  width: 14px;
  height: 14px;
  color: currentColor; /* same as label fg */
}

/* Text */
.warp-badge__status { text-transform: lowercase; }

/* Focus ring for <a> variant */
a.warp-badge:focus-visible {
  outline: 2px solid color-mix(in oklab, var(--wb-border, #0078d4) 60%, #0078d4 40%);
  outline-offset: 2px;
}
</style>

<!--
------------------------------------------------------------------------------
WarpBadge.vue — User Guide (split background, Simple Icons fetched at runtime)
------------------------------------------------------------------------------

USAGE
------------------------------------------------------------------------------
<WarpBadge framework="React" icon="react" status="released" />
<WarpBadge framework="Vue"   icon="vue"   status="planned" size="sm" />
<WarpBadge framework="iOS"   icon="apple" status="unsupported" href="/components/buttons/" />

PROPS
------------------------------------------------------------------------------
framework (String, required)
  - Left/label text (neutral background segment).

status (String, default: 'unsupported')
  - Allowed (case-insensitive): 'released' | 'beta' | 'developing' | 'planned' | 'unsupported'.

icon (String, optional)
  - Simple Icons key. Supported mappings include:
      'react', 'react 19', 'react19', 'react-beta' → react
      'vue', 'vue.js', 'vuedotjs'                  → vuedotjs
      'android'                                    → android
      'apple', 'ios'                               → apple
      'webcomponents', 'webcomponentsdotorg', 'elements' → webcomponentsdotorg
  - If omitted, the component tries `framework` as the key.

href (String, optional)
  - If set, renders as <a>; otherwise <span>.

size (String, default: 'md')
  - 'md' or 'sm'. Both keep the split layout.

border (String, default: 'none')
  - 'none'     → no outer border (closest to Shields `flat`).
  - 'neutral'  → thin border using the left segment color.
  - 'status'   → thin border using the right/status color.

Color overrides (HEX):
  - colorReleased, colorBeta, colorDeveloping, colorPlanned, colorUnsupported
  - colorLabelLight, colorLabelDark

THEMING
------------------------------------------------------------------------------
- Auto-detects light/dark via `useData().isDark`.
- Left segment uses neutral theme color; right segment uses status color.
- Icon uses the left text color (like Shields `logoColor`).

ACCESSIBILITY
------------------------------------------------------------------------------
- ARIA label: "<framework>: <status>".
- <a> variant has a visible focus outline.
- Icons are decorative; announced text is framework + status.

NETWORK & CACHING
------------------------------------------------------------------------------
- Icons are fetched once per key from jsDelivr (Simple Icons ESM build) and cached in-memory.
- You can pin or bump the version in the URL if you need specific shapes:
    https://cdn.jsdelivr.net/npm/simple-icons@13/icons/<name>.svg
- If the fetch fails, the badge renders without an icon.

BEM
------------------------------------------------------------------------------
Block:     warp-badge
Elements:  warp-badge__segment, warp-badge__segment--label, warp-badge__segment--status,
           warp-badge__icon, warp-badge__framework, warp-badge__status, warp-badge__divider
Modifiers: warp-badge--sm, warp-badge--md, warp-badge--released, --beta, --developing, --planned, --unsupported,
           warp-badge--border, warp-badge--border-neutral, warp-badge--border-status
------------------------------------------------------------------------------
-->
