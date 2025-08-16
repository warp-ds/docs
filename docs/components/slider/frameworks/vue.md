### Import

> Use in entire app

```js
import { Slider } from '@warp-ds/vue';
app.use(Slider);
```

> Use in one component and special imports

You can import the component like so:
```js
import { wSlider } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { wSlider } from '@warp-ds/vue/slider'

```

### Examples

#### Enabled
```vue
<script setup>
  import { ref } from 'vue';
  import { wSlider } from '@warp-ds/vue';

  const currentValue = ref(5_000_000);
</script>

<template>
  <w-slider
    v-model="currentValue"
    :min="1000"
    :max="10_000_000"
    :step="1000"
    label="slider"
  />
</template>
```

#### Disabled
```html
<w-slider
  disabled
  v-model="currentValue"
  label="Disabled slider"
/>
```

### Props

<api-table type="vue" component="Slider" />
