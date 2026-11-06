<script setup>
// Outline icons for docs cards (24px grid, 1.75 stroke, currentColor). Decorative: always aria-hidden.
// Add a new icon by adding its SVG children to ICONS.
import { computed } from 'vue';

const props = defineProps({ name: { type: String, required: true } });

const ICONS = {
  start: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5 15 12l-5 3.5Z"/>',
  foundation: '<path d="M12 3 3 7.5l9 4.5 9-4.5Z"/><path d="m3 12 9 4.5 9-4.5"/><path d="m3 16.5 9 4.5 9-4.5"/>',
  components:
    '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="3.5"/>',
  patterns: '<rect x="3.5" y="3.5" width="17" height="17" rx="2"/><path d="M3.5 9h17M9.5 9v11.5"/>',
  language:
    '<path d="M12 3a9 9 0 1 0 0 18c1 0 1.7-.8 1.7-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.7 1.7-1.7h2.1A4.5 4.5 0 0 0 21 10.7C21 6.4 17 3 12 3Z"/><circle cx="7.5" cy="11.5" r="1"/><circle cx="10" cy="7.5" r="1"/><circle cx="14.5" cy="7.5" r="1"/>',
  coverage: '<path d="M4 20V10M10 20V4M16 20v-7M21 20H3"/>',
  tokens:
    '<path d="M8 4H7a2 2 0 0 0-2 2v4l-2 2 2 2v4a2 2 0 0 0 2 2h1M16 4h1a2 2 0 0 1 2 2v4l2 2-2 2v4a2 2 0 0 1-2 2h-1"/>',
  image:
    '<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="m20.5 16-5-5-8.5 8.5"/>',
  type: '<path d="M5 7V5h14v2M12 5v14M9 19h6"/>',
  accessibility: '<circle cx="12" cy="4.5" r="1.5"/><path d="M5 8.5l7 1.5 7-1.5M12 10v4M9 21l3-7 3 7"/>',
  brands:
    '<path d="M3.5 12.3V4.5a1 1 0 0 1 1-1h7.8l8.2 8.2a1.5 1.5 0 0 1 0 2.1l-6.7 6.7a1.5 1.5 0 0 1-2.1 0Z"/><circle cx="8" cy="8" r="1.5"/>',
  chart: '<path d="M3.5 3.5v17h17"/><path d="m7 15 4-5 3 3 5-6"/>',
  elevation:
    '<rect x="3.5" y="9.5" width="11" height="11" rx="2"/><path d="M7.5 6.5V5.5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-1"/>',
  moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/>',
  motion: '<path d="M3 12h3l3-7 6 14 3-7h3"/>',
  book: '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5Z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20v-3"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6"/><circle cx="12" cy="17" r=".6" fill="currentColor"/>',
  support:
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="m5.6 5.6 3.9 3.9M14.5 14.5l3.9 3.9M18.4 5.6l-3.9 3.9M9.5 14.5l-3.9 3.9"/>',
  request: '<rect x="3.5" y="3.5" width="17" height="17" rx="2"/><path d="M12 8v8M8 12h8"/>',
  edit: '<path d="M12 20h8.5"/><path d="M16.5 3.7a2.1 2.1 0 0 1 3 3L7.5 18.7 3.5 19.5l.8-4Z"/>',
  bug: '<rect x="7" y="7" width="10" height="13" rx="5"/><path d="M12 12v8M7 12H3M21 12h-4M7.5 8 5 5.5M16.5 8 19 5.5M7 17l-3 2M17 17l3 2M9.5 7a2.5 2.5 0 0 1 5 0"/>',
  news: '<path d="M4 4.5h12.5a1 1 0 0 1 1 1V19a1.5 1.5 0 0 0 3 0V9H17.5"/><path d="M4 4.5V19a1.5 1.5 0 0 0 1.5 1.5H19M7.5 8.5h6M7.5 12h6M7.5 15.5h4"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5"/><circle cx="12" cy="7.8" r=".6" fill="currentColor"/>',
  code: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
  sliders:
    '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  keyboard:
    '<rect x="2.5" y="5.5" width="19" height="13" rx="2"/><path d="M6.5 9.5h1M10.5 9.5h1M14.5 9.5h1M18 9.5h-.5M6.5 12.5h1M10.5 12.5h3M17.5 12.5h-1M8 15.5h8"/>',
  font: '<path d="m3 19 5-14 5 14M4.8 14.5h6.4"/><path d="M20.5 11.5v7.5M20.5 14.75a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z"/>',
  theme:
    '<circle cx="12" cy="12" r="9"/><path d="M12 3v18" /><path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor" stroke="none"/>',
  spacing: '<path d="M3 4v16M21 4v16M7 12h10M7 12l2.5-2.5M7 12l2.5 2.5M17 12l-2.5-2.5M17 12l-2.5 2.5"/>',
  shape: '<path d="M4 20V10a6 6 0 0 1 6-6h10"/><path d="M8 20v-8a4 4 0 0 1 4-4h8" opacity=".5"/>',
  icons: '<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z"/>',
  text: '<path d="M4 6h16M4 10h16M4 14h10M4 18h12"/>',
  source:
    '<circle cx="6" cy="5.5" r="2"/><circle cx="6" cy="18.5" r="2"/><circle cx="18" cy="8.5" r="2"/><path d="M6 7.5v9M18 10.5c0 4-6 3-11 6.5"/>',
  migrate: '<path d="M4 8h14M14 4l4 4-4 4M20 16H6M10 12l-4 4 4 4"/>',
  design: '<path d="m12 3 7 7-7 11-7-11Z"/><circle cx="12" cy="11" r="2"/><path d="M12 13v8"/>',
  multibrand:
    '<rect x="3.5" y="7.5" width="13" height="13" rx="2"/><path d="M7.5 7.5V5.5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>',
  figma:
    '<path d="M9 3h3v6H9a3 3 0 0 1 0-6ZM12 3h3a3 3 0 0 1 0 6h-3ZM9 9h3v6H9a3 3 0 0 1 0-6ZM9 15h3v3a3 3 0 1 1-3-3Z"/><circle cx="15" cy="12" r="3"/>',
  droplet: '<path d="M12 3s6.5 6.6 6.5 11.5a6.5 6.5 0 0 1-13 0C5.5 9.6 12 3 12 3Z"/><path d="M9 15a3 3 0 0 0 3 3"/>',
  mission:
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
};

const svg = computed(() => ICONS[props.name] ?? ICONS.info);
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    v-html="svg"
  />
</template>
