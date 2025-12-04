# Date picker

## Android

### Syntax

```kotlin example
@Composable
fun WarpDatePicker(
    modifier: Modifier = Modifier,
    onDateSelected: (Long) -> Unit,
    onDismiss: (() -> Unit)? = null,
    preselectedDateMillis: Long? = null,
    type: WarpDatePickerType = WarpDatePickerType.DIALOG,
    selectableDates: SelectableDates = DatePickerDefaults.AllDates
)
```

### Visual options
Can be shown as a dialog or inline.

```kotlin example
enum class WarpDatePickerType {
    DIALOG,
    INLINE
}
```

### Usage

Basic usage for the datepicker - onDateSelected callback will return the chosen date in milliseconds.

```kotlin example
var dateinMillis by remember { mutableStateOf(System.currentTimeMillis()) }

WarpDatePicker(
    type = WarpDatePickerType.INLINE,
    onDateSelected = {
        dateinMillis = it
    }
)
```

### Dialog

If another component should trigger the datepicker then WarpDatePickerType.DIALOG should be used. In this example, a WarpTextField is used as the trigger. 
When there is a need to block some dates, use the selectableDates param. In this example only future dates are allowed.

```kotlin example
val futureDates = object : SelectableDates {
    override fun isSelectableDate(utcTimeMillis: Long): Boolean {
        return utcTimeMillis > System.currentTimeMillis()
    }
}

var showDialog by remember { mutableStateOf(false) }
WarpTextField(
    modifier = Modifier.padding(horizontal = dimensions.space2),
    value= dateString ?: "",
    placeholderText = "Select date",
    onValueChange = { formatter.formatDate(dateinMillis, Locale.getDefault()) },
    trailingIcon = { WarpIcon(modifier = Modifier.clickable { showDialog = true }, icon = icons.calendar) }
    )
if (showDialog) {
    WarpDatePicker(
    type = WarpDatePickerType.DIALOG,
    preselectedDateMillis = dateinMillis,
    onDateSelected = {
        dateinMillis = it
        dateString = formatter.formatDate(dateinMillis, Locale.getDefault())
        showDialog = false
        },
    onDismiss = { showDialog = !showDialog },
    selectableDates = futureDates
    )
}
```

### Legacy support
Not supported

### Parameters

<api-table type=android component="Datepicker" />
