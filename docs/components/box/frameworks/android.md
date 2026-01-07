# Box - Frameworks
Box is a layout component used for separating content areas on a page.

<ComponentsStatus />

## Android

<FrameworkTabs />

### Syntax

```kotlin example
@Composable
fun WarpBox(
    modifier: Modifier = Modifier,
    boxStyle: WarpBoxStyle = WarpBoxStyle.Neutral,
    icon: @Composable (() -> Unit)? = null,
    heading: String? = null,
    text: String? = null,
    link: String? = null,
    linkAction: (() -> Unit)? = null,
    buttonText: String? = null,
    buttonAction: (() -> Unit)? = null,
)

@Composable
fun WarpBox(
    modifier: Modifier = Modifier,
    boxStyle: WarpBoxStyle = WarpBoxStyle.Neutral,
    content: @Composable () -> Unit
)
```

The default style for the box is Neutral and will be used if nothing is passed in the boxStyle param. 

```kotlin example
WarpBox(
    text = "Neutral Warp box"
)
```

There are three types of box styles:

```kotlin example
WarpBoxStyle {
    Neutral,
    Info,
    Bordered
}
```
There are two ways the box component can be used - by providing custom content or by using some of the pre-defined layout options.
To add custom content:
```kotlin example
WarpBox(
    modifier = Modifier
        .padding(dimensions.space1),
    boxStyle = WarpBoxStyle.Info
) {
    WarpText(
        modifier = Modifier
            .padding(dimensions.space2)
            .fillMaxWidth(),
        text = "This is the info style with custom content."
    )
}
```

It is possible to add an optional heading, icon, body text, link and a secondary button or all together. The box layout will adjust depending on which optional components are specified. 

```kotlin example
WarpBox(
    modifier = Modifier
        .padding(vertical = dimensions.space1)
        .fillMaxWidth(),
    boxStyle = WarpBoxStyle.Info,
    heading = "Hello Box! ",
    icon = {
        Icon(
            imageVector = Icons.Filled.AccountCircle,
            contentDescription = "Content description for the icon",
            tint = colors.icon.primary
        )
    },
    text = "This box has all optional UI elements.",
    link = "This is a link",
    linkAction = { /* Click function here */ },
    buttonText = "This is a button",
    buttonAction = { /* Click function here */ }
)
```


### Legacy support
To support layouts still written in xml the WarpBox can be used as a custom view. To add functionality to the optional link and button, set click listeners.
When providing an icon drawable, please also include a content description string for accessibility.

```kotlin example
fun setLinkOnClickListener(onClick: OnClickListener?)
fun setButtonOnClickListener(onClick: OnClickListener?)
```

```xml example
<com.schibsted.nmp.warp.components.legacy.WarpBoxView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:boxText="This is the box text"
    app:boxHeading="Warp Box!"
    app:boxStyle="info"
    app:boxIcon="@drawable/ic_duck"
    app:boxIconContentDescr="Icon content description"
    app:boxIconColor="@color/warp_icon_primary"
    app:boxLink="This is the link"
    app:boxButtonText="Button"
 />
```

### Parameters

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the box |
| boxStyle | WarpBoxStyle.Neutral  WarpBoxStyle.Info  WarpBoxStyle.Bordered | WarpBoxStyle.Neutral | Sets the style of the box |
| icon | `@Composable () -> Unit?` | null | Sets the icon for the box. Please always include contentDescription text for accessibility. |
| heading | String | null | The heading to be displayed in the box |
| text | String | null | The body text to be displayed in the box |
| link | String | null | The link text to be displayed in the box |
| linkAction | `() -> Unit` | null | Lambda to be invoked when clicked on the link |
| buttonText | String | null | The button text to be displayed on the button in the box |
| buttonAction | `() -> Unit` | null | Lambda to be invoked when clicked on the button |