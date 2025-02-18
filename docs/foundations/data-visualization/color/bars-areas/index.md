# Bars & Areas (dataviz)

*For implementation, see [Tokens & CSS](/foundations/data-visualization/tokens/introduction/) > [Background](/foundations/data-visualization/tokens/background/) or [Border](/foundations/data-visualization/tokens/border/).*

## Bars and columns

::: image-block
![Horizontal bar chart showing a dark blue bar, next to another bar with subtle blue fill and a darker blue border](/foundations/dataviz/element-bar.png){width=434px}
:::

When you are encoding data in bars and columns, you have two options:
- **Default Background**. Example: `background-primary` 
- **Subtle Background**. Example: `background-primary-subtle` and `border-primary`   

The subtle variant can be used alone or together with the default color to indicate something of less importance. The subtle colors need a 3 px border around the bar to achieve good enough contrast against the background.

You may also add a pattern inside the area when using the subtle background, see [Patterns in bars and areas](#patterns-in-bars-and-areas).

### Optional: ChartBackground around bar

When bars are placed on top of gridlines and other data elements, it becomes harder to differentiate the bar from the elements below. 

Consider adding a border (or slightly larger bar behind the data bar) with the `ChartBackground/Default` color. As a result, a small gap appears between the elements, making it easier to differentiate between them.

::: image-block
![A blue bar with white outline placed on top of a blue line. The white outline is annotated with 'ChartBackground'](/foundations/dataviz/element-bar-chart-bg.png){width=434px}
:::

In Figma, this is implemented in the bar components.

### Stacked bars and columns

::: tip Pro tip 💡
If you are creating stacked bar charts, add white space between each color to make it easier to identify each part.
:::

If you add white space between each bar segment, and there are several stacked bars next to each, the white space should not affect the total hight/width of the stacked bars. Instead, remove the same amount of height/width from each bar segment (for example one pixel per bar segment). In this way, the total height/width of each stacked bar can be compared with one another.

::: image-block
![Stacked bar with two bar segments, separated by a small white gap](/foundations/dataviz/bar-whitespace.png){width=434px}
:::

In Figma, this is implemented in the stacked bar components.

## Areas

For areas, such as area charts, there are a few options for color usage.

### 1. Default background

![Area chart with intense blue color fill in light mode and dark mode](/foundations/dataviz/element-area-default.png)

Use the default color, for example `background-primary`.

If you are creating stacked area charts, consider adding white space between each color to make it easier to identify each area.

### 2. Subtle background with border

![Area chart with subtle blue color fill in light mode and dark mode](/foundations/dataviz/element-area-subtle.png)

Large areas of the default Background color might become too intense. In that case, consider using the subtle background color combined with border. Example: `background-primary-subtle` and `border-primary`.

The border is only necessary on the part of the area that shows the values (typically the top, as in the example above).

You may also add a pattern inside the area, see [Patterns in bars and areas](#patterns-in-bars-and-areas).

### 3. Gradient with border

![Area chart with gradient fading gradually from subtle blue at the top to background color at the bottom of the area, in light mode and dark mode](/foundations/dataviz/element-area-gradient.png)

To make the area less prominent, consider using a gradient fill. Technically, this can be solved in different ways:
- Make a gradient between the subtle background color and the chart background color. Example: `background-primary-subtle` to `chartbackground`. 
- Use opacity, and make the gradient between the same subtle background color with 100 % and 0 % opacity.

Include a border, similar to using a subtle background. 

## Patterns in bars and areas

::: image-block
![Four bars with different colors and patterns: indigo with diagonal lines going up, green with tractor pattern, yellow with dots, and pink with diagonal lines going down](/foundations/dataviz/element-pattern.png){width=457px}
:::

Patterns can make it easier to distinguish between categories, benefiting people with color deficiencies as well as those printing in gray scale.

In Figma, there is an option to apply patterns to bars. However, different dataviz libraries might have specific options for patterns, so it might be useful to consider the technical possibilities before choosing a pattern.

For patterns in bars or areas, use `Background Subtle` (or no fill) combined with `Border` colors. As a result, the border of the bar/area will have the same color as the pattern inside.

There is no particular mapping between dataviz colors and patterns, but be consistent if you apply patterns across graphs.

Note that extensive use of patterns can make the graph appear busy and chaotic, and thereby less accessible for many users. 

Other methods you can use to distinguish between categories, reducing the need for patterns:
- **Text labels**: connect text labels to categories for easy identification
- **Shapes or positions**: Use different shapes or positions for different data categories
- **Fill and border**: combine solid fill for one category with subtle fill and border for another category
- **Small multiples**: split data into several small graphs to avoid relying on color coding
- **Filters**: implement filters and popover information for interactive data exploration
- **Hover and focus states**: show patterns on hover or with keyboard focus.

### Prediction area
For prediction area, use the gray Secondary border color (`border-secondary`) with diagonal lines. For the background, use `chartbackground`, or no color at all.

::: image-block
![Stacked bar chart with a wider box with a gray pattern behind each bar. Annotated with 'border'](/foundations/dataviz/element-pattern-prediction.png){width=457px}
:::

## Color tokens

### Background (dataviz)

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `ChartBackground/Default` | ![white and black boxes](/foundations/dataviz/col-preview/chart-bg.png){width=80px} | White/Black background | 
| `Background/Primary` | ![blue boxes](/foundations/dataviz/col-preview/primary-bg.png){width=80px} | Blue – if you only need one color | 
| `Background/Secondary` | ![gray boxes](/foundations/dataviz/col-preview/secondary-bg.png){width=80px} | Gray – for a secondary color | 
| `Background/Category1` | ![indigo boxes](/foundations/dataviz/col-preview/category1-bg.png){width=80px} | Indigo - representing category 1 | 
| `Background/Category2` | ![yellow boxes](/foundations/dataviz/col-preview/category2-bg.png){width=80px} | Yellow - representing category 2 | 
| `Background/Category3` | ![pink boxes](/foundations/dataviz/col-preview/category3-bg.png){width=80px} | Pink - representing category 3 | 
| `Background/Category4` | ![green boxes](/foundations/dataviz/col-preview/category4-bg.png){width=80px} | Green - representing category 4 | 
| `Background/Category5` | ![orange boxes](/foundations/dataviz/col-preview/category5-bg.png){width=80px} | Orange - representing category 5 | 
| `Background/Category6` | ![teal boxes](/foundations/dataviz/col-preview/category6-bg.png){width=80px} | Teal - representing category 6 | 
| `Background/Category7` | ![blue boxes](/foundations/dataviz/col-preview/category7-bg.png){width=80px} | Blue - representing category 7 | 
| `Background/Category8` | ![gray boxes](/foundations/dataviz/col-preview/category8-bg.png){width=80px} | Gray - representing category 8 | 
| `Background/Positive` | ![green boxes](/foundations/dataviz/col-preview/positive-bg.png){width=80px} | Gray - representing something positive | 
| `Background/Warning` | ![yellow boxes](/foundations/dataviz/col-preview/warning-bg.png){width=80px} | Warning - representing something worrisome | 
| `Background/Negative` | ![red boxes](/foundations/dataviz/col-preview/positive-bg.png){width=80px} | Red - representing something negative | 
| `Background/Neutral` | ![gray boxes](/foundations/dataviz/col-preview/positive-bg.png){width=80px} | Gray - representing something neutral | 

### Background-Subtle (dataviz)

Needs a border to have enough contrast against the background.

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
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


### Border (dataviz)

Border around Background Subtle.

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Border/Primary` | ![blue boxes](/foundations/dataviz/col-preview/primary-border.png){width=80px} | Blue – border around `Background/Primary-Subtle` | 
| `Border/Secondary` | ![gray boxes](/foundations/dataviz/col-preview/secondary-border.png){width=80px} | Gray border around `Background/Secondary-Subtle` | 
| `Border/Category1` | ![indigo boxes](/foundations/dataviz/col-preview/category1-border.png){width=80px} | Indigo - border around `Background/Category1-Subtle` | 
| `Border/Category2` | ![yellow boxes](/foundations/dataviz/col-preview/category2-border.png){width=80px} | Yellow - border around `Background/Category2-Subtle` | 
| `Border/Category3` | ![pink boxes](/foundations/dataviz/col-preview/category3-border.png){width=80px} | Pink - border around `Background/Category3-Subtle` | 
| `Border/Category4` | ![green boxes](/foundations/dataviz/col-preview/category4-border.png){width=80px} | Green - border around `Background/Category4-Subtle` | 
| `Border/Category5` | ![orange boxes](/foundations/dataviz/col-preview/category5-border.png){width=80px} | Orange - border around `Background/Category5-Subtle` | 
| `Border/Category6` | ![teal boxes](/foundations/dataviz/col-preview/category6-border.png){width=80px} | Teal - border around `Background/Category6-Subtle` | 
| `Border/Category7` | ![blue boxes](/foundations/dataviz/col-preview/category7-border.png){width=80px} | Blue - border around `Background/Category7-Subtle` | 
| `Border/Category8` | ![gray boxes](/foundations/dataviz/col-preview/category8-border.png){width=80px} | Gray - border around `Background/Category8-Subtle` | 
| `Border/Positive` | ![green boxes](/foundations/dataviz/col-preview/positive-border.png){width=80px} | Gray - border around `Background/Positive-Subtle` | 
| `Border/Warning` | ![yellow boxes](/foundations/dataviz/col-preview/warning-border.png){width=80px} | Warning - border around `Background/Warning-Subtle` | 
| `Border/Negative` | ![red boxes](/foundations/dataviz/col-preview/positive-border.png){width=80px} | Red - border around `Background/Negative-Subtle` | 
| `Border/Neutral` | ![gray boxes](/foundations/dataviz/col-preview/positive-border.png){width=80px} | Gray - border around `Background/Neutral-Subtle` | 