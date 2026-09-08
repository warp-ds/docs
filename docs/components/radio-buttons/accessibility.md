# Radio buttons - Accessibility

Radio buttons let users choose one value from a compact row of button-shaped options.

<ComponentsStatus />

## General

The button shape must retain single-selection semantics. Users need to hear the question, identify each answer, and know which answer is selected. React and Vue use native radio inputs; keep those inputs and their associated labels. The iOS counterpart uses tappable text views and needs separate semantic and interaction checks.

- Give the group a visible, programmatically associated label.
- Keep every option's label visible and unique within the group.
- Use a logical reading order that matches the visual order.
- Place help and error text with the group and associate it programmatically.
- Keep links, menus, and other interactive controls outside the option labels.

## Keyboard interaction

React and Vue render native `input` elements with `type="radio"` and a shared name within each group. The browser provides the keyboard interaction.

| Key | Behaviour |
| --- | --- |
| `Tab` | Enters the group at the selected option, or an enabled option when none is selected. The next `Tab` leaves the group. |
| `Shift` + `Tab` | Moves through the group in the reverse tab order. With no selection, the entry option can differ between browsers. |
| `Arrow Right` / `Arrow Down` | Moves focus and selection to the next enabled option, wrapping at the end. |
| `Arrow Left` / `Arrow Up` | Moves focus and selection to the previous enabled option, wrapping at the beginning. |
| `Space` | Selects the focused option if it is not already selected. |

Do not add an extra tab stop to each visible label or implement a separate click-only selection model. Avoid using `Enter` as a custom selection key; in a form, it may submit the form instead.

This follows the [WAI-ARIA radio group pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/). Test both directions of entry when a group starts without a selection, because native browser behaviour can differ there.

## Screen reader considerations

The group should expose its label, and each option should expose its visible label, radio role, and checked state. Exact wording and whether a position such as “2 of 3” is announced depend on the browser and screen reader.

Keep group-level help concise: it may be heard again as users move between choices. After validation fails, provide a message that explains what to choose or correct. When submitting an invalid form, make the group reachable from the error summary or place focus on its first relevant input.

For filters that refresh results immediately, communicate the result update without moving focus away from the group. A concise result count is more useful than announcing the whole results list.

## Visual accessibility

- Keep focus distinguishable from selection. The shared web styles show a focus indicator around the group when an input has focus.
- The web button-style implementation may lose its visible selected cue in forced-colours mode: selection is shown through authored colours, with no distinct checked geometry or forced-colours treatment. Use standard [Radio](/components/radio/overview.md) when forced-colours support is required, and verify that its checked indicator remains visible.
- Meet 4.5:1 contrast for regular text, or 3:1 for large text. Control boundaries and state indicators need 3:1 contrast against adjacent colours where required to identify the control or state.
- Test at 200% text size and in a narrow viewport. Keep complete labels visible; use a vertical [Radio](/components/radio/overview.md) group when the connected row no longer fits.
- Meet the [WCAG 2.2 minimum target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) of 24×24 CSS pixels unless an applicable exception is met. Aim for 44×44 CSS pixels for comfortable touch use, and check the small size particularly carefully.

## Platform-specific accessibility

### React

`Toggle` with `type="radio-button"` renders a `fieldset` with the `radiogroup` role. Supply `title` for its visible `legend`. Each option receives a native radio input and an associated label.

- Use `helpText` for group-level guidance. The fieldset references it with `aria-describedby`; when `invalid` is set, it is also referenced as the error message.
- For controlled groups, keep `selected` to zero or one entry and replace it when `onChange` passes a new answer. Submit that entry from application state: React 2.3.0 does not map `option.value` to the native input value, so native `FormData` reports `"on"` instead.
- `Toggle` has no `required` prop and supplies neither native nor ARIA required semantics. Make a required question clear in its visible title and validate the selected entry in application state. Use `invalid` and `helpText` to explain an error.
- In React 2.3.0, `disabled` is not applied to the `radio-button` variant. If the flow needs unavailable options, use the standard [Radio](/components/radio/overview.md) component or present the unavailable choice as explanatory text outside the group. A dimmed appearance alone must not imply that an option is disabled.

