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

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(Footer),
    });
  },

  enhanceApp({ app }) {
    // 1) auto-register NEW components prefixed with Ds in ./vitepress/theme/components/**
    const modules = import.meta.glob('./components/**/*.vue', {
      eager: true,
    });
    for (const [path, mod] of Object.entries(modules)) {
      const file = path.split('/').pop();
      const name = file.replace(/\.\w+$/, '');
      if (!name.startsWith('Ds')) continue;
      app.component(name, mod.default);
    }

    // 2) plugins
    app.use(warpThemeSwitcher);

    // explicit globals (manual registrations).
    // These run AFTER auto-reg so they win on name conflicts, loose goal is to get rid of these
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
