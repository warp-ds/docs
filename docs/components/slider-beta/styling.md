## Behaviour

- Use haptic feedback to communicate to users that steps when using touch devices.

## Error states

Error state logic is handled by the teams implementing the component. When an error occurs, the text field adopts the error state and displays a clear message explaining the issue.

[Read guidelines on error messages on text inputs.](https://www.astro-contentguide.com/05b2d7be6/p/58387b-text-input)

::: image-block
![Example of error state on a slider.](/components/slider/styling-1.svg)
:::

## Interaction

- Slide the handle, or type in the input field to choose/change a value.
- Click on the track to pick a value.
- The slide handle grows in size when selected and dragged to provide a visual cue to the user that the handle is being pressed.
- A tooltip should appear when the user interacts with the slider, even when text input is present, ensuring consistent feedback on the selected value.

## Placement

Place sliders close to the content or filters they control to ensure clarity and ease of use. They should appear next to related labels, content or result previews, so it’s obvious what the value adjustment affects.

Avoid placing them in crowded areas or too far from their context, as this can make the connection between control and effect unclear. Ensure enough horizontal space for smooth interaction, especially on touch devices.

::: image-block
![Examples from FINN and Blocket.](/components/rangeslider/styling-3.svg)
:::