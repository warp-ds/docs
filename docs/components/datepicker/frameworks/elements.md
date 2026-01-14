# Date picker - Frameworks
A date picker allows the user to select a specific calendar date.

<ComponentsStatus />

## Elements

<FrameworkTabs />


### Example

```html
<w-datepicker label="Select date"></w-datepicker>
```

### Props

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | string |  | Label shown on the input of the datepicker. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | string |  | The selected date as a string |
| name | string |  | Sets the form field name when used inside a ``. |
| lang | string |  | Controls the locale used by the calendar. |
| header-format | string |  | Controls the format shown in the calendar header (month + year). |
| weekday-format | string |  | Controls the weekday labels shown above the grid. |
| day-format | string |  | Controls the date format used for screen readers when announcing a day cell (aria-label). |
| isDayDisabled | `(day: Date) => boolean` |  | Lets you disable specific dates in the calendar UI. Property only. |

#### Events

| Name | Description |
| --- | --- |
| @change | Fired when the selected date is committed, either by typing in the input and then shifting focus away from the input field or by selecting a date from the calendar. |

#### Label (`label`)

Sets the visible label for the input.

```html example
<w-datepicker label="Select date"></w-datepicker>
```

#### Value (`value`)

The selected date as a string.

- When selecting a date from the calendar, `value` is set to an ISO date string in the form `YYYY-MM-DD` (via `date-fns` `formatISO(..., { representation: "date" })`).
- The underlying `<input>` uses `type="date"` on most platforms, but uses `type="text"` on iOS (`navigator.userAgent` detection) to avoid native iOS date input behavior.

```html example
<w-datepicker label="Select date" value="2026-01-07"></w-datepicker>
```

#### Name (`name`)

Sets the form field name when used inside a `<form>`.

```html example
<form onsubmit="event.preventDefault(); alert(new FormData(event.target).get('startDate'))">
  <w-datepicker label="Start date" name="startDate"></w-datepicker>
  <button type="submit">Submit</button>
</form>
```

#### Language (`lang`)

Controls the locale used by the calendar.

- Uses the element’s `lang` attribute if set.
- Otherwise uses the detected locale (`detectLocale()` which reads from the document).

Convenience locales bundled: `en`, `nb`, `sv`, `da`, `fi` (mapped to `date-fns` locales).

```html example
<w-datepicker lang="nb" label="Velg dato"></w-datepicker>
```

#### Header format (`header-format`)

Controls the format shown in the calendar header (month + year).

- Uses `date-fns/format` tokens.
- Default: `MMMM yyyy`

```html example
<w-datepicker label="Select date" header-format="MMM yyyy"></w-datepicker>
```

#### Weekday format (`weekday-format`)

Controls the weekday labels shown above the grid.

- Uses `date-fns/format` tokens.
- Default: `EEEEEE`

```html example
<w-datepicker label="Select date" weekday-format="EE"></w-datepicker>
```

#### Day format (`day-format`)

Controls the date format used for screen readers when announcing a day cell (`aria-label`).

- Uses `date-fns/format` tokens.
- Default: `PPPP`

```html example
<w-datepicker label="Select date" day-format="PPPP"></w-datepicker>
```

#### Disable specific days (`isDayDisabled`)

Lets you disable specific dates in the calendar UI.

- Must be set in JavaScript (it is not an HTML attribute).
- Disabled days are marked as disabled via aria-disabled and cannot be selected.

```html example
<w-datepicker id="dp-disabled" label="Select date"></w-datepicker>
<script type="module">
  import { isBefore, startOfDay } from 'date-fns';

  const today = startOfDay(new Date());
  const el = document.querySelector('#dp-disabled');

  // Disable all days before today
  el.isDayDisabled = (day) => isBefore(startOfDay(day), today);
</script>
```

### Events

#### `change`

Fired when the selected date is committed.

- When a date is selected from the calendar, the component dispatches a bubbling, composed `change` event from the internal `<input>`.
- When the user types a date, the native input `change` event fires when the value is committed (for example on blur), depending on browser behavior.

```html example
<w-datepicker id="dp-events" label="Select date"></w-datepicker>
<script>
  const el = document.querySelector('#dp-events');

  el.addEventListener('input', () => console.log('input', el.value));
  el.addEventListener('change', () => console.log('change', el.value));
</script>
```

### Examples

#### Open calendar (button)

The calendar button toggles a popover calendar.

```html example
<w-datepicker label="Select date"></w-datepicker>
```

#### Keyboard navigation (calendar)

When the calendar is open and a day cell is focused:

- Arrow keys move by day/week (`ArrowLeft/Right`, `ArrowUp/Down`)
- `Home` / `End` moves to start/end of the week
- `PageUp` / `PageDown` moves to previous/next month
- `Enter` or `Space` selects the focused day
- `Escape` closes the calendar

### Accessibility

- The calendar popover uses `role="dialog"` and `aria-modal="true"`.
- The date grid uses `role="grid"`; each day is a `role="gridcell"`.
- Roving tabindex is used: the “navigation date” day has `tabindex="0"`, other day cells have `tabindex="-1"`.
- `aria-label` on day cells uses `day-format` for screen reader announcement.
- The toggle button’s `aria-label` changes based on whether there’s a selected date (“Choose date” / “Change date, {currentDate}”).

<component-questions />