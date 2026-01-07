import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import ComponentDesignGuidelines from '../ComponentDesignGuidelines.md';
import ComponentQuestions from '../ComponentQuestions.md';
import ComponentsStatus from '../ComponentsStatus.vue';
import Do from '../Do.vue';
import DoDont from '../DoDont.vue';
import Footer from '../Footer.vue';
import QrColorTable from '../qr-color-table.vue';
import QrTable from '../qr-table.vue';
import ThemeSwitcher from '../ThemeSwitcher.vue';
import '../bootExamples.js';
import '../StyleIsolate.js'; // Web component for style isolation
import './custom.css';
import 'uno.css';
import Badge from '../Badge.vue';
import Card from '../Card.vue';
import Cards from '../Cards.vue';
import DsOverview from '../DsOverview.vue';
import FrameworkTabs from '../FrameworkTabs.vue';
import warpThemeSwitcher from '../warp-theme-switcher.js';
import DsBetaNotice from './components/DsBetaNotice.vue';
import DsCodeTabs from './components/DsCodeTabs.vue';
import DsComponentOverview from './components/DsComponentOverview.vue';
import DsMainTabs from './components/DsMainTabs.vue';
import DsSearchInput from './components/DsSearchInput.vue';

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(Footer),
    });
  },

  enhanceApp({ app }) {
    // plugins
    app.use(warpThemeSwitcher);

    // Ds-prefixed components (explicitly registered)
    //app.component('DsBadge', DsBadge);
    //app.component('DsBetaNotice', DsBetaNotice);
    //app.component('DsCodeTabs', DsCodeTabs);
    app.component('DsComponentOverview', DsComponentOverview);
    //app.component('DsComponentStatus', DsComponentStatus);
    //app.component('DsFrameworkStatus', DsFrameworkStatus);
    //app.component('DsMainTabs', DsMainTabs);
    //app.component('DsSearchInput', DsSearchInput);

    //app.component('ApiTable', ApiTable);
    app.component('ThemeSwitcher', ThemeSwitcher);
    //app.component('TabsContent', TabsContent);
    app.component('ComponentDesignGuidelines', ComponentDesignGuidelines);
    app.component('ComponentQuestions', ComponentQuestions);
    app.component('ComponentsStatus', ComponentsStatus);
    app.component('Do', Do);
    app.component('DoDont', DoDont);
    // app.component('WidthController', WidthController);
    app.component('QrTable', QrTable);
    app.component('QrColorTable', QrColorTable);
    //app.component('IconStarFull32', IconStarFull32);
    app.component('Cards', Cards);
    app.component('Card', Card);
    app.component('FrameworkTabs', FrameworkTabs);
    app.component('WarpBadge', Badge);
    app.component('DsOverview', DsOverview);
  },
};
