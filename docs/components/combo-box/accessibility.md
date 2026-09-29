# Combo box - Accessibility

A combo box combines editable text with a list of suggestions. Users must be able to type in the field, review the available suggestions, and select a suggestion without moving focus out of the field.

<ComponentsStatus />

## General

Use the combo box as an editable, single-value field. Its suggestions help users reach a value, but do not restrict the value to the list unless the application validates it.

- Give the field a concise, visible label. Placeholder text can provide an example or hint, but must not replace the label.
- Use short, distinct option labels in a logical order. Keep each option's value stable so the selected result does not change when suggestions update.
- Explain whether users may enter a value that is not in the list. If the value must match an option, validate that rule in the application and provide a specific error message.
- Associate persistent guidance and validation feedback with the field. Do not rely on colour, position, or placeholder text to communicate an error.
- Keep asynchronous results tied to the current query. Ignore stale responses and provide a loading message when a delay would otherwise leave the field's state unclear.

WARP supplies the editable field, popup semantics, option navigation, and selection events. The application supplies the option data, asynchronous filtering, validation policy, and any focus movement after a failed submit.

## Keyboard

The editable field is the only part of the combo box in the page's tab order. DOM focus stays in the field while `aria-activedescendant` identifies the active suggestion in the popup.

| Key | WARP behaviour |
| --- | --- |
| `Tab` | Moves focus to the next control and closes the popup. With `selectOnBlur` enabled, leaving the field selects the active suggestion, or an option whose value exactly matches the input. |
| `Shift` + `Tab` | Moves focus to the previous control and closes the popup, with the same blur-selection behaviour. |
| `Arrow Down`, `Arrow Up`, `Page Down`, `Page Up`, `Home`, or `End` | When the popup is closed, the first press opens it without activating a suggestion. When it is open, these keys navigate the suggestions. |
| `Arrow Down` | Moves to the next suggestion. After the last suggestion, it removes the active suggestion rather than wrapping to the first. |
| `Arrow Up` | Moves to the previous suggestion. When no suggestion is active, it starts at the last suggestion; before the first suggestion, it removes the active suggestion. |
| `Page Down` / `Page Up` | Moves towards the last or first suggestion in steps of up to ten. Legacy React has a [known end-boundary limitation](#legacy-react). |
| `Home` / `End` | Moves to the first or last suggestion while the popup is open. |
| `Enter` | Selects the active suggestion and closes the popup. When no suggestion is active, WARP closes the popup and does not prevent the event, so an enclosing form can handle it. |
| `Escape` | Closes the popup without changing the value. Pressing it again while the popup is closed clears the field. |
| Printable characters and standard editing keys | Edit the text and update the suggestions. Left and Right Arrow and platform text-editing shortcuts remain available to the browser. |

The default for `selectOnBlur` is `true`. Set it to `false` when users must confirm a suggestion explicitly with Enter or a pointer. Do not add tab stops to the listbox or its options.

## Names, roles, and announcements

The field uses the ARIA [editable combobox with a listbox popup](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) model. It has the `combobox` role with `aria-autocomplete="list"`, an expanded or collapsed state, and a relationship to the popup. The popup has the `listbox` role and each suggestion has the `option` role. The active option exposes `aria-selected="true"` and is referenced by `aria-activedescendant`; this changes the active suggestion without moving DOM focus.

Screen reader users should be able to determine:

- the field's label, current value, and whether it is required, invalid, or disabled;
- whether the suggestion popup is expanded;
- the active suggestion and its position in the list, where the browser and screen reader provide it;
- the number of suggestions or that no suggestions are available; and
- the help or error message associated with the field.

Elements writes a localised suggestion count to a live status while the popup is open. Legacy React writes a localised result count to a live status. Source inspection establishes that the status is present, but not the exact announcement or its order in each browser and screen reader combination.

When validation fails, set the invalid state and provide help text that explains how to correct the value. A non-empty free-text value is not automatically invalid because it is absent from the suggestion list. If the product requires a listed value, the application must enforce that rule and decide whether to focus the first invalid field or a validation summary after submission.

## Visual accessibility

- Keep keyboard focus visible on the editable field. The active suggestion must also remain visible and distinct from hover and the committed value.
- Text, including labels, suggestions, and messages, needs at least [4.5:1 contrast, or 3:1 for large text](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Visible input boundaries and custom focus indicators need at least [3:1 contrast against adjacent colours](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).
- Do not use colour alone for the invalid state or active suggestion. Keep an error message available, and preserve the active option's programmatic state.
- `matchTextSegments` adds visual emphasis to matching text. Ensure every option remains understandable when users cannot perceive that emphasis.
- Let the label, value, suggestions, and messages resize to [200% without loss of content or functionality](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html). At a width equivalent to [320 CSS pixels](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html), the popup must stay associated with the field without clipping essential content or introducing two-dimensional scrolling.
- Ensure the field and each suggestion meet the WCAG 2.2 [24 by 24 CSS-pixel minimum target size or its spacing exception](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html). A larger target can make touch input easier.
- If the application adds animation to the popup or loading state, do not make motion necessary to understand the available suggestions.

Recheck all these states after changing WARP tokens, component styles, popup dimensions, or option content.

## Platform-specific accessibility

### Web Elements

WARP Elements 2.11.0 filters suggestions by their visible label and displays the label after selection while storing and submitting the option value. It opens on typing; `openOnFocus` is `false` by default. Built-in filtering is enabled by default and can be disabled for application-managed results.

- The component assigns the combo box ARIA attributes to its internal `w-textfield`, which delegates keyboard focus to a nested HTML input. Include this composed structure in browser and screen reader testing; source inspection does not establish how every combination announces it.
- `autocomplete` defaults to `off`. Set an appropriate browser autocomplete token when the field collects a recognised personal-data purpose.
- With application-managed filtering, the live suggestion count still matches the typed text against the supplied option labels. Fuzzy or otherwise non-literal results can therefore be visible while the status reports no suggestions. Compare the live status with the visible list during testing.
- The component accepts free text. `required` marks the internal input as required, but does not enforce that the value matches a suggestion.

### Legacy React

WARP React 2.3.0 is a controlled component. Update its `value` in both `onChange` and `onSelect`; selection only invokes the callback and does not update the field by itself.

- Filtering and the live result count use each option's `value`, while the popup displays `label` when one is provided. If `label` and `value` differ, typing the visible label may not find the option. Prefer a human-readable value or map the selected text to an internal identifier in application state.
- The controlled `value` is also the text displayed after selection. The component does not provide separate controlled display text and submitted-value fields.
- The Page Down end-boundary check can clear the active suggestion instead of moving to the last suggestion for some list lengths. Test this key with ten or more results and do not rely on it until the implementation is corrected.
- The native input receives the combo box role, popup relationships, label, help text, invalid state, and standard input properties supplied by the application.

### iOS and Android

WARP does not provide combo box implementations for iOS or Android. The Web keyboard and ARIA behaviour on this page does not describe a native mobile control. Products that need the same task on a native platform must choose an appropriate platform control, provide equivalent labelling and validation, and test it with VoiceOver or TalkBack.

## Testing

- **Keyboard**: Enter and leave the field with Tab and Shift + Tab. Starting with a closed popup, use every navigation key and confirm the first press opens the popup without activating a suggestion. Continue through both ends of a list with at least ten suggestions, select with Enter, and press Escape once and twice.
- **Blur selection**: Repeat the keyboard test with `selectOnBlur` enabled and disabled. Confirm that Tab commits a highlighted option only when intended and that free text is preserved according to the product's validation rule.
- **Screen readers**: Test at least one supported browser and screen reader combination on both desktop platforms you support. Confirm the label, value, combo box role, expanded state, active suggestion, result count, selected value, help text, required state, disabled state, and error are understandable. Record the browser, screen reader, operating system, and versions.
- **Free text and validation**: Test an allowed free-text value, an exact option value, and an invalid value. Submit each case and confirm the stored value, error message, announcement, and application-managed focus destination.
- **Dynamic results**: Test loading, a single result, no results, a stale response, and a fuzzy result that does not contain the query. Confirm the visible options and live count agree. In legacy React, repeat with different option labels and values.
- **Zoom and reflow**: Test 200% text resizing and a viewport 320 CSS pixels wide. Long labels and errors must wrap, the active suggestion must remain visible, and the popup must not cover the field's focus indicator.
- **Contrast and targets**: Check default, hover, active, selected, focus, invalid, and disabled states in every supported brand and theme. Measure pointer targets after any density or style customisation.
- **Automated checks**: Run axe or an equivalent scanner for names, roles, states, and relationships, then complete the keyboard and screen reader scenarios above. Automated checks do not establish that the interaction or announcements are usable.

<component-questions />
