# Alert dialog - Usage

An alert dialog is a modal that interrupts the user with critical information and requires an explicit response before they can continue.

See also [Confirmation dialog](/components/confirmation-dialog/overview.md), [Modal](/components/modal/overview.md), [Alert](/components/alert/overview.md).

<ComponentsStatus />

## Guidelines

- Use an alert dialog only when the decision cannot be deferred, reversed easily, or made elsewhere.
- Keep the title to one sentence that names the situation or the question.
- Write action labels as verbs: "Delete", "Save", "Cancel". Avoid "Yes", "No", "OK".
- Limit actions to three: one primary, one secondary, and one cancel. The platform renders them in priority order automatically.
- Mark destructive actions with the `.destructive` style — the platform renders them in red and applies appropriate haptics.
- Always include a `.cancel` action so the user has a safe exit.

### When to use

- To confirm an irreversible or high-consequence action before it executes ("Delete account?", "Overwrite existing file?").
- To collect a small amount of input — a rename, a PIN, a confirmation phrase — before an action proceeds.
- To report a blocking error that the user must acknowledge before they can continue.

### When not to use

- For choosing between multiple named alternatives. Use [Confirmation dialog](/components/confirmation-dialog/overview.md), which is designed for that pattern.
- For non-blocking feedback ("Saved", "Copied"). Use [Snackbar](/components/snackbar/overview.md).
- For persistent, inline status messages. Use [Alert](/components/alert/overview.md).
- For complex flows with multiple steps. Use [Modal](/components/modal/overview.md).
- Whenever the user has not triggered an action. An unsolicited alert dialog is disorienting and erodes trust.

## Behaviour

### Opening

Open an alert dialog only in direct response to an intentional user gesture. Never show it on load, on a timer, or as a side effect of navigation.

### Dismissal

Always include a `.cancel` action. Without it, keyboard users and VoiceOver users may have no safe way out. The platform renders the cancel button prominently and handles its placement.

Tapping outside the dialog does **not** dismiss it on any platform — the user must tap a button. This is by design: the decision is important enough to require explicit confirmation.

### Action order and rendering

The platform controls button order and rendering from the action array. Define them in priority order:

1. Primary action (what you want the user to do)
2. Destructive action (if present)
3. Cancel

The platform renders the cancel action separately, at the bottom or prominently depending on OS version and platform.

### Embedded content

An alert dialog can hold input controls (text fields, secure fields) above its action buttons. Use this for rename dialogs, PIN entry, or short confirmation phrases. Keep embedded content minimal — complex input belongs in a [Modal](/components/modal/overview.md).

## Content guidelines

### Title

State the situation or question clearly and specifically. The title is the only thing many users read.

| Do | Don't |
| --- | --- |
| Delete "Paris trip 2025"? | Are you sure? |
| Overwrite existing file? | Warning |
| Sign out of all devices? | Confirm action |

### Message (optional)

Explain the consequence in one or two sentences. Do not repeat the title word for word.

- Say what will happen, not what the user is doing.
- If the action is reversible, say so: "You can undo this from the Trash."
- If the action is irreversible, say so: "This cannot be undone."

### Action labels

Use verbs that name the action precisely:

| Do | Don't |
| --- | --- |
| Delete | Yes |
| Save | OK |
| Sign out | Proceed |
| Cancel | No |

<component-questions />
