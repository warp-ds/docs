## Setup

Warp custom elements are supplied by the Eik CDN. In addition, you can install the @warp-ds/elements package to get intellisense in your editor.
Add the following script and style to the very top of your document head to ensure performant loading:

```html
<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/elements/v2/styles.css" crossorigin />
<script src="https://assets.finn.no/pkg/@warp-ds/elements/v2/index.js" type="module" crossorigin></script>
```

If you are using `@borealis/layout-express` or `@borealis/layout-fastify` in your app these files may be provided for you. Check with the Web Platform Team in the #ask-web-platform slack channel.

### Internationalisation

Since warp components are internationalised, ensure that you set the HTML document lang with a two-letter-code, eg: `<html lang="en">`.

If you are using `@borealis/layout-express` or `@borealis/layout-fastify` in your app this will already be done for you.

### Intellisense and TS types

To add intellisense to your editor, install `@warp-ds/elements` by using npm/pnpm.

```
npm install @warp-ds/elements
```
or
```
pnpm add @warp-ds/elements
```

In your tsconfig file, add Warp Elements to compiler options

```json
{
  "compilerOptions": {
    "types": ["@warp-ds/elements"]
  }
}
```

### Visual Studio Code

Install the [Web Components Language Server](https://wc-toolkit.com/integrations/web-components-language-server/) extension. The extension automatically picks up the [Custom Element Manifest](https://wc-toolkit.com/getting-started/) that we ship with `@warp-ds/elements`.

### JetBrains products

We ship `web-types.json` which should get picked up automatically by JetBrains IDEA and similar products.
You should see code completions and inline docs for Warp elements when writing HTML.

## Using Components

Once installed, components can be freely used in your application. Do not import components in your application, they are provided globally when you import the Warp elements script into your document head.

*Example:*
```html
<w-breadcrumbs>
  <a href="/url/1">Page 1</a>
  <a href="/url/2">Page 2</a>
  <span aria-current="page">Page 3</span>
</w-breadcrumbs>
```

## Best Practice

To avoid issues like CLS (cumulative layout shift) and FOUCE (flash of unstyled custom elements), it's important that Warp Elements are loaded before the page is rendered. For this reason, elements should not be bundled into the rest of your client side application code --  they should be loaded in the document head, as early as possible (see installation above). When this is done correctly, elements will load and be ready by about the same time as the rest of the page styles and wont cause delays in page load times. However, due to the way browsers work, a page render will occur without the components and an immediate re-render will occur with the components. This causes things to jump around on the page which in turn impacts lighthouse and other performance scores. Warp elements ships with a tool to prevent the initial render without components and only do the second, with components, render. This tool is called Warp Cloak and its usage is described below.

### The Warp cloaking device

To use the Warp cloaking device to avoid CLS and FOUCE, simply add the warp-cloak class to your pages body, html or a wrapper div that contains all the pages visible elements (including the header and footer)

```html
<body class="warp-cloak">
```

That's it, your components should render just 1x, fully ready with no CLS and FOUCE.