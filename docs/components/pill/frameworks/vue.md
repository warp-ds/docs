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

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | string | undefined | The text content of the pill. |
| can-close | boolean | false | Whether the pill should be removable via a close button. |
| suggestion | boolean | false | Whether the pill should be rendered as a suggestion. |
| open-SR-label | string | "Open filter" | Label read by screen readers when targeting the pill |
| close-SR-label | string | "Remove filter {label}" | Label read by screen readers when targeting the close button |

#### Events

| Name | Description |
| --- | --- |
| close | the close button is pressed |