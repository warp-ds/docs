# Slider - Accessibility

Sliders allow users to adjust a single value within a defined range by moving a handle along a horizontal track.



<ComponentsStatus />

## General

The Slider component is designed to be keyboard accessible and compatible with screen readers.

### Best practices

Although the Slider supports a disabled state, we recommend avoiding its use in interfaces. Disabled sliders provide limited accessibility feedback, are not focusable by keyboard or screen readers, and can make it unclear why an option is unavailable.

## Interaction

### Mouse

- Dragging the handles adjusts the selectable value.
- Clicking on the track of the single slider sets the value corresponding to the clicked position.

### Keyboard interaction

- The handle must be operable using keyboard input.
- Arrow keys adjust values according to the defined continuous or step interval.
- Keyboard interactions must remain synchronised with inputs and tooltips.

## Other considerations

### Text fields

- Current state/selection should be announced by screen readers.
- "Min" or "Max" values should be announced by screen readers, they are not placeholders.
- The text field must never enter an undefined or empty state.

### Tooltip

Include units in the tooltip. This ensures the value is fully understandable when announced by screen readers.

<component-questions />