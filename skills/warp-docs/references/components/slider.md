# Slider

Sliders are best suited for cases where people need to quickly set a value within a designated range.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/slider/overview), [Usage](https://warp-ds.github.io/docs/components/slider/usage), [Accessibility](https://warp-ds.github.io/docs/components/slider/accessibility), [React](https://warp-ds.github.io/docs/components/slider/frameworks/react), [React 19](https://warp-ds.github.io/docs/components/slider/frameworks/react-19), [Vue](https://warp-ds.github.io/docs/components/slider/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/slider/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/slider/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/slider/frameworks/ios)

**Framework support:** Android, Elements, iOS, React, React 19, Vue

## Overview

Sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Range slider](https://warp-ds.github.io/docs/components/range-slider/overview).

A slider provides a visual indication of an adjustable value within a defined range (minimum and maximum values) by moving a handle along a horizontal track.

Sliders are available in two different variants:

-   Single (documented here)
-   [Range slider](https://warp-ds.github.io/docs/components/range-slider/overview)

![Example of a Slider](https://warp-ds.github.io/docs/components/slider/overview-anatomy.svg)

1.  **Label (optional)**: Describes what the slider controls or adjusts.
2.  **Filled/active track**: Visualises the selected portion of the slider range up to the selected value.
3.  **Tooltip**: Displays the current value while dragging the handle, providing immediate feedback.
4.  **Track**: Represents the full range of available selectable values.
5.  **Handle**: Movable indicator used to select a value along the track.
6.  **Minimum range label (optional)**: Indicates the lowest selectable value and visually defines the start of the range.
7.  **Maximum range label (optional)**: Indicates the highest selectable value and visually defines the end of the range.
8.  **Value input/text field (optional)**: Displays the current selected value by the handle and allows manual entry.
9.  **Input suffix (optional)**: Provides contextual clarification for values when their meaning is ambiguous, such as currency or measurement units.

## Inline Demo Markup

```html
<div>
        <h3 class="h4">Default Slider</h3>
        <w-slider label="Volume" min="0" max="100">
            <w-slider-thumb name="volume"></w-slider-thumb>
        </w-slider>
    </div>
    <div>
        <h3 class="h4">Slider with step</h3>
        <w-slider label="Rating" min="0" max="10" step="1">
            <w-slider-thumb name="rating"></w-slider-thumb>
        </w-slider>
    </div>
    <div>
        <h3 class="h4">Slider with suffix</h3>
        <w-slider label="Price" min="0" max="1000" suffix="kr">
            <w-slider-thumb name="price"></w-slider-thumb>
        </w-slider>
    </div>
```

## Usage

Sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Range slider](https://warp-ds.github.io/docs/components/range-slider/overview).

-   Sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.
-   [Range sliders](https://warp-ds.github.io/docs/components/range-slider/overview) are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.
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

![Example of error state on a slider.](https://warp-ds.github.io/docs/components/slider/style-error-states.svg)

-   Slide the handle, or type in the input field to choose/change a value.
-   Click on the track to pick a value.
-   The slide handle grows in size when selected and dragged to provide a visual cue to the user that the handle is being pressed.
-   A tooltip should appear when the user interacts with the slider, even when text input is present, ensuring consistent feedback on the selected value.

Place sliders close to the content or filters they control to ensure clarity and ease of use. They should appear next to related labels, content or result previews, so it’s obvious what the value adjustment affects.

Avoid placing them in crowded areas or too far from their context, as this can make the connection between control and effect unclear. Ensure enough horizontal space for smooth interaction, especially on touch devices.

![Examples from FINN and Blocket.](https://warp-ds.github.io/docs/components/rangeslider/usage-placement.svg)

In some cases, Slider can be used without a text input.

This is an exception and should be applied only when direct value entry is unnecessary or undesirable.

Slider may be used without text inputs when:

-   the value cannot be meaningfully entered as free text;
-   the range is adjusted in fixed steps;
-   precision is controlled by the system, not the user.

Typical example:

-   Distance selection (e.g. search radius on a map)

In this scenario, users explore the value by adjusting the slider only, not by typing arbitrary numbers.

When no text input is used, the currently applied value should be clearly visible.

-   Show the selected value near the label.
-   Keep it readable at all times.
-   Ensure it updates immediately as the slider moves.

Example:

-   Label: Distance
-   Value: 50km

This replaces the role of the input field and ensures clarity.

When text inputs are not present:

-   Units must be shown together with the value
-   Units should not rely solely on tick labels, but Tooltip as well.

Correct:

-   Distance: 50km
-   0 - 500km

In some cases, the displayed value may change dynamically based on scale or context. It should reflect how precise users need to be and provide more realistical control.

Rules for step size, unit switching (e.g. meters → kilometers), and thresholds are defined by product teams, not the design system.

Example:

-   300 m
-   1.2 km

Do not remove text inputs if:

-   users need exact values;
-   the value can reasonably be typed;
-   different users expect different precision.

In those cases, always use Slider + text input.

## Accessibility

Sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Range slider](https://warp-ds.github.io/docs/components/range-slider/overview).

The slider component has been designed with accessibility in mind, providing range selection functionality that is fully keyboard accessible and screen reader compatible.

-   Dragging the handles adjusts the selectable value.
-   Clicking on the track of the single slider sets the value corresponding to the clicked position.

-   Slider handles must be operable using keyboard input.
-   Arrow keys adjust values according to the defined continuous or step interval.
-   Keyboard interactions must remain synchronised with inputs and tooltips.

-   Min / Max are announced, not placeholders.
-   Screen readers announce the current state correctly.
-   The input never enters an undefined or empty state.

-   Including units in the tooltip ensures the value is fully understandable when announced by screen readers.

## Frameworks

### React

Sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Range slider](https://warp-ds.github.io/docs/components/range-slider/overview).

You can import the component like so:

```js
import { Slider } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Slider } from '@warp-ds/react/components/slider'
```

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

### React 19

Sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Range slider](https://warp-ds.github.io/docs/components/range-slider/overview).

You can import the component like so:

```js
import { RegularSlider } from "@warp-ds/components/react/slider";
```

#### Enabled 

```jsx
export default function RegularSimple() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <RegularSlider
        label="Pris"
        onChange={(value) => setValue(value)}
        min={0}
        max={100}
        step={10}
        value={value}
        showMarks={true}
      />
      <div className="w-slider__input">
        <TextField
          label="value"
          value={value.toString()}
          onChange={(e) => setValue(+e.target.value)}
        />
      </div>
    </div>
  );
}
```

#### Disabled 

```jsx
export const DisabledRegular = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <RegularSlider
        label="Pris"
        disabled
        onChange={(value) => setValue(value)}
        min={0}
        max={100}
        step={10}
        value={value}
      />
      <div className="w-slider__input">
        <TextField
          label="value"
          disabled
          value={value.toString()}
          onChange={(e) => setValue(+e.target.value)}
        />
      </div>
    </div>
  );
};
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | ReactNode |  | Label for the slider |
| value | number |  | The current value |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| max | number | 100 | The greatest value in the range of permitted values |
| min | number | 0 | The lowest value in the range of permitted values |
| step | number | 1 | Specifies the value granularity |
| showMarks | boolean | true | Whether to show marks on the slider |
| disabled | boolean | false | Whether the slider is disabled |
| className | string |  | Additional classes to include for the container |
| aria-label | string |  | String value for aria-label |
| aria-labelledby | string |  | Identifies the element that labels the slider |
| aria-valuetext | string |  | Human readable text alternative for the value |

#### Events 

| Name | Description |
| --- | --- |
| onChange | (value: number) => void |
| onInput | (value: number) => void |

### Vue

Sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Range slider](https://warp-ds.github.io/docs/components/range-slider/overview).

> Use in entire app

```js
import { Slider } from '@warp-ds/vue';
app.use(Slider);
```

> Use in one component and special imports

You can import the component like so:

```js
import { wSlider } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wSlider } from '@warp-ds/vue/slider'
```

#### Enabled 

```vue
<script setup>
  import { ref } from 'vue';
  import { wSlider } from '@warp-ds/vue';

  const currentValue = ref(5_000_000);
</script>

<template>
  <w-slider
    v-model="currentValue"
    :min="1000"
    :max="10_000_000"
    :step="1000"
    label="slider"
  />
</template>
```

#### Disabled 

```html
<w-slider
  disabled
  v-model="currentValue"
  label="Disabled slider"
/>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| max | number | 100 | The greatest value in the range of permitted values |
| min | number | 0 | The lowest value in the range of permitted values |
| step | number |  | Specifies the value granularity |
| label | string |  | String value for aria-label |
| labelled-by | string |  | Identifies the element that labels the slider |

### Elements

Sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Range slider](https://warp-ds.github.io/docs/components/range-slider/overview).

The Slider component consists of two custom elements that work together:

-   `<w-slider>` - A container that creates a `<fieldset>` and coordinates shared state and attributes.
-   `<w-slider-thumb>` - The `<input type="range">`, tooltip and text field.

```html
<form id="audio">
  <w-slider label="Volume" min="0" max="100">
    <w-slider-thumb name="volume"></w-slider-thumb>
  </w-slider>
</form>
<script>
  document.forms["audio"].addEventListener("input", function () {
    const formData = new FormData(this);
    const value = formData.get("volume");
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
| open-ended | boolean | false | Whether the slider's text field allow values outside the minimum and maximum of the range input. |
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

#### Optional attributes 

These attributes can be set in HTML or as [attribute expressions in Lit](https://lit.dev/docs/templates/expressions/#attribute-expressions).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| aria-label | string | The label attribute from w-slider. | Label for the range input. |
| aria-description | string |  | Contextual information for assistive technology, should it be needed. |
| value | string |  | The initial value, if any. |
| placeholder | string |  | Placeholder in empty text fields. |

## Inline Demo Markup

```html
<w-slider label="Volume" min="0" max="100">
    <w-slider-thumb name="volume"></w-slider-thumb>
  </w-slider>
```

### Android

Sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Range slider](https://warp-ds.github.io/docs/components/range-slider/overview).

```kotlin
@Composable
fun WarpSlider(
    modifier: Modifier = Modifier,
    value: Float = 0f,
    onValueChange: (Float) -> Unit,
    valueRange: ClosedFloatingPointRange<Float> = 0f..1f,
    enabled: Boolean = true,
    onValueChangeFinished: (() -> Unit)? = null,
    showRange: Boolean = false,
    rangeStartText: String? = null,
    rangeEndText: String? = null,
    showTooltip: Boolean = true,
    formattedTooltipText: String? = null,
    @IntRange(from = 0) steps: Int = 0,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
)
```

The slider accepts a range of floats as values and returns the selected value in the onValueChange method. Basic usage example:

```kotlin
var value by remember { mutableFloatStateOf(33f) }
val values = 0f..100f

WarpSlider(
    value = value,
    onValueChange = { value = it },
    valueRange = values,
    )
```

The slider can show a tooltip with the currently selected value above the thumb when dragging. You can pass a custom formatted text to be shown on the tooltip, but if not provided the values toString() method will be used. It can also show indicators below the track showing the total possible range of values. It's possible to pass a custom range starting and/or ending text. If nothing is passed, the values toString() method will be used.

```kotlin
WarpSlider(
    modifier = Modifier.padding(horizontal = dimensions.space2),
    value = value,
    onValueChange = { value = it },
    valueRange = values,
    showRange = true,
    rangeStartText = values.start.roundToInt().toString(),
    rangeEndText = values.endInclusive.roundToInt().toString(),
    showTooltip = true,
    formattedTooltipText = "${value.roundToInt()}"
)
```

Not supported.

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| onValueChange | (Float) -> Unit |  | The function to be invoked when a value is selected |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier for the slider |
| value | Float | 0f | The pre-selected value |
| valueRange | ClosedFloatingPointRange | 0f..1f | The value range |
| enabled | Boolean | true | Disables the slider if false |
| onValueChangeFinished | (() -> Unit) | null | The function to be invoked when value selection is done |
| rangeStartText | String? | null, but if showRange is true, it will be the first value of the range using its toString() method | The string displayed as starting value |
| rangeEndText | String? | null, but if showRange is true, it will be the last value of the range using its toString() method | The string displayed as end value |
| formattedTooltipText | String? | null, but if showTooltip is true, it will be the current value of the slider using its toString() method | The string displayed in the tooltip |
| showTooltip | Boolean | true | Whether to show the tooltip with the current value when dragging |
| showRange | Boolean | false | Whether to show range indicators below the slider |
| steps | @IntRange(from = 0) | 0 | Amount of steps that the slider can snap to |
| interactionSource | MutableInteractionSource | MutableInteractionSource | The interaction source to be used for the start thumb |

### iOS

Sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Range slider](https://warp-ds.github.io/docs/components/range-slider/overview).

#### Using range 

```swift
Warp.Slider(
    value: Binding<Double>,
    range: ClosedRange<Double>,
    step: Double = 1.0,
    showTooltips: Bool = true,
    showRange: Bool = false,
    enabled: Bool = true,
    onEditingChanged: ((Double) -> Void)? = nil
)
```

```swift
Warp.Slider(
    value: $sliderValue,
    range: 0.0...100.0,
    step: 1.0
)
```

#### Using array 

```swift
Warp.Slider(
    selectedItem: Binding<ArrayElement>,
    items: Array<ArrayElement>,
    showTooltips: Bool = true,
    showRange: Bool = false,
    enabled: Bool = true,
    valueFormat: ((ArrayElement) -> String)? = nil
)
```

```swift
    @State private var selectedItem = "Medium"
    let items = ["Small", "Medium", "Large"]
    Warp.Slider(selectedItem: $selectedItem, items: items)
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.Slider(
    value: $sliderValue,
    range: 0.0...100.0,
    step: 1.0
).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | Binding Double |  | Binding value to update the slider value |
| range | ClosedRange Double |  | Defines the range for the slider |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| step | Double | 1.0 | The increment by which the slider value should change. |
| showTooltips | Bool | true | Whether to show tooltips above the thumbs. |
| showRange | Bool | false | Whether to show min/max range indicators. |
| enabled | Bool | true | Whether the slider is enabled or disabled. |
| valueFormatter | (Double) -> String | nil | A closure that formats the displayed value. Defaults to a simple string conversion. |
| onEditingChanged | ((Double) -> Void)? | nil | A closure that is called when the slider's thumb is released, passing the final value as an argument. |
| selectedItem | Binding (where T: LosslessStringConvertible & Equatable) | — | For discrete sliders: a binding to the currently selected item from the list. |
| items | Array (where T: LosslessStringConvertible & Equatable) | — | For discrete sliders: an array of items to choose from. |
