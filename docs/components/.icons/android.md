### Warp Resources

Warp icons are located within the WarpResources object. They are WarpIconResources created from vector drawables located in res/drawable and content descriptions located in res/values/strings.xml. Each brand has their corresponding translations of the text.

```kotlin
object WarpResources {
    val icons : WarpIconResources
    @Composable
    get() = WarpIconResources
}
```

WarpIcon is a new component which simplifies icon creation. Can be created with a icon reference or a identifier string.

```kotlin
@Composable
fun WarpIcon(
    modifier: Modifier = Modifier,
    icon: WarpIconResource,
    size: Dp = dimensions.icon.default,
    color: Color = colors.icon.default,
)

@Composable
fun WarpIcon(
    modifier: Modifier = Modifier,
    identifier: String,
    size: Dp = dimensions.icon.default,
    color: Color = colors.icon.default,
)
```

### Compose

To use an icon with compose the best way is to create a WarpIcon object. Default values for color and size are provided if no param is passed. 


```kotlin
WarpIcon(icons.airplane)

WarpIcon(
    identifier = "sofa", 
    color = colors.icon.secondary,
    size = dimensions.icon.large)

```

There are three provided sizes for icons. Also possible to enter a custom value in Dp.

```kotlin
object WarpIconDimensions {
    val small = 16.dp
    val default = 24.dp
    val large = 32.dp
}
```
There is a possibility to retrieve an icon by its name string or identifier. Returns null if no match is found.

```kotlin
icons.getIconByName("animalpaw")
icons.getIconByIdentifier("airplane")
```

### XML

The icons are available as vector drawables in the Warp library inside res/drawable. The default size is 32 Dp.

```xml
<ImageView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:src="@drawable/animalpaw"
    />
```