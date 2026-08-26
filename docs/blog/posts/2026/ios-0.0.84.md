---
title: 'WARP iOS release v.0.0.84'
date: 2026-07-08
---

UITabBar styling helpers

---

# Warp iOS release 0.0.84

## 2026-07-08

#### UITabBar styling helpers

New UIKit helpers for styling `UITabBar` and `UITabBarItem` with Warp design tokens.

```swift
// Apply Warp styling globally at app launch
UITabBar.warpConfigureAppearanceProxy()

// Apply to a specific tab bar instance
tabBar.warpStyle()
tabBarController.warpStyle()

// Badge helpers on UITabBarItem
tabBarItem.warpSetBadge(count: 5)        // "5"
tabBarItem.warpSetBadge(count: 150)      // "99+"
tabBarItem.warpSetPresenceBadge()        // solid filled presence dot
tabBarItem.warpClearBadge()

// Configure icon tinting with Warp token colors
tabBarItem.warpConfigureImages(baseImage)
```
