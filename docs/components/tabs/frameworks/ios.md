# Tabs

## iOS

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

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| tabs | [Warp.TabItem] |  | An array of `Warp.TabItem` objects to display as selectable tabs. |
| selectedIndex | Binding Int |  | A binding to the index of the currently selected tab. |