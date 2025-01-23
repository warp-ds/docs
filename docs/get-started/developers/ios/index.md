
# Get started for iOS developers

This page describes how to get started building an application with Warp components.

If you have any questions or need clarification, please don't hesitate to reach out to the Warp team on the [#smp-warp-design-system](https://sch-chat.slack.com/archives/C04NF2K46LB) channel on Slack!


## 1. Integrate Warp

A guide on how to integrate Warp into your project.

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
    .package(url: "https://github.com/warp-ds/warp-ios.git", "0.0.1"..."999.0.0")
]
```

## 2. Apply theme

To start using Warp you must first initialize the theme depending on the selected target of the project.

```swift
Warp.Config.warpTheme = .tori
```

Right now we support `.finn`, `.tori`, `.dba` and `.blocket` with `.finn` as the default one.

## 3. Use Warp components

Use the Warp components just like any other SwiftUI or UIKit view. The selected theme will give it the correct colors, styling and language.

```swift exmaple
Warp.Button(
    title: "button",
    action: {}
)
```

## 4. Use Warp tokens

We hightly recommend using `Warp.Token.SOME_TOKEN` for `Color` and `Warp.UIToken.SOME_TOKEN` for `UIColor` to specify a color.

To get you started tokens will start with one of the following categories:
`Surface`
`Background`
`Border`
`Icon`
`Text`

In some special cases we have some brand specific colors that can be used by `Warp.Color.SOME_COLOR` for `Color` and `Warp.UIColor.SOME_COLOR` for `UIColor`.

An example of this case is `Warp.Color.badgeNeutralBackground` which is defined below.

```swift exmaple
public var badgeNeutralBackground: Color {
    switch Warp.Theme {
    case .blocket: return Color.dynamicColor(defaultColor: BlocketColors.gray100, darkModeColor: BlocketColors.gray600)
    case .dba: return Color.dynamicColor(defaultColor: DbaColors.gray100, darkModeColor: DbaColors.gray600)
    case .finn: return Color.dynamicColor(defaultColor: FinnColors.gray100, darkModeColor: FinnColors.gray600)
    case .tori: return Color.dynamicColor(defaultColor: ToriColors.gray100, darkModeColor: ToriColors.gray600)
    }
}
```

Another group of colors available is `Warp.DatavizToken.SOME_TOKEN` for `Color` and `Warp.DatavizToken.SOME_TOKEN` for `UIColor` that should be used on charts and similar use cases, and had the following categories:
`Line`
`Background`
`Border`
`Icon`
`Text`

Avoid using the colors directly since they can be brand specific.

```swift exmaple
Warp.Text(
    L10n.ConfirmPersonalData.ConfirmPersonalData.collectioninfo,
    style: .caption,
    color: Warp.Token.textSubtle
)
```

Still using UIKit? We got you covered with `Warp.UIToken`.

```swift exmaple
private lazy var myView: UIView = {
    let view = UIView(withAutoLayout: true)
    view.backgroundColor = Warp.UIToken.background
    return view
}()
```


### Legacy support

All Warp components will provide a bridge to be able to use with legacy code. Check each component's documentations for more information.

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift exmaple
Warp.Button(
    title: "button",
    action: {}
).uiView
```