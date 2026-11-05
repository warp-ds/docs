---
title: Shape — iOS
---

# Shape

Corner radius and border width values are `CGFloat` constants on `Warp.Border`, measured in points. They are the same for every brand.

## Corner radius

| Constant | Points |
| --- | --- |
| `borderRadius25` | 2 |
| `borderRadius50` | 4 |
| `borderRadius100` | 8 |
| `borderRadius200` | 16 |

## Border width

| Constant | Points |
| --- | --- |
| `borderWidth12` | 1 |
| `borderWidth25` | 2 |
| `borderWidth50` | 4 |

Both sets are defined in [Border.swift](https://github.com/warp-ds/warp-ios/blob/main/Sources/Border/Border.swift). Use them with a border colour token from the theme, such as `border` or `borderStrong` (see [Tokens](/ios/foundations/tokens)).

## Use shape values in SwiftUI

```swift
struct DraftLabel: View {
    @Environment(\.warpTheme) private var theme

    var body: some View {
        Warp.Text("Draft", style: .caption)
            .padding(.horizontal, Warp.Spacing.spacing100)
            .padding(.vertical, Warp.Spacing.spacing50)
            .overlay(
                RoundedRectangle(cornerRadius: Warp.Border.borderRadius50)
                    .stroke(theme.token.border, lineWidth: Warp.Border.borderWidth12)
            )
    }
}
```

## Use shape values in UIKit

```swift
let box = UIView()
box.backgroundColor = Warp.UIToken.backgroundSubtle
box.layer.cornerRadius = Warp.Border.borderRadius100
box.layer.borderWidth = Warp.Border.borderWidth12
box.layer.borderColor = Warp.UIToken.border.cgColor
```

## Card and sheet backgrounds

The card and bottom sheet background helpers round corners for you. Their default corner radius is 16 points. See [Elevation](/ios/foundations/elevation#card-and-bottom-sheet-backgrounds).
