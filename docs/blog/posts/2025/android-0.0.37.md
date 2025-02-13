---
title: 'WARP Android release v.0.0.37'
date: 2025-01-20
---

Bugfixes & token updates
---

# Warp Android release 0.0.37 

## 2025-01-20

#### WarpColors token updates

##### Updated Tokens:
- **Text-Default**: Gray-900, White  
- **Text-Subtle**: Gray-600, Gray-400  
- **Text-Inverted-Subtle**: Gray-400, Gray-600  
- **Text-Static**: Gray-900, Gray-900  
- **Icon-Default**: Gray-900, White  
- **Icon-Subtle**: Gray-600, Gray-400  
- **Icon-Subtle-Hover**: Gray-700, Gray-300  
- **Icon-Subtle-Active**: Gray-800, Gray-200  
- **Icon-Static**: Gray-900, Gray-900  
- **Border-Inverted**: White, Gray-900  

##### Added Tokens:
- **Switch-Handle-Background**: Gray-500, Gray-500  
- **Switch-Handle-Background-Hover**: Gray-600, Gray-400  
- **Switch-Track-Border**: Gray-500, Gray-500  
- **Switch-Track-Border-Hover**: Gray-600, Gray-400  

##### Removed Tokens:
- **Switch-Background-Track-Disabled**: Gray-200, Gray-600  
- **Switch-Track-Background**: Gray-200, Gray-600  
- **Switch-Track-Background-Hover**: Gray-300, Gray-500  

#### WarpBadge enhancements
- Added WarpBadge tests and generated paparazzi screenshots.
- Introduced icon support for WarpBadge.
```kotlin
WarpBadge(
        text = "Icon",
        style = WarpBadgeStyle.Sponsored,
        alignment = Alignment.CenterEnd,
        icon = icons.awardMedal
    )
```

#### Checkbox update
- Introduced checkbox with no label support.
- Fixed checkbox click area when there is no label.
- Updated screenshots for the checkbox with no label.

#### WarpTab improvements
- Truncated long text to prevent overflow.

#### WarpCallout
- Made the popover WarpCallout component non-blocking.
- Added missing package & fixed imports

#### WarpTheme
- Added an optional `forceDarkmode` parameter to all themes.

#### WarpButton
- Changed the default modifier for the small button modifier.

#### WarpPill
- Now accepts WarpIcon instead of a drawable resource. 


### Miscellaneous
- Updated paparazzi screenshots for changed tokens.
- Added Hyphen.Auto to all typography textStyles to ensure reasonable truncation of long words.
- Added help methods to scale icons with textSize - 
```kotlin
fun calculateDimensionResource(context: Context, resId: Int): Dp

fun adaptDpToFontScale(configuration: Configuration, dimension: Dp): Dp 

fun adaptDimensionResourceToFontScale(
    context: Context,
    configuration: Configuration,
    resId: Int
): Dp
```
