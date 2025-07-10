### Import
Import Elements icons individually to optimize your JS bundle size by adding only the icons you need:

```js
import "@warp-ds/icons/elements/alert-16";
```

Don't import icons directly from the `@warp-ds/icons/elements` package, since this will add every Warp icon, and bloat your bundle.

### Syntax

```html
<w-icon-bag-16></w-icon-bag-16>
```

Check out exact imports in the [Examples](#examples) section.

### Styling
Elements icons are using shadow-dom to encapsulate their styles.
As a result, you can’t simply target their internals with the usual CSS selectors.
Instead, components expose “parts” that can be targeted with `part-[iconname-part]:classname`.
Here's an example that sets the width and height of an icon:

```html
<w-icon-bag-16 class="part-[w-icon-bag-16-part]:w-64 part-[w-icon-bag-16-part]:h-64"></w-icon-bag-16>
```

### Colors
The color of the icon will default to `currentColor`.
Colors can be changed using [semantic color classes for icons](../../foundations/css-classes/icon-color#icon-color).

### Fabric to WARP
We have changed the naming for these icons, so the old icons in Fabric were `f-icon-bag16` while the new icons in WARP is named as `w-icon-bag-16`
