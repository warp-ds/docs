# Logo

<ComponentsStatus />

## Android

<FrameworkTabs />

### Syntax

```kotlin example
@Composable
fun WarpLogo(
    modifier: Modifier = Modifier,
    small: Boolean = false,
    brand: String
)

@Composable
fun WarpLogo(
    modifier: Modifier = Modifier,
    small: Boolean = false,
    brand: Brand
)
```

### Visual options
Default will be a large logo. If small is set to true will show a 32x32 icon.
Both sizes support dark/light mode.

```kotlin example
WarpLogo(brand = "finn")
WarpLogo(brand = "finn", small = true)

```

### Usage

Basic usage for the logo - can be shown using either a string or enum for the brand. 

```kotlin example
WarpLogo(brand = "tori")
WarpLogo(brand = "tori", small = true)

WarpLogo(brand = Brand.Finn)
WarpLogo(brand = Brand.Finn, small = true)

```
Following brands are supported;

```kotlin example
enum class Brand(val identifier: String) {
    Autovex("autovex"),
    Bilbasen("bilbasen"),
    Blocket("blocket"),
    DBA("dba"),
    Finn("finn"),
    FinnTagline("finntagline"),
    Nettbil("nettbil"),
    Oikotie("oikotie"),
    Qasa("qasa"),
    Tori("tori"),
    Vend("vend"),
    VendPro("vendpro")
}

```


### Legacy support
Not supported

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `brand` | `String` or `Brand` | required | The brand to show, as an identifier string (`"finn"`) or a `Brand` value (`Brand.Finn`). |
| `small` | `Boolean` | `false` | Shows the 32x32 square logo instead of the full logo. |
| `modifier` | `Modifier` | `Modifier` | Modifier applied to the logo. |

<component-questions />
