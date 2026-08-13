# Alert - Accessibility

Alerts show high-signal messages meant to be noticed by or prompt users. An alert sits inline in the page, carries a status colour and icon, and stays visible until the situation it describes is resolved.

<ComponentsStatus />

## General

An alert is a message that must reach everyone, including people who cannot see it appear. That makes accessibility part of the component's core purpose rather than a finishing touch.

Three things decide whether an alert works for assistive technology:

1. **The role**, which determines whether and how urgently the message is announced.
2. **The timing**, because a live region only announces content that changes *after* the region exists.
3. **The wording**, because colour conveys nothing to a screen reader.

The alert container is never focusable and never interactive. Only the links and buttons inside it take focus — with an important exception on iOS, described below.

The three platforms differ more than you might expect. Web wraps the content in a live region; iOS merges the whole alert into a single accessibility element; Android does neither. Read the platform section for the platform you are building on rather than assuming the web behaviour carries over.

## Role and live regions (web)

Alert applies `role="alert"` by default. That role carries an implicit `aria-live="assertive"` and `aria-atomic="true"`: screen readers interrupt whatever they are saying and read the whole alert.

Assertive announcements are disruptive by design. Reserve them for messages that genuinely cannot wait.

| Role | Announcement | Use for |
| --- | --- | --- |
| `alert` (default) | Interrupts the user immediately | Errors, failures, and blocking problems — the negative variant, and warnings that need acting on now. |
| `status` | Queued, read at the next pause | Confirmations and context — the positive and information variants. |
| `""` (empty) | Nothing announced by the wrapper | Alerts rendered on page load, or when you want to put the role on a specific child element. |

Set the role explicitly to match the severity, rather than accepting the default on every alert:

```html
<!-- Urgent: interrupt the user -->
<w-alert variant="negative" role="alert" show>
  <p>Payment declined. Check your card details and try again.</p>
</w-alert>

<!-- Not urgent: wait for a pause -->
<w-alert variant="positive" role="status" show>
  <p>Your ad is published.</p>
</w-alert>
```

### Moving the role to a child

To have only part of the alert announced — for example the title, without a long body — clear the role on the alert and set it on the child instead.

```html
<w-alert variant="info" show role="">
  <h3 role="alert" class="t5">Your session expires in 5 minutes</h3>
  <p>Save your changes to avoid losing them.</p>
</w-alert>
```

This is also the only reliable way to keep the status icon out of the announcement — see below.

### The status icon is announced

The status icon is **not** hidden from assistive technology, and because `role="alert"` is atomic, it is read as part of the alert. The icon SVGs carry a `<title>` describing their shape, so a screen reader announces the shape before your message:

| Variant | Announced before your message |
| --- | --- |
| Information | "Circle with letter i inside" |
| Warning | "Warning triangle with exclamation point" |
| Negative | "Exclamation mark inside an octagon" |
| Positive | "Circle with checkmark" |

An info alert reading "Your session expires in 5 minutes" is therefore announced as *"Circle with letter i inside, Your session expires in 5 minutes"*.

These titles describe the drawing, not the meaning, so they add noise rather than information. Until the component hides them, use the child-role pattern above to scope the live region to your own content. Verify the result with a real screen reader — the alert host also carries a default role of `alert` set through `ElementInternals`, which an empty `role` attribute may not clear on newer versions.

### Timing: why an alert sometimes announces nothing

A live region announces **changes to its content**. If the region and its text are inserted into the page at the same moment, many screen readers say nothing at all.

- **Alerts shown in response to a user action** — a failed submit, a successful save — generally announce correctly, because the alert appears after the page has settled.
- **Alerts present on page load** announce unreliably, and an assertive one that does fire will talk over the page title. Set `role=""` on these and let users find the message by reading the page.
- **Alerts whose text changes while visible** are re-announced in full, because `role="alert"` is atomic. Do not update the text on a timer, such as a countdown — it will interrupt the user on every tick.
- If a message must be announced at a precise moment, render the alert container first and add its content afterwards.

### What `show` actually does

