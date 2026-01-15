### Warp Resources

Warp icons are located within the Warp framework. They are ImageVectors created from vector drawables located in Icon/Icons.xcassets.

We have 4 levels of `icons` and `logos`:

`Warp.Icon` which is an enum defining all available `template` icons in the Warp design system.

`Warp.TaxonomyIcon` which is an enum of `template` icons used for markets.

`Warp.BrandIcon` which is an enum of `original` icons used for brands.

`Warp.BrandLogo` which is an enum of `original` icons used for brand logos. It accepts a `LogoSize` that can be either `small` or `default`.

### SwiftUI

To use an icon with SwiftUI the best way is to create an `Icon` object, which is a `View`. Returns empty if no match is found. You can use the `image` property of the icon to get an `Image` object.


```swift
// View
Warp.Icon.activeAds

// Image
Warp.Icon.activeAds.image
```

### UIKit

To use an icon with Swift the best way is to create an `Icon` object and use its `uiImage` property, which is a `UIImage`. Returns empty if no match is found.

```swift
// UIImage
Warp.Icon.activeAds.uiImage
```

### Component

There is a possibility to create an icon by its name, pre-defined size and color.

```swift
Warp.IconView(_ icon: Warp.Icon,
        size: Warp.IconSize = .default,
        color: Color = Warp.Color.token.icon)
```

```swift
Warp.IconView(.activeAds)
```

There are three provided sizes for icons. Also possible to enter a custom value in `CGFloat`.

```swift
enum Warp.IconSize {
    case small
    case `default`
    case large
    case custom(CGFloat)
}
```

We have a component for `Logo` also.

```swift
Warp.Logo(for brand: Warp.BrandLogo)
```

```swift
Warp.Logo(for: .finn(.small))
```

There two provided sizes for logos: `small` and `default`.

```swift
enum Warp.BrandLogo.LogoSize {
    case small // 32x32 square logo 
    case `default` // Freeform logo
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.IconView(.activeAds).uiView

Warp.Logo(for: .finn(.small)).uiView
```

### Parameters

Regular icons

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| icon | Warp.Icon |  | The `Warp.Icon` to display. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| size | Warp.IconSize | .default | The size of the icon (`.small`, `.default`, `.large`, or `.custom`). |
| color | Color | Warp.Token.icon | The color of the icon. |

Brand logos

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| logo | Warp.BrandLogo |  | The `Warp.BrandLogo` to display. |