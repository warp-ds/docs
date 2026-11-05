<script setup>
// Platform / framework coverage matrix, generated from platform-manifest.json.
import { withBase } from 'vitepress';
import { computed } from 'vue';
import manifest from './platform-manifest.json';

const props = defineProps({
  type: { type: String, default: 'components', validator: (v) => ['components', 'patterns'].includes(v) },
});

const LEGACY = [
  ['react', 'React'],
  ['react-19', 'React 19'],
  ['vue', 'Vue'],
];

const rows = computed(() => {
  const names = new Set();
  for (const p of ['web', 'ios', 'android']) for (const n of Object.keys(manifest[p][props.type])) names.add(n);
  return [...names].sort().map((name) => {
    const cell = (p) => {
      const entry = manifest[p][props.type][name];
      if (!entry) return null;
      const page = entry.pages.includes('overview') ? 'overview' : entry.pages[0];
      return { href: withBase(`/${p}/${props.type}/${name}/${page}`), seeded: Boolean(entry.seeded?.length), entry };
    };
    const web = cell('web');
    const title =
      manifest.web[props.type][name]?.title ??
      manifest.ios[props.type][name]?.title ??
      manifest.android[props.type][name]?.title;
    return {
      name,
      title,
      web,
      elements: web?.entry.frameworks?.includes('elements') ?? false,
      legacy: LEGACY.filter(([fw]) => web?.entry.frameworks?.includes(fw)).map(([, label]) => label),
      ios: cell('ios'),
      android: cell('android'),
    };
  });
});
</script>

<template>
  <table class="coverage">
    <caption class="visually-hidden">
      {{ type === 'components' ? 'Component' : 'Pattern' }} coverage per platform
    </caption>
    <thead>
      <tr>
        <th scope="col">{{ type === 'components' ? 'Component' : 'Pattern' }}</th>
        <th scope="col">Web (Elements)</th>
        <th scope="col">Web legacy</th>
        <th scope="col">iOS</th>
        <th scope="col">Android</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.name">
        <th scope="row">{{ row.title }}</th>
        <td>
          <a v-if="row.web" :href="row.web.href">{{ row.elements ? 'Yes' : 'Design docs only' }}</a>
          <span v-else aria-label="Not available">—</span>
        </td>
        <td>{{ row.legacy.join(', ') || '—' }}</td>
        <td v-for="p in ['ios', 'android']" :key="p">
          <a v-if="row[p]" :href="row[p].href">Yes</a><span v-if="row[p]?.seeded" class="seeded"> (review pending)</span>
          <span v-if="!row[p]" aria-label="Not available">—</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.seeded {
  color: var(--vp-c-text-2);
  font-size: 12px;
}
</style>
