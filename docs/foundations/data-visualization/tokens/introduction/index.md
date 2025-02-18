# Tokens & CSS for Dataviz Colours

*For design guidelines, see [Colour Guidelines](/foundations/data-visualization/color/introduction/).*

We have defined a colour palette for data visualization that should be used across all brands. On web, you can apply the dataviz colours using [CSS variables](#alternative-1-css-variables) or [Utility classes](#alternative-2-utility-classes). 

The dataviz colour names include `dv` for dataviz, to differentiate them from regular WARP colours.

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

We have defined different colour shades to be used for different element types (background, border, icon, line and text). We call these colour categories. 

The pattern for the variable name is: `var(--w-dv-s-color-[colour category]-[semantic-colour]`

Example of CSS variables for the `Primary` semantic colour:

| Colour category | CSS variable      |  
| -------------- | ----------------- | 
| Background     | `var(--w-dv-s-color-background-primary)` | 
| Background Subtle | `var(--w-dv-s-color-background-primary-subtle)` | 
| Border         | `var(--w-dv-s-color-border-primary)` |
| Icon           | `var(--w-dv-s-color-icon-primary)` |
| Line           | `var(--w-dv-s-color-line-primary)` |
| Text           | `var(--w-dv-s-color-text-primary)` |

CSS variables can applied to both HTML and SVG elements. 

### HTML example
Example of applying the primary dataviz border colour to a `<div>` border:

``` html
<div style="width: 24px; height: 80px; 
            border: 2px solid var(--w-dv-s-color-border-primary);">
</div>
```  

### SVG example
Example of applying the primary dataviz border colour to a `<rect>` stroke in an SVG:

``` xml
<rect x="16" y="16" width="24" height="80"
  stroke="var(--w-dv-s-color-border-primary)" 
  stroke-width="2">
</rect>

```  

## Alternative 2: Utility classes

Before using the utility classes, you need to install UnoCSS, see [Get started for Web developers](/get-started/developers/web/). You need `version 2.1` of UnoCSS for the dataviz colours to work.

### Utility classes for HTML elements

Example of HTML utility classes for the `Primary` semantic colour:

| Colour category | Class   | Description |  
| -------------- | ------------------- |  ----------------- | 
| Background     | `dv-s-bg-primary` |  `background-color: var(--w-dv-s-color-background-primary)` |
| Background Subtle | `dv-s-bg-primary-subtle` |  `background-color: var(--w-dv-s-color-background-primary-subtle)` |  
| Border         | `dv-s-border-primary` |`border-color: var(--w-dv-s-color-border-primary)` |
| Icon           | `dv-s-icon-primary` | `color: var(--w-dv-s-color-icon-primary)` |
| Line           | `dv-s-line-primary` | `border-color: var(--w-dv-s-color-line-primary)` |
| Text           | `dv-s-text-primary` | `color: var(--w-dv-s-color-text-primary)` |

#### Example

Example of a `<div>` using using the `primary background subtle` as `background-color` and `primary border` colour as `border-color`: 

``` html
<div style="width: 24px; height: 80px;" 
     class="dv-s-bg-primary-subtle dv-s-border-primary">
</div>
```  

### Utility classes for SVG elements

Since SVGs have different props for applying colour than HTML has, we have defined utility classes specifically for applying colours to SVG elements using `fill` or `stroke`. Read more about [SVG fill and stroke](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes).

The utility class names are different depending on what you want to style – `fill` or `stroke`. 
- **Fill** `dv-s-fill-[element type]-[semantic-colour]`
- **Stroke** `dv-s-stroke-[element type]-[semantic-colour]`


Example using the `primary` colour:

| Colour category | Fill                | Stroke               |
| -------------- | ------------------- | ------------------- |
| Line           | `dv-s-fill-line-primary`* | `dv-s-stroke-line-primary` |
| Background     | `dv-s-fill-bg-primary` | `dv-s-stroke-bg-primary`* |  
| Background subtle | `dv-s-fill-bg-primary-subtle` | `dv-s-stroke-bg-primary-subtle`* |
| Border         | `dv-s-fill-border-primary`* | `dv-s-stroke-border-primary` |
| Icon           | `dv-s-fill-icon-primary` | `dv-s-stroke-icon-primary` | 
| Text           | `dv-s-fill-text-primary`* | `dv-s-stroke-text-primary`* | 

 \* Yes, it is a bit strange that it is possible to apply a Background colour as stroke, or Line colour as fill. But it is technically possible, and might be useful in some situations.


#### Example
Example of an SVG `<rect>` using the primary background subtle colour as `fill` and primary border colour as `stroke`: 

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

All dataviz colours tokens (except the chart colours) have a corresponding `highlight` token to be used on hover, tap and keyboard focus. Add `-highlight` to the end of the variable name or class name to get the highlight colour.

#### Example: CSS variable

CSS variable example, primary background colour:

| Default colour | Highlight colour |  
| ----- | ------ | 
| `var(--w-dv-s-color-background-primary)` | `var(--w-dv-s-color-background-primary-highlight)` | 

#### Example: Utility class

Utility class example, primary background colour:

| Type | Default colour | Highlight colour |  
| --- | ----- | ------ |  
| HTML background | `dv-s-bg-primary` | `dv-s-bg-primary-highlight` | 
| SVG fill| `dv-s-fill-bg-primary` | `dv-s-fill-bg-primary-highlight` | 
| SVG stroke| `dv-s-stroke-bg-primary` | `dv-s-stroke-bg-primary-highlight` | 

See [Interaction](/foundations/data-visualization/interaction/) for more information and examples.

## iOS

The pattern for the variable name is: 
- `Warp.DatavizToken.[colour category][Semantic colour]` for SwiftUI `Color`
- `Warp.DatavizUIToken.[colour category][Semantic colour]` for UIKit `UIColor`

Examples:
- `Warp.DatavizToken.backgroundPrimary` / `Warp.DatavizUIToken.backgroundPrimary`
- `Warp.DatavizToken.borderCategory1` / `Warp.DatavizUIToken.borderCategory1`
- `Warp.DatavizToken.lineSecondary` / `Warp.DatavizUIToken.lineSecondary`
- `Warp.DatavizToken.lineSecondaryHighlight` / `Warp.DatavizUIToken.lineSecondaryHighlight`
 

## Android

TBD

