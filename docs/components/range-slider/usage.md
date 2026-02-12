# Range slider - Usage

Range sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Slider](/components/slider/overview.md).

<ComponentsStatus />

## Guidelines

- [Sliders](/components/slider/overview.md) are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.
- Range sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.
- Use step intervals (integers) when precision input is required.
- Use a tooltip to show the selected value.
- Ensure the slider is wide enough to be easily interacted with on touch devices.
- Although Slider and Range slider support a disabled state, we recommend avoiding their use in interfaces. Disabled sliders provide limited accessibility feedback, are not focusable by keyboard or screen readers, and can make it unclear why an option is unavailable.

### When to use

- Use when selecting a range of number values.
- Use sliders when there is a need to show a selection within a range of values.
- Use when needing to expose a variety of options or to limit the number of options quickly.

### When not to use

- Do not use ranges that are too small (e.g. 1-3). Use a stepper instead (NB: currently not available in Warp. Reach out if you need this)
- Do not use complex inputted values that are not numbers. Use [Select](/components/select/overview.md), [Checkbox](/components/checkbox/overview.md), [Radio](/components/radio/overview.md), [Pill](/components/pill/overview.md), or [Text field](/components/text-field/overview.md) instead.


## Behaviour

### Range labels

- As a general rule, don’t add units (e.g. kr, km, hk, etc.) to the min and max labels.
- Range labels shown under the slider are a visual representation of the available range, not the selected value.
- Labels are indicative rather than precise and do not require exact alignment with the slider handles.

### Absolute ranges

Use when the lower and upper limits are known and fixed.

Examples:

- 0 — 200
- 1950 — 2027

### Relative ranges

#### Relative maximum

When there is no concrete upper limit in the range.

**Recommended:**

- Use + (plus symbol) to indicate an open-ended maximum.
- Always use a concrete year as the maximum value for year ranges (for example, 2027 rather than 2026+). Only use the plus symbol (+) when a meaningful concrete maximum is not possible.

Examples:

- 0 — 700,000+
- 1950 – 2020+

**Alternative (to be tested):**

Use words as Over or After to indicate an open-ended maximum.

Example:

- 0 — Over 700,000
- 1950 – After 2020

We’d like to test this alternative alongside the recommended approach to see whether it more clearly communicates the available range to users. If your team is working on a related use case and can help test it, please reach out to Warp and share your findings.

#### Relative minimum

When there is no concrete lower limit in the range.

- Use descriptive labels (e.g. Under and Before) instead of symbols.
- For year ranges, use Before (e.g. Before 1950).

**Recommended:**

- Use 0 as Min value as much as possible. E.g. even though most boats go over 5 knots, don't have 5 knots as a minimum, use 0 instead to reduce noise.


**Do:**

- Under 100 - 200
- Before 1950 - 2027

**Do Not**

Don’t use mathematical symbols like < (lesser than) to refer to relative minimum limits.

- < 1950 — 2027

### Track

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

### Text inputs

Sliders must be paired with one text field to indicate the selected value. This is a recommended set to ensure accessibility.

Range sliders must be paired with two text fields to indicate the selected values: Min and Max. This is a recommended set to ensure accessibility.

Text input fields are the canonical source of the selected value(s).

Any change made via dragging, keyboard interaction, or manual input must remain synchronised between inputs, handles, and tooltip.

#### Default state (filled)

Both inputs display Min and Max as actual values, not placeholders.

- Min represents the available minimum value
- Max represents the available maximum value

This reflects the real state of the Range slider, where both bounds are already defined by the labels.

#### Interaction on relative ranges

When the user focuses or clicks/taps on the input field that displays a relative value:

_ The active or focused input continues to display Min or Max until the user actively types another value or moves the handles

When the user types a new value:

- Min / Max is replaced by the entered numeric value
- The slider’s handle position updates accordingly and remains synchronized
- Allow a brief grace period before showing validation errors. When users manually enter a value, delay error feedback to give them time to complete their input. This prevents premature errors while a value is still being typed (for example, entering 20 on the way to 200 in a 30–300 range)

If the user clears the value entered:
- The input automatically reverts back to Min or Max
- The slider returns to the corresponding boundary value
- Allow a brief grace period before showing validation errors

Rationale:
- Preserves a stable visual state on focus
- Prevents accidental “empty” or undefined states
- Clearly communicates that the slider always has an active selection

Accessibility note:

- Min and Max must not only be placeholders. Placeholders are not reliably announced by screen readers.
- Screen readers announce the current state correctly.
- The input never enters an undefined or empty state.

### Suffixes

Use suffixes in text fields only when the numeric value is ambiguous without additional context. The goal of a suffix is to clarify meaning, not to restate what is already obvious. Adding unnecessary suffixes increases visual noise and cognitive load.


#### When to use suffixes

Use suffixes when the number cannot be correctly interpreted on its own.

**Currency**

Always use the country’s currency symbol when displaying monetary values.

- 390,000 kr
- 25,000 €
- 1,200 $

**Measurement units**

Always use standard measurement units when displaying values such as distance, volume, weight, power, etc.

- 120 km
- 75 m²
- 3.5 kg

