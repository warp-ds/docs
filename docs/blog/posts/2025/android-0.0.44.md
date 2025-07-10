---
title: 'WARP Android release v.0.0.44'
date: 2025-06-25
---

Slider & updated regular icons
---

# Warp Android release 0.0.44

## 2025-06-25


#### WarpSlider component
- Brand new component!

```kotlin
var value by remember { mutableFloatStateOf(33f) }
val values = 0f..100f

WarpText("Slider with tooltip")
WarpSlider(
    modifier = Modifier.padding(vertical = dimensions.space4),
    value = value,
    onValueChange = { value = it },
    valueRange = values,
    showTooltip = true,
    formattedTooltipText = "${value.roundToInt()}"
    )
```

#### Updated regular icons
- All regular icon drawables are now prefixed with "warp_"
- Default size of all regular icons is now 24.dp
- New icons - Qasa, copy & drag dots
- Removed Honk icon


### Miscellaneous
- Adjusted Toast duration times:
```kotlin
object WarpToastDuration {
    const val SHORT = 5000L
    const val MEDIUM = 10000L
    const val INFINITE = 6000000L
}
```
- WarpAlert component now uses WarpLink to display links
- Fixed text alignment in WarpButton when handling multi-line text