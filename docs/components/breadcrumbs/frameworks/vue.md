### Import

> Use in entire app

```js
import { Breadcrumbs } from '@warp-ds/vue';
app.use(Breadcrumbs);
```

> Use in one component and special imports

You can import the component like so:
```js
import { wBreadcrumbs } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { wBreadcrumbs } from '@warp-ds/vue/breadcrumbs';

```

### Syntax

```vue
<w-breadcrumbs>
  <a href="/url/1">Page 1</a>
  <a href="/url/2">Page 2</a>
  <span aria-current="page">Current Page</span>
</w-breadcrumbs>
```

### Props

<api-table type="vue" component="Breadcrumbs" />