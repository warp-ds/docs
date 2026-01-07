# Spinner - Frameworks
A spinner informs users about the loading of content.

<ComponentsStatus />

## Android

<FrameworkTabs />

### Syntax

```kotlin
@Composable
fun WarpSpinner(
    modifier: Modifier = Modifier,
    size: WarpSpinnerSize = WarpSpinnerSize.Default,
)
```


### Visual options
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

### Legacy support
Supported in xml layouts

```xml
<com.schibsted.nmp.warp.components.legacy.WarpSpinnerView
    android:id="@+id/spinner_large"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:padding="@dimen/space2"
    app:spinnerSize="large"/>
```

### Parameters

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the spinner |
| size | WarpSpinnerSize.Small  WarpSpinnerSize.Default  WarpSpinnerSize.Large | WarpSpinnerSize.Default | Size of the spinner |