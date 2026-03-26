# Button Pill

Button pill allows users to toggle an element to their favourites.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/button-pill/overview), [Usage](https://warp-ds.github.io/docs/components/button-pill/usage), [iOS](https://warp-ds.github.io/docs/components/button-pill/frameworks/ios)

**Framework support:** iOS

## Overview

Button pill allows users to toggle an element to their favourites.

## Usage

> This page is still in progress in the public docs.

## Frameworks

### iOS

Button pill allows users to toggle an element to their favourites.

[iOS](https://warp-ds.github.io/docs/components/button-pill/frameworks/ios)

```swift
Warp.ButtonPill(
    type: ButtonPillType,
    selected: Binding<Bool>
)
```

```swift
Warp.ButtonPill(
    type: .overlay,
    selected: $isSelected
)
```

There are a variety of variants supported for the ButtonPill component:

```swift
enum Warp.ButtonPillType {
    /// A pill with an overlay appearance.
    case overlay
    /// A pill with a flat appearance.
    case flat
}
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.ButtonPill(
    type: .overlay,
    selected: $isSelected
).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | Warp.ButtonPillType |  | The type of the button (flat or overlay). |
| selected | Binding Bool |  | A binding to the selected state of the button. |
