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

<api-table type="react" component="Slider" />
