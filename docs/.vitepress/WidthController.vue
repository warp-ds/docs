<script setup>
import { useDraggable } from '@vueuse/core';
import { ref, watch } from 'vue';

const props = defineProps({
  minWidth: {
    type: Number,
    default: 240,
  },
});

const right = ref(0);
const wrapperEl = ref(null);
const containerEl = ref(null);
const handleEl = ref(null);

const HANDLE_WIDTH = 16;
const { x } = useDraggable(handleEl);

watch(x, () => {
  const wrapperRect = wrapperEl.value.getBoundingClientRect();
  const newRightValue = wrapperRect.right - x.value;
  const newWidth = wrapperRect.width - newRightValue;
  if (newWidth >= props.minWidth) {
    right.value = newRightValue < HANDLE_WIDTH ? HANDLE_WIDTH : newRightValue;
  }
});

watch(right, () => {
  const v = right.value - HANDLE_WIDTH;
  containerEl.value.style.marginRight = v + 'px';
  handleEl.value.style.transform = `translateX(-${v}px)`;
});
</script>

<template>
  <div class="wd-resize-wrapper" ref="wrapperEl">
    <section ref="containerEl">
      <slot />
    </section>
    <button ref="handleEl" @mousedown="handleDragStart" @touchstart="handleDragStart" class="wd-resize-handle">
      <span class="wd-resize-handle__span" />
    </button>
  </div>
</template>

<style scoped>
.wd-resize-wrapper{
  position:relative;
  padding-right:16px;
}
.wd-resize-handle{
  transform: translateX(0px);
  cursor: ew-resize !important;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  display: flex;
  border-radius: 9999px;
}
.wd-resize-handle__span{
  display: block;
  width: 8px;
  height: 48px;
  background-color: var(--vp-button-brand-bg);
  border-radius: 9999px;
}
</style>
