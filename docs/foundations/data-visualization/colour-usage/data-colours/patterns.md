### Use `Background` amd `Border` colours for patterns

Patterns can make it easier to distinguish between categories, benefiting people with colour deficiencies as well as those printing in greyscale. 

For lines with pattern, use the regular `line` colours.  

For patterns in bars or areas, use `Background-Subtle` (or no fill) combined with `Border` colours. As a result, the border of the bar/area will have the same colour as the pattern inside.

There is no particular mapping between dataviz colours and patterns, but be consistent if you apply patterns across graphs.

::: image-block
![Area chart with subtle blue colour fill in light mode and dark mode](/foundations/dataviz/element-pattern.png){width=457px}
:::

Note that extensive use of patterns can make the graph appear busy and chaotic, and thereby less accessible for many users. 
Consider using other methods to distinguish between categories:
- **Text labels**: connect text labels to categories for easy identification
- **Shapes or positions**: Use different shapes or positions for different data categories
- **Fill and border**: combine solid fill for one category with subtle fill and border for another category
- **Small multiples**: split data into several small graphs to avoid relying on colour coding
- **Filters**: implement filters and popover information for interactive data exploration
- **Hover and focus states**: show patterns on hover or with keyboard focus.

#### Prediction area
For prediction area, use the gray Secondary border colour (`border-secondary`) with diagonal lines. For the background, use `chartbackground`, or no colour at all.

::: image-block
![Area chart with subtle blue colour fill in light mode and dark mode](/foundations/dataviz/element-pattern-prediction.png){width=457px}
:::
