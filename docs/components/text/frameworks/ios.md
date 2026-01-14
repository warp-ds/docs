# Text - Overview
Pre-defined styles provide a font and size.

<ComponentsStatus />

## iOS

<FrameworkTabs />

### Syntax

```swift example
Warp.Text(
    _ text: String,
    style: Warp.TextStyle,
    color: Color = Warp.Color.token.text
)
```
```swift example
Warp.Text("This is a text", style: .body)
```
### Visual options

There are a variety of variants supported for the Text component:

```swift example
enum Warp.TextStyle {
    case display
    case title1
    case title2
    case title3
    case title4
    case title5
    case title6
    case preamble
    case body
    case bodyStrong
    case caption
    case captionStrong
    case detail
    case detailStrong
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Text("This is a text", style: .body).uiView
```

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | The text to be displayed |
| style | Warp.TextStyle |  | Sets the appearance of the text - font and size.  Use one of the predefined `TextStyle` values: `.display`, `.title1`, `.title2`, `.title3`, `.title4`, `.title5`, `.title6`, `.preamble`, `.body`, `.bodyStrong`, `.caption`, `.captionStrong`, `.detail`, or `.detailStrong` |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| color | Color | Warp.Token.text | A solid color for the text. |