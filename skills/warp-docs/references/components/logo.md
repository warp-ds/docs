# Logo

Vend's logos are crafted to deliver consistency, clarity, and scalability across our multi-brand product ecosystem.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/logo/overview), [Usage](https://warp-ds.github.io/docs/components/logo/usage), [Accessibility](https://warp-ds.github.io/docs/components/logo/accessibility), [Android](https://warp-ds.github.io/docs/components/logo/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/logo/frameworks/ios)

**Framework support:** Android, iOS

## Overview

Vend's logos are crafted to deliver consistency, clarity, and scalability across our multi-brand product ecosystem.

![Example Warp logos and their small variants in light in their regular and inverted versions](https://warp-ds.github.io/docs/components/logo/overview.svg)

If you need a new logo or adjustments to an existing one, please submit a request in Slack [#warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV)

We currently support only logos belonging to brands within the Vend portfolio, as well as third-party brands that are engaged in an approved collaboration with Vend. Please consider if the logo would have a small version and/or a inverted/dark mode variant.

## Usage

Vend's logos are crafted to deliver consistency, clarity, and scalability across our multi-brand product ecosystem.

The normal logo variant is the primary representation of the brand. This version should be used wherever there is adequate space for the logo to display clearly and maintain brand presence.

The small logo variant is optimized for use at reduced sizes, where the normal logo may lose clarity or visual balance.

![Vend and Vend-small variants displayed on a white background.](https://warp-ds.github.io/docs/components/logo/size-variants.svg)

Most logo components include both regular (non-inverted) and inverted versions. Use the regular/non-inverted logos on light mode or light backgrounds, and use the inverted logos on dark mode or dark backgrounds.

![FINN, Qasa and Vend logos shown as examples against light and dark backgrounds.](https://warp-ds.github.io/docs/components/logo/light-dark-variants1.svg)

In cases where you’re designing things on dark background, e.g. banners or decorative elements, use the “inverted” logo variants.

**Please note:** FINN, Bilbasen, Blocket and Tori don’t have inverted variants (because the logos are designed to work on light and dark backgrounds) so always use their regular versions regardless of background.

![Two versions of the DBA-inverted logo shown side by side on the dark blue background in light and dark modes.](https://warp-ds.github.io/docs/components/logo/light-dark-variants2.svg)

Our logo set is fully scalable. This ensures a clean, balance appearance at all resolutions. By default the height is 32px for the regular logos and the small variants.

![Vend logo scaling exemplified showing the vend-small logo in 32px, 48px and 64px variants.](https://warp-ds.github.io/docs/components/logo/scalability.svg)

Aspect ratio is locked for all logos in case you need custom scaling. When scaling logo dimensions, avoid arbitrary values, and use our 8px grid, e.g., 24px, 32px, 40px. This ensures visual consistency across components and maintains clean, proportional rendering at all sizes. Be mindful of brand specific logo guidelines, e.g. Vend has a minimum size of 20px for their logo.

## Accessibility

Vend's logos are crafted to deliver consistency, clarity, and scalability across our multi-brand product ecosystem.

To ensure accessibility for users who rely on assistive technologies, all logos include translated alt texts.

![Vend logo alt text exemplified in a red container above the Vend symbol.](https://warp-ds.github.io/docs/components/logo/alt-text.svg)

Our Logo component includes regular and inverted variants to support accessibility across different background colors.

-   Use the inverted versions when placing the logo on dark backgrounds to maintain sufficient contrast.
-   The logo should always meet WCAG AA (non-text content) contrast requirements when used as essential content.

## Frameworks

### Android

Vend's logos are crafted to deliver consistency, clarity, and scalability across our multi-brand product ecosystem.

[Android](https://warp-ds.github.io/docs/components/logo/frameworks/android)[iOS](https://warp-ds.github.io/docs/components/logo/frameworks/ios)

```kotlin
@Composable
fun WarpLogo(
    modifier: Modifier = Modifier,
    small: Boolean = false,
    brand: String
)

@Composable
fun WarpLogo(
    modifier: Modifier = Modifier,
    small: Boolean = false,
    brand: Brand
)
```

Default will be a large logo. If small is set to true will show a 32x32 icon. Both sizes support dark/light mode.

```kotlin
WarpLogo(brand = "finn")
WarpLogo(brand = "finn", small = true)
```

Basic usage for the logo - can be shown using either a string or enum for the brand.

```kotlin
WarpLogo(brand = "tori")
WarpLogo(brand = "tori", small = true)

WarpLogo(brand = Brand.Finn)
WarpLogo(brand = Brand.Finn, small = true)
```

Following brands are supported;

```kotlin
enum class Brand(val identifier: String) {
    Autovex("autovex"),
    Bilbasen("bilbasen"),
    Blocket("blocket"),
    DBA("dba"),
    Finn("finn"),
    FinnTagline("finntagline"),
    Nettbil("nettbil"),
    Oikotie("oikotie"),
    Qasa("qasa"),
    Tori("tori"),
    Vend("vend"),
    VendPro("vendpro")
}
```

Not supported

### Parameters

### iOS

Vend's logos are crafted to deliver consistency, clarity, and scalability across our multi-brand product ecosystem.

[Android](https://warp-ds.github.io/docs/components/logo/frameworks/android)[iOS](https://warp-ds.github.io/docs/components/logo/frameworks/ios)
