---
title: 'WARP Android release v.0.0.39'
date: 2025-03-11
---

Tooltip component & dataviz tokens
---

# Warp Android release 0.0.39 

## 2025-03-11

#### New Icons:
- Car left
- Car right
- Plane land
- Plane takeoff


#### WarpTooltip component
- Brand new component that shows a tooltip centered over an anchor
```kotlin
val toastWarning = remember { WarpToastState() }

WarpButton(modifier = Modifier.padding(bottom = dimensions.space2),
    text = "Show Warning toast",
    onClick = {
        toastWarning.showToast("Toast warning")
    })

WarpToast(
    state = toastWarning,
    type = WarpToastType.Warning,
    duration = WarpToastDuration.LONG
)
```

#### Dataviz color tokens
- Warp colors now contain dataviz color tokens and can be accessed the same way as any other colors
```kotlin
object DatavizColors : WarpDatavizColors {
    override val chart: WarpDatavizChartColors = DatavizChartColors
    override val background: WarpDatavizBackgroundColors = DatavizBackgroundColors
    override val line: WarpDatavizLineColors = DatavizLineColors
    override val border: WarpDatavizBorderColors = DatavizBorderColors
    override val text: WarpDatavizTextColors = DatavizTextColors
    override val icon: WarpDatavizIconColors = DatavizIconColors
}
```

#### Top app bar
Top app bar now supports centered layout
```kotlin
WarpTopAppBar(
    titleText = "Warp components",
    centered = true,
    actions = { }
)
```

#### Tabs
Tabs now support being scrollable
```kotlin
WarpTabRow(selectedTabIndex = selectedTab3, scrollable = true) {
    WarpTab(
        selected = selectedTab3 == 0,
        onClick = { selectedTab3 = 0 },
        text = "Option 1"
    )
    WarpTab(
        selected = selectedTab3 == 1,
        onClick = { selectedTab3 = 1 },
        text = "Option 2"
    )
    WarpTab(
        selected = selectedTab3 == 2,
        onClick = { selectedTab3 = 2 },
        text = "Option 3"
        )
    WarpTab(
        selected = selectedTab3 == 3,   
        onClick = { selectedTab3 = 3 },
        text = "Option 4"
    )
}
```

### Miscellaneous
- The checkbox was not updating visually when its checked flag changed dynamically. It only considered the initial value, causing a mismatch between the UI and the actual state. 
- Updated paparazzi screenshots