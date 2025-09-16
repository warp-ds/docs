<script setup>
  import Vue from './vue.md';
  import Elements from './elements.md';
  import React from './react.md';
</script>

# Get started for Web developers

This page describes how to get started building a web application with Warp styling and components.
Warp is using [UnoCSS](https://unocss.dev/), an atomic CSS engine.
UnoCSS works by searching for the utilities (classes) usages from your codebase and generate the corresponding CSS on-demand.
The Warp preset contains the utilities UnoCSS will look for.
Only the used utilities are shipped to your app, ensuring speed and efficiency in any project size.

If you are migrating from Fabric to Warp, please visit the [Migration page](./migrate-from-fabric/).

If you have any questions or need clarification, please don't hesitate to reach out to the Warp team on the [#warp-design-system](https://sch-chat.slack.com/archives/C04NF2K46LB) channel on Slack!

## 1. Integrate with UnoCSS and Warp

A guide on how to integrate your project with UnoCSS and Warp.

### Build time

#### Installation
To get started, you need to install the necessary packages.

```shell
npm install unocss @warp-ds/uno @warp-ds/css
```

#### If you are using Webpack
In addition to the installation of the Warp packages, Webpack based projects should also install `@unocss/webpack`

```shell
npm install @unocss/webpack --save-dev
```

See [UnoCSS docs](https://unocss.dev/integrations/webpack) for more information.

---

#### Configuration and setup
When setting up Warp in your project, you can choose to create a `uno.config.js` file, or you can include the UnoCSS configuration settings directly in the build tool.
Below, the two different alternatives are described.

##### Alternative 1
- **Add a uno.config.js file**

  Create a `uno.config.[js,ts,mjs,mts]` file with the following content. This file will configure UnoCSS with our Warp preset.
  
  > uno.config.js
  
  ```js
  import { defineConfig } from 'unocss';
  import { presetWarp } from '@warp-ds/uno';
  import { classes } from '@warp-ds/css/component-classes/classes';
  
  export default defineConfig({
    presets: [presetWarp({ externalClasses: classes, skipResets: true })],
  });
  ```
  
  By default, UnoCSS will automatically look in the root directory of your project for `uno.config.[js,ts,mjs,mts]` or `unocss.config.[js,ts,mjs,mts]`.
  
  <details>
    <summary><b>Details about this configuration setup</b></summary>
    When an application consists of several parts (e.g. if you are using [Podium](https://podium-lib.io/)) and each part needs to integrate with UnoCSS and Warp - it's more performant to get styling from an external stylesheet (as this will be cached in the browser) instead of making UnoCSS generate the same CSS multiple times.
    In the example above we pass external classes and skip resets, because we import components.css and reset.css as mentioned [below](#make-sure-you-import-the-resets-and-components-classes-from-eik-cdn).
  
    See all configuration options for `presetWarp` at https://github.com/warp-ds/drive#plugin-api.
  </details>

- **Add UnoCSS to your build tool**

  Then add UnoCSS to your build tool. Below is an example for Vite, but you choose whatever build tool that suites your case.
  For more examples how to configure other building tools, please refer to the [examples](https://github.com/unocss/unocss/tree/main/examples) found in the UnoCSS project.
  We will eventually have in-depth installation guides for frameworks on the golden path.

> vite.config.js

```ts
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  plugins: [UnoCSS()],
});
```

##### **Alternative 2**
- **Include UnoCSS directly in the build setup**

  You can also specify the configuration file manually and in that case you won't need a separate `uno.config.js` file.
  
  Below is an example for Vite:
  
  > vite.config.js
  
  ```ts
  import { defineConfig } from 'vite';
  import UnoCSS from 'unocss/vite';
  import { presetWarp } from '@warp-ds/uno';
  import { classes } from '@warp-ds/css/component-classes/classes';
  
  export default defineConfig({
    plugins: [
      UnoCSS({
        presets: [presetWarp({ externalClasses: classes, skipResets: true })],
      }),
    ],
  });
  ```

- **Add `uno.css` to your main entry**

  Depending on the build tool you have chosen, this step can look different.
  The example below is applicable if you build UnoCSS together with Vite.
  If you for example use PostCSS as a build tool, you would need to add `@unocss` to the main stylesheet.
  Please take a look at the [examples](https://github.com/unocss/unocss/tree/main/examples) and see what is needed to be added in your setup.

  > e.g. main.js or main.ts
  
  ```js
  import 'uno.css';
  ```

---

### Runtime
UnoCSS also provides a CSS-in-JS runtime module which runs the UnoCSS engine right in the browser. It will detect the DOM changes and generate the styles on the fly.
See ["Runtime" section of UnoCSS docs](https://unocss.dev/integrations/runtime#runtime) for more information and examples.

#### Bundler usage

```shell
npm install @unocss/runtime @warp-ds/uno
```

```js
import initUnocssRuntime from '@unocss/runtime';
import { presetWarp } from '@warp-ds/uno';

window.__unocss = {
  presets: [presetWarp()],
};

initUnocssRuntime();
```

---

### UnoCSS CLI
With the custom configurations in `uno.config.js`, you can also generate styles at build step using UnoCSS's standalone client.
See [UnoCSS CLI](https://unocss.dev/integrations/cli) for more information and examples.

---

### Use with Shadow DOM and Vite
In case of apps using Vite where Warp components are used inside Shadow DOM, the css generated by the UnoCSS plugin needs to be inlined into the Shadow DOM style.
See [UnoCSS Vite plugin's shadow-dom mode](https://unocss.dev/integrations/vite#shadow-dom) for more information.

## 2. Apply theme

### Add fonts
In order to load correct fonts for each brand, you need to include a font setup for that brand in your document.

Add this to your `index.html`:

```html
<link
  rel="stylesheet"
  href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/finn-no.css"
/>
```

### Add brand CSS
In order to apply your application's theme, a respective brand CSS should be added to the document.
Brand specific stylesheets are available via our Eik CDN server:

- Finn: https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/finn-no.css
- Tori: https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/tori-fi.css
- DBA: https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/dba-dk.css

Add this to your `index.html`:

```html
<link
  rel="stylesheet"
  href="https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/finn-no.css"
/>
```

### Make sure you import the resets and components classes from Eik CDN:

```html
<link
  rel="stylesheet"
  href="https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css"
/>
<link
  rel="stylesheet"
  href="https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"
/>
```

## 3. Use Warp components

Select which Warp component library you wish to set up:

<tabs-content> 
  <template v-slot:react>
    <react />
  </template>
  <template v-slot:vue>
    <vue />
  </template>
  <template v-slot:elements>
    <elements />
  </template>
</tabs-content>
