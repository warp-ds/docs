#!/usr/bin/env node

/**
 * Script to replace <api-table /> Vue components with markdown tables
 * Converts HTML content in api-table.js data to markdown-compatible format
 *
 * Usage: node scripts/replace-api-tables.js [--dry-run]
 *
 * Options:
 *   --dry-run  Preview changes without modifying files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the API table data
const apiTablePath = path.join(__dirname, '../docs/api-table.js');
const apiTableModule = await import(apiTablePath);

const isDryRun = process.argv.includes('--dry-run');

/**
 * Convert HTML to markdown-compatible text
 * - Convert <br /> to space or remove
 * - Convert HTML tags to markdown equivalents
 * - Escape pipe characters for markdown tables
 */
function htmlToMarkdown(text) {
  if (!text) return '';
  let str = String(text);

  // Convert <br /> and <br> to newline (but markdown tables don't support newlines, so use space)
  str = str.replace(/<br\s*\/?>/gi, ' ');

  // Convert <code>...</code> to backticks
  str = str.replace(/<code>([^<]*)<\/code>/gi, '`$1`');

  // Convert <strong>...</strong> and <b>...</b> to **...**
  str = str.replace(/<(strong|b)>([^<]*)<\/\1>/gi, '**$2**');

  // Convert <em>...</em> and <i>...</i> to *...*
  str = str.replace(/<(em|i)>([^<]*)<\/\1>/gi, '*$2*');

  // Convert <a href="...">...</a> to [text](url)
  str = str.replace(/<a\s+href=["']([^"']*)["'][^>]*>([^<]*)<\/a>/gi, '[$2]($1)');

  // Remove any remaining HTML tags
  str = str.replace(/<[^>]+>/g, '');

  // Escape pipe characters for markdown tables
  str = str.replace(/\|/g, '\\|');

  return str.trim();
}

/**
 * Escape content that could be misinterpreted as HTML/Vue by VitePress
 * Wraps type definitions in backticks to prevent parsing as tags
 */
function escapeForVitepress(text, isTypeColumn = false) {
  if (!text) return '';
  let str = htmlToMarkdown(text);

  // For type columns or content with quotes around values (like 'top-start'),
  // wrap in backticks to prevent VitePress from parsing as HTML
  if (isTypeColumn && (str.includes("'") || str.includes('"') || str.includes('<') || str.includes('>'))) {
    // If it already contains backticks, don't double-wrap
    if (!str.startsWith('`')) {
      str = '`' + str + '`';
    }
  }

  return str;
}

/**
 * Generates a markdown table from component data
 */
function generateMarkdownTable(componentData) {
  const sections = [];

  // Check if component has custom titles (like InputAttributes, InputValidation, ModalCustomProperties)
  if (componentData.titles) {
    const titles = componentData.titles;
    const rows = componentData.rows || [];

    // Find the index of 'type' column (case-insensitive) to apply proper escaping
    const typeColIndex = titles.findIndex((t) => t.toLowerCase() === 'type');

    const lines = [];
    // Generate header
    lines.push(`| ${titles.map((t) => htmlToMarkdown(t)).join(' | ')} |`);
    lines.push(`| ${titles.map(() => '---').join(' | ')} |`);

    // Generate rows
    for (const row of rows) {
      const cells = [];
      for (let i = 0; i < titles.length; i++) {
        const cell = row[i] || '';
        cells.push(escapeForVitepress(cell, i === typeColIndex));
      }
      lines.push(`| ${cells.join(' | ')} |`);
    }

    return lines.join('\n');
  }

  // Standard table generation for props, required, events, slots, variants

  // Required props
  if (componentData.required && componentData.required.length > 0) {
    const lines = [];
    lines.push('#### Required props\n');
    lines.push('| Name | Type | Default | Description |');
    lines.push('| --- | --- | --- | --- |');

    for (const row of componentData.required) {
      const [name, type, defaultVal, description] = row;
      lines.push(
        `| ${escapeForVitepress(name)} | ${escapeForVitepress(type, true)} | ${escapeForVitepress(defaultVal)} | ${escapeForVitepress(description)} |`,
      );
    }
    sections.push(lines.join('\n'));
  }

  // Props (Optional Props)
  if (componentData.props && componentData.props.length > 0) {
    const lines = [];
    lines.push(`#### ${componentData.title || 'Optional Props'}\n`);
    lines.push('| Name | Type | Default | Description |');
    lines.push('| --- | --- | --- | --- |');

    for (const row of componentData.props) {
      const [name, type, defaultVal, description] = row;
      lines.push(
        `| ${escapeForVitepress(name)} | ${escapeForVitepress(type, true)} | ${escapeForVitepress(defaultVal)} | ${escapeForVitepress(description)} |`,
      );
    }
    sections.push(lines.join('\n'));
  }

  // Variants
  if (componentData.variants && componentData.variants.length > 0) {
    const lines = [];
    lines.push('#### Variants\n');
    lines.push('| Variant | Modifiers | Notes |');
    lines.push('| --- | --- | --- |');

    for (const row of componentData.variants) {
      const [variant, modifiers, notes] = row;
      lines.push(
        `| ${escapeForVitepress(variant)} | ${escapeForVitepress(modifiers)} | ${escapeForVitepress(notes)} |`,
      );
    }
    sections.push(lines.join('\n'));
  }

  // Slots
  if (componentData.slots && componentData.slots.length > 0) {
    const lines = [];
    lines.push('#### Slots\n');
    lines.push('| Name | Description |');
    lines.push('| --- | --- |');

    for (const row of componentData.slots) {
      const [name, description] = row;
      lines.push(`| ${escapeForVitepress(name)} | ${escapeForVitepress(description)} |`);
    }
    sections.push(lines.join('\n'));
  }

  // Events
  if (componentData.events && componentData.events.length > 0) {
    const lines = [];
    lines.push('#### Events\n');
    lines.push('| Name | Description |');
    lines.push('| --- | --- |');

    for (const row of componentData.events) {
      const [name, description] = row;
      lines.push(`| ${escapeForVitepress(name)} | ${escapeForVitepress(description)} |`);
    }
    sections.push(lines.join('\n'));
  }

  return sections.join('\n\n');
}

