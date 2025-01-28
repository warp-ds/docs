# Chart Colours

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

## Chart colours
All chart colours start with 'chart'.

::: image-block
![Screenshot from Figma](/foundations/dataviz/colourlist-chartcolours.png){width=620px}
:::



::: details ChartBackground <span style="display: inline-block; width: 14px; height: 14px; background-color: #ffffff; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #1b1b1f; border-radius: 2px; vertical-align: -1px;"></span>
|         | Value       | 
| ----------- | ----------- |    
| Figma name | `DV/Semantic/Color/ChartBackground/Default` | 
| CSS variable | `var(--w-dv-s-color-chartbackground-default)` | 
| HTML class |`dv-s-chartbg-default` |
| SVG fill class |`dv-s-fill-chartbg-default` | 
| SVG stroke class |`dv-s-stroke-chartbg-default` | 
:::


| Figma name | Colour | CSS var. | HTML class | SVG Fill | SVG Stroke |
| ---------- | ------ | -------- | ---------- | -------- | ---------- |   
| `DV/Semantic/Color/ChartLine/Default` | <span style="display: inline-block; width: 18px; height: 18px; background-color: #84848f; border: 1px solid #D4D9E3; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 18px; height: 18px; background-color: #afafb8; border: 1px solid #D4D9E3; border-radius: 2px; vertical-align: -1px;"></span> | `var(--w-dv-s-color-chartline-default)` | `dv-s-chartline-default` | `dv-s-fill-chartline-default` | `dv-s-stroke-chartline-default` |
| `DV/Semantic/Color/ChartLine/Subtle` | <span style="display: inline-block; width: 18px; height: 18px; background-color: #cacad1; border: 1px solid #D4D9E3; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 18px; height: 18px; background-color: #5c5c66; border: 1px solid #D4D9E3; border-radius: 2px; vertical-align: -1px;"></span> | `var(--w-dv-s-color-chartline-subtle)` | `dv-s-chartline-subtle` | `dv-s-fill-chartline-subtle` | `dv-s-stroke-chartline-subtle` |
| `DV/Semantic/Color/ChartBackground/Default` | <span style="display: inline-block; width: 18px; height: 18px; background-color: #ffffff; border: 1px solid #D4D9E3; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 18px; height: 18px; background-color: #1b1b1f; border: 1px solid #D4D9E3; border-radius: 2px; vertical-align: -1px;"></span> | `var(--w-dv-s-color-chartbackground-default)` | `dv-s-chartbg-default` | `dv-s-fill-chartbg-default` | `dv-s-stroke-chartbg-default` |
| `DV/Semantic/Color/ChartText/Default` | <span style="display: inline-block; width: 18px; height: 18px; background-color: #1b1b1f; border: 1px solid #D4D9E3;  border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 18px; height: 18px; background-color: #ffffff; border: 1px solid #D4D9E3; border-radius: 2px; vertical-align: -1px;"></span> | `var(--w-dv-s-color-charttext-default)` | `dv-s-charttext-default` | `dv-s-fill-charttext-default` | `dv-s-stroke-charttext-default` |
| `DV/Semantic/Color/ChartText/Subtle` | <span style="display: inline-block; width: 18px; height: 18px; background-color: #5c5c66; border: 1px solid #D4D9E3; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 18px; height: 18px; background-color: #afafb8; border: 1px solid #D4D9E3; border-radius: 2px; vertical-align: -1px;"></span> | `var(--w-dv-s-color-charttext-subtle)` | `dv-s-charttext-subtle` | `dv-s-fill-charttext-subtle` | `dv-s-stroke-charttext-subtle` |



To achieve sufficient contrast, visualisations should always be placed on ChartBackground, which corresponds to the default background colour in WARP. 

The ChartBackground colour can also be used in gradients, to fade data colours to blend with the backgorund.

[illustration?]

## Why chart colours?

Some of the chart colours are identical to regular WARP colours, for example the background, text, and text subtle. However, there are a few reaasons why we provide these colours in the dataviz library: 

- In Figma, it is convenient for designers to have all the colours they need for charts in one library
- In code, the dataviz colours can be applied to SVG elements using utility classes
- Some components (in Figma) need the ChartBackground colour as part of the component 
- Users of the dataviz library get all the colours they need for creating charts, and the library can therefore be used independent of WARP
- The ChartBackground colour ensures good contrast between the dataviz elements and the background, which might not be the case if using other WARP background colours 
- At the time of writing (jan 2025) there is no distinction in WARP between border and border subtle in WARP, which is needed for gridlines etc.