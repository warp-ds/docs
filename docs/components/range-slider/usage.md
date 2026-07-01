# Range slider - Usage

Range sliders provide a visual indication of a selected interval within a defined range by moving two handles along a horizontal track to set both a minimum and maximum value.



<ComponentsStatus />

## Guidelines

- Range sliders are best suited for when people need to quickly select an interval within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.
- Use step intervals (integers) when precision input is required.
- Always use a tooltip to show the selected value.
- Ensure the Range slider is wide enough to be easily operated on touch devices.
- Avoid disabling sliders. They provide poor accessibility feedback, and it’s unclear why the option is unavailable.

### When to use

- Use to allow users to see their selection relative to a minimum and maximum.
- Use to provide a wide range of options within a compact space.
- Use when users should see results of their selection in real-time.

### When not to use

- Don’t use sliders for small ranges (e.g., 1-10). Use a [Checkbox](/components/checkbox/overview/) or Stepper instead (Note: Steppers are not yet available in Warp; please reach out if your use case requires one).
- Don’t use for complex input values that aren’t numeric (e.g., categories or words). Use a [Select](/components/select/overview/), Checkbox, [Radio](/components/radio/overview.md), [Pill](/components/pill/overview.md), or [Text field](/components/text-field/overview.md) instead.
- Don’t use when only one value needs to be defined. Use the [Slider](/components/slider/overview/) instead.

## Behaviour

Standardise the Range slider logic across our apps to build user trust. When interaction rules remain consistent, users can focus on making selections rather than relearning how the component works.

**Avoid duplicating information:** To reduce cognitive load, ensure each element of the slider communicates a unique piece of data. Avoid repeating the same information across labels, ticks, text fields, and tooltips. Streamlining these elements prevents "visual noise" and allows users to scan the interface faster.

<DoDont>
    <Do imgurl="/docs/components/range-slider/usage/usage-behaviour-duplication-text_field-do.svg">
        Each element of the slider communicates a unique piece of data.
    </Do>
    <Do not imgurl="/docs/components/range-slider/usage/usage-behaviour-duplication-text_field-dont.svg">
        Don’t repeat information across range labels, text fields, suffixes, and tooltips.
    </Do>
</DoDont>

Review the behaviour guidelines for each slider element below.

### Range labels

- Range labels are placed under the slider. They are a visual representation of the available range, not the selected values.
- Labels are indicative rather than precise and do not require exact alignment with the slider handles.
- As a general rule, don’t add units (e.g., kr, km, hk, etc.) to the min and max range labels.

<DoDont>
    <Do imgurl="/docs/components/range-slider/usage/usage-behaviour-duplication-range-label-do.svg">
        Communicate slider boundaries via range labels only.
    </Do>
    <Do not imgurl="/docs/components/range-slider/usage/usage-behaviour-duplication-range-label-dont.svg">
        Don’t repeat contextual symbols (like +) in the text field if they are already visible on the range label.
    </Do>
</DoDont>
<DoDont>
    <Do imgurl="/docs/components/range-slider/usage/usage-behaviour-duplication-range-labels-do.svg">
        Display units as a suffix inside of the text field.
    </Do>
    <Do not imgurl="/docs/components/range-slider/usage/usage-behaviour-duplication-range-labels-dont.svg">
        Don’t add units to the range labels.
    </Do>
</DoDont>


### Absolute ranges

Use when the lower and upper limits are known and fixed.

<UsageExamples>
    <UsageExample imgurl="/docs/components/range-slider/usage/usage-behaviour-absolute_ranges-do.svg"></UsageExample>
    <UsageExample second imgurl="/docs/components/range-slider/usage/usage-behaviour-absolute_ranges-do-also.svg"></UsageExample>
</UsageExamples>

### Open-ended ranges

#### Open minimum

When there is no concrete lower limit in the range. 

<DoDont>
    <Do imgurl="/docs/components/range-slider/usage/usage-behaviour-open_ended_ranges-open_minimum-do-words.svg">
        Use descriptive words such as “Under” to indicate an open-ended minimum.
    </Do>
    <Do not imgurl="/docs/components/range-slider/usage/usage-behaviour-open_ended_ranges-open_minimum-dont-min.svg">
        Avoid using arbitrary non-zero minimum values (e.g., “under 5”); default to 0 as minimum wherever possible to avoid unnecessary noise.
    </Do>
