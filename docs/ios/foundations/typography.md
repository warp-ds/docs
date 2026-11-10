---
pendingReview: true
title: Typography — iOS
designLanguage: /design-language/typography/
---

# Typography

WARP text styles are cases of `Warp.Typography`. Each style has a fixed size and weight, uses the brand's typeface, and scales with Dynamic Type.

## Text styles

The styles, sizes and Dynamic Type text styles below are defined in [Typography.swift](https://github.com/warp-ds/warp-ios/blob/main/Sources/Typography/Typography.swift). Sizes are in points at the default content size.

| Style | Size | Weight | Scales relative to |
| --- | --- | --- | --- |
| `display` | 48 | Strong | `.largeTitle` |
| `title1` | 34 | Strong | `.largeTitle` |
| `title2` | 28 | Strong | `.title` |
| `title3` | 22 | Strong | `.title2` |
| `title4` | 16 | Strong | `.callout` |
| `title5` | 14 | Strong | `.footnote` |
| `title6` | 12 | Strong | `.caption` |
| `preamble` | 20 | Regular | `.title3` |
| `body` | 16 | Regular | `.callout` |
| `bodyStrong` | 16 | Strong | `.callout` |
| `caption` | 14 | Regular | `.footnote` |
| `captionStrong` | 14 | Strong | `.footnote` |
| `detail` | 12 | Regular | `.caption` |
| `detailStrong` | 12 | Strong | `.caption` |

"Strong" and "Regular" map to a different font file per brand:

| Brand | Regular | Strong |
| --- | --- | --- |
| FINN | FINN Type Light | FINN Type Medium |
| Tori | Tori Sans Regular | Tori Sans Bold |
| DBA | Vend Sans Text Regular | Vend Sans Text Bold |
| Blocket | Blocket Sans Regular | Blocket Sans Medium |
| Vend | Vend Sans Text Regular | Vend Sans Text Bold |
| Neutral | Inter Regular | Inter SemiBold |

The font files are bundled in the package ([Typography/Fonts](https://github.com/warp-ds/warp-ios/tree/main/Sources/Typography/Fonts)). You don't need to add them to your app target.

## Register the brand's fonts

The fonts must be registered before text is drawn. Assigning `Warp.Theme` registers the fonts for that brand. You can also register them explicitly, which lets you handle errors:

```swift
do {
    try Warp.Typography.registerFonts(for: .blocket)
} catch {
    // error is a Warp.FontRegistrationError
    print(error.localizedDescription)
}
```

Fonts that are already registered are skipped, so calling this more than once is safe.

The typeface is chosen from the global `Warp.Theme`, not from the `.warpTheme(_:)` environment value. Set `Warp.Theme` to your brand at launch; see [Theming](/ios/foundations/theming#set-up-the-theme).

## Apply a text style in SwiftUI

Use the `Warp.Text` component, which takes a `Warp.TextStyle` with the same cases as `Warp.Typography` and applies the theme's `text` colour by default:

```swift
Warp.Text("Recently viewed", style: .title3)
Warp.Text("Delivered to your door", style: .body, color: Warp.Token.textSubtle)
```

To use a WARP style on any SwiftUI `Text` or view, use `font(from:)`. It is available on `Text` and on `View`:

```swift
Text("Price")
    .font(from: .captionStrong)

VStack(alignment: .leading) {
    Text("Applies to all text in the stack")
}
.font(from: .detail)
```

`Warp.Typography`'s `font` property returns the SwiftUI `Font` directly, for example `Warp.Typography.body.font`.

See the [Text component](/ios/components/text/code) for all `Warp.Text` options.

## Apply a text style in UIKit

`Warp.Typography`'s `uiFont` property returns a `UIFont`:

```swift
let label = UILabel()
label.font = Warp.Typography.body.uiFont
label.adjustsFontForContentSizeCategory = true
label.numberOfLines = 0
```

If the brand font is not registered, `uiFont` returns the system font for the matching text style (`UIFont.preferredFont(forTextStyle:)`).

## Dynamic Type

All WARP text styles scale with the user's text size setting:

- In SwiftUI, `font` is created with `Font.custom(_:size:relativeTo:)`, using the text style in the table above.
- In UIKit, `uiFont` is scaled with `UIFontMetrics` for the same text style. Set `adjustsFontForContentSizeCategory` to `true` on labels so they update when the setting changes while the app is running.

Allow text to wrap (for example `numberOfLines = 0` in UIKit) so larger sizes don't truncate. For guidance on text sizing, see the shared [accessibility](/design-language/accessibility/) pages.
