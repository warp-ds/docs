# Sheet - Usage

A sheet presents related content or a focused task over the current screen.

<ComponentsStatus />

## Guidelines

- Give every sheet a clear title and a way to close it.
- Keep the content focused on one task.
- Use the medium style for short content and the full screen style for long or multi-step tasks.
- Hide the drag indicator only when the sheet must not be dismissed by dragging, for example when there are unsaved changes.
- Choose the solid background when the content behind the sheet would make the text hard to read.

## Behaviour

- A sheet opens from the bottom and covers the screen below it.
- A medium sheet can be dragged between half and full height.
- Dragging the sheet down past the lowest detent dismisses it, unless dismissal is disabled.
- Navigation bar styling belongs on the content inside the `NavigationStack`, not on the sheet root.
