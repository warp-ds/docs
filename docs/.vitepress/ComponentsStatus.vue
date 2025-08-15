<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()

const palette = computed(() => isDark.value
  ? {
      label: '2f3136',
      supported: '2e7d32',
      developing: 'a46000',
      planned: '0b5fad',
      unsupported: '6e6e6e',
      logo: 'ffffff'
    }
  : {
      label: 'f2f3f5',
      supported: '2e7d32',
      developing: 'a46000',
      planned: '0b5fad',
      unsupported: '9e9e9e',
      logo: '000000'
    }
)

function normalizeStatus(s) {
  const v = (s || '').toLowerCase()
  if (v === 'released' || v === 'supported') return 'supported'
  if (v === 'developing') return 'developing'
  if (v === 'planned') return 'planned'
  return 'unsupported'
}

function badgeUrl({ label, status, logo }) {
  const norm = normalizeStatus(status)
  const safeLabel = encodeURIComponent(label)
  const safeStatus = encodeURIComponent(norm)
  const p = palette.value
  return `https://img.shields.io/badge/${safeLabel}-${safeStatus}-${p[norm]}?logo=${logo}&style=flat&labelColor=${p.label}&logoColor=${p.logo}`
}

const props = defineProps({
  react:    { type: String, default: 'unsupported', validator: v => ['released','supported','developing','planned','unsupported'].includes((v||'').toLowerCase()) },
  react19:  { type: String, default: 'unsupported', validator: v => ['released','supported','developing','planned','unsupported'].includes((v||'').toLowerCase()) },
  vue:      { type: String, default: 'unsupported', validator: v => ['released','supported','developing','planned','unsupported'].includes((v||'').toLowerCase()) },
  elements: { type: String, default: 'unsupported', validator: v => ['released','supported','developing','planned','unsupported'].includes((v||'').toLowerCase()) },
  android:  { type: String, default: 'unsupported', validator: v => ['released','supported','developing','planned','unsupported'].includes((v||'').toLowerCase()) },
  ios:      { type: String, default: 'unsupported', validator: v => ['released','supported','developing','planned','unsupported'].includes((v||'').toLowerCase()) },
  align:    { type: String, default: 'auto' } // 'auto' | 'left' | 'center'
})

const items = computed(() => ([
  { label: 'React',    logo: 'react',               status: props.react },
  { label: 'React 19', logo: 'react',               status: props.react19 },
  { label: 'Vue',      logo: 'vue.js',              status: props.vue },
  { label: 'Elements', logo: 'webcomponentsdotorg', status: props.elements },
  { label: 'Android',  logo: 'android',             status: props.android },
  { label: 'iOS',      logo: 'apple',               status: props.ios }
]).map(it => {
  const norm = normalizeStatus(it.status)
  return {
    ...it,
    aria: `${it.label}: ${norm}`,
    url: badgeUrl({ label: it.label, status: norm, logo: it.logo })
  }
}))

const justifyClass = computed(() => {
  if (props.align === 'left') return 'fw-left'
  if (props.align === 'center') return 'fw-center'
  return 'fw-auto'
})
</script>

<template>
  <div class="fw-badges" :class="justifyClass" role="list" aria-label="Framework support status">
    <!-- optional: wire href to anchors like #react, #vue, etc. -->
    <a
      v-for="it in items"
      :key="it.label"
      class="fw-link"
      role="listitem"
      :href="it.href || '#'"
      :aria-label="it.aria"
    >
      <img
        :src="it.url"
        :alt="it.aria"
        height="20"
        class="fw-badge"
        loading="lazy"
        decoding="async"
      />
      <!-- Visually hidden text as extra redundancy -->
      <span class="sr-only">{{ it.aria }}</span>
    </a>
  </div>
</template>

<style scoped>
.fw-badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: .5rem 0 1rem;
}
.fw-link {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px 6px 0;
  border-radius: 6px;
  outline: none;
}
.fw-link:focus-visible {
  box-shadow: 0 0 0 3px rgba(0,120,212,.35);
}
.fw-auto { justify-content: center; }
@media (min-width: 960px) {
  .fw-auto { justify-content: flex-start; }
}
.fw-left   { justify-content: flex-start; }
.fw-center { justify-content: center; }
.fw-badge { vertical-align: middle; height: 20px; }
.sr-only {
  position: absolute !important;
  height: 1px; width: 1px;
  overflow: hidden; clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; border: 0; padding: 0; margin: -1px;
}
</style>
