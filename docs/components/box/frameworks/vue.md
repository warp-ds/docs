### Import

> Use in entire app

```js
import { Box } from '@warp-ds/vue';
app.use(Box);
```

> Use in one component and special imports

You can import the component like so:
```js
import { wBox } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { wBox } from '@warp-ds/vue/box';

```

### Syntax

```vue
<w-box info>
    <p>This is <strong>info</strong> variant of the box component</p>
</w-box>
```

### Props

<api-table type=vue component="Box" />