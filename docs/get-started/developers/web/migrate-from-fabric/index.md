# Migrate from Fabric

## CSS changes

While Warp maintains as much backward-compatibility as possible from Fabric,
some breaking changes were necessary or justified.

### Before getting started
Before migrating to Warp, this may affect or break the styling for other teams that exists on the same page as your project.
**Make sure to communicate and align with affected teams before starting the migration process.**

---

### How to migrate

1. Remove Fabric as a dependency from your project.
2. Remove any mentions of Fabric, e.g. `fabric.css`.
3. Change the prefixes `f-` to `w-` for your component names. The icons should still use the `f-` prefix.
   Use the [migration plugin](https://github.com/warp-ds/preset-migrate) to help with this (see further down this page for instructions on using the plugin).
4. Make sure to install Warp to your project.
   Follow the instructions on [get started page](../).
5. If using external classes in Warp components, be aware of potential conflicts with classes applied to the component itself.
   These classes share CSS specificity, and precedence is determined by order.
   For instance, in React components, the 'winning' class is based on the @warp-ds/uno rule sequence, which could differ from Fabric's.
   Adding 'important' to your classes (e.g. `class="flex!"`) may be necessary.

Don't include Fabric and Warp in the same context, instead use either one of them to avoid conflicts, overlapping styles and unintended visual inconsistencies.
If it is necessary to include both libraries, it is recommended to encapsulate one of them within a shadow DOM to prevent conflicts and ensure proper isolation.

### Icons
Warp now supports icons, and it is no longer necessary to continue importing the icons from Fabric.
See further information and icons usage on our [icons page](/components/icons/overview.md).

### Colours
Warp utilises a system of coloring border, text, background and icons using semantic colour tokens.
You will need to manually find the most suitable semantic class (e.g. `s-bg-primary`) to replace the Fabric colour classes which sets static colours (e.g. `blue-600`).
To find possible replacements refer to our [Colours in WARP](https://warp-ds.github.io/colour-tokens-overview/) page.

### Migration plugin
The migration plugin is available to use to detect all deprecated CSS classes and provide warnings with useful hints.

#### Install the plugin
:::info Reminder
Do not forget to uninstall the plugin once the migration is complete.
:::

```shell
npm install @warp-ds/preset-migrate --save-dev
```

#### Use the plugin in your Uno config

```js
import { defineConfig } from 'unocss';
import { presetWarp } from '@warp-ds/uno';
import { presetMigrate } from '@warp-ds/preset-migrate';

export default defineConfig({
  presets: [presetMigrate(), presetWarp()],
});
```

#### Output
The output provides a description of the necessary changes or removals required when migrating from Fabric to Warp.
The process requires to be done manually, so make sure that these modifications are applied to all relevant class names and component names.

```
[REPLACED] flex-shrink -> use shrink
[REPLACED] flex-grow -> use grow
[REPLACED] last-child:mb-0 -> use last:mb-0
[REMOVED] input -> use Warp button component instead
[REPLACED] s-color-background-primary-default -> use 's-color-background-primary'
```

## Component changes

### Validation messages
In Fabric, both hints and errors would be displayed at the same time, and were concatenated with a `,`.

For example, when the hint was "Please fill out your 11-digit SSN"; and the error was "This field must be filled out".

> This field must be filled out, Please fill out your 11-digit SSN

This was suboptimal because it required managing of capitalization, and also messages could become quite long and at times unclear to the user.

In Warp, errors will show when the field is invalid, otherwise the hint will show. This means your errors may need editing to ensure they are clear to the user.

Using the previous example's error as an example, it should be rewritten (f.ex) as

> This field must be filled out with your 11-digit SSN

and the hint can remain the same.

## Colors in Warp
In Warp Design System we are changing the whole concept of working with colors.
We are no longer picking primitive colors from a palette (like `text-blue-600`), but instead we use semantic colors based on their purpose (like `text-primary`).
This is something that is needed in order to support brand theming and dark mode.
