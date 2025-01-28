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
