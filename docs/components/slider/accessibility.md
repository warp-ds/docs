# Slider - Accessibility

Sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Range slider](/components/range-slider/overview.md).

<ComponentsStatus />

## General

The slider component has been designed with accessibility in mind, providing range selection functionality that is fully keyboard accessible and screen reader compatible.

### Mouse

- Dragging the handles adjusts the selectable value.
- Clicking on the track of the single slider sets the value corresponding to the clicked position.

### Keyboard interaction

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