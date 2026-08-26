---
title: 'WARP iOS release v.0.0.79'
date: 2026-04-28
---

ThemeEnvironment injection and new icons

---

# Warp iOS release 0.0.79

## 2026-04-28

#### Theme environment injection

Warp now supports injecting the brand theme via the SwiftUI environment. This replaces direct writes to `Warp.Theme` and enables per-subtree theme overrides.

```swift
// Set theme for the whole app
WindowGroup {
    ContentView()
        .warpTheme(.dba)
}

// Override theme for a subtree
VStack {
    // ...
}
.warpTheme(.finn)

// Read the theme in a component
struct MyView: View {
    @Environment(\.warpTheme) private var theme

    var body: some View {
        Text("Hello")
            .foregroundColor(Color(theme.token.text))
    }
}
```

All Warp components read the theme from the environment automatically. `StateViews` also support environment-injected themes with a fallback to the shared `Warp.Theme` global.

#### Minimum iOS version

- Minimum deployment target raised to **iOS 17**

#### New regular icons

- `Atv`
- `Bulldozer`
- `Caravan`
- `Harvester`
- `Moped`
- `Rv`
- `Snowmobile`
- `Truck`
