# CSS & Utility Classes

We have defined a colour palette for data visualization that should be used across all brands. You can apply the dataviz colours using CSS variables or Utility classes.

::: tip Pro tip
See [Colour Usage](/foundations/data-visualization/colour-usage/) for detailed descriptions and examples of the different colours. 
:::

A data visualization typically contains both **elements representing data** (like bars or lines), and **non-data elements** like axes and labels that provides context. 
- Use **WARP colours** for non-data elements like background, labels, gridlines, baseline and ticks
- Use **dataviz colours** for elements representing data, such as bars, areas, lines and points 

![Empty chart with axes, labels and gridlines using WARP colours to the left, bars and lines using dataviz colours to the right](/foundations/dataviz/chart-vs-data-colours.png)

## WARP colours for non-data elements 

Use these regular WARP colours for non-data elements:
- `s-bg`or `background-color: var(--w-s-color-background)` for chart background
- `s-text` or `color: var(--w-s-color-text)` for prominent text
- `s-text-subtle` or `color: var(--w-s-color-text-subtle)` for supportive text
- `s-border` or `border-color: var(--w-s-color-border)` for main axis lines
- ~~`s-border-subtle` or `border-color: var(--w-s-color-border-subtle)` for non-crucial lines like gridlines~~ (yet to be added)

See [text colour](/foundations/css-classes/text-color/), [border colour](/foundations/css-classes/border-color/) and [border colour](/foundations/css-classes/background-color/) for more information. 

## Dataviz colours for elements representing data
We have defined different colours to use with **different visual elements** representing data:
- **Lines**: for lines and points, for example in a line graph or scatter plot
- **Background**: for bars and areas, for example in a bar chart or area chart
- **Background subtle**: for bars and areas. NB: needs a border to achieve good contrast
- **Border**: for borders around subtle bars/areas, and pattern fill
- **Icon**: for icons representing data
- **Text**: for text representing data

### Semantic colours

For each element type, there are different **semantic colours** to use in different situations:
- `primary`– when you only need one colour, or need to indicate the most important data (combined with the secondary colour)
- `secondary` for data that is less important than the primary data
- `category[1-8]` – indicate different categories of data that are equal in importance
- `negative`, `positive`, `neutral`, `warning` – indicate data points that range from positive to negative for the user/reader.

### How to import the dataviz colours

#### Alternative 1: Use CSS variables
For CSS variables to work, you need to include a link to the CSS file in your project: *[URL to be inserted]*

The CSS variables can be applied to all kinds of content, including HTML tags and SVG elements. You don’t need to use WARP to use the dataviz CSS variables. 

#### Alternative 2: Use Utility classes
We use UnoCSS, see [Introduction to CSS classes](/foundations/css-classes/unocss/).

### CSS variables and utility classes

The CSS variables should work for both HTML and SVG elements, while these utility classes only work for HTML elements. Examples using the `primary` colour:

| Visual element | Class (HTML only)   | CSS variable      |  
| -------------- | ------------------- |  ----------------- | 
| Line           | `dv-s-line-primary` | `color: var(--w-dv-s-color-line-primary)` |
| Background     | `dv-s-bg-primary` |  `color: var(--w-dv-s-color-background-primary)` | 
| Background subtle | `dv-s-bg-primary-subtle` |`color: var( --w-dv-s-color-background-primary-subtle)` | 
| Border         | `dv-s-border-primary` |`color: var(--w-dv-s-color-border-primary)` |
| Icon           | `dv-s-icon-primary` | `color: var(--w-dv-s-color-icon-primary)` |
| Text           | `dv-s-text-primary` | `color: var(--w-dv-s-color-text-primary)` |

### Utility classes for SVG elements

We have defined specific utility classes for use on SVG elements.

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

 \* should normally not be used

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

### Focus colours

Use the focus colour on hover, tap and keyboard focus. Add `-focus` to the end of the variable name or class name to get the focus colour. 

Example with `primary` colour:

`dv-s-line-primary-focus` or `color: var(--w-dv-s-color-line-primary-focus)`. 

In addition, consider **dimming the other elements** that are not in focus, to **80% opacity**. In bar charts, placing hoverable areas immediately next to each other with no space in-between, to avoid a 'flickering effect' when moving the cursor across the bar. If you are not able to do so, do not dim the other bars.
