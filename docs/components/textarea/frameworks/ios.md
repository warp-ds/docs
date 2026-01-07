# Text area - Overview
A text area allows users to input extended text content that covers multiple lines.

## iOS

<!-- Insert framework tabs here !-->

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

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | Binding String |  | Binding to the text content. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String | empty | The main title text to display. |
| additionalInformation | String? | nil | Optional text to display after the title. |
| tooltipContent | AnyView? | nil | An optional view to display when the tooltip icon is tapped. |
| placeholder | String | empty | Text to display when the text area is empty. |
| style | Warp.TextAreaStyle | .default | The style of the text area.  Use one of the predefined `TextAreaStyle` values: `.default`, `.disabled`, `.error`, or `.readOnly` |
| helpText | String? | nil | Optional `String` to display below the text area. |
| minHeight | CGFloat | 88 | Minimum height for the text area. |