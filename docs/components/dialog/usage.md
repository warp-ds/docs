# Dialog - Usage
A dialog is a focused overlay that requests a single decision or a short, critical message before the user continues.

<ComponentsStatus />

## When to use
- To confirm a destructive or irreversible action (delete, sign out, discard changes).
- To surface a short, critical message the user must acknowledge before continuing.
- To ask for a single decision when the answer determines what happens next.

## When not to use
- For non-urgent information — prefer an inline [Callout](../callout/overview.md) or a [Toast](../toast/overview.md).
- For a series of inputs or a multi-step task — use a [Full-screen dialog](../full-screen-dialog/overview.md).
- For content that needs scrolling or scanning — a dialog is not a container for long-form content.

## Best practices

### Keep the copy short
Titles should be a few words that describe the outcome of continuing. Bodies should be a single short sentence. If a dialog needs more explanation than that, it is probably the wrong container.

### Choose clear action labels
The primary action should carry the clearest label — avoid generic "OK" when a verb like "Delete" or "Save" is available.

### Always provide a safe way out
Every dialog can be dismissed by tapping outside it or pressing back. If those defaults are inappropriate for a given flow (for example, a confirmation the user must explicitly acknowledge), disable them via `dismissOnClickOutside` and `dismissOnBackPress` and provide an explicit secondary action instead.

### Never stack dialogs
Do not open a dialog from within a dialog. If a follow-up decision is required, dismiss the first dialog first, or redesign the flow to use a single decision point.

<component-questions />
