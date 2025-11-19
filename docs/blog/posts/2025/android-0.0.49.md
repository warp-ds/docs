---
title: 'WARP Android release v.0.0.49'
date: 2025-11-19
---

Select & Logo component, 16 new icons

---

# Warp Android release 0.0.49

## 2025-11-19

#### Select component
 Brand new WarpSelect component. Shows a dropdown list of String values which need to be provided with the items param. The chosen value will be returned in the onValueChange callback.

```kotlin
var choice by remember { mutableStateOf("") }
WarpSelect(
    modifier = Modifier.padding(bottom = dimensions.space3),
    value = choice,
    onValueChange = { choice = it },
    label = "Label",
    placeholderText = "Select an option",
    items = listOf("One", "Two", "Three", "Four", "Five", "Six"),
    helpText = "Help text"
)
```

#### Logo component

 New Logo component with day-night mode support. Available also as icons with size 32.dp x 32.dp (use small = true)

Supported brands: 
 - FINN
 - Blocket
 - Tori
 - DBA
 - Vend
 - Vend Pro
 - Autovex
 - Bilbasen
 - Qasa
 - Oikotie
 - Nettbil

 ```kotlin
WarpLogo(brand = Brand.Bilbasen)
WarpLogo(brand = Brand.Bilbasen, small = true)

```

#### New icons

16 new icons:
- GamingController
- ListNumbers
- Shovel
- TextHOne
- ArchiveBox
- CalendarBlank
- ClockCountdown
- Code
- Cookie
- DeliveryKey
- FileArrowDown
- Globe
- Moon
- SidebarChevronLeft
- SidebarChevronRight
- Sun


#### Miscellaneous

 - WarpText: Added onTextLayout callback
 - Removed Remppatori & Mittanbud icons
 - WarpButton fofocusable modifier fix