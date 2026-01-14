# Alert - Frameworks
Alerts show high-signal messages meant to be noticed and prompting users.

<ComponentsStatus />

## Android

<FrameworkTabs />

### Syntax

```kotlin example
@Composable
fun WarpAlert(
    modifier: Modifier = Modifier,
    type: WarpAlertType = WarpAlertType.Info,
    title: String? = null,
    body: String,
    linkText: String? = null,
    linkAction: (() -> Unit)? = null,
    secondaryButtonText: String? = null,
    secondaryButtonAction: (() -> Unit)? = null,
    quietButtonText: String? = null,
    quietButtonAction: (() -> Unit)? = null,
)
```

The default style for the alert is Info and will be used if nothing is passed in the type param. 

```kotlin example
WarpAlert(
    type = WarpAlertType.Critical,
    title = "This is the critical variant of the alert element",
    body = "With an additional description"
    )
```

There are four types of alert styles:

```kotlin example
WarpAlertType {
    Info,
    Positive,
    Critical,
    Warning
}
```

It is possible to add an optional title, link text, secondary button and a quiet button or all together.
```kotlin example
WarpAlert(
    modifier = Modifier.padding(WarpTheme.dimensions.space2),        
    title = "This is the info variant with all options",
    body = "Click here to read more",
    type = WarpAlertType.Warning,
    linkText = "A link to read more here",
    linkAction = {  },
    secondaryButtonText = "Button",
    secondaryButtonAction = {  },
    quietButtonText = "Quiet Button",
    quietButtonAction = {  }
    )
```


### Legacy support
To support layouts still written in xml the WarpAlert can be used as a custom view. To add functionality to the optional link and buttons, set click listeners.

```kotlin example
fun setLinkOnClickListener(onClick: OnClickListener?)
fun setSecondaryButtonOnClickListener(onClick: OnClickListener?)
fun setQuietButtonOnClickListener(onClick: OnClickListener?)
```

```xml example
<com.schibsted.nmp.warp.components.legacy.WarpAlertView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:warpAlertType="critical"
    app:title="This is the title"
    app:body="This is the body"
    app:linkText="This is the link"
    app:quietButtonText="Button"
    app:secondaryButtonText="Button"/>
```

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| body | String |  | The body text to be displayed in the alert |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String | null | The title to be displayed in the alert |
| modifier | Modifier | Modifier | Sets the modifier for the alert |
| type | WarpAlertType.Info  WarpAlertType.Positive  WarpAlertType.Critical  WarpBadgeStyle.Warning | WarpAlertType.Info | Sets the style and icon of the alert |
| linkText | String | null | The link text to be displayed in the alert |
| linkAction | `() -> Unit` | null | Lambda to be invoked when clicked |
| secondaryButtonText | String | null | The secondary button text to be displayed in the alert |
| secondaryButtonAction | `() -> Unit` | null | Lambda to be invoked when clicked |
| quietButtonText | String | null | The quiet button text to be displayed in the alert |
| quietButtonAction | `() -> Unit` | null | Lambda to be invoked when clicked |

<component-questions />