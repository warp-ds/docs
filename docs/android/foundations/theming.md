---
pendingReview: true
title: Theming — Android
designLanguage: /design-language/brands/
---

# Theming

WARP components on Android read their colours, typography, shapes and dimensions from a brand theme. Wrap your Compose UI in the theme for your brand, and every WARP component and token inside it gets that brand's styling in light or dark mode.

For Gradle setup and per-flavour configuration, see [Get started on Android](/get-started/android/).

## Brand themes

Each brand is a separate module with one theme composable. Add the core library (`com.schibsted.nmp.warp:warp-android`) and the module for your brand.

| Brand   | Theme composable   | Import                                              | Artifact               |
| ------- | ------------------ | --------------------------------------------------- | ---------------------- |
| FINN    | `FinnWarpTheme`    | `com.schibsted.nmp.warp.brands.finn.FinnWarpTheme`  | `warp-android-finn`    |
| Tori    | `ToriWarpTheme`    | `com.schibsted.nmp.warp.brands.tori.ToriWarpTheme`  | `warp-android-tori`    |
| DBA     | `DbaWarpTheme`     | `com.schibsted.nmp.warp.brands.dba.DbaWarpTheme`    | `warp-android-dba`     |
| Blocket | `BlocketWarpTheme` | `com.schibsted.nmp.warp.brands.blocket.BlocketWarpTheme` | `warp-android-blocket` |
| Vend    | `VendWarpTheme`    | `VendWarpTheme` (declared without a package)        | `warp-android-vend`    |
| Neutral | `NeutralWarpTheme` | `NeutralWarpTheme` (declared without a package)     | `warp-android-neutral` |

All artifacts use the group `com.schibsted.nmp.warp` ([ConfigData.kt](https://github.com/warp-ds/warp-android/blob/develop/buildSrc/src/main/java/ConfigData.kt)).

Every brand theme has the same signature:

```kotlin
@Composable
fun FinnWarpTheme(
    content: @Composable () -> Unit,
    forceDarkMode: Boolean? = null
)
```

## Apply the theme

Wrap your screen content in the brand theme. Because `content` is the first parameter and not the last, you can't use trailing-lambda syntax; pass `content` as an argument instead.

```kotlin
import androidx.compose.runtime.Composable
import com.schibsted.nmp.warp.brands.finn.FinnWarpTheme
import com.schibsted.nmp.warp.components.WarpButton
import com.schibsted.nmp.warp.components.WarpButtonStyle

@Composable
fun CheckoutScreen() {
    FinnWarpTheme(content = {
        WarpButton(
            text = "Submit",
            onClick = { },
            style = WarpButtonStyle.Primary
        )
    })
}
```

If one build serves several brands, choose the theme at runtime. The WARP sample app does it like this ([Theme.kt](https://github.com/warp-ds/warp-android/blob/develop/app/src/main/java/com/schibsted/nmp/warpapp/Theme.kt)):

```kotlin
import NeutralWarpTheme
import VendWarpTheme
import androidx.compose.runtime.Composable
import com.schibsted.nmp.warp.brands.blocket.BlocketWarpTheme
import com.schibsted.nmp.warp.brands.dba.DbaWarpTheme
import com.schibsted.nmp.warp.brands.finn.FinnWarpTheme
import com.schibsted.nmp.warp.brands.tori.ToriWarpTheme

@Composable
fun BrandTheme(flavor: String, content: @Composable () -> Unit) {
    when (flavor) {
        "finn" -> FinnWarpTheme(content)
        "tori" -> ToriWarpTheme(content)
        "dba" -> DbaWarpTheme(content)
        "blocket" -> BlocketWarpTheme(content)
        "vend" -> VendWarpTheme(content)
        "neutral" -> NeutralWarpTheme(content)
    }
}
```

## What the theme provides

A brand theme calls the core `WarpTheme` composable, which provides these values to everything inside it ([WarpTheme.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/theme/WarpTheme.kt)):

| Value         | Type                  | Read it with             |
| ------------- | --------------------- | ------------------------ |
| Colours       | `WarpColors`          | `WarpTheme.colors`       |
| Typography    | `WarpTypography`      | `WarpTheme.typography`   |
| Shapes        | `WarpShapes`          | `WarpTheme.shapes`       |
| Dimensions    | `WarpDimensions`      | `WarpTheme.dimensions`   |
| Resources     | `WarpResources`       | `WarpTheme.resources`    |

It also sets:

- `LocalTextStyle` to `typography.body`, so plain Compose `Text` uses the brand's body style by default.
- `LocalRippleConfiguration` to a brand ripple. FINN uses `colors.background.active` as the ripple colour; the other brands use `colors.background.primary`.

`WarpTheme` doesn't set up a Material `MaterialTheme`. Material composables that aren't WARP components keep using your app's Material theme.

### What differs between brands

| Part        | Differs per brand? | Notes |
| ----------- | ------------------ | ----- |
| Colours     | Yes                | Each brand has its own light and dark colour set. See [Tokens](/android/foundations/tokens). |
| Typography  | Fonts only         | Same sizes and line heights; each brand has its own font files. See [Typography](/android/foundations/typography). |
| Shapes      | Button only        | `shapes.components.button` is fully rounded (`ellipse`) for Vend and `roundedMedium` for the other brands. |
| Dimensions  | No                 | Every brand uses the same `WarpDimensions` object. |

### Outside a brand theme

Without a brand theme, WARP falls back to placeholders ([Placeholders.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/theme/Placeholders.kt)): colours are `Color.Unspecified`, text styles are `TextStyle.Default` and shapes are `CircleShape`. Always render WARP components inside a brand theme, including in `@Preview` functions.

## Light and dark mode

Every brand ships a light and a dark colour set. The theme picks one:

| `forceDarkMode` | Result                                                    |
| --------------- | --------------------------------------------------------- |
| `null` (default) | Follows the system setting, using `isSystemInDarkTheme()`. |
| `true`          | Always dark.                                              |
| `false`         | Always light.                                             |

Only colours change between light and dark. Typography, shapes and dimensions stay the same. The data-visualisation colours switch too (`DatavizColors` in light, `DatavizDarkColors` in dark).

To show a screen in dark mode regardless of the system setting, for example in a preview:

```kotlin
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import com.schibsted.nmp.warp.brands.finn.FinnWarpTheme
import com.schibsted.nmp.warp.components.WarpText

@Preview
@Composable
fun GreetingDarkPreview() {
    FinnWarpTheme(
        content = { WarpText(text = "Hello") },
        forceDarkMode = true
    )
}
```

### Tokens that don't change

Colour tokens ending in `Static` keep the same value in light and dark mode. For example, in the FINN theme `colors.text.default` is near-black in light mode and white in dark mode, while `colors.text.static` is near-black in both ([FinnColors.kt](https://github.com/warp-ds/warp-android/blob/develop/warp-finn/src/main/java/com/schibsted/nmp/warp/brands/finn/FinnColors.kt), [FinnDarkColors.kt](https://github.com/warp-ds/warp-android/blob/develop/warp-finn/src/main/java/com/schibsted/nmp/warp/brands/finn/FinnDarkColors.kt)).

Read more about how dark mode works across WARP in [Dark mode](/design-language/dark-mode/).

## XML views

WARP components also exist as Android Views for XML layouts. They get their theme through a `LegacyWarpTheme` implementation injected with Koin. The setup is described in [Get started on Android](/get-started/android/).

Each brand module also contains its colour tokens as Android colour resources, such as `@color/warp_text_default`, with dark values in `values-night`. See [Tokens](/android/foundations/tokens#xml-resources).
