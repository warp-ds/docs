# Alert dialog - Overview

An alert dialog is a modal that interrupts the user with critical information and requires an explicit response before they can continue. It appears as a centered dialog on all platforms and blocks interaction with the rest of the interface.

See also [Confirmation dialog](/components/confirmation-dialog/overview.md), [Modal](/components/modal/overview.md), [Alert](/components/alert/overview.md).

<ComponentsStatus />

## General

An alert dialog is the strongest interruption in the design system. It halts everything until the user responds. Use it sparingly, and only when the decision is genuinely time-sensitive, irreversible, or requires input the rest of the interface cannot collect safely.

Three properties define the component:

- **Modal**: the entire interface behind it is blocked. Unlike [Confirmation dialog](/components/confirmation-dialog/overview.md), which allows iPad users to dismiss by tapping outside, an alert dialog must be explicitly resolved.
- **Decision-carrying**: the dialog presents a question or consequence that only the user can resolve. It is not for announcements — use [Snackbar](/components/snackbar/overview.md) or [Alert](/components/alert/overview.md) for those.
- **Optionally interactive**: the dialog can embed input controls (text fields, secure fields) above its action buttons, making it the right choice for inline rename flows or PIN entry.

<component-questions />
