import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import manifest from './frameworks-manifest.json' with { type: 'json' };

const __dirname = dirname(fileURLToPath(import.meta.url));
const docsDir = join(__dirname, '..');

/**
 * Convert kebab-case to Title Case
 * Examples: 'button-group' -> 'Button group', 'text-field' -> 'Text field'
 */
function toTitleCase(str) {
  return str
    .split('-')
    .map((word, index) => (index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(' ');
}

/**
 * Define the page types and their display order
 */
const pageTypes = [
  { file: 'overview', text: 'Overview' },
  { file: 'usage', text: 'Usage' },
  { file: 'styling', text: 'Styling' },
  { file: 'frameworks', text: 'Frameworks', isFrameworks: true },
  { file: 'accessibility', text: 'Accessibility' },
];

/**
 * Generate sidebar items for a component or pattern
 * @param {string} type - 'components' or 'patterns'
 * @param {string} name - Component/pattern name (kebab-case)
 * @returns {Object} Sidebar item configuration
 */
function generateItemSidebar(type, name) {
  const itemDir = join(docsDir, type, name);
  const manifestSection = manifest[type] || {};
  const frameworks = manifestSection[name] || [];

  const items = [];

  for (const page of pageTypes) {
    if (page.isFrameworks) {
      // For frameworks, link to the first framework file
      if (frameworks.length > 0) {
        const firstFramework = frameworks[0].file;
        items.push({
          text: page.text,
          link: `/${type}/${name}/frameworks/${firstFramework}`,
        });
      }
    } else {
      // Check if the page file exists
      const pagePath = join(itemDir, `${page.file}.md`);
      if (existsSync(pagePath)) {
        items.push({
          text: page.text,
          link: `/${type}/${name}/${page.file}`,
        });
      }
    }
  }

  return {
    text: toTitleCase(name),
    collapsed: true,
    items,
  };
}

/**
 * Generate the full sidebar for components or patterns
 * @param {string} type - 'components' or 'patterns'
 * @returns {Array} Sidebar items array
 */
function generateSidebar(type) {
  const manifestSection = manifest[type] || {};
  const names = Object.keys(manifestSection).sort();

  return names.map((name) => generateItemSidebar(type, name));
}

/**
 * Generate the components sidebar section
 */
export function generateComponentsSidebar() {
  return [
    {
      text: 'Overview',
      items: [
        { text: 'Component overview', link: '/components/' },
        { text: 'Framework status', link: '/components/DsFrameworkStatus' },
      ],
    },
    {
      text: 'Components',
      items: generateSidebar('components'),
    },
  ];
}

/**
 * Generate the patterns sidebar section
 */
export function generatePatternsSidebar() {
  return [
    {
      text: 'Overview',
      items: [
        { text: 'Patterns overview', link: '/patterns/' },
        { text: 'Framework status', link: '/patterns/DsFrameworkStatus' },
      ],
    },
    {
      text: 'Patterns',
      items: generateSidebar('patterns'),
    },
  ];
}
