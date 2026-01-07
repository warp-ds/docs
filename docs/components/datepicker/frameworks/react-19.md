# Date picker - Frameworks
A date picker allows the user to select a specific calendar date.

<ComponentsStatus />

## React-19

<FrameworkTabs />

### Import

You can import the component like so:

```js
import { Datepicker } from '@warp-ds/components/react/datepicker';
```

### Props

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | string |  | Label shown on the input of the datepicker. |
| onChange | `(day: string) => void` |  | Called with the date when the user makes a selection from the calendar or a changes the input. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | string |  | The current selected date. |
| isDayDisabled | `(day: Date) => boolean` | noop | Called with the day of an entry in the calendar to determine if the day is disabled. |
| locale | Locale | Norwegian locale | A date-fns locale object. This enables internationalization in the datepicker such as date formatting and which day a week starts on. See [date fns documentation](https://date-fns.org/). |
| phrases | Phrases |  | An object of translation strings used by the datepicker for accessibility. |
| displayFormat | string |  | A date-fns format string for the input. See [date fns documentation](https://date-fns.org/). |
| monthFormat | string |  | A date-fns format string for the month. See [date fns documentation](https://date-fns.org/). |
| weekDayFormat | string |  | A date-fns format string for the weekday. See [date fns documentation](https://date-fns.org/). |
| dayAriaLabelFormat | string |  | A date-fns format string for a day. Used for screen readers together with `phrases`. See [date fns documentation](https://date-fns.org/). |

### Example

```jsx
function DatePickerExample() {

    return <DatePicker
        label="Dato"
        onChange={setValue}
    />;
}
```