<script setup>
import { computed } from 'vue'

const props = defineProps({
  react:    { type: String, default: 'unsupported', validator: v => ['released','beta','developing','planned','unsupported'].includes((v||'').toLowerCase()) },
  react19:  { type: String, default: 'unsupported', validator: v => ['released','beta','developing','planned','unsupported'].includes((v||'').toLowerCase()) },
  vue:      { type: String, default: 'unsupported', validator: v => ['released','beta','developing','planned','unsupported'].includes((v||'').toLowerCase()) },
  elements: { type: String, default: 'unsupported', validator: v => ['released','beta','developing','planned','unsupported'].includes((v||'').toLowerCase()) },
  android:  { type: String, default: 'unsupported', validator: v => ['released','beta','developing','planned','unsupported'].includes((v||'').toLowerCase()) },
  ios:      { type: String, default: 'unsupported', validator: v => ['released','beta','developing','planned','unsupported'].includes((v||'').toLowerCase()) },
  align:    { type: String, default: 'auto' } // 'auto' | 'left' | 'center'
})

// Map frameworks to their icon keys
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

const items = computed(() => ([
  { label: 'React',    status: props.react },
  { label: 'React 19', status: props.react19 },
  { label: 'Vue',      status: props.vue },
  { label: 'Elements', status: props.elements },
  { label: 'Android',  status: props.android },
  { label: 'iOS',      status: props.ios }
]))

const justifyClass = computed(() => {
  if (props.align === 'left') return 'fw-left'
  if (props.align === 'center') return 'fw-center'
  return 'fw-auto'
})
</script>

<template>
  <div class="fw-badges" :class="justifyClass" role="list" aria-label="Framework support status">
    <WarpBadge
      v-for="it in items"
      :key="it.label"
      :framework="it.label"
      :icon="iconFor(it.label)"
      :status="it.status"
    />
  </div>
</template>

<style scoped>
.fw-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin: .5rem 0 1rem;
}
.fw-auto { justify-content: center; }
@media (min-width: 960px) {
  .fw-auto { justify-content: flex-start; }
}
.fw-left   { justify-content: flex-start; }
.fw-center { justify-content: center; }
</style>
