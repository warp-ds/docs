---
title: 'WARP Android release v.0.0.38'
date: 2025-02-17
---

Toast component & new icons
---

# Warp Android release 0.0.38 

## 2025-02-17

#### WarpIcons updates

##### New Icons:
- Agriculture machine
- Boat
- Car engine
- Jet ski
- Road
- Rowing boat
- Ruler
- Single cylinder
- Weight

##### Updated icons:
- Manual
- Seat


#### WarpToast component
- Brand new component supporting 3 types - success, warning & error
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

#### Expandable update
- Added support for boxed and default styles

### Miscellaneous
- Callout can now be configured to not dismiss onClick outside.
- Updated paparazzi screenshots.
- Refactored dimension helper methods into composables.
- Added ability to coerce min and max dimensions when scaling with fontScale.