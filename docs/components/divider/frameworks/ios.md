### Syntax

```swift
Warp.Divider(
    orientation: Orientation = .horizontal,
    style: LineStyle = .solid
)
```

### Basic usage

```swift
Warp.Divider() 
```

### Visual options
Warp supports horizontal and vertical dividers. The divider can also be either solid or dashed.

```swift
Warp.Divider(
    orientation: .vertical,
    style: .dashed
)
```

### Legacy support

```swift
Warp.Divider().uiView
```

### Parameters

<api-table type=iOS component="Divider" />