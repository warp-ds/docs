# Expandable - Accessibility

Expandable is a layout component used for creating content that can be expanded and collapsed. A title stays visible at all times; selecting it shows or hides the content underneath.

<ComponentsStatus />

## General

An expandable hides content behind a control. Two things decide whether that works for everyone:

1. **The control has to say what it does and what state it is in.** A sighted user sees the chevron point down or up. A screen reader user only knows the content is collapsed if the component tells them.
2. **Hidden content has to be truly hidden, and shown content truly reachable.** Users must not tab into content they cannot see, or be unable to reach content that is open.

The three platforms meet these needs very differently. Web is the most complete: the title is a real button that reports whether it is expanded. iOS and Android do not announce the state at all. Read the section for the platform you are building on rather than assuming the web behaviour carries over.

## Known gaps

These are limits of the component itself, not of how you use it. Where there is a workaround, use it until the component is fixed.

| Platform | Gap | Effect | Workaround |
| --- | --- | --- | --- |
| Web | No focus outline. The browser outline is removed; keyboard focus shows only as an underline on the title. | The focused expandable is hard to spot, especially in the box types where the underline is the only change. | None from outside the component — the style is set inside its shadow DOM. Check that the underline is visible against your background. |
| Web | The chevron icon carries a text description ("Arrow pointing down" / "Arrow pointing up", in the page language) and is not hidden from assistive technology. It sits inside the button, so it is likely read as part of the button's name. | Users may hear "What does shipping cost? Arrow pointing down, collapsed, button". Not yet confirmed with every screen reader. | None recommended. `no-chevron` removes it, but also removes the visual cue for sighted users. |
| iOS | The open or closed state is not announced. The chevron's label always describes a downward arrow, because the icon is rotated rather than swapped. | VoiceOver users cannot tell whether the content is showing. | None in the component API. |
| iOS | Reduce Motion is not respected. The open and close animation runs regardless. | Users who have asked for less motion still get it. | Pass `isAnimated: false` when `@Environment(\.accessibilityReduceMotion)` is `true`. |
| Android | Only the chevron is a button. TalkBack reaches the title and the chevron as two separate stops, and announces the chevron by its icon description with no title and no state. | TalkBack users hear "Arrow pointing down, button" with no indication of what it opens, or whether it is open. | None in the component API. |
| iOS, Android | The title is not exposed as a heading. | Screen reader users cannot jump between expandables by heading. | None in the component API. |

## Keyboard interaction

Keyboard interaction applies to web. The title is a native `<button>`, so it behaves like any other button.

| Key | Action |
| --- | --- |
| Tab | Moves focus to the title. If the expandable is open, the next Tab moves into any links, buttons or fields in the content. |
| Shift + Tab | Moves focus backwards in the same order. |
| Enter or Space | Opens or closes the expandable. Focus stays on the title. |

- There is no arrow-key movement between expandables, and no Home or End. Each expandable is a separate stop in the tab order.
- Collapsed content is not in the tab order. Keyboard users cannot tab into anything they cannot see.
- If you close an expandable from code while focus is inside its content, focus is lost. Move focus to the title before you remove `expanded`.

## Screen reader considerations

### Web

The title is a `<button>` with `aria-expanded` set to `true` or `false`, so screen readers announce the state along with the title — for example *"What does shipping cost?, collapsed, button"*. The exact wording and order vary between screen readers.

- **Write titles that make sense out of context.** Screen reader users often list every button on a page. "More info" five times is useless; "Shipping costs", "Return policy" and "Warranty" are not.
- **Use `heading-level` when the titles act as section headings.** It wraps the button in a heading of that level (`h2`, `h3`, …) without changing how it looks, so users can move between expandables with their screen reader's heading navigation. Pick the level that fits the page's heading outline.
- **Always provide a title.** If an expandable has neither the `title` attribute nor a `title` slot, it renders no button at all, and the content can never be opened.
- **Keep custom titles simple.** Anything you put in the `title` slot becomes the button's name. An icon in the title should be decorative, so it is not read out as part of the name.
- **Collapsed content is not announced.** It is hidden from assistive technology as well as visually. With `animated`, the content is hidden as soon as it starts to close, and removed from the page when the animation finishes.
- Opening an expandable does not move focus or announce the new content. Users read on from the title to reach it, which is the expected behaviour for this pattern.

