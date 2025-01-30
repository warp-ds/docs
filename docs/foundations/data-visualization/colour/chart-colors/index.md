# Chart Colours

Chart colours are colours that we use to build non-data element in the chart.

::: image-block
![Screenshot from Figma](/foundations/dataviz/chart-colours.png){width=433px}
:::

Chart colours should be applied to elements like:
- **The background**: a surface for all chart elements. Use `ChartBackground/Default`
- **The baseline**, long line, typically indicating 0 on the y axis. Use `ChartLine/Default`
- **Gridlines**. long lines at regular intervals on the x or y axis. Use `ChartLine/Subtle`
- **Ticks**: short lines indicating regular intervals on the x or y axis. Use `ChartLine/Default`
- **Labels**: text on the x or y axis, often next to ticks or gridlines. Use `ChartText/Default` or `ChartText/Subtle` 

All chart colours start with `Chart-`.

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
