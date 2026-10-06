# Dark mode in Warp React

WARP offers light and dark mode for all supported brands.

## Conditionally render content based on theme

If you need to know the active theme to render different content, for example the `src` of an `<img>`, you can use the `useWarpTheme` hook. That way your React component rerenders automatically if the theme changes while the page is active.

```ts
import { useWarpTheme } from "@warp-ds/elements/react";

const theme = useWarpTheme();
const logoUrl = theme === "dark"
		? "https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba-inverted.svg"
		: "https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba.svg";
```

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
