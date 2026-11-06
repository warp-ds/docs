// Per-platform sidebar trees (Web / iOS / Android), generated from platform-manifest.json.
import manifest from '../platform-manifest.json' with { type: 'json' };
import { webFoundationItems } from './web-foundation-items.js';

export const PLATFORMS = [
  { id: 'web', label: 'Web' },
  { id: 'ios', label: 'iOS' },
  { id: 'android', label: 'Android' },
];

const PAGE_LABELS = {
  overview: 'Overview',
  usage: 'Usage',
  styling: 'Styling',
  code: 'Code',
  accessibility: 'Accessibility',
};

function itemTree(platform, type) {
  const section = manifest[platform]?.[type] ?? {};
  return Object.entries(section).map(([name, entry]) => ({
    text: entry.title,
    collapsed: true,
    items: entry.pages.map((page) => ({
      text: PAGE_LABELS[page] ?? page,
      link: `/${platform}/${type}/${name}/${page}`,
    })),
  }));
}

function foundationItems(platform) {
  if (platform === 'web') return webFoundationItems;
  return (manifest[platform]?.foundations ?? []).map(({ slug, title }) => ({
    text: title,
    link: `/${platform}/foundations/${slug}`,
  }));
}

/**
 * Sidebar tree for one platform: Overview, Foundation, Components (patterns have their own tree).
 * The groups start collapsed (so all of them stay visible) and VitePress opens the one containing
 * the current page automatically.
 * @param {'web'|'ios'|'android'} platform
 */
export function platformSidebar(platform) {
  const label = PLATFORMS.find((p) => p.id === platform)?.label ?? platform;
  // `items: []` keeps it a top-level link (VitePress wraps bare links into an untitled group)
  const groups = [{ text: 'Overview', link: `/${platform}/`, items: [] }];
  const foundation = foundationItems(platform);
  if (foundation.length) {
    groups.push({
      text: 'Foundation',
      collapsed: true,
      items: [{ text: 'Overview', link: `/${platform}/foundations/` }, ...foundation],
    });
  }
  groups.push({
    text: 'Components',
    collapsed: true,
    items: [{ text: 'All components', link: `/${platform}/components/` }, ...itemTree(platform, 'components')],
  });
  return groups;
}

/**
 * Sidebar tree for a platform's patterns. Patterns are their own section (like the production
 * "Patterns" section): on pattern pages the sidebar shows only this tree under the switcher.
 * @param {'web'|'ios'|'android'} platform
 */
export function patternSidebar(platform) {
  const label = PLATFORMS.find((p) => p.id === platform)?.label ?? platform;
  return [
    {
      text: `${label} patterns`,
      items: [{ text: `All ${label} patterns`, link: `/${platform}/patterns/` }, ...itemTree(platform, 'patterns')],
    },
  ];
}

export const platformSidebars = Object.fromEntries(PLATFORMS.map(({ id }) => [id, platformSidebar(id)]));
export const patternSidebars = Object.fromEntries(PLATFORMS.map(({ id }) => [id, patternSidebar(id)]));
