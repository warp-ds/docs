## Installation

The Warp React package can be installed from NPM.

```shell
npm install @warp-ds/react
```

## Setup

Since warp components are internationalised, you'd need to either set `NMP_LANGUAGE` for server-side rendering of the component, or set html document lang with a two-letter-code, eg: `<html lang="en">`. The server-side variable is read as `process.env.NMP_LANGUAGE` so you could either define this in your package.json script, or use `.env` files to leverage [dotenv](https://github.com/motdotla/dotenv).

## Using Components

Once installed, components can be imported into your app by name.

```js
import { Box } from '@warp-ds/react';
```

You can also import them individually to optimize your JS bundle size by adding only the components you need:
```js
import { Box } from '@warp-ds/react/components/box'

```

You can find the specific import statement to import each component on that
component's documentation page. For example, here's the [button page](/components/button/).


## TypeScript support

The components are written in TypeScript. To take advantage of this, make sure
your project is up to date on the latest `@types/react` definitions.

```shell
npm install @types/react --save-dev
```

## Eik support
We publish `@warp-ds/react` package to EIK cdn in 2 variants, eg:

For react 18:
```
https://assets.finn.no/pkg/@warp-ds/react/v2/warp-react-18.js
```
For react 17:
```
https://assets.finn.no/pkg/@warp-ds/react/v2/warp-react-17.js
```

### Import mapping

We publish a Warp import map for use with Eik. Be sure to include the React import map first.

```json
{
	"name": "my-app",
	"version": "1.0.0",
	"server": "https://assets.finn.no",
	"import-map": [
		"https://assets.finn.no/map/react/v18",
		"https://assets.finn.no/map/warp/v2"
	]
}
```

#### Legacy React v17 support

While we no longer officially support React v17, in order to buy yourself time to migrate to React v18, you can add the Warp legacy map for interrim support.
When React v19 is released, React v17 support will be dropped entirely.
Map order is important.

```json
{
	"name": "my-app",
	"version": "1.0.0",
	"server": "https://assets.finn.no",
	"import-map": [
		"https://assets.finn.no/map/react/v17",
		"https://assets.finn.no/map/warp/v2",
		"https://assets.finn.no/map/warp-legacy/v2"
	]
}
```