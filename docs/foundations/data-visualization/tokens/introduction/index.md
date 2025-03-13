# Tokens & CSS for Dataviz Colors

*For design guidelines, see [Color Guidelines](/foundations/data-visualization/color/introduction/).*

We have defined a color palette for data visualization that should be used across all brands. On web, you can apply the dataviz colors using [CSS variables](#alternative-1-css-variables) or [Utility classes](#alternative-2-utility-classes). 

The dataviz color names include `dv` for dataviz, to differentiate them from regular WARP colors.

**On this page:**
[[toc]]

## Alternative 1: CSS variables
For CSS variables to work, you need to include a link to the dataviz CSS file in your project:

- `https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/dataviz.css`

Add this to your `index.html`

```html
<link
  rel="stylesheet"
  href="https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/dataviz.css"
/>
```

We have defined different color shades to be used for different element types (background, border, icon, line and text). We call these color categories. 

The pattern for the variable name is: `var(--w-dv-s-color-[color category]-[semantic-color]`

Example of CSS variables for the `Primary` semantic color:

| Color category | CSS variable      |  
| -------------- | ----------------- | 
| Background     | `var(--w-dv-s-color-background-primary)` | 
| Background Subtle | `var(--w-dv-s-color-background-primary-subtle)` | 
| Border         | `var(--w-dv-s-color-border-primary)` |
| Icon           | `var(--w-dv-s-color-icon-primary)` |
| Line           | `var(--w-dv-s-color-line-primary)` |
| Text           | `var(--w-dv-s-color-text-primary)` |

CSS variables can applied to both HTML and SVG elements. 

### HTML example
Example of applying the primary dataviz border color to a `<div>` border:

``` html
<div style="width: 24px; height: 80px; 
            border: 2px solid var(--w-dv-s-color-border-primary);">
</div>
```  

### SVG example
Example of applying the primary dataviz border color to a `<rect>` stroke in an SVG:

``` xml
<rect x="16" y="16" width="24" height="80"
  stroke="var(--w-dv-s-color-border-primary)" 
  stroke-width="2">
</rect>

```  

## Alternative 2: Utility classes

Before using the utility classes, you need to install UnoCSS, see [Get started for Web developers](/get-started/developers/web/). You need `version 2.1` of UnoCSS for the dataviz colors to work.

### Utility classes for HTML elements

Example of HTML utility classes for the `Primary` semantic color:

| Color category | Class   | Description |  
| -------------- | ------------------- |  ----------------- | 
| Background     | `dv-s-bg-primary` |  `background-color: var(--w-dv-s-color-background-primary)` |
| Background Subtle | `dv-s-bg-primary-subtle` |  `background-color: var(--w-dv-s-color-background-primary-subtle)` |  
| Border         | `dv-s-border-primary` |`border-color: var(--w-dv-s-color-border-primary)` |
| Icon           | `dv-s-icon-primary` | `color: var(--w-dv-s-color-icon-primary)` |
| Line           | `dv-s-line-primary` | `border-color: var(--w-dv-s-color-line-primary)` |
| Text           | `dv-s-text-primary` | `color: var(--w-dv-s-color-text-primary)` |

#### Example

Example of a `<div>` using using the `primary background subtle` as `background-color` and `primary border` color as `border-color`: 

``` html
<div style="width: 24px; height: 80px;" 
     class="dv-s-bg-primary-subtle dv-s-border-primary">
</div>
```  

### Utility classes for SVG elements

Since SVGs have different props for applying color than HTML has, we have defined utility classes specifically for applying colors to SVG elements using `fill` or `stroke`. Read more about [SVG fill and stroke](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes).

The utility class names are different depending on what you want to style – `fill` or `stroke`. 
- **Fill** `dv-s-fill-[element type]-[semantic-color]`
- **Stroke** `dv-s-stroke-[element type]-[semantic-color]`


Example using the `primary` color:

| Color category | Fill                | Stroke               |
| -------------- | ------------------- | ------------------- |
| Line           | `dv-s-fill-line-primary`* | `dv-s-stroke-line-primary` |
| Background     | `dv-s-fill-bg-primary` | `dv-s-stroke-bg-primary`* |  
| Background subtle | `dv-s-fill-bg-primary-subtle` | `dv-s-stroke-bg-primary-subtle`* |
| Border         | `dv-s-fill-border-primary`* | `dv-s-stroke-border-primary` |
| Icon           | `dv-s-fill-icon-primary` | `dv-s-stroke-icon-primary` | 
| Text           | `dv-s-fill-text-primary`* | `dv-s-stroke-text-primary`* | 

 \* Yes, it is a bit strange that it is possible to apply a Background color as stroke, or Line color as fill. But it is technically possible, and might be useful in some situations.


#### Example
Example of an SVG `<rect>` using the primary background subtle color as `fill` and primary border color as `stroke`: 

``` xml
<rect x="16" y="16" width="24" height="80"
  class="dv-s-fill-bg-primary-subtle dv-s-stroke-border-primary"
  stroke-width="2">
</rect>
```  


#### Hack to apply HTML classes to SVG elements

The regular WARP utility classes don't work for applying SVG `fill` or `stroke`. But you can do something like this to:

``` xml
<text className="s-text" fill="currentColor">
  <!-- Your text goes here -->
</text>
```  

## Hover, focus and active

All dataviz colors tokens (except the chart colors) have a corresponding `highlight` token to be used on hover, tap and keyboard focus. Add `-highlight` to the end of the variable name or class name to get the highlight color.

#### Example: CSS variable

CSS variable example, primary background color:

| Default color | Highlight color |  
| ----- | ------ | 
| `var(--w-dv-s-color-background-primary)` | `var(--w-dv-s-color-background-primary-highlight)` | 

#### Example: Utility class

Utility class example, primary background color:

| Type | Default color | Highlight color |  
| --- | ----- | ------ |  
| HTML background | `dv-s-bg-primary` | `dv-s-bg-primary-highlight` | 
| SVG fill| `dv-s-fill-bg-primary` | `dv-s-fill-bg-primary-highlight` | 
| SVG stroke| `dv-s-stroke-bg-primary` | `dv-s-stroke-bg-primary-highlight` | 

See [Interaction](/foundations/data-visualization/interaction/) for more information and examples.

## iOS

The pattern for the variable name is: 
- `Warp.DatavizToken.[colorCategory][SemanticColor]` for SwiftUI `Color`
- `Warp.DatavizUIToken.[colorCategory][SemanticColor]` for UIKit `UIColor`

Examples:
- `Warp.DatavizToken.backgroundPrimary` / `Warp.DatavizUIToken.backgroundPrimary`
- `Warp.DatavizToken.borderCategory1` / `Warp.DatavizUIToken.borderCategory1`
- `Warp.DatavizToken.lineSecondary` / `Warp.DatavizUIToken.lineSecondary`
- `Warp.DatavizToken.lineSecondaryHighlight` / `Warp.DatavizUIToken.lineSecondaryHighlight`
 

## Android

The pattern for the variable name is: 
- `WarpTheme.colors.dataviz.[colorCategory][SemanticColor]` for Compose `Color`
- `@color/warp_dataviz_[color_category]_[semantic_color]` for XML `color`

Examples:           
- `WarpTheme.colors.dataviz.background.category1Subtle` / `@color/warp_dataviz_background_category1_subtle`
- `WarpTheme.colors.dataviz.line.category2` / `@color/warp_dataviz_line_category2`
- `WarpTheme.colors.dataviz.line.secondary` / `@color/warp_dataviz_line_secondary`
- `WarpTheme.colors.dataviz.chart.textSubtle` / `@color/warp_dataviz_charttext_subtle`

