# Lines & Points

*For implementation, see [Tokens & CSS > Line](/foundations/data-visualization/tokens/line/).*

## Use the `Line` colours for lines and points

### Guidelines for lines
- Lines should have a width of minimum **3 px** to ensure sufficient contrast against the background
- **Straight lines** are usually better than smooth curves, as curves can be misinterpreted as representing data values or trends that are not present in the data
- Consider adding **dashed stroke** for lines when you include lines of different colours. Dashed lines appear less important than solid lines, and are therefore well suited for secondary information
- Adding **points along lines** can help users understand where the actual data points are placed, and that the line is simply a interpolation between points.

::: image-block
![Screenshot from Figma](/foundations/dataviz/element-line.png){width=433px}
:::

### Guidelines for points
- Points are often combined with lines in a chart, and therefore we use the same colour for lines and points 
- To use the Line colour on points in Figma, the points need to have a stroke (like a donut 🍩). If you don’t want a donut with space in the middle, make the stroke thicker
- Points (or lines around points) should have a width of minimum 3 px to ensure sufficient contrast against the background
- If you go for the donut variant of points, use either `ChartBackground/Default` or a `Background/Subtle` as the fill colour (see [below](#use-background-colours-in-donut-points)).

### Line colours

#### Primary

#### Secondary

#### Category

#### Evaluation

## Use `Background` colours in donut points

If you go for the donut variant of points, use either `ChartBackground/Default` or a `Background/Subtle` as the fill colour.

::: image-block
![Screenshot from Figma](/foundations/dataviz/element-point.png){width=433px}
:::

### Background colours

#### Subtle background

#### ChartBackground



