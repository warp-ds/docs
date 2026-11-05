---
title: 'WARP Android release v.0.0.48'
date: 2025-10-21
---

Blocket font update & Divider component

---

# Warp Android release 0.0.48

## 2025-10-21

#### Divider component
- Brand new WarpDivider component. Available as vertical, horizontal - dashed or solid

```kotlin
WarpDivider(modifier = Modifier.padding(dimensions.space2), Orientation.Vertical)
WarpDivider(modifier = Modifier.padding(dimensions.space2), Orientation.Vertical, dashed = true)
WarpDivider(modifier = Modifier.padding(dimensions.space2))
WarpDivider(modifier = Modifier.padding(dimensions.space2), dashed = true)
```

#### Blocket font update

- Blocket Display has been removed.
- Display typography now uses Blocket Sans (as it does today in production).
- Bold → Medium: Display, T1–T6, Body Strong, Capture Strong, and Detail Strong have all switched from Bold to Medium weight.