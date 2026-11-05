---
title: Theming — iOS
designLanguage: /design-language/brands/
---

# Theming

A Warp theme is one brand from `Warp.Brand`. The theme decides which colour tokens, typeface and built-in strings Warp components use.

## Available brands

`Warp.Brand` ([Warp.swift](https://github.com/warp-ds/warp-ios/blob/main/Sources/Warp.swift)) has these cases:

| Case | Typeface | Language of built-in strings |
| --- | --- | --- |
| `.finn` (default) | FINN Type | Norwegian Bokmål (`nb-NO`) |
| `.tori` | Tori Sans | Finnish (`fi`) |
| `.dba` | Vend Sans Text | Danish (`da`) |
| `.blocket` | Blocket Sans | Swedish (`sv`) |
| `.vend` | Vend Sans Text | English (`en`) |
| `.neutral` | Inter | English (`en`) |

`.neutral` is a theme without brand-specific styling. Data visualisation colours are not a brand: they are a separate token set that is the same for every brand (see [Tokens](/ios/foundations/tokens#data-visualisation-tokens)).

## Set up the theme

There are two places the theme is stored, and an app should set both:

- **The SwiftUI environment**, with the `.warpTheme(_:)` view modifier. Warp components and the `@Environment(\.warpTheme)` value read from here.
- **The global `Warp.Theme`** static property. Assigning it registers the brand's fonts and loads the built-in strings for the brand's language ([Warp.swift](https://github.com/warp-ds/warp-ios/blob/main/Sources/Warp.swift), [Localized.swift](https://github.com/warp-ds/warp-ios/blob/main/Sources/Localized/Localized.swift)). The typography styles also pick their typeface from `Warp.Theme` ([Typography.swift](https://github.com/warp-ds/warp-ios/blob/main/Sources/Typography/Typography.swift)).

```swift
import SwiftUI
import Warp

@main
struct MyApp: App {
    init() {
        // Registers the Tori fonts, selects the Tori typeface and loads Finnish strings.
        Warp.Theme = .tori
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
                .warpTheme(.tori)
        }
    }
}
```

Assign `Warp.Theme` even when your brand is FINN. FINN is the default value, but the built-in strings are only loaded when the property is assigned.

If font registration fails when `Warp.Theme` is assigned, the error is printed and not rethrown. To handle the error yourself, register the fonts explicitly with `try Warp.Typography.registerFonts(for: .tori)` or `try Warp.Brand.tori.registerFonts()`, which throw `Warp.FontRegistrationError`.

Apply `.warpTheme(_:)` once, near the root of the view hierarchy. It applies to the modified view and everything it contains. When no `.warpTheme(_:)` is applied above a view, the environment value falls back to the value `Warp.Theme` had when the environment default was first read ([WarpThemeEnvironment.swift](https://github.com/warp-ds/warp-ios/blob/main/Sources/Environment/WarpThemeEnvironment.swift)).

## Read the theme in your views

`@Environment(\.warpTheme)` gives you a `WarpThemeContext`. Its public members are:

| Member | Type | Use |
| --- | --- | --- |
| `brand` | `Warp.Brand` | The brand in scope. |
| `token` | `any TokenProvider` | Semantic colour tokens as SwiftUI `Color`. |
| `uiToken` | `UITokenProvider` | Semantic colour tokens as `UIColor`. |

```swift
struct ListingTitle: View {
    @Environment(\.warpTheme) private var theme

    let title: String

    var body: some View {
        Warp.Text(title, style: .title3, color: theme.token.text)
    }
}
```

For component-specific colours, create a `ColorProvider` from the same context: `ColorProvider(theme: theme)`. See [Tokens](/ios/foundations/tokens).

## Global and environment APIs

Some APIs read the environment and some read the global `Warp.Theme`. If both are set to the same brand, as in the setup above, they give the same result.

| Reads the environment (`.warpTheme(_:)`) | Reads the global `Warp.Theme` |
| --- | --- |
| Warp components | `Warp.Token`, `Warp.UIToken` |
| `@Environment(\.warpTheme)` | `Warp.Color`, `Warp.UIColor` |
| `ColorProvider(theme: theme)` with the environment context | `Warp.Typography` fonts (typeface) |
| `withCardBackground` and `withBottomSheetBackground` | Language of built-in strings |

## Switch theme at runtime

Keep the brand in state and pass it to `.warpTheme(_:)`. Assign `Warp.Theme` at the same time so fonts, typeface and strings follow. The Warp sample app switches brands this way ([ContentView.swift](https://github.com/warp-ds/warp-ios/blob/main/SampleApp/ContentView.swift)).

```swift
struct RootView: View {
    @State private var brand: Warp.Brand = .finn

    var body: some View {
        VStack {
            Picker("Brand", selection: $brand) {
                ForEach(Warp.Brand.allCases, id: \.self) { brand in
                    Text(brand.description)
                }
            }
            .pickerStyle(.segmented)

            ContentView()
        }
        .onChange(of: brand) { _, newBrand in
            Warp.Theme = newBrand
        }
        .warpTheme(brand)
    }
}
```

## Previews

Warp provides preview traits that apply `.warpTheme(_:)` to a preview ([ThemePreviewModifier.swift](https://github.com/warp-ds/warp-ios/blob/main/Sources/Previews/ThemePreviewModifier.swift)): `.themeFinn`, `.themeTori`, `.themeDba`, `.themeBlocket`, `.themeVend` and `.themeNeutral`.

```swift
#Preview(traits: .themeTori) {
    ListingTitle(title: "Sofa")
}
```

These traits only set the environment. They don't change `Warp.Theme`, so text in the preview uses the typeface of the current `Warp.Theme`.

## UIKit

UIKit views have no SwiftUI environment. Use `Warp.UIToken` (reads `Warp.Theme`) or the provider for an explicit brand, for example `Warp.Brand.tori.uiToken`. For component colours, use `UIColorProvider(theme: .tori)`.

```swift
let view = UIView()
view.backgroundColor = Warp.UIToken.background
```

Warp components return a SwiftUI view by default. Use the `uiView` property to embed one in UIKit, as described in [Get started on iOS](/get-started/ios/).

## Light and dark mode

Every Warp colour token holds a light and a dark value. Tokens are built with `Color.dynamicColor(defaultColor:darkModeColor:)` and `UIColor.dynamicColor(defaultColor:darkModeColor:)`, which pick the dark value when the trait collection's `userInterfaceStyle` is `.dark` and the light value otherwise ([Color+.swift](https://github.com/warp-ds/warp-ios/blob/main/Sources/Helpers/Color%2B.swift)).

This means Warp colours follow the system appearance, and also any override you apply with standard iOS APIs, such as `.preferredColorScheme(_:)` in SwiftUI or `overrideUserInterfaceStyle` in UIKit. Warp has no separate setting for light or dark mode.

`Color.dynamicColor(defaultColor:darkModeColor:)` and `UIColor.dynamicColor(defaultColor:darkModeColor:)` are public, so you can use them for your own colours that need a light and a dark value.

Shadows don't change between modes: they use black at the same opacity in both. See [Elevation](/ios/foundations/elevation) and the shared guidance on [dark mode](/design-language/dark-mode/).