Toggling `show` does not add or remove your markup. The content you slot into `<w-alert>` stays in the DOM the whole time. What changes is that the wrapper is marked `aria-hidden="true"` while hidden, and the slot is dropped once the collapse animation finishes.

Two consequences:

- **Do not rely on absence from the DOM** to mean the user cannot reach the content. Query by visibility, not by presence.
- **Do not put focusable elements in a hidden alert.** They are inside an `aria-hidden` subtree but are not themselves inert, so a keyboard user can tab into content a screen reader refuses to describe.

## Focus management

Moving focus is often more reliable than announcing, and it helps sighted keyboard users too.

- **For a validation summary**, move focus to the alert after a failed submit. Add `tabindex="-1"` to the alert or to its heading, then call `focus()`. Do not use `tabindex="0"` — that would leave the alert permanently in the tab order. The component's stylesheet already suppresses the focus ring for `[tabindex="-1"]:focus:not(:focus-visible)`, so this will not produce a stray outline.
- **For a single failed field**, moving focus to the field itself is usually better than focusing the alert.
- **Never trap focus** inside an alert. It is part of the page, not a dialog. If the user must not continue, use [Modal](/components/modal/overview.md).
- **Do not steal focus** for informational or positive alerts. Interrupting someone mid-task to confirm a success is worse than saying nothing.
- When an alert is removed after the problem is resolved, make sure focus does not land on nothing. Move it to a sensible element first.

## Keyboard interaction

- Keep the DOM order the same as the visual order, so tabbing follows what users see.
- Every link and button in the alert must show a visible focus indicator. Warp components handle this — do not remove the outline.
- Do not attach a click handler to the alert container. A click target that is not a button or link cannot be reached by keyboard at all.

## Screen reader considerations

- **The text must carry the severity.** Colour is invisible to a screen reader, and the icon announces its shape rather than its meaning. Write "Payment declined", not "Payment" in a red alert.
- **Do not name the variant in the text.** "Error:" as a prefix is redundant when the sentence already says what failed, and it reads as noise when repeated across a form.
- **Keep the announcement short.** `role="alert"` reads the entire alert atomically. A long alert with several paragraphs and links becomes an unskippable monologue.
- **One live region at a time.** Two alerts appearing together will clash, and the second may cut off the first. Combine them into one message.
- **Validation summaries** should say how many problems there are and link to each field, so users can jump straight to the fix.
- **Do not duplicate a snackbar and an alert** for the same event. The message will be announced twice.

## Visual accessibility

### Colour and contrast

- Text inside the alert must meet at least **4.5:1** against the alert surface, or **3:1** for large text (18.66px bold, or 24px and above).
- Links, buttons, and the status icon need at least **3:1** against the surface.
- Use the Warp alert tokens as they are. The surfaces are defined per brand and per theme, so a hard-coded text or border colour that passes in one brand or in light mode can fail in another.
- Do not place an alert on a custom background. The variant surfaces are designed against the standard page background.

### Colour independence

The four variants differ by surface colour, by the coloured left border, and by icon. None of these is a substitute for words:

- On web the icon is **fetched at runtime** from the icon service and falls back to an empty graphic if the request fails. Offline, or behind a strict content policy, the variant may be conveyed by colour alone.
- Warning and information surfaces are both light and low-saturation. Do not rely on the difference between them to communicate urgency.
- The **wording** must state the outcome, so the meaning survives when both colour and icon are missed. This is the only carrier that works on every platform in every condition.

### Text resizing and reflow

- Content must remain readable and usable at 200% zoom, with no loss of content or functionality.
- The alert grows with its content. Never set a fixed height — clipped text is a WCAG failure.
- Long words, URLs, and error codes wrap inside the alert rather than overflowing horizontally.
- On iOS, support Dynamic Type; on Android, use scalable text units (sp). The Android alert already scales its icon with the font scale.

## Platform-specific accessibility

### Web

- Default `role="alert"`, applied to the content wrapper. Use `role="status"` for non-urgent variants and `role=""` for alerts present on page load.
- Interactive elements inside the alert should be at least 44×44px.
- Do not add `aria-live` on top of the role — the role already sets it, and combining them can cause double announcements.
- `variant` defaults to `info`. An unrecognised value throws, so a typo fails loudly rather than rendering an unstyled alert.

