# Confirmation dialog - Accessibility

A confirmation dialog presents a set of choices in response to a user-initiated action.

<ComponentsStatus />

## General

A confirmation dialog is a system-native component. The platform handles focus management, screen reader announcements, and keyboard interaction automatically. Your responsibility is to write clear, meaningful titles and action labels — the system does the rest.

## iOS (VoiceOver)

- VoiceOver announces the sheet title immediately when the dialog appears. Focus moves to the first action button automatically.
- Each action button is individually focusable and activatable with a double-tap.
- The Cancel button is always the last focusable element in the sheet.
- Swipe gestures (up/down) cycle through the available actions.

**Action labels**: VoiceOver reads action labels in isolation, without the title context. "Delete" works; "Confirm" does not — the user cannot tell what they are confirming.

**Destructive actions**: the system reads the button role as part of the VoiceOver hint ("Destructive button"). You do not need to repeat the word "delete" or "remove" in the label itself.

## Focus and interruption

The sheet is modal — VoiceOver cannot reach content behind it. Do not trigger a confirmation dialog unless the user has initiated an action; an unexpected sheet with VoiceOver focus is disorienting.

Return focus to the triggering element after the dialog is dismissed (the platform does this automatically for sheet presentations originating from a button).

## Motion

The sheet uses a system slide-up animation. It respects the user's Reduce Motion accessibility setting automatically.

## Touch targets

Buttons inside the confirmation dialog meet the platform minimum touch target size (44×44 pt on iOS, 48×48 dp on Android) by default.

<component-questions />