</DoDont>
<DoDont>
    <Do imgurl="/docs/components/range-slider/usage/usage-behaviour-open_ended_ranges-open_minimum-do-before.svg">
        Use “Before” to indicate an open-minimum in year ranges.
    </Do>
    <Do not imgurl="/docs/components/range-slider/usage/usage-behaviour-open_ended_ranges-open_minimum-dont-symbols.svg">
        Don’t use mathematical symbols (< or -) to indicate an open-ended minimum.
    </Do>
</DoDont>

#### Open maximum

When there is no concrete upper limit in the range.


**Alternative (to be tested)**: Use words as “Over” or “After” to indicate an open-ended maximum.

:::warning ⚠️ Important
This alternative isn’t verified. Help us validate it for improved range clarity. If you have a relevant use case, please reach out to share your findings.
:::


<UsageExamples>
    <UsageExample imgurl="/docs/components/range-slider/usage/usage-behaviour-open_ended_ranges-open_maximum-over.svg">
        “Over” to indicate an open-ended maximum for prices, volume, weight, etc.
    </UsageExample>
    <UsageExample second imgurl="/docs/components/range-slider/usage/usage-behaviour-open_ended_ranges-open_maximum-after.svg">
        “After” to indicate an open-ended maximum for years.
    </UsageExample>
</UsageExamples>

### Track

#### Continuous intervals

- Use continuous intervals when users need fine-grained control or when exact values are not critical.
- Handle movement should be smooth, with values updating continuously as the user drags.


<elements-example no-code>

```html
<w-slider label="Price" min="0" max="700000" suffix="kr" data-testid="currency" open-ended>
  <w-slider-thumb
    slot="from"
    aria-label="From price"
    name="from"
  ></w-slider-thumb>
  <w-slider-thumb slot="to" aria-label="To price" name="to"></w-slider-thumb>
</w-slider>
<script>
  let numberFormatter = new Intl.NumberFormat("no", {
    maximumFractionDigits: 0,
  }).format;
  let currencySlider = document.querySelector('w-slider[data-testid="currency"]');
  currencySlider.labelFormatter = (slot) => {
    if (slot === "from") return "0";
    return numberFormatter("700000") + "+";
  };
  currencySlider.tooltipFormatter = function (value) {
    return numberFormatter(value);
  };
  currencySlider.valueFormatter = function (value, slot) {
    if (slot === "from" && value === "") {
      return "Min";
    }
    if (slot === "to" && value === "") {
      return "Max";
    }
    return numberFormatter(value);
  };
</script>
```

</elements-example>

#### Step intervals


- Use step intervals (integers) when values must align to predefined increments or discrete options.
- Handle movement should snap to each step, updating the value only when a step is reached.
- On native apps, trigger a light haptic “thump” as the handles snap to each increment.
- Step intervals must be clearly communicated in the tooltip and in the input value to avoid ambiguity.
- In open-ended ranges, step intervals apply only to concrete values. Relative labels (e.g., Before 1950) represent a boundary state, not a step.
- Steps should reflect how precise users need to be: small steps for exact values (e.g., Year), larger steps for fast exploration (e.g., Price) — never more precision than users can realistically control. Focus on speed and touch usability for exploration.

<elements-example no-code>

```html
<w-slider label="Price" min="0" max="700000" step="10" suffix="kr" data-testid="step" open-ended>
  <w-slider-thumb
    slot="from"
    aria-label="From price"
    name="from"
  ></w-slider-thumb>
  <w-slider-thumb slot="to" aria-label="To price" name="to"></w-slider-thumb>
</w-slider>
<script>
  let stepNumberFormatter = new Intl.NumberFormat("no", {
    maximumFractionDigits: 0,
  }).format;
  let stepSlider = document.querySelector('w-slider[data-testid="step"]');
  stepSlider.labelFormatter = (slot) => {
    if (slot === "from") return "0";
    return stepNumberFormatter("700000") + "+";
  };
  stepSlider.tooltipFormatter = function (value) {
    return stepNumberFormatter(value);
  };
  stepSlider.valueFormatter = function (value, slot) {
    if (slot === "from" && value === "") {
      return "Min";
    }
    if (slot === "to" && value === "") {
      return "Max";
    }
    return stepNumberFormatter(value);
  };
</script>
```

