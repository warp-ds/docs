---
title: 'WARP Android release v.0.0.42'
date: 2025-04-29
---

Range Slider & compose update
---

# Warp Android release 0.0.42

## 2025-04-29


#### WarpLink component
- Brand new component!

```kotlin
WarpLink(
    text = "Warp link",
    onClick = { Log.d("WarpLink", "Clicked") }

)
WarpLink(
    text = "Warp link with icon",
    onClick = { Log.d("WarpLink", "Clicked link") },
    icon = icons.linkExternal
)

WarpLink(
    text = "Warp link with underline",
    onClick = { Log.d("WarpLink", "Clicked link") },
    icon = icons.link,
    underline = true
)
```

#### Vend Theme
- Vend is available now as the all the other brands. 
```kotlin
@Composable
    override fun invoke(content: @Composable () -> Unit) {
        VendWarpTheme(
            content = content,
            forceDarkMode = forceDarkMode
        )
    }
```

#### Accessibility improvements:
- Enhanced accessibility for Tabs component.
- Fixed accessibility issues in Radio and Checkbox components.
- Added content descriptions to Switch and Step Indicator components.
- Improved Box Link and Alert icon accessibility.


### Miscellaneous
- Added Paparazzi snapshot tests for Blocket
- Integrated WarpIcon in WarpModal component