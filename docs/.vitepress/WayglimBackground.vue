<script setup>
// Wayglim animated background (interactive WebGL2 gradient), Vue port of the small wrapper in the Wayglim
// export (HTML or React). The engine and the studio settings are the export's own code,
// copied verbatim into wayglim/generated/ by `pnpm sync-wayglim <file>`; only this wrapper is ours.
//  - layout "fill" (default) covers the nearest positioned parent, behind content with position: relative;
//    "block" is an in-flow box with the studio aspect ratio.
//  - settings: optional overrides merged over the exported settings (e.g. { background: [1, 1, 1] }); the
//    background remounts when they change. Overriding `background` makes the box itself transparent.
//  - Client-only: the engine is loaded in onMounted, so nothing runs during the VitePress SSR build. It pauses
//    offscreen and in hidden tabs, shows a still frame for prefers-reduced-motion and keeps the box transparent
//    without WebGL2 (all handled by the engine).
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { WAYGLIM_ASPECT, WAYGLIM_BACKGROUND, WAYGLIM_SETTINGS } from './wayglim/generated/settings.js';

const props = defineProps({
  layout: { type: String, default: 'fill', validator: (v) => ['fill', 'block'].includes(v) },
  paused: { type: Boolean, default: false },
  /** Accessible description. Omit to hide the decorative motion from assistive technology. */
  label: { type: String, default: undefined },
  settings: { type: Object, default: undefined },
});

const container = ref(null);
let player = null;
let unmounted = false;

let mountWayglim = null;

const mount = () => {
  player?.destroy();
  player = null;
  if (unmounted || !mountWayglim || !container.value) return;
  player = mountWayglim(container.value, { ...WAYGLIM_SETTINGS, ...props.settings });
  player.setPaused(props.paused);
};

onMounted(async () => {
  ({ default: mountWayglim } = await import('./wayglim/generated/engine.js'));
  mount();
});

watch(() => props.settings, mount, { deep: true });

onBeforeUnmount(() => {
  unmounted = true;
  player?.destroy();
  player = null;
});

watch(
  () => props.paused,
  (paused) => player?.setPaused(paused),
);

const boxStyle = computed(() => ({
  ...(props.layout === 'block'
    ? { position: 'relative', width: '100%', aspectRatio: String(WAYGLIM_ASPECT) }
    : { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }),
  overflow: 'hidden',
  pointerEvents: 'none',
  backgroundColor: props.settings && 'background' in props.settings ? 'transparent' : WAYGLIM_BACKGROUND,
}));
</script>

<template>
  <div
    ref="container"
    data-wayglim=""
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="label ? undefined : 'true'"
    :style="boxStyle"
  />
</template>
