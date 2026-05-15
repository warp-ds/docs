# Snackbar - Usage

A Snackbar shows brief user feedback messages that overlay content, with an optional action such as Undo.

<ComponentsStatus />

## Behavior

- Snackbar items automatically disappear after a predefined timeout of 5000 ms ("short"), 20000 ms ("long") or "infinite" (6000000 ms), depending on the context or the length of the message.
- When appropriate, and if the message isn’t critical, the toast can also be dismissed manually using the close button.
- Snackbar items have a minimum width of 328px, and a maximum width of 420px to maintain readability on wide viewports.

## Best practices / usage guidelines

- A Snackbar shouldn’t interrupt the user’s experience.
- Snackbar items always show up at the bottom center of the page.

### When to use

Use a Snackbar for global notifications of small importance that do not need to interrupt the user’s flow. It can be triggered by either a system event or user interaction.

### When not to use

- **For immediate attention:** If the notification requires users’ attention right away, use an [Alert](../alert/overview.md) or [Modal](../modal/overview.md) instead.
- **For long-term global information:** If the notification conveys information that is relevant to all users or a group of users over a longer period, use an [Alert](../alert/overview.md) instead.

## Placement

A Snackbar is placed in the bottom center of the page, 16px above the viewport edge. It overlays the content without shifting the layout and remains visible even while scrolling.

<component-questions />
