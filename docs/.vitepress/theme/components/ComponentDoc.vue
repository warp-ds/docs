<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { mapFrameworkStatuses } from '/components/utils.js'

const { page } = useData()
const dir = computed(() => page.value.relativePath.replace(/\/[^/]+$/, ''))

// Eagerly grab possible tab/data files across the repo
const globs = {
  overview:       import.meta.glob('/**/overview.md', { eager: true }),
  usage:          import.meta.glob('/**/usage.md', { eager: true }),
  styling:        import.meta.glob('/**/styling.md', { eager: true }),
  code:           import.meta.glob('/**/code.md', { eager: true }),
  accessibility:  import.meta.glob('/**/accessibility.md', { eager: true }),
  data:           import.meta.glob('/**/data.json', { eager: true, import: 'default' })
}

function findInSameDir(map, file) {
  const suffix = `${dir.value}/${file}`
  const hit = Object.entries(map).find(([k]) => k.endsWith(suffix))
  return hit ? (hit[1].default ?? hit[1]) : null
}

const data = computed(() => findInSameDir(globs.data, 'data.json') ?? {})

const tabs = computed(() =>
  [
    { name: 'Overview',      comp: findInSameDir(globs.overview, 'overview.md') },
    { name: 'Usage',         comp: findInSameDir(globs.usage, 'usage.md') },
    { name: 'Styling',       comp: findInSameDir(globs.styling, 'styling.md') },
    { name: 'Code',          comp: findInSameDir(globs.code, 'code.md') },
    { name: 'Accessibility', comp: findInSameDir(globs.accessibility, 'accessibility.md') }
  ].filter(t => t.comp)
)
</script>

<template>
  <h1>{{ data?.title }}</h1>
  <p v-if="data?.description">{{ data.description }}</p>

  <ComponentsStatus
    v-if="data?.frameworks"
    v-bind="mapFrameworkStatuses(data.frameworks)"
  />

  <TabsContent variant="main">
    <template v-for="tab in tabs" :key="tab.name" v-slot:[tab.name]>
      <component :is="tab.comp" />
    </template>
  </TabsContent>

  <ComponentQuestions />
</template>
