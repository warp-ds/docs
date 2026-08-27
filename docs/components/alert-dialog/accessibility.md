# Alert dialog - Accessibility

An alert dialog is a modal that interrupts the user with critical information and requires an explicit response before they can continue.

<ComponentsStatus />

## General

An alert dialog is a system-native component. The platform handles focus trapping, screen reader announcements, and keyboard interaction. Your responsibility is to write clear titles, meaningful messages, and specific action labels.

## iOS (VoiceOver)

- VoiceOver moves focus to the alert dialog automatically when it appears and announces the title immediately.
- Each action button is individually focusable. Users swipe or use arrow keys to cycle through buttons, then double-tap to activate.
- The Cancel action (`.cancel`) is always present and receives focus last, giving users a safe exit at the end of the tab order.

**Title**: VoiceOver announces the title first, before the message. Write the title so it makes sense on its own — the user may activate an action after hearing only the title if the consequence is already clear.

**Action labels**: buttons are read in isolation without the title as context. "Delete" is unambiguous; "Confirm" is not.

**Embedded content**: when an alert dialog contains a `TextField`, VoiceOver focuses the text field automatically after the title announcement. The keyboard appears on focus. Make sure any placeholder text in the field describes what to type, since the title alone may not be sufficient context.

## Focus trapping

The alert dialog blocks interaction with content behind it. VoiceOver cannot reach any element outside the dialog while it is presented. Do not trigger an alert dialog unless the user has initiated an action — an unexpected dialog with VoiceOver focus is disorienting.

After dismissal, focus returns to the element that triggered the dialog. This is handled automatically by the platform.

## Keyboard (iPadOS / Mac Catalyst)

- **Tab / Shift-Tab**: cycle through action buttons and any embedded input fields.
- **Return / Space**: activate the focused button.
- **Escape**: activates the Cancel button if one is present.

## Motion

The alert dialog uses a system fade and scale animation. It respects the user's Reduce Motion setting automatically.

## Touch targets

Action buttons inside the alert dialog meet the platform minimum touch target (44×44 pt on iOS) by default.

## Common mistakes

- **No Cancel action**: without `.cancel`, users cannot dismiss the dialog safely. VoiceOver users and keyboard users are trapped.
- **Vague action labels**: "Yes" and "No" are meaningless in isolation. Name the action.
- **Triggering without user intent**: an unexpected alert dialog interrupts VoiceOver reading and is confusing.
- **Too much embedded content**: complex layouts in the dialog are not accessible without careful semantic structure. Move complex input to a [Modal](/components/modal/overview.md).

<component-questions />