### Vue

`w-toggle` with `radio-button` uses `w-field` to render a fieldset. With multiple options it has the `radiogroup` role. The `label` becomes a legend associated through `aria-labelledby`, and each option's native radio input is associated with its visible label.

- Use `v-model` for the selected value. Give separate groups distinct `id` values, because each group derives its shared input name from that ID.
- Use `hint` for supporting text. Field validation connects hint and error text to the fieldset and exposes required and invalid states. The `required` rule is handled by `w-field`; it is not a native `required` attribute on each radio input.
- Vue passes `disabled` to the native inputs, including overrides supplied on individual options. Check the visual treatment too: the button-style labels do not have a dedicated disabled treatment matching the standard Radio control. Prefer standard Radio when unavailable options must remain visibly distinguishable.

### iOS

`Warp.ButtonGroup(singleSelect: true)` provides the button-shaped single-selection interaction. In Warp iOS 0.0.86, its options are `Text` views with `onTapGesture`; it does not explicitly add Radio roles, selected-state traits, group semantics or keyboard handling. Do not assume the web keyboard and announcement behaviour applies to it.

- Test each option's name, activation and selected-state announcement with VoiceOver. Supply an accessible alternative if the interaction cannot be understood or operated.
- Place the visible question and supporting text in the surrounding view, then verify that VoiceOver presents them with sufficient context.
- Keep at least a 44×44pt activation area. The implementation uses fixed padding rather than an explicit minimum touch target.
- Test long labels and Dynamic Type. The connected `HStack` has no built-in wrapping or scrolling mode.
- Validate the selection in application state. The component has no built-in required, invalid or per-option disabled API.

### Elements, React 19 and Android

These libraries provide circular Radio controls rather than this button-shaped variant. Use the [Radio accessibility guidance](/components/radio/accessibility.md) for those implementations.

### Known gaps

| Implementation | Gap | Product workaround |
| --- | --- | --- |
| React and Vue button-style Radio | Selected appearance depends on colours that may be replaced in forced-colours mode. | Use standard Radio and verify the checked indicator. |
| React 2.3.0 | `disabled` is ignored; option values and required semantics are not forwarded to native inputs. | Use standard Radio for disabled choices; validate and submit the selected application state. |
| Vue 2.3.0 | Native disabled inputs lack a matching button-style disabled appearance. | Use standard Radio when unavailable options need a visible distinction. |
| iOS 0.0.86 | Explicit selection semantics and keyboard support are absent from the implementation. | Verify VoiceOver and hardware-keyboard operation; provide an accessible alternative where needed. |

## Testing

- **Keyboard**: In React and Vue, enter from both directions with and without a selection. Use all four arrow keys and Space. Check wrapping, visible focus, and that Tab leaves the group. Test hardware-keyboard activation separately on iOS.
- **Selection**: Change the answer repeatedly. Confirm that one option is checked and that the value used by the form or filter matches it.
- **Screen readers**: Test with VoiceOver on iOS and with Safari, and NVDA with a supported Windows browser. Listen for the group name, option names, checked state, help, and any validation error.
- **Validation and submission**: In Vue, trigger field validation on a required choice without an answer. In React and iOS, validate the selected application state. Check that the error explains how to continue and focus reaches the right context. Confirm that the submitted value matches the visible selection.
- **Layout and themes**: Check regular and small sizes, both width settings, long translations, enlarged text, light and dark themes, and forced colours. Labels must remain readable and selection must remain identifiable.
- **Automated checks**: Run an accessibility scanner for names and relationships, then complete the keyboard and screen reader checks. A scanner cannot confirm that the interaction makes sense.

<component-questions />
