# Pill

## Vue

### Import
> Use in entire app

```js
import { Pill } from '@warp-ds/vue';
app.use(Pill);
```

> Use in one component and special imports

You can import the component like so:
```js
import { wPill } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { wPill } from '@warp-ds/vue/pill';

```

### Syntax

#### Filter Pill
```vue
<w-pill label="Filter Pill" />
```

#### Filter Pill with changed pill screen reader label
```vue
<w-pill label="Filter Pill" open-SR-label='Activate Filter'/>
```

#### Closable Filter Pill
```vue
<w-pill can-close label="Closable Filter Pill" />
```

#### Closable Filter Pill with changed close button screen reader label
```vue
<w-pill can-close label="Closable Filter Pill" close-SR-label='Deactivate Filter'/>
```

#### Suggestion Pill
```vue
<w-pill suggestion label="Suggestion Pill" />
```

#### Closable Suggestion Pill
```vue
<w-pill suggestion can-close label="Closable Suggestion Pill" />
```

### Props

<api-table type=vue component="Pill" />