# Tokens & CSS

We have defined a colour palette for data visualization that should be used across all brands. You can apply the dataviz colours using CSS variables or Utility classes.

**On this page:**
[[toc]]

<br>

::: tip Pro tip
See [Colour Usage](/foundations/data-visualization/colour-usage/) for detailed descriptions and examples of the different colours. 
:::


## How to import the dataviz colours

### Alternative 1: Use CSS variables
For CSS variables to work, you need to include a link to the CSS file in your project: [https://assets.finn.no/pkg/@warp-ds/css/2.1.0-next.3/tokens/dataviz.css](https://assets.finn.no/pkg/@warp-ds/css/2.1.0-next.3/tokens/dataviz.css) (temporary!)

The CSS variables can be applied to all kinds of content, including HTML tags and SVG elements. You don’t need to use WARP to use the dataviz CSS variables. 

### Alternative 2: Use Utility classes
We use UnoCSS, see [Introduction to CSS classes](/foundations/css-classes/unocss/).

## CSS variables and utility classes

The CSS variables should work for both HTML and SVG elements, while these utility classes only work for HTML elements. Examples using the `primary` colour:

| Visual element | Class (HTML only)   | CSS variable      |  
| -------------- | ------------------- |  ----------------- | 
| Line           | `dv-s-line-primary` | `var(--w-dv-s-color-line-primary)` |
| Background     | `dv-s-bg-primary` |  `var(--w-dv-s-color-background-primary)` | 
| Background subtle | `dv-s-bg-primary-subtle` |`var( --w-dv-s-color-background-primary-subtle)` | 
| Border         | `dv-s-border-primary` |`var(--w-dv-s-color-border-primary)` |
| Icon           | `dv-s-icon-primary` | `var(--w-dv-s-color-icon-primary)` |
| Text           | `dv-s-text-primary` | `var(--w-dv-s-color-text-primary)` |

## Utility classes for SVG elements

We have defined specific utility classes for use on SVG elements.

::: details Why are there different utility classes for SVGs?
On web, graphs are typically render as SVGs. SVG elements have different properties than HTML for applying colours.  

![-----](/foundations/dataviz/props-html-svg.png)
:::


SVG uses [two attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes) for applying colours for a node: 
- `fill` sets the color inside the object (for example text or a rectange)
- `stroke` sets the color of the line drawn around the object (for example a line or the  border of the rectange)

The utility class names are different depending on what you want to style. Example using the `primary` colour:

| Visual element | Fill                | Stroke               |
| -------------- | ------------------- | ------------------- |
| Line           | `dv-s-fill-line-primary`* | `dv-s-stroke-line-primary` |
| Background     | `dv-s-fill-bg-primary` | `dv-s-stroke-bg-primary`* |  
| Background subtle | `dv-s-fill-bg-primary-subtle` | `dv-s-stroke-bg-primary-subtle`* |
| Border         | `dv-s-fill-border-primary`* | `dv-s-stroke-border-primary` |
| Icon           | `dv-s-fill-icon-primary` | `dv-s-stroke-icon-primary` | 
| Text           | `dv-s-fill-text-primary`* | `dv-s-stroke-text-primary`* | 

 \* You might find it strange that it is possible to apply a Background colour as stroke, or Line colour as fill. However, there are situations where this might be useful:
- if you want to use the background colour as a stroke around a bar to create a gap to underlying content
- if you want to use the line colour to fill a point in a line graph 


### Example of applying utility classes to SVG elements
Example of a rectange using the `primary background subtle` as `fill` and `primary border` as `stroke`: 

``` xml
<rect x="16" y="16" width="24" height="80"
  class="dv-s-fill-bg-primary-subtle dv-s-stroke-border-primary"
  stroke-width="2">
</rect>
```  

Note that regular WARP colours will not work in this way; you can't use WARP utility classes directly as `fill` or `stroke` in an SVG, but you can do something like this:

``` xml
<text className="s-text" fill="currentColor">
  <!-- Your text goes here -->
</text>
```  

## Highlight colours

Use the `highlight` colour on hover, tap and keyboard focus. Add `-highlight` to the end of the variable name or class name to get the highglight colour. 

Example with `primary` colour:

`dv-s-line-primary-highlight` or `color: var(--w-dv-s-color-line-primary-highlight)`. 

In addition, consider **dimming the other elements** that are not highlighted, to **80% opacity**. In bar charts, place hoverable areas immediately next to each other with no space in-between, to avoid a 'flickering effect' when moving the cursor across the bars. If you are not able to do so, do not dim the other bars.