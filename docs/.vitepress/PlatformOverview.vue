<script setup>
// Card grid for a platform overview page (/web/, /ios/, /android/): where to go next on this platform,
// then the shared sections. Counts come from platform-manifest.json, so they stay current.
// Usage in markdown: <PlatformOverview platform="ios" />
import { computed } from 'vue';
import NavCards from './NavCards.vue';
import manifest from './platform-manifest.json';
import { webFoundationItems } from './sidebar/web-foundation-items.js';

const props = defineProps({
  platform: { type: String, required: true, validator: (v) => ['web', 'ios', 'android'].includes(v) },
});

const LABELS = { web: 'Web', ios: 'iOS', android: 'Android' };

const COPY = {
  web: {
    start: 'Install Warp Elements, then set up styles, fonts and the brand theme.',
    foundation: 'CSS classes, customization, dark mode, keyboard support and font weights.',
    components: 'Overview, usage, code and accessibility for every web component.',
  },
  ios: {
    start: 'Add the Warp Swift package to your app and set the brand theme.',
    foundation: 'Theming, tokens, typography, spacing, shape and elevation in SwiftUI.',
    components: 'Design and code guidance for every SwiftUI component.',
  },
  android: {
    start: 'Add the Warp library to your app and set the brand theme.',
    foundation: 'Theming, tokens, typography and elevation in Jetpack Compose.',
    components: 'Design and code guidance for every Compose component.',
  },
};

const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

const cards = computed(() => {
  const p = props.platform;
  const data = manifest[p];
  const copy = COPY[p];
  const components = Object.keys(data.components).length;
  const patterns = Object.keys(data.patterns).length;
  // Web foundation pages are hand-ordered in the sidebar, not in the manifest
  const foundations = p === 'web' ? webFoundationItems.length : (data.foundations?.length ?? 0);
  return [
    { icon: 'start', title: 'Get started', text: copy.start, href: `/get-started/${p}/` },
    {
      icon: 'foundation',
      title: 'Foundation',
      text: copy.foundation,
      href: `/${p}/foundations/`,
      meta: foundations ? plural(foundations, 'topic') : null,
    },
    {
      icon: 'components',
      title: 'Components',
      text: copy.components,
      href: `/${p}/components/`,
      meta: plural(components, 'component'),
    },
    // always shown so every platform has the same four cards; disabled (not a link) until documented
    patterns
      ? {
          icon: 'patterns',
          title: 'Patterns',
          text: 'Guidance for recurring user tasks, built from Warp components.',
          href: `/${p}/patterns/`,
          meta: plural(patterns, 'pattern'),
        }
      : {
          icon: 'patterns',
          title: 'Patterns',
          text: `Guidance for recurring user tasks. None documented for ${LABELS[p]} yet.`,
          meta: 'Not available yet',
          disabled: true,
        },
  ];
});

const shared = computed(() => [
  {
    icon: 'language',
    title: 'Design Language',
    text: 'Colour, typography, elevation, motion and tokens, shared by every platform.',
    href: '/design-language/',
  },
  {
    icon: 'coverage',
    title: 'Platform coverage',
    text: `Which components exist on ${LABELS[props.platform]} and on the other platforms.`,
    href: '/about/platform-coverage',
  },
]);
</script>

<template>
  <div class="platform-overview">
    <NavCards :items="cards" />
    <h2 id="shared-across-platforms" tabindex="-1">Shared across platforms</h2>
    <NavCards :items="shared" variant="row" />
  </div>
</template>
