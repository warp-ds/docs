# Badge

## Vue

### Import

> Use in entire app

```js
import { Badge } from '@warp-ds/vue';
app.use(Badge);
```

> Use in one component and special imports

You can import the component like so:
```js
import { wBadge } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { wBadge } from '@warp-ds/vue/badge';

```

### Syntax

```vue-html
<w-badge>Default badge rendered as neutral variant</w-badge>
<w-badge variant="info">Info variant badge</w-badge>
<w-badge variant="price" position="top-left">Price badge with a top-left position</w-badge>
```

### Props

<api-table type=vue component="Badge" />