</elements-example>

### Text fields

Range sliders must be paired with two text fields, which serve as the canonical sources for the selected values. This setup is required to ensure the component remains fully accessible.

The text fields reflect the values selected by the handles; they aren’t placeholders, even in their default position. Any change made via dragging, keyboard interaction, or manual input must remain synchronised across the text fields, handles, and tooltips.

The text fields never enter an undefined or empty state.

<DoDont>
    <Do imgurl="/docs/components/range-slider/usage/usage-behaviour-text_inputs-default_state-do.svg">
        Display the exact values currently selected by the slider handles.
    </Do>
    <Do not imgurl="/docs/components/range-slider/usage/usage-behaviour-text_inputs-default_state-dont.svg">
        Don’t use placeholders to represent the handles' default or initial positions.
    </Do>
</DoDont>

#### Interactino on open-ended ranges

On open-ended ranges, both text fields must display the actual values of the range limits; they are not placeholders.

- “Min” represents the available minimum value.
- “Max” represents the available maximum value.

<DoDont>
    <Do imgurl="/docs/components/range-slider/usage/usage-behaviour-text_inputs-open_ended-do.svg">
        Display the minimum and maximum values as text when handles are in their default positions.
    </Do>
    <Do not imgurl="/docs/components/range-slider/usage/usage-behaviour-text_inputs-open_ended-dont.svg">
        Don’t use "Min" or "Max" as text placeholders inside the text field.
    </Do>
</DoDont>

:::warning Accessibility notes

- Min and Max are treated as actual input values, not placeholders.
- Screen readers announce the current state correctly.
- The text field never enters an undefined or empty state.

:::

#### Manual entry

Manual entry follows a “strict-value” pattern to ensure the slider always reflects an active selection. This maintains a stable visual state during focus and prevents the component from ever falling into an ‘empty’ or undefined state.

**When focusing on a text field:**

The text field continues to display the text value “Min” or “Max” until the user actively types another value or moves the handles.

**When typing a new value:**

- Handle must update with the text field. “Min” or “Max” is replaced by the entered value.
- Delay showing validation errors until the user has finished typing or the text field loses focus. This prevents "premature errors" (e.g., error for "20" when the user is in the middle of typing "200" for a 30–300 range).

**If the user clears the entry:**

- The field automatically reverts to the corresponding boundary value (minimum or maximum).
- The handle returns to the start or end of the track accordingly.
- Apply the same grace period before validating to avoid flashing error states while the user is resetting the value.

<elements-example no-code>

```html
<w-slider label="Price" min="50" max="200" suffix="m²" data-testid="sqm" open-ended>
  <w-slider-thumb
    slot="from"
    aria-label="From square meters"
    name="from"
  ></w-slider-thumb>
  <w-slider-thumb slot="to" aria-label="To square meters" name="to"></w-slider-thumb>
</w-slider>
<script>
  let sqmNumberFormatter = new Intl.NumberFormat("no", {
    maximumFractionDigits: 0,
  }).format;
  let sqmSlider = document.querySelector('w-slider[data-testid="sqm"]');
  sqmSlider.labelFormatter = (slot) => {
    if (slot === "from") return "0";
    return sqmNumberFormatter("200") + "+";
  };
  sqmSlider.tooltipFormatter = function (value) {
    return sqmNumberFormatter(value);
  };
  sqmSlider.valueFormatter = function (value, slot) {
    if (slot === "from" && value === "") {
      return "Min";
    }
    if (slot === "to" && value === "") {
      return "Max";
    }
    return sqmNumberFormatter(value);
  };
</script>
```

</elements-example>

### Suffixes

Suffixes should provide essential clarity, not visual decoration. Use them only to clarify ambiguous values and avoid adding them to obvious contexts, as unnecessary suffixes increase visual noise and cognitive load.

