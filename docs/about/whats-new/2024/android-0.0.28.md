---
title: 'WARP Android release v.0.0.28'
date: 2024-09-18
---

Switch, Spinner & Radio components!
---

# Warp Android release 0.0.28

## 2024-09-18

### WarpSwitch
```kotlin example
fun WarpSwitch(
    modifier: Modifier = Modifier,
    checked: Boolean = false,
    onCheckedChange: ((Boolean) -> Unit) = { },
    enabled: Boolean = true,
)
```

* Switch component now available in Warp, ([more info here](https://warp-ds.github.io/tech-docs/components/switch/))
* Supports Finn, Tori & DBA
* Supports legacy layouts written in XML

### WarpRadio
```kotlin example
fun WarpRadio(
    modifier: Modifier = Modifier,
    label: String,
    selected: Boolean = false,
    isError: Boolean = false,
    enabled: Boolean = true,
    extraText: String? = null,
    slot: @Composable (() -> Unit)? = null,
    onClick: (() -> Unit)? = null,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
)
```
* Radio component now available in Warp, ([more info here](https://warp-ds.github.io/tech-docs/components/radio/))
* Radio group supports vertical & horizontal orientation
* Supports Finn, Tori & DBA
* Supports legacy layouts written in XML

### WarpSpinner
```kotlin example
fun WarpSpinner(
    modifier: Modifier = Modifier,
    size: WarpSpinnerSize = WarpSpinnerSize.Default,
)
```

* Spinner component now available in Warp, ([more info here](https://warp-ds.github.io/tech-docs/components/spinner/))
* Supports Finn, Tori & DBA
* Supports legacy layouts written in XML

### Checkbox
Checkbox component has been updated!
* Support for extraText param
* Support for composable slot param
* Added support for checkbox groups - vertical & horizontal.

```kotlin example
fun WarpCheckbox(
    modifier: Modifier = Modifier,
    label: String,
    extraText: String? = null,
    slot: @Composable (() -> Unit)? = null,
    onCheckedChange: ((Boolean) -> Unit) = {},
    style: WarpCheckboxStyle = WarpCheckboxStyle.Default,
    enabled: Boolean = true,
    checked: Boolean = false,
    isError: Boolean = false
)

fun WarpCheckboxGroup(
    modifier: Modifier = Modifier,
    orientation: Orientation = Orientation.Vertical,
    title: String? = null,
    options: List<String>,
    selectedOptions: List<String>? = null,
    helpText: String? = null,
    enabled: Boolean = true,
    isError: Boolean = false,
    onOptionsSelected: (MutableList<String>) -> Unit
)
```

### Color token update for colors.text.subtle

The text color token textSubtle has been updated for all platforms in both day & night mode.
For DBA light mode there has been an update for icon.default color.
These changes have triggered failing paparazzi tests which have been re-generated.