# Understanding Font Weights in Web Browsers
This document explains how font weights are handled in web browsers, particularly in the context of the brand-font setups in our projects.

## Font Setup

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
| Weight category | Font Weight   | Font File Used    | In Browser      | In Figma                            |
| --------------- | ------------- | ----------------- | --------------- | ----------------------------------- |
| Ultra Light     | `100-399`     | `FINNType-Light`  | font-weight:400 | Simulates a very thin weight.       |
| Normal          | **`400`**     | `FINNType-Light`  | font-weight:400 | Matches `400` weight in Figma.      |
| Medium          | `401-500`     | `FINNType-Light`  | font-weight:400 | Simulates a slightly bolder weight. |
| Bold            | **`501-700`** | `FINNType-Medium` | font-weight:700 | Matches `700` weight in Figma.      |
| Extra Bold      | `701-900`     | `FINNType-Medium` | font-weight:700 | Simulates a heavier bold weight.    |

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

## FAQ
### Why does Figma's 500 weight look different on the web?
Figma visually simulates intermediate weights like 500. On the web, 500 maps to 400 (FINNType-Light) because no 500 font file exists.

## Can browsers artificially thicken fonts?
No, browsers do not artificially thicken or thin fonts. They use the provided font files directly.

