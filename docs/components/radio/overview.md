# Radio - Overview

Radio buttons let users select one option from a set of mutually exclusive choices.

See also [Checkbox](/components/checkbox/overview.md), [Select](/components/select/overview.md), [Switch](/components/switch/overview.md), and [Radio buttons](/components/radio-buttons/overview.md).

<ComponentsStatus />

## Examples

<ThemeSwitcher />

<style-isolate>
    <div>
        <h3 class="h4">Default</h3>
        <w-radio-group label="Delivery method" name="delivery-default">
            <w-radio value="pickup">Pick up</w-radio>
            <w-radio value="shipping">Ship to me</w-radio>
        </w-radio-group>
    </div>
    <div>
        <h3 class="h4">With selection</h3>
        <w-radio-group label="Delivery method" name="delivery-selected">
            <w-radio value="pickup" checked>Pick up</w-radio>
            <w-radio value="shipping">Ship to me</w-radio>
        </w-radio-group>
    </div>
    <div>
        <h3 class="h4">Disabled</h3>
        <w-radio-group label="Delivery method" name="delivery-disabled">
            <w-radio value="pickup" disabled>Pick up</w-radio>
            <w-radio value="shipping" disabled checked>Ship to me</w-radio>
        </w-radio-group>
    </div>
    <div>
        <h3 class="h4">Invalid</h3>
        <w-radio-group label="Delivery method" name="delivery-invalid" invalid help-text="Choose a delivery method">
            <w-radio value="pickup">Pick up</w-radio>
            <w-radio value="shipping">Ship to me</w-radio>
        </w-radio-group>
    </div>
</style-isolate>

## General

Use Radio for a short, visible list where users must choose exactly one option. Selecting a new option replaces the previous selection. This makes the relationship between the choices clear without opening another control.

Radio differs from nearby selection components:

- Use [Checkbox](/components/checkbox/overview.md) when users may select any number of options, including none.
- Use [Select](/components/select/overview.md) when the option list is long or space is limited.
- Use [Switch](/components/switch/overview.md) for an independent setting that takes effect immediately.
- Use [Radio buttons](/components/radio-buttons/overview.md) when the choices need the stronger visual treatment of button-shaped options.

A radio group needs a visible group label and a shared name. Every option also needs a concise label. Help text and an error message belong to the group because the selection rule applies to the choices together.

## States

::: image-block
![Checked and unchecked Radio buttons in default, hover, focus, error, error hover, and disabled states.](/components/radio/overview-states.svg)
:::

Each option can be checked or unchecked. Interaction and validation add the following states:

- **Default**: Available for selection and not currently interacted with.
- **Hover**: The pointer is over the option or its label.
- **Focus**: The option has keyboard focus. Keep the focus indicator visible.
- **Error**: The group needs attention, usually because a required choice is missing or invalid.
- **Error hover**: The invalid option is also under the pointer.
- **Disabled**: The option cannot be changed. A disabled option can remain visibly selected.

Only one option can be checked within a group. Hover and focus are temporary interaction states; they do not change the selected value by themselves.

## Radio group

::: image-block
![A Radio group labelled “Label” with three vertically arranged options and supporting help text.](/components/radio/overview-radio-group.svg)
:::

A group combines a label, two or more Radio options, and optional help or error text. Arrange options vertically by default so labels are easy to scan. Horizontal groups are suitable only for a few short, familiar options with enough room at all supported text sizes.

The Web and Android group can begin with no selection. The current iOS `RadioGroup` API requires a selected option binding, so products that need an initially empty required group must model and test that flow separately on iOS.

### Names per platform

The same concepts use different API names across platforms:

| Figma | Web (Elements) | iOS | Android |
| --- | --- | --- | --- |
| Checked | `checked` | `isSelected` / `selectedOption` | `selected` / `selectedOption` |
| Default | Default properties | `.default` | `enabled = true`, `isError = false` |
| Error | `invalid` | `.error` | `isError = true` |
| Disabled | `disabled` | `.disabled` | `enabled = false` |

## Anatomy

::: image-block
![Radio anatomy diagram showing the circular indicator and option label, with unchecked and checked examples.](/components/radio/overview-anatomy.svg)
:::

1. **Radio indicator**: Shows whether the option is selected. Only one indicator can be selected within a group.
2. **Option label**: Names the choice and forms part of the option's interactive target.

<component-questions />
