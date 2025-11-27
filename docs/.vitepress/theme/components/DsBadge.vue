<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { normalizeStatus } from './utils/frameworks.js';
import { fetchIconPath } from './utils/icons.js';

const props = defineProps({
  framework: { type: String, required: true }, // "React"
  status: { type: String, default: 'unsupported' }, // released|beta|developing|planned|deprecated|unsupported
  icon: { type: String, default: '' }, // simple-icons key (react, vuedotjs, apple, android, webcomponentsdotorg)
  href: { type: String, default: '' }, // optional link
  size: { type: String, default: 'md' }, // 'sm' | 'md'
  border: { type: String, default: 'none' }, // 'none' | 'neutral' | 'status'
});

const statusKey = computed(() => normalizeStatus(props.status));

/* Icon loading */
const iconPath = ref(null);

async function refreshIcon() {
  const key = props.icon || props.framework;
  iconPath.value = await fetchIconPath(key);
}
onMounted(refreshIcon);
watch(() => [props.icon, props.framework], refreshIcon);

/* a11y */
const aria = computed(() => `${props.framework}: ${statusKey.value}`);
</script>

<template>
  <component
    :is="href ? 'a' : 'span'"
    class="ds-badge"
    :class="[
      `ds-badge--${size}`,
      `ds-badge--${statusKey}`,
      { 'ds-badge--border': border !== 'none',
        'ds-badge--border-neutral': border === 'neutral',
        'ds-badge--border-status':  border === 'status' }
    ]"
    :href="href || undefined"
    :aria-label="aria"
  >
    <!-- Left segment: label (neutral) -->
    <span class="ds-badge__segment ds-badge__segment--label">
      <span v-if="iconPath" class="ds-badge__icon" role="img" aria-hidden="true">
        <svg viewBox="0 0 24 24" :width="14" :height="14" fill="currentColor">
          <path v-if="iconPath" :d="iconPath" />
        </svg>
      </span>
      <span class="ds-badge__framework">{{ framework }}</span>
    </span>

    <span class="ds-badge__divider"></span>

    <!-- Right segment: status (colored) -->
    <span class="ds-badge__segment ds-badge__segment--status">
      <span class="ds-badge__status">{{ statusKey }}</span>
    </span>
  </component>
</template>

<style scoped>
.ds-badge {
  display: inline-flex;
  align-items: stretch;
  border-radius: 3px !important;
  overflow: hidden;
  text-decoration: none;
  line-height: 1;
  font-weight: 600;
  white-space: nowrap;
  border: none;
}

/* Optional border */
.ds-badge--border { border: 1px solid var(--ds-badge-border-color, transparent); }

/* Sizes */
.ds-badge--md { font-size: 13px; }
.ds-badge--sm { font-size: 12px; }

/* Segments */
.ds-badge__segment {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  padding: 6px 10px;
}
.ds-badge--sm .ds-badge__segment { padding: 3px 8px; gap: .4rem; }

/* Left label segment — use tokens with fallbacks */
.ds-badge__segment--label {
  background: var(--ds-badge-label-bg, var(--vp-c-bg-soft));
  color: var(--ds-badge-label-fg, var(--vp-c-text-1));
}

/* Divider between segments (subtle) */
.ds-badge__divider {
  width: 1px;
  background: color-mix(in oklab, var(--ds-badge-border-color, transparent) 60%, transparent);
}

/* Right status segment — per-status variables resolved from classes below */
.ds-badge__segment--status {
  background: var(--ds-badge-status-bg);
  color: var(--ds-badge-status-fg);
}

/* Icon */
.ds-badge__icon { display: inline-flex; width: 14px; height: 14px; color: currentColor; }

/* Text */
.ds-badge__status { text-transform: lowercase; }

/* -------- Map status classes → chip variables (with fallbacks) -------- */
.ds-badge--released   { --ds-badge-status-bg: var(--ds-fw-chip-released-bg,   #2e7d32); --ds-badge-status-fg: var(--ds-fw-chip-released-fg,   #fff); }
.ds-badge--beta       { --ds-badge-status-bg: var(--ds-fw-chip-beta-bg,       #a06a00); --ds-badge-status-fg: var(--ds-fw-chip-beta-fg,       #fff); }
.ds-badge--developing { --ds-badge-status-bg: var(--ds-fw-chip-developing-bg, #a46000); --ds-badge-status-fg: var(--ds-fw-chip-developing-fg, #fff); }
.ds-badge--planned    { --ds-badge-status-bg: var(--ds-fw-chip-planned-bg,    #0b5fad); --ds-badge-status-fg: var(--ds-fw-chip-planned-fg,    #fff); }
.ds-badge--deprecated { --ds-badge-status-bg: var(--ds-fw-chip-deprecated-bg, #be3830); --ds-badge-status-fg: var(--ds-fw-chip-deprecated-fg, #fff); }
.ds-badge--unsupported{ --ds-badge-status-bg: var(--ds-fw-chip-unsupported-bg,#c4c4c4); --ds-badge-status-fg: var(--ds-fw-chip-unsupported-fg,#111); }

/* Border color variants (thin, shields-like) */
.ds-badge--border-neutral { --ds-badge-border-color: var(--ds-badge-label-bg, var(--vp-c-bg-soft)); }
.ds-badge--border-status  { --ds-badge-border-color: var(--ds-badge-status-bg, #ccc); }

/* Focus for <a> variant */
a.ds-badge:focus-visible {
  outline: 2px solid color-mix(in oklab, var(--ds-badge-border-color, #0078d4) 60%, #0078d4 40%);
  outline-offset: 2px;
}
</style>
