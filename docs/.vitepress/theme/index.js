import { inBrowser } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import 'uno.css';
import './custom.css';
import { toast } from '@warp-ds/elements/components/toast';
import { h } from 'vue';
import ComponentDesignGuidelines from '../ComponentDesignGuidelines.md';
import ComponentQuestions from '../ComponentQuestions.md';
import ComponentsStatus from '../ComponentsStatus.vue';
import Do from '../Do.vue';
import DoDont from '../DoDont.vue';
import Footer from '../Footer.vue';
import ThemeSwitcher from '../ThemeSwitcher.vue';
import UsageExample from '../UsageExample.vue';
import UsageExamples from '../UsageExamples.vue';
import '../bootExamples.js';
// Only import client side
import '../StyleIsolate.js'; // Web component for style isolation
import '../elements-example.js';
import Badge from '../Badge.vue';
import Card from '../Card.vue';
import Cards from '../Cards.vue';
import DsOverview from '../DsOverview.vue';
import DsSearchInput from '../DsSearchInput.vue';
import FrameworkTabs from '../FrameworkTabs.vue';
import HomeLanding from '../HomeLanding.vue';
import InProgressStatus from '../InProgressStatus.vue';
import NavCta from '../NavCta.vue';
import PageContext from '../PageContext.vue';
import PatternsIndex from '../PatternsIndex.vue';
import PlatformCoverage from '../PlatformCoverage.vue';
import PlatformOverview from '../PlatformOverview.vue';
import RedirectNotFound from '../RedirectNotFound.vue';
import { resolveRedirect } from '../redirect-rules.js';
import SeededNotice from '../SeededNotice.vue';
import SidebarComposer from '../SidebarComposer.vue';
import TabsContent from '../TabsContent.vue';
import WidthController from '../WidthController.vue';
import warpThemeSwitcher from '../warp-theme-switcher.js';

if (typeof window !== 'undefined') {
  window.toast = toast;

  const snackbar = document.createElement('w-snackbar');
  document.body.append(snackbar);
}

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(Footer),
      'nav-bar-content-after': () => h(NavCta),
      'nav-screen-content-after': () => h(NavCta, { screen: true }),
      'sidebar-nav-before': () => h(SidebarComposer, { position: 'before' }),
      'sidebar-nav-after': () => h(SidebarComposer, { position: 'after' }),
      'doc-before': () => [h(PageContext), h(SeededNotice)],
      'not-found': () => h(RedirectNotFound),
    });
  },

  enhanceApp({ app, router, siteData }) {
    // Old URLs (pre platform split) -> new URLs, for in-app navigation and back/forward.
    // Hard loads are handled by the redirect stubs written at build time (build/redirect-stubs.js).
    if (inBrowser) {
      const redirect = async (to) => {
        const target = await resolveRedirect(to, siteData.value.base);
        if (!target) return;
        setTimeout(() => router.go(target));
        return false;
      };
      router.onBeforeRouteChange = redirect;
      router.onBeforePageLoad = redirect;
    }

    // plugins
    app.use(warpThemeSwitcher);

    app.component('InProgressStatus', InProgressStatus);
    app.component('ThemeSwitcher', ThemeSwitcher);
    app.component('ComponentDesignGuidelines', ComponentDesignGuidelines);
    app.component('ComponentQuestions', ComponentQuestions);
    app.component('ComponentsStatus', ComponentsStatus);
    app.component('Do', Do);
    app.component('DoDont', DoDont);
    app.component('Cards', Cards);
    app.component('Card', Card);
    app.component('FrameworkTabs', FrameworkTabs);
    app.component('WarpBadge', Badge);
    app.component('DsOverview', DsOverview);
    app.component('PlatformCoverage', PlatformCoverage);
    app.component('PlatformOverview', PlatformOverview);
    app.component('PatternsIndex', PatternsIndex);
    app.component('HomeLanding', HomeLanding);
    app.component('WidthController', WidthController);
    app.component('DsSearchInput', DsSearchInput);
    app.component('TabsContent', TabsContent);
    app.component('UsageExample', UsageExample);
    app.component('UsageExamples', UsageExamples);
  },
};
