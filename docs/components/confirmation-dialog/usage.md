# Confirmation dialog - Usage

A confirmation dialog presents a set of choices in response to a user-initiated action.

See also [Alert dialog](/components/alert-dialog/overview.md), [Modal](/components/modal/overview.md).

<ComponentsStatus />

## Guidelines

- Open a confirmation dialog only in direct response to a user action. Never trigger one automatically.
- Keep titles short — one sentence that names the decision, not an explanation of what will happen.
- Write action labels as verbs: "Delete", "Archive", "Share". Avoid "Yes", "No", "OK" — they are meaningless in isolation.
- Limit the number of options. More than four actions makes the dialog feel like a menu. Use a real menu instead.
- Always include Cancel (provided automatically by the platform). Never remove it or replicate it manually.
- Never use a confirmation dialog to tell the user something — use [Alert](/components/alert/overview.md) or [Snackbar](/components/snackbar/overview.md) for messages.

### When to use

- To let the user choose between named alternatives that all require explicit commitment ("Delete", "Archive", "Move to Drafts").
- To confirm a destructive action before it executes — deleting a file, removing an account, cancelling an order.
- To disambiguate when a single action has multiple valid targets or modes ("Save here", "Save a copy", "Discard changes").

### When not to use

- For single-option confirmations ("Are you sure?"). Use [Alert dialog](/components/alert-dialog/overview.md) — it is better suited for binary yes/no decisions.
- For displaying information the user needs to read before deciding. Use [Alert dialog](/components/alert-dialog/overview.md), which has a message field.
- For collecting input. Use [Alert dialog](/components/alert-dialog/overview.md), which supports embedded text fields.
- For navigating to a new context. Use a standard navigation push or [Modal](/components/modal/overview.md).
- Whenever the user has not triggered an action. An unsolicited dialog is an interruption with no payoff.

## Behaviour

### Opening

The confirmation dialog must be triggered by an explicit, intentional user gesture — a button tap, a long press, a swipe action. Never open it on load or on a timer.

### Dismissal

The system always provides a Cancel button. On iPhone and Android it is the last item in the sheet. On iPad the user can also dismiss by tapping outside the popover. Do not add a second dismiss action manually.

### Destructive actions

Mark actions that permanently delete, remove, or reset data as `.destructive`. The system renders them in red and applies system-level haptic feedback where available. Place destructive actions above Cancel but below any non-destructive alternatives, so the user sees safe options first.

### Title and message

The title is required and names the decision. A message is optional and provides context below the title. Keep both short — the confirmation dialog is not a help page.

## Content guidelines

### Title

State what the user is choosing between, not what they just did. "Delete message?" is a decision. "You are about to delete a message" is a lecture.

- One sentence ending in a question mark.
- Name the item being acted on when it matters: "Delete 'Paris trip 2025'?" vs "Delete photo?".
- Avoid "Are you sure?" — it implies doubt about the user, not clarity about the consequence.

### Action labels

Name the action, not the outcome:

| Do | Don't |
| --- | --- |
| Delete | Yes, delete it |
| Archive | Proceed |
| Share | OK |
| Discard changes | Continue |

Use the same verb as any undo or confirmation message that follows, so the action and its reversal refer to the same thing.

### Destructive vs default

Use `.destructive` for actions the user cannot undo: permanent deletion, account removal, irreversible resets. Use `.default` for actions that can be reversed or have no lasting consequence: archiving, moving, sharing.

<component-questions />
