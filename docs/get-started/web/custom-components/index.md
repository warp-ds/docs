# Building Custom Elements with Warp

## Background

The shadow DOM brings great power but also great complexity, especially once you bring a style library into the mix.

In order to solve nasty issues like FOUT (flash of unstyled text) and FOUC (flash of unstyled content) when writing custom elements for Warp, a base class has been created. This can be extended to get out of the box FOUC/FOUT-free styling both on the server (SSR) and in the browser (client side).

## How does it work?

The base class, [WarpElement](https://github.com/warp-ds/labs/tree/main/warp-element), extends [PodiumElement](https://github.com/podium-lib/element) which in turn extends [LitElement](https://lit.dev/docs/api/LitElement/). It’s pretty much the same as extending LitElement, but with styles added in. The base class does the work of detecting whether it is being run server side or client and applies styles differently depending on which context it detects.

### Server side

On the server side, the base class adds CSS `@import(...)` statements to the server rendered markup for the various Warp CSS files; fonts, brand, resets and components. This works because when the browser sees these statements, it won't render anything until these imports have been resolved so there's no unwanted flicker of unstyled content that you would see if you used this technique client side.

### Client side

On the client side, as mentioned, we can’t use CSS `@import(...)` statements because the content would render onto the page before the browser even knows about these statements and can do anything about them. We therefore need a different approach. Here we use top level await to directly perform fetch calls to get the same 4 CSS files; fonts, brand, resets and components before anything is rendered and we build CSSStyleSheet objects that Lit knows how to work with. Adding these CSSStyleSheet objects to the component definition ensures that nothing is rendered without these styles

### Performance

All CSS is loaded from absolute URLS on the Eik server. This means we have to pay a cost in terms of additional requests to the Eik server to resolve the CSS files. In addition, a fair amount of CSS needs to be loaded on a cold load. However, there's a really big win here in that since these 4 URLs are unchanging, and since all components that extend the base class will be making fetch calls for the same 4 URLs, the browser is able to all but remove the problem for us with caching. Sure the first cold request using a component or components that use the WarpElement base class will have to make 4 requests to the Eik server, all requests thereafter will not. And this win goes across pages. As users navigate the site, they will encounter more components that make use of the WarpElement base class and the browser will simply serve these files from cache. The WarpElement class itself is also provided via Eik for the same reason and client side, all components should refer to it on the Eik server directly. There is a bit of a waterfall effect where one file loads another which can increase page loads but this can be mitigated with preloading.

## Usage in an app

### Option 1: Client side only

Import the base class from the Eik server directly

```jsx
import WarpElement from "https://assets.finn.no/pkg/@warp-ds/elements-core/v0/element.js";
import { html } from "lit";
```

then, extend the base class and include the base classes styles in your component

```jsx
class MyElement extends WarpElement {
  static styles = [WarpElement.styles];

  render() {
    return html`<div class="...use warp styles...">hello world</div>`;
  }
}
```

### Option 2: Server side only

Install the package

```jsx
npm install @warp-ds/elements-core
```

next, import the base class from the package

```jsx
import WarpElement from "@warp-ds/elements-core";
import { html } from "lit";
```

Finally, extend the base class and include the base classes styles in your component

```jsx
class MyElement extends WarpElement {
    static styles = [WarpElement.styles];

  render() {
    return html`<div class="...use warp styles...">hello world</div>`;
  }
}
```

### Option 3: Server side with client side hydration

The starting point for this is identical to the server side only option described above.

After this, we need to add a build step for the client side that uses Eik import mapping to map the package to a URL on the Eik server for us.

**Using Esbuild**

Firstly, include the correct import map file in your `eik.json` file

```json
{
	"name": "myproject",
    "version": "1.0.0",
	"files": "./dist",
    "import-map": ["https://assets.finn.no/map/custom-elements/v2"]
}
```

Next, install build dependencies

```bash
npm install --save-dev @eik/esbuild-plugin esbuild
```

Create a build file with the following contents

```jsx
// build.js

import * as eik from '@eik/esbuild-plugin';
import esbuild from 'esbuild';

await eik.load();

await esbuild.build({
    entryPoints: ['./src/app.js'],
    outdir: "./dist",
    bundle: true,
    format: 'esm',
    target: ['es2021'],
    plugins: [eik.plugin()],
});
```

Next, add an npm run scripts to `package.json`

```json
{
  ...
	"scripts": {
    ...
    "build": "node build.js"
    ...
  }
  ...
}
```

And finally, run the script to produce a build with references to Lit and Warp Element replaced with references to URLs on the Eik server

```bash
npm run build
```

## Publishing components

If you are creating a component or component library that is to be consumed by other teams you will need to create and provide components and include instructions on how to setup import mapping.

### The Server side components package

Developers need to be able to import the components server side WITHOUT import mapping as absolute URLs cannot be imported in Node.js. You might be able to get away with no build at all server side but if you do need to produce a build for the server side, ensure that `lit` and `@warp-ds/elements-core` are excluded from this build so that developers get these dependencies from their own installed versions in their node_modules folder. Do not perform Eik import mapping.

```jsx
import esbuild from 'esbuild';

await esbuild.build({
    entryPoints: ['./src/app.js'],
	outdir: "./dist/server",
    bundle: true,
    format: 'esm',
    target: ['es2021'],
		// use external to ensure lit and elements core are not import mapped
		external: ['lit', '@warp-ds/elements-core'],
});
```

### Instructions for import mapping

Part of the usage instructions for your components needs to instruct developers how they should set up import mapping for client side usage.

### An example component

```jsx
// src/hello-world.js

import WarpElement from "@warp-ds/elements-core";
import { html } from "lit";

class HelloWorld extends WarpElement {
    static styles = [WarpElement.styles];

  render() {
    return html`<div class="...use warp styles...">hello world!!</div>`;
  }
}

customElements.define("hello-world", HelloWorld);
```

```jsx
// build.js

import esbuild from 'esbuild';
import * as eik from '@eik/esbuild-plugin';

// npm build
// It might be possible to skip this npm build step and let the developers
// own bundler deal with the packaging dependencies but you may also find
// that you end up with an SSR/hydration mismatch issue if you don’t.
// If you can get it to work, don’t bundle.
await esbuild.build({
    entryPoints: ['./src/hello-world.js'],
	outdir: "./dist",
    bundle: true,
    format: 'esm',
    target: ['es2021'],
		// use external to ensure lit and elements core are not import mapped
		external: ['lit', '@warp-ds/elements-core'],
});

// eik build
// this part of the build produces a version with lit and warp-element import
// mapped out making it ready for the client side. This build should be
// published to the Eik server.
await eik.load();
await esbuild.build({
    entryPoints: ['./src/hello-world.js'],
    outdir: "./dist/eik",
    bundle: true,
    format: 'esm',
    target: ['es2021'],
    plugins: [eik.plugin()],
});
```

```jsx
// package.json

{
	"name": "hello-world-element",
	"version": "1.0.0",
	...
	"exports": "./dist/hello-world.js"
	...
	"scripts": {
		"build": "./build.js"
	}
	...
	"eik": {
		"server": "https://assets.finn.no",
		"files": "./dist/eik",
	  "import-map": ["https://assets.finn.no/map/custom-elements/v2"]
	}
}
```

::: tip
When you publish to NPM, also publish to Eik.
:::
