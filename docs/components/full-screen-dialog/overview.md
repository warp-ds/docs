# Full-screen dialog - Overview
A full-screen dialog covers the entire screen with a top navigation bar and a content area, hosting a series of related inputs or tasks.

<ComponentsStatus />

::: warning Android only
The full-screen dialog is currently implemented on Android only. On other platforms, use [Modal](../modal/overview.md).
:::

## General
A full-screen dialog is used for flows that require a series of tasks — for example, creating a calendar entry with title, date, location, and time. Unlike a basic dialog, it can host another dialog on top of it — useful for confirms like "discard unsaved changes?" when the user tries to close mid-flow.

For a single decision or short critical message, use a [Dialog](../dialog/overview.md) instead.

## Anatomy

A full-screen dialog is composed of:

1. **Close icon** — dismisses the dialog. Always present in the leading position of the top bar.
2. **Title** — a single-line headline next to the close icon.
3. **Action (optional)** — a trailing quiet-style text button in the top bar, typically used for a confirm or save affordance.
4. **Content** — the body of the dialog, rendered in a column with content padding.

<component-questions />
