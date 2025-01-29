

## Syntax

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
## Visual options

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

<api-table type=iOS component="Text" />