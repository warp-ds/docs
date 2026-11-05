---
title: 'WARP iOS release v.0.0.70'
date: 2025-12-16
---

StateView component

---

# Warp iOS release 0.0.70

## 2025-12-16

#### State component

Brand new StateView component. Fully customizable state with icon/illustration support and optional logo endorsement.

```swift
// Pre-defined Login state with icon
StateView(
    image: .icon(.login),
    title: "Welcome Back",
    actionButton: StateView.StateButton(title: "Continue") { },
    quietButton: StateView.StateButton(title: "Cancel") { }
)

// Custom state with illustration
StateView(
    image: .illustration(Image("customIllustration")),
    imageContentDescription: "Custom illustration",
    title: "Custom state",
    description: "Custom text and custom content.",
    actionButton: StateView.StateButton(title: "Okay") { },
    quietButton: StateView.StateButton(title: "Retry") { },
    showLogo: true
)
```

#### Additional predefined states

- NoNetworkStateView
- FailToLoadStateView
- VerifyIdentityStateView
- NoSearchResultsStateView
- LoginStateView
- LoadingStateView
