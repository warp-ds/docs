# Range slider - Accessibility

Range sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Slider](/components/slider/overview.md).

<ComponentsStatus />

## General

The Range slider component has been designed with accessibility in mind, providing range selection functionality that is fully keyboard accessible and screen reader compatible.

### Mouse

- Dragging the handles adjusts the selectable value.

### Keyboard interaction

- Tab order is
  1. From value handle
  2. To value handle
  3. From value text field
  4. To value text field
- Slider handles must be operable using keyboard input.
- Arrow keys adjust values according to the defined continuous or step interval.
- Keyboard interactions must remain synchronised with inputs and tooltips.

### Text fields

- Min / Max are announced, not placeholders.
- Screen readers announce the current state correctly.
- The input never enters an undefined or empty state.

### Tooltip

- Including units in the tooltip ensures the value is fully understandable when announced by screen readers.

<component-questions />