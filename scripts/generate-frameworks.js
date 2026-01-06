import { globSync, writeFileSync } from 'node:fs';
import { basename } from 'node:path';

// Special case display names
const specialNames = {
  ios: 'iOS',
  macos: 'macOS',
};

/**
 * Convert filename to display name
 * Examples: 'vue' -> 'Vue', 'react-19' -> 'React 19', 'ios' -> 'iOS'
 */
function toDisplayName(filename) {
  if (specialNames[filename]) {
    return specialNames[filename];
  }
  return filename
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Find all framework markdown files
const frameworkFiles = globSync('docs/components/*/frameworks/*.md', {
  ignore: ['docs/components/.template/**'],
});

// Group by component
const manifest = {};

for (const file of frameworkFiles) {
  // Extract component name from path like 'docs/components/alert/frameworks/vue.md'
  const parts = file.split('/');
  const componentName = parts[2]; // 'alert'
  const frameworkFile = basename(file, '.md'); // 'vue'

  if (!manifest[componentName]) {
    manifest[componentName] = [];
  }

  manifest[componentName].push({
    name: toDisplayName(frameworkFile),
    file: frameworkFile,
  });
}

// Sort each component's frameworks alphabetically by filename
for (const component of Object.keys(manifest)) {
  manifest[component].sort((a, b) => a.file.localeCompare(b.file));
}

// Sort components alphabetically
const sortedManifest = Object.keys(manifest)
  .sort()
  .reduce((acc, key) => {
    acc[key] = manifest[key];
    return acc;
  }, {});

// Write manifest
try {
  writeFileSync('docs/.vitepress/frameworks-manifest.json', JSON.stringify(sortedManifest, null, 2) + '\n');
  console.log(`Generated manifest with ${Object.keys(sortedManifest).length} components`);
} catch (error) {
  console.error(`Failed to write frameworks manifest: ${error.message}`);
  process.exit(1);
}
