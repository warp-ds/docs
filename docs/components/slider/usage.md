# Slider - Usage

Sliders allow users to adjust a single value within a defined range by moving a handle along a horizontal track.

See also [Range slider](/components/range-slider/overview.md).

<ComponentsStatus />

## Guidelines

- Sliders are best suited for when people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.
- Use step intervals (integers) when precision input is required.
- Always display a tooltip while dragging to show the selected value.
- Ensure the slider is wide enough to be easily operated on touch devices.
- Avoid disabling sliders. They provide poor accessibility feedback, and it’s unclear why the option is unavailable.

### When to use

- Use to allow users to see their selection relative to a minimum and maximum.
- Use to provide a wide range of options within a compact space.
- Use when users should see the results of their selection in real-time.

### When not to use

- Don’t use sliders for small ranges (e.g., 1-10). Use a [Checkbox](/components/checkbox/overview/) or Stepper instead (Note: Steppers are not yet available in Warp; please reach out if your use case requires one).
- Don’t use for complex input values that aren’t numeric (e.g., categories or words). Use a [Select](/components/select/overview/), Checkbox, [Radio](/components/radio/overview.md), [Pill](/components/pill/overview.md), or [Text field](/components/text-field/overview.md) instead.
- Don’t use when both minimum and maximum values need to be defined. Use the [Range slider](/components/range-slider/overview/) instead.

## Behaviour

### Text fields

By default, the Slider is paired with a text field. This allows users to choose between quick sliding or precise typing.

Always use a text field when:

- Users need or expect to enter exact values.
- The value can reasonably be typed.

**Removing the text field is an exception**. Only do this when:

- The value cannot be meaningfully entered as free text.
- The range is adjusted in fixed steps.
- Precision is controlled by the system, not the user.

Example: Selecting a search radius on a map. Users usually explore the distance by sliding rather than typing an exact or arbitrary number.



<component-questions />
