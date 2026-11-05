---
title: 'WARP Android release v.0.0.46'
date: 2025-09-23
---

Datepicker & Neutral brand
---

# Warp Android release 0.0.46

## 2025-09-23


#### WarpDatePicker
- Brand new datepicker component. Can be used as a dialog or inline. 
```kotlin
    WarpDatePicker(
        type = WarpDatePickerType.DIALOG,
        preselectedDateMillis = dateinMillis,
        onDateSelected = {
            dateString = formatter.formatDate(it, Locale.getDefault())
            showDialog = false
        },
        onDismiss = { showDialog = !showDialog },
        selectableDates = futureDates
    )
```

#### Neutral brand
Neutral brand library is now available.

#### 10 new regular icons
New icons:
- briefcaseuser
- calendarplus
- confetti
- draw
- luggage
- rotateleft
- rotateright
- shrink
- suitcasetrolley
- tshirt