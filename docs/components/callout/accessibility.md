# Callout - Accessibility

Callouts are snippets of information, drawing attention to important content. A callout is anchored to something on screen — a button, a field, a piece of copy — and points at it with an arrow.

<ComponentsStatus />

## General

A callout works visually: a bubble and an arrow join a message to an element. Neither half of that pairing survives on its own. A screen reader user gets the message but not the arrow, and a user with low vision may see the bubble without ever registering what it points at.

Two consequences follow, and they shape everything on this page:

1. **The message must make sense without the arrow.** Write it so it names its subject — "Boosted ads get 3x more views", not "Press this to get more views".
2. **The callout must never be the only place information lives.** It is dismissible, it is not announced when it appears, and on some platforms it is hard to reach. Anything the user genuinely needs belongs in the page.

## Roles and semantics

### Web

`w-attention` renders a `div` with `role="img"` and a localized `aria-label` describing the type and arrow direction — for example "callout speech bubble pointing up" or "highlighted speech bubble pointing right". Translations ship for English, Norwegian, Swedish, Danish, and Finnish.

That role and label sit on a wrapper around the **arrow**, not around the message. They tell a screen reader user that a speech bubble is present and which way it points; they say nothing about what it is pointing at. The message itself is your slotted content, with whatever semantics you give it.

To connect the message to its target, give the message element an `id` and put `aria-details` on the target:

```html
<w-attention callout placement="top" show>
  <p id="boost-callout" slot="message">Boosted ads get 3x more views</p>
  <w-button slot="target" aria-details="boost-callout" variant="secondary">Boost ad</w-button>
</w-attention>
```

Wire this up yourself. Elements v2.8.0 set `aria-details` on the target automatically; that behaviour was removed in v2.9.0, so on any current version an unwired callout has no programmatic link to its target at all.

If the default "speech bubble pointing up" announcement is noise in your context, pass an empty `role` and your own `aria-label` — but only after you have connected the message with `aria-details`, or the message becomes orphaned.

### Reading order

Elements renders the message slot **before** the target for `top` and `left` placements, and **after** it for `bottom` and `right` placements. Reading order therefore follows visual order without any work on your part. Do not try to correct it with `tabindex` or CSS ordering.

### iOS and Android

Neither native component sets a role, a trait, or a grouping on the bubble. VoiceOver and TalkBack read the callout text as ordinary text where it falls in the layout, with nothing to mark it as a callout or link it to the element it describes.

If the connection matters, make it in the surrounding view — for example by grouping the callout and its anchor into a single accessibility element with a combined label.

## Announcements

Callout is **not a live region on any platform**. Showing one announces nothing. A screen reader user discovers the callout only if they happen to read past it, and a user who has already moved beyond that point in the page will never encounter it.

- If the user must hear the message, put it in the page as text, or use [Alert](/components/alert/overview.md), which is built to announce.
- Never treat a callout as an acknowledgement that something worked. Use [Snackbar](/components/snackbar/overview.md) or [Alert](/components/alert/overview.md).
- On Android, the popover type renders in a Compose `Popup`. It does not take accessibility focus when it appears, so TalkBack stays wherever the user was.

## Keyboard interaction

Keyboard interaction applies to web. The bubble itself is never focusable, and focus is never moved into the callout when it appears or restored anywhere when it closes. There is no focus trap, which is correct — a callout is not a dialog.

Both the close button and <kbd>Escape</kbd> emit a `close` event and nothing more. Your application must set `show` to `false` in response, or the callout stays on screen and the keyboard user is left with a control that does nothing.

Because <kbd>Escape</kbd> is so narrowly scoped, never build a flow where dismissing the callout is required to continue. Keyboard users must be able to reach everything behind and around it with the callout still open.

## Visual accessibility

### Colour and contrast

- The message text must reach **4.5:1** against the callout background. The callout background, border, and text tokens are defined per brand and per theme — use them together and do not override them. A hard-coded colour that passes for one brand will fail for another.
- The 2px border must reach **3:1** against whatever is behind the callout. This matters most for the inline type, which has no shadow to separate it from the page.
- The close icon is a meaningful control and needs **3:1** against the callout background.
- The arrow is the only thing that makes a callout a callout. Never remove the border or reduce its contrast to make the bubble look lighter.

### Colour independence

Callout has one colour on every platform. It cannot signal success, warning, or error, and nothing about it changes with the content of the message. If a message needs a status, it is not a callout — use [Alert](/components/alert/overview.md).

Do not add your own colour to a callout to imply a status. Users who cannot distinguish the colours get no signal, and users who can will read a meaning the design system does not support.

### Text resizing and Dynamic Type

- The bubble grows with its text on every platform. Do not constrain its height, and never truncate the message to make it fit — on Android the text is clipped rather than ellipsised, so a fixed width silently loses words.
- On iOS, Warp text styles are built with `relativeTo:`, so the callout text scales with Dynamic Type. Check the largest accessibility sizes: a one-line message can become four lines, and the callout may then cover the element it points at.
- On web, the callout must stay readable and fully visible at 200% zoom. A popover callout positioned against a small anchor is the case most likely to break, because the bubble grows but the anchor does not.
- Keep the message short. Every accessibility problem in this section gets worse the longer the text is.

## Motion and animation

Callout has no entry or exit animation on any platform. It appears and disappears immediately, so there is nothing for `prefers-reduced-motion` or the native Reduce Motion settings to act on.

## Testing

- **Screen readers**: read through the page with VoiceOver (macOS and iOS), TalkBack (Android), and NVDA or JAWS (Windows). Confirm the message is reachable and that it makes sense in isolation, without the arrow.
- **Keyboard only**: tab through the page with a callout open. Everything behind it must stay reachable, the close button must show a visible focus ring, and closing it must actually remove it.
- **Zoom and text size**: check at 200% browser zoom, and at the largest Dynamic Type and font-scale settings on the native platforms. Look for a bubble that now covers its own anchor.
- **Contrast**: check the text and border against the callout background for every brand and in both light and dark themes. Do not check one brand and assume the rest.
- **Dismissal**: confirm your code hides the callout in response to the close event. This is the most common bug with this component and no automated test will catch it for you.

<component-questions />
