
### Syntax

```kotlin example
@Composable
fun WarpText(
    text: String | AnnotatedString,
    modifier: Modifier = Modifier,
    color: Color = colors.text.default,
    style: WarpTextStyle = WarpTextStyle.Body,
    maxLines: Int = Int.MAX_VALUE,
    minLines: Int = 1,
    textAlign: TextAlign? = null,
    overflow: TextOverflow = TextOverflow.Ellipsis,
    softWrap: Boolean = true,
    textDecoration: TextDecoration? = null,
    onTextLayout: (result: TextLayoutResult) -> Unit = {}
)
```

The default style for the text is WarpTextStyle.Body and the default text color is WarpTheme.colors.text.default.

```kotlin example
WarpText(
    text = "Warp!"
)

WarpText(
    text = "Warp with style",
    modifier = Modifier.padding(vertical = 8.dp),
    style = WarpTextStyle.Display,
    color = WarpTheme.colors.text.positive
)
```

To make WarpText clickable use the modifier function:
```kotlin example
WarpText(
    text = "Click this link",
    modifier = Modifier.clickable { clickFunction.invoke() },
    style = WarpTextStyle.Caption,
    color = WarpTheme.colors.text.link
)
```

There are a variety of styles supported for the text component:

```kotlin example
WarpTextStyle {
    Display,
    Title1,
    Title2,
    Title3,
    Title4,
    Title5,
    Title6,
    Preamble,
    Body,
    BodyStrong,
    Caption,
    CaptionStrong,
    Detail,
    DetailStrong
}
```


### Legacy support
To support layouts still written in xml the WarpText can be used as a custom view.

```kotlin example
fun setOnClickListener(onCLick: OnClickListener?)
```

```xml example
<com.schibsted.nmp.warp.components.legacy.WarpTextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:text="Warp speed"
    app:warpTextStyle="title1"
    app:color="@color/warp_text_link"
     />
```

### Parameters

<api-table type=android component="Text" />
