# Slider - Frameworks

Sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Range Slider](/components/range-slider/overview.md).

<ComponentsStatus />

## Vue

<FrameworkTabs />

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

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| max | number | 100 | The greatest value in the range of permitted values |
| min | number | 0 | The lowest value in the range of permitted values |
| step | number |  | Specifies the value granularity |
| label | string |  | String value for aria-label |
| labelled-by | string |  | Identifies the element that labels the slider |

<component-questions />