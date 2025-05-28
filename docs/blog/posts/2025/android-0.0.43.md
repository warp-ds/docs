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
Similar behaviour to WarpCallout and WarpTooltip

```kotlin
val trailingState = remember { WarpPopoverState(false) }

WarpPopover(
    modifier = Modifier.width(200.dp),
    state = trailingState,
    title = "Title text",
    body = "Popover body text.",
    edge = Edge.Leading,
    onDismiss = { trailingState.isVisible = false }
) {
    WarpButton(
        "Trailing Popover",
        { trailingState.isVisible = !trailingState.isVisible })
}
```

#### Focus modes
- Focus mode has been added to several components:
- WarpButton
- WarpRadio
- WarpCheckbox


### Miscellaneous
- Added a helper method to retrieve an icon resource ID using the icon name
- Added support for minLines attribute in WarpText component
- Adjusted scaling of badge icons for consistent rendering