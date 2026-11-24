# Combo box - Overview

A combo box combines an editable text input with a list of suggestions. Users can type a value or choose one suggestion.

See also [Select](/components/select/overview.md) and [Text field](/components/text-field/overview.md).

<ComponentsStatus />

## Examples

<ThemeSwitcher />

<combobox-example />

## General

Use a combo box when typing helps users find a value in a long list. Unlike Select, the input remains editable. It accepts free text unless the application requires a value from the suggestions.

The input and suggestion list work as one control. Typing narrows the suggestions, and choosing one fills the input. Give the field a visible label and explain when users must choose a listed value.

The list begins collapsed. Users can reveal suggestions with the list-navigation keys, and products can choose to show suggestions when the input receives focus. Keep focus visible on the input while users review suggestions. If a value is invalid, explain how to correct it beside the field.

## Availability

WARP provides `<w-combobox>` for Web through Elements. WARP does not provide a native iOS or Android Combo box.

## Anatomy

::: image-block
![An open combo box labelled City. The editable input contains “o”, and the suggestions Oslo, Trondheim and Tromsø appear below, with Oslo highlighted. Numbered callouts identify the field label, editable input, suggestion list and Oslo suggestion option.](/components/combo-box/overview-anatomy.png)
:::

1. **Field label**: Names the value the field asks for.
2. **Editable input**: Lets users type or edit a value.
3. **Suggestion list**: Shows values that match the entered text.
4. **Suggestion option**: Provides one value that users can choose.

<component-questions />
