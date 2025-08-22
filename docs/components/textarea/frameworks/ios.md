### Syntax

```swift
Warp.TextArea(
    title: String = "",
    additionalInformation: String? = nil,
    tooltipContent: AnyView? = nil,
    text: Binding<String>,
    placeholder: String = "",
    style: Warp.TextAreaStyle = .default,
    helpText: String? = nil,
    minHeight: CGFloat = 88
)
```
```swift
Warp.TextArea(
    title: "Title",
    text: $text,
    placeholder: "Please fill me"
)
```

### Visual options
There are a variety of variants supported for the TextArea component:

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
Warp.TextArea(
    title: "Title",
    text: $text,
    placeholder: "Please fill me"
).uiView
```

### Parameters

<api-table type=iOS component="TextArea" />