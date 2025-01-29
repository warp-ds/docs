# Colour Usage

Colour plays an important role in data visualisation, and can be used to encode data in many ways. In addition, colour is often the first thing we perceive on a screen and can be used to guide the user's attention.



::: image-block
![Empty chart with axes, labels and gridlines using WARP colours to the left, bars and lines using dataviz colours to the right](/foundations/dataviz/chart-vs-data-colours.png)
:::

There are two main categories of dataviz colours: 
- We use **Chart colours** for non-data elements in the chart, such as gridlines, axes and text labels
- We use **Data colours** are for visual elements that encode data, such as lines, bars and areas

## Semantic tokens

The dataviz library is structured in a similar way as the regular WARP UI library, using **semantic tokens**. Semantic tokens are variables that refer to another colour, but can be changed dynamically, for example when switching between light mode and dark mode. The dataviz colours are the same across all Vend brands. 

Semantic tokens are useful because they:  
- allow us to: use colours in a consistent and meaningful way 
- make it easy to swap between light mode and dark mode

![A blue HEX colour value is stored in a colour primitive, which is connected to a semantic token, which is applied to a dataviz bar](/foundations/dataviz/semantic-token.png)

### Mapping dataviz elements to semantic tokens
We have defined a set of semantic colour categories. Data visualisations can be made using a variety of shapes, and it is not necessary or useful to define colours for all those shapes. But we have have defined a set of semantic tokens that should cater for most use cases. 

::: image-block
![Screenshot from Figma](/foundations/dataviz/mapping-datavizelement-to-token.png){width=433px}
:::

In the following pages you can read more about which semantic tokens to use for:
- [Lines & Points](/foundations/data-visualization/colour/lines-points/)
- [Bars & Areas](/foundations/data-visualization/colour/bars-areas/) (and Patterns)
- [Text & icons](/foundations/data-visualization/colour/text-icons/)

## Chart Colours

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

For data colours, there are different semantic colours that should be used intentionally: Primary, Secondary, Category and Evaluation colXWours.

### Primary <span style="display: inline-block; width: 18px; height: 18px; background-color: #1087de; border-radius: 2px; vertical-align: -1px;"></span> 

**– when you only need one colour**

If you only need one colour (or hue) in a chart, use the Primary colour. The primary colour is blue, but the shade varies across light mode, dark mode and what element it is applied to.

::: image-block
![Screenshot from Figma](/foundations/dataviz/colourlist-primarycolours.png){width=620px}
:::

### Secondary <span style="display: inline-block; width: 18px; height: 18px; background-color: #919499; border-radius: 2px; vertical-align: -1px;"></span> 

**– for secondary information**

When you want to indicate that a data category is secondary, you may use the secondary colour. This can for example be useful if you want to compare some important data with a reference data, for example this year against last year, or your own data against others’. 

In general the Secondary colour should be used together with the Primary colour, and it doesn’t make much sense to use the Secondary colour alone.

::: image-block
![Screenshot from Figma](/foundations/dataviz/colourlist-secondarycolours.png){width=620px}
:::


### Category 

**– to differentiate between categories**

<span style="display: inline-block; width: 14px; height: 18px; background-color: #795af4; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 18px; height: 18px; background-color: #c88800; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 18px; height: 18px; background-color: #eb5ec7; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 18px; height: 18px; background-color: #00a881; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 18px; height: 18px; background-color: #e84c23; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 18px; height: 18px; background-color: #19818f; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 18px; height: 18px; background-color: #2b97ef; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 18px; height: 18px; background-color: #919499; border-radius: 2px; vertical-align: -1px;"></span> 

There are **8 category colours** to indicate different categories of data: indigo, yellow, pink, green, orange, teal, blue and gray.

The category colours are suited for “nominal data” – which means data that represents different categories without any inherent order. In other words: things that are of equal importance. Examples: different brands, verticals, countries or product types.

The colours don’t have to be applied in any particular order, and all combinations of categorical colours should work reasonably well. 

::: details Guideliens for combining colours
- Avoid using orange unless there are already many other categorical colours in use, as orange can easily be perceived as negative. In particular, avoid orange together with green or teal. Use the evaluation colours if the intension is to indicate something good or bad
- If possible, only use orange if the graph already includes pink. This reduces the risk of interpreting orange as negative
- Only use blue and grey from the category palette when many other colours are in use. Otherwise the information can wrongly be interpreted as primary and secondary.

