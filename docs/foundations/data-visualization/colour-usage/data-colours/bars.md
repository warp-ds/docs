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
