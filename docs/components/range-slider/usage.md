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

**Open minimum**

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

<component-questions />
