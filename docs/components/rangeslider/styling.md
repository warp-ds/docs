## Behaviour

- Use haptic feedback to communicate to users that steps when using touch devices.
- When the range slider’s minimum and maximum values are the same, the handles collide but do not overlap. This prevents usability issues where overlapping handles would make it difficult to regain control and adjust the values. See example below.

::: image-block
![Example of handles collision at same min and max values](/components/rangeslider/styling-1.svg)
:::

## Error states

Error state logic is handled by the teams implementing the component. When an error occurs, the relevant text field adopts the error state and displays a clear message explaining the issue. In this state, the slider’s active track between the handles is not shown.

[Read guidelines on error messages on text inputs.](https://www.astro-contentguide.com/05b2d7be6/p/58387b-text-input)

::: image-block
![Example of error state on range slider.](/components/rangeslider/styling-2.svg)
:::

## Interaction

- Slide a handle, or type in the text fields to choose/change a value.
- Clicking on the range slider’s track doesn’t pick a value.
- The slide handles grow in size when selected or dragged to provide a visual cue to the user that the handle is being pressed.
- A tooltip should appear when the user interacts with the slider, even when text input is present, ensuring consistent feedback on the selected value.

## Placement

Place range sliders close to the content or filters they control to ensure clarity and ease of use. They should appear next to related labels, content or result previews, so it’s obvious what the value adjustment affects.

Avoid placing them in crowded areas or too far from their context, as this can make the connection between control and effect unclear. Ensure enough horizontal space for smooth interaction, especially on touch devices.

::: image-block
![Examples from FINN and Blocket.](/components/rangeslider/styling-3.svg)
:::