---
pendingReview: true
title: Elevation — Android
designLanguage: /design-language/elevation/
---

# Elevation

On Android, WARP expresses elevation with two kinds of tokens: shadow sizes in `WarpTheme.dimensions` and surface colours in `WarpTheme.colors.surface`. Use them together to lift content above the page.

## Shadow tokens

| Token           | Value | Modifier                   |
| --------------- | ----- | -------------------------- |
| `shadowSmall`   | 2 dp  | `Modifier.shadowSmall()`   |
| `shadowMedium`  | 5 dp  | `Modifier.shadowMedium()`  |
| `shadowLarge`   | 12 dp | `Modifier.shadowLarge()`   |
| `shadowXLarge`  | 16 dp | `Modifier.shadowXLarge()`  |

The values are in [WarpDimensions.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/theme/WarpDimensions.kt) and are the same for every brand.

## Shadow modifiers

The modifiers in `com.schibsted.nmp.warp.components.ext` apply Compose's `shadow` with the matching token ([Shadow.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/components/ext/Shadow.kt)). Each takes a `shape`, which defaults to `RoundedCornerShape(dimensions.borderRadius3)` (8 dp corners). Pass the same shape you use for the background so the shadow follows the outline.

```kotlin
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.schibsted.nmp.warp.components.WarpText
import com.schibsted.nmp.warp.components.ext.shadowSmall
import com.schibsted.nmp.warp.theme.WarpTheme

@Composable
fun RaisedPanel(text: String) {
    val shape = WarpTheme.shapes.roundedMedium
    Box(
        modifier = Modifier
            .shadowSmall(shape = shape)
            .background(WarpTheme.colors.surface.elevated100, shape)
            .padding(WarpTheme.dimensions.space2)
    ) {
        WarpText(text = text)
    }
}
```

The modifiers are `@Composable` functions, so call them from composable code.

## Surface colours

`WarpTheme.colors.surface` has background colours for elevated and sunken content ([WarpColors.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/theme/WarpColors.kt)):

| Token         | States                 |
| ------------- | ---------------------- |
| `sunken`      | —                      |
| `elevated100` | `elevated100Hover`, `elevated100Active` |
| `elevated200` | `elevated200Hover`, `elevated200Active` |
| `elevated300` | `elevated300Hover`, `elevated300Active` |

Surface colours come from the brand theme and change between light and dark mode.

## How WARP components use elevation

| Component     | Shadow                                      | Surface        |
| ------------- | ------------------------------------------- | -------------- |
| Menu          | `shadowSmall`                               | `elevated300`  |
| Popover       | `shadowMedium`                              | `elevated300`  |
| Callout       | `shadowMedium` (a 0.5 dp shadow when inline) | —             |
| Tooltip       | `shadowMedium` (a 0.5 dp shadow when inline) | —             |
| Dialog        | —                                           | `elevated100`  |
| Bottom sheet  | —                                           | `elevated100`  |

Source: [WarpMenu.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/components/WarpMenu.kt), [WarpPopover.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/components/WarpPopover.kt), [WarpCallout.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/components/WarpCallout.kt), [WarpTooltip.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/components/WarpTooltip.kt), [WarpDialog.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/components/WarpDialog.kt), [WarpBottomSheet.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/components/WarpBottomSheet.kt).

## XML resources

The shadow tokens are also available as dimension resources: `@dimen/shadowSmall`, `@dimen/shadowMedium`, `@dimen/shadowLarge` and `@dimen/shadowXLarge`. The surface colours are colour resources in each brand module, such as `@color/warp_surface_elevated_100`.