The examples above are only illustrative for the English language. Learn more about [Astro’s Style and mechanics](https://www.astro-contentguide.com/05b2d7be6/p/529e40-style-and-mechanics) for the different languages and markets where Vend operates.

#### When not to use suffixes

Do not use suffixes when the meaning of the value is clear from the label, context, or component type.

**Years**

Years are universally understood numeric values.

Do:

- 1988
- 2027

Do not:

- 1988 year
- 2027 yr

**Values defined by context**

If the surrounding UI elements already define what the number represents, a suffix is redundant.

Examples:

- A field labeled “Model year”
- A range slider labeled “Build year”

Do:

- 1995 — 2010

Do not:

- Year 1995 – Year 2010
- 1995 models – 2010 models

**Common mistakes to avoid**

- Using suffixes as a form of label repetition
- Adding suffixes “for consistency” across different filters
- Mixing symbolic (€) and textual (EUR) suffixes inconsistently

### Tooltip

The tooltip provides contextual feedback during interaction and helps users understand both:
- The current selected value, and
- The range semantics of the slider.

The tooltip is an ephemeral, supporting element and must not introduce new information or act as the source of truth. Its content must be dynamic, context-aware, and non-redundant.

#### When the tooltip is shown

- Tooltip is shown only during direct interaction (focus, dragging, or adjusting the handle)
- Tooltip is hidden when interaction ends

#### What the tooltip displays

**1. Current selected value**

During dragging, the tooltip shows the current numeric value of the active handle.

Example:

- 390,000
- 2012


**2. Relative maximum**

When the slider uses an open-ended range:

- The tooltip must include + to indicate that the upper bound is open
- This applies when the handle reaches or exceeds the defined threshold
- In relative maximum ranges (for example, 700,000+), the first concrete value selected when moving the handle away from the maximum must be the value shown (700,000)

**3. Relative minimum**

When the slider uses an open-start range:

- The tooltip must include descriptive word in the min tick label (e.g. Before)
- Avoid using mathematical symbols for year, such as < (lesser than)

**4. Suffixes**

If the component uses a suffix in the inputs:

- The tooltip must include the same suffix
- The format must match the input field

Including units in the tooltip ensures the value is fully understandable when announced by screen readers.

#### Tooltip behavior during dragging

- Tooltip updates continuously while the handle is dragged
- The value reflects the exact current selection
- Only the active handle shows a tooltip (for Range Slider)

Why this matters:

- Gives users a complete picture at the moment of interaction, even when fields are temporarily obscured by the user’s thumbs on mobile
- Reduces ambiguity in open-ended or relative ranges
- Improves keyboard and screen reader accessibility
- Prevents misinterpretation of slider limits
- Aligns visual and semantic feedback

## Avoid duplicated information

Slider and Range slider must not repeat the same information across:

- tick labels
- text inputs
- suffixes
- tooltips

Each element should communicate one unique piece of information.

Duplicating information increases cognitive load and makes the interface harder to scan.

### Do not duplicate range semantics

If the range meaning is already expressed in tick labels, do not repeat it in the input fields.

**Correct:*

- Tick labels: Before 1950 — 2027
- Inputs: Min - Max

**Incorrect:**

- Tick labels: Before 1950 — 2027
- Inputs: Before 1950 — 2027

In this case, the open-ended nature of the range is already communicated by the ticks.
Repeating Before in the input adds noise without adding clarity.

### Do not duplicate units

If a unit is shown in the input suffix, do not repeat it in the tick labels.

**Correct:**

- Tick labels: 0 — 500,000
- Inputs with suffix: 0 (suffix: kr) - 500,000 (suffix: kr)


**Incorrect:**
- Tick labels: 0 kr — 500,000 kr
- Inputs with suffix: 0 (suffix: kr) - 500,000 (suffix: kr)

Repeating the same unit in multiple places makes the UI heavier and harder to read.


## Native platforms (iOS & Android)

The native Slider implementation on iOS and Android currently follows platform-specific patterns and existing product decisions.

The native Range slider implementation on iOS and Android apps currently follows platform-specific patterns and existing product decisions.

The native experience is not yet fully aligned with the guidelines defined in this documentation.
This section describes the current behavior and provides interim guidance until the native components are revisited.

Current implementations may differ from the target behavior and will be refined over time.

### Recommendation for native

- Use the Warp Slider component standalone (label and text fields not visible).
- Use the Warp Range slider component standalone (label and text fields not visible).
- Use native input fields for manual value entry.
- The component is a combination (custom component), not a single native control.
- The business and product logic of the component must be defined by product teams, not the design system.

## Error states

Error state logic is handled by the teams implementing the component. When an error occurs, the text field adopts the error state and displays a clear message explaining the issue.

[Read guidelines on error messages on text inputs.](https://www.astro-contentguide.com/05b2d7be6/p/58387b-text-input)

::: image-block
![Example of error state on a range slider.](/components/rangeslider/style-error-states.svg)
:::

## Interaction

- Slide the handle, or type in the input field to choose/change a value.
- Click on the track to pick a value.
- The slide handle grows in size when selected and dragged to provide a visual cue to the user that the handle is being pressed.
- A tooltip should appear when the user interacts with the slider, even when text input is present, ensuring consistent feedback on the selected value.

## Placement

Place sliders close to the content or filters they control to ensure clarity and ease of use. They should appear next to related labels, content or result previews, so it’s obvious what the value adjustment affects.

Avoid placing them in crowded areas or too far from their context, as this can make the connection between control and effect unclear. Ensure enough horizontal space for smooth interaction, especially on touch devices.

::: image-block
![Examples from FINN and Blocket.](/components/rangeslider/usage-placement.svg)
:::

<component-questions />
