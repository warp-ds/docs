---
title: 'WARP Android release v.0.0.40'
date: 2025-04-04
---

Range Slider & compose update
---

# Warp Android release 0.0.40 

## 2025-04-04


#### WarpRangeSlider component
- Brand new component helps the user select a range of values. Accepts Any object as value. 

```kotlin
val stringItems = listOf(
            "1900",
            "1910",
            "1920",
            "1930",
            "1940",
            "1950",
            "1960",
            "1970",
            "1980",
            "1990",
            "2000",
            "2010",
            "2020"
        )
        val startItem = stringItems[5]
        val endItem = stringItems[8]

        WarpRangeSlider(
            modifier = Modifier.padding(bottom = dimensions.space1),
            items = stringItems,
            initialStartItem = startItem,
            initialEndItem = endItem,
            onRightValueChanged = {
                to2 = it.toString()
            },
            onLeftValueChanged = {
                from2 = it.toString()
            },
            onValueChangeFinished = {

            },
            showRange = true,
            showTooltips = true

        )
```

#### Compose update
- Compose BOM has been updated to version 2025.03.01 and with that the WarpRippleTheme has been migrated to the new implementation 
```kotlin
val rippleConfiguration = RippleConfiguration(color = warpColors.background.primary, rippleAlpha = RippleAlpha(0f, 0f, 0f, 0.5f))
        CompositionLocalProvider(
            LocalRippleConfiguration provides rippleConfiguration
        )
```

#### Updated Icons:
- Like
- Dislike


### Miscellaneous
- Fixed WarpCallout Edge to adapt position dynamically when the callout width is greater than the anchor. The Edge now is always centered on the anchor.
- Updated paparazzi screenshots