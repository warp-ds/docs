# Page indicator - Accessibility

Page indicators communicate the current position and total within a sequence. They must remain supplementary to navigation that works with keyboard, touch, screen readers, voice control, and other assistive input.

<ComponentsStatus />

## General

An accessible carousel or pager communicates the sequence, the item currently visible, and how to move through it. The Page indicator provides compact visual orientation, but it cannot carry that experience alone.

- Give the surrounding carousel or pager a clear accessible name.
- Keep the current position synchronised with every navigation method.
- Provide labelled previous and next controls whenever the sequence is not fully operable through an established pager interaction.
- Expose a concise current-position value such as “Page 3 of 5” or “Image 3 of 5”.
- Keep the visual order, reading order, and navigation order consistent.
- Do not rely on dot colour or position as the only way to communicate essential information.

## Keyboard

On Web and Android, the Page indicator is passive and should not receive keyboard focus. Keyboard interaction belongs to the surrounding carousel or pager and its controls.

- Make previous and next controls reachable in a logical tab order with visible focus indicators.
- Use native Button controls so `Enter` and `Space` work without custom handlers.
- If the carousel supports arrow-key navigation, scope those keys to the carousel and document the behaviour consistently.
- Do not add a separate tab stop for every visual dot.
- After navigation, keep focus on the control that was used unless the product flow has a clear reason to move it.

On iOS, tapping a dot can update the selected page, but the dots have no supplied accessibility action. Provide an equivalent labelled navigation path for people using an external keyboard, Switch Control, or Voice Control.

## Screen reader

Screen reader users need the current position and total in words, not a series of unnamed shapes.

- Announce one concise status for the sequence, such as “Image 2 of 5”.
- Update the status when the visible item changes, regardless of whether the change came from a Button, gesture, keyboard command, or code.
- Avoid duplicate announcements from the pager, the visible item, and the Page indicator. Choose one clear source for changing position.
- Give previous and next controls labels that include direction and context, such as “Previous image” and “Next image”.
- If individual dots are implemented as controls, each one needs a unique name such as “Go to image 3” and a selected state. Do not expose decorative dots as separate screen reader stops.

## Visual

- Keep active and inactive dots distinguishable from each other and from the surface behind them.
- Check every supported brand and both light and dark themes. Semantic tokens can produce different contrast relationships by theme.
- When the indicator overlays images or other changing content, test every item in the sequence. Move it outside the content if any dot loses contrast.
- Check the component at 200% browser zoom and at narrow widths. The complete row must remain visible without clipping or horizontal page scrolling.
- Do not use animation, scale, or movement as the only indication that the selected page changed.
- Use appropriately sized controls for navigation. A visible 10px Web dot is not an adequate standalone touch target.

## Platform-specific accessibility

### Web

Warp Elements renders the Page indicator as one non-interactive image with a localised accessible label. For example, `selectedPage="3"` and `pageCount="5"` produces “Dot 3 is highlighted in a row of 5 dots”.

- `selectedPage` is 1-based and is clamped to the valid page range.
- `pageCount` is clamped to a minimum of one.
- The component has `pointer-events: none` and should not receive `tabindex`, click handlers, or Button semantics.
- Keep both properties updated with the visible content.
- The image role is not a live region. Verify the surrounding carousel's page-position announcement when navigation occurs.

### iOS

`Warp.PageIndicator` uses a 0-based `selectedPage` binding. Its 10×10pt dots accept taps, but the component supplies no accessible names, selected states, or accessibility actions for them. The row's padding does not enlarge the individual targets, which are below [Apple's recommended 44×44pt hit region](https://developer.apple.com/design/human-interface-guidelines/buttons). These gaps are tracked in [warp-ios#242](https://github.com/warp-ds/warp-ios/issues/242).

- Treat the dots as supplementary visual status. When the surrounding pager communicates the position, hide the indicator from assistive technology with `.accessibilityHidden(true)`.
- Give the pager a concise accessible label and value such as “Page 3 of 5”, plus labelled previous and next actions. Do not rely on dot taps for navigation.
- Keep the visible item, spoken position, and `selectedPage` binding synchronised. iOS renders at least two dots even when `pageCount` is one, and an out-of-range `selectedPage` leaves no dot selected. Omit the indicator for one item and keep the 0-based selected index within the sequence.
- Test the equivalent navigation path with VoiceOver, Switch Control, Voice Control, and an external keyboard. Respect Reduce Motion if the application adds movement beyond the component's colour transition.

### Android

`WarpPageIndicator` renders passive dots and uses a 0-based `currentPage`. Navigation belongs to the pager and its controls.

- Expose the current position through the pager or a surrounding semantics node so TalkBack can hear “Page 3 of 5”.
- Keep `currentPage` synchronised with gesture, Button, and programmatic navigation.
- Give previous and next controls clear content descriptions and follow [Android's 48×48dp recommended touch target](https://developer.android.com/develop/ui/compose/accessibility/api-defaults).
- Do not add click semantics to the visual dots unless the product intentionally implements and labels each one as a control.
- Test the pager and position announcement together; the dots themselves are supplementary visual status.

## Testing

- **Screen readers**: Test VoiceOver, TalkBack, and NVDA or JAWS. Confirm the sequence name, current position, total, and navigation controls are understandable without seeing the dots.
- **All navigation paths**: Change pages with buttons, gestures, keyboard commands, and programmatic updates. The visible item, active dot, and spoken status must stay synchronised.
- **Boundaries**: Verify a single-item sequence, the first and last pages of a two-item sequence, and the longest sequence the product permits. On iOS, check that the indicator is omitted for one item and that the selected index never falls outside its range.
- **Contrast and themes**: Check active and inactive dots over every content item, in every supported brand, and in light and dark themes.
- **Zoom and layout**: Test at 200% browser zoom and narrow widths. The row must remain centred, complete, and unclipped.
- **Automated checks**: Use axe or an equivalent scanner to catch missing names and invalid roles, then complete manual announcement and navigation testing.

<component-questions />
