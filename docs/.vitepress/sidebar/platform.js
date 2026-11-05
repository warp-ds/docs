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

/**
 * Sidebar tree for one platform.
 * @param {'web'|'ios'|'android'} platform
 */
export function platformSidebar(platform) {
  const label = PLATFORMS.find((p) => p.id === platform)?.label ?? platform;
  const groups = [{ text: label, items: [{ text: `${label} overview`, link: `/${platform}/` }] }];
  if (platform === 'web') {
    groups.push({
      text: 'Foundation',
      collapsed: true,
      items: [{ text: 'Overview', link: '/web/foundations/' }, ...webFoundationItems],
    });
  }
  groups.push({
    text: 'Components',
    collapsed: false,
    items: [{ text: 'All components', link: `/${platform}/components/` }, ...itemTree(platform, 'components')],
  });
  groups.push({
    text: 'Patterns',
    collapsed: false,
    items: [{ text: 'All patterns', link: `/${platform}/patterns/` }, ...itemTree(platform, 'patterns')],
  });
  return groups;
}

export const platformSidebars = Object.fromEntries(PLATFORMS.map(({ id }) => [id, platformSidebar(id)]));
