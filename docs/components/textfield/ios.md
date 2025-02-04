## Syntax

```swift
Warp.TextField(
    title: String = "",
    additionalInformation: String? = nil,
    tooltipContent: AnyView? = nil,
    leftIcon: Warp.Icon? = nil,
    prefix: String? = nil,
    text: Binding<String>,
    placeholder: String = "",
    suffix: String? = nil,
    rightIcon: Warp.Icon? = nil,
    style: Warp.TextFieldStyle = .default,
    helpText: String? = nil
)
```

### Visual options
There are a variety of variants supported for the TextField component:

```swift
enum Warp.TextAreaStyle {
    case `default`
    case disabled
    case error
    case readOnly
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.TextField(
    title: "Title",
    text: $text,
    placeholder: "Please fill me"
).uiView
```

## Params

<api-table type=iOS component="TextField" />