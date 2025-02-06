# Chart Colours

*For implementation, see [Tokens & CSS > Chart Colours](/foundations/data-visualization/tokens/chart/).*

## What are chart colours?
Chart colours are colours that we use to build non-data element in the chart, such as:

Chart elements, and which semantic colours to use:
- **The background**: a surface for all chart elements, to ensure good contrast
- **The baseline**, long line, typically indicating 0 on the y axis
- **Gridlines**. long lines at regular intervals on the x or y axis
- **Ticks**: short lines indicating regular intervals on the x or y axis
- **Labels**: text on the x or y axis, often next to ticks or gridlines 

::: image-block
![Empty graph with annotated elements like background, lable, gridline and tick](/foundations/dataviz/chart-colours.png){width=433px}
:::

All chart colours start with `Chart-`.

::: image-block
![Preview of chart colours in light mode and dark mode](/foundations/dataviz/colourlist-chartcolours.png){width=620px}
:::


## Which chart elements do you need?

You don't necessarily need to include all chart elements in every graph. Less is more – consider what is needed in particular use case.  

::: image-block
![Preview of chart colours in light mode and dark mode](/foundations/dataviz/chart-colours-example.png){width=620px}
:::

Things to consider:
- Gridlines combined with labels (example to the left) make it possible to see the approximate value of the data mark (for example a bar), and can be useful if there are many data marks in the graph 
- If there are few data marks in the graph, you could consider showing the value for each data mark (example to the right). In that case, you don't really need the gridlines and value labels on the axes
- The baseline is useful to ground the visual marks and connect all the elements together. Especially when using lines and points it is necessary to have a baseline to be able to visually see the dinstance from 0 to the visual marks. However, for a bar chart or area chart it might be ok to skip the baseline, as long as the data marks are not too far from each other.


## Which chart colours should you use?

The semantic colours to use for different chart elements:

| Element | Semantic colour | 
| ----- | ------ | 
| Background | `ChartBackground/Default` | 
| The baseline | `ChartLine/Default` | 
| Gridlines | `ChartLine/Subtle` | 
| Ticks | `ChartLine/Default` | 
| Labels | `ChartText/Default` or `ChartText/Subtle` | 

To achieve sufficient contrast, visualisations should always be placed on `ChartBackground`, which corresponds to the default background colour in WARP. 

### ChartText
For text, choose colour based on the importance of the text. For example, in the bar chart below, it is more important to identify what each bar represents, than value labels on the y axis. The chart would still make sense without the y axis labels, but not without the x axis labels.

::: image-block
![Labels on y axis using ChartText/Subtle, labels on x axis using ChartText/Default](/foundations/dataviz/chart-text-usage.png){width=433px}
:::
