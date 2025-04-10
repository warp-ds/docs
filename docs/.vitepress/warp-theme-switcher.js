import { computed, reactive } from 'vue';

export default {
  install: (app) => {
    const themes = {
      'DBA light': 'dba-dk',
      'Finn light': 'finn-no',
      'Tori light': 'tori-fi',
      'Blocket light': 'blocket-se',
      'Neutral light': 'neutral-com',
      'Vend light': 'vend-com',
      'DBA dark': 'dba-dk-dark',
      'Finn dark': 'finn-no-dark',
      'Tori dark': 'tori-fi-dark',
      'Blocket dark': 'blocket-se-dark',
      'Neutral dark': 'neutral-com-dark',
      'Vend dark': 'vend-com-dark',
    };

    const state = reactive({
      currentTheme:
        (typeof window !== 'undefined' &&
          localStorage.getItem('warpTheme')) ||
        themes.Finn,
    });

    const rewriteStylesheets = (theme) => {
      const roots = [
        document,
        ...Array.from(document.querySelectorAll('*'))
          .filter((el) => !!el.shadowRoot)
          .map((el) => el.shadowRoot),
      ];
      roots.forEach((root) => {
        const stylesheets = root.querySelectorAll(
          'link[rel="stylesheet"][href*="/@warp-ds/css/"]'
        );
        stylesheets.forEach((s) => {
          s.setAttribute(
            'href',
            `https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/${theme}.css`
          );
        });
      });
    };

    const updateTheme = (theme) => {
      localStorage.setItem('warpTheme', theme);
      state.currentTheme = theme; // Update the reactive state
      rewriteStylesheets(theme);
    };

    app.provide('warpThemeSwitcher', {
      themes,
      current: computed(() => state.currentTheme),
      updateTheme,
    });

    // Listen for storage changes
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (event) => {
        if (event.key === 'warpTheme') {
          state.currentTheme = event.newValue;
          rewriteStylesheets(event.newValue);
        }
      });
    }
  },
};
