# Range slider - Accessibility

Range sliders provide a visual indication of a selected interval within a defined range by moving two handles along a horizontal track to set both a minimum and maximum value.



<ComponentsStatus />

## General

The Range slider component is designed to be keyboard accessible and compatible with screen readers.

### Best practices

Although the Range slider supports a disabled state, we recommend avoiding its use in interfaces. Disabled sliders provide limited accessibility feedback, are not focusable by keyboard or screen readers, and can make it unclear why an option is unavailable.

## Interaction

### Mouse

- Dragging the handles adjusts the selectable value.
- Clicking on the track of the single slider sets the value corresponding to the clicked position.

### Keyboard

- The handles must be operable using keyboard input.
- Arrow keys adjust values according to the defined continuous or step interval.
- Keyboard interactions must remain synchronised with text fields and tooltips.

## Other considerations

### Text fields

- Current state/selection should be announced by screen readers.
- “Min” or “Max” values should be announced by screen readers, they aren’t placeholders.
- The text fields must never enter an undefined or empty state.

### Tooltip

Include units in the tooltips. This ensures the selected value is fully understandable when announced by screen readers.

<component-questions />