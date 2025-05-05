
## Syntax

```kotlin example
@Composable
fun WarpLink(
    modifier: Modifier = Modifier,
    text: String,
    onClick: () -> Unit,
    style: WarpTextStyle = WarpTextStyle.Body,
    icon: WarpIconResource? = null,
    underline: Boolean = false
)
```

The default style for the link is WarpTextStyle.Body and the text color is always WarpTheme.colors.text.link.

```kotlin example
WarpLink(
    text = "Warp link",
    onClick = { /* link click action */ }
)
```

Can display an icon and be underlined 
```kotlin example
WarpLink(
    text = "Warp link with icon",
    onClick = { /* link click action */ },
    icon = icons.linkExternal
)

WarpLink(
    text = "Warp link with underline",
    onClick = { /* link click action */ },
    icon = icons.link,
    underline = true
)
```

There are a variety of styles supported for the link component and they are the same as the text component:

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
Not supported

### Parameters

<api-table type=android component="Link" />

