---
title: 'WARP iOS release v.0.0.67'
date: 2025-10-21
---

Blocket font update & Divider component

---

# Warp iOS release 0.0.67

## 2025-10-21

#### Divider component
- Dividers are thin lines that group content in lists and layouts.

```swift
Warp.Divider(orientation: .horizontal, style: .solid)
Warp.Divider(orientation: .vertical, style: .dashed)
```

#### Blocket font update

- Blocket Display has been removed.
- Display typography now uses Blocket Sans (as it does today in production).
- Bold → Medium: Display, T1–T5, Body Strong, Capture Strong, and Detail Strong have all switched from Bold to Medium weight.