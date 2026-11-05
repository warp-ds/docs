---
title: 'WARP Android release v.0.0.29'
date: 2024-10-11
---

Icons!
---

# Warp Android release 0.0.29

## 2024-10-11

### Warp Icon support
```kotlin example
Icon(
        imageVector = WarpTheme.icons.animalPaw,
        contentDescription = "Image of an animal paw",
        tint = WarpTheme.colors.icon.primary,
        modifier = Modifier.size(WarpTheme.dimensions.icon.default)
    )
```
```xml
<ImageView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:src="@drawable/animalpaw"
    />
```

* Icons now available in Warp, ([more info & fulll list of icons can be found here](https://warp-ds.github.io/tech-docs/components/icons/))
* Supports Finn, Tori & DBA
* Supports legacy layouts written in XML