### iOS

The whole title row is a single button. VoiceOver reads the title and the chevron's label together, followed by "Button". A double-tap opens or closes the expandable. The state is not announced — see [Known gaps](#known-gaps).

### Android

The title is plain text and the chevron is a separate button. TalkBack stops on each in turn. The chevron is announced by its icon description, "Arrow pointing down", followed by "Button" — with no title and no state. A double-tap on the chevron opens or closes the expandable; the title does nothing. See [Known gaps](#known-gaps).

## Visual accessibility

### Colour and contrast

- Title and content text must meet at least **4.5:1** against the surface, or **3:1** for large text.
- The chevron needs at least **3:1** against the surface, because it is the only visual sign that the title can be opened.
- Use the Warp tokens as they are. The box surface is defined per brand and per theme, so a custom text or surface colour that passes in one brand or in light mode can fail in another.

### Colour independence

The open or closed state is shown by the chevron's direction and by whether the content is visible — never by colour. Hover and focus add an underline, which also works without colour. Keep it that way if you customise the component: do not signal the expanded state by colour alone.

### Text resizing and reflow

- Content must stay readable and usable at 200% zoom, with no loss of content or functionality.
- The expandable grows with its content. Never give it a fixed height — clipped text is a WCAG failure.
- On web, long words and URLs wrap inside the content rather than overflowing.
- On iOS, test at the largest Dynamic Type sizes. On Android, the chevron already scales with the system font size; use scalable text units (sp) in your content.

## Platform-specific accessibility

### Web

- The title is a native `<button>` with `aria-expanded`. No extra ARIA is needed — do not add `role` or `aria-expanded` yourself.
- Use `heading-level` to put the title in the page's heading structure.
- Collapsed content is hidden from all users and from assistive technology, and is out of the tab order.
- Focus is shown only as an underline. See [Known gaps](#known-gaps).
- The title row is only as tall as the title text, and the box padding sits outside it. Check it reaches at least 24×24px (the WCAG AA minimum), and preferably 44×44px.

### iOS

- The whole title row is one button, including the empty space before the chevron.
- The state is not announced, and the title is not a heading. See [Known gaps](#known-gaps).
- The box padding sits outside the button, so the tappable row is only as tall as the title text. Check it reaches 44×44pt.
- `isExpanded` sets only the starting state. You cannot open or close the expandable from code after it renders.

### Android

- Only the chevron is a button. Its touch target is 48×48dp.
- The state is not announced, and the title is not a heading. See [Known gaps](#known-gaps).
- The chevron scales with the system font size.
- `initiallyExpanded` sets only the starting state. You cannot open or close the expandable from code after it renders.

## Motion and animation

- **Web**: with `animated`, the content opening and closing follows `prefers-reduced-motion` — when the user has asked for less motion, the content appears and disappears without animating. The chevron's short rotation still runs.
- **iOS**: animated by default, and does not follow Reduce Motion. Turn it off with `isAnimated: false` when Reduce Motion is on — see [Known gaps](#known-gaps).
- **Android**: always animated. The component sets no reduced-motion handling of its own, so test it with the system's Remove animations setting turned on.

## Testing

- **Screen readers**: test with VoiceOver on macOS and iOS, TalkBack on Android, and NVDA or JAWS on Windows. Confirm the title is announced as a control, and on web, that "collapsed" and "expanded" are announced when you open and close it.
- **Listen to the full name on web.** Check whether the chevron's description is read as part of the title, and record what you hear in each screen reader.
- **Keyboard only (web)**: tab through a group of expandables. Focus must land on each title, must never land inside collapsed content, and must move into the content once it is open. Check that you can see where focus is at every step.
- **Heading navigation (web)**: if you set `heading-level`, use your screen reader's heading list to confirm every expandable appears at the level you expect.
- **Touch targets**: on iOS and Android, open and close every expandable with a finger, not a stylus or pointer. On Android, confirm users understand that only the chevron responds.
- **Zoom and text size**: check at 200% browser zoom, and at the largest Dynamic Type and Android font-size settings. Nothing should clip or overlap.
- **Reduced motion**: turn on reduced motion on each platform and open and close an expandable.
- **Automated checks**: run axe or Lighthouse to catch missing names and contrast failures, but do not treat a clean report as proof. Whether a title makes sense out of context can only be checked by a person.

<component-questions />
