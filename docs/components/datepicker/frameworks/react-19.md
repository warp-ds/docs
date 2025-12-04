# Date picker

## React-19

### Import

You can import the component like so:

```js
import { Datepicker } from '@warp-ds/components/react/datepicker';
```

### Props

<api-table type=react component="DatePicker" />

### Example

```jsx
function DatePickerExample() {

    return <DatePicker
        label="Dato"
        onChange={setValue}
    />;
}
```