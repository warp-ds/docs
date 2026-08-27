# Confirmation dialog - Overview

A confirmation dialog presents a set of choices in response to a user-initiated action. It uses the platform's native action sheet mechanism and appears anchored to the bottom of the screen on iPhone, or as a popover on iPad and Mac.

See also [Alert dialog](/components/alert-dialog/overview.md), [Modal](/components/modal/overview.md).

<ComponentsStatus />

## General

A confirmation dialog interrupts the user with a focused set of choices related to a specific action they just initiated. It does not block the whole interface — the user can dismiss it by tapping outside on iPad — but it commands attention because it overlays content and requires an explicit response.

Use a confirmation dialog when the user must actively choose between named alternatives, especially when one of those alternatives is destructive. The system always appends a Cancel button, so the user always has a safe exit.

Three properties define the component:

- **Action-tied**: the dialog is attached to a specific action the user triggered. Open it from a button tap, a swipe gesture, or a long press.
- **Named alternatives**: each option is a short verb or verb phrase. The user is choosing what to do, not confirming that something already happened.
- **Destructive-aware**: options with destructive style are rendered in red by the system, applying an extra layer of warning before the user commits.

<component-questions />