/**
 * Get the framework data object from the module
 */
function getFrameworkData(type) {
  const typeMap = {
    vue: apiTableModule.vue,
    react: apiTableModule.react,
    elements: apiTableModule.elements,
    android: apiTableModule.android,
    ios: apiTableModule.iOS,
    iOS: apiTableModule.iOS,
  };

  return typeMap[type.toLowerCase()] || typeMap[type];
}

/**
 * Parse the api-table tag and extract type and component
 */
function parseApiTableTag(tag) {
  const typeMatch = tag.match(/type=["']?([^"'\s/>]+)["']?/);
  const componentMatch = tag.match(/component=["']?([^"'\s/>]+)["']?/);

  return {
    type: typeMatch ? typeMatch[1] : null,
    component: componentMatch ? componentMatch[1] : null,
  };
}

/**
 * Find all markdown files recursively
 */
function findMarkdownFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findMarkdownFiles(fullPath, files);
    } else if (entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Process a single markdown file
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Match all <api-table ... /> tags
  const apiTableRegex = /<api-table[^>]*\/>/g;
  const matches = content.match(apiTableRegex);

  if (!matches) {
    return { modified: false };
  }

  let newContent = content;
  const replacements = [];

  for (const match of matches) {
    const { type, component } = parseApiTableTag(match);

    if (!type || !component) {
      console.warn(`  ⚠️  Could not parse: ${match}`);
      continue;
    }

    const frameworkData = getFrameworkData(type);

    if (!frameworkData) {
      console.warn(`  ⚠️  Unknown framework type: ${type}`);
      continue;
    }

    const componentData = frameworkData[component];

    if (!componentData) {
      console.warn(`  ⚠️  Component not found: ${component} for type ${type}`);
      continue;
    }

    const markdownTable = generateMarkdownTable(componentData);
    replacements.push({ original: match, replacement: markdownTable, type, component });
    newContent = newContent.replace(match, markdownTable);
  }

  if (replacements.length > 0) {
    return { modified: true, content: newContent, replacements };
  }

  return { modified: false };
}

/**
 * Main execution
 */
async function main() {
  console.log('🔄 Replacing <api-table /> components with markdown tables...\n');

  if (isDryRun) {
    console.log('📋 DRY RUN MODE - No files will be modified\n');
  }

  const docsDir = path.join(__dirname, '../docs');
  const files = findMarkdownFiles(docsDir);

  let totalFilesModified = 0;
  let totalReplacements = 0;

  for (const filePath of files) {
    const relativePath = path.relative(docsDir, filePath);
    const result = processFile(filePath);

    if (result.modified) {
      totalFilesModified++;
      totalReplacements += result.replacements.length;

      console.log(`📝 ${relativePath}`);
      for (const r of result.replacements) {
        console.log(`   ✅ Replaced <api-table type=${r.type} component="${r.component}" />`);
      }

      if (!isDryRun) {
        fs.writeFileSync(filePath, result.content, 'utf-8');
      }
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('📊 Summary:');
  console.log(`   Files modified: ${totalFilesModified}`);
  console.log(`   Total replacements: ${totalReplacements}`);

  if (isDryRun) {
    console.log('\n💡 Run without --dry-run to apply changes');
  } else {
    console.log('\n✨ Done!');
  }
}

main().catch(console.error);
