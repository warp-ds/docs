# Select - Frameworks
A select is a form input component that lets users choose one option from a predefined list.

## iOS

<!-- Insert framework tabs here !-->

### Syntax

```swift
Warp.Select(
    selectedOption: Binding<Warp.Select.SelectorOption?>,
    options: [Warp.Select.SelectorOption],
    placeholder: String = "",
    title: String = "",
    additionalInformation: String? = nil,
    tooltipInfoAction: (() -> Void)? = nil,
    style: Warp.TextFieldStyle = .default,
    helpText: String? = nil
)
```

### Usage

```swift
Warp.Select(
    selectedOption: $selectedOption,
    options: options,
    placeholder: "Select an option",
    title: "Select Option",
    additionalInformation: "Additional info",
    tooltipInfoAction: { /* Show popover with additional detail */ },
    style: .default,
    helpText: "This field is required."
)
```

Warning: The options array should not be empty to ensure proper functionality.

### Legacy support

By default Warp components return a SwiftUI View but a UIKit UIView is available as well:

```swift
Warp.Select(
    selectedOption: $selectedOption,
    options: options
).uiView
```

### Params

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| selectedOption | Binding |  | Binding to the currently selected option. |
| options | [Warp.Select.SelectorOption] |  | Array of options to display in the select dropdown. Should not be empty. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| placeholder | String | "" | Placeholder text shown when no option is selected. |
| title | String | "" | Label text displayed above the select field. |
| additionalInformation | String? | nil | Optional additional information displayed next to the label. |
| style | Warp.TextFieldStyle | .default | Visual style of the select field (default, disabled, readOnly, error). |
| helpText | String? | nil | Optional help text displayed below the select field. |