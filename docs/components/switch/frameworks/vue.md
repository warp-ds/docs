# Switch

## Vue

### Import

> Use in entire app

```js
import { Switch } from '@warp-ds/vue';
app.use(Switch);
```

> Use in one component and special imports

You can import the component like so:
```js
import { wSwitch } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { wSwitch } from '@warp-ds/vue/switch';

```

### Syntax

```vue
<w-switch v-model="model" />
```

### Props

<api-table type=vue component="Switch" />