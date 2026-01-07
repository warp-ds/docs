# Toast - Frameworks
Toasts are brief user feedback messages that overlay content.

## Android

<!-- Insert framework tabs here !-->

### Syntax

```kotlin example
@Composable
fun WarpToast(
    modifier: Modifier = Modifier,
    state: WarpToastState,
    type: WarpToastType = WarpToastType.Success,
    duration: Long = WarpToastDuration.SHORT,
    onDismiss: () -> Unit = { },
)
```

### Visual options & duration
The Toast has a default duration set to SHORT, but other options are also available. Success toast is default but can be also shown in these styles:

```kotlin example
enum class WarpToastType {
    Success,
    Warning,
    Error
}

object WarpToastDuration {
    const val SHORT = 3000L
    const val LONG = 10000L
    const val INFINITE = 6000000L
}
```

### Usage

The toast can be used by creating it once and then shown by setting text using the WarpToastState. Duration can be adjusted as well as the style. If needed it is possible to set a custom onDismiss function, but if not set it will show for the built in duration time until it disappears.


```kotlin example
val toastSuccess = remember { WarpToastState() }
val toastWarning = remember { WarpToastState() }
val toastError = remember { WarpToastState() }

WarpButton(modifier = Modifier.padding(bottom = dimensions.space2),
    text = "Show Success toast",
    onClick = {
        toastSuccess.showToast("Toast success")
    })
WarpButton(modifier = Modifier.padding(bottom = dimensions.space2),
    text = "Show Warning toast",
    onClick = {
        toastWarning.showToast("Toast warning")
    })
WarpButton(modifier = Modifier.padding(bottom = dimensions.space2),
    text = "Show Negative toast",
    onClick = {
        toastError.showToast("Toast error")
    })
WarpToast(
    state = toastSuccess
    )
WarpToast(
    state = toastWarning,
    type = WarpToastType.Warning,
    duration = WarpToastDuration.LONG
    )
WarpToast(
    state = toastError,
    type = WarpToastType.Error,
    duration = WarpToastDuration.INFINITE
    )
```



### Legacy support
Not supported

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| state | WarpToastState |  | State of the toast used in hide/show logic and to set the text |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | The modifier for the Toast. |
| type | WarpToastType.Success   WarpToastType.Warning   WarpToastType.Error | WarpToastType.Success | Style of the toast |
| duration | WarpToastDuration.SHORT   WarpToastDuration.LONG   WarpToastDuration.INFINITE | WarpToastDuration.SHORT | Duration the Toast is shown |
| onDismiss | `() -> Unit` | {} | The function to be invoked when dismissed |
