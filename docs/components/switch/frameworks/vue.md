# Switch - Usage
The Switch component allows users to toggle between two states.

<ComponentsStatus />

## Vue

<FrameworkTabs />

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

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| v-model | boolean | false | The value of the switch. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | false | The unique identifier. |
| disabled | boolean | false | Whether the switch is disabled. |