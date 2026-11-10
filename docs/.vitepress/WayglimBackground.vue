<script setup>
// Wayglim animated background (interactive WebGL2 gradient), Vue port of the small wrapper in the Wayglim
// export (HTML or React). The engine and the studio settings are the export's own code,
// copied verbatim into wayglim/generated/ by `pnpm sync-wayglim <file>`; only this wrapper is ours.
//  - layout "fill" (default) covers the nearest positioned parent, behind content with position: relative;
//    "block" is an in-flow box with the studio aspect ratio.
//  - settings: optional overrides merged over the exported settings (e.g. { background: [1, 1, 1] }); the
//    background remounts when they change. Overriding `background` makes the box itself transparent.
//  - Client-only and lazy: the engine and the settings (with the grain texture) are loaded in onMounted, so
//    nothing runs during the VitePress SSR build and pages without the background don't download them. The
//    engine pauses offscreen and in hidden tabs, shows a still frame for prefers-reduced-motion and keeps the
//    box transparent without WebGL2.
//  - Software rendering (no usable GPU: SwiftShader, llvmpipe, …) shows a still frame too: animating there
//    drops the whole page to a few frames per second.
//  - Unmounting (or remounting on a settings change) releases the WebGL context right away instead of
//    waiting for garbage collection, so theme switches don't pile up contexts.
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps({
  layout: { type: String, default: 'fill', validator: (v) => ['fill', 'block'].includes(v) },
  paused: { type: Boolean, default: false },
  /** Accessible description. Omit to hide the decorative motion from assistive technology. */
  label: { type: String, default: undefined },
  settings: { type: Object, default: undefined },
});

const container = ref(null);
const exported = ref(null); // { WAYGLIM_SETTINGS, WAYGLIM_BACKGROUND, WAYGLIM_ASPECT } once loaded
let player = null;
let unmounted = false;
let mountWayglim = null;
let softwareRendering = false;

const SOFTWARE_RENDERER = /swiftshader|llvmpipe|softpipe|software|microsoft basic render/i;

function detectSoftwareRendering() {
  try {
    const gl = document.createElement('canvas').getContext('webgl2');
    if (!gl) return false;
    const info = gl.getExtension('WEBGL_debug_renderer_info');
    const renderer = String(gl.getParameter(info ? info.UNMASKED_RENDERER_WEBGL : gl.RENDERER));
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return SOFTWARE_RENDERER.test(renderer);
  } catch {
    return false;
  }
}

function destroy() {
  const gl = container.value?.querySelector('canvas')?.getContext('webgl2');
  player?.destroy();
  player = null;
  gl?.getExtension('WEBGL_lose_context')?.loseContext();
}

function mount() {
  destroy();
  if (unmounted || !mountWayglim || !exported.value || !container.value) return;
  player = mountWayglim(container.value, { ...exported.value.WAYGLIM_SETTINGS, ...props.settings });
  if (softwareRendering) {
    // let the first frame draw, then hold it
    const held = player;
    requestAnimationFrame(() => requestAnimationFrame(() => held === player && player.setPaused(true)));
  } else {
    player.setPaused(props.paused);
  }
}

onMounted(async () => {
  const [engine, settings] = await Promise.all([
    import('./wayglim/generated/engine.js'),
    import('./wayglim/generated/settings.js'),
  ]);
  if (unmounted) return;
  mountWayglim = engine.default;
  exported.value = settings;
  softwareRendering = detectSoftwareRendering();
  mount();
});

watch(() => props.settings, mount, { deep: true });

onBeforeUnmount(() => {
  unmounted = true;
  destroy();
});

watch(
  () => props.paused,
  (paused) => player?.setPaused(paused || softwareRendering),
);

const boxStyle = computed(() => ({
  ...(props.layout === 'block'
    ? { position: 'relative', width: '100%', aspectRatio: String(exported.value?.WAYGLIM_ASPECT ?? 16 / 9) }
    : { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }),
  overflow: 'hidden',
  pointerEvents: 'none',
  backgroundColor:
    props.settings && 'background' in props.settings
      ? 'transparent'
      : (exported.value?.WAYGLIM_BACKGROUND ?? 'transparent'),
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
