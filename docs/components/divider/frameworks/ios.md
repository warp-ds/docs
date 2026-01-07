# Divider - Frameworks
A divider creates separation of content.

## iOS

<FrameworkTabs 
  :tabs="[
    { name: 'Android', url: './android' },
    { name: 'iOS', url: './ios' }
  ]" 
  activeTab="iOS" 
/>

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

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| orientation | `"horizontal" \| "vertical"` | "horizontal" | The orientation of the divider, either horizontal or vertical. |
| style | `"solid" \| "dashed"` | "solid" | The line style of the divider, either solid or dashed. |