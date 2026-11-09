---
title: 'WARP iOS release v.1.2.0'
date: 2026-11-04
---

Step indicator error states and numbered mode, and negative button types

---

# Warp iOS release 1.2.0

## 2026-11-04

#### Step indicator error states and numbered mode

`Steps` now supports error states and a numbered mode. Read more on the [Steps iOS page](/components/steps/frameworks/ios).

#### Negative button types

Buttons have new `negative` and `negativeQuiet` types. The `critical` and `criticalQuiet` types are deprecated and the buttons look the same. Read more on the [Button iOS page](/components/button/frameworks/ios).

```swift
// Before (deprecated)
Warp.Button(title: "Delete", action: delete, type: .critical)

// After
Warp.Button(title: "Delete", action: delete, type: .negative)
```

- Xcode can apply the rename for you with the deprecation fix-it.
- A `switch` that lists every old case and has no `default` no longer compiles. Apply the fix-it or add `default`.
