---
title: 'WARP Android release v.0.0.34'
date: 2024-11-19
---

WarpIcon component & localization
---

# Warp Android release 0.0.34

## 2024-11-19

### WarpIcon component

WarpIcon now available in Warp android! This component provides the icon including content descriptions for all brands.
Can be created from an identifier string or a WarpIconResource

```kotlin example
@Composable
fun WarpIcon(
    modifier: Modifier = Modifier,
    icon: WarpIconResource,
    size: Dp = dimensions.icon.default,
    color: Color = colors.icon.default,
)

@Composable
fun WarpIcon(
    modifier: Modifier = Modifier,
    identifier: String,
    size: Dp = dimensions.icon.default,
    color: Color = colors.icon.default,
)
```

Simple usage:
```kotlin example
WarpIcon(identifier = "sofa", color = colors.icon.secondary)
WarpIcon(WarpResources.icons.airplane)
```


### WarpTextField fix

Kudos to Ali Shariat for making a fix for WarpTextField again. This time the correct vertical padding for the label.


### WarpButton fix - accepts @Composable icons

WarpButton can now accept a WarpIcon component.
In cases where a WarpIcon cannot be used and a drawable id is supplied, there is a possibility to use a iconModifier to modify the size or padding of the icon.

```kotlin example
WarpButton(
    onClick = { /*TODO*/ },
    style = WarpButtonStyle.Secondary,
    text = "With Warp icon",
    leadingIcon = { WarpIcon(icon = icons.clock, size = dimensions.icon.small) }
)

WarpButton(
    onClick = {  },
    style = WarpButtonStyle.Primary,
    text = "Drawable icon",
    trailingIcon = com.schibsted.nmp.warp.R.drawable.bulldozer,
    trailingIconContentDescr = com.schibsted.nmp.warp.R.string.bulldozer,
    iconModifier = Modifier.size(dimensions.icon.large)
    )
```
