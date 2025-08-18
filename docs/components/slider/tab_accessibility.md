## Accessibility

The slider component has been designed with accessibility in mind, providing range selection functionality that is fully keyboard accessible and screen reader compatible.

The number input value and slider position should always be in sync. An update to either causes the other to update.

### Mouse

- Dragging the handles adjusts the selectable value.
- Clicking on the track of the single slider sets the value corresponding to the clicked position.

### Keyboard navigation

- Tab moves focus to the handle.
- Up or Right Arrow key increases the selected value by one step.
- Down or Left Arrow key decreases the selected value by one step.
- When a slider is moved, its new value must be announced.

### Voiceover / screen reader

The slider must be operable with screen reader, which means that:
- Identify what type of slider it is (single slider).
- Users should be able to interact with it via keyboard navigation.
- Clearly communicate the purpose of each element within the slider.
