# Radio buttons - Usage

Radio buttons let users choose one value from a compact row of button-shaped options.

<ComponentsStatus />

## Guidelines

### When to use

- For a small set of short, mutually exclusive choices, such as “Day”, “Week”, and “Month” for a rental period.
- For a single filter where seeing the alternatives helps users compare them, such as “All”, “Private”, and “Dealer” for seller type.
- When the current choice should remain visible while users continue working on the page.

### When not to use

- For a long list of options. Use [Select](/components/select/overview.md), or [Combo box](/components/combo-box/overview.md) when users need to search the choices.
- For multiple independent selections. Use [Checkbox](/components/checkbox/overview.md).
- For actions such as saving or deleting. Use [Button](/components/button/overview.md).
- For navigation between content panels. Use [Tabs](/components/tabs/overview.md).
- For an independent on/off setting that takes effect immediately. Use [Switch](/components/switch/overview.md).

## Behaviour

A group can start with one selected option or with no selection. Once an option is selected, activating it again keeps it selected. Users change their answer by selecting another option.

If a filter needs a way to include everything, make “All” an explicit option. Do not make a second click on the selected option clear it; that changes the established radio interaction.

### States

| State | Meaning |
| --- | --- |
| Unselected | The option is available but is not the current answer. |
| Selected | The option is the current answer. Its filled background distinguishes it from the alternatives. |
| Hover | The pointer is over an unselected option. Hover alone does not change the answer. |
| Focus | Keyboard focus is inside the group. Preserve the visible focus indicator as well as the selected state. |
| Validation error | The group needs attention. Show a specific message near the options; do not depend on the option borders changing colour. |

## Interaction

Clicking or tapping an option selects it. With a keyboard, users enter the group with `Tab` and move between options with the arrow keys. Arrow-key navigation also changes the selection. See [Accessibility](/components/radio-buttons/accessibility.md) for the complete keyboard pattern.

In a form, choosing an answer should leave users in the form so they can review it before submitting. For a filter that updates results immediately, keep focus on the chosen option and preserve the rest of the user's filters. Do not navigate to another page or move focus as a side effect of choosing.

## Content guidelines

Use short, parallel labels: “Day”, “Week”, “Month”, rather than mixing a duration with an action such as “Book now”. Each label should name a distinct answer. Keep units and phrasing consistent across the group.

<DoDont>
<Do imgurl="/docs/components/radio-buttons/DoDonts/usage-group-label-do.svg" imgalt="Pick up and Ship to me appear beneath the group label Delivery method.">

Give the choices a visible group label, such as “Delivery method”.

**Why**: The question stays clear when the control is separated from surrounding content or reached with assistive technology.

</Do>
<Do not imgurl="/docs/components/radio-buttons/DoDonts/usage-group-label-dont.svg" imgalt="Pick up and Ship to me appear without a group label.">

Leave the options to explain the whole question on their own.

**Why**: Nearby page copy may supply context visually without naming the group programmatically.

</Do>
</DoDont>

## Placement

Place the group close to the field or results it controls. Keep its options together in a stable, logical order.

Check the full set of labels at narrow widths, with translations, and with enlarged text. If the row no longer fits, use a vertical [Radio](/components/radio/overview.md) group so the complete labels remain visible. Avoid clipping labels, reducing the text size to force a fit, or spreading one connected group over several rows.

Use the full-width layout when it aligns the control with neighbouring fields. A short group does not need to stretch across a wide desktop page.

## Best practices

<DoDont>
<Do imgurl="/docs/components/radio-buttons/DoDonts/usage-initial-selection-do.svg" imgalt="The Delivery method group starts with neither Pick up nor Ship to me selected.">

Start without a selection when the answer must come from the user, such as how they want to receive an item.

**Why**: A required choice asks users to decide explicitly. Restore an existing answer when they return to edit it.

</Do>
<Do not imgurl="/docs/components/radio-buttons/DoDonts/usage-initial-selection-dont.svg" imgalt="Ship to me is already selected even though the user has not chosen a delivery method.">

Preselect a consequential answer simply because it is first in the implementation or benefits the product.

**Why**: Users may continue without noticing that a decision has been made for them.

</Do>
</DoDont>

<component-questions />
