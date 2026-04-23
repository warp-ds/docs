import { globSync, readFileSync, writeFileSync } from 'node:fs';
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
 * @param {string} globPattern - Glob pattern to match framework files
 * @param {string[]} ignore - Patterns to ignore
 * @param {number} nameIndex - Index of the item name in the path parts
 * @returns {Object} Sorted manifest section
 */
function scanFrameworks(globPattern, ignore, nameIndex) {
  const files = globSync(globPattern, { ignore });
  for (const file of files) {
    const parts = file.split('/');
    const itemName = parts[nameIndex];
    const frameworkFile = basename(file, '.md');

    const displayName = toDisplayName(frameworkFile);
    const content = readFileSync(file, 'utf-8');
    const newContent = content.replace(' - Frameworks', ` - ${displayName}`);
    writeFileSync(file, newContent, 'utf-8');
  }
}

scanFrameworks(
  'docs/components/*/frameworks/*.md',
  ['docs/components/.template/**'],
  2, // 'docs/components/alert/frameworks/vue.md' -> index 2 is 'alert'
);
