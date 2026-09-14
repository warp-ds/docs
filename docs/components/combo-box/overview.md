# Combo box - Overview

A combo box combines an editable text input with a list of suggestions. Users can type a value or choose one suggestion.

See also [Select](/components/select/overview.md) and [Text field](/components/text-field/overview.md).

<ComponentsStatus />

## Examples

<ThemeSwitcher />

<combobox-example />

## General

Use a combo box when suggestions help users enter a value, especially when the list is too long to scan in a Select. Unlike Select, the input remains editable. The component accepts free text unless the application validates the value against the available suggestions.

The input and suggestion list work as one control. By default, typing filters the available suggestions. Choosing a suggestion returns one value: Elements fills the input, while the controlled React component requires the application to update it. The application supplies the options, decides whether to query a remote source, and handles any rule that limits the value to a listed option.

## States

- **Default**: The input is empty and the suggestion list is closed.
- **Focus**: The input has keyboard focus. The focus indicator remains on the input while users move through suggestions.
- **Open**: The suggestion list is visible. One suggestion can be active and previewed in the input without being committed as the field value.
- **Filled**: The input contains typed text or a selected suggestion.
- **Invalid**: The value does not meet an application rule. Pair this state with a message that explains how to fix the value.
- **Disabled**: The input cannot receive focus or be changed.

The Elements implementation is collapsed by default and opens when the user types or presses a list-navigation key. Products can also open the list when the input receives focus.

## Availability

Combo box is available for Web through Elements and the legacy React package. The current framework matrix does not list Vue, React 19, iOS, or Android implementations.

| Platform | Component name |
| --- | --- |
| Web (Elements) | `<w-combobox>` |
| React | `Combobox` |

## Anatomy

::: image-block
![An open combo box labelled City. The editable input contains “o”, and the suggestions Oslo, Trondheim and Tromsø appear below, with Oslo highlighted. Numbered callouts identify the field label, editable input, suggestion list and Oslo suggestion option.](/components/combo-box/overview-anatomy.png)
:::

1. **Field label**: Names the value the field asks for.
2. **Editable input**: Lets users type or edit a value.
3. **Suggestion list**: Shows values that match the entered text.
4. **Suggestion option**: Provides one value that users can choose.

<component-questions />
