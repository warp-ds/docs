# Combo box - Accessibility

A combo box lets users type in a field and choose a suggestion from a list without moving keyboard focus away from the input.

<ComponentsStatus />

## Labels and validation

- Give the field a visible label. A placeholder disappears as users type and does not replace a label.
- Explain whether users can enter a value outside the suggestions. WARP accepts free text; if a listed value is required, validate it in the application and pair `invalid` with `help-text` that says how to correct it.
- Keep suggestion labels distinct and results relevant to the current query, especially when the application loads them asynchronously.

## Keyboard

The input is the combo box's tab stop. Up and Down Arrow open and navigate suggestions, `Enter` chooses the active suggestion, and `Escape` closes the list. When the list is already closed, `Escape` clears the value. `Tab` moves to the next control.

By default, leaving the field can select the active suggestion (`selectOnBlur` is `true`). Set it to `false` when selection should require `Enter` or a pointer action. In Elements 2.11.0, typing a first character with `Shift` changes the value but does not open suggestions; a list-navigation key opens them.

## Screen readers

Elements sets combo box, listbox, and option roles, tracks the active suggestion, and provides a live suggestion count while the list is open. Announcements vary by browser and screen reader. In the combinations your product supports, check the field's label, value, role, expanded state, active suggestion, result count, required or invalid state, and help or error text.

When the application supplies its own filtered results, compare the announced count with the visible suggestions. Elements 2.11.0 still counts literal matches in option labels, so a fuzzy result can be visible while the status says “No suggestions”.

## Visual accessibility

- Keep focus on the input and the active suggestion visually clear. Do not rely on colour alone to show the active option or an error; explain errors in text.
- Check [text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [control and focus-indicator contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) in every supported brand and theme.
- At 200% text resize and a width equivalent to [320 CSS pixels](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html), keep the field, suggestions, and messages readable without clipping or two-dimensional scrolling. Check pointer targets against the [24×24 CSS-pixel minimum or its exceptions](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).
- If the application animates the popup or loading state, keep the available suggestions understandable without motion.

## Platform-specific guidance

The guidance above describes Web Elements. WARP does not provide a native Combo box for iOS or Android; choose a suitable native control for the task and test its labels, suggestions, and validation with VoiceOver or TalkBack.

## Testing

- Use the keyboard to enter and leave the field, type an initial uppercase character, navigate suggestions, choose with `Enter`, and close or clear with `Escape`. Repeat with `selectOnBlur` enabled and disabled.
- Use a supported browser and screen reader to check the label, active suggestion, result count, and validation message. Include no results and application-managed fuzzy results. Record the browser, operating system, and screen reader versions.
- Check focus, active option, errors, contrast, target size, and reflow in the supported brands and themes. Automated accessibility scans can find missing semantics, but they do not replace the interaction checks above.

<component-questions />
