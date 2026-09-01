# Full-screen dialog - Usage
A full-screen dialog covers the entire screen with a top navigation bar and a content area, hosting a series of related inputs or tasks.

<ComponentsStatus />

## When to use
- To host a flow that requires multiple inputs before it can be completed (for example, creating a calendar entry).
- When the task benefits from filling the screen — long forms, image cropping, editors.
- When another dialog needs to appear on top; a full-screen dialog is the only dialog other dialogs can layer over.

## When not to use
- For a single decision or short critical message — use a [Dialog](../dialog/overview.md).
- For non-blocking content the user should be able to inspect alongside the rest of the UI.

## Best practices

### Alert on close with unsaved input
If the user has entered information that would be lost by closing, confirm the dismiss with a [Dialog](../dialog/overview.md) explaining the potential data loss.

### Keep the title short
The title sits on a single line next to the close icon. Long titles will be truncated — choose a label that fits.

### Do not disable dismissal
The close icon is always shown and always dismisses the dialog. Back press dismisses by default; only opt out via `dismissOnBackPress` when the flow genuinely cannot be interrupted (rare).

<component-questions />
