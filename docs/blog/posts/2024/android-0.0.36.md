---
title: 'WARP Android release v.0.0.36'
date: 2024-12-13
---

Bugfixes & token updates
---

# Warp Android release 0.0.36 

## 2024-12-13

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

#### WarpTab improvements
- Truncated long text to prevent overflow.

#### Style dictionary tokens
- Updated style dictionary tokens for consistent theming.
- Updated Finn gray tokens.

#### WarpCallout
- Made the popover WarpCallout component non-blocking.

#### Checkbox component
- Fixed checkbox click area when there is no label.
- Updated screenshots for the checkbox with no label.

#### WarpTheme
- Added an optional `forceDarkmode` parameter to all themes.

#### WarpButton
- Changed the default modifier for the small button modifier.

### Miscellaneous
- Updated paparazzi screenshots for changed tokens.
