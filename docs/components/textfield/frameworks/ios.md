# Text field - Frameworks
A text field is a single-line input component used for entering and editing textual data.

<ComponentsStatus />

## iOS

<FrameworkTabs />

### Syntax

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
    rightIconAction: @escaping () -> Void? = { nil },
    style: Warp.TextFieldStyle = .default,
    helpText: String? = nil
)
```

### Visual options
There are a variety of variants supported for the TextField component:

```swift
enum Warp.TextFieldStyle {
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

### Params

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
| leftIcon | Warp.Icon? | nil | An optional `Warp.Icon` displayed on the left side of the text field. |
| prefix | String? | nil | An optional string displayed before the text input. |
| placeholder | String | empty | Text to display when the text field is empty. |
| suffix | String? | nil | An optional string displayed after the text input. |
| rightIcon | Warp.Icon? | nil | An optional `Warp.Icon` displayed on the right side of the text field. |
| rightIconAction | `() -> Void?` | nil | An optional action for right icon |
| style | Warp.TextFieldStyle | .default | The style of the text field.  Use one of the predefined `TextFieldStyle` values: `.default`, `.disabled`, `.error`, or `.readOnly` |
| helpText | String? | nil | Optional `String` to display below the text field. |