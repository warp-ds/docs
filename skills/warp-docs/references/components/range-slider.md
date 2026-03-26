# Range slider

Range sliders are best suited for cases where people need to quickly set a value within a designated range.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/range-slider/overview), [Usage](https://warp-ds.github.io/docs/components/range-slider/usage), [Accessibility](https://warp-ds.github.io/docs/components/range-slider/accessibility), [React 19](https://warp-ds.github.io/docs/components/range-slider/frameworks/react-19), [Elements](https://warp-ds.github.io/docs/components/range-slider/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/range-slider/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/range-slider/frameworks/ios)

**Framework support:** Android, Elements, iOS, React 19

## Overview

Range sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Slider](https://warp-ds.github.io/docs/components/slider/overview).

A Range slider provides a visual indication of adjustable minimum and maximum values within a defined range by moving two handles along a horizontal track.

Sliders are available in two different variants: [Single](https://warp-ds.github.io/docs/components/slider/overview) and Range slider (read docs below).

![Example of a Range slider](https://warp-ds.github.io/docs/components/rangeslider/overview-anatomy.svg)

1.  **Label (optional)**: Describes what type of data the slider controls or adjusts.
2.  **Handles**: Two movable elements used to select a minimum and maximum value within the range.
3.  **Filled/active track**: Visualises the selected portion between the two handles.
4.  **Tooltip**: Displays the current value while dragging a handle, providing immediate feedback.
5.  **Track**: Represents the full possible range of selectable values.
6.  **Minimum range label (optional)**: Indicates the lowest selectable value and defines the start of the range.
7.  **Maximum range label (optional)**: Indicates the highest selectable value and defines the end of the range.
8.  **Minimum value input/text field (optional)**: Displays the current minimum value selected by the left handle and allows manual entry.
9.  **Maximum value input/text field (optional)**: Displays the current maximum value selected by the right handle and allows manual entry.
10.  **Input suffix (optional)**: Provides contextual clarification for values when their meaning is ambiguous, such as currency or measurement units.

## Inline Demo Markup

```html
<div>
        <h3 class="h4">Default Range Slider</h3>
        <w-slider label="Production year" min="1950" max="2025">
            <w-slider-thumb slot="from" name="from-year"></w-slider-thumb>
            <w-slider-thumb slot="to" name="to-year"></w-slider-thumb>
        </w-slider>
    </div>
    <div>
        <h3 class="h4">Open-ended Range Slider</h3>
        <w-slider label="Price range" min="0" max="10000" suffix="kr" open-ended>
            <w-slider-thumb slot="from" name="min-price"></w-slider-thumb>
            <w-slider-thumb slot="to" name="max-price"></w-slider-thumb>
        </w-slider>
    </div>
```

## Usage

Range sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Slider](https://warp-ds.github.io/docs/components/slider/overview).

-   [Sliders](https://warp-ds.github.io/docs/components/slider/overview) are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.
-   Range sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.
-   Use step intervals (integers) when precision input is required.
-   Use a tooltip to show the selected value.
-   Ensure the slider is wide enough to be easily interacted with on touch devices.
-   Although Slider and Range slider support a disabled state, we recommend avoiding their use in interfaces. Disabled sliders provide limited accessibility feedback, are not focusable by keyboard or screen readers, and can make it unclear why an option is unavailable.

-   Use when selecting a range of number values.
-   Use sliders when there is a need to show a selection within a range of values.
-   Use when needing to expose a variety of options or to limit the number of options quickly.

-   Do not use ranges that are too small (e.g. 1-3). Use a stepper instead (NB: currently not available in Warp. Reach out if you need this)
-   Do not use complex inputted values that are not numbers. Use [Select](https://warp-ds.github.io/docs/components/select/overview), [Checkbox](https://warp-ds.github.io/docs/components/checkbox/overview), [Radio](https://warp-ds.github.io/docs/components/radio/overview), [Pill](https://warp-ds.github.io/docs/components/pill/overview), or [Text field](https://warp-ds.github.io/docs/components/text-field/overview) instead.

-   As a general rule, don’t add units (e.g. kr, km, hk, etc.) to the min and max labels.
-   Range labels shown under the slider are a visual representation of the available range, not the selected value.
-   Labels are indicative rather than precise and do not require exact alignment with the slider handles.

Use when the lower and upper limits are known and fixed.

Examples:

-   0 — 200
-   1950 — 2027

#### Relative maximum 

When there is no concrete upper limit in the range.

**Recommended:**

-   Use + (plus symbol) to indicate an open-ended maximum.
-   Always use a concrete year as the maximum value for year ranges (for example, 2027 rather than 2026+). Only use the plus symbol (+) when a meaningful concrete maximum is not possible.

Examples:

-   0 — 700,000+
-   1950 – 2020+

**Alternative (to be tested):**

Use words as Over or After to indicate an open-ended maximum.

Example:

-   0 — Over 700,000
-   1950 – After 2020

We’d like to test this alternative alongside the recommended approach to see whether it more clearly communicates the available range to users. If your team is working on a related use case and can help test it, please reach out to Warp and share your findings.

#### Relative minimum 

When there is no concrete lower limit in the range.

-   Use descriptive labels (e.g. Under and Before) instead of symbols.
-   For year ranges, use Before (e.g. Before 1950).

**Recommended:**

-   Use 0 as Min value as much as possible. E.g. even though most boats go over 5 knots, don't have 5 knots as a minimum, use 0 instead to reduce noise.

**Do:**

-   Under 100 - 200
-   Before 1950 - 2027

**Do Not**

Don’t use mathematical symbols like < (lesser than) to refer to relative minimum limits.

-   < 1950 — 2027

The track visually represents the full range of available values. The selected range is highlighted, clearly distinguishing it from the unselected portion of the track.

#### Continuous intervals 

Use continuous intervals when users need fine-grained control or when exact values are not critical.

Handle movement should be smooth, with values updating continuously as the user drags.

#### Step intervals 

Use step intervals (integers) when values must align to predefined increments or discrete options.

Handle movement should snap to each step, updating the value only when a step is reached.

Step intervals must be clearly communicated in the Tooltip and in the input value to avoid ambiguity.

In relative ranges, step intervals apply only to concrete values. Relative labels (e.g. Before 1950) represent a boundary state, not a step.

Steps should reflect how precise users need to be: small steps for exact values (e.g. Year), larger steps for fast exploration (e.g. Price) — never more precision than users can realistically control. Focus on speed and touch usability for exploration.

Sliders must be paired with one text field to indicate the selected value. This is a recommended set to ensure accessibility.

Range sliders must be paired with two text fields to indicate the selected values: Min and Max. This is a recommended set to ensure accessibility.

Text input fields are the canonical source of the selected value(s).

Any change made via dragging, keyboard interaction, or manual input must remain synchronised between inputs, handles, and tooltip.

#### Default state (filled) 

Both inputs display Min and Max as actual values, not placeholders.

-   Min represents the available minimum value
-   Max represents the available maximum value

This reflects the real state of the Range slider, where both bounds are already defined by the labels.

#### Interaction on relative ranges 

When the user focuses or clicks/taps on the input field that displays a relative value:

\_ The active or focused input continues to display Min or Max until the user actively types another value or moves the handles

When the user types a new value:

-   Min / Max is replaced by the entered numeric value
-   The slider’s handle position updates accordingly and remains synchronized
-   Allow a brief grace period before showing validation errors. When users manually enter a value, delay error feedback to give them time to complete their input. This prevents premature errors while a value is still being typed (for example, entering 20 on the way to 200 in a 30–300 range)

If the user clears the value entered:

-   The input automatically reverts back to Min or Max
-   The slider returns to the corresponding boundary value
-   Allow a brief grace period before showing validation errors

Rationale:

-   Preserves a stable visual state on focus
-   Prevents accidental “empty” or undefined states
-   Clearly communicates that the slider always has an active selection

Accessibility note:

-   Min and Max must not only be placeholders. Placeholders are not reliably announced by screen readers.
-   Screen readers announce the current state correctly.
-   The input never enters an undefined or empty state.

Use suffixes in text fields only when the numeric value is ambiguous without additional context. The goal of a suffix is to clarify meaning, not to restate what is already obvious. Adding unnecessary suffixes increases visual noise and cognitive load.

#### When to use suffixes 

Use suffixes when the number cannot be correctly interpreted on its own.

**Currency**

Always use the country’s currency symbol when displaying monetary values.

-   390,000 kr
-   25,000 €
-   1,200 $

**Measurement units**

Always use standard measurement units when displaying values such as distance, volume, weight, power, etc.

-   120 km
-   75 m²
-   3.5 kg

The examples above are only illustrative for the English language. Learn more about [Astro’s Style and mechanics](https://www.astro-contentguide.com/05b2d7be6/p/529e40-style-and-mechanics) for the different languages and markets where Vend operates.

#### When not to use suffixes 

Do not use suffixes when the meaning of the value is clear from the label, context, or component type.

**Years**

Years are universally understood numeric values.

Do:

-   1988
-   2027

Do not:

-   1988 year
-   2027 yr

**Values defined by context**

If the surrounding UI elements already define what the number represents, a suffix is redundant.

Examples:

-   A field labeled “Model year”
-   A range slider labeled “Build year”

Do:

-   1995 — 2010

Do not:

-   Year 1995 – Year 2010
-   1995 models – 2010 models

**Common mistakes to avoid**

-   Using suffixes as a form of label repetition
-   Adding suffixes “for consistency” across different filters
-   Mixing symbolic (€) and textual (EUR) suffixes inconsistently

The tooltip provides contextual feedback during interaction and helps users understand both:

-   The current selected value, and
-   The range semantics of the slider.

The tooltip is an ephemeral, supporting element and must not introduce new information or act as the source of truth. Its content must be dynamic, context-aware, and non-redundant.

#### When the tooltip is shown 

-   Tooltip is shown only during direct interaction (focus, dragging, or adjusting the handle)
-   Tooltip is hidden when interaction ends

#### What the tooltip displays 

**1\. Current selected value**

During dragging, the tooltip shows the current numeric value of the active handle.

Example:

-   390,000
-   2012

**2\. Relative maximum**

When the slider uses an open-ended range:

-   The tooltip must include + to indicate that the upper bound is open
-   This applies when the handle reaches or exceeds the defined threshold
-   In relative maximum ranges (for example, 700,000+), the first concrete value selected when moving the handle away from the maximum must be the value shown (700,000)

**3\. Relative minimum**

When the slider uses an open-start range:

-   The tooltip must include descriptive word in the min tick label (e.g. Before)
-   Avoid using mathematical symbols for year, such as < (lesser than)

**4\. Suffixes**

If the component uses a suffix in the inputs:

-   The tooltip must include the same suffix
-   The format must match the input field

Including units in the tooltip ensures the value is fully understandable when announced by screen readers.

#### Tooltip behavior during dragging 

-   Tooltip updates continuously while the handle is dragged
-   The value reflects the exact current selection
-   Only the active handle shows a tooltip (for Range Slider)

Why this matters:

-   Gives users a complete picture at the moment of interaction, even when fields are temporarily obscured by the user’s thumbs on mobile
-   Reduces ambiguity in open-ended or relative ranges
-   Improves keyboard and screen reader accessibility
-   Prevents misinterpretation of slider limits
-   Aligns visual and semantic feedback

Slider and Range slider must not repeat the same information across:

-   tick labels
-   text inputs
-   suffixes
-   tooltips

Each element should communicate one unique piece of information.

Duplicating information increases cognitive load and makes the interface harder to scan.

If the range meaning is already expressed in tick labels, do not repeat it in the input fields.

\*_Correct:_

-   Tick labels: Before 1950 — 2027
-   Inputs: Min - Max

**Incorrect:**

-   Tick labels: Before 1950 — 2027
-   Inputs: Before 1950 — 2027

In this case, the open-ended nature of the range is already communicated by the ticks. Repeating Before in the input adds noise without adding clarity.

If a unit is shown in the input suffix, do not repeat it in the tick labels.

**Correct:**

-   Tick labels: 0 — 500,000
-   Inputs with suffix: 0 (suffix: kr) - 500,000 (suffix: kr)

**Incorrect:**

-   Tick labels: 0 kr — 500,000 kr
-   Inputs with suffix: 0 (suffix: kr) - 500,000 (suffix: kr)

Repeating the same unit in multiple places makes the UI heavier and harder to read.

The native Slider implementation on iOS and Android currently follows platform-specific patterns and existing product decisions.

The native Range slider implementation on iOS and Android apps currently follows platform-specific patterns and existing product decisions.

The native experience is not yet fully aligned with the guidelines defined in this documentation. This section describes the current behavior and provides interim guidance until the native components are revisited.

Current implementations may differ from the target behavior and will be refined over time.

-   Use the Warp Slider component standalone (label and text fields not visible).
-   Use the Warp Range slider component standalone (label and text fields not visible).
-   Use native input fields for manual value entry.
-   The component is a combination (custom component), not a single native control.
-   The business and product logic of the component must be defined by product teams, not the design system.

Error state logic is handled by the teams implementing the component. When an error occurs, the text field adopts the error state and displays a clear message explaining the issue.

[Read guidelines on error messages on text inputs.](https://www.astro-contentguide.com/05b2d7be6/p/58387b-text-input)

![Example of error state on a range slider.](https://warp-ds.github.io/docs/components/rangeslider/style-error-states.svg)

-   Slide the handle, or type in the input field to choose/change a value.
-   Click on the track to pick a value.
-   The slide handle grows in size when selected and dragged to provide a visual cue to the user that the handle is being pressed.
-   A tooltip should appear when the user interacts with the slider, even when text input is present, ensuring consistent feedback on the selected value.

Place sliders close to the content or filters they control to ensure clarity and ease of use. They should appear next to related labels, content or result previews, so it’s obvious what the value adjustment affects.

Avoid placing them in crowded areas or too far from their context, as this can make the connection between control and effect unclear. Ensure enough horizontal space for smooth interaction, especially on touch devices.

![Examples from FINN and Blocket.](https://warp-ds.github.io/docs/components/rangeslider/usage-placement.svg)

## Accessibility

Range sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Slider](https://warp-ds.github.io/docs/components/slider/overview).

The Range slider component has been designed with accessibility in mind, providing range selection functionality that is fully keyboard accessible and screen reader compatible.

-   Dragging the handles adjusts the selectable value.

-   Tab order is
    1.  From value handle
    2.  To value handle
    3.  From value text field
    4.  To value text field
-   Slider handles must be operable using keyboard input.
-   Arrow keys adjust values according to the defined continuous or step interval.
-   Keyboard interactions must remain synchronised with inputs and tooltips.

-   Min / Max are announced, not placeholders.
-   Screen readers announce the current state correctly.
-   The input never enters an undefined or empty state.

-   Including units in the tooltip ensures the value is fully understandable when announced by screen readers.

## Frameworks

### React 19

Range sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Slider](https://warp-ds.github.io/docs/components/slider/overview).

[Android](https://warp-ds.github.io/docs/components/range-slider/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/range-slider/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/range-slider/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/range-slider/frameworks/react-19)

You can import the component like so:

```js
import { RangeSlider } from '@warp-ds/components/react/slider';
```

#### Enabled 

```jsx
export const RangedSimple = () => {
  const [value, setValue] = useState<[number, number]>([0, 100]);

  return (
    <div>
        <RangeSlider
          label="Pris"
          onChange={setValue}
          min={0}
          max={100}
          step={5}
          value={value}
          aria-label={['Fra kr', 'Til kr']}
          aria-valuetext={[`${value[0]} kr`, `${value[1]} kr`]}
        />
        <div className="w-slider__input">
          <TextField label="Min" value={value[0].toString()} onChange={(e) => setValue([+e.target.value, value[1]])} />
          <TextField label="Max" value={value[1].toString()} onChange={(e) => setValue([value[0], +e.target.value])} />
        </div>
    </div>
  );
};
```

#### Disabled 

```jsx
export const DisabledRanged = () => {
  const [value, setValue] = useState<[number, number]>([1000000, 10000000]);

  return (
    <div>
        <RangeSlider
          label="Pris"
          disabled
          onChange={setValue}
          min={1000000}
          max={10000000}
          step={50000}
          value={value}
        />
        <div className="w-slider__input">
          <TextField
            label="Min"
            disabled
            value={value[0].toString()}
            onChange={(e) => setValue([+e.target.value, value[1]])}
          />
          <TextField
            label="Max"
            disabled
            value={value[1].toString()}
            onChange={(e) => setValue([value[0], +e.target.value])}
          />
        </div>
    </div>
  );
};
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | ReactNode |  | Label for the range slider |
| value | [number, number] |  | The current values |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| max | number | 100 | The greatest value in the range of permitted values |
| min | number | 0 | The lowest value in the range of permitted values |
| step | number | 1 | Specifies the value granularity |
| showMarks | boolean | true | Whether to show marks on the slider |
| disabled | boolean | false | Whether the slider is disabled |
| className | string |  | Additional classes to include for the container |
| aria-label | [string, string] |  | String value for aria-label |
| aria-labelledby | [string, string] |  | Identifies the element that labels the slider |
| aria-valuetext | [string, string] |  | Human readable text alternative for the value |

#### Events 

| Name | Description |
| --- | --- |
| onChange | (value: [number, number]) => void |
| onInput | (value: [number, number]) => void |

### Elements

Range sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Slider](https://warp-ds.github.io/docs/components/slider/overview).

[Android](https://warp-ds.github.io/docs/components/range-slider/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/range-slider/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/range-slider/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/range-slider/frameworks/react-19)

The Range slider component consists of two custom elements that work together:

-   `<w-slider>` - A container that creates a `<fieldset>` and coordinates shared state and attributes.
-   `<w-slider-thumb>` - The `<input type="range">`, tooltip and text field for each slider in the range (from and to values).

```html
<form id="openended">
  <w-slider label="Production year" min="1950" max="2025" open-ended>
    <w-slider-thumb slot="from" name="from-year"></w-slider-thumb>
    <w-slider-thumb slot="to" name="to-year"></w-slider-thumb>
  </w-slider>
</form>
<script>
  const openEndedSlider = document.querySelector("w-slider");

  openEndedSlider.labelFormatter = function (slot) {
    if (slot === "from") {
      return "Before 1950";
    }
    return "2025+";
  };
  openEndedSlider.valueFormatter = function (value, slot) {
    if (slot === "from" && value === "") {
      return "Min";
    }
    if (slot === "to" && value === "") {
      return "Max";
    }
    return value;
  };

  document.forms["openended"].addEventListener("input", function () {
    const formData = new FormData(this);
    const from = formData.get("from-year");
    const to = formData.get("to-year");
  });
</script>
```

#### Optional attributes 

These attributes can be set in HTML or as [attribute expressions in Lit](https://lit.dev/docs/templates/expressions/#attribute-expressions).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | string |  | NB: You must either use this prop or the label slot (<legend slot="label">Production year</legend>). |
| min | number | 0 | The minimum allowed value in the range inputs. |
| max | number | 100 | The maximum allowed value in the range inputs. |
| suffix | string |  | Shows a suffix in the tooltip and text inputs. |
| help-text | string |  | Additional description to show below the fieldset. |
| invalid | boolean | false | Sets the form fields and fieldset in an invalid state. |
| required | boolean | false | Whether a value is required or not. In practice a range input will always produce a value. |
| error | string |  | Validation error text, if any. |
| open-ended | boolean | false | Whether the range slider's text fields allow values outside the minimum and maximum of the range input. |
| step | number |  | Sets step on the range input to jump between values when dragging. |
| hidden-textfield | boolean | false | See usage notes about exceptions. |
| disabled | boolean | false | See usage notes about disabled form fields. |

#### Optional properties 

These properties can be set using JavaScript or [property expressions in Lit](https://lit.dev/docs/templates/expressions/#property-expressions).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| valueFormatter | (value: string, slot: SliderSlot) => string; |  | Function that lets you format the output in tooltips and the textfields. |
| labelFormatter | (slot: SliderSlot) => string; |  | Function that lets you format the range labels. |

#### Required attributes 

These attributes can be set in HTML or as [attribute expressions in Lit](https://lit.dev/docs/templates/expressions/#attribute-expressions).

| Name | Type | Description |
| --- | --- | --- |
| name | string | The name of this input field in the form. The canonical source of the value is the text field. |
| slot | "from", "to" | To layout the two slider thumbs correctly you must set the slot attribute to "from" and "to" for the from and to values respectively. |

#### Optional attributes 

These attributes can be set in HTML or as [attribute expressions in Lit](https://lit.dev/docs/templates/expressions/#attribute-expressions).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| aria-label | string |  | In range sliders we recommend you set this yourself. Default labels are there as a fallback, set by <w-slider>. |
| aria-description | string |  | Contextual information for assistive technology, should it be needed. |
| value | string |  | The initial value, if any. |
| placeholder | string |  | Placeholder in empty text fields. |

## Inline Demo Markup

```html
<w-slider
    label="Production year"
    min="1950"
    max="2025"
    open-ended
  >
    <w-slider-thumb slot="from" name="from-year"></w-slider-thumb>
    <w-slider-thumb slot="to" name="to-year"></w-slider-thumb>
  </w-slider>
```

### Android

Range sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Slider](https://warp-ds.github.io/docs/components/slider/overview).

[Android](https://warp-ds.github.io/docs/components/range-slider/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/range-slider/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/range-slider/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/range-slider/frameworks/react-19)

```kotlin
@Composable
@ExperimentalMaterial3Api
fun WarpRangeSlider(
    modifier: Modifier = Modifier,
    items: List<Any>,
    enabled: Boolean = true,
    initialStartItem: Any? = null,
    initialEndItem: Any? = null,
    onValueChangeFinished: (() -> Unit) = {},
    onLeftValueChanged: ((Any) -> Unit) = {},
    onRightValueChanged: ((Any) -> Unit) = {},
    resetAtStartText: String? = null,
    resetAtEndText: String? = null,
    blockDrag: Boolean = false,
    showTooltips: Boolean = true,
    showRange: Boolean = false,
    startInteractionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    endInteractionSource: MutableInteractionSource = remember { MutableInteractionSource() },
)
```

The range slider accepts a list of `Any` objects, meaning the values can be anything and will be displayed in the order they are sorted within the list. The selected value will be returned as a full object in the callback. Basic usage example:

```kotlin
val items = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20)
WarpRangeSlider(
    items = items,
    onRightValueChanged = { },
    onLeftValueChanged = { },
)
```

It is possible to pre-select the range by providing `initialStartItem` or `initialEndItem`. If nothing is provided then the slider will show the full range. The slider also supports reset values. If provided with `resetAtStartText` and/or `resetAtEndText` the slider will add a `ResetItem` object at the start and/or the end of the list, indicating that the range is being reset. Useful when you need to display values like "Over \[value\]"

```kotlin
val items = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20)
WarpRangeSlider(
    items = items,
    initialStartItem = items[3],
    initialEndItem = items[7],
    onRightValueChanged = { },
    onLeftValueChanged = { },
    resetAtStartText = "Min",
    resetAtEndText = "Max",
)
```

The slider supports two-way bindings, meaning when `startIndex` or `endIndex` is provided and changed with external inputs (e.g., text fields), the slider thumb positions will be updated. Parent should compute snap-to-nearest logic.

```kotlin
val radiusSteps = listOf(
    "100 m",
    "300 m",
    "700 m",
    "1 km"
)

// Mutable indices for range slider display
var radiusStartIndex by remember { mutableIntStateOf(0) }
var radiusEndIndex by remember { mutableIntStateOf(radiusSteps.lastIndex) }

WarpRangeSlider(
    items = radiusSteps,
    startIndex = radiusStartIndex,
    endIndex = radiusEndIndex,
    showRange = true
)
```

The slider can show tooltips with the currently selected value above the thumbs when dragging. It can also show indicators below the track showing the total possible range of values.

```kotlin
val items = listOf(
    "1900",
    "1910",
    "1920",
    "1930",
    "1940",
    "1950",
    "1960",
    "1970",
    "1980",
    "1990",
    "2000",
    "2010",
    "2020"
)
WarpRangeSlider(
    items = items,
    onRightValueChanged = { },
    onLeftValueChanged = { },
    showTooltips = true,
    showRange = true
)
```

Not supported.

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| items | List |  | The list of values |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier for the range slider |
| enabled | Boolean | true | Disables the slider if false |
| initialStartItem | Any? | null | The pre-selected start value |
| initialEndItem | Any? | null | The pre-selected end value |
| startIndex | Int? | null | The position the start thumb will update to |
| endIndex | Int? | null | The position the end thumb will update to |
| onValueChangeFinished | () -> Unit | {} | The function to be invoked when value selection is done |
| onLeftValueChanged | (Any) -> Unit | {} | The function to be invoked when start value is selected |
| onRightValueChanged | (Any) -> Unit | {} | The function to be invoked when end value is selected |
| resetAtStartText | String? | null | The string displayed as reset start value |
| resetAtEndText | String? | null | The string displayed as reset end value |
| blockDrag | Boolean | false | Whether to block the drag gesture |
| showTooltips | Boolean | true | Whether to show tooltips with current value when dragging |
| showRange | Boolean | false | Whether to show range indicators below the slider |
| startInteractionSource | MutableInteractionSource | MutableInteractionSource | The interaction source to be used for the start thumb. |
| endInteractionSource | MutableInteractionSource | MutableInteractionSource | The interaction source to be used for the end thumb. |

### iOS

Range sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Slider](https://warp-ds.github.io/docs/components/slider/overview).

[Android](https://warp-ds.github.io/docs/components/range-slider/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/range-slider/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/range-slider/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/range-slider/frameworks/react-19)

#### Using range 

```swift
Warp.RangeSlider(
    range: Binding<ClosedRange<Double>>,
    bounds: ClosedRange<Double>,
    step: Double = 1.0,
    showTooltips: Bool = true,
    showRange: Bool = false,
    enabled: Bool = true,
)
```

**Example:**

```swift
@State private var selectedRange: ClosedRange<Double> = 20.0...80.0

Warp.RangeSlider(
    range: $selectedRange,
    bounds: 0.0...100.0,
    step: 1.0
)
```

#### Using array 

```swift
Warp.RangeSlider(
    selectedItems: Binding<[ArrayElement]>,
    items: [ArrayElement],
    showTooltips: Bool = true,
    showRange: Bool = false,
    enabled: Bool = true,
    valueFormat: ((ArrayElement) -> String)? = nil
)
```

**Example:**

```swift
@State private var selectedSizes: [String] = ["Medium", "Large"]
let sizes = ["Small", "Medium", "Large"]

Warp.RangeSlider(
    selectedItems: $selectedSizes,
    items: sizes
)
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.RangeSlider(
    range: $selectedRange,
    bounds: 0.0...100.0,
    step: 1.0
).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| range | Binding> |  | A binding to the current selected range of the slider. |
| bounds | ClosedRange |  | The minimum and maximum values for the slider. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| step | Double | 1.0 | The increment by which the slider value should change. |
| showTooltips | Bool | true | Whether to show tooltips above the thumbs. |
| showRange | Bool | false | Whether to show min/max range indicators. |
| enabled | Bool | true | Whether the slider is enabled or disabled. |
| selectedItems | Binding |  | For discrete sliders: a binding to the currently selected items from the list. T must conform to LosslessStringConvertible & Equatable. |
| items | Array |  | For discrete sliders: an array of items to choose from. T must conform to LosslessStringConvertible & Equatable. |
| valueFormat | (T) -> String | nil | For discrete sliders: a closure that formats the displayed value. Defaults to a simple string conversion. |
