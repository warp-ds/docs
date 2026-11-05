---
title: Typography — Android
designLanguage: /design-language/typography/
---

# Typography

Warp for Android has 14 text styles. Every brand uses the same sizes and line heights; the brand theme supplies the font.

## Text styles

Each style is a Compose `TextStyle` on `WarpTheme.typography`, with a matching value in the `WarpTextStyle` enum for use with `WarpText` ([WarpTypography.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/theme/WarpTypography.kt), [WarpText.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/components/WarpText.kt)).

| `WarpTextStyle` | `WarpTheme.typography` | Size  | Line height | Weight  |
| --------------- | ---------------------- | ----- | ----------- | ------- |
| `Display`       | `display`              | 48 sp | 56 sp       | Strong  |
| `Title1`        | `title1`               | 34 sp | 41 sp       | Strong  |
| `Title2`        | `title2`               | 28 sp | 34 sp       | Strong  |
| `Title3`        | `title3`               | 22 sp | 28 sp       | Strong  |
| `Title4`        | `title4`               | 16 sp | 22 sp       | Strong  |
| `Title5`        | `title5`               | 14 sp | 18 sp       | Strong  |
| `Title6`        | `title6`               | 12 sp | 16 sp       | Strong  |
| `Preamble`      | `preamble`             | 20 sp | 26 sp       | Regular |
| `Body`          | `body`                 | 16 sp | 22 sp       | Regular |
| `BodyStrong`    | `bodyStrong`           | 16 sp | 22 sp       | Strong  |
| `Caption`       | `caption`              | 14 sp | 18 sp       | Regular |
| `CaptionStrong` | `captionStrong`        | 14 sp | 18 sp       | Strong  |
| `Detail`        | `detail`               | 12 sp | 16 sp       | Regular |
| `DetailStrong`  | `detailStrong`         | 12 sp | 16 sp       | Strong  |

Every style has automatic hyphenation turned on (`Hyphens.Auto`).

Sizes are in `sp`, so text follows the user's font size setting.

## Fonts per brand

Each brand module bundles its own font files and maps them to the two weights in the table above.

| Brand   | Regular             | Strong              | Source |
| ------- | ------------------- | ------------------- | ------ |
| FINN    | FINN Type Light     | FINN Type Medium    | [FinnTypography.kt](https://github.com/warp-ds/warp-android/blob/develop/warp-finn/src/main/java/com/schibsted/nmp/warp/brands/finn/FinnTypography.kt) |
| Tori    | Tori Sans Regular   | Tori Sans Bold      | [ToriTypography.kt](https://github.com/warp-ds/warp-android/blob/develop/warp-tori/src/main/java/com/schibsted/nmp/warp/brands/tori/ToriTypography.kt) |
| DBA     | Vend Sans Text Regular | Vend Sans Text Bold | [DbaTypography.kt](https://github.com/warp-ds/warp-android/blob/develop/warp-dba/src/main/java/com/schibsted/nmp/warp/brands/dba/DbaTypography.kt) |
| Blocket | Blocket Sans Regular | Blocket Sans Medium | [BlocketTypography.kt](https://github.com/warp-ds/warp-android/blob/develop/warp-blocket/src/main/java/com/schibsted/nmp/warp/brands/blocket/BlocketTypography.kt) |
| Vend    | Vend Sans Text Regular | Vend Sans Text Bold | [VendTypography.kt](https://github.com/warp-ds/warp-android/blob/develop/warp-vend/src/main/java/com/schibsted/nmp/warp/brands/vend/VendTypography.kt) |
| Neutral | Inter Regular       | Inter SemiBold      | [NeutralTypography.kt](https://github.com/warp-ds/warp-android/blob/develop/warp-neutral/src/main/java/com/vend/warp/brands/neutral/NeutralTypography.kt) |

The fonts ship inside the brand module, so you don't need to add font files to your app.

## Apply a text style

Use `WarpText` with a `WarpTextStyle`. The default style is `Body` and the default colour is `WarpTheme.colors.text.default`.

```kotlin
import androidx.compose.foundation.layout.Column
import androidx.compose.runtime.Composable
import com.schibsted.nmp.warp.components.WarpText
import com.schibsted.nmp.warp.components.WarpTextStyle
import com.schibsted.nmp.warp.theme.WarpTheme

@Composable
fun ListingHeader(title: String, location: String) {
    Column {
        WarpText(text = title, style = WarpTextStyle.Title2)
        WarpText(
            text = location,
            style = WarpTextStyle.Caption,
            color = WarpTheme.colors.text.subtle
        )
    }
}
```

See the [Android text page](/android/components/text/code) for all `WarpText` parameters.

### With other composables

When a composable takes a `TextStyle`, pass a style from `WarpTheme.typography`:

```kotlin
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import com.schibsted.nmp.warp.theme.WarpTheme

@Composable
fun Price(amount: String) {
    Text(text = amount, style = WarpTheme.typography.bodyStrong)
}
```

Inside a brand theme, `LocalTextStyle` is set to `WarpTheme.typography.body`, so a Material `Text` without a `style` uses the brand's body style ([WarpTheme.kt](https://github.com/warp-ds/warp-android/blob/develop/warp/src/main/java/com/schibsted/nmp/warp/theme/WarpTheme.kt)). Outside a brand theme the Warp text styles fall back to `TextStyle.Default`.
