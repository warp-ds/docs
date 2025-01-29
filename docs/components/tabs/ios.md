### Syntax

```swift
Warp.Tabs(
    tabs: [TabItem],
    selectedIndex: Binding<Int>
)

Warp.TabItem(
    title: String,
    icon: Warp.Icon? = nil
)
```
```swift
Warp.Tabs(
    tabs: tabItems,
    selectedIndex: $selectedIndex
)

Warp.TabItem(
    title: "Title",
    icon: .plus
)
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Tabs(
    tabs: tabItems,
    selectedIndex: $selectedIndex
).uiView
```

### Parameters

<api-table type=iOS component="Tabs" />
