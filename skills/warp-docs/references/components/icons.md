# Icons

Warp’s icons are crafted to deliver consistency, clarity, and scalability across our multi-brand product ecosystem.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/icons/overview), [Usage](https://warp-ds.github.io/docs/components/icons/usage), [Styling](https://warp-ds.github.io/docs/components/icons/styling), [Accessibility](https://warp-ds.github.io/docs/components/icons/accessibility), [React 19](https://warp-ds.github.io/docs/components/icons/frameworks/react-19), [Elements](https://warp-ds.github.io/docs/components/icons/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/icons/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/icons/frameworks/ios)

**Framework support:** Android, Elements, iOS, React 19

## Overview

Warp’s icons are crafted to deliver consistency, clarity, and scalability across our multi-brand product ecosystem.

Warp uses the [Phosphor icon set](https://phosphoricons.com) as its foundation and offers a curated subset. Phosphor is an open-source icon family with 9,000+ UI-focused icons, see the warp supported icons below.

If you need a new icon or adjustments to an existing one, please submit a request in Slack [#warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV).

When requesting a new icon, please include a short description of the use case and the thinking behind it. If possible, share draft designs or screenshots to help us understand the context. This ensures we create (or select) the most appropriate icon for your needs.

We recommend browsing the [Phosphor icon library](https://phosphoricons.com/) to search for icons that suit your use case, and sharing links to relevant options in your request.

Icons should work across all verticals, so we aim to keep them general enough to scale across multiple teams and use cases.

In the rare case that you can’t find an icon that is “good enough” to solve your needs, we can create a custom icon. Please keep in mind that we’ve chosen to use the Phosphor icon library to reduce the time and cost related to icon creation. Custom icons will only be considered when no suitable existing options are available.

## Usage

> This page is still in progress in the public docs.

## Styling

Warp’s icons are crafted to deliver consistency, clarity, and scalability across our multi-brand product ecosystem.

Our icon set is fully scalable, with stroke widths that increase proportionally with size. This ensures a clean, balanced appearance at all resolutions:

-   16px (small) icons use a 1px stroke
-   24px (medium) icons use a 1.5px stroke
-   32px (large) icons use a 2px stroke

This proportional scaling maintains visual clarity and consistency across different UI contexts.

![Example of different sizes of icons.](https://warp-ds.github.io/docs/components/icon/specs-1.svg)

While we recommend using the predefined sizes (16px, 24px, 32px) to ensure design consistency, icons can be scaled to custom sizes when necessary.

If custom sizing is required, designers must use Figma’s scaling tool to maintain proportional stroke thickness. Scaling icons without this tool can result in distorted strokes or unintended visual inconsistencies.

#### To scale an icon correctly in Figma: 

1.  Select the icon.
2.  Press K to open the **scaling tool**.
3.  Change scale dimensions in the right side menu.

This method ensures stroke width scales correctly with the icon’s size.

## Accessibility

Warp’s icons are crafted to deliver consistency, clarity, and scalability across our multi-brand product ecosystem.

To support screen readers and improve accessibility, all icons include meaningful and concise alt text. We’ve refined our alt text descriptions to focus on what the icon visually depicts, rather than abstract or technical labels.

For example: Instead of using "AgricultureMachine", the alt text is now simply "Tractor" — a more intuitive and recognizable description for screen reader users.

![Example of a tractor icon representing agricultural machinery. A highlight pointing at the icon, displays “Tractor”.](https://warp-ds.github.io/docs/components/icon/accessibility-1.svg)

This approach ensures that users relying on assistive technologies can easily understand the visual content and its purpose.

## Frameworks

### React 19

Warp’s icons are crafted to deliver consistency, clarity, and scalability across our multi-brand product ecosystem.

[Android](https://warp-ds.github.io/docs/components/icons/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/icons/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/icons/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/icons/frameworks/react-19)

You can import the component like so:

```js
import { WIcon } from '@warp-ds/components/react/icon';
```

Use icon name from above list

```jsx
<WIcon name="ActiveAds" size="small" locale="nb" />
<WIcon name="ActiveAds" size="medium" locale="nb" />
<WIcon name="ActiveAds" size="large" locale="nb" />
<WIcon name="ActiveAds" size="42px" locale="nb" />
<WIcon name="ActiveAds" size="64px" locale="nb" />
<WIcon name="ActiveAds" size="96px" locale="nb" />
<WIcon name="ActiveAds" size="128px" locale="nb" />
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | string |  | The name of the icon to render |
| size | 'small' \| 'medium' \| 'large' \| 'xypx' | medium | The size of the icon: small, medium, large, or a custom size in pixels like 32px. |
| locale | string |  | The locale to use for the icon, e.g. "nb" for Norwegian Bokmål |

### Elements

Warp’s icons are crafted to deliver consistency, clarity, and scalability across our multi-brand product ecosystem.

[Android](https://warp-ds.github.io/docs/components/icons/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/icons/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/icons/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/icons/frameworks/react-19)

Use icon name from above list

```jsx
<w-icon name="ActiveAds" size="small" locale="nb"></w-icon>
<w-icon name="ActiveAds" size="medium" locale="nb"></w-icon>
<w-icon name="ActiveAds" size="large" locale="nb"></w-icon>
<w-icon name="ActiveAds" size="42px" locale="nb"></w-icon>
<w-icon name="ActiveAds" size="64px" locale="nb"></w-icon>
<w-icon name="ActiveAds" size="96px" locale="nb"></w-icon>
<w-icon name="ActiveAds" size="128px" locale="nb"></w-icon>
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | string |  | The name of the icon to render |
| size | 'small' \| 'medium' \| 'large' \| 'xypx' | medium | The size of the icon: small, medium, large, or a custom size in pixels like 32px. |
| locale | string |  | The locale to use for the icon, e.g. "nb" for Norwegian Bokmål |

### Android

Warp’s icons are crafted to deliver consistency, clarity, and scalability across our multi-brand product ecosystem.

[Android](https://warp-ds.github.io/docs/components/icons/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/icons/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/icons/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/icons/frameworks/react-19)

Warp icons are located within the WarpResources object. They are WarpIconResources created from vector drawables located in res/drawable and content descriptions located in res/values/strings.xml. Each brand has their corresponding translations of the text.

```kotlin
object WarpResources {
    val icons : WarpIconResources
    @Composable
    get() = WarpIconResources
}
```

WarpIcon is a new component which simplifies icon creation. Can be created with a icon reference or a identifier string.

```kotlin
@Composable
fun WarpIcon(
    modifier: Modifier = Modifier,
    icon: WarpIconResource,
    size: Dp = dimensions.icon.default,
    color: Color = colors.icon.default,
)

@Composable
fun WarpIcon(
    modifier: Modifier = Modifier,
    identifier: String,
    size: Dp = dimensions.icon.default,
    color: Color = colors.icon.default,
)
```

To use an icon with compose the best way is to create a WarpIcon object. Default values for color and size are provided if no param is passed.

```kotlin
WarpIcon(icons.airplane)

WarpIcon(
    identifier = "sofa", 
    color = colors.icon.secondary,
    size = dimensions.icon.large)
```

There are three provided sizes for icons. Also possible to enter a custom value in Dp.

```kotlin
object WarpIconDimensions {
    val small = 16.dp
    val default = 24.dp
    val large = 32.dp
}
```

There is a possibility to retrieve an icon by its name string or identifier. Returns null if no match is found.

```kotlin
icons.getIconByName("animalpaw")
icons.getIconByIdentifier("airplane")
```

The icons are available as vector drawables in the Warp library inside res/drawable. The default size is 32 Dp.

```xml
<ImageView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:src="@drawable/animalpaw"
    />
```

### iOS

Warp’s icons are crafted to deliver consistency, clarity, and scalability across our multi-brand product ecosystem.

[Android](https://warp-ds.github.io/docs/components/icons/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/icons/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/icons/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/icons/frameworks/react-19)

Warp icons are located within the Warp framework. They are ImageVectors created from vector drawables located in Icon/Icons.xcassets.

We have 4 levels of `icons` and `logos`:

`Warp.Icon` which is an enum defining all available `template` icons in the Warp design system.

`Warp.TaxonomyIcon` which is an enum of `template` icons used for markets.

`Warp.BrandIcon` which is an enum of `original` icons used for brands.

`Warp.BrandLogo` which is an enum of `original` icons used for brand logos. It accepts a `LogoSize` that can be either `small` or `default`.

To use an icon with SwiftUI the best way is to create an `Icon` object, which is a `View`. Returns empty if no match is found. You can use the `image` property of the icon to get an `Image` object.

```swift
// View
Warp.Icon.activeAds

// Image
Warp.Icon.activeAds.image
```

To use an icon with Swift the best way is to create an `Icon` object and use its `uiImage` property, which is a `UIImage`. Returns empty if no match is found.

```swift
// UIImage
Warp.Icon.activeAds.uiImage
```

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

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.IconView(.activeAds).uiView

Warp.Logo(for: .finn(.small)).uiView
```

Regular icons

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| icon | Warp.Icon |  | The Warp.Icon to display. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| size | Warp.IconSize | .default | The size of the icon (.small, .default, .large, or .custom). |
| color | Color | Warp.Token.icon | The color of the icon. |

Brand logos

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| logo | Warp.BrandLogo |  | The Warp.BrandLogo to display. |
