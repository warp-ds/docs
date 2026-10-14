## Setup

Use Warp Elements (web components) in Vue apps. The Vue-specific `@warp-ds/vue` package is deprecated.

Follow the [Elements setup guide](/get-started/developers/web/elements.md) to load the script and styles in your document head. That guide also covers internationalisation, editor support and Warp Cloak.

Configure Vue to treat tags starting with `w-` as custom elements. For a Vue 3 app using Vite, add `isCustomElement` to your existing Vue plugin configuration in `vite.config.js`:

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('w-'),
        },
      },
    }),
  ],
});
```

For other build tools, see [Vue's custom element configuration](https://vuejs.org/guide/extras/web-components.html#skipping-component-resolution).

## Using Components

Use Warp elements directly in Vue templates. No component imports or `app.use()` calls are needed.

```vue
<template>
  <w-breadcrumbs>
    <a href="/">Home</a>
    <span aria-current="page">Current page</span>
  </w-breadcrumbs>
</template>
```

See each component's Elements documentation for its attributes, properties and events.
