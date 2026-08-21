# Radio - Accessibility

Radio buttons let users select one option from a set of mutually exclusive choices.

<ComponentsStatus />

## General

An accessible Radio group communicates three things: the question being asked, every available option, and which option is selected. Users must be able to understand and change the selection with a keyboard, a screen reader, touch, voice control, and enlarged text.

- Give every group a visible label. Programmatically associate that label with the group rather than repeating it in each option.
- Give every option a unique, visible label and a stable value.
- Keep options in a logical DOM and reading order that matches the visual order.
- Express the selected, disabled, required, and invalid states programmatically as well as visually.
- Associate help and error text with the group. Do not rely on colour or position alone.
- Use the Warp components without replacing their native interaction with click handlers on generic elements.

## Keyboard

Radio groups use a single tab stop. Once focus enters the group, arrow keys move between the options.

| Key | Expected behaviour |
| --- | --- |
| `Tab` | Moves focus into the group, normally to the selected option or the first enabled option when none is selected. A later `Tab` moves to the next control after the group. |
| `Shift` + `Tab` | Moves focus into the group from the opposite direction, or leaves it for the preceding control. |
| `Arrow Down` / `Arrow Right` | Moves focus and selection to the next enabled option. Movement wraps from the last option to the first. |
| `Arrow Up` / `Arrow Left` | Moves focus and selection to the previous enabled option. Movement wraps from the first option to the last. |
| `Space` | Selects the focused option. |

Disabled options are skipped during arrow-key navigation. Do not add separate tab stops to every option or use `Enter` as a custom selection key; both conflict with the established Radio interaction.

On Web, the current Warp Elements implementation provides roving `tabindex`, arrow-key wrapping, disabled-option skipping, and Space selection. Test keyboard behaviour again if application code changes option order or conditionally removes options.

## Screen reader

Screen readers should announce the group label, the option label, the Radio role, its position in the set where supported, and whether it is selected or disabled. The user should hear enough context to answer without seeing nearby text.

- Use one group label, not a heading that only looks associated by position.
- Keep labels concise. Screen reader users hear the group context repeatedly while moving through options.
- Associate persistent help text before interaction and a specific error message after validation.
- When a required group fails validation, announce that the group is invalid and make the error discoverable from the group.
- If a failed submit moves focus, place it on the first invalid group or provide a validation summary with a link to the group. Do not move focus when the user is still choosing.
- Do not hide the circular indicator while leaving only the text. Voice control and magnification users benefit from a visible, recognisable target.

## Visual

- Keep the focus indicator visible and distinct from hover, checked, and error states.
- Ensure the selected indicator and the control boundary have at least 3:1 contrast against adjacent colours. Text needs at least 4.5:1 contrast, or 3:1 for large text.
- Never use colour alone to communicate invalid or disabled states. Pair the error styling with text and expose disabled state programmatically.
- Let option labels, group labels, and messages reflow at 200% browser zoom and at large system text sizes. Do not set a fixed group height.
- Keep the circular control aligned with the first line when a label wraps.
- On Web, meet the WCAG 2.2 minimum target size of 24×24 CSS pixels and aim for a 44×44 CSS-pixel touch target. Use at least 44×44pt on iOS and 48×48dp on Android.

## Platform-specific accessibility

### Web

Warp Elements exposes each `w-radio` with the `radio` role and programmatic checked, disabled, and invalid states through `ElementInternals`. `w-radio-group` renders a fieldset with the `radiogroup` role and connects its visible label and help text to the group.

- Always set a shared `name` so the selected value participates in form submission.
- Prefer `w-radio-group` over manually coordinating standalone options. It supplies group labelling, roving focus, validation, and keyboard navigation.
- Keep the group label visible even when the surrounding page already has a heading; a heading does not replace the accessible group name.
- Do not override `role`, `tabindex`, or the component's arrow-key handling.
- The component's required validation message defaults to “Please select an option.” Supply a more specific message when the question benefits from it.

These details were verified against Warp Elements 2.11.0, the version used by this documentation site.

### iOS

`Warp.Radio` is a custom SwiftUI control. It exposes visual default, error, and disabled styles, but the current implementation does not add explicit Radio traits, selected-state semantics, group semantics, or an enlarged minimum activation frame.

- Test `Warp.Radio` and `Warp.RadioGroup` with VoiceOver before release; do not assume the visual selection is announced as a Radio selection.
- Provide a concise accessible label for each option in the surrounding view where needed.
- Preserve a minimum 44×44pt activation area even though the visible circle is smaller.
- `Warp.RadioGroup` requires a selected option binding. An initially empty required group needs product-specific modelling and accessibility testing.
- Vertical layout is the default. If using the horizontally scrolling layout, verify that every option remains reachable and understandable with VoiceOver and large Dynamic Type sizes.

### Android

`WarpRadio` uses Compose `selectable` semantics with `Role.RadioButton`, merges its label with the control, and exposes selected and enabled state. Its `isError` property changes the visual treatment. `WarpRadioGroup` applies `selectableGroup` semantics; its optional title is marked as a heading.

- Use `WarpRadioGroup` so TalkBack understands that the options belong together.
- The component uses the theme's minimum touch size. Do not reduce it below 48×48dp.
- Vertical layout is the default. Test horizontal groups with TalkBack, increased font size, and narrow screens because the row scrolls horizontally.
- Help and error text are visible, but the current implementation does not explicitly connect that text to the Radio group through semantics. Verify the full announcement and add screen-level context if TalkBack does not expose the message with the options.

## Known implementation gaps

- On Web, `aria-errormessage` currently refers to `error-message`, while the rendered help/error element uses `help-text` as its identifier. The text is still included through `aria-describedby`, but do not rely on `aria-errormessage` alone until the identifiers match.
- On iOS, explicit Radio role, selected trait, and group semantics are not present in the component source. Treat VoiceOver verification as required for every implementation.
- On Android, help and error text do not have an explicit semantic association with the group.

These are component limitations, not reasons to duplicate the control. Prefer a small, tested platform-level accommodation and remove it when the underlying component is corrected.

## Testing

- **Keyboard**: Tab into and out of each group. Use all four arrow keys and Space; confirm movement wraps, selection follows focus, and disabled options are skipped.
- **Screen readers**: Test VoiceOver on macOS and iOS, TalkBack on Android, and NVDA or JAWS on Windows. Confirm the group label, option label, selected state, disabled state, and error are understandable.
- **No initial selection**: Submit a required group without choosing. Confirm the group is marked invalid, the error is announced, and focus reaches the right context.
- **Selection changes**: Change the answer using keyboard, touch, and screen reader gestures. Confirm only one option remains selected and the stored value matches the visible choice.
- **Zoom and text size**: Check at 200% browser zoom and the largest practical Dynamic Type and Android font settings. Labels and errors must wrap without clipping or overlap.
- **Contrast and themes**: Check unchecked, checked, focus, error, and disabled states in every supported brand and in light and dark themes.
- **Automated checks**: Run axe or an equivalent scanner for names, roles, states, and relationships, then complete manual input and announcement testing. Automated checks cannot prove that a Radio group behaves correctly.

<component-questions />
