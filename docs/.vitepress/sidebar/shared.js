// Shared, platform-agnostic sidebar sections. Rendered on every page (see SidebarComposer.vue).
import { foundationItems } from './foundation-items.js';

export const sharedSidebar = [
  {
    text: 'Get started',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/get-started/' },
      {
        text: 'Design',
        collapsed: true,
        items: [
          { text: 'Getting access / set up', link: '/get-started/design/' },
          { text: 'Warp in Figma', link: '/get-started/design/warp-in-figma/' },
          { text: 'Designing for multibrand', link: '/get-started/design/designing-for-multibrand/' },
          { text: 'Building custom components', link: '/get-started/design/custom-components/' },
          { text: 'Migrate from Fabric', link: '/get-started/design/migrate-from-fabric/' },
        ],
      },
      {
        text: 'Web',
        collapsed: true,
        items: [
          { text: 'Getting access / set up', link: '/get-started/web/' },
          { text: 'Building custom components', link: '/get-started/web/custom-components/' },
          { text: 'Migrate from Fabric', link: '/get-started/web/migrate-from-fabric/' },
        ],
      },
      { text: 'iOS', link: '/get-started/ios/' },
      { text: 'Android', link: '/get-started/android/' },
    ],
  },
  {
    text: 'Foundation (Design Language)',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/foundations/' },
      { text: 'About DS', link: '/foundations/about/' },
      ...foundationItems,
    ],
  },
  {
    text: 'About Warp',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/about/' },
      {
        text: 'Help',
        collapsed: true,
        items: [
          { text: 'FAQ', link: '/about/help/faq/' },
          { text: 'Support', link: '/about/help/support/' },
          { text: 'Doc authoring guide', link: '/about/help/authoring-guide/' },
          { text: 'Request new component', link: '/about/help/requests/new-component/' },
          { text: 'Request component changes', link: '/about/help/requests/component-changes/' },
          { text: 'Report bugs/errors', link: '/about/help/report-bugs/' },
        ],
      },
      { text: "What's new", link: '/about/whats-new/' },
      { text: 'Platform coverage', link: '/about/platform-coverage' },
    ],
  },
];
