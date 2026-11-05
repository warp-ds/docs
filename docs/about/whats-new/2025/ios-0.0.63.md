---
title: 'WARP iOS release v.0.0.63'
date: 2025-08-21
---

Updated regular icons
---

# Warp iOS release 0.0.63

## 2025-08-21

#### Updated regular icons
- New regular icons with internal padding (so new icons looks smaller)
- Default size of all regular icons is now 24 pt 
- New icons - Qasa
- Removed Honk icon
- Fix: TV icon should now load properly


### Miscellaneous
- Adjusted Toast duration times:
```swift
enum Warp.Toast.Duration {
    /// Short duration, typically used for quick feedback messages.
    /// Default is 5 seconds.
    case short
    /// Long duration, typically used for more significant messages that require user attention.
    /// Default is 10 seconds.
    case long
    /// Infinite duration, typically used for messages that require user interaction to dismiss.
    case infinite
    /// Custom duration time interval
    case custom(interval: TimeInterval)
}
```
- Add snapshot tests coverage for most Warp components
- Deprecate `Broadcast` component, use `Alert` with `warning` style instead