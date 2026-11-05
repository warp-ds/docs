---
title: Spacing — iOS
---

# Spacing

Warp spacing values are `CGFloat` constants on `Warp.Spacing`, measured in points. They are the same for every brand.

## Semantic values

Use the semantic values for common screen layout. They are defined in terms of the scale below ([Spacing.swift](https://github.com/warp-ds/warp-ios/blob/main/Sources/Spacing/Spacing.swift)).

| Constant | Value | Use |
| --- | --- | --- |
| `screenMargin` | 16 (`spacing200`) | Horizontal padding from the screen edges. |
| `screenBottomSpacing` | 16 (`spacing200`) | Vertical spacing at the bottom of page content, typically inside a scroll view. |
| `sectionSpacing` | 24 (`spacing300`) | Vertical spacing between major sections of a page. |
| `sectionInnerSpacing` | 16 (`spacing200`) | Vertical spacing between blocks within one section. |

## Scale

| Constant | Points |
| --- | --- |
| `spacing25` | 2 |
| `spacing50` | 4 |
| `spacing100` | 8 |
| `spacing150` | 12 |
| `spacing200` | 16 |
| `spacing250` | 20 |
| `spacing300` | 24 |
| `spacing400` | 32 |
| `spacing500` | 40 |
| `spacing600` | 48 |
| `spacing700` | 56 |
| `spacing800` | 64 |
| `spacing900` | 72 |
| `spacing1000` | 80 |
| `spacing1100` | 88 |
| `spacing1200` | 96 |
| `spacing1400` | 112 |
| `spacing1600` | 128 |

The number in each name is the value in points multiplied by 12.5, so `spacing200` is 16 points.

## Use spacing in SwiftUI

```swift
ScrollView {
    VStack(alignment: .leading, spacing: Warp.Spacing.sectionSpacing) {
        VStack(alignment: .leading, spacing: Warp.Spacing.spacing100) {
            Warp.Text("Details", style: .title3)
            Warp.Text("Pick-up only", style: .body)
        }
        VStack(alignment: .leading, spacing: Warp.Spacing.spacing100) {
            Warp.Text("Seller", style: .title3)
            Warp.Text("Member since 2019", style: .body)
        }
    }
    .padding(.horizontal, Warp.Spacing.screenMargin)
    .padding(.bottom, Warp.Spacing.screenBottomSpacing)
}
```

## Use spacing in UIKit

The constants are plain `CGFloat` values, so they work with Auto Layout and stack views:

```swift
let stack = UIStackView()
stack.axis = .vertical
stack.spacing = Warp.Spacing.spacing100
stack.isLayoutMarginsRelativeArrangement = true
stack.directionalLayoutMargins = NSDirectionalEdgeInsets(
    top: 0,
    leading: Warp.Spacing.screenMargin,
    bottom: Warp.Spacing.screenBottomSpacing,
    trailing: Warp.Spacing.screenMargin
)
```
