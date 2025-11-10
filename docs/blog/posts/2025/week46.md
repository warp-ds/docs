---
title: "WARP elements release"
date: 2025-11-05
---

Form association and performance improvements

---

# Week 46

## @warp-ds/elements@2.2.0 [Changelog](https://github.com/warp-ds/elements/compare/v2.1.1...v2.2.0)

### Features

**Form association:** Form component values now submit with containing form submission 

When using Warp elements form elements such as `w-textfield` inside a `<form>` tag, submitting the form will now pick up the element's value.
Additionally, w-button can be used to submit a form, just by setting type="submit" or reset a form just by setting type="reset".

```html
<form>
  <w-textfield type="text" value="foo" placeholder="Input a value"></w-textfield>
  <w-button type="reset">Reset</w-button>
  <w-button type="submit">Submit</w-button>
</form>
```

**Performance improvements:** Removed the use of Warp Element Core and inlined styles in components

Previously, Warp Element Core was used to load in Warp global CSS into the shadow DOM. With this release, we have removed this approach in favor of inlining CSS into each component. This prevents components loading unstyled and avoids a waterfall loading effect.

**Warp Cloak:** Add Warp Cloak for FOUCE/layout shift mitigation

We are now shipping the Warp Cloak CSS class which can be used to avoid layout shift in apps. Assuming you've followed all of the update instructions below, you can simply add the warp-cloak class to the document body, html tag or even just a wrapper div and this will prevent the page loading content before the Warp elements are ready, so no layout shifts.

```html
<body class="warp-cloak">
  ...
</body>
```

**Types/intellisense:** Improved TS types and intellisense for developer experience

How we generate types has had a rework and its now possible to get good intellisense support regardless of whether you use Warp Elements with a library such as React or just by themselves in a plain HTML page. [See instructions for setup here.](/get-started/developers/web/#setup)

### Updating

For most users, you won't need to do anything to get the update into production as this will be rolled out via an Eik alias update.

However, for developer experience and forward compatibility, it is recommended that you update `@warp-ds/elements` to version `2.2.0` in your app as well as remove any Warp element import statements from your app and ensure that the Warp Elements files is loaded early in the document head.

Eg. delete any lines like this from your app code:

```js
import "@warp-ds/elements";
// or
import "@warp-ds/elements/button/index.js";
```

and add this to your document:

```html
<html>
  <head>
    <!-- add these 2 lines, in your document head -->
    <link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/elements/v2/styles.css" crossorigin />
    <script src="https://assets.finn.no/pkg/@warp-ds/elements/v2/index.js" type="module" crossorigin></script>
  </head>
  <body>
  </body>
</html>
```

### Hydration errors in the console?

If your app uses Lit SSR and you are currently importing any Warp Elements in your codebase, you may spot a hydration mismatch error in the browser console. This happens because the version of @warp-ds/elements has gotten out of sync with the latest version thats on Eik.
Our testing has led us to believe that this is non critical and is not causing any direct issues. In other words, its just a warning.

To fix this, you can try updating @warp-ds/elements to the latest version for a quick fix. However, we are transitioning Warp Elements to client side only and will be
asking teams to NOT import Warp Elements components server side. Simply use the tag. eg. `<w-button>` on the server and then ensure you are importing the Warp Elements script client side only. See the section on updating above.
