# Switch

## React

### Import

You can import the component like so:
```js
import { Switch } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Switch } from '@warp-ds/react/components/switch';

```

### Syntax

```js
  <Switch
    value={value}
    onClick={() => setValue(!value)}
    aria-label="Toggle switch"
  />
```

### Accessibility

The Switch needs either `aria-label` or `aria-labelledby` to be accessible to screen readers.

#### Disabled property

There is no visual styling to a disabled button.
It is recommended to display a message to the user, for example a modal or toast, stating why the user cannot toggle the switch.

### Props

<api-table type="react" component="Switch" />