---
pendingReview: true
title: Elevation — iOS
designLanguage: /design-language/elevation/
---

# Elevation

On iOS, elevation combines a Warp shadow (`Warp.Shadow`) with an elevated surface colour token. Shadows are the same for every brand; surface colours change with the brand and with light and dark mode.

## Shadows

`Warp.Shadow` has four sizes: `.small`, `.medium`, `.large` and `.xLarge`. Each shadow is drawn as two black layers with no horizontal offset ([Shadow.swift](https://github.com/warp-ds/warp-ios/blob/main/Sources/Shadow/Shadow.swift)):

| Shadow | Layer 1 (opacity, blur radius, y-offset) | Layer 2 (opacity, blur radius, y-offset) |
| --- | --- | --- |
| `.small` | 16%, 0.5, 1 | 12%, 3, 1 |
| `.medium` | 16%, 4, 3 | 10%, 3, 3 |
| `.large` | 10%, 10, 10 | 20%, 6, 6 |
| `.xLarge` | 20%, 14, 14 | 10%, 9, 9 |

Shadows use the same black at the same opacity in light and dark mode. To separate surfaces in dark mode, also use the elevated surface tokens below.

### Add a shadow in SwiftUI

Use the `addShadow(_:isPressed:)` view modifier. When `isPressed` is `true`, the blur radius and y-offset are reduced so the element appears closer to the surface.

```swift
struct FilterTile: View {
    @Environment(\.warpTheme) private var theme

    var body: some View {
        Warp.Text("Filters", style: .bodyStrong)
            .padding(Warp.Spacing.spacing200)
            .background(
                RoundedRectangle(cornerRadius: Warp.Border.borderRadius100)
                    .fill(theme.token.surfaceElevated200)
            )
            .addShadow(.small)
    }
}
```

To react to touches, pass the pressed state from a `ButtonStyle`, as the Warp sample app does ([ShadowView.swift](https://github.com/warp-ds/warp-ios/blob/main/SampleApp/Components/ShadowView.swift)):

```swift
struct ElevatedButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .padding(Warp.Spacing.spacing200)
            .background(
                RoundedRectangle(cornerRadius: Warp.Border.borderRadius100)
                    .fill(Warp.Token.surfaceElevated200)
            )
            .addShadow(.medium, isPressed: configuration.isPressed)
    }
}
```

### Add a shadow in UIKit

Call `addShadow(_:)` on a `UIView`. It adds two shadow sublayers that copy the view's `backgroundColor` and `layer.cornerRadius`, replacing any Warp shadow added before, so set both first. Call `layoutShadowLayers()` after layout so the shadow follows the view's size:

```swift
final class TileViewController: UIViewController {
    private let tile = UIView()

    override func viewDidLoad() {
        super.viewDidLoad()
        tile.backgroundColor = Warp.UIToken.surfaceElevated200
        tile.layer.cornerRadius = Warp.Border.borderRadius100
        tile.addShadow(.medium)
        view.addSubview(tile)
    }

    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        tile.layoutShadowLayers()
    }
}
```

## Surface tokens

The surface tokens in the theme set the colour of each elevation level. They are part of the semantic colour tokens (see [Tokens](/ios/foundations/tokens)):

| Token | Hover / active variants |
| --- | --- |
| `surfaceSunken` | — |
| `surfaceElevated100` | `surfaceElevated100Hover`, `surfaceElevated100Active` |
| `surfaceElevated200` | `surfaceElevated200Hover`, `surfaceElevated200Active` |
| `surfaceElevated300` | `surfaceElevated300Hover`, `surfaceElevated300Active` |

## Card and bottom sheet backgrounds

Two helpers combine a surface token, rounded corners and a shadow ([View+.swift](https://github.com/warp-ds/warp-ios/blob/main/Sources/Helpers/View%2B.swift), [UIView+.swift](https://github.com/warp-ds/warp-ios/blob/main/Sources/Helpers/UIView%2B.swift)):

| Helper | SwiftUI | UIKit | Default colour | Corners | Shadow |
| --- | --- | --- | --- | --- | --- |
| Card | `withCardBackground(_:cornerRadius:isPressed:)` | `addCardBackground(_:cornerRadius:)` | `surfaceElevated200` | All, 16 pt | `.small` |
| Bottom sheet | `withBottomSheetBackground(_:cornerRadius:)` | `addBottomSheetBackground(_:cornerRadius:)` | `surfaceElevated100` | Top only, 16 pt | `.large` |

In SwiftUI the default colour comes from the `.warpTheme(_:)` environment; in UIKit it comes from `Warp.UIToken`. You can pass your own colour and corner radius. The UIKit bottom sheet helper rounds the corners with a mask built from the view's current bounds, so call it after the view has been laid out.

```swift
VStack(alignment: .leading, spacing: Warp.Spacing.spacing100) {
    Warp.Text("Saved search", style: .title4)
    Warp.Text("3 new results", style: .caption)
}
.padding(Warp.Spacing.spacing200)
.withCardBackground()
```
