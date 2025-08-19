## Installation

The Warp Vue package can be installed from NPM.

```shell
npm install @warp-ds/vue
```

## Setup

Since warp components are internationalised, you'd need to either set `NMP_LANGUAGE` for server-side rendering of the component, or set html document lang with a two-letter-code, eg: `<html lang="en">`. The server-side variable is read as `process.env.NMP_LANGUAGE` so you could either define this in your package.json script, or use `.env` files to leverage [dotenv](https://github.com/motdotla/dotenv).


## Using Components

### 1. Using in the entire app

```js
import { Box } from '@warp-ds/vue'
app.use(Box)
```

This code is bringing in **an installer** for the Box component, and any additional helper-components (in the case of Box, this would be the Clickable component). It will install the component app-wide, so you never need to import the component again.

### 2. Using in one place, or special exports

Once installed, components can be imported into your app by name.

```js
import { wButton } from '@warp-ds/vue';
```

You can also import them individually to optimize your JS bundle size by adding only the components you need:
```js
import { wButton } from '@warp-ds/vue/button'

```

This code is bringing in the Button component itself, rather than an installer - this is denoted by the `w` prefix of the component. Some edge-case components may be available this way that don't make sense to globally install for everyone.

You can find the specific import statement to import each component on that
component's documentation page. For example, here's the [button page](/components/button/)

## Eik support
We publish `@warp-ds/vue` package to EIK cdn, eg:
```
https://assets.finn.no/pkg/@warp-ds/vue/v2/warp-vue.eik.js
```

### Import mapping

We publish a Warp import map for use with Eik. Be sure to include the Vue import map first.

```json
{
	"name": "my-app",
	"version": "1.0.0",
	"server": "https://assets.finn.no",
	"import-map": [
		"https://assets.finn.no/map/vue/v3",
		"https://assets.finn.no/map/warp/v2"
	]
}
```