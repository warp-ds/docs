# Divider

A divider creates separation of content.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/divider/overview), [Usage](https://warp-ds.github.io/docs/components/divider/usage), [Android](https://warp-ds.github.io/docs/components/divider/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/divider/frameworks/ios)

**Framework support:** Android, iOS

## Overview

A divider creates separation of content.

Native only

For the web implementation of a "divider", see [CSS - Border - Divide](https://warp-ds.github.io/docs/foundations/css-classes/divide-width).

A subtle line used to separate content horizontally, or vertically, into sections, making page content more comprehensive.

## Usage

> This page is still in progress in the public docs.

## Frameworks

### Android

A divider creates separation of content.

[Android](https://warp-ds.github.io/docs/components/divider/frameworks/android)[iOS](https://warp-ds.github.io/docs/components/divider/frameworks/ios)

```kotlin
@Composable
fun WarpDivider(
    modifier: Modifier = Modifier,
    orientation: Orientation = Orientation.Horizontal,
    dashed: Boolean = false
)
```

Warp supports horizontal and vertical dividers. The divider can also be either solid or dashed.

```kotlin
WarpDivider() // Basic usage, will fill width of parent
WarpDivider(
    modifier = Modifier.padding(dimensions.space2),
    orientation = Orientation.Vertical,
    dashed = true
)
```

Not supported

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier for the divider |
| orientation | Orientation.Horizontal Orientation.Vertical | Orientation.Horizontal | Orientation of the divider |
| dashed | Boolean | false | Style of the divider, solid if false |

### iOS

A divider creates separation of content.

[Android](https://warp-ds.github.io/docs/components/divider/frameworks/android)[iOS](https://warp-ds.github.io/docs/components/divider/frameworks/ios)

```swift
Warp.Divider(
    orientation: Orientation = .horizontal,
    style: LineStyle = .solid
)
```

```swift
Warp.Divider()
```

Warp supports horizontal and vertical dividers. The divider can also be either solid or dashed.

```swift
Warp.Divider(
    orientation: .vertical,
    style: .dashed
)
```

```swift
Warp.Divider().uiView
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| orientation | "horizontal" \| "vertical" | "horizontal" | The orientation of the divider, either horizontal or vertical. |
| style | "solid" \| "dashed" | "solid" | The line style of the divider, either solid or dashed. |
