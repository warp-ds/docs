# Slider - Frameworks
Sliders allow users to adjust a numeric value within a given range.

<ComponentsStatus />

## React

<FrameworkTabs />


### Import

You can import the component like so:
```js
import { Slider } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Slider } from '@warp-ds/react/components/slider'

```

### Examples

#### Enabled
```js
function Example() {
  const [value, setValue] = React.useState(2_500_000);

  return (
    <div>
      <output>{value}</output>
      <Slider
        onChange={(value) => setValue(value)}
        value={value}
        min={1000}
        max={10_000_000}
        step={1000}
      />
    </div>
  );
}
```

#### Disabled

```jsx
<div>
  <Slider aria-label="Disabled slider" value={50} disabled />
</div>
```

### Props

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| step | number |  | Specifies the value granularity |
| value | number |  | The current value |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| max | number | 100 | The greatest value in the range of permitted values |
| min | number |  | The lowest value in the range of permitted values |
| disabled | boolean |  | Whether the slider is disabled |
| aria-label | number |  | String value for aria-label |
| aria-labelledby | string |  | Identifies the element that labels the slider |
| aria-valuetext | string |  | Human readable text alternative for the value |

#### Events

| Name | Description |
| --- | --- |
| onChange | (value: number) => void |