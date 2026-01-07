# Switch - Usage
The Switch component allows users to toggle between two states.

<ComponentsStatus />

## React

<FrameworkTabs />

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

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | boolean |  | The value of the switch. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | false | The unique identifier. |
| aria-label | string | false | Defines a string value that labels the current element. Must be set if aria-labelledby is not defined. |
| aria-labelledby | string |  | Identifies the element (or elements) that labels the current element. Must be set if aria-label is not defined. |
| disabled | boolean | false | Whether the switch is disabled. |

#### Events

| Name | Description |
| --- | --- |
| onClick | () => void |