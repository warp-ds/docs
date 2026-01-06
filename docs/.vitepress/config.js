import { classes as componentClasses } from '@warp-ds/css/component-classes/classes';
import { presetDocs } from '@warp-ds/preset-docs';
import { presetWarp } from '@warp-ds/uno';
import markdownItContainer from 'markdown-it-container';
import uno from 'unocss/vite';
import svgLoader from 'vite-svg-loader'; // Import the svg loader
import { defineConfig } from 'vitepress';
import { supported as supportedClasses } from '../supported.js';

const base = '/docs';

const pdColorClasses = ['blue', 'cyan', 'fuchsia', 'indigo', 'pink', 'purple', 'sky', 'violet'].flatMap((color) =>
  ['bg', 'border'].flatMap((part) =>
    [100, 200, 300, 400, 500, 600, 700, 800, 900].map((value) => `pd-${part}-${color}-${value}`),
  ),
);

// Classes of documentation-related elements used within Warp component examples
// These classes are for styling our docs within the shadow DOM
// if you add a class somewhere in code, and it doesn't work, add that class here (no time to explain)
const docsClasses = [
  'aspect-square',
  'aspect-1/1',
  'aspect-2/1',
  'bg-[url(../../images/20s-scientists.jpg)]',
  'bg-[url(../../images/50s-scientists.jpg)]',
  'bg-[url(../../images/50s-scientists_240.jpg)]',
  'bg-[url(../../images/office-warping.png)]',
  'bg-[url(../../images/repeatable.png)]',
  'bg-[--vp-c-bg-soft]',
  'bg-[--w-s-color-border]',
  'bg-[--tw-pink-fg]',
  'bg-[--vp-c-bg-alt]',
  'bg-[--w-s-color-background-positive/40]',
  'hover:bg-[--w-s-color-background-positive/100]',
  'bg-[var(--w-black)/70]',
  'hover:bg-[var(--w-black)/100]',
  'border-x-[--w-s-color-background-positive/60]',
  'hover:border-x-[--w-s-color-background-positive/100]',
  'border-y-[var(--w-black)/40]',
  'hover:border-y-[var(--w-black)/100]',
  'bottom-[26]',
  "before:content-['Before']",
  "after:content-['after']",
  "before:content-['Hello_World']",
  "before:content-['Hello\\_World']",
  'before:content-empty',
  'divide-y-[--w-white/60]',
  'sm:flex-row',
  'font-bold',
  'sm:gap-16',
  'sm:gap-32',
  'sm:grid',
  'sm:grid-cols-3',
  'sm:grid-cols-2',
  'grid-cols-minmax-100px',
  'grid-cols-[1fr_2.4rem_1fr_2.4rem_1fr]',
  'grid-cols-[1fr_1fr_1fr]',
  'grid-rows-[1fr_3fr_1fr]',
  'grid-cols-[repeat(2,64px)]',
  'md:grid-cols-4',
  'h-[7]',
  'h-[200]',
  'h-[240]',
  'before:h-14',
  'before:inline-block',
  'sm:justify-around',
  'leading-[120]',
  '-m-1',
  '-m-[19]',
  '-ml-48',
  '-my-32',
  '-mx-8',
  '-mt-16',
  '-mb-48',
  'max-w-[300]',
  'max-w-[344]',
  'max-w-[400]',
  'outline-[--w-s-color-background-positive/40]',
  'hover:outline-[--w-s-color-background-positive/100]',
  'outline-[--w-black/40]',
  'hover:outline-[--w-black/100]',
  'p-0!',
  'right-[26]',
  '-rotate-90',
  'rounded-tl-16',
  's-bg/10',
  's-bg/20',
  's-bg/50',
  's-bg/60',
  's-bg/80',
  'hover:s-bg/100',
  'hover:s-bg-hover',
  'active:s-bg-active',
  's-bg-primary/10',
  's-bg-primary/50',
  'hover:s-bg-primary/100',
  's-bg-positive/10',
  'md:s-bg-positive',
  's-bg-negative/10',
  's-bg-warning',
  'hover:s-bg-warning-hover',
  'active:s-bg-warning-active',
  's-bg-info',
  'hover:s-bg-info-hover',
  'active:s-bg-info-active',
  'selection:s-bg-positive',
  's-border/50',
  'hover:s-border/100',
  's-border-t-primary/55',
  'hover:s-border-t-primary/100',
  's-divide-x-primary',
  's-divide-x-primary-subtle/60',
  's-icon/60',
  'hover:s-icon/100',
  's-icon-primary/60',
  'hover:s-icon-primary/100',
  's-outline/50',
  'hover:s-outline/100',
  's-outline-focus/50',
  'hover:s-outline-focus/100',
  'hover:s-outline-hover',
  'md:s-outline-positive',
  's-text/60',
  'hover:s-text/100',
  's-text-link/50',
  'hover:s-text-link/100',
  'text-[--w-s-color-text-positive/60]',
  'hover:text-[--w-s-color-text-positive/100]',
  'text-[var(--w-black)/50]',
  'hover:text-[var(--w-black)/100]',
  'hover:s-text-positive',
  'md:s-text-positive',
  'marker:s-text-negative',
  'marker:s-text-positive',
  'hover:scale-110',
  'hover:scale-125',
  'skew-y-0',
  'skew-x-8',
  'skew-y-6',
  'skew-y-12',
  '-space-x-24',
  'text-12',
  'text-14',
  'text-right!',
  'text-[--vp-c-text-1]',
  'group-hover:translate-x-144',
  'translate-x-32',
  'translate-y-32',
  '-translate-y-32',
  'translate-x-1',
  '-translate-x-1',
  'translate-y-1',
  '-translate-y-1',
  '-translate-y-[3]',
  '-translate-x-[3]',
  'hover:-translate-y-1',
  'w-[200]',
  'w-[300]',
  'w-[400]',
  'before:w-14',
  '[--w-prefix-width:56px]',
  '[--spinner-size:16px]',
  '[--spinner-size:32px]',
  'last:ml-auto!',
  'md:block',
  'md:hidden',
  'md:s-border-positive',
  'group-hover:visible',

  // presetDocs:
  'ex-box',
  'ex-inner-box',
  'ex-font',
  'ex-font-dark',
  'ex-pic-no',
  ...pdColorClasses,
  'pd-border-white',
  'pd-border-white/50',
  'pd-bg-white',
  'hover:pd-bg-indigo-600',
  'hover:pd-bg-indigo-700',
  'before:pd-bg-pink-500',
  'pd-font-mono',
  'pd-shadow-sm',
  'pd-shadow-md',
  'pd-shadow-lg',
  'pd-shadow-xl',
  'pd-text-sm',
  'pd-text-xs',
  'pd-text-black',
  'pd-text-white',
  'pd-text-slate-500',
  'pd-text-slate-800',
  'pd-text-slate-900',
  'pd-text-indigo-600',
  'before:pd-text-indigo-400',
  'after:pd-text-indigo-400',
];

