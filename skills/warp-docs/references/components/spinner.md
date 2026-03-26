# Spinner

A spinner informs users about the loading of content.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/spinner/overview), [Usage](https://warp-ds.github.io/docs/components/spinner/usage), [Android](https://warp-ds.github.io/docs/components/spinner/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/spinner/frameworks/ios)

**Framework support:** Android, iOS

## Overview

A spinner informs users about the loading of content.

Native only

For the web implementation of a "spinner", see [CSS - Animation - Spinner](https://warp-ds.github.io/docs/foundations/css-classes/animation#spinner).

See Figma: [Warp - Components / Spinner](https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components-2.0?node-id=900-35603&t=jDaOykQhPf30zVST-0)

## Inline Demo Markup

```html
<div class="py-32 px-16 flex gap-32 place-content-center place-items-center">
        <div class="animate-spinner [--spinner-size:16px]"></div>
        <div class="animate-spinner"></div>
        <div class="animate-spinner [--spinner-size:32px]"></div>
    </div>
```

## Usage

> This page is still in progress in the public docs.

## Frameworks

### Android

A spinner informs users about the loading of content.

[Android](https://warp-ds.github.io/docs/components/spinner/frameworks/android)[iOS](https://warp-ds.github.io/docs/components/spinner/frameworks/ios)

```kotlin
@Composable
fun WarpSpinner(
    modifier: Modifier = Modifier,
    size: WarpSpinnerSize = WarpSpinnerSize.Default,
)
```

There are three supported sizes for the Spinner.

```kotlin
WarpSpinnerSize.Small
WarpSpinnerSize.Default
WarpSpinnerSize.Large
```

The default size is WarpSpinnerSize.Default

```kotlin
WarpSpinner(size = WarpSpinnerSize.Small)
WarpSpinner()
WarpSpinner(size = WarpSpinnerSize.Large)
```

Supported in xml layouts

```xml
<com.schibsted.nmp.warp.components.legacy.WarpSpinnerView
    android:id="@+id/spinner_large"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:padding="@dimen/space2"
    app:spinnerSize="large"/>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the spinner |
| size | WarpSpinnerSize.Small WarpSpinnerSize.Default WarpSpinnerSize.Large | WarpSpinnerSize.Default | Size of the spinner |

### iOS

A spinner informs users about the loading of content.

[Android](https://warp-ds.github.io/docs/components/spinner/frameworks/android)[iOS](https://warp-ds.github.io/docs/components/spinner/frameworks/ios)

```swift
Warp.Spinner(
    size: SpinnerSize = .default,
    duration: CGFloat = 1,
    lineWidth: CGFloat = 3
)
```

```swift
Warp.Spinner(size: .large)
```

There are a variety of variants supported for the Spinner component:

```swift
enum Warp.SpinnerSize {        
    case small
    case `default`
    case large
    case custom(Double)
}
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.Spinner(size: .large).uiView
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| size | Warp.SpinnerSize | .default | Size of the Spinner. Use one of the predefined SpinnerSize values: .small, .default, .large, or .custom. |
| duration | CGFloat | 1 | Duration of Spinner animation |
| lineWidth | CGFloat | 3 | The thickness of the Spinner |
