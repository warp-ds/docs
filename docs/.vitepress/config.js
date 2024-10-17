import { defineConfig } from 'vitepress';
import { presetDocs } from '@warp-ds/preset-docs';
import { presetWarp } from '@warp-ds/uno';
import uno from 'unocss/vite';
import { classes as componentClasses } from '@warp-ds/css/component-classes/classes';
import { supported as supportedClasses } from '../supported.js';
import markdownItContainer from 'markdown-it-container';
import svgLoader from 'vite-svg-loader'; // Import the svg loader

const base = '/warp-portal-poc';

const pdColorClasses = ['blue', 'cyan', 'fuchsia', 'indigo', 'pink', 'purple', 'sky', 'violet'].reduce(
  (colorResult, color) => [
    ...colorResult,
    ...['bg','border'].reduce(
      (partResult, part) => [
        ...partResult,
        [100,200,300,400,500,600,700,800,900].map((value) => `pd-${part}-${color}-${value}`)
      ],
      []
    )
  ],
  []
)

// Classes of documentation-related elements used within Warp component examples
// These classes are for styling our docs within the shadow DOM
// if you add a class somewhere in code, and it doesn't work, add that class here (no time to explain)
const docsClasses = [
  'aspect-square', 'aspect-1/1', 'aspect-2/1',
  'bg-[url(./20s-scientists.jpg)]',
  'bg-[url(./50s-scientists.jpg)]',
  'bg-[url(./50s-scientists_240.jpg)]',
  'bg-[url(./office-warping.png)]',
  'bg-[url(./repeatable.png)]',
  'bg-[--vp-c-bg-soft]', 'bg-[--w-s-color-border]', 'bg-[--tw-pink-fg]', 'bg-[--vp-c-bg-alt]',
  'bg-[--w-s-color-background-positive/40]', 'hover:bg-[--w-s-color-background-positive/100]', 'bg-[var(--w-black)/70]', 'hover:bg-[var(--w-black)/100]',
  'border-x-[--w-s-color-background-positive/60]', 'hover:border-x-[--w-s-color-background-positive/100]',
  'border-y-[var(--w-black)/40]', 'hover:border-y-[var(--w-black)/100]',
  'bottom-[26]',
  'before:content-[\'Before\']', 'after:content-[\'after\']', 'before:content-[\'Hello_World\']', 'before:content-[\'Hello\\_World\']', 'before:content-empty',
  'divide-y-[--w-white/60]',
  'sm:flex-row',
  'font-bold',
  'sm:gap-16', 'sm:gap-32',
  'sm:grid', 'sm:grid-cols-3', 'sm:grid-cols-2',
  'grid-cols-minmax-100px', 'grid-cols-[1fr_2.4rem_1fr_2.4rem_1fr]', 'grid-cols-[1fr_1fr_1fr]', 'grid-rows-[1fr_3fr_1fr]', 'grid-cols-[repeat(2,64px)]', 'md:grid-cols-4',
  'h-[7]', 'h-[200]', 'h-[240]', 'before:h-14',
  'before:inline-block',
  'sm:justify-around',
  'leading-[120]',
  '-m-1', '-m-[19]', '-ml-48', '-my-32', '-mx-8', '-mt-16', '-mb-48',
  'max-w-[300]', 'max-w-[344]', 'max-w-[400]',
  'outline-[--w-s-color-background-positive/40]', 'hover:outline-[--w-s-color-background-positive/100]', 'outline-[--w-black/40]', 'hover:outline-[--w-black/100]',
  'p-0!',
  'right-[26]',
  '-rotate-90',
  'rounded-tl-16',
  's-bg/10', 's-bg/20', 's-bg/50', 's-bg/60', 's-bg/80', 'hover:s-bg/100', 'hover:s-bg-hover', 'active:s-bg-active',
  's-bg-primary/10', 's-bg-primary/50', 'hover:s-bg-primary/100',
  's-bg-positive/10', 'md:s-bg-positive',
  's-bg-negative/10',
  's-bg-warning', 'hover:s-bg-warning-hover', 'active:s-bg-warning-active',
  's-bg-info', 'hover:s-bg-info-hover', 'active:s-bg-info-active',
  'selection:s-bg-positive',
  's-border/50', 'hover:s-border/100',
  's-border-t-primary/55', 'hover:s-border-t-primary/100',
  's-divide-x-primary', 's-divide-x-primary-subtle/60',
  's-icon/60', 'hover:s-icon/100', 's-icon-primary/60', 'hover:s-icon-primary/100',
  's-outline/50', 'hover:s-outline/100', 's-outline-focus/50', 'hover:s-outline-focus/100', 'hover:s-outline-hover', 'md:s-outline-positive',
  's-text/60', 'hover:s-text/100', 's-text-link/50', 'hover:s-text-link/100', 'text-[--w-s-color-text-positive/60]', 'hover:text-[--w-s-color-text-positive/100]', 'text-[var(--w-black)/50]', 'hover:text-[var(--w-black)/100]', 'hover:s-text-positive', 'md:s-text-positive',
  'marker:s-text-negative', 'marker:s-text-positive',
  'hover:scale-110', 'hover:scale-125',
  'skew-y-0', 'skew-x-8', 'skew-y-6', 'skew-y-12',
  '-space-x-24',
  'text-12', 'text-14',
  'text-right!',
  'text-[--vp-c-text-1]',
  'group-hover:translate-x-144', 'translate-x-32', 'translate-y-32', '-translate-y-32',
  'translate-x-1', '-translate-x-1', 'translate-y-1', '-translate-y-1', '-translate-y-[3]', '-translate-x-[3]', 'hover:-translate-y-1',
  'w-[200]', 'w-[300]', 'w-[400]', 'before:w-14',
  '[--w-prefix-width:56px]', '[--spinner-size:16px]', '[--spinner-size:32px]',
  'last:ml-auto!',
  'md:block', 'md:hidden', 'md:s-border-positive',
  'group-hover:visible',

  // presetDocs:
  'ex-box', 'ex-inner-box', 'ex-font', 'ex-font-dark', 'ex-pic-no',
  ...pdColorClasses,
  'pd-border-white', 'pd-border-white/50',
  'pd-bg-white', 'hover:pd-bg-indigo-600', 'hover:pd-bg-indigo-700',
  'before:pd-bg-pink-500',
  'pd-font-mono',
  'pd-shadow-sm', 'pd-shadow-md', 'pd-shadow-lg', 'pd-shadow-xl',
  'pd-text-sm', 'pd-text-xs',
  'pd-text-black', 'pd-text-white', 'pd-text-slate-500', 'pd-text-slate-800', 'pd-text-slate-900', 'pd-text-indigo-600',
  'before:pd-text-indigo-400', 'after:pd-text-indigo-400',
];

