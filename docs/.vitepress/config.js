import { classes as componentClasses } from '@warp-ds/css/component-classes/classes';
import { presetDocs } from '@warp-ds/preset-docs';
import { presetWarp } from '@warp-ds/uno';
import markdownItContainer from 'markdown-it-container';
import uno from 'unocss/vite';
import svgLoader from 'vite-svg-loader'; // Import the svg loader
import { defineConfig } from 'vitepress';
import { supported as supportedClasses } from '../supported.js';
import { headLinks } from './headLinks.js';
import { docsClasses } from './safelist.js';
import { sidebarFoundations } from './sidebar-foundations.js';
import { generateComponentsSidebar, generatePatternsSidebar } from './sidebar-generator.js';

const base = '/docs';

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
  head: headLinks,
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
      '/foundations/': sidebarFoundations,
      // Components and patterns sidebars are dynamically generated from frameworks-manifest.json
      // See sidebar-generator.js for implementation
      '/components/': generateComponentsSidebar(),
      '/patterns/': generatePatternsSidebar(),
    },
  },
});
