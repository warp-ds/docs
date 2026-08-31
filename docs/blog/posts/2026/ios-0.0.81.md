---
title: 'WARP iOS release v.0.0.81'
date: 2026-06-10
---

New Snackbar component and icons

---

# Warp iOS release 0.0.81

## 2026-06-10

#### Snackbar component

Brand new `Warp.Snackbar` component with full accessibility support. VoiceOver focus moves to the Snackbar when it appears.

```swift
// Basic usage
Warp.Snackbar(
    type: .positive,
    title: "Item successfully added",
    isPresented: $showSnackbar
)

// With inline action button (enforces minimum .long duration)
Warp.Snackbar(
    type: .negative,
    title: "Item deleted",
    action: Warp.Snackbar.Action(title: "Undo") { restore() },
    isPresented: $showSnackbar
)

// Neutral variant with custom icon
Warp.Snackbar(
    type: .neutralIcon(.info),
    title: "Info message",
    isPresented: $showSnackbar
)
```

Available types: `.positive`, `.warning`, `.negative`, `.info`, `.neutral`, `.neutralIcon(Warp.Icon)`.

Available durations: `.short` (4 s), `.long` (10 s), `.infinite`, `.custom(interval:)`.

#### Switch update

- Unselected variant now uses `borderStrong` token instead of `border`

#### New regular icons

- `Anchor`
- `Chainsaw`
- `File`
- `FilePdf`
- `FileText`
- `LowSpeedVehicle`
- `Trailer`
- `HeartFilled`
