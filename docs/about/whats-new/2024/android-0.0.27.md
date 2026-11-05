---
title: 'WARP Android release v.0.0.27'
date: 2024-08-08
---

Checkbox component & Compose update

---

# Warp Android release 0.0.27

## 2024-08-08

### WarpCheckbox

```kotlin example
fun WarpCheckbox(
    modifier: Modifier = Modifier,
    text: String,
    onCheckedChange: ((Boolean) -> Unit) = {},
    style: WarpCheckboxStyle = WarpCheckboxStyle.Neutral,
    enabled: Boolean = true,
    checked: Boolean = false,
)
```

* Checkbox component now available in Warp, ([more info here](https://warp-ds.github.io/docs/components/checkbox/))
* Supports Finn, Tori & DBA
* Supports legacy layouts written in XML


### Compose update

* Compose BOM has been updated to version 2024.06.00
