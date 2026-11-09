<script setup>
import { computed } from 'vue';

const props = defineProps({
  framework: String,
  status: String,
});

const ICON_FILENAME_MAP = {
  react: 'react',
  'react 19': 'react',
  vue: 'vuedotjs',
  android: 'android',
  ios: 'apple',
  elements: 'webcomponentsdotorg',
};

const iconName = computed(() => ICON_FILENAME_MAP[props.framework.toLowerCase()] || '');
const statusKey = computed(() => (props.status === 'unsupported' ? 'legacy' : props.status.toLocaleLowerCase()));
</script>

<template>
  <!-- One soft pill: [icon Framework | ● status]. Status colour comes from --ds-status-* (custom.css). -->
  <span class="ds-badge" :class="`ds-badge--${statusKey}`">
    <span class="ds-badge__label">
      <span v-if="iconName" class="ds-badge__icon" role="img" aria-hidden="true">
        <svg :data-src="`https://cdn.jsdelivr.net/npm/simple-icons@13/icons/${iconName}.svg`" fill="currentColor"></svg>
      </span>
      <span class="ds-badge__framework">{{ framework }}</span>
    </span>
    <span class="ds-badge__status">
      <span class="ds-badge__dot" aria-hidden="true"></span>
      {{ status }}
    </span>
  </span>
</template>

<style scoped>
.ds-badge {
  display: inline-flex;
  align-items: stretch;
  height: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  overflow: hidden;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
}

.ds-badge__label,
.ds-badge__status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.ds-badge__label {
  padding: 0 8px 0 10px;
  color: var(--vp-c-text-1);
}

.ds-badge__icon {
  display: inline-flex;
  width: 13px;
  height: 13px;
  color: var(--vp-c-text-2);
}

.ds-badge__icon svg {
  width: 100%;
  height: 100%;
}

.ds-badge__status {
  padding: 0 10px 0 8px;
  background: var(--ds-badge-bg);
  color: var(--ds-badge-fg);
  font-weight: 500;
  text-transform: capitalize;
}

.ds-badge__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--ds-badge-dot);
}

.ds-badge--released {
  --ds-badge-bg: var(--ds-status-released-bg);
  --ds-badge-fg: var(--ds-status-released-fg);
  --ds-badge-dot: var(--ds-status-released-dot);
}
.ds-badge--beta {
  --ds-badge-bg: var(--ds-status-beta-bg);
  --ds-badge-fg: var(--ds-status-beta-fg);
  --ds-badge-dot: var(--ds-status-beta-dot);
}
.ds-badge--developing {
  --ds-badge-bg: var(--ds-status-developing-bg);
  --ds-badge-fg: var(--ds-status-developing-fg);
  --ds-badge-dot: var(--ds-status-developing-dot);
}
.ds-badge--planned {
  --ds-badge-bg: var(--ds-status-planned-bg);
  --ds-badge-fg: var(--ds-status-planned-fg);
  --ds-badge-dot: var(--ds-status-planned-dot);
}
.ds-badge--legacy {
  --ds-badge-bg: var(--ds-status-legacy-bg);
  --ds-badge-fg: var(--ds-status-legacy-fg);
  --ds-badge-dot: var(--ds-status-legacy-dot);
}
.ds-badge--deprecated {
  --ds-badge-bg: var(--ds-status-deprecated-bg);
  --ds-badge-fg: var(--ds-status-deprecated-fg);
  --ds-badge-dot: var(--ds-status-deprecated-dot);
}

@media (forced-colors: active) {
  .ds-badge__dot {
    background: CanvasText;
  }
}
</style>
