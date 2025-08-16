<script setup>
import ComponentOverviewFilter from './ComponentOverviewFilters.vue';
import ComponentOverviewResult from './ComponentOverviewResult.vue';
import { ref, computed } from 'vue';

// Import all JSON data and corresponding placeholder.svg files
const components = import.meta.glob('./*/data.json', { eager: true });
const placeholderSvgs = import.meta.glob('./*/placeholder.svg', { eager: true, import: 'default' });
console.log('Available SVG components:', Object.keys(placeholderSvgs));

// Import default placeholder SVG
import defaultSvg from '../src/placeholder-default.svg';

// --- NEW: hide dirs starting with "_" or "." ---
const isHiddenDir = (dir) => dir.startsWith('_') || dir.startsWith('.');
const visibleComponentPaths = Object.keys(components).filter((path) => {
  // path is like "./button/data.json" -> dir = "button"
  const parts = path.split('/');
  const dir = parts[1] || '';
  return !isHiddenDir(dir);
});
console.log('Hidden component dirs (ignored):',
  Object.keys(components).filter(p => isHiddenDir((p.split('/')[1] || '')))
);

// Validate & normalize a component entry
const validateComponentData = (data, folderPath) => {
  const svgPath = `${folderPath}/placeholder.svg`;

  // Check if the specific placeholder.svg exists, otherwise use the default
  const svg = placeholderSvgs[svgPath] || defaultSvg;

  return {
    title: data.title || 'Untitled Component',
    description: data.description || 'No description available.',
    category: data.category || 'Uncategorized',
    frameworks: Array.isArray(data.frameworks)
      ? data.frameworks.map(fw => ({
          name: fw.name || 'Unknown Framework',
          status: fw.status || 'unknown'
        }))
      : [],
    svgComponent: svg,
    placeholder: {
      label: data?.placeholder?.label || data.title || 'Component image missing'
    }
  };
};

// Map JSON data to include href and validate data (USING ONLY VISIBLE PATHS)
const componentData = visibleComponentPaths.map(path => {
  const folderPath = path.replace('/data.json', ''); // e.g. "./button"
  const rawData = components[path].default;

  return {
    ...validateComponentData(rawData, folderPath),
    // keep your original href logic; if you want to drop the leading "./", use:
    // href: `/docs/components/${folderPath.replace(/^\.\//, '')}`
    href: `/docs/components/${folderPath}`
  };
});

// Reactive variables for query and selected frameworks
const query = ref('');
const selectedFrameworks = ref([]);

// Extract unique framework names
const frameworkNames = computed(() => {
  const names = new Set();
  componentData.forEach(component => {
    component.frameworks.forEach(framework => {
      names.add(framework.name);
    });
  });
  return Array.from(names);
});

// Computed: filter components by search + frameworks
const filteredComponents = computed(() => {
  const lowerQuery = query.value.toLowerCase();
  const frameworks = selectedFrameworks.value;

  return componentData.filter(component => {
    const matchesQuery = component.title.toLowerCase().includes(lowerQuery);
    const matchesFramework =
      frameworks.length === 0 ||
      frameworks.every(framework =>
        component.frameworks.some(cf => cf.name === framework)
      );
    return matchesQuery && matchesFramework;
  });
});
</script>

<template>
  <ComponentOverviewFilter
    :availableFrameworks="frameworkNames"
    :modelValue="query"
    :selectedFrameworks="selectedFrameworks"
    @update:query="query = $event"
    @update:frameworks="selectedFrameworks = $event"
  />

  <ComponentOverviewResult :filteredComponents="filteredComponents" />
</template>