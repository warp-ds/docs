# Confirmation dialog

<ComponentsStatus />

A confirmation dialog presents a set of choices in response to a user-initiated action.

See also [Alert](/ios/components/alert/overview.md), [Modal](/ios/components/modal/overview.md).

## General

`Warp.ConfirmationDialog` is a thin wrapper around the native SwiftUI confirmation dialog (`.confirmationDialog`, presented with `.warpConfirmationDialog()`). The system presents the dialog and provides its VoiceOver, focus and dismissal behaviour; Warp only supplies the title, the optional message, the actions and their styling. Your responsibility is clear, meaningful text.

## What Warp sets up

- **Title is always shown.** The dialog is presented with a visible title, so VoiceOver users get the same context as sighted users. Write the title as the question being decided ("Delete this ad?").
- **Message is optional.** Use it for consequences the user must know before choosing ("This cannot be undone.").
- **Action order.** Actions with the `.primary` style are placed first; the others keep the order you pass them in. VoiceOver reads the actions in this visual order.
- **Cancel.** The system adds a Cancel button automatically. Use a `.cancel` action only to give it a custom title; only the first `.cancel` action is used.
- **Destructive actions.** `.destructive` maps to SwiftUI's destructive button role, and Warp colours the label with the negative text token.

## Writing accessible actions

- **Name the action in the label.** VoiceOver users navigate the buttons one by one, so each label must make sense on its own: "Delete ad" or "Archive" works, "Yes" or "Confirm" does not.
- **Don't rely on colour.** The red colour of a destructive action is not available to everyone. The label itself must say what will happen ("Delete", "Remove").
- Keep labels short so they are read quickly and do not truncate with larger text sizes.

## iPhone and iPad

- On iPhone the dialog appears as an action sheet at the bottom of the screen, with Cancel at the bottom.
- On iPad the dialog appears as a popover. The system hides cancel-role buttons there, and tapping outside the popover dismisses the dialog **without** calling the cancel handler. Do not put logic that must run on cancel into a `.cancel` action if iPad is a target.

## Focus and interruption

- Only present a confirmation dialog in response to an action the user just took. An unexpected dialog moves VoiceOver focus away from what the user was doing.
- Focus handling while the dialog is open and after it closes is managed by the system. Do not move focus programmatically around the presentation.

## Motion

Warp adds no custom animation; the dialog uses the system presentation.

<component-questions />
