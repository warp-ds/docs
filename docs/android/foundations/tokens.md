---
pendingReview: true
title: Tokens — Android
designLanguage: /design-language/tokens/intro/
---

# Tokens

In Jetpack Compose, Warp tokens are Kotlin properties that you read from `WarpTheme`. Colour tokens come from the active brand theme and switch between light and dark mode; spacing, border, size and shape tokens are the same for every brand.

## Reading tokens

Read tokens through the `WarpTheme` object inside a composable that is wrapped in a [brand theme](/android/foundations/theming):

| Property               | Type             | Contains                                   |
| ---------------------- | ---------------- | ------------------------------------------ |
| `WarpTheme.colors`     | `WarpColors`     | Semantic, component and data-visualisation colours |
| `WarpTheme.dimensions` | `WarpDimensions` | Spacing, border radius, border width, shadow, icon and touch-target sizes |
| `WarpTheme.shapes`     | `WarpShapes`     | Corner shapes                              |
| `WarpTheme.typography` | `WarpTypography` | Text styles. See [Typography](/android/foundations/typography). |

The getters are `@Composable`, so read them in composable code only.

```kotlin
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.schibsted.nmp.warp.components.WarpText
import com.schibsted.nmp.warp.theme.WarpTheme

@Composable
fun InfoPanel(message: String) {
    Box(
        modifier = Modifier
            .background(WarpTheme.colors.background.infoSubtle, WarpTheme.shapes.roundedMedium)
            .border(WarpTheme.dimensions.borderWidth1, WarpTheme.colors.border.infoSubtle, WarpTheme.shapes.roundedMedium)
            .padding(WarpTheme.dimensions.space2)
    ) {
        WarpText(text = message, color = WarpTheme.colors.text.default)
    }
}
```

You can also import the properties directly, as the Warp components do:

```kotlin
import com.schibsted.nmp.warp.theme.WarpTheme.colors
import com.schibsted.nmp.warp.theme.WarpTheme.dimensions
```

## Colour tokens

`WarpTheme.colors` is split into groups ([WarpColors.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/theme/WarpColors.kt)):

| Group                | Interface              | Tokens |
| -------------------- | ---------------------- | ------ |
| `colors.background`  | `WarpBackgroundColors` | `default`, `subtle`, `selected`, `disabled`, `inverted`, `primary`, `secondary`, `positive`, `negative`, `warning`, `info`, `notification`, `transparent0` |
| `colors.surface`     | `WarpSurfaceColors`    | `sunken`, `elevated100`, `elevated200`, `elevated300` |
| `colors.border`      | `WarpBorderColors`     | `default`, `strong`, `selected`, `disabled`, `inverted`, `focus`, `primary`, `secondary`, `positive`, `negative`, `warning`, `info` |
| `colors.text`        | `WarpTextColors`       | `default`, `subtle`, `placeholder`, `inverted`, `link`, `disabled`, `positive`, `negative` |
| `colors.icon`        | `WarpIconColors`       | `default`, `subtle`, `selected`, `disabled`, `inverted`, `primary`, `secondary`, `positive`, `negative`, `warning`, `info`, `notification` |
| `colors.components`  | `WarpComponentColors`  | Colours for specific components: `badge`, `button`, `callout`, `pill`, `navBar`, `tooltip`, `switch`, `card`, `pageIndicator` |
| `colors.dataviz`     | `WarpDatavizColors`    | Chart colours in six groups: `chart`, `background`, `line`, `border`, `text`, `icon` |

The table lists base names. Most tokens also have variants, built by adding a suffix or prefix:

| Variant     | Example                                   | Meaning |
| ----------- | ----------------------------------------- | ------- |
| `Hover`, `Active` | `background.primaryHover`, `background.primaryActive` | Interaction states |
| `Subtle`    | `background.positiveSubtle`, `border.warningSubtle` | A subtle version of the colour |
| `inverted…` | `text.invertedSubtle`, `icon.invertedPrimary` | For use on inverted backgrounds |
| `…Static`   | `text.static`, `icon.primaryStatic`       | Keeps the same value in light and dark mode |

Semantic tokens (every group except `components`) aren't tied to a component, so you can use them to build your own UI and still get every brand and dark mode. The `components` group holds colours the Warp components use internally. Read more in [Tokens (Design Language)](/design-language/tokens/intro/).

For the full list of names, see [WarpColors.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/theme/WarpColors.kt).

### Brand colour sets

