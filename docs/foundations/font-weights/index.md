# Understanding Font Weights in Web Browsers
This document explains how font weights are handled in web browsers, particularly in the context of the brand-font setups in our projects.

## Relevant stuff from W3C
### Sources
- [CSS Fonts Module Level 3](https://www.w3.org/TR/css-fonts-3/)
- [CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4/)

### CSS Font-Weight Values and Categories
| **Weight Keyword**        | **Numeric Value** | **Description**                       |
|-----------------------------|-------------------|---------------------------------------|
| Thin                       | `100`            | The thinnest weight available.        |
| Extra Light (Ultra Light)  | `200`            | Very light weight.                    |
| Light                      | `300`            | Light weight.                         |
| Normal (Regular, Book)     | `400`            | Default weight for most body text.    |
| Medium                     | `500`            | Slightly thicker than `400`.          |
| Semi Bold (Demi Bold)      | `600`            | Between `500` and `700`.              |
| Bold                       | `700`            | Standard bold weight.                 |
| Extra Bold (Ultra Bold)    | `800`            | Heavier than `700`.                   |
| Black (Heavy)              | `900`            | The heaviest weight available.        |

---

### Notes

#### Default Weight
- If no `font-weight` is specified, the browser defaults to `400` (Normal).

#### Aliases
- Some keyword cathegories have multiple names (e.g., `Normal` can also be called `Regular` or `Book`).

#### Intermediate Values
- Non-standard numeric values (e.g., `450`, `725`) are allowed but will fallback to the closest available weight in the font file.

---

### How Browsers Map Font-Weight Values

If a font family doesn’t include all weights, the browser maps the specified value to the nearest available weight. For example:

- A font with `400` and `700` will map:
  - `100–500` → `400` (Light/Normal).
  - `501–900` → `700` (Bold).

---

## WARP Font Setup

### Brand Fonts
Our current font setup uses two distinct weights for each brand. For finn this setup looks like this:

```css example
@font-face {
    font-family: Finntype;
    src: url(https://assets.finn.no/pkg/@warp-ds/fonts/v1/FINNTypeStrippet-Light.woff2)format("woff2"),url(https://assets.finn.no/pkg/@warp-ds/fonts/v1/FINNTypeStrippet-Light.woff)format("woff");
    font-weight: 400;
    font-style: normal
}

@font-face {
    font-family: Finntype;
    src: url(https://assets.finn.no/pkg/@warp-ds/fonts/v1/FINNTypeStrippet-Medium.woff2)format("woff2"),url(https://assets.finn.no/pkg/@warp-ds/fonts/v1/FINNTypeStrippet-Medium.woff)format("woff");
    font-weight: 700;
    font-style: normal
}
```


## How does font-weights actually effect these fonts
This is in not the way to use font-weights in Warp, its just set up to illustrate what happens if font-weights other than 400(normal), or 700(bold) is set.

<ThemeSwitcher />
<font-weights />

```html example
<p style="font-weight:100">This is a text, hardcoded font-weight:100</p>
<p style="font-weight:200">This is a text, hardcoded font-weight:200</p>
<p style="font-weight:300">This is a text, hardcoded font-weight:300</p>
<p style="font-weight:400">This is a text, hardcoded font-weight:400</p>
<p style="font-weight:500">This is a text, hardcoded font-weight:500</p>
<p style="font-weight:501">This is a text, hardcoded font-weight:501</p>
<p style="font-weight:600">This is a text, hardcoded font-weight:600</p>
<p style="font-weight:700">This is a text, hardcoded font-weight:700</p>
<p style="font-weight:800">This is a text, hardcoded font-weight:800</p>
<p style="font-weight:900">This is a text, hardcoded font-weight:900</p>
```
### So whats going on in this example
Based on the font setup the browser will try to use the 'closest' defined font file. If we hardcode font-weight 1-500 it will end up with using the lightest font, if we hardcode 501-900 it will end up using the boldest font.
| Weight category | Font Weight   | Font File Used    | In Browser      |
| --------------- | ------------- | ----------------- | --------------- |
| thin            | `100`         | `FINNType-Light`  | font-weight:400 |
| Normal          | **`400`**     | `FINNType-Light`  | font-weight:400 |
| Medium          | `401-500`     | `FINNType-Light`  | font-weight:400 |
| Bold            | **`501-700`** | `FINNType-Medium` | font-weight:700 |
| Extra Bold      | `701-900`     | `FINNType-Medium` | font-weight:700 |

## Key Observations

### Font Switching Threshold
- The browser switches from `FINNType-Light` to `FINNType-Medium` at exactly `501`.

### Why Does the Switch Happen at 501?
- The browser divides the weight range (`100–900`) into interpolation zones:
  - `FINNType-Light` (400) is responsible for weights `100–500`.
  - `FINNType-Medium` (700) is responsible for weights `501–900`.
- This zone-based fallback ensures that intermediate weights (`500`, `501`, etc.) are mapped consistently:
  - `font-weight: 500` is part of the **lower zone**, so it uses `FINNType-Light`.
  - `font-weight: 501` is part of the **upper zone**, so it uses `FINNType-Medium`.

### No Synthetic Weights
- Browsers do not artificially modify font thickness for unavailable weights. They strictly use the 'closest' available font file.

### Rendering Variations
- Fonts may appear slightly lighter or darker on different systems due to rendering techniques like **subpixel antialiasing** or **hinting**.

### Use Explicit Font-Family Mapping
To avoid confusion and unintended fallbacks, explicitly use these classes for dealing with font-weight, unless the correct weight is already default on the element in question.

```html example
<span class="font-normal"> ... </span>
<span class="font-bold"> ... </span>
```

### Avoid Intermediate Weights
Do not use weights like 300 or 500, as they will fallback to 400 (Light) and may not appear as intended.

#### Example
- If another font-file is defined at a later stage, lets say a medium font (500) in between the regular and bold we use today in Warp, the calculations of the breakpoints between what font-file wins will change as well

For the weights `400`, `500`, and `700`, here’s how the weight  are divided:

| **Weight Range** | **Font File Used** | **Notes**                                    |
| ---------------- | ------------------ | -------------------------------------------- |
| `100–449`        | `400` (regular)    | Weights closer to `400` than `500`.          |
| `450–599`        | `500` (Medium)     | Weights closer to `500` than `400` or `700`. |
| `600–900`        | `700` (Bold)       | Weights closer to `700` than `500`.          |
|                  |                    |                                              |

For robustness, never set a numeric `font-weight` value, use the keywords, or preferably the utility classes like `font-normal`, and `font-bold` instead.


## FAQ
### 1. Why do fonts look lighter in Figma compared to a web browser?
Figma uses a different font rendering engine than web browsers, which can make fonts appear lighter and smoother in Figma. In contrast, fonts rendered in browsers often look a bit darker or slightly heavier. Additionally, rendering differences can vary slightly between browsers, but these differences are usually minimal and not noticeable.
[More about Figma render difference](https://forum.figma.com/t/font-in-browser-seem-bolder-than-in-the-figma/24656)
As mentioned in this linked issue, it is possible to tune the rendering in browsers to look somewhat more similar to the Figma render, but it was declined at some point because it hurt the contrast to much, especially on the thinner fonts when they are white text on dark background.

---

### 2. Can browsers artificially thicken fonts?
No, browsers do not artificially thicken or thin fonts. They rely entirely on the font files provided and render them as-is. When a specific font weight is unavailable, browsers map to the closest defined weight in the font file, but they do not modify the glyph thickness.

---

### 3. Why do FinnType fonts have different weights in Figma compared to web browsers?
This difference is due to how the fonts are set up in Figma versus on the web:

#### On the Web
The FinnType font files are explicitly mapped to the correct `font-weight` values in CSS:
- `FinnType-Light` is used for `font-weight: 400` (regular text).
- `FinnType-Medium` is used for `font-weight: 700` (bold text).

#### In Figma
The same font files are used, but Figma doesn’t allow the same level of configurability for `font-weight` mappings. Instead the light and medium font files are just used as regular and bold. This gives the correct look, but When inspecting text in Figma’s **Dev Mode**, you might see bold text incorrectly labeled as `font-weight: 500`. This is a limitation of Figma's setup, as `font-weight: 500` does not exist in the web implementation. In the browser, bold text is correctly mapped to `700`. The same goes for any regular text, inspector will report 300, but implementation is really 400.

#### Do designers need to worry about this difference?
No, designers don’t need to think about `font-weight` mappings. Simply choose **Regular** or **Bold** for text styles, or any of the text-variants available in the library and the fonts will render correctly both in Figma and on the web.

#### Why is this setup confusing?
We acknowledge this setup can be a bit confusing, especially when inspecting fonts in Figma’s **Dev Mode**. However, the fonts are consistent between Figma and the web for visual purposes. This setup ensures proper rendering across platforms, even if the underlying mappings differ slightly.
