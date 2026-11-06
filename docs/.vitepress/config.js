import { classes as componentClasses } from '@warp-ds/css/component-classes/classes';
import { presetDocs } from '@warp-ds/preset-docs';
import { presetWarp } from '@warp-ds/uno';
import markdownItContainer from 'markdown-it-container';
import uno from 'unocss/vite';
import svgLoader from 'vite-svg-loader'; // Import the svg loader
import { defineConfig } from 'vitepress';
import llmstxt from 'vitepress-plugin-llms';
import { writeRedirectStubs } from './build/redirect-stubs.js';
import { headLinks } from './headLinks.js';
import { docsClasses } from './safelist.js';
import { patternSidebars, platformSidebars } from './sidebar/platform.js';
import { sharedSidebar } from './sidebar/shared.js';
import { supported as supportedClasses } from './supported.js';

const base = '/docs';
const hostname = 'https://warp-ds.github.io/docs/';

// Component and pattern pages share one H1 on every tab ("Alert"), so the page kind is added back for
// search results and the browser title: "Web › Alert › Usage", "Alert · Usage · Web".
const PLATFORM_LABELS = { web: 'Web', ios: 'iOS', android: 'Android' };
const PAGE_KINDS = {
  overview: 'Overview',
  usage: 'Usage',
  styling: 'Styling',
  code: 'Code',
  'code-react': 'Code (React, legacy)',
  'code-react-19': 'Code (React 19, legacy)',
  'code-vue': 'Code (Vue, legacy)',
  accessibility: 'Accessibility',
};
function itemPage(relativePath) {
  const m = relativePath.match(/^(web|ios|android)\/(?:components|patterns)\/[^/]+\/([^/]+)\.md$/);
  if (!m) return null;
  const kind = m[1] === 'web' && m[2] === 'code' ? 'Code (Elements)' : (PAGE_KINDS[m[2]] ?? m[2]);
  return { platform: PLATFORM_LABELS[m[1]], kind };
}

export default defineConfig({
  lang: 'en',
  title: 'Warp Design System',
  description: 'Documentation for Warp Design System',
  lastUpdated: false,
  cleanUrls: true,
  sitemap: {
    hostname,
  },
  base: `${base}/`,
  // Opt-in shared snippets live in docs/_shared (included with <!--@include: @/_shared/...-->), never routed
  srcExclude: ['_shared/**'],
  ignoreDeadLinks: [
    (url) => url.startsWith(base), // doesn't detect properly when we link using pathname
  ],
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
        isCustomElement: (tag) => {
          // Pattern-based matches
          if (/(-example|-color-table|example-container|poc-1-div)$/.test(tag)) return true;
          const warpVueComponents = ['w-clickable', 'w-button-group', 'w-button-group-item', 'w-toggle'];
          if (warpVueComponents.includes(tag)) return false;
          return tag.startsWith('w-');
        },
      },
    },
  },
  vite: {
    plugins: [
      process.env.NODE_ENV === 'production' ? llmstxt() : null,
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
      {
        name: 'watch-node-modules',
        configureServer: (server) => {
          server.watcher.options = {
            ...server.watcher.options,
            ignored: [/node_modules\/(?!@warp-ds).*/, '**/.git/**'],
          };
        },
      },
    ].filter((plugin) => plugin !== null),
  },
  head: headLinks,
  themeConfig: {
    lastUpdated: true, // Add this to show the last updated timestamp
    editLink: {
      pattern: 'https://github.com/warp-ds/docs/edit/main/docs/:path', // Edit link for GitHub
    },
    search: {
      provider: 'local',
      options: {
        // Three parallel platform trees share titles, and component tabs share one H1: label results
        // by platform, and by page kind on component/pattern pages ("Web › Alert › Usage").
        _render(src, env, md) {
          const html = md.render(src, env);
          if (env.frontmatter?.search === false) return '';
          const platform = PLATFORM_LABELS[env.relativePath.match(/^(web|ios|android)\//)?.[1]];
          if (!platform) return html;
          const item = itemPage(env.relativePath);
          return html.replace(/<h1([^>]*)>(.*?)<\/h1>/s, (_, attrs, inner) => {
            const text = item
              ? inner.replace(/(<a [^>]*class="header-anchor"[^>]*>.*?<\/a>)?$/s, ` › ${item.kind}$1`)
              : inner;
            return `<h1${attrs}>${platform} › ${text}</h1>`;
          });
        },
      },
    },
    logo: '/warp-logo-small.svg',
    outline: 'deep',
    socialLinks: [{ icon: 'github', link: 'https://github.com/warp-ds' }],
    nav: [
      { text: 'Changelog', link: '/about/whats-new/', activeMatch: '^/about/whats-new/' },
      { text: 'About DS', link: '/design-language/about/' },
    ],
    // Each page gets the tree it belongs to (keeps prev/next and active state native).
    // SidebarComposer.vue adds the shared sections, the Platform switcher and the other tree.
    sidebar: {
      '/web/patterns/': patternSidebars.web,
      '/ios/patterns/': patternSidebars.ios,
      '/android/patterns/': patternSidebars.android,
      '/web/': platformSidebars.web,
      '/ios/': platformSidebars.ios,
      '/android/': platformSidebars.android,
      '/': sharedSidebar,
    },
  },
  transformPageData(pageData) {
    const item = itemPage(pageData.relativePath);
    if (item && pageData.title && !pageData.frontmatter.title) {
      pageData.title = `${pageData.title} · ${item.kind} · ${item.platform}`;
    }
  },
  buildEnd(siteConfig) {
    writeRedirectStubs(siteConfig, hostname);
  },
});
