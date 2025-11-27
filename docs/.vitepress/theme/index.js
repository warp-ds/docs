import { IconStarFull32 } from '@warp-ds/icons/vue';
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import ComponentDesignGuidelines from '../../components/ComponentDesignGuidelines.md';
import ComponentQuestions from '../../components/ComponentQuestions.md';
// Legacy imports
import ApiTable from '../ApiTable.vue';
import ComponentsStatus from '../ComponentsStatus.vue';
import Do from '../Do.vue';
import DoDont from '../DoDont.vue';
import Footer from '../Footer.vue';
import QrColorTable from '../qr-color-table.vue';
import QrTable from '../qr-table.vue';
import TabsContent from '../TabsContent.vue';
import ThemeSwitcher from '../ThemeSwitcher.vue';
import WidthController from '../WidthController.vue';
import '../bootExamples.js';
import './custom.css';
import 'uno.css';
import Card from '../Card.vue';
import Cards from '../Cards.vue';
import warpThemeSwitcher from '../warp-theme-switcher.js';
import DsBadge from './components/DsBadge.vue';
import DsBetaNotice from './components/DsBetaNotice.vue';
import DsCodeTabs from './components/DsCodeTabs.vue';
import DsComponentOverview from './components/DsComponentOverview.vue';
import DsComponentStatus from './components/DsComponentStatus.vue';
import DsFrameworkStatus from './components/DsFrameworkStatus.vue';
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
    app.component('DsBadge', DsBadge);
    app.component('DsBetaNotice', DsBetaNotice);
    app.component('DsCodeTabs', DsCodeTabs);
    app.component('DsComponentOverview', DsComponentOverview);
    app.component('DsComponentStatus', DsComponentStatus);
    app.component('DsFrameworkStatus', DsFrameworkStatus);
    app.component('DsMainTabs', DsMainTabs);
    app.component('DsSearchInput', DsSearchInput);

    app.component('ApiTable', ApiTable);
    app.component('ThemeSwitcher', ThemeSwitcher);
    app.component('TabsContent', TabsContent);
    app.component('ComponentDesignGuidelines', ComponentDesignGuidelines);
    app.component('ComponentQuestions', ComponentQuestions);
    app.component('ComponentsStatus', ComponentsStatus);
    app.component('Do', Do);
    app.component('DoDont', DoDont);
    app.component('WidthController', WidthController);
    app.component('QrTable', QrTable);
    app.component('QrColorTable', QrColorTable);
    app.component('IconStarFull32', IconStarFull32);
    app.component('Cards', Cards);
    app.component('Card', Card);
  },
};
