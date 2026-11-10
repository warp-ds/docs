// One-off: split docs/.vitepress/sidebar-foundations.js into shared + Web Foundation item lists.
import { writeFileSync } from 'node:fs';
import { sidebarFoundations } from '../../docs/.vitepress/sidebar-foundations.js';

const items = sidebarFoundations[0].items;
const take = (text) => items.find((i) => i.text === text);
const reprefix = (node) => JSON.parse(JSON.stringify(node).replaceAll('"/foundations/', '"/web/foundations/'));

const css = reprefix(take('CSS classes'));
const keyboard = reprefix(take('Keyboard'));
const shared = items
  .filter((i) => !['CSS classes', 'Keyboard'].includes(i.text))
  .map((i) =>
    i.text === 'Dark mode'
      ? { ...i, items: i.items.filter((c) => !/\/dark-mode\/(elements|react)\//.test(c.link)) }
      : i,
  );
const web = [
  css,
  { text: 'Customization', link: '/web/foundations/customization/' },
  {
    text: 'Dark mode',
    collapsed: true,
    items: [
      { text: 'Dark mode in Warp Elements', link: '/web/foundations/dark-mode/' },
      { text: 'Dark mode in Warp React (legacy)', link: '/web/foundations/dark-mode/react' },
    ],
  },
  keyboard,
  { text: 'Font weights', link: '/web/foundations/font-weights/' },
];
const header =
  '// Generated once from the old sidebar-foundations.js (redesign/scripts/split-sidebars.mjs); edit by hand from now on.\n';
writeFileSync(
  'docs/.vitepress/sidebar/foundation-items.js',
  `${header}export const foundationItems = ${JSON.stringify(shared, null, 2)};\n`,
);
writeFileSync(
  'docs/.vitepress/sidebar/web-foundation-items.js',
  `${header}export const webFoundationItems = ${JSON.stringify(web, null, 2)};\n`,
);
