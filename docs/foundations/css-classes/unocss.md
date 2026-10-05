
# Warp CSS overview

Warp includes a set of ready made components, but you will still be writing a lot of CSS, especially for laying out the content on the page.

## Deciding on a CSS architecture

How you want to manage your CSS is up to you. If you have no strong preference, Object oriented CSS (OOCSS) in plain CSS files using [Warp CSS variables](#warp-css-semantic-token-variables) is a safe default with low risk of lock-in.

### Atomic CSS

Warp is built using [UnoCSS](https://unocss.dev/), an [atomic CSS](https://css-tricks.com/lets-define-exactly-atomic-css/) engine.

> Atomic CSS is the approach to CSS architecture that favors small, single-purpose classes with names based on visual function.

Examples of atomic CSS classes are `p-16` and `s-bg-primary-subtle`. The classes do one thing each:

- Set `padding: 1.6rem` (we use a CSS hack in Vend so `1px == 0.1rem`)
- Set `background-color` to a subtle variant of the brand's primary color.

```html
<aside class="p-16 s-bg-primary-subtle"></aside>
```

### Object oriented CSS, Block Element modifier

While you are welcome to use the Atomic CSS architecture in your applications, you don't have to. Other popular architectures are [Block Element Modifier (BEM)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Organizing#bem) and [Object Oriented CSS (OOCSS)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Organizing#oocss).

In these architectures CSS classes lean more toward a semantic class name that includes all relevant styles. Of the two, OOCSS is less strict in its conventions.

```css
.callout {
  padding: 1.6rem;
  background-color: var(--w-s-color-background-subtle);
}
```

```html
<aside class="callout"></aside>
```


## Atomic CSS with UnoCSS

UnoCSS works by scanning your codebase, generating a CSS file with only the classes you use.

### Set up UnoCSS in an existing project

```shell
npm install unocss @warp-ds/css @warp-ds/uno
```

UnoCSS needs a `uno.config.ts` file to work properly. Here is a minimal config that includes Warp. Refer to the [UnoCSS documentation](https://unocss.dev/guide/config-file) for other options and possible integrations, such as what files to include in scans, and bundler plugins.

```ts
// uno.config.ts
// @ts-expect-error
import { presetWarp } from "@warp-ds/uno";
// @ts-expect-error
import { classes } from "@warp-ds/css/component-classes/classes";
import { defineConfig } from "unocss";

export default defineConfig({
  presets: [
    presetWarp({
      externalClasses: classes,
      skipResets: true,
    }),
  ],
});
```

## Using Warp in other CSS architectures

You can still use Warp even if atomic CSS is not your cup of tea.

### Warp CSS semantic token variables

All Warp styles come from a style dictionary shared between Figma and code. This is essentially a list of names and their values (color codes, pixel sizes).

Entries in this style dictionary are available globally as [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties).

You can use them in any CSS file, even plain CSS with no build tools.


```css
.callout {
  padding: 1.6rem;
  background-color: var(--w-s-color-background-subtle);
}
```

### CSS variable documentation

To see available tokens and their values, [refer to the documentation for the CSS classes](/foundations/css-classes/text-color.md). Most of the CSS classes are documented with their equivalent CSS variable in the Description column, if there is one.

:::warning Stick to semantic tokens
You may see a long list of CSS variables in your browser's developer tools, for example `--w-gray-900`, `--w-white` and `--w-black`. If you use such tokens you risk breaking your site in ways that are hard to debug, for example in dark mode.

Use semantic tokens (prefixed with `--w-s`) such as `--w-s-color-background-subtle`.
:::

![](/foundations/warp-css-variable-docs.jpg)

### CSS variable IntelliSense

For when you want to use Warp semantic CSS variables, (assuming you use VS Code) install [CSS Variable Autocomplete](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables).

Once you add brand token files to lookupFiles you should see Warp CSS variables as code suggestions when writing CSS var(--w-s).

```json
{
  "cssVariables.lookupFiles": [
    "**/*.css",
    "**/*.scss",
    "**/*.sass",
    "**/*.less",
    "node_modules/@warp-ds/css/dist/tokens/finn-no.css"
 ]
}
```

![](/foundations/warp-css-intellisense.jpg)

### Non-atomic CSS powered by UnoCSS

Molecular CSS, perhaps?

In any case, you can use the [`apply` directive from UnoCSS](https://unocss.dev/transformers/directives#apply) to generate style sheets with OOCSS or BEM class names.

```css
.callout {
  --at-apply: p-16 s-bg-primary-subtle;
}
```

This inlines the values from `p-16` and `s-bg-primary-subtle` in the built CSS.

:::tip
The `apply` directive can be a great migration path from Atomic CSS to other CSS architectures, should you want to.
:::
