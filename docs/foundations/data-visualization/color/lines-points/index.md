# Lines & Points (dataviz)

*For implementation, see [Tokens & CSS > Line](/foundations/data-visualization/tokens/line/).*

## Lines

::: image-block
![A line chart in which a blue line is annotated with 'line'](/foundations/dataviz/element-line.png){width=433px}
:::

- Use the `Line` colors for lines.
- Lines should have a width of minimum **3 px** to ensure sufficient contrast against the background
- **Straight lines** are usually better than smooth curves, as curves can be misinterpreted as representing data values or trends that are not present in the data
- Consider adding **dashed stroke** for lines when you include lines of different colors. Dashed lines appear less important than solid lines, and are therefore well suited for secondary information
- Adding **points along lines** can help users understand where the actual data points are placed, and that the line is simply a interpolation between points.

## Points

- Use the `Line` colors for points. Points are often combined with lines in a chart, and therefore we use the same color for lines and points 
- To use the Line color on points in **Figma**, the points need to have a **stroke** (like a donut 🍩). If you don’t want a donut with space in the middle, make the stroke thicker
- Points (or lines around points) should have a width of minimum **3 px** to ensure sufficient contrast against the background.

### 'Donut' points 

If you go for the donut variant of points, use either `ChartBackground/Default` or a `Background Subtle` as the fill color. 

::: image-block
![Line chart in which the stroke of a point is annotated with 'Line', the inside of a point is annotated with 'ChartBackground Default', the inside of another point annotated with 'Background Subtle'  ](/foundations/dataviz/element-point.png){width=433px}
:::

An advantage of using `Background Subtle` is that it becomes logical to use `Background Subtle-Highlight` when interacting with the points.

## Line dashes and point shapes

**Line dashes** can make it easier to distinguish between categories, benefiting people with color deficiencies as well as those printing in gray scale. For example, it makes sense to use a solid stroke style for the primary line using the Primary color, and dashes for the secondary line using the secondary color.

For points, consider using different **point shapes** for each category. However, using many different point shapes can make the graph appear disorienting and chaotic, and thereby work against its intended purpose. One acceptable solution is to **show point shapes on interaction**, like hover and focus. Different dataviz libraries might have specific options for point shapes, so it might be useful to consider the technical possibilities before choosing shapes.

## Color tokens

### Line colors (dataviz)

Stroke color for lines and points.

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Line/Primary` | ![blue lines](/foundations/dataviz/col-preview/primary-line.png){width=80px} | Blue – if you only need one line | 
| `Line/Secondary` | ![gray lines](/foundations/dataviz/col-preview/secondary-line.png){width=80px} | Gray – for a secondary line | 
| `Line/Category1` | ![indigo lines](/foundations/dataviz/col-preview/category1-line.png){width=80px} | Indigo - lines representing category 1 | 
| `Line/Category2` | ![yellow lines](/foundations/dataviz/col-preview/category2-line.png){width=80px} | Yellow - lines representing category 2 | 
| `Line/Category3` | ![pink lines](/foundations/dataviz/col-preview/category3-line.png){width=80px} | Pink - lines representing category 3 | 
| `Line/Category4` | ![green lines](/foundations/dataviz/col-preview/category4-line.png){width=80px} | Green - lines representing category 4 | 
| `Line/Category5` | ![orange lines](/foundations/dataviz/col-preview/category5-line.png){width=80px} | Orange - lines representing category 5 | 
| `Line/Category6` | ![teal lines](/foundations/dataviz/col-preview/category6-line.png){width=80px} | Teal - lines representing category 6 | 
| `Line/Category7` | ![blue lines](/foundations/dataviz/col-preview/category7-line.png){width=80px} | Blue - lines representing category 7 | 
| `Line/Category8` | ![gray lines](/foundations/dataviz/col-preview/category8-line.png){width=80px} | Gray - lines representing category 8 | 
| `Line/Positive` | ![green lines](/foundations/dataviz/col-preview/positive-line.png){width=80px} | Gray - lines representing something positive | 
| `Line/Warning` | ![yellow lines](/foundations/dataviz/col-preview/warning-line.png){width=80px} | Warning - lines representing something worrisome | 
| `Line/Negative` | ![red lines](/foundations/dataviz/col-preview/positive-line.png){width=80px} | Red - lines representing something negative | 
| `Line/Neutral` | ![gray lines](/foundations/dataviz/col-preview/positive-line.png){width=80px} | Gray - lines representing something neutral | 

### Background colors (dataviz)

For use inside 'donut' points.

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `ChartBackground/Default` | ![white and black boxes](/foundations/dataviz/col-preview/chart-bg.png){width=80px} | White/Black background | 
| `Background/Primary-Subtle` | ![blue boxes](/foundations/dataviz/col-preview/primary-bg-subtle.png){width=80px} | Blue – if you only need one color | 
| `Background/Secondary-Subtle` | ![gray boxes](/foundations/dataviz/col-preview/secondary-bg-subtle.png){width=80px} | Gray – for a secondary color | 
| `Background/Category1-Subtle` | ![indigo boxes](/foundations/dataviz/col-preview/category1-bg-subtle.png){width=80px} | Indigo - representing category 1 | 
| `Background/Category2-Subtle` | ![yellow boxes](/foundations/dataviz/col-preview/category2-bg-subtle.png){width=80px} | Yellow - representing category 2 | 
| `Background/Category3-Subtle` | ![pink boxes](/foundations/dataviz/col-preview/category3-bg-subtle.png){width=80px} | Pink - representing category 3 | 
| `Background/Category4-Subtle` | ![green boxes](/foundations/dataviz/col-preview/category4-bg-subtle.png){width=80px} | Green - representing category 4 | 
| `Background/Category5-Subtle` | ![orange boxes](/foundations/dataviz/col-preview/category5-bg-subtle.png){width=80px} | Orange - representing category 5 | 
| `Background/Category6-Subtle` | ![teal boxes](/foundations/dataviz/col-preview/category6-bg-subtle.png){width=80px} | Teal - representing category 6 | 
| `Background/Category7-Subtle` | ![blue boxes](/foundations/dataviz/col-preview/category7-bg-subtle.png){width=80px} | Blue - representing category 7 | 
| `Background/Category8-Subtle` | ![gray boxes](/foundations/dataviz/col-preview/category8-bg-subtle.png){width=80px} | Gray - representing category 8 | 
| `Background/Positive-Subtle` | ![green boxes](/foundations/dataviz/col-preview/positive-bg-subtle.png){width=80px} | Gray - representing something positive | 
| `Background/Warning-Subtle` | ![yellow boxes](/foundations/dataviz/col-preview/warning-bg-subtle.png){width=80px} | Warning - representing something worrisome | 
| `Background/Negative-Subtle` | ![red boxes](/foundations/dataviz/col-preview/positive-bg-subtle.png){width=80px} | Red - representing something negative | 
| `Background/Neutral-Subtle` | ![gray boxes](/foundations/dataviz/col-preview/positive-bg-subtle.png){width=80px} | Gray - representing something neutral | 
