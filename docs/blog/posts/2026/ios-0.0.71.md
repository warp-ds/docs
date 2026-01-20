---
title: 'WARP iOS release v.0.0.71'
date: 2026-01-20
---

StateView component

---

# Warp iOS release 0.0.71

## 2026-01-20

#### Technical issues

- add `arrowOffset` param to Callout and Tooltip components, this should allow to customize arrow positioning

```swift
Warp.Callout(
    size: showDefault ? .default : .small,
    title: "This is a multiline callout.\nIt demonstrates the use of an arrow offset.",
    arrowEdge: .top,
    arrowOffset: 100
)
```

#### New icons

- MicrophoneSlash
- Microphone
- Translate

#### Style tokens update

- DBA Dark mode fix
    - Icon-, Background- and Border-Secondary tokens changed to Pthaloblue-300 (before 400).
    - Secondary-Hover token changed to Pthaloblue-200 (before 300).
    - Secondary-Active token changed to Pthaloblue-100 (before 200).