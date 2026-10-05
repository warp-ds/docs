# Full-screen dialog - Accessibility
A full-screen dialog covers the entire screen with a top navigation bar and a content area, hosting a series of related inputs or tasks.

<ComponentsStatus />

## General
The dialog must have a title. The title appears next to the close icon at the top of the screen and describes the task the user is completing.

Focus is trapped inside the dialog while it is open and returned to the trigger element when dismissed. This behavior is inherited from the underlying platform dialog implementation.

## Close affordance
The leading close icon is always available and always dismisses the dialog. Do not remove or override it.

<component-questions />
