# Switch

## Android

### Syntax

```kotlin example
fun WarpSwitch(
    modifier: Modifier = Modifier,
    checked: Boolean = false,
    onCheckedChange: ((Boolean) -> Unit) = { },
    enabled: Boolean = true,
    contentDescr: String? = null
)
```

The switch has only two appearances - default or disabled

```kotlin example
var checked by remember { mutableStateOf(true) }
WarpSwitch(
    checked = checked,
    onCheckedChange = { checked = it }
    )
```

To display a disabled switch - set enabled to false
```kotlin example
var checked by remember { mutableStateOf(true) }

WarpSwitch(
    checked = checked,
    onCheckedChange = { checked = it },
    enabled = false
    )
```

### Legacy support
To support layouts still written in xml the WarpSwitch can be used as a custom view. To add functionality, set onCheckedChanged listener.

```kotlin example
fun setOnCheckedChangeListener(onCheckedChangeListener: ((Boolean) -> Unit))
```

```xml example
<com.schibsted.nmp.warp.components.legacy.WarpSwitchView
    android:id="@+id/warp_switch"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_margin="@dimen/space2"
    app:switchChecked="true"
    app:switchEnabled="true"
     />
```

### Parameters

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the switch |
| onCheckedChange | `(Boolean) -> Unit` |  | Lambda to be invoked when checked or unchecked |
| enabled | boolean | true | Whether the switch is enabled or not |
| checked | boolean | false | Whether the switch is on or off |
| contentDescr | String | null | The a11y text for screenreaders |