### iOS

iOS behaves very differently from web, and this catches people out.

`Warp.Alert` applies `.accessibilityElement(children: .combine)`, so **the whole alert is a single accessibility element**. VoiceOver reads the title, subtitle, link, and button labels as one continuous announcement. The buttons and the link are *not* separately focusable — a VoiceOver user cannot swipe to them.

Actions are exposed instead:

| Alert content | How VoiceOver reaches it |
| --- | --- |
| Primary button | The **default action** — a double-tap on the combined element. |
| Secondary button | The **escape gesture** — a two-finger scrub. |
| Link | Exposed as a link trait on the combined element, not as a separate target. |

What this means in practice:

- **Write button labels that survive being read in a run-on sentence.** "Change payment method" works; "Continue" is meaningless once it is glued to the end of the body text.
- **Put the more important action in `primaryButton`.** It gets the double-tap; the secondary is reachable only by a gesture many users do not know.
- **Do not rely on a third action.** Only two are exposed, and only the first two map to gestures.
- The title is marked as a header; the subtitle explicitly is not.
- A view appearing on screen is **not** announced on its own. There is no live region. Post `UIAccessibility.post(notification: .announcement, ...)` or move VoiceOver focus to the alert yourself when it appears in response to a user action.
- `style` is required — there is no default variant, unlike web and Android.
- Support Dynamic Type and avoid constraining the alert's height.

### Android

`WarpAlert` sets no semantics of its own: no live region, no combined element, no heading.

- **TalkBack does not announce the alert when it appears.** You must add this yourself — pass a `modifier` with `Modifier.semantics { liveRegion = LiveRegionMode.Polite }`. Use `Assertive` only for genuinely urgent messages.
- Unlike iOS, TalkBack traverses the parts separately: icon, title, body, link, then buttons. The buttons and link are individually focusable, which is the behaviour most users expect.
- **The status icon is announced.** It carries a content description from the icon set, so TalkBack reads it before the title. Keep this in mind when judging how long the announcement is.
- The title is not exposed as a heading, so users cannot navigate to it by headings. If heading navigation matters on your screen, add `semantics { heading() }` via the modifier.
- `body` is required; `title` is optional. An alert with no title announces straight into the body text.
- `type` defaults to `WarpAlertType.Info`.
- Support scalable text (sp). Buttons and links need a minimum touch target of 48×48dp.

## Motion and animation

The web alert **does** animate. Showing or hiding it runs an expand or collapse height transition on the wrapper.

That transition does **not** respect `prefers-reduced-motion`, even though other Warp elements do. If reduced motion matters for your surface, you currently have to suppress the animation yourself or avoid toggling `show` on content that moves a lot of the page.

Never make the alert flash or pulse to attract attention — content that flashes more than three times per second is a WCAG failure and can trigger seizures.

## Testing

- **Screen readers**: test with VoiceOver on macOS and iOS, TalkBack on Android, and NVDA or JAWS on Windows. Confirm the alert is announced when it appears, and that the announcement is complete and understandable on its own.
- **Listen to the whole announcement**, not just your text. On web and Android the icon is announced too, so the real announcement is longer than the copy you wrote.
- **Timing**: reload the page with the alert already visible, and separately trigger it from a user action. Verify both behave as intended — the difference is where most bugs live.
- **iOS specifically**: swipe through the alert with VoiceOver. Confirm you cannot reach the buttons individually, and that the double-tap triggers the action you expect.
- **Keyboard only**: tab through the page with the alert visible, then hidden. Focus must never land on the alert container, must never enter a hidden alert, and every action must have a visible focus ring.
- **Zoom and text size**: check at 200% browser zoom, and at the largest Dynamic Type and Android font-size settings. Nothing should clip or overlap.
- **Colour**: check contrast for each of the four variants in every brand and in both light and dark mode. Then view the page in greyscale, and separately block the icon service — the message should still be unambiguous.
- **Automated checks**: run axe or Lighthouse to catch missing names and contrast failures, but do not treat a clean report as proof. Announcement timing and message quality can only be checked manually.

<component-questions />
