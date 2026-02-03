#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = join(__dirname, '../docs');

// Framework columns in order (matching the markdown table)
const FRAMEWORK_COLUMNS = ['React', 'React 19', 'Vue', 'Elements', 'Android', 'iOS'];

/**
 * Convert a kebab-case key to a display name (e.g., "button-group" → "Button group")
 */
function toDisplayName(key) {
  return key
    .split('-')
    .map((word, i) => (i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(' ');
}

function loadManifest() {
  const manifestPath = join(DOCS_DIR, '.vitepress/frameworks-manifest.json');
  return JSON.parse(readFileSync(manifestPath, 'utf-8'));
}

function generateTableRow(componentName, availableFrameworks) {
  const cells = FRAMEWORK_COLUMNS.map((fw) => {
    return availableFrameworks.has(fw) ? 'released' : '—';
  });

  // Pad component name and cells for alignment
  const paddedName = componentName.padEnd(14);
  const paddedCells = cells.map((cell, i) => {
    const width = i === 0 ? 9 : i === 1 ? 11 : i === 2 ? 8 : i === 3 ? 12 : i === 4 ? 11 : 10;
    return cell.padEnd(width);
  });

  return `| ${paddedName} | ${paddedCells.join(' | ')} |`;
}

function updateStatusFile(type, manifest) {
  const filePath =
    type === 'components'
      ? join(DOCS_DIR, 'components/DsFrameworkStatus.md')
      : join(DOCS_DIR, 'patterns/DsFrameworkStatus.md');

  const manifestData = type === 'components' ? manifest.components : manifest.patterns;

  // Generate table rows from manifest keys
  const rows = Object.keys(manifestData)
    .sort()
    .map((key) => {
      const frameworks = manifestData[key] || [];
      const availableFrameworks = new Set(frameworks.map((f) => f.name));
      const displayName = toDisplayName(key);
      return generateTableRow(displayName, availableFrameworks);
    });

  // Build the full markdown content
  const header = `---
title: Framework Support Matrix
outline: false
---

# Framework coverage

| Component      | React     | React 19    | Vue      | Elements     | Android     | iOS        |
|----------------|-----------|-------------|----------|--------------|-------------|------------|`;

  const content = `${header}\n${rows.join('\n')}\n`;

  writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}

function main() {
  const manifest = loadManifest();

  updateStatusFile('components', manifest);
  updateStatusFile('patterns', manifest);

  console.log('Framework status files updated successfully!');
}

main();
