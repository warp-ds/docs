---
title: 'WARP Android release v.0.0.51'
date: 2026-01-08
---

WarpRangeSlider component

---

# Warp Android release 0.0.51

## 2026-01-08

### WarpRangeSlider component

Added `startIndex` and `endIndex` properties. When provided and changed, the slider position updates to this index. Used for two-way binding with external inputs (e.g., text fields). Parent should compute snap-to-nearest logic.

```kotlin
// Mutable indices for slider display
var stepStartIndex by remember { mutableIntStateOf(0) }
var stepEndIndex by remember { mutableIntStateOf(steps.lastIndex) }

WarpRangeSlider(
    items = steps,
    startIndex = stepStartIndex,
    endIndex = stepEndIndex,
    onLeftValueChanged = { newValue ->
        //...
    },
    onRightValueChanged = { newValue ->
        //...
    }
)
```
