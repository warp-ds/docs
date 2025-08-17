

### Syntax

```swift example
Warp.PageIndicator(
    pageCount: Int,
    selectedPage: Binding<Int> = .constant(0)
)
```
```swift example
Warp.PageIndicator(pageCount: 5)
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.PageIndicator(pageCount: 5).uiView
```

### Parameters

<api-table type=iOS component="PageIndicator" />