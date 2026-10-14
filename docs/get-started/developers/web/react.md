## Setup

Use Warp Elements (web components) in React apps. The React-specific `@warp-ds/react` package is deprecated.

React apps should use the React wrappers provided by `@warp-ds/elements` to avoid some hydration mismatch errors when using server-side rendering. While the wrappers are recommended, in React v19 apps and later, you may also use the custom elements directly if you prefer.

Install the package to use the wrappers:

```shell
npm install @warp-ds/elements
```

Follow the [Elements setup guide](/get-started/developers/web/elements.md) to load the script and styles in your document head. That guide also covers internationalisation, editor support and Warp Cloak.

## Using Components

Import each wrapper from `@warp-ds/elements/react/{component}` and use it in JSX:

```jsx
import { Breadcrumbs, BreadcrumbItem } from '@warp-ds/elements/react';

export default function Example() {
  return (
    <Breadcrumbs aria-label="You are here">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem current-page>Current page</BreadcrumbItem>
    </Breadcrumbs>
  );
}
```

See each component's Elements documentation for its attributes, properties and events.
