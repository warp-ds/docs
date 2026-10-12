# Combo box - Usage

A combo box combines an editable text input with a list of suggestions. Users can type a value or choose one suggestion.

See also [Select](/components/select/overview.md) and [Text field](/components/text-field/overview.md).

<ComponentsStatus />

## Guidelines

### When to use

- Use a combo box when users benefit from typing to narrow a long list.
- Use it when free text is allowed but suggestions can make entry faster or more consistent.
- Use it for remote search when suggestions depend on the text entered, such as a location or job-title lookup.

### When not to use

- For a short list where the value must come from the available options, use [Select](/components/select/overview.md).
- When suggestions do not help users enter the value, use [Text field](/components/text-field/overview.md).
- For several selections, use a suitable multi-select pattern. A combo box stores one value.
- Do not use a combo box only to navigate to another page or trigger an action.

## Values and selection

Decide whether the field accepts free text or requires a listed value before choosing its validation behaviour. The component does not enforce that decision for the application.

- If free text is allowed, keep the user's text when it does not match a suggestion.
- If a listed value is required, validate after the user has had a reasonable chance to finish and explain how to correct an unmatched value.
- Keep suggestion labels clear and distinguish similar choices with words users can recognise.
- Preserve the entered value after an unrelated validation error.

Choosing a suggestion closes the list and fills the field. Check the control in its surrounding form so leaving the field does not commit a suggestion unexpectedly.

## Suggestions and filtering

Show suggestions that help users recognise the right choice. Keep labels short, distinct, and ordered predictably. Put distinguishing words early when options have similar labels.

The default filtering matches typed text in option labels. For remote or fuzzy results, set `disable-static-filtering` and supply the options from your application. See the [Elements guide](/components/combo-box/frameworks/elements) for the available settings.

- Update results as the query changes, but avoid replacing the list so abruptly that users lose their place.
- Keep the option order stable unless relevance clearly changes.
- Ensure the surrounding product communicates when a remote search returns no suggestions.
- Do not put essential information only in visual highlighting. Matched-text emphasis is optional.
- Use plain, readable option labels.

## Opening the list

Keep the list collapsed until the user starts interacting. Opening on focus can help when a short, useful set of suggestions is available before typing, such as recent searches. Avoid it when loading or showing the full data set would add noise.

Do not place buttons, links, checkboxes, or other interactive controls inside a suggestion. The list uses a single-selection interaction, and DOM focus remains in the input while the active suggestion changes.

## Labels, help text, and errors

Give every combo box a short visible label. Use placeholder text only as an example or input hint; it disappears when the user types. Add help text when users need to know whether they may enter a custom value, which data source is searched, or what format to use.

When validation fails, keep the error next to the field and state what resolves it. “Choose a city from the list” is more useful than “Invalid value”. Do not rely on a border colour or error icon alone.

## Best practices

### Give the field a visible label

<DoDont>
<Do imgurl="/docs/components/combo-box/DoDonts/usage-visible-label-do.png" imgalt="A City combo box with the visible label “City” above a “Start typing” placeholder.">

Give the combo box a visible label.

**Why**: A persistent label keeps the field’s purpose clear while users review or correct the value.

</Do>
<Do not imgurl="/docs/components/combo-box/DoDonts/usage-visible-label-dont.png" imgalt="A combo box with no visible label, using the placeholder “Search for a city” as its only label.">

Use a placeholder as the field’s only label.

**Why**: Placeholders disappear during input and do not reliably convey the field’s purpose.

</Do>
</DoDont>

### Explain how to correct unmatched values

<DoDont>
<Do imgurl="/docs/components/combo-box/DoDonts/usage-validation-do.png" imgalt="The City combo box contains “Atlantis” in an invalid state, with the message “Choose a city from the list” directly below.">

When a value must match a suggestion, explain the rule and how to fix the error.

**Why**: Specific guidance tells users that free text is not accepted and what to do next.

</Do>
<Do not imgurl="/docs/components/combo-box/DoDonts/usage-validation-dont.png" imgalt="The City combo box contains “Atlantis” in an invalid state shown only by its border, with no explanatory message.">

Rely on invalid styling alone.

**Why**: Styling signals a problem but does not tell users what to change.

</Do>
</DoDont>

<component-questions />
