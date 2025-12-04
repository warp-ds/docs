
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

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String \| AnnotatedString |  | The text to be displayed |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the text |
| color | Color | WarpTheme.colors.text.default | The color of the text |
| style | WarpTextStyle.Display  WarpTextStyle.Title1  WarpTextStyle.Title2  WarpTextStyle.Title3  WarpTextStyle.Title4  WarpTextStyle.Title5  WarpTextStyle.Title6  WarpTextStyle.Preamble  WarpTextStyle.Body  WarpTextStyle.BodyStrong  WarpTextStyle.Caption  WarpTextStyle.CaptionStrong  WarpTextStyle.Detail  WarpTextStyle.DetailStrong | WarpTextStyle.Body | Sets the appearance of the text - font and size |
| maxLines | Int | Int.MAX_VALUE | Max lines of text |
| minLines | Int | 1 | Min lines of text |
| textAlign | TextAlign | null | TextAlign controls how text aligns in the space it appears |
| overflow | TextOverflow | TextOverflow.Ellipsis | How overflowing text should be handled |
| softWrap | Boolean | true | If text should wrap or not |
| textDecoration | TextDecoration | null | Defines a horizontal line to be drawn on the text. Useful for displaying links |
| onTextLayout | `(TextLayoutResult) -> Unit` | {} | Callback providing paragraph info, text size, baselines, and more |
