---
title: 'WARP Android release v.0.0.50'
date: 2025-12-16
---

WarpState component!

---

# Warp Android release 0.0.50

## 2025-12-16

#### State component

 Brand new WarpState component. Fully customizable state with illustration/icon support. Also provides lazy mode pre-defined states (reused often within the app)

```kotlin
//Pre-defined Login state
WarpState(
    type = WarpStateType.Login,
    onPrimaryButtonClicked = { },
    onQuietButtonClicked = { }
)

//Custom state with illustration
WarpState(
    modifier = Modifier.fillMaxSize(),
    title = "Custom state",
    description = "Custom text and custom content.",
    painter = painterResource(R.drawable.warp_placeholder),
    imageContentDescription = "Placeholder illustration",
    primaryButtonText = "Okay",
    onPrimaryButtonClicked = { },
    quietButtonText = "Retry",
    onQuietButtonClicked = { }
)
```



#### Miscellaneous

 - WarpTexField: Only add label row if label exists
