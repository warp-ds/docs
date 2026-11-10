---
pendingReview: true
title: Tokens — iOS
designLanguage: /design-language/tokens/intro/
---

# Tokens

WARP tokens for iOS are Swift properties and constants. Colour tokens change with the brand and with light and dark mode; spacing, shape and shadow values are the same for every brand.

## Token types

| Type | API | Varies by brand | Page |
| --- | --- | --- | --- |
| Semantic colours | `TokenProvider` / `UITokenProvider` | Yes | This page |
| Component colours | `ColorProvider` / `UIColorProvider` | Yes | This page |
| Data visualisation colours | `Warp.DatavizToken` / `Warp.DatavizUIToken` | No | This page |
| Spacing | `Warp.Spacing` | No | [Spacing](/ios/foundations/spacing) |
| Corner radius and border width | `Warp.Border` | No | [Shape](/ios/foundations/shape) |
| Shadows | `Warp.Shadow` | No | [Elevation](/ios/foundations/elevation) |
| Text styles | `Warp.Typography` | Typeface only | [Typography](/ios/foundations/typography) |

The colour token files are generated from [warp-ds/tokens](https://github.com/warp-ds/tokens). Brand primitive palettes (such as `FinnColors`) are internal to the package, so use the semantic or component tokens instead of raw colours.

## Semantic colour tokens

Semantic colour tokens describe a role, such as `textSubtle` or `backgroundNegative`, rather than a colour. Each brand provides its own values for the same set of names, so code that uses semantic tokens works for every brand.

The token names are defined by the `TokenProvider` protocol (SwiftUI `Color`) and the `UITokenProvider` protocol (`UIColor`) in [TokenProvider.swift](https://github.com/warp-ds/warp-ios/blob/main/Sources/Colors/Tokens/TokenProvider.swift). Both protocols have the same 136 names, in five groups:

| Group | Count | Examples |
| --- | --- | --- |
| `text` | 11 | `text`, `textSubtle`, `textLink`, `textInverted`, `textDisabled`, `textNegative` |
| `icon` | 24 | `icon`, `iconSubtle`, `iconPrimary`, `iconSelected`, `iconWarning`, `iconInverted` |
| `background` | 47 | `background`, `backgroundSubtle`, `backgroundPrimary`, `backgroundPositiveSubtle`, `backgroundInfo` |
| `surface` | 10 | `surfaceSunken`, `surfaceElevated100`, `surfaceElevated200`, `surfaceElevated300` |
| `border` | 44 | `border`, `borderStrong`, `borderSelected`, `borderNegative`, `borderFocus` |

Most roles also come in `Hover` and `Active` variants, for example `backgroundPrimaryHover` and `backgroundPrimaryActive`. The status roles are `Positive`, `Negative`, `Warning` and `Info`, and many of them have a `Subtle` variant.

### Use semantic tokens in SwiftUI

Read the theme from the environment and use its `token` property. This follows the brand set with `.warpTheme(_:)` (see [Theming](/ios/foundations/theming)).

```swift
import SwiftUI
import Warp

struct StatusRow: View {
    @Environment(\.warpTheme) private var theme

    var body: some View {
        HStack {
            Warp.Text("Payment", style: .body)
            Spacer()
            Warp.Text("Received", style: .bodyStrong, color: theme.token.textPositive)
        }
        .padding(Warp.Spacing.spacing200)
        .background(theme.token.backgroundSubtle)
    }
}
```

`Warp.Token` returns the same tokens for the global `Warp.Theme`. It is shorter to write, but doesn't follow `.warpTheme(_:)`:

```swift
Warp.Text("Updated 2 hours ago", style: .caption, color: Warp.Token.textSubtle)
```

To get the tokens for a specific brand regardless of the current theme, use `Warp.Brand`'s `token` property, for example `Warp.Brand.dba.token.background`.

### Use semantic tokens in UIKit

`Warp.UIToken` returns `UIColor` tokens for the global `Warp.Theme`. `Warp.Brand`'s `uiToken` property returns them for a specific brand.

```swift
let label = UILabel()
label.textColor = Warp.UIToken.textSubtle

let container = UIView()
container.backgroundColor = Warp.UIToken.background
container.layer.borderColor = Warp.UIToken.border.cgColor
```

`UIColor` tokens are dynamic, so a view's `backgroundColor` or a label's `textColor` updates when the appearance changes. A `CGColor` taken from a token, as for `layer.borderColor` above, is resolved once and doesn't update by itself.

## Component colour tokens

Some colours are specific to one component and are not part of the semantic set. They are exposed as properties on `ColorProvider` (SwiftUI) and `UIColorProvider` (UIKit) in [ColorProvider.swift](https://github.com/warp-ds/warp-ios/blob/main/Sources/Colors/ColorProvider.swift):

| Component | Properties |
| --- | --- |
| Badge | `badgeNeutralBackground`, `badgePositiveBackground`, `badgeInfoBackground`, `badgeWarningBackground`, `badgeNegativeBackground`, `badgeSponsoredBackground`, `badgePriceBackground` |
| Button | `buttonPrimaryBackground`, `buttonPrimaryBackgroundHover`, `buttonPrimaryBackgroundActive` |
| Button pill | `buttonPillBackgroundHover`, `buttonPillBackgroundActive` |
| Callout | `calloutBackground`, `calloutBorder` |
| Card | `cardBackground` |
| Navigation bar | `navbarIconSelected`, `navbarBorderSelected` |
| Page indicator | `pageIndicatorBackground`, `pageIndicatorBackgroundHover` |
| Pill (suggestion) | `pillSuggestionBackground`, `pillSuggestionBackgroundHover`, `pillSuggestionBackgroundActive` |
| Switch | `switchHandleBackground`, `switchHandleBackgroundHover`, `switchTrackBorder`, `switchTrackBorderHover` |
| Tooltip | `tooltipBackgroundStatic` |

Create a `ColorProvider` from the environment theme, or a `UIColorProvider` for a brand:

```swift
struct ListingCard: View {
    @Environment(\.warpTheme) private var theme

    var body: some View {
        let colors = ColorProvider(theme: theme)

        Warp.Text("Sofa", style: .title4)
            .padding(Warp.Spacing.spacing200)
            .background(colors.cardBackground)
    }
}
```

```swift
let colors = UIColorProvider(theme: .blocket)
badgeView.backgroundColor = colors.badgeInfoBackground
```

`Warp.Color` and `Warp.UIColor` return the same providers for the global `Warp.Theme`. The `init(token:)` initialisers on both providers are deprecated; use `init(theme:)`.

## Data visualisation tokens

Data visualisation tokens are for charts and similar graphics. There is one set for all brands: `Warp.DatavizToken` returns `Color` values and `Warp.DatavizUIToken` returns `UIColor` values ([DatavizTokens.swift](https://github.com/warp-ds/warp-ios/blob/main/Sources/Colors/Tokens/DatavizTokens.swift)). Like the other colour tokens, each has a light and a dark value.

| Group | Roles |
| --- | --- |
| `background` | `Primary`, `Secondary`, `Category1`–`Category8`, `Positive`, `Warning`, `Negative`, `Neutral`, each with `Highlight`, `Subtle` and `SubtleHighlight` variants |
| `line` | `Primary`, `Secondary`, `Category1`–`Category8`, `Positive`, `Warning`, `Negative`, `Neutral`, each with a `Highlight` variant |
| `border` | Same roles as `line` |
| `text` | Same roles as `line` |
| `icon` | Same roles as `line` |
| Chart | `chartbackground`, `chartline`, `chartlineSubtle`, `charttext`, `charttextSubtle` |

```swift
HStack(alignment: .bottom, spacing: Warp.Spacing.spacing50) {
    Rectangle()
        .fill(Warp.DatavizToken.backgroundCategory1)
        .frame(width: 24, height: 80)
    Rectangle()
        .fill(Warp.DatavizToken.backgroundCategory2)
        .frame(width: 24, height: 48)
}
.padding(Warp.Spacing.spacing200)
.background(Warp.DatavizToken.chartbackground)
```

For when to use each colour, see the shared [data visualisation](/design-language/data-visualization/introduction/) guidance.
