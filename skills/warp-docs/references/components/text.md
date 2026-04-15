# Text

Pre-defined styles provide a font and size.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/text/overview), [Usage](https://warp-ds.github.io/docs/components/text/usage), [Android](https://warp-ds.github.io/docs/components/text/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/text/frameworks/ios)

**Framework support:** Android, iOS

## Overview

Pre-defined styles provide a font and size.

## Inline Demo Markup

```html
<div>
        <p class="text-display">Display</p>
    </div>
    <div>
        <p class="t1">Title1</p>
    </div>
    <div>
        <p class="t2">Title2</p>
    </div>
    <div>
        <p class="t3">Title3</p>
    </div>
    <div>
        <p class="t4">Title4</p>
    </div>
    <div>
        <p class="t5">Title5</p>
    </div>
    <div>
        <p class="t6">Title6</p>
    </div>
    <div>
        <p class="text-preamble">Preamble</p>
    </div>
    <div>
        <p class="text-body">Body</p>
    </div>
    <div>
        <p class="text-body font-bold">BodyStrong</p>
    </div>
    <div>
        <p class="text-caption">Caption</p>
    </div>
    <div>
        <p class="text-caption font-bold">CaptionStrong</p>
    </div>
    <div>
        <p class="text-detail">Detail</p>
    </div>
    <div>
        <p class="text-detail font-bold">DetailStrong</p>
    </div>
```

## Usage

> This page is still in progress in the public docs.

## Frameworks

### Android

Pre-defined styles provide a font and size.

[Android](https://warp-ds.github.io/docs/components/text/frameworks/android)[iOS](https://warp-ds.github.io/docs/components/text/frameworks/ios)

```kotlin
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

```kotlin
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

```kotlin
WarpText(
    text = "Click this link",
    modifier = Modifier.clickable { clickFunction.invoke() },
    style = WarpTextStyle.Caption,
    color = WarpTheme.colors.text.link
)
```

There are a variety of styles supported for the text component:

```kotlin
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

To support layouts still written in xml the WarpText can be used as a custom view.

```kotlin
fun setOnClickListener(onCLick: OnClickListener?)
```

```xml
<com.schibsted.nmp.warp.components.legacy.WarpTextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:text="Warp speed"
    app:warpTextStyle="title1"
    app:color="@color/warp_text_link"
     />
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String \| AnnotatedString |  | The text to be displayed |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the text |
| color | Color | WarpTheme.colors.text.default | The color of the text |
| style | WarpTextStyle.Display WarpTextStyle.Title1 WarpTextStyle.Title2 WarpTextStyle.Title3 WarpTextStyle.Title4 WarpTextStyle.Title5 WarpTextStyle.Title6 WarpTextStyle.Preamble WarpTextStyle.Body WarpTextStyle.BodyStrong WarpTextStyle.Caption WarpTextStyle.CaptionStrong WarpTextStyle.Detail WarpTextStyle.DetailStrong | WarpTextStyle.Body | Sets the appearance of the text - font and size |
| maxLines | Int | Int.MAX_VALUE | Max lines of text |
| minLines | Int | 1 | Min lines of text |
| textAlign | TextAlign | null | TextAlign controls how text aligns in the space it appears |
| overflow | TextOverflow | TextOverflow.Ellipsis | How overflowing text should be handled |
| softWrap | Boolean | true | If text should wrap or not |
| textDecoration | TextDecoration | null | Defines a horizontal line to be drawn on the text. Useful for displaying links |
| onTextLayout | (TextLayoutResult) -> Unit | {} | Callback providing paragraph info, text size, baselines, and more |

### iOS

Pre-defined styles provide a font and size.

[Android](https://warp-ds.github.io/docs/components/text/frameworks/android)[iOS](https://warp-ds.github.io/docs/components/text/frameworks/ios)

```swift
Warp.Text(
    _ text: String,
    style: Warp.TextStyle,
    color: Color = Warp.Color.token.text
)
```

```swift
Warp.Text("This is a text", style: .body)
```

There are a variety of variants supported for the Text component:

```swift
enum Warp.TextStyle {
    case display
    case title1
    case title2
    case title3
    case title4
    case title5
    case title6
    case preamble
    case body
    case bodyStrong
    case caption
    case captionStrong
    case detail
    case detailStrong
}
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.Text("This is a text", style: .body).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | The text to be displayed |
| style | Warp.TextStyle |  | Sets the appearance of the text - font and size. Use one of the predefined TextStyle values: .display, .title1, .title2, .title3, .title4, .title5, .title6, .preamble, .body, .bodyStrong, .caption, .captionStrong, .detail, or .detailStrong |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| color | Color | Warp.Token.text | A solid color for the text. |