export default defineConfig({
  lang: 'en',
  title: 'Warp Design System',
  description: 'Documentation for Warp Design System technical platform',
  lastUpdated: false,
  cleanUrls: true,
  base: `${base}/`,
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
    config: (md) => {
      md.use(markdownItContainer, 'image-block', {
        render: (tokens, idx) => {
          if (tokens[idx].nesting === 1) {
            return '<div class="styled-image-block">';
          } else {
            return '</div>';
          }
        }
      });
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => /(-example|-color-table|example-container|poc-1-div)$/.test(tag),
      },
    },
  },
  vite: {
    plugins: [
      uno({ presets: [presetWarp({ skipResets: true })] }),
      uno({
        presets: [presetWarp(), presetDocs()],
        mode: 'shadow-dom',
        shortcuts: [{
          'ex-font': 'pd-text-sm font-bold pd-font-mono pd-text-white',
          'ex-font-dark': 'pd-text-sm font-bold pd-font-mono pd-text-slate-900',
          'ex-box': 'ex-font p-24 rounded pd-shadow-xl flex items-center justify-center',
          'ex-inner-box': 'p-24 rounded pd-shadow-xl mx-auto pd-bg-white pd-text-slate-500 max-w-[300]',
          'ex-pic-no': 'absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800 leading-[32]',
        }],
        safelist: [...componentClasses, ...supportedClasses, ...docsClasses],
      }),
      svgLoader(),  // Add the svgLoader plugin here
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
        href: 'https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/finn-no.css',
      },
    ],
  ],
  themeConfig: {
    lastUpdated: true, // Add this to show the last updated timestamp
    editLink: {
      pattern: 'https://github.com/warp-ds/warp-portal-poc/edit/main/docs/src/:path' // Edit link for GitHub
    },
    search: { provider: 'local' },
    logo: '/warp-logo-small.svg',
    outline: 'deep',
    socialLinks: [{ icon: 'github', link: 'https://github.com/warp-ds' }],
    nav: [
      { text: 'Get started', link: '/get-started/' },
      { text: 'Foundations', link: '/foundations/' },
      { text: 'Components', link: '/components/' },
      { text: 'POCs', link: '/pocs' },
      {
        text: 'What\'s new',
        link: '/blog/',
        activeMatch: '/blog/$',
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Collaborate',
          items: [
            { text: 'Request new component', link: '/collaborate/request-new-component/' },
            { text: 'Request component changes', link: '/collaborate/request-component-changes/' },
          ],
        },
        {
          text: 'Help',
          items: [
            { text: 'FAQ', link: '/help/faq/' },
            { text: 'Support', link: '/help/support/' },
            { text: 'Report bugs/errors', link: '/help/report-bugs/' },
          ]
        }
      ],
    },
  },
});
