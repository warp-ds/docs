# Bars & areas

### Use `Background` and `Border` colours for bars and columns

When you are encoding data in bars and columns, you have two options:
- **Default Background**. Example: `background-primary` 
- **Subtle Background**. Example: `background-primary-subtle` and `border-primary`   

The subtle variant that can be used alone or together with the default colour to indicate something of less importance. The subtle colours need a 3 px border around the bar to achieve good enough contrast against the background.

::: image-block
![Bar chart showing a dark blue bar, next to another bar with subtle blue fill and a darker blue border](/foundations/dataviz/element-bar.png){width=434px}
:::

These Default and Subtle options are available for all colour collections:
- Primary colour
- Secondary colour
- Category colour 1-8
- Evaluation colours (Positive, Negative, Warning, Neutral)

#### White space between bar segments

::: tip Pro tip 💡
If you are creating stacked bar charts, add white space between each colour to make it easier to identify each part.
:::

If you add white space between each bar segment, and there are several stacked bars next to each, the white space should not affect the total hight/width of the stacked bars. In stead, remove the same amount of height/width from each bar segment (for example one pixel per bar segment). In this way, the total height/width of each stacked bar can be compared width one another.

::: image-block
![Stacked bar with two bar segments, separated by a small white gap](/foundations/dataviz/bar-whitespace.png){width=434px}
:::

### Use `Background` and `Border` colours for areas

For areas, such as area charts, there are a few options for colour usage.

#### 1. Default

Use the default colour, for example `background-primary`.

![Area chart with intense blue colour fill in light mode and dark mode](/foundations/dataviz/element-area-default.png)

If you are creating stacked area charts, consider adding white space between each colour to make it easier to identify each area.

#### 2. Subtle

Large areas of the default Background colour might become too intense. In that case, consider using the subtle colour.

Combine subtle background with border, for example `background-primary-subtle` and `border-primary`.

![Area chart with subtle blue colour fill in light mode and dark mode](/foundations/dataviz/element-area-subtle.png)

You may also add a pattern inside the area. In that case, use the `border` colour for the pattern (see pattern).

#### 3. Gradient

To make the area less prominent, consider using a gradient fill. In that case, make a gradient between the subtle Background colour and the background colour.


Make a gradient from subtle background (for example `background-primary-subtle`) to `chartbackground`. Remember to add a border, for example `border-primary`.

![Area chart with gradient fading gradually from subtle blue at the top to background colour at the bottom of the area, in light mode and dark mode](/foundations/dataviz/element-area-gradient.png)

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
