---
title: '@warp-ds v2 - DBA Changes Are Here!'
date: 2024-07-04
---

DBA beta changes for web are now available.

---

# How to Update Your Web Apps for DBA

### Packages to Install from NPM

| Package Name        | Version        |
|---------------------|----------------|
| `@warp-ds/css`      | `2.0.0-next.4` |
| `@warp-ds/uno`      | `2.0.0`        |
| `@warp-ds/react`    | `2.0.0-next.2` |
| `@warp-ds/vue`      | `2.1.0-next.2` |
| `@warp-ds/elements` | `2.0.0-next.2` |
| `@warp-ds/icons`    | `2.0.3-next.1` |

You'll need to disable EIK import mapping for `react`, `vue` & `elements` until we make a stable release of these packages.

## Migrating from v1 to v2

### Removing Deprecated CSS Tokens and Classes
To ensure your apps use only the supported tokens and classes in v2, install `@warp-ds/preset-migrate` to get build warnings and helpful hints on how to migrate:

```bash
npm install -D @warp-ds/preset-migrate
```

Ensure you have version `2.x.x` of `@warp-ds/preset-migrate`.

:::warning Reminder
Uninstall the plugin and clean up the configuration once the migration is complete.
:::

Update your `uno.config.js` as follows:

```js
import { defineConfig } from 'unocss';
import { presetWarp } from '@warp-ds/uno';
import { presetMigrate } from '@warp-ds/preset-migrate';
import { classes } from '@warp-ds/css/component-classes/classes';

export default defineConfig({
  presets: [
    presetWarp({ externalClasses: classes, skipResets: true }), 
    presetMigrate()
  ],
});
```

If you're using `vite.config.js`, update it like this:

```js
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import { presetWarp } from '@warp-ds/uno';
import { presetMigrate } from '@warp-ds/preset-migrate';
import { classes } from '@warp-ds/css/component-classes/classes';

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        presetWarp({ externalClasses: classes, skipResets: true }),
        presetMigrate()
      ],
    }),
  ],
});
```

### Using Fonts and Themes for DBA

#### Fonts
Add the DBA font to your app similarly to how the Tori font was added:

```html
<link
  rel="stylesheet"
  href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/dba-dk.css"
/>
```

#### Brand CSS updates

New major versions of the brand stylesheets, with removed deprecations from previous versions, is needed for the DBA tokens. 

:::warning Note
All brand css token files should be updated to v2 (as well as [resets and component classes](#resets-and-component-classes)), not just the DBA tokens.
:::

- DBA: https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/dba-dk.css
- Finn: https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/finn-no.css
- Tori: https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/tori-fi.css

```html
<link
  rel="stylesheet"
  href="https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/dba-dk.css"
/>
<link
  rel="stylesheet"
  href="https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/finn-no.css"
/>
<link
  rel="stylesheet"
  href="https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/tori-fi.css"
/>
```


#### Resets and component classes
Make sure to also align the `resets.css` and `components.css` stylesheets to v2:

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

## What's next

Since most packages are in the next branch, expect some bugs.
Report any issues on the [#smp-warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV) Slack channel.
We’re here to help!
