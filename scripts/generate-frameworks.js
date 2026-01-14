import { globSync, writeFileSync } from 'node:fs';
import { basename } from 'node:path';

// Special case display names
const specialNames = {
  ios: 'iOS',
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

/**
 * Scan a directory for framework files and build a manifest section
 * @param {string} globPattern - Glob pattern to match framework files
 * @param {string[]} ignore - Patterns to ignore
 * @param {number} nameIndex - Index of the item name in the path parts
 * @returns {Object} Sorted manifest section
 */
function scanFrameworks(globPattern, ignore, nameIndex) {
  const files = globSync(globPattern, { ignore });
  const section = {};

  for (const file of files) {
    const parts = file.split('/');
    const itemName = parts[nameIndex];
    const frameworkFile = basename(file, '.md');

    if (!section[itemName]) {
      section[itemName] = [];
    }

    section[itemName].push({
      name: toDisplayName(frameworkFile),
      file: frameworkFile,
    });
  }

  // Sort each item's frameworks alphabetically by filename
  for (const item of Object.keys(section)) {
    section[item].sort((a, b) => a.file.localeCompare(b.file));
  }

  // Sort items alphabetically
  return Object.keys(section)
    .sort()
    .reduce((acc, key) => {
      acc[key] = section[key];
      return acc;
    }, {});
}

// Scan components and patterns
const components = scanFrameworks(
  'docs/components/*/frameworks/*.md',
  ['docs/components/.template/**'],
  2, // 'docs/components/alert/frameworks/vue.md' -> index 2 is 'alert'
);

const patterns = scanFrameworks(
  'docs/patterns/*/frameworks/*.md',
  [],
  2, // 'docs/patterns/emptystates/frameworks/ios.md' -> index 2 is 'emptystates'
);

const manifest = { components, patterns };

// Write manifest
try {
  writeFileSync('docs/.vitepress/frameworks-manifest.json', JSON.stringify(manifest, null, 2) + '\n');
  console.log(
    `Generated manifest with ${Object.keys(components).length} components and ${Object.keys(patterns).length} patterns`,
  );
} catch (error) {
  console.error(`Failed to write frameworks manifest: ${error.message}`);
  process.exit(1);
}
