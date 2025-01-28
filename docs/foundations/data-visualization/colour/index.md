# Colour Usage

Colour plays an important role in data visualisation, and can be used to encode data in many ways. In addition, colour is often the first thing we perceive on a screen and can be used to guide the user's attention.



::: image-block
![Empty chart with axes, labels and gridlines using WARP colours to the left, bars and lines using dataviz colours to the right](/foundations/dataviz/chart-vs-data-colours.png)
:::

There are two main categories of dataviz colours: 
- We use **Chart colours** for non-data elements in the chart, such as gridlines, axes and text labels
- We use **Data colours** are for visual elements that encode data, such as lines, bars and areas

## Semantic tokens

The dataviz library is structured in a similar way as the regular WARP UI library, using semantic tokens. This allows us to use colours in a consistent and meaningful way, and makes it easy to swap between light mode and dark mode. The dataviz colours are the same across all Vend brands. 

![A blue HEX colour value is stored in a colour primitive, which is connected to a semantic token, which is applied to a dataviz bar](/foundations/dataviz/semantic-token.png)

We have defined a set of semantic colour categories. There is not always a direct mapping between visual elements and the semantic colours.

::: image-block
![Screenshot from Figma](/foundations/dataviz/mapping-datavizelement-to-token.png){width=433px}
:::


## Chart Colours

Chart colours are colours that we use to build non-data element in the chart.

::: image-block
![Screenshot from Figma](/foundations/dataviz/chart-colours.png){width=433px}
:::

Chart colours should be applied to elements like:
- **The background**: a surface for all chart elements
- **The baseline**, long line, typically indicating 0 on the y axis
- **Gridlines**. long lines at regular intervals on the x or y axis
- **Ticks**: short lines indicating regular intervals on the x or y axis
- **Labels**: text on the x or y axis, often next to ticks or gridlines

All chart colours start with 'chart'.

::: image-block
![Screenshot from Figma](/foundations/dataviz/colourlist-chartcolours.png){width=620px}
:::

To achieve sufficient contrast, visualisations should always be placed on ChartBackground, which corresponds to the default background colour in WARP. 

::: details Why chart colours?
Some of the chart colours are identical to regular WARP colours, for example the background, text, and text subtle. However, there are a few reaasons why we provide these colours in the dataviz library: 

- In Figma, it is convenient for designers to have all the colours they need for charts in one library
- In code, the dataviz colours can be applied to SVG elements using utility classes
- Some components (in Figma) need the ChartBackground colour as part of the component 
- Users of the dataviz library get all the colours they need for creating charts, and the library can therefore be used independent of WARP
- The ChartBackground colour ensures good contrast between the dataviz elements and the background, which might not be the case if using other WARP background colours 
- At the time of writing (jan 2025) there is no distinction in WARP between border and border subtle in WARP, which is needed for gridlines etc.
:::

## Data Colours

In dataviz we use visual elements to encode data (sometimes referred to as ‘data marks’). 

For data colours, there are different semantic colours that should be used intentionally: Primary, Secondary, Category and Evaluation colours.

### Primary
**Primary colour** – the default blue colour <span style="display: inline-block; width: 14px; height: 14px; background-color: #1087de; border-radius: 2px; vertical-align: -1px;"></span> to use when you only need one colour

### Secondary
**Secondary colour** - a grey colour <span style="display: inline-block; width: 14px; height: 14px; background-color: #919499; border-radius: 2px; vertical-align: -1px;"></span> to indicate secondary data

### Category
**Category colours** - a collection of 8 colours <span style="display: inline-block; width: 14px; height: 14px; background-color: #795af4; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #c88800; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #eb5ec7; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #00a881; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #e84c23; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #19818f; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #2b97ef; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #919499; border-radius: 2px; vertical-align: -1px;"></span> to indicate different categories of data


### Evaluation
**Evaluation colours** - a collection of 4 colours <span style="display: inline-block; width: 14px; height: 14px; background-color: #00a881; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #c88800; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #f2334e; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #81858c; border-radius: 2px; vertical-align: -1px;"></span> to indicate if the data is positive,  negative or neutral
