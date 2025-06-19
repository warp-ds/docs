### Import

You can import the component like so:
```js
import { Datepicker } from '@warp-ds/components';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Datepicker } from '@warp-ds/components/react/datepicker'

```

### Props

<api-table type=react component="DatePicker" />

```tsx

export type DatepickerOption = {
  value: string;
  label?: string;
};
```
