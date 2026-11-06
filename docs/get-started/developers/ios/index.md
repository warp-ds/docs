
# Get started for iOS developers

This page describes how to get started building an application with Warp components.

If you have any questions or need clarification, please don't hesitate to reach out to the Warp team on the [#warp-design-system](https://sch-chat.slack.com/archives/C04NF2K46LB) channel on Slack!


## 1. Integrate Warp

A guide on how to integrate Warp into your project.

**Requirements:** Warp requires a minimum deployment target of **iOS 18**.

### Swift Package Manager
You can use the url for Warp on Xcode default package manager or use it like below in your Package.swift file:

```swift
dependencies: [
    .package(url: "https://github.com/warp-ds/warp-ios.git")
]
```
You can use a specific branch or version, but we suggest using our latest version like this to avoid conflict between dependencies:

```swift
dependencies: [
    .package(url: "https://github.com/warp-ds/warp-ios.git", from: "1.2.0")
]
```

Warp 1.0.0 and later follow [Semantic Versioning](https://semver.org/). `from: "1.2.0"` accepts any `1.x` release from 1.2.0 up to, but not including, 2.0.0, so you receive new components and fixes without breaking changes.

## 2. Apply theme

To start using Warp you set the brand for your app with the `.warpTheme(_:)` view modifier. The theme is injected through the SwiftUI environment, so apply it once on the root view of your `WindowGroup`:

```swift
@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .warpTheme(.finn)
        }
    }
}
```

To use a different brand for part of the view hierarchy, apply `.warpTheme(_:)` to that subtree. Descendants read the closest brand:

```swift
VStack {
    HeaderView()
    ToriSection()
        .warpTheme(.tori)
}
```

Supported brands are the `Warp.Brand` cases: `.finn`, `.tori`, `.dba`, `.blocket`, `.vend` and `.neutral`. The default brand is `.finn`. Without a `.warpTheme(_:)` modifier, the environment falls back to the global `Warp.Theme` variable, which is `.finn` unless you change it.

The global `Warp.Theme` variable (for example `Warp.Theme = .tori`) still works, but it is **deprecated** and shows deprecation warnings. Migrate to `.warpTheme(_:)`.

### Font registration

Fonts for a brand must be registered before use. Register them for the brand you apply, for example in your app's `init`:

```swift
@main
struct MyApp: App {
    init() {
        try? Warp.Typography.registerFonts(for: .finn)
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
                .warpTheme(.finn)
        }
    }
}
```

`Warp.Typography.registerFonts()` without a parameter is **deprecated** because it reads the global `Warp.Theme`. Use `registerFonts(for:)` instead.

## 3. Use Warp components

Use the Warp components just like any other SwiftUI or UIKit view. The selected theme will give it the correct colors, styling and language.

```swift
Warp.Button(
    title: "button",
    action: {}
)
```

## 4. Use Warp tokens

We highly recommend using `theme.token.SOME_TOKEN` for `Color` and `theme.uiToken.SOME_TOKEN` for `UIColor` to specify a color. Read the theme from the environment, so the color follows the brand applied with `.warpTheme(_:)`:

```swift
struct StatusText: View {
    @Environment(\.warpTheme) private var theme

    var body: some View {
        Text("Status")
            .foregroundColor(theme.token.textSubtle)
    }
}
```

To get you started tokens will start with one of the following categories:
`Surface`
`Background`
`Border`
`Icon`
`Text`

In some special cases we have brand specific colors that are available through `ColorProvider(theme:)` for `Color` and `UIColorProvider(theme:)` for `UIColor`. Pass the theme from the environment:

```swift
struct BadgeView: View {
    @Environment(\.warpTheme) private var theme

    var body: some View {
        Circle()
            .fill(ColorProvider(theme: theme).badgeNeutralBackground)
    }
}
```

`Warp.Color` and `Warp.UIColor` are **deprecated**. They read the global `Warp.Theme` and show deprecation warnings. Use `ColorProvider(theme:)` and `UIColorProvider(theme:)` with `@Environment(\.warpTheme)` instead. `ColorProvider(token:)` and `UIColorProvider(token:)` are deprecated too, in favour of the `theme:` initializers.

Another group of colors available is `Warp.DatavizToken.SOME_TOKEN` for `Color` and `Warp.DatavizUIToken.SOME_TOKEN` for `UIColor` that should be used on charts and similar use cases, and had the following categories:
`Line`
`Background`
`Border`
`Icon`
`Text`

Avoid using the colors directly since they can be brand specific.

```swift
Warp.Text(
    "Personal data is collected here",
    style: .caption,
    color: theme.token.textSubtle
)
```

Still using UIKit? UIKit views have no environment, so read a brand's UIKit tokens directly from `Warp.Brand`. Use the brand your app applies:

```swift
private lazy var myView: UIView = {
    let view = UIView(withAutoLayout: true)
    view.backgroundColor = Warp.Brand.finn.uiToken.background
    return view
}()
```


### Legacy support

All Warp components will provide a bridge to be able to use with legacy code. Check each component's documentations for more information.

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.Button(
    title: "button",
    action: {}
).uiView
```