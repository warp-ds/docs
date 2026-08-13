# Alert - Overview

Alerts show high-signal messages meant to be noticed and prompting users. An alert sits inline in the page, carries a status colour and icon, and stays visible until the situation it describes is resolved.

See also [Snackbar](/components/snackbar/overview.md), [Box](/components/box/overview.md), [Callout](/components/callout/overview.md), and [Modal](/components/modal/overview.md).

<ComponentsStatus />

## Examples

<ThemeSwitcher />

<style-isolate>
    <div>
        <h3 class="h4">Info</h3>
        <w-alert variant="info" show role="status">
            <p>This is the info variant of the alert element</p>
        </w-alert>
    </div>
    <div>
        <h3 class="h4">Positive</h3>
        <w-alert variant="positive" show role="status">
            <p>With an additional description</p>
        </w-alert>
    </div>
    <div>
        <h3 class="h4">Negative</h3>
        <w-alert variant="negative" show>
            <p>With an additional description</p>
        </w-alert>
    </div>
    <div>
        <h3 class="h4">Warning</h3>
        <w-alert variant="warning" show>
            <p>With an additional description</p>
        </w-alert>
    </div>
    <div>
        <h3 class="h4">With title, description and a link</h3>
        <w-alert variant="warning" show role="">
            <h3 role="alert" class="t5">Your payment is overdue</h3>
            <p class="mb-8">Pay before 3 September to keep your ad published.</p>
            <p><a href="#">See payment details</a></p>
        </w-alert>
    </div>
</style-isolate>

## General

An alert communicates the **status of something the user is doing or looking at**. It appears in the flow of the page, close to what it refers to, and it does not disappear on its own. That makes it the right choice for messages that must survive scrolling, re-reading, and screenshotting — validation summaries, service disruptions, payment problems, confirmations that matter.

Three properties define the component:

- **Contextual**: the alert belongs next to the content it describes, not in a global corner of the screen.
- **Persistent**: it stays until the underlying condition changes. Alerts have no auto-dismiss and, in Warp, no built-in close button.
- **Status-carrying**: the variant is a statement about what happened, not a styling choice.

Alert comes in four types — **Info**, **Warning**, **Negative**, and **Positive**. Pick the one that matches the severity of the situation. On web and Android the type defaults to info; on iOS the style is required. Always set it explicitly rather than relying on the default, so the severity is a decision rather than an accident.

Content is flexible. On web, anything can go inside the alert: a single sentence, a heading with a description, a list of validation errors, a link. On iOS and Android the component provides structured slots for a title, body, link, and up to two buttons. See the framework pages for exact APIs.

### Type names per platform

The four types are the same across platforms, but the names differ. Use this mapping when moving a design between platforms:

| Figma | Web (Elements) | iOS | Android |
| --- | --- | --- | --- |
| Information | `info` | `.info` | `WarpAlertType.Info` |
| Warning | `warning` | `.warning` | `WarpAlertType.Warning` |
| Negative | `negative` | `.critical` | `WarpAlertType.Critical` |
| Positive | `positive` | `.success` | `WarpAlertType.Positive` |

## Variants

### Information

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/alert/alert-variants-information.svg" alt="Information alert on a light blue surface with an info icon, title, body text, a link, and two buttons." />
  </div>
  <div class="py-16">

Use the information variant to call extra attention to useful, contextual information. Nothing is wrong and nothing has succeeded — the user simply needs to know something before they continue.

Examples: "This ad expires in three days", "Shipping is calculated at checkout", "You are viewing an archived version".

If the information is permanent page content rather than a response to context, use a [Box](/components/box/overview.md) with the info variant instead.

  </div>
</div>

### Warning

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/alert/alert-variants-warning.svg" alt="Warning alert on a light yellow surface with a warning icon, title, body text, a link, and two buttons." />
  </div>
  <div class="py-16">

Use the warning variant when something needs the user's attention but is not yet broken. The user can still continue, but there is a consequence if they do nothing.

Examples: "Your card expires next month", "Changes are not saved", "Connection is unstable".

Warning is the variant most often misused. If the user cannot act on it, it is information. If the action already failed, it is negative.

  </div>
</div>

### Negative

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/alert/alert-variants-negative.svg" alt="Negative alert on a light red surface with an error icon, title, body text, a link, and two buttons." />
  </div>
  <div class="py-16">

Use the negative variant for errors and severe problems that require attention. Something failed, is unavailable, or blocks the user from finishing their task.

Examples: "Payment declined", "We could not publish your ad", "Three fields need your attention".

Always say what went wrong **and** what the user can do about it. A negative alert with no way forward is a dead end.

  </div>
</div>

### Positive

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/alert/alert-variants-positive.svg" alt="Positive alert on a light green surface with a checkmark icon, title, body text, a link, and two buttons." />
  </div>
  <div class="py-16">

Use the positive variant to confirm that an action succeeded or a task completed, when the confirmation is important enough to stay on the page.

Examples: "Your ad is published", "Payment received", "Profile verified".

For a short, low-stakes confirmation that does not need to persist — "Copied", "Saved" — use a [Snackbar](/components/snackbar/overview.md) instead.

  </div>
</div>

## Anatomy

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/alert/overview-anatomy.svg" alt="Alert showing the container, status icon, title, body text, link, and two buttons." />
  </div>
  <div class="py-16">

1. **Container**: The surface that holds the content. Its background, border, and corner radius come from the variant.
2. **Status icon**: Reinforces the variant. It is set by the component — you do not choose it. Because it is paired with colour, it also carries the status to users who cannot distinguish the surface colours.
3. **Title (optional)**: A short summary of what happened. On web you supply your own heading element; on iOS and Android the component has a title slot.
4. **Body text**: The message. This is the only required content.
5. **Link (optional)**: Takes the user to more information elsewhere.
6. **Buttons (optional)**: Up to two actions that resolve the situation described by the alert. Available on iOS and Android as structured slots; on web you place buttons inside the alert yourself.

  </div>
</div>

<component-questions />
