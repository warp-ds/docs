# Dialog - Accessibility
A dialog is a focused overlay that requests a single decision or a short, critical message before the user continues.

<ComponentsStatus />

## General
All dialogs must have a title. The title appears in bold at the top and uses a few words to convey what will happen if the user continues.

The dialog traps focus while it is open and returns focus to the trigger element when dismissed. This behavior is inherited from the underlying platform dialog implementation.

## Icons and images
When an icon or image is shown above the title, always provide a meaningful `contentDescription`. Sighted users get information from the visual — screen reader users should get the same information.

<component-questions />
