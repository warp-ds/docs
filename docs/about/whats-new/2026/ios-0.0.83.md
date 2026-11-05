---
title: 'WARP iOS release v.0.0.83'
date: 2026-07-02
---

Navigation bar Liquid Glass style modifiers

---

# Warp iOS release 0.0.83

## 2026-07-02

#### Navigation bar Liquid Glass

Added UIKit navigation bar style helpers for Liquid Glass (iOS 26+).

```swift
// Apply globally at app launch
UINavigationBar.warpLiquidGlassStyle()

// Apply to a specific UINavigationController
navigationController.warpLiquidGlassStyle()

// Apply to a specific UIViewController
viewController.warpNavigationBarStyle()
```
