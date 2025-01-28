# Colour Usage

Colour plays an important role in data visualisation, and can be used to encode data in many ways. In addition, colour is often the first thing we perceive on a screen and can be used to guide the user's attention.

::: image-block
![Empty chart with axes, labels and gridlines using WARP colours to the left, bars and lines using dataviz colours to the right](/foundations/dataviz/chart-vs-data-colours.png)
:::

There are two main categories of dataviz colours: chart colours and data colours.

We use **Chart colours** for non-data elements in the chart, such as gridlines, axes and text labels. See [Chart colours](/foundations/data-visualization/colour-usage/chart-colours/).

We use **Data colours** are for visual elements that encode data, such as lines, bars and areas. See [Data colours](/foundations/data-visualization/colour-usage/chart-colours/).

## Semantic colours

The dataviz library is structured in a similar way as the regular WARP UI library, using semantic tokens. This allows us to use colours in a consistent and meaningful way, and makes it easy to swap between light mode and dark mode. The dataviz colours are the same across all Vend brands. 

![A blue HEX colour value is stored in a colour primitive, which is connected to a semantic token, which is applied to a dataviz bar](/foundations/dataviz/semantic-token.png)

For data colours, there are different semantic colours that should be used intentionally:

- **Primary colour** – the default blue colour <span style="display: inline-block; width: 14px; height: 14px; background-color: #1087de; border-radius: 2px; vertical-align: -1px;"></span> to use when you only need one colour
- **Secondary colour** - a grey colour <span style="display: inline-block; width: 14px; height: 14px; background-color: #919499; border-radius: 2px; vertical-align: -1px;"></span> to indicate secondary data
- **Category colours** - a collection of 8 colours <span style="display: inline-block; width: 14px; height: 14px; background-color: #795af4; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #c88800; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #eb5ec7; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #00a881; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #e84c23; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #19818f; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #2b97ef; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #919499; border-radius: 2px; vertical-align: -1px;"></span> to indicate different categories of data
- **Evaluation colours** - a collection of 4 colours <span style="display: inline-block; width: 14px; height: 14px; background-color: #00a881; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #c88800; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #f2334e; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #81858c; border-radius: 2px; vertical-align: -1px;"></span> to indicate if the data is positive,  negative or neutral
