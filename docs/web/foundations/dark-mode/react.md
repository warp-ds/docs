# Dark mode in Warp React

WARP offers light and dark mode for all supported brands.

## Conditionally render content based on theme

If you need to know the active theme to render different content, for example the `src` of an `<img>`, you can use the `WarpThemeContext` and `useWarpTheme` hook. That way your React component rerenders automatically if the theme changes while the page is active.

### Prefer a CSS-based approach

Where it's possible you should use CSS to style based on the active theme instead of for example using JavaScript to add or remove UnoCSS classes.

```css
/* selector-based */
.my-element {
  /* light mode styles */
}

[data-w-theme="dark"] .my-element {
  /* dark mode styles */
}

/* light-dark function */
.my-element {
  /*  This is just to illustrate an example.
        Use semantic tokens for typography, they have dark mode support built in: https://warp-ds.github.io/docs/foundations/css-classes/text-color */
  color: light-dark(var(--w-black), var(--w-white));
}
```

### Set up the context on the root of your application

To help avoid prop drilling `@warp-ds/elements/react` includes a `WarpThemeContext` you can use at the root of your application.

#### Tips for Borealis applications

If you've used a web platform app template recently you might have a `server/render.ts` with a `render` function. That is your React application root on the server.

```ts
// src/server/render.ts
import { WarpThemeContext } from "@warp-ds/elements/react";

export async function render(
	req: Request,
	res: Response,
  // etc
) {

  // Read the theme value from the cookies on the incoming request
  const defaultTheme = req.headers.cookie?.includes("wtheme=dark") ? "dark" : "light";

  // Create the React contexts using the regular JavaScript API (not JSX) and render the page to a string.
	const html = template.replace(
		"<!--ssr-content-->",
		ReactDOMServer.renderToString(
			React.createElement(
				I18nProvider,
				{ i18n },
				React.createElement(
					WarpThemeContext,  // 👈 This is where you add the WarpThemeContext
					{ value: defaultTheme },  // 👈 This is where you set the context's value
					React.createElement(React.StrictMode, null, renderFunc(props)),
				),
			),
		),
	);
}
```

For the client side islands, set up the context in the root component of your island (the one you render in the callback of `hydrate()`, typically in a file called `islands/<something>-island.tsx`).

```tsx
// islands/confetti-island.tsx
import { Confetti, type ConfettiProps } from "./Confetti.tsx"; // 👈 Add the WarpThemeContext in here
import { hydrate } from "../hydrate.tsx";

hydrate<ConfettiProps>("confetti-island", (props) => <Confetti {...props} />);
```

```tsx
// islands/Confetti.tsx
import { Button, WarpThemeContext, useWarpTheme } from "@warp-ds/elements/react";

export function Confetti({ name }: ConfettiProps) {
	const theme = useWarpTheme();
	return (
		<WarpThemeContext value={theme}>
			{/* child components */}
		</WarpThemeContext>
	);
}
```

Then in child components you can read the theme with [useContext](https://react.dev/reference/react/useContext), both server-side and client-side.

```tsx
import { useContext } from "react";
import { WarpThemeContext } from "@warp-ds/elements/react";

export function ChildComponent() {
	const theme = useContext(WarpThemeContext);
}
```
