# Breadcrumbs

## React

### Import

You can import the component like so:
```js
import { Breadcrumbs } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Breadcrumbs } from '@warp-ds/react/components/breadcrumbs';

```

### Syntax

```js
<Breadcrumbs>
  <a href="/url/1">Page 1</a>
  <a href="/url/2">Page 2</a>
  <span aria-current="page">Current Page</span>
</Breadcrumbs>
```

### Props

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| aria-label | string | Her er du | Defines a string value that labels the affix element. |
| className | string |  | Additional classes to include |
| style | CSSProperties |  | CSS styles to inline on the component |


