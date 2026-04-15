# Date picker

A date picker allows the user to select a specific calendar date.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/date-picker/overview), [Usage](https://warp-ds.github.io/docs/components/date-picker/usage), [Styling](https://warp-ds.github.io/docs/components/date-picker/styling), [Accessibility](https://warp-ds.github.io/docs/components/date-picker/accessibility), [React 19](https://warp-ds.github.io/docs/components/date-picker/frameworks/react-19), [Elements](https://warp-ds.github.io/docs/components/date-picker/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/date-picker/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/date-picker/frameworks/ios)

**Framework support:** Android, Elements, iOS, React 19

## Overview

A date picker allows the user to select a specific calendar date.

The date picker consists of a text field and a popover calendar panel. It is designed to allow users to select a single date in a clean, accessible manner. The popover appears upon click/tap and closes on date selection or when the user clicks/taps outside the popover.

Related components: [Text field](https://warp-ds.github.io/docs/components/text-field/overview)

![Example of a focused date input field with an open calendar below displaying January 2023 and the current selection is the 11th. The example is surrounded by four numbered highlights, pointing to the label, date input field, the optional calendar icon and the calendar popover](https://warp-ds.github.io/docs/components/datepicker/overview-anatomy.svg)

**1\. Label**: Indicates what information the field requires.

**2\. Date input field**: Selecting this field opens the date picker component. Users can also input dates into the field. Once a date is selected, the option will be shown in the text input. This example shows date formatted in `dd.mm.yyyy` but this is controlled by the user's browser locale settings (operating system is also fallback).

**3\. Calendar icon (optional)**: Opens the calendar popover and helps indicate what information the field requires. Not an accessibility requirement but we recommend including it for ease of keyboard navigation.

**4\. Calendar popover**: Contains the list of all dates. Left and right buttons allowing to navigate the months, month and year header, calendar grid with weekdays and days of the month.

## Inline Demo Markup

```html
<div>
        <h3 class="h4">Default Date Picker</h3>
        <w-datepicker label="Select date"></w-datepicker>
    </div>
    <div>
        <h3 class="h4">With pre-selected date</h3>
        <w-datepicker label="Birthday" value="2000-01-15"></w-datepicker>
    </div>
    <div>
        <h3 class="h4">Norwegian locale</h3>
        <w-datepicker label="Velg dato" lang="nb"></w-datepicker>
    </div>
```

## Usage

A date picker allows the user to select a specific calendar date.

-   The date picker popover is bound to a text field. The field is split into three editable segments: date, month, year.
-   Users can type a date manually into the input, or open the date picker popover by interacting with the text field (on click/tap) or the calendar icon.

-   Our recommendation is to use the date picker in its default form (a raised popover), but if you need to create an inline version, please bare in mind that that has more UX requirements (eg, a confirmation button) that you need to fix yourself.
-   The Calendar icon button isn’t an accessibility requirement but we recommend displaying it so that it is easy to understand what information the field requires and keyboard navigation users can access the date picker popover.

The date format can be overwritten by users of this component. Read mechanic guidelines for more information about date formats: [Date and time](https://www.astro-contentguide.com/05b2d7be6/p/649b17-date-and-time)

Internationalization, also referred to as globalization, refers to software adapting to different languages, regional peculiarities, and technical requirements of a target locale without additional code changes. This means that if the location is known, then formatting of a date or time can automatically change to the acceptable local format. You should always try to design for internationalization.

![Example displaying two date input fields with “dd.mm.yyyy” inside. Both input fields has a highlight, emphasizing the difference between Norwegian formatting (using a dot to differentiate between day, month and year) and English formatting (using a slash to differentiate between day, month and year).](https://warp-ds.github.io/docs/components/datepicker/usage-content_guidelines-internationalization.svg)

**1\. Norwegain formating**: Uses a `.` to differentiate between day, month, and year

**2\. English formating**: Uses a `/` to differentiate between day, month, and year

Use when the required field for a text input in the date picker component has not been filled in or if the value entered is invalid. It can also be triggered due to a system error. This state requires a user response before data can be submitted or saved.

![Example showing date input field error states marked with a red border, red input text and an error message below the input. ](https://warp-ds.github.io/docs/components/datepicker/usage-error_states.svg)

## Styling

A date picker allows the user to select a specific calendar date.

Text field and picker popover padding and size measurements.

![Example of a date picked with a focused date input field and an open calendar below. A highlight shows a 0 px gap between the input field field and the calendar popover.](https://warp-ds.github.io/docs/components/datepicker/style-layout_sizing_1.svg)

![Example of the date picker calendar with a red highlight, displaying a 4 px gap between the row of weekdays and first row of dates.](https://warp-ds.github.io/docs/components/datepicker/style-layout_sizing_2.svg)

## Accessibility

A date picker allows the user to select a specific calendar date.

Users should be able to manually enter a date, whether or not they interact with the date picker component.

* * *

#### 1st Tab key 

Focus moves to the **day** field (“dd”), allowing the user to manually enter a day value.

Pressing ↑ or ↓ increments or decrements the day (01–31).

#### 2nd Tab key 

Focus moves to the **month** field (“mm”), allowing the user to manually enter a month value.

Pressing ↑ or ↓ increments or decrements the month (01–12).

#### 3rd Tab key 

Focus moves to the **year** field (“yyyy”), allowing the user to manually enter a year.

Pressing ↑ or ↓ increments or decrements the year (starting from the current year).

#### 4th Tab key 

Focus moves to the calendar icon.

Pressing Enter opens the calendar popover. Pressing Enter again closes it.

#### 5th Tab key 

Moves focus to the next interactive element in the interface.

* * *

#### 1st Tab key 

Focus moves to the **previous month** button <.

Pressing Enter navigates to the previous month.

#### 2nd Tab key 

Focus moves to the **next month** button \>.

Pressing Enter navigates to the next month.

#### 3rd Tab key 

Focus moves to the **current date** in the calendar grid.

Use the arrow keys ← → ↑ ↓ to navigate between available dates.

Pressing Enter selects the focused date and updates the input field.

#### 4th Tab key 

Moves focus to the next interactive element in the interface. The calendar popover closes.

* * *

It's not necessary to explain how to use, open, or close the date picker when the text field receives focus — as long as its behavior is intuitive and accessible.

## Frameworks

### React 19

A date picker allows the user to select a specific calendar date.

[Android](https://warp-ds.github.io/docs/components/date-picker/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/date-picker/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/date-picker/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/date-picker/frameworks/react-19)

You can import the component like so:

```js
import { Datepicker } from '@warp-ds/components/react/datepicker';
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | string |  | Label shown on the input of the datepicker. |
| onChange | (day: string) => void |  | Called with the date when the user makes a selection from the calendar or a changes the input. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | string |  | The current selected date. |
| isDayDisabled | (day: Date) => boolean | noop | Called with the day of an entry in the calendar to determine if the day is disabled. |
| locale | Locale | Norwegian locale | A date-fns locale object. This enables internationalization in the datepicker such as date formatting and which day a week starts on. See date fns documentation. |
| phrases | Phrases |  | An object of translation strings used by the datepicker for accessibility. |
| displayFormat | string |  | A date-fns format string for the input. See date fns documentation. |
| monthFormat | string |  | A date-fns format string for the month. See date fns documentation. |
| weekDayFormat | string |  | A date-fns format string for the weekday. See date fns documentation. |
| dayAriaLabelFormat | string |  | A date-fns format string for a day. Used for screen readers together with phrases. See date fns documentation. |

```jsx
function DatePickerExample() {

    return <DatePicker
        label="Dato"
        onChange={setValue}
    />;
}
```

### Elements

A date picker allows the user to select a specific calendar date.

[Android](https://warp-ds.github.io/docs/components/date-picker/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/date-picker/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/date-picker/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/date-picker/frameworks/react-19)

```html
<w-datepicker label="Select date"></w-datepicker>
```

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
| isDayDisabled | (day: Date) => boolean |  | Lets you disable specific dates in the calendar UI. Property only. |

#### Events 

| Name | Description |
| --- | --- |
| @change | Fired when the selected date is committed, either by typing in the input and then shifting focus away from the input field or by selecting a date from the calendar. |

#### Label (`label`) 

Sets the visible label for the input.

```html
<w-datepicker label="Select date"></w-datepicker>
```

#### Value (`value`) 

The selected date as a string.

-   When selecting a date from the calendar, `value` is set to an ISO date string in the form `YYYY-MM-DD` (via `date-fns` `formatISO(..., { representation: "date" })`).
-   The underlying `<input>` uses `type="date"` on most platforms, but uses `type="text"` on iOS (`navigator.userAgent` detection) to avoid native iOS date input behavior.

```html
<w-datepicker label="Select date" value="2026-01-07"></w-datepicker>
```

#### Name (`name`) 

Sets the form field name when used inside a `<form>`.

```html
<form onsubmit="event.preventDefault(); alert(new FormData(event.target).get('startDate'))">
  <w-datepicker label="Start date" name="startDate"></w-datepicker>
  <button type="submit">Submit</button>
</form>
```

#### Language (`lang`) 

Controls the locale used by the calendar.

-   Uses the element’s `lang` attribute if set.
-   Otherwise uses the detected locale (`detectLocale()` which reads from the document).

Convenience locales bundled: `en`, `nb`, `sv`, `da`, `fi` (mapped to `date-fns` locales).

```html
<w-datepicker lang="nb" label="Velg dato"></w-datepicker>
```

#### Header format (`header-format`) 

Controls the format shown in the calendar header (month + year).

-   Uses `date-fns/format` tokens.
-   Default: `MMMM yyyy`

```html
<w-datepicker label="Select date" header-format="MMM yyyy"></w-datepicker>
```

#### Weekday format (`weekday-format`) 

Controls the weekday labels shown above the grid.

-   Uses `date-fns/format` tokens.
-   Default: `EEEEEE`

```html
<w-datepicker label="Select date" weekday-format="EE"></w-datepicker>
```

#### Day format (`day-format`) 

Controls the date format used for screen readers when announcing a day cell (`aria-label`).

-   Uses `date-fns/format` tokens.
-   Default: `PPPP`

```html
<w-datepicker label="Select date" day-format="PPPP"></w-datepicker>
```

#### Disable specific days (`isDayDisabled`) 

Lets you disable specific dates in the calendar UI.

-   Must be set in JavaScript (it is not an HTML attribute).
-   Disabled days are marked as disabled via aria-disabled and cannot be selected.

```html
<w-datepicker id="dp-disabled" label="Select date"></w-datepicker>
<script type="module">
  import { isBefore, startOfDay } from 'date-fns';

  const today = startOfDay(new Date());
  const el = document.querySelector('#dp-disabled');

  // Disable all days before today
  el.isDayDisabled = (day) => isBefore(startOfDay(day), today);
</script>
```

#### `change` 

Fired when the selected date is committed.

-   When a date is selected from the calendar, the component dispatches a bubbling, composed `change` event from the internal `<input>`.
-   When the user types a date, the native input `change` event fires when the value is committed (for example on blur), depending on browser behavior.

```html
<w-datepicker id="dp-events" label="Select date"></w-datepicker>
<script>
  const el = document.querySelector('#dp-events');

  el.addEventListener('input', () => console.log('input', el.value));
  el.addEventListener('change', () => console.log('change', el.value));
</script>
```

#### Open calendar (button) 

The calendar button toggles a popover calendar.

```html
<w-datepicker label="Select date"></w-datepicker>
```

#### Keyboard navigation (calendar) 

When the calendar is open and a day cell is focused:

-   Arrow keys move by day/week (`ArrowLeft/Right`, `ArrowUp/Down`)
-   `Home` / `End` moves to start/end of the week
-   `PageUp` / `PageDown` moves to previous/next month
-   `Enter` or `Space` selects the focused day
-   `Escape` closes the calendar

-   The calendar popover uses `role="dialog"` and `aria-modal="true"`.
-   The date grid uses `role="grid"`; each day is a `role="gridcell"`.
-   Roving tabindex is used: the “navigation date” day has `tabindex="0"`, other day cells have `tabindex="-1"`.
-   `aria-label` on day cells uses `day-format` for screen reader announcement.
-   The toggle button’s `aria-label` changes based on whether there’s a selected date (“Choose date” / “Change date, {currentDate}”).

### Android

A date picker allows the user to select a specific calendar date.

[Android](https://warp-ds.github.io/docs/components/date-picker/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/date-picker/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/date-picker/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/date-picker/frameworks/react-19)

```kotlin
@Composable
fun WarpDatePicker(
    modifier: Modifier = Modifier,
    onDateSelected: (Long) -> Unit,
    onDismiss: (() -> Unit)? = null,
    preselectedDateMillis: Long? = null,
    type: WarpDatePickerType = WarpDatePickerType.DIALOG,
    selectableDates: SelectableDates = DatePickerDefaults.AllDates
)
```

Can be shown as a dialog or inline.

```kotlin
enum class WarpDatePickerType {
    DIALOG,
    INLINE
}
```

Basic usage for the datepicker - onDateSelected callback will return the chosen date in milliseconds.

```kotlin
var dateinMillis by remember { mutableStateOf(System.currentTimeMillis()) }

WarpDatePicker(
    type = WarpDatePickerType.INLINE,
    onDateSelected = {
        dateinMillis = it
    }
)
```

If another component should trigger the datepicker then WarpDatePickerType.DIALOG should be used. In this example, a WarpTextField is used as the trigger. When there is a need to block some dates, use the selectableDates param. In this example only future dates are allowed.

```kotlin
val futureDates = object : SelectableDates {
    override fun isSelectableDate(utcTimeMillis: Long): Boolean {
        return utcTimeMillis > System.currentTimeMillis()
    }
}

var showDialog by remember { mutableStateOf(false) }
WarpTextField(
    modifier = Modifier.padding(horizontal = dimensions.space2),
    value= dateString ?: "",
    placeholderText = "Select date",
    onValueChange = { formatter.formatDate(dateinMillis, Locale.getDefault()) },
    trailingIcon = { WarpIcon(modifier = Modifier.clickable { showDialog = true }, icon = icons.calendar) }
    )
if (showDialog) {
    WarpDatePicker(
    type = WarpDatePickerType.DIALOG,
    preselectedDateMillis = dateinMillis,
    onDateSelected = {
        dateinMillis = it
        dateString = formatter.formatDate(dateinMillis, Locale.getDefault())
        showDialog = false
        },
    onDismiss = { showDialog = !showDialog },
    selectableDates = futureDates
    )
}
```

Not supported

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| onDateSelected | (Long) -> Unit |  | The function to be invoked when a date is selected |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier for the datepicker |
| onDismiss | () -> Unit? | null | The function to be invoked when dismissed |
| preselectedDateMillis | Long? | null | When provided the preselected date is shown in the picker, if null then todays date is used |
| type | WarpDatePickerType.DIALOG, WarpDatePickerType.INLINE | WarpDatePickerType.DIALOG | The type of picker to be used |
| selectableDates | SelectableDates | DatePickerDefaults.AllDates | Determines which dates are eligible for selection |

### iOS

A date picker allows the user to select a specific calendar date.

[Android](https://warp-ds.github.io/docs/components/date-picker/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/date-picker/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/date-picker/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/date-picker/frameworks/react-19)

A graphical calendar interface that can be embedded directly in your view hierarchy.

```swift
Warp.DatePicker(
    date: Binding<Date>
)
```

#### Basic usage 

```swift
Warp.DatePicker(date: $selectedDate)
```

#### Range Constraints 

You can limit the selectable dates using different range types:

```swift
// Closed range (from-to)
Warp.DatePicker(date: $selectedDate, range: startDate...endDate)

// Partial range (from-infinity)
Warp.DatePicker(date: $selectedDate, range: startDate...)

// Partial range (infinity-to)
Warp.DatePicker(date: $selectedDate, range: ...endDate)
```

A compact date picker that can be attached to any view using a view modifier.

```swift
 .warpDatePicker(
    date: Binding<Date>
) -> some View
```

#### Basic usage 

This example shows how to attach a dialog date picker to Warp TextField using the `warpDatePicker` modifier + some formatting.

```swift
Warp.TextField(
    text: Binding(
        get: { formattedDate(selectedDate) },
        set: { _ in }
    ),
    placeholder: "Select a date",
    rightIcon: .calendar
)
.warpDatePicker(date: $selectedDate)
```

#### Range Constraints 

Similar to the inline picker, you can constrain the selectable dates:

```swift
// Closed range
.warpDatePicker(date: $selectedDate, range: startDate...endDate)

// Partial range (from)
.warpDatePicker(date: $selectedDate, range: startDate...)

// Partial range (through)
.warpDatePicker(date: $selectedDate, range: ...endDate)
```

Note: The dialog picker will intercept all touch events on the view it's applied to.

Not supported

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| date | Binding |  | A binding to the currently selected date. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| range | ClosedRange\|PartialRangeFrom\|PartialRangeThrough |  | The range of selectable dates. If not provided, there is no date range restriction. |
