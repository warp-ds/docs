## Accessibility

The slider component has been designed with accessibility in mind, providing range selection functionality that is fully keyboard accessible and screen reader compatible. 

The number input value and slider position should always be in sync. An update to either causes the other to update.

### Mouse

- Dragging the handles adjusts the selectable minimum and maximum values.

### Keyboard navigation

- Tab moves focus to the handles (first the minimum handle, and then the maximum handle).
- Up or Right Arrow key increases the selected value by one step.
- Down or Left Arrow key decreases the selected value by one step.
- When a slider is moved, its new value must be announced.

### Voiceover / screen reader

The slider must be operable with screen reader, which means that:
- Identify what type of slider it is (range slider).
- Users should be able to interact with it via keyboard navigation.
- Clearly communicate the purpose of each element within the slider.