Follow these guidelines to maintain a clean and consistent interface across all slider components.

<DoDont>
    <Do imgurl="/docs/components/range-slider/usage/usage-behaviour-suffixes-use-do.svg">
        Include a suffix if the value requires context to be understood.
    </Do>
    <Do not imgurl="/docs/components/range-slider/usage/usage-behaviour-suffixes-use-dont.svg">
        Don’t use suffixes when the meaning of the value is clear from the label, context, or component type.
    </Do>
</DoDont>

Suffixes should provide essential clarity, not visual decoration. Follow the following guidelines to maintain consistent and clean interfaces.

#### Currency

<DoDont>
    <Do imgurl="/docs/components/range-slider/usage/usage-behaviour-suffixes-currency-do.svg">
        Always use the country’s currency symbol when displaying monetary values.
    </Do>
    <Do not imgurl="/docs/components/range-slider/usage/usage-behaviour-suffixes-currency-dont.svg">
        Avoid using three-letter international code to indicate currency, unless strictly required.
    </Do>
</DoDont>

#### Measurement units

<div style="display: grid; gap: 24px; grid-template-columns: repeat(2, 50%);">

<div>

Always use standard measurement units when displaying values such as distance, volume, weight, power, etc.

- 120 km
- 75 m²
- 3.5 kg

</div>

<UsageExample style="display: block;" imgurl="/docs/components/range-slider/usage/usage-text_fields-suffixes-measurement_units.svg">
</UsageExample>

</div>

#### Years

Don’t use suffixes for years, as the four-digit format and slider’s context provide sufficient clarity.

<DoDont>
    <Do imgurl="/docs/components/range-slider/usage/usage-behaviour-suffixes-year-do.svg">
        Display years without adding a suffix.
    </Do>
    <Do not imgurl="/docs/components/range-slider/usage/usage-behaviour-suffixes-year-dont.svg">
        Don’t add “year” or “yr” as suffixes to numeric year values.
    </Do>
</DoDont>

Learn more about [Astro’s Style and mechanics](https://www.astro-contentguide.com/05b2d7be6/p/55eee3-dates/b/237ae5) for the different Vend languages and markets.

### Tooltip

The tooltip provides contextual feedback during interaction and helps users understand both:

- The current selected value, and
- The range semantics of the slider.

The tooltip is an ephemeral, supporting element and must not introduce new information or act as the source of truth. Its content must be dynamic, context-aware, and non-redundant.

#### When the tooltip is shown

<DoDont>
    <Do imgurl="/docs/components/range-slider/usage/usage-behaviour-tooltip-do.svg">
        Show the tooltip only during active handle dragging or when a handle has keyboard focus
    </Do>
    <Do not imgurl="/docs/components/range-slider/usage/usage-behaviour-tooltip-dont.svg">
        Keep the tooltip visible once the interaction has ended.
    </Do>
</DoDont>

#### Tooltip content

<div style="display: grid; gap: 24px; grid-template-columns: repeat(2, 50%);">

<div>

**Current selected value (default)**

While dragging, the tooltip displays the real-time numeric value of the active handle.

</div>

<UsageExample style="display: block;" imgurl="/docs/components/range-slider/usage/usage-behaviour-tooltip-do.svg">
</UsageExample>

</div>

<div style="display: grid; gap: 24px; grid-template-columns: repeat(2, 50%);">

<div>

**Relative minimum**

For open-ended ranges, the tooltip must display “Min” once the handle reaches the lower threshold. When moving away from the minimum, the tooltip immediately displays the first concrete value.

</div>

<UsageExample style="display: block;" imgurl="/docs/components/range-slider/usage/usage-tooltip-content-relative-minimum.svg">
</UsageExample>

</div>

<div style="display: grid; gap: 24px; grid-template-columns: repeat(2, 50%);">

<div>

**Relative maximum**

For open-ended ranges, the tooltip must display “Max” once the handle reaches the upper threshold. When moving away from the maximum, the tooltip immediately displays the first concrete value.

</div>

<UsageExample style="display: block;" imgurl="/docs/components/range-slider/usage/usage-tooltip-content-relative-maximum.svg">
</UsageExample>

</div>

<component-questions />
