<script setup>
// Platform switcher (WAI-ARIA listbox pattern: button + popup listbox with aria-activedescendant).
import { computed, nextTick, ref, useId } from 'vue';
import { PLATFORMS, usePlatform } from './composables/platform.js';

// useId() is stable between SSR and hydration, so aria-labelledby/controls keep pointing at the right ids
const uid = `platform-switcher${useId()}`;
const labelId = `${uid}-label`;
const valueId = `${uid}-value`;
const listId = `${uid}-list`;
const optionId = (i) => `${uid}-opt-${PLATFORMS[i].id}`;

const { selectedPlatform, selectPlatform } = usePlatform();
const open = ref(false);
const activeIndex = ref(0);
const trigger = ref(null);
const list = ref(null);
const announcement = ref('');

const selectedIndex = computed(() =>
  Math.max(
    0,
    PLATFORMS.findIndex((p) => p.id === selectedPlatform.value),
  ),
);
const currentLabel = computed(() => PLATFORMS[selectedIndex.value].label);
const activeId = computed(() => (open.value ? optionId(activeIndex.value) : undefined));

async function openList(index = selectedIndex.value) {
  activeIndex.value = index;
  open.value = true;
  await nextTick();
  list.value?.focus();
}

function closeList(returnFocus = true) {
  open.value = false;
  if (returnFocus) trigger.value?.focus();
}

function choose(index) {
  const platform = PLATFORMS[index];
  closeList();
  if (platform.id !== selectedPlatform.value) {
    announcement.value = `Showing ${platform.label} navigation`;
    selectPlatform(platform.id);
  }
}

function onTriggerKeydown(event) {
  const keys = { ArrowDown: selectedIndex.value, ArrowUp: selectedIndex.value, Enter: null, ' ': null };
  if (!(event.key in keys)) return;
  event.preventDefault();
  openList();
}

function move(index) {
  const n = PLATFORMS.length;
  activeIndex.value = (index + n) % n;
}

function onListKeydown(event) {
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      move(activeIndex.value + 1);
      break;
    case 'ArrowUp':
      event.preventDefault();
      move(activeIndex.value - 1);
      break;
    case 'Home':
      event.preventDefault();
      move(0);
      break;
    case 'End':
      event.preventDefault();
      move(PLATFORMS.length - 1);
      break;
    case 'Enter':
    case ' ':
      event.preventDefault();
      choose(activeIndex.value);
      break;
    case 'Escape':
      event.preventDefault();
      closeList();
      break;
    case 'Tab':
      // let focus move on naturally, but close the popup first
      open.value = false;
      break;
    default:
      if (event.key.length === 1 && /\S/.test(event.key)) {
        const ch = event.key.toLowerCase();
        const start = activeIndex.value + 1;
        for (let k = 0; k < PLATFORMS.length; k++) {
          const i = (start + k) % PLATFORMS.length;
          if (PLATFORMS[i].label.toLowerCase().startsWith(ch)) {
            activeIndex.value = i;
            break;
          }
        }
      }
  }
}

function onFocusOut(event) {
  const root = event.currentTarget;
  if (!root.contains(event.relatedTarget)) open.value = false;
}
</script>

<template>
  <div class="platform-switcher" @focusout="onFocusOut">
    <span :id="labelId" class="label">Platform</span>
    <button
      ref="trigger"
      type="button"
      class="trigger"
      aria-haspopup="listbox"
      :aria-expanded="open ? 'true' : 'false'"
      :aria-controls="listId"
      :aria-labelledby="`${labelId} ${valueId}`"
      @click="open ? closeList() : openList()"
      @keydown="onTriggerKeydown"
    >
      <span :id="valueId">{{ currentLabel }}</span>
      <span class="vpi-chevron-down chevron" :class="{ open }" aria-hidden="true" />
    </button>
    <ul
      v-show="open"
      :id="listId"
      ref="list"
      class="options"
      role="listbox"
      tabindex="-1"
      :aria-labelledby="labelId"
      :aria-activedescendant="activeId"
      @keydown="onListKeydown"
    >
      <li
        v-for="(platform, i) in PLATFORMS"
        :id="optionId(i)"
        :key="platform.id"
        role="option"
        class="option"
        :class="{ active: i === activeIndex }"
        :aria-selected="platform.id === selectedPlatform ? 'true' : 'false'"
        @mousedown.prevent
        @mousemove="activeIndex = i"
        @click="choose(i)"
      >
        <span>{{ platform.label }}</span>
        <span v-if="platform.id === selectedPlatform" class="vpi-check check" aria-hidden="true" />
      </li>
    </ul>
    <span class="visually-hidden" aria-live="polite">{{ announcement }}</span>
  </div>
</template>

<style scoped>
.platform-switcher {
  position: relative;
}

.label {
  display: block;
  padding: 0 0 6px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}

.trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 36px;
  padding: 6px 10px;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.trigger:hover {
  border-color: var(--vp-c-brand-1);
}

.trigger:focus-visible,
.options:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.chevron {
  width: 16px;
  height: 16px;
  transition: transform 0.15s ease;
}

.chevron.open {
  transform: rotate(180deg);
}

.options {
  position: absolute;
  z-index: 10;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  margin: 0;
  padding: 4px;
  list-style: none;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  background: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
}

.option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 8px;
  border-radius: 4px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  cursor: pointer;
}

.option.active {
  background: var(--vp-c-default-soft);
}

.option[aria-selected='true'] {
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.check {
  width: 14px;
  height: 14px;
}

@media (forced-colors: active) {
  .option.active {
    outline: 2px solid Highlight;
  }
}

@media (prefers-reduced-motion: reduce) {
  .chevron {
    transition: none;
  }
}
</style>