Each brand module contains two generated colour objects, for example `FinnColors` and `FinnDarkColors`. They are generated from the Figma variables in [warp-ds/tokens](https://github.com/warp-ds/tokens) and copied into the modules by [`scripts/sync-color-tokens.sh`](https://github.com/warp-ds/warp-android/blob/develop/scripts/sync-color-tokens.sh). The objects are `internal`, so read colours through `WarpTheme.colors` rather than referencing a brand object.

| Brand   | Light          | Dark               | Module         |
| ------- | -------------- | ------------------ | -------------- |
| FINN    | `FinnColors`    | `FinnDarkColors`    | `warp-finn`    |
| Tori    | `ToriColors`    | `ToriDarkColors`    | `warp-tori`    |
| DBA     | `DbaColors`     | `DbaDarkColors`     | `warp-dba`     |
| Blocket | `BlocketColors` | `BlocketDarkColors` | `warp-blocket` |
| Vend    | `VendColors`    | `VendDarkColors`    | `warp-vend`    |
| Neutral | `NeutralColors` | `NeutralDarkColors` | `warp-neutral` |

The data-visualisation colours are shared: every brand uses `DatavizColors` in light mode and `DatavizDarkColors` in dark mode, from the core `warp` module ([dataviz/](https://github.com/warp-ds/warp-android/tree/develop/warp/src/main/java/com/schibsted/nmp/warp/theme/dataviz)).

## Spacing

`WarpTheme.dimensions` holds the spacing scale ([WarpDimensions.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/theme/WarpDimensions.kt)). The number in the name is a multiple of 8 dp.

| Token      | Value  | Token      | Value  |
| ---------- | ------ | ---------- | ------ |
| `space025` | 2 dp   | `space4`   | 32 dp  |
| `space05`  | 4 dp   | `space5`   | 40 dp  |
| `space1`   | 8 dp   | `space6`   | 48 dp  |
| `space15`  | 12 dp  | `space7`   | 56 dp  |
| `space2`   | 16 dp  | `space8`   | 64 dp  |
| `space25`  | 20 dp  | `space10`  | 80 dp  |
| `space3`   | 24 dp  | `space12`  | 96 dp  |
|            |        | `space14`  | 112 dp |
|            |        | `space16`  | 128 dp |

## Borders

| Token           | Value | Token          | Value |
| --------------- | ----- | -------------- | ----- |
| `borderRadius1` | 2 dp  | `borderWidth1` | 1 dp  |
| `borderRadius2` | 4 dp  | `borderWidth2` | 2 dp  |
| `borderRadius3` | 8 dp  | `borderWidth3` | 4 dp  |
| `borderRadius4` | 16 dp |                |       |

## Sizes

| Token                          | Value |
| ------------------------------ | ----- |
| `dimensions.icon.small`        | 16 dp |
| `dimensions.icon.default`      | 24 dp |
| `dimensions.icon.large`        | 32 dp |
| `dimensions.icon.xlarge`       | 64 dp |
| `dimensions.minimumTouchSize`  | 44 dp |
| `dimensions.illustration`      | 200 dp |

`dimensions.components` holds fixed sizes for individual Warp components, such as `textFieldHeight` and `topAppBarHeight`.

The shadow tokens (`shadowSmall` to `shadowXLarge`) are described in [Elevation](/android/foundations/elevation).

### Scaling with font size

`dimensions.adaptDpToFontScale` multiplies a dp value by the user's font scale, so a size can grow along with text. You can cap the result with `coerceMaxSize`. `coerceMinSize` is only applied when you also pass `coerceMaxSize`. Warp's snackbar uses this helper.

```kotlin
import androidx.compose.foundation.layout.size
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.schibsted.nmp.warp.components.WarpIcon
import com.schibsted.nmp.warp.theme.WarpTheme

@Composable
fun ScaledBell() {
    val dimensions = WarpTheme.dimensions
    val size = dimensions.adaptDpToFontScale(
        baseSize = dimensions.icon.default,
        coerceMaxSize = dimensions.icon.large
    )
    WarpIcon(icon = WarpTheme.resources.icons.bell, size = size)
}
```

## Shapes

`WarpTheme.shapes` provides Compose `Shape` values ([WarpShapes.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/theme/WarpShapes.kt)):

| Token           | Shape                                   |
| --------------- | --------------------------------------- |
| `roundedSmall`  | Rounded corners, `borderRadius1` (2 dp) |
| `roundedMedium` | Rounded corners, `borderRadius3` (8 dp) |
| `ellipse`       | `CircleShape`                           |

These are the same in every brand. `shapes.components` holds the shapes for `badge`, `callout` and `button`; the button shape is `ellipse` in Vend and `roundedMedium` in the other brands.

## XML resources

For XML layouts, the tokens are also available as Android resources:

- **Colours:** each brand module has its colour tokens in `res/values/colors.xml`, with dark values in `res/values-night/colors.xml`. Names follow the Compose groups in snake case, for example `@color/warp_text_default`, `@color/warp_background_primary` and `@color/warp_border_focus`.
- **Dimensions:** the core module defines `@dimen/space025` to `@dimen/space16`, `@dimen/borderRadius1` to `@dimen/borderRadius4`, `@dimen/borderWidth1` to `@dimen/borderWidth3`, and `@dimen/shadowSmall` to `@dimen/shadowXLarge` ([dimens.xml](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/res/values/dimens.xml)). There is no `space15` resource.
