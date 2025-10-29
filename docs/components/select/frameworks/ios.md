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

<api-table type=iOS component="Select" />