export default defineConfig({
  lang: 'en',
  title: 'Warp Design System',
  description: 'Documentation for Warp Design System',
  lastUpdated: false,
  cleanUrls: true,
  base: `${base}/`,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    config: (md) => {
      md.use(markdownItContainer, 'image-block', {
        render: (tokens, idx) => {
          if (tokens[idx].nesting === 1) {
            return '<div class="styled-image-block">';
          }
          return '</div>';
        },
      });
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => /(-example|-color-table|example-container|poc-1-div|w-icon)$/.test(tag),
      },
    },
  },
  vite: {
    plugins: [
      uno({ presets: [presetWarp({ skipResets: true })] }),
      uno({
        presets: [presetWarp(), presetDocs()],
        mode: 'shadow-dom',
        shortcuts: [
          {
            'ex-font': 'pd-text-sm font-bold pd-font-mono pd-text-white',
            'ex-font-dark': 'pd-text-sm font-bold pd-font-mono pd-text-slate-900',
            'ex-box': 'ex-font p-24 rounded pd-shadow-xl flex items-center justify-center',
            'ex-inner-box': 'p-24 rounded pd-shadow-xl mx-auto pd-bg-white pd-text-slate-500 max-w-[300]',
            'ex-pic-no':
              'absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800 leading-[32]',
          },
        ],
        safelist: [...componentClasses, ...supportedClasses, ...docsClasses],
      }),
      svgLoader(),
    ],
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: `${base}/warp-logo-small.svg`,
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/fonts/v1/dba-dk.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/fonts/v1/finn-no.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/fonts/v1/tori-fi.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/fonts/v1/blocket-se.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/fonts/v1/neutral-com.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/fonts/v1/vend-com.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/finn-no.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/elements/2.3.0-next.20/styles.css',
      },
    ],
    [
      'script',
      {
        type: 'module',
        src: 'https://assets.finn.no/pkg/@warp-ds/elements/2.3.0-next.20/index.js',
      },
    ],
  ],
  themeConfig: {
    lastUpdated: true, // Add this to show the last updated timestamp
    editLink: {
      pattern: 'https://github.com/warp-ds/docs/edit/main/docs/:path', // Edit link for GitHub
    },
    search: { provider: 'local' },
    logo: '/warp-logo-small.svg',
    outline: 'deep',
    socialLinks: [{ icon: 'github', link: 'https://github.com/warp-ds' }],
    nav: [
      { text: 'Get started', link: '/get-started/' },
      { text: 'Foundations', link: '/foundations/' },
      { text: 'Components', link: '/components/' },
      { text: 'Patterns', link: '/patterns/' },
      {
        text: "What's new",
        link: '/blog/',
        activeMatch: '/blog/$',
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Collaborate',
          items: [
            {
              text: 'Request new component',
              link: '/collaborate/request-new-component/',
            },
            {
              text: 'Request component changes',
              link: '/collaborate/request-component-changes/',
            },
          ],
        },
        {
          text: 'Help',
          items: [
            { text: 'FAQ', link: '/help/faq/' },
            { text: 'Support', link: '/help/support/' },
            {
              text: 'Doc authoring guide',
              link: '/help/authoring-guide/',
            },
            {
              text: 'Report bugs/errors',
              link: '/help/report-bugs/',
            },
          ],
        },
      ],
      '/get-started/': [
        {
          text: 'Get started',
          items: [
            {
              text: 'Mission, Values, Principles',
              link: '/get-started/mission-values-principles/',
            },
            {
              text: 'Developers',
              collapsed: true,
              items: [
                {
                  text: 'Web',
                  collapsed: true,
                  items: [
                    {
                      text: 'Setup',
                      link: '/get-started/developers/web/',
                    },
                    {
                      text: 'Migrate from Fabric',
                      link: '/get-started/developers/web/migrate-from-fabric/',
                    },
                    {
                      text: 'Building custom components with Warp',
                      link: '/get-started/developers/web/custom-components/',
                    },
                  ],
                },
                {
                  text: 'Android',
                  collapsed: true,
                  link: '/get-started/developers/android/',
                },
                {
                  text: 'iOS',
                  collapsed: true,
                  link: '/get-started/developers/ios/',
                },
              ],
            },
            {
              text: 'Designers',
              collapsed: true,
              items: [
                {
                  text: 'Warp in Figma',
                  link: '/get-started/designers/warp-in-figma/',
                },
                {
                  text: 'Designing for multibrand',
                  link: '/get-started/designers/designing-for-multibrand/',
                },
                {
                  text: 'Migrate from Fabric',
                  link: '/get-started/designers/migrate-from-fabric/',
                },
                {
                  text: 'Building custom components with Warp',
                  link: '/get-started/designers/custom-components/',
                },
              ],
            },
          ],
        },
      ],
      '/foundations/': [
        {
          text: 'Foundations',
          items: [
            {
              text: 'Tokens',
              collapsed: true,
              items: [
                { text: 'Intro', link: '/foundations/tokens/intro/' },
                {
                  text: 'Overview',
                  link: '/foundations/tokens/overview/',
                },
              ],
            },
            {
              text: 'CSS classes',
              collapsed: true,
              items: [
                {
                  text: 'Introduction',
                  collapsed: true,
                  items: [
                    {
                      text: "UnoCSS - what's that?",
                      link: '/foundations/css-classes/unocss',
                    },
                    {
                      text: 'Class Variants',
                      link: '/foundations/css-classes/class-variants',
                    },
                    {
                      text: 'Hover, Focus and other states',
                      link: '/foundations/css-classes/states',
                    },
                    {
                      text: 'Helper classes',
                      link: '/foundations/css-classes/helpers',
                    },
                  ],
                },
                {
                  text: 'Layout',
                  collapsed: true,
                  items: [
                    {
                      text: 'Aspect Ratio',
                      link: '/foundations/css-classes/aspect-ratio',
                    },
                    {
                      text: 'Columns',
                      link: '/foundations/css-classes/columns',
                    },
                    {
                      text: 'Break After',
                      link: '/foundations/css-classes/break-after',
                    },
                    {
                      text: 'Break Before',
                      link: '/foundations/css-classes/break-before',
                    },
                    {
                      text: 'Break Inside',
                      link: '/foundations/css-classes/break-inside',
                    },
                    {
                      text: 'Box Sizing',
                      link: '/foundations/css-classes/box-sizing',
                    },
                    {
                      text: 'Display',
                      link: '/foundations/css-classes/display',
                    },
                    {
                      text: 'Floats',
                      link: '/foundations/css-classes/floats',
                    },
                    {
                      text: 'Clear',
                      link: '/foundations/css-classes/clear',
                    },
                    {
                      text: 'Isolate',
                      link: '/foundations/css-classes/isolate',
                    },
                    {
                      text: 'Object Fit',
                      link: '/foundations/css-classes/object-fit',
                    },
                    {
                      text: 'Object Position',
                      link: '/foundations/css-classes/object-position',
                    },
                    {
                      text: 'Overflow',
                      link: '/foundations/css-classes/overflow',
                    },
                    {
                      text: 'Overscroll',
                      link: '/foundations/css-classes/overscroll',
                    },
                    {
                      text: 'Position',
                      link: '/foundations/css-classes/position',
                    },
                    {
                      text: 'Top / Right / Bottom / Left',
                      link: '/foundations/css-classes/top-right-bottom-left',
                    },
                    {
                      text: 'Visibility',
                      link: '/foundations/css-classes/visibility',
                    },
                    {
                      text: 'Z-Index',
                      link: '/foundations/css-classes/z-index',
                    },
                  ],
                },
                {
                  text: 'Sizing',
                  collapsed: true,
                  items: [
                    {
                      text: 'Width',
                      link: '/foundations/css-classes/width',
                    },
                    {
                      text: 'Min-Width',
                      link: '/foundations/css-classes/min-width',
                    },
                    {
                      text: 'Max-Width',
                      link: '/foundations/css-classes/max-width',
                    },
                    {
                      text: 'Height',
                      link: '/foundations/css-classes/height',
                    },
                    {
                      text: 'Min-Height',
                      link: '/foundations/css-classes/min-height',
                    },
                    {
                      text: 'Max-Height',
                      link: '/foundations/css-classes/max-height',
                    },
                  ],
                },
                {
                  text: 'Typography',
                  collapsed: true,
                  items: [
                    {
                      text: 'Font Size',
                      link: '/foundations/css-classes/font-size',
                    },
                    {
                      text: 'Font Style',
                      link: '/foundations/css-classes/font-style',
                    },
                    {
                      text: 'Font Weight',
                      link: '/foundations/css-classes/font-weight',
                    },
                    {
                      text: 'Font Variant Numeric',
                      link: '/foundations/css-classes/font-variant-numeric',
                    },
                    {
                      text: 'Line Height',
                      link: '/foundations/css-classes/line-height',
                    },
                    {
                      text: 'List Style Position',
                      link: '/foundations/css-classes/list-style-position',
                    },
                    {
                      text: 'List Style Type',
                      link: '/foundations/css-classes/list-style-type',
                    },
                    {
                      text: 'Text Align',
                      link: '/foundations/css-classes/text-align',
                    },
                    {
                      text: 'Text Color',
                      link: '/foundations/css-classes/text-color',
                    },
                    {
                      text: 'Text Decoration',
                      link: '/foundations/css-classes/text-decoration',
                    },
                    {
                      text: 'Text Transform',
                      link: '/foundations/css-classes/text-transform',
                    },
                    {
                      text: 'Text Overflow',
                      link: '/foundations/css-classes/text-overflow',
                    },
                    {
                      text: 'Vertical Align',
                      link: '/foundations/css-classes/vertical-align',
                    },
                    {
                      text: 'Whitespace',
                      link: '/foundations/css-classes/whitespace',
                    },
                    {
                      text: 'Word Break',
                      link: '/foundations/css-classes/word-break',
                    },
                    {
                      text: 'Content',
                      link: '/foundations/css-classes/content',
                    },
                  ],
                },
                {
                  text: 'Iconography',
                  collapsed: true,
                  items: [
                    {
                      text: 'Icon Color',
                      link: '/foundations/css-classes/icon-color',
                    },
                  ],
                },
                {
                  text: 'Backgrounds',
                  collapsed: true,
                  items: [
                    {
                      text: 'Background Attachment',
                      link: '/foundations/css-classes/background-attachment',
                    },
                    {
                      text: 'Background Clip',
                      link: '/foundations/css-classes/background-clip',
                    },
                    {
                      text: 'Background Color',
                      link: '/foundations/css-classes/background-color',
                    },
                    {
                      text: 'Background Origin',
                      link: '/foundations/css-classes/background-origin',
                    },
                    {
                      text: 'Background Position',
                      link: '/foundations/css-classes/background-position',
                    },
                    {
                      text: 'Background Repeat',
                      link: '/foundations/css-classes/background-repeat',
                    },
                    {
                      text: 'Background Size',
                      link: '/foundations/css-classes/background-size',
                    },
                    {
                      text: 'Background Image',
                      link: '/foundations/css-classes/background-image',
                    },
                  ],
                },
                {
                  text: 'Elevation',
                  collapsed: true,
                  items: [
                    {
                      text: 'surface',
                      link: '/foundations/css-classes/surface',
                    },
                  ],
                },
                {
                  text: 'Spacing',
                  collapsed: true,
                  items: [
                    {
                      text: 'Padding',
                      link: '/foundations/css-classes/padding',
                    },
                    {
                      text: 'Margin',
                      link: '/foundations/css-classes/margin',
                    },
                    {
                      text: 'Space between',
                      link: '/foundations/css-classes/space-between',
                    },
                  ],
                },
                {
                  text: 'Flexbox & Grid',
                  collapsed: true,
                  items: [
                    {
                      text: 'Flex',
                      link: '/foundations/css-classes/flex',
                    },
                    {
                      text: 'Flex Basis',
                      link: '/foundations/css-classes/flex-basis',
                    },
                    {
                      text: 'Flex Direction',
                      link: '/foundations/css-classes/flex-direction',
                    },
                    {
                      text: 'Flex Grow',
                      link: '/foundations/css-classes/flex-grow',
                    },
                    {
                      text: 'Flex Shrink',
                      link: '/foundations/css-classes/flex-shrink',
                    },
                    {
                      text: 'Flex Wrap',
                      link: '/foundations/css-classes/flex-wrap',
                    },
                    {
                      text: 'Order',
                      link: '/foundations/css-classes/order',
                    },
                    {
                      text: 'Grid Template Columns',
                      link: '/foundations/css-classes/grid-template-columns',
                    },
                    {
                      text: 'Grid Column Start / End',
                      link: '/foundations/css-classes/grid-column-se',
                    },
                    {
                      text: 'Grid Template Rows',
                      link: '/foundations/css-classes/grid-template-rows',
                    },
                    {
                      text: 'Grid Row Start / End',
                      link: '/foundations/css-classes/grid-row-se',
                    },
                    {
                      text: 'Grid Auto Flow',
                      link: '/foundations/css-classes/grid-auto-flow',
                    },
                    {
                      text: 'Grid Auto Columns',
                      link: '/foundations/css-classes/grid-auto-columns',
                    },
                    {
                      text: 'Grid Auto Rows',
                      link: '/foundations/css-classes/grid-auto-rows',
                    },
                    {
                      text: 'Gap',
                      link: '/foundations/css-classes/gap',
                    },
                    {
                      text: 'Justify Content',
                      link: '/foundations/css-classes/justify-content',
                    },
                    {
                      text: 'Justify Items',
                      link: '/foundations/css-classes/justify-items',
                    },
                    {
                      text: 'Justify Self',
                      link: '/foundations/css-classes/justify-self',
                    },
                    {
                      text: 'Align Content',
                      link: '/foundations/css-classes/align-content',
                    },
                    {
                      text: 'Align Items',
                      link: '/foundations/css-classes/align-items',
                    },
                    {
                      text: 'Align Self',
                      link: '/foundations/css-classes/align-self',
                    },
                    {
                      text: 'Place Content',
                      link: '/foundations/css-classes/place-content',
                    },
                    {
                      text: 'Place Items',
                      link: '/foundations/css-classes/place-items',
                    },
                    {
                      text: 'Place Self',
                      link: '/foundations/css-classes/place-self',
                    },
                  ],
                },
                {
                  text: 'Border',
                  collapsed: true,
                  items: [
                    {
                      text: 'Border Radius',
                      link: '/foundations/css-classes/border-radius',
                    },
                    {
                      text: 'Border Width',
                      link: '/foundations/css-classes/border-width',
                    },
                    {
                      text: 'Border Color',
                      link: '/foundations/css-classes/border-color',
                    },
                    {
                      text: 'Border Style',
                      link: '/foundations/css-classes/border-style',
                    },
                    {
                      text: 'Divide Width',
                      link: '/foundations/css-classes/divide-width',
                    },
                    {
                      text: 'Divide Color',
                      link: '/foundations/css-classes/divide-color',
                    },
                    {
                      text: 'Divide Style',
                      link: '/foundations/css-classes/divide-style',
                    },
                    {
                      text: 'Outline Style',
                      link: '/foundations/css-classes/outline-style',
                    },
                    {
                      text: 'Outline Width',
                      link: '/foundations/css-classes/outline-width',
                    },
                    {
                      text: 'Outline Color',
                      link: '/foundations/css-classes/outline-color',
                    },
                    {
                      text: 'Outline Offset',
                      link: '/foundations/css-classes/outline-offset',
                    },
                  ],
                },
                {
                  text: 'Effects',
                  collapsed: true,
                  items: [
                    {
                      text: 'Box Shadow',
                      link: '/foundations/css-classes/box-shadow',
                    },
                    {
                      text: 'Drop Shadow',
                      link: '/foundations/css-classes/drop-shadow',
                    },
                    {
                      text: 'Opacity',
                      link: '/foundations/css-classes/opacity',
                    },
                  ],
                },
                {
                  text: 'Filters',
                  collapsed: true,
                  items: [
                    {
                      text: 'Backdrop Blur',
                      link: '/foundations/css-classes/backdrop-blur',
                    },
                  ],
                },
                {
                  text: 'Tables',
                  collapsed: true,
                  items: [
                    {
                      text: 'Border Collapse',
                      link: '/foundations/css-classes/border-collapse',
                    },
                    {
                      text: 'Border Spacing',
                      link: '/foundations/css-classes/border-spacing',
                    },
                    {
                      text: 'Table Layout',
                      link: '/foundations/css-classes/table-layout',
                    },
                  ],
                },
                {
                  text: 'Transitions & Animation',
                  collapsed: true,
                  items: [
                    {
                      text: 'Transition Property',
                      link: '/foundations/css-classes/transition-property',
                    },
                    {
                      text: 'Transition Duration',
                      link: '/foundations/css-classes/transition-duration',
                    },
                    {
                      text: 'Transition Timing',
                      link: '/foundations/css-classes/transition-timing',
                    },
                    {
                      text: 'Transition Delay',
                      link: '/foundations/css-classes/transition-delay',
                    },
                    {
                      text: 'Animation',
                      link: '/foundations/css-classes/animation',
                    },
                  ],
                },
                {
                  text: 'Transforms',
                  collapsed: true,
                  items: [
                    {
                      text: 'Scale',
                      link: '/foundations/css-classes/scale',
                    },
                    {
                      text: 'Rotate',
                      link: '/foundations/css-classes/rotate',
                    },
                    {
                      text: 'Translate',
                      link: '/foundations/css-classes/translate',
                    },
                    {
                      text: 'Skew',
                      link: '/foundations/css-classes/skew',
                    },
                    {
                      text: 'Transform Origin',
                      link: '/foundations/css-classes/transform-origin',
                    },
                  ],
                },
                {
                  text: 'Interactivity',
                  collapsed: true,
                  items: [
                    {
                      text: 'Appearance',
                      link: '/foundations/css-classes/appearance',
                    },
                    {
                      text: 'Caret',
                      link: '/foundations/css-classes/caret',
                    },
                    {
                      text: 'Cursor',
                      link: '/foundations/css-classes/cursor',
                    },
                    {
                      text: 'Pointer Events',
                      link: '/foundations/css-classes/pointer-events',
                    },
                    {
                      text: 'Resize',
                      link: '/foundations/css-classes/resize',
                    },
                    {
                      text: 'Scroll Behavior',
                      link: '/foundations/css-classes/scroll-behavior',
                    },
                    {
                      text: 'Scroll Snap Align',
                      link: '/foundations/css-classes/scroll-snap-align',
                    },
                    {
                      text: 'Scroll Snap Stop',
                      link: '/foundations/css-classes/scroll-snap-stop',
                    },
                    {
                      text: 'Scroll Snap Type',
                      link: '/foundations/css-classes/scroll-snap-type',
                    },
                    {
                      text: 'Touch Action',
                      link: '/foundations/css-classes/touch-action',
                    },
                    {
                      text: 'User Select',
                      link: '/foundations/css-classes/user-select',
                    },
                    {
                      text: 'Will Change',
                      link: '/foundations/css-classes/will-change',
                    },
                  ],
                },
                {
                  text: 'Accessibility',
                  collapsed: true,
                  items: [
                    {
                      text: 'Screen Readers',
                      link: '/foundations/css-classes/screen-readers',
                    },
                  ],
                },
              ],
            },
            {
              text: 'Illustrations',
              link: '/foundations/illustrations/',
            },
            { text: 'Typography', link: '/foundations/typography/' },
            {
              text: 'Accessibility',
              link: '/foundations/accessibility/',
            },
            { text: 'Brands', link: '/foundations/brands/' },
            {
              text: 'Data visualization <span style="color: white; background-color: #BE3830; padding: 2px 8px; margin: 0px 8px; border-radius: 4px; font-weight: bold;">WIP</span>',
              collapsed: true,
              items: [
                {
                  text: 'Introduction',
                  link: '/foundations/data-visualization/introduction/',
                },
                {
                  text: 'Figma Library',
                  link: '/foundations/data-visualization/figma-library/',
                },
                {
                  text: 'Color Guidelines',
                  collapsed: true,
                  items: [
                    {
                      text: 'Introduction',
                      link: '/foundations/data-visualization/color/introduction/',
                    },
                    {
                      text: 'Chart Colors',
                      link: '/foundations/data-visualization/color/chart-colors/',
                    },
                    {
                      text: 'Data Colors',
                      link: '/foundations/data-visualization/color/data-colors/',
                    },
                    {
                      text: 'Lines & Points',
                      link: '/foundations/data-visualization/color/lines-points/',
                    },
                    {
                      text: 'Bars & Areas',
                      link: '/foundations/data-visualization/color/bars-areas/',
                    },
                    {
                      text: 'Text & Icons',
                      link: '/foundations/data-visualization/color/text-icons/',
                    },
                  ],
                },
                {
                  text: 'Tokens & CSS',
                  collapsed: true,
                  items: [
                    {
                      text: 'Introduction',
                      link: '/foundations/data-visualization/tokens/introduction/',
                    },
                    {
                      text: 'Chart Colors',
                      link: '/foundations/data-visualization/tokens/chart/',
                    },
                    {
                      text: 'Background',
                      link: '/foundations/data-visualization/tokens/background/',
                    },
                    {
                      text: 'Border',
                      link: '/foundations/data-visualization/tokens/border/',
                    },
                    {
                      text: 'Icon',
                      link: '/foundations/data-visualization/tokens/icon/',
                    },
                    {
                      text: 'Line',
                      link: '/foundations/data-visualization/tokens/line/',
                    },
                    {
                      text: 'Text',
                      link: '/foundations/data-visualization/tokens/text/',
                    },
                  ],
                },
                {
                  text: 'Chart Components',
                  link: '/foundations/data-visualization/components/',
                },
                {
                  text: 'Interaction',
                  link: '/foundations/data-visualization/interaction/',
                },
                {
                  text: 'Success Criteria',
                  collapsed: true,
                  items: [
                    {
                      text: 'Introduction',
                      link: '/foundations/data-visualization/success-criteria/introduction/',
                    },
                    {
                      text: 'Cognitive Accessibility',
                      link: '/foundations/data-visualization/success-criteria/cognitive/',
                    },
                    {
                      text: 'Visual Accessibility',
                      link: '/foundations/data-visualization/success-criteria/visual/',
                    },
                    {
                      text: 'Keyboard Navigation',
                      link: '/foundations/data-visualization/success-criteria/keyboard/',
                    },
                    {
                      text: 'Screen Reader',
                      link: '/foundations/data-visualization/success-criteria/screenreader/',
                    },
                  ],
                },
              ],
            },
            { text: 'Elevation', link: '/foundations/elevation/' },
            { text: 'Dark mode', link: '/foundations/dark-mode/' },
            { text: 'Motion', link: '/foundations/motion/' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Overview',
          items: [
            { text: 'Component overview', link: '/components/' },
            {
              text: 'Framework status',
              link: '/components/DsFrameworkStatus',
            },
          ],
        },
        {
          text: 'Components',
          items: buildSectionSidebarItems(resolve(__dirname, '..'), 'components'),
        },
      ],
      '/patterns/': [
        {
          text: 'Overview',
          items: [
            { text: 'Patterns overview', link: '/patterns/' },
            {
              text: 'Alert',
              collapsed: true,
              items: [
                {
                  text: 'Overview',
                  link: '/components/alert/index',
                },
                {
                  text: 'Frameworks',
                  link: '/components/alert/frameworks/android',
                },
              ],
            },
            {
              text: 'Badge',
              collapsed: true,
              link: '/components/badge/',
              items: [
                { text: 'Usage', link: '/components/badge/usage' },
                { text: 'Styling', link: '/components/badge/styling' },
                { text: 'Overview', link: '/components/badge/overview' },
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'React', link: '/components/badge/frameworks/react' },
                    { text: 'Vue', link: '/components/badge/frameworks/vue' },
                    { text: 'Web', link: '/components/badge/frameworks/elements' },
                    { text: 'Android', link: '/components/badge/frameworks/android' },
                    { text: 'iOS', link: '/components/badge/frameworks/ios' },
                  ],
                },
                { text: 'Accessibility', link: '/components/badge/accessibility' },
              ],
            },
            {
              text: 'Box',
              collapsed: true,
              link: '/components/box/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'React', link: '/components/box/frameworks/react' },
                    { text: 'Vue', link: '/components/box/frameworks/vue' },
                    { text: 'Web', link: '/components/box/frameworks/elements' },
                    { text: 'Android', link: '/components/box/frameworks/android' },
                    { text: 'iOS', link: '/components/box/frameworks/ios' },
                  ],
                },
              ],
            },
            {
              text: 'Breadcrumbs',
              collapsed: true,
              link: '/components/breadcrumbs/',
              items: [
                { text: 'Usage', link: '/components/breadcrumbs/usage' },
                { text: 'Styling', link: '/components/breadcrumbs/styling' },
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'React', link: '/components/breadcrumbs/frameworks/react' },
                    { text: 'Vue', link: '/components/breadcrumbs/frameworks/vue' },
                    { text: 'Web', link: '/components/breadcrumbs/frameworks/elements' },
                  ],
                },
                { text: 'Accessibility', link: '/components/breadcrumbs/accessibility' },
              ],
            },
            { text: 'Broadcast', link: '/components/broadcast/' },
            {
              text: 'Button',
              collapsed: true,
              link: '/components/button/',
              items: [
                { text: 'Usage', link: '/components/button/usage' },
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'React', link: '/components/button/frameworks/react' },
                    { text: 'React 19', link: '/components/button/frameworks/react-19' },
                    { text: 'Vue', link: '/components/button/frameworks/vue' },
                    { text: 'Web', link: '/components/button/frameworks/elements' },
                    { text: 'Android', link: '/components/button/frameworks/android' },
                    { text: 'iOS', link: '/components/button/frameworks/ios' },
                  ],
                },
              ],
            },
            {
              text: 'Button group',
              collapsed: true,
              link: '/components/buttongroup/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'Vue', link: '/components/buttongroup/frameworks/vue' },
                    { text: 'iOS', link: '/components/buttongroup/frameworks/ios' },
                  ],
                },
              ],
            },
            {
              text: 'Button pill',
              collapsed: true,
              link: '/components/buttonpill/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [{ text: 'iOS', link: '/components/buttonpill/frameworks/ios' }],
                },
              ],
            },
            {
              text: 'Callout',
              collapsed: true,
              link: '/components/callout/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'Android', link: '/components/callout/frameworks/android' },
                    { text: 'Web', link: '/components/callout/frameworks/elements' },
                    { text: 'iOS', link: '/components/callout/frameworks/ios' },
                    { text: 'React', link: '/components/callout/frameworks/react' },
                    { text: 'Vue', link: '/components/callout/frameworks/vue' },
                  ],
                },
              ],
            },
            {
              text: 'Card',
              collapsed: true,
              link: '/components/card/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'Web', link: '/components/card/frameworks/elements' },
                    { text: 'React', link: '/components/card/frameworks/react' },
                    { text: 'Vue', link: '/components/card/frameworks/vue' },
                  ],
                },
              ],
            },
            {
              text: 'Checkbox',
              collapsed: true,
              link: '/components/checkbox/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'Android', link: '/components/checkbox/frameworks/android' },
                    { text: 'iOS', link: '/components/checkbox/frameworks/ios' },
                    { text: 'React', link: '/components/checkbox/frameworks/react' },
                    { text: 'Vue', link: '/components/checkbox/frameworks/vue' },
                    { text: 'Web (New)', link: '/components/checkbox/frameworks/web' },
                  ],
                },
              ],
            },
            {
              text: 'Combo box',
              collapsed: true,
              link: '/components/combobox/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [{ text: 'React', link: '/components/combobox/frameworks/react' }],
                },
              ],
            },
            {
              text: 'Date picker',
              collapsed: true,
              link: '/components/datepicker/',
              items: [
                { text: 'Usage', link: '/components/datepicker/usage' },
                { text: 'Styling', link: '/components/datepicker/styling' },
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'Android ', link: '/components/datepicker/frameworks/android' },
                    { text: 'iOS ', link: '/components/datepicker/frameworks/ios' },
                    { text: 'React-19', link: '/components/datepicker/frameworks/react-19' },
                  ],
                },
                { text: 'Accessibility', link: '/components/datepicker/accessibility' },
              ],
            },
            {
              text: 'Divider',
              collapsed: true,
              link: '/components/divider/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'Android ', link: '/components/divider/frameworks/android' },
                    { text: 'iOS ', link: '/components/divider/frameworks/ios' },
                  ],
                },
              ],
            },
            {
              text: 'Expandable',
              collapsed: true,
              link: '/components/expandable/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'Android ', link: '/components/expandable/frameworks/android' },
                    { text: 'Elements ', link: '/components/expandable/frameworks/elements' },
                    { text: 'iOS ', link: '/components/expandable/frameworks/ios' },
                    { text: 'React ', link: '/components/expandable/frameworks/react' },
                    { text: 'Vue ', link: '/components/expandable/frameworks/vue' },
                  ],
                },
              ],
            },
            {
              text: 'Icons',
              collapsed: true,
              link: '/components/icons/',
              items: [
                { text: 'Styling', link: '/components/icons/styling' },
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'Elements ', link: '/components/icons/frameworks/elements' },
                    { text: 'React-19', link: '/components/icons/frameworks/react-19' },
                  ],
                },
                { text: 'Accessibility', link: '/components/icons/accessibility' },
              ],
            },
            {
              text: 'Link',
              collapsed: true,
              link: '/components/link/',
              items: [
                { text: 'Usage', link: '/components/link/usage' },
                { text: 'Styling', link: '/components/link/styling' },
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'Android ', link: '/components/link/frameworks/android' },
                    { text: 'React-19', link: '/components/link/frameworks/react-19' },
                  ],
                },
                { text: 'Accessibility', link: '/components/link/accessibility' },
              ],
            },
            {
              text: 'Modal',
              collapsed: true,
              link: '/components/modal/',
              items: [
                { text: 'Usage', link: '/components/modal/usage' },
                { text: 'Accessibility', link: '/components/modal/accessibility' },
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'React', link: '/components/modal/frameworks/react' },
                    { text: 'Vue', link: '/components/modal/frameworks/vue' },
                    { text: 'Web', link: '/components/modal/frameworks/elements' },
                    { text: 'Android', link: '/components/modal/frameworks/android' },
                    { text: 'iOS', link: '/components/modal/frameworks/ios' },
                    { text: 'Figma', link: '/components/modal/frameworks/figma' },
                  ],
                },
              ],
            },
            {
              text: 'Page indicator',
              collapsed: true,
              link: '/components/pageindicator/',
              items: [
                { text: 'Usage', link: '/components/pageindicator/usage' },
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'Android', link: '/components/pageindicator/frameworks/android' },
                    { text: 'iOS', link: '/components/pageindicator/frameworks/ios' },
                    { text: 'React 19', link: '/components/pageindicator/frameworks/react-19' },
                  ],
                },
                { text: 'Accessibility', link: '/components/pageindicator/accessibility' },
              ],
            },
            {
              text: 'Pagination',
              collapsed: true,
              link: '/components/pagination/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [{ text: 'React', link: '/components/pagination/frameworks/react' }],
                },
              ],
            },
            {
              text: 'Pill',
              collapsed: true,
              link: '/components/pill/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'Android', link: '/components/pill/frameworks/android' },
                    { text: 'Web', link: '/components/pill/frameworks/elements' },
                    { text: 'iOS', link: '/components/pill/frameworks/ios' },
                    { text: 'React', link: '/components/pill/frameworks/react' },
                    { text: 'Vue', link: '/components/pill/frameworks/vue' },
                  ],
                },
              ],
            },
            {
              text: 'Popover',
              collapsed: true,
              link: '/components/popover/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'Android', link: '/components/popover/frameworks/android' },
                    { text: 'Web', link: '/components/popover/frameworks/elements' },
                    { text: 'React', link: '/components/popover/frameworks/react' },
                    { text: 'Vue', link: '/components/popover/frameworks/vue' },
                  ],
                },
              ],
            },
            {
              text: 'Radio',
              collapsed: true,
              link: '/components/radio/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'Android', link: '/components/radio/frameworks/android' },
                    { text: 'iOS', link: '/components/radio/frameworks/ios' },
                    { text: 'React', link: '/components/radio/frameworks/react' },
                    { text: 'Vue', link: '/components/radio/frameworks/vue' },
                  ],
                },
              ],
            },
            {
              text: 'Radio buttons',
              collapsed: true,
              link: '/components/radiobuttons/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'React', link: '/components/radiobuttons/frameworks/react' },
                    { text: 'Vue', link: '/components/radiobuttons/frameworks/vue' },
                  ],
                },
              ],
            },
            {
              text: 'Range slider',
              collapsed: true,
              link: '/components/rangeslider/',
              items: [
                { text: 'Usage', link: '/components/rangeslider/usage' },
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'Android', link: '/components/rangeslider/frameworks/android' },
                    { text: 'iOS', link: '/components/rangeslider/frameworks/ios' },
                    { text: 'React 19', link: '/components/rangeslider/frameworks/react-19' },
                  ],
                },
                { text: 'Accessibility', link: '/components/rangeslider/accessibility' },
              ],
            },
            {
              text: 'Select',
              collapsed: true,
              link: '/components/select/',
              items: [
                { text: 'Usage', link: '/components/select/usage' },
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'Android', link: '/components/select/frameworks/android' },
                    { text: 'iOS', link: '/components/select/frameworks/ios' },
                    { text: 'Vue', link: '/components/select/frameworks/vue' },
                    { text: 'React', link: '/components/select/frameworks/react' },
                  ],
                },
                { text: 'Accessibility', link: '/components/select/accessibility' },
              ],
            },
            {
              text: 'Slider',
              collapsed: true,
              link: '/components/slider/',
              items: [
                { text: 'Usage', link: '/components/slider/usage' },
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'Android', link: '/components/slider/frameworks/android' },
                    { text: 'iOS', link: '/components/slider/frameworks/ios' },
                    { text: 'Vue', link: '/components/slider/frameworks/vue' },
                    { text: 'React', link: '/components/slider/frameworks/react' },
                    { text: 'React-19', link: '/components/slider/frameworks/react-19' },
                  ],
                },
                { text: 'Accessibility', link: '/components/slider/accessibility' },
              ],
            },
            {
              text: 'Spinner',
              collapsed: true,
              link: '/components/spinner/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'Android', link: '/components/spinner/frameworks/android' },
                    { text: 'iOS', link: '/components/spinner/frameworks/ios' },
                  ],
                },
              ],
            },
            {
              text: 'Steps',
              collapsed: true,
              link: '/components/steps/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'React', link: '/components/steps/frameworks/react' },
                    { text: 'Vue', link: '/components/steps/frameworks/vue' },
                    { text: 'Android', link: '/components/steps/frameworks/android' },
                    { text: 'iOS', link: '/components/steps/frameworks/ios' },
                  ],
                },
              ],
            },
            {
              text: 'Switch',
              collapsed: true,
              link: '/components/switch/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'React', link: '/components/switch/frameworks/react' },
                    { text: 'Vue', link: '/components/switch/frameworks/vue' },
                    { text: 'Android', link: '/components/switch/frameworks/android' },
                    { text: 'iOS', link: '/components/switch/frameworks/ios' },
                  ],
                },
              ],
            },
            {
              text: 'Tabs',
              collapsed: true,
              link: '/components/tabs/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'React', link: '/components/tabs/frameworks/react' },
                    { text: 'Vue', link: '/components/tabs/frameworks/vue' },
                    { text: 'Android', link: '/components/tabs/frameworks/android' },
                    { text: 'iOS', link: '/components/tabs/frameworks/ios' },
                  ],
                },
              ],
            },
            { text: 'Text', link: '/components/text/' },
            {
              text: 'Text area',
              link: '/components/textarea/',
              items: [
                { text: 'Usage', link: '/components/textarea/usage' },
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'React', link: '/components/textarea/frameworks/react' },
                    { text: 'Vue', link: '/components/textarea/frameworks/vue' },
                    { text: 'iOS', link: '/components/textarea/frameworks/ios' },
                  ],
                },
                { text: 'Accessibility', link: '/components/textarea/accessibility' },
              ],
            },
            {
              text: 'Text field',
              collapsed: true,
              link: '/components/textfield/',
              items: [
                { text: 'Usage', link: '/components/textfield/usage' },
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'React', link: '/components/textfield/frameworks/react' },
                    { text: 'Vue', link: '/components/textfield/frameworks/vue' },
                    { text: 'Web', link: '/components/textfield/frameworks/elements' },
                    { text: 'Android', link: '/components/textfield/frameworks/android' },
                    { text: 'iOS', link: '/components/textfield/frameworks/ios' },
                  ],
                },
                { text: 'Accessibility', link: '/components/textfield/accessibility' },
              ],
            },
            {
              text: 'Toast',
              collapsed: true,
              link: '/components/toast/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'React-19', link: '/components/toast/frameworks/react-19' },
                    { text: 'Web', link: '/components/toast/frameworks/elements' },
                    { text: 'Android', link: '/components/toast/frameworks/android' },
                    { text: 'iOS', link: '/components/toast/frameworks/ios' },
                  ],
                },
              ],
            },
            {
              text: 'Tooltip',
              collapsed: true,
              link: '/components/tooltip/',
              items: [
                {
                  text: 'Frameworks',
                  collapsed: true,
                  items: [
                    { text: 'React', link: '/components/tooltip/frameworks/react' },
                    { text: 'Vue', link: '/components/tooltip/frameworks/vue' },
                    { text: 'Web', link: '/components/tooltip/frameworks/elements' },
                    { text: 'Android', link: '/components/tooltip/frameworks/android' },
                    { text: 'iOS', link: '/components/tooltip/frameworks/ios' },
                  ],
                },
              ],
            },
            { text: 'Utilities', link: '/components/utilities/' },
          ],
        },
        {
          text: 'Patterns',
          items: buildSectionSidebarItems(resolve(__dirname, '..'), 'patterns'),
        },
      ],
    },
  },
});