If you use the order of the colours in the library, you don’t have to think about these issues.

:::

Remember to use something in addition to colour to indicate different categories; for example labels, placement, or interaction. Se [visual success criteria nr. 1](/foundations/data-visualization/success-criteria/).

<do-dont>
  <do imgurl=“” imgalt=“...” >
    Don’t use too many colours at once. 
    
Extensive use of colour can make a graph and a page appear busy and chaotic. In addition, using many colours is a challenge for people with colour deficiencies, and makes it harder for everyone to read the graph.  
  </do>
  <do not imgurl=“” imgalt=“...“>
    Use other methods than colour to distinguish between categories.

Text labels: connect text labels to categories for easy identification
Group categories: if there is one specific category that is important, consider using the Primary colour for that category, and the Secondary colour for all other categories
Pattern or shape: use shape or patterns in addition to colour. If it works in greyscale, it works for everyone. 
Small multiples: split the data into several small graphs to avoid relying on colour coding.
  </do>

</do-dont>

#### Using category colours for specific data types
It is possible to use Category colours in a way that makes it easier for users to recognise specific types of data or differentiate between graphs. For example, in Mobility you could always use specific colours to represent cars running on petrol, diesel or electricity. This is especially useful if there are several graphs in a view that share the same data types. In addition, using different colours for different data types and graphs can make it easier for people to recognise and differentiate between the graphs.

However, be aware of some potential issues with this approach:
- You will run out of colours!
- If there are many graphs with many different colours in a view, the result might become chaotic and overwhelming, thereby appear less professional and trustful
- There will be inconsistencies across verticals (and even between services within a vertical) as it is impossible to have enough colours for all data options.


### Evaluation
**Evaluation colours** - a collection of 4 colours <span style="display: inline-block; width: 14px; height: 14px; background-color: #00a881; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #c88800; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #f2334e; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #81858c; border-radius: 2px; vertical-align: -1px;"></span> to indicate if the data is positive,  negative or neutral


## FAQ

### Why should we use these colours? 🧐

When we use the dataviz colours, we get:
- Automagic theming for dark mode and light mode
- Colours that are accessible, both in terms of contrast, and for the most common colour deficiency (deuteranomaly, which affects 1 in 12 men)
- A consistent and great dataviz experience across our services.

### Why do we use the same colours across all brands? 🙄
The value of having different colours for each brand would be quite low, while the cost of creating, implementing and maintaining accessible colours across multiple brands would be very high. That said, it is possible to override some or all colours for specific brands in the future if there is a good reason for doing so. But creating a new and accessible colour palette is not a trivial task.

### Why are there sooo many colours? 🤯
Yes, we know it’s a lot. We need different colours for lines and areas due to accessibility and readability. In addition, we need to cater for some flexibility, so that product teams have some options to choose from based on their specific needs.

### Why did you choose blue for the Primary colour? 💦
The most important reasons for choosing blue as a primary colour:
- Blue is already central to most of our brands, and most brands use blue in the UI. Therefore we ensure a level of visual harmony between UI and visualizations
- Blue is not directly associated with positive or negative (in contrast to red and green, for example), and is therefore a good starting point for a colour palette.
- By using the same primary colour across multiple graphs, the page will get a harmonic look and feel.

### Can I use the brand colour or UI colours for graphs? ⛔️
Do not use brand colours or UI colours from WARP in regular graphs in our products. Those colours are reserved for other use cases. 

The only exception we envision is to use the Primary UI colour if a graph is integrated in an interactive component, such as a slider.

### Why are the colours so light or dark? 🧑🏻‍🎨
The lightness of the colours are based on accessibility requirements.

For measuring contrast for each individual colour, we have used both WCAG 2 (3:1 for visual elements) the 
[Accessible Perceptual Contrast Algorithm](https://git.apcacontrast.com/documentation/APCAeasyIntro.html) (APCA). APCA is more accurately accounts for how perception works than WCAG 2. In addition, it takes the size and width of elements into account. This is particularily noticeable in dark mode, where APCA requires higher contrast.

In addition, we have adjusted lightness in order to make the colours work well together in the different palettes. For example, the lightness of the categorical colours vary so that they are easier to differentiate for people with colour deficiencies.


