---
title: 'WARP Android release v.0.0.43'
date: 2025-05-26
---

Popover & focus modes
---

# Warp Android release 0.0.43

## 2025-05-26


#### WarpPopover component
- Brand new component!
Similar behaviour as WarpCallout and WarpTooltip

```kotlin
val trailingState = remember { WarpPopoverState(false) }

WarpPopover(
    modifier = Modifier.width(200.dp),
    state = trailingState,
    title = "Trailing",
    body = "Trailing Pop over body.",
    edge = Edge.Leading,
    onDismiss = { trailingState.isVisible = false }
) {
    WarpButton(
        "Trailing Popover",
        { trailingState.isVisible = !trailingState.isVisible })
}
```

#### Focus modes
- Focus mode has been added to a number of components:
- WarpButton
- WarpRadio
- WarpCheckbox


### Miscellaneous
- Added help method to retrieve icon resource ID using the icon name
- Added support for minLines attribute in WarpText component
- Adjusted scaling of badge icons for consistent rendering