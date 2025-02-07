# Data Colours

*For implementation, see [Tokens & CSS](/foundations/data-visualization/tokens/introduction/).*

In dataviz we use visual elements to encode data (sometimes referred to as ‘data marks’). 

For data colours, there are different semantic colours that should be used intentionally: Primary, Secondary, Category and Evaluation colours.

### Primary – when you only need one colour

![Example of blue bars and a blue line in light mode and dark mode](/foundations/dataviz/color-primary.png)

If you only need one colour (or hue) in a chart, use the Primary colour. The primary colour is **blue**, but the shade varies across light mode, dark mode and the it is applied to.

By using the primary colour across multiple graphs, our pages get a consistent and professional look and feel.

#### Semantic tokens
::: image-block
![List of colours with preview: background/primary, background/primary-subtle, line/primary, border/primary, text/primary and icon/primary](/foundations/dataviz/colourlist-primarycolours.png){width=620px}
:::

| Name | Colour | Description | 
| ---- | :---- | ----------- | 
| `Background/Primary` | ![](/foundations/dataviz/col-preview/primary-bg.png){width=80px} | For bars and areas | 
| `Background/Primary-Subtle` | ![](/foundations/dataviz/col-preview/primary-bg-subtle.png){width=80px} | Subtle colour for bars and areas | 
| `Line/Primary` | ![](/foundations/dataviz/col-preview/primary-line.png){width=80px} | For lines and points | 
| `Border/Primary` | ![](/foundations/dataviz/col-preview/primary-border.png){width=80px} | For border around `Primary-Subtle` | 
| `Text/Primary` | ![](/foundations/dataviz/col-preview/primary-text.png){width=80px} | For text | 
| `Icon/Primary` |  ![](/foundations/dataviz/col-preview/primary-icon.png){width=80px} |For icons | 



### Secondary – for secondary information

![List of colours with preview: background/primary, background/primary-subtle, line/primary, border/primary, text/primary and icon/primary](/foundations/dataviz/color-primary-and-secondary.png)

When you want to indicate that a data category is secondary, you may use the secondary colour. The primary colour is **gray**. 

The secondary colour can be useful if you want to compare some important data with reference data, for example this year against last year, or your own performance against others’. 

In general the Secondary colour should be used together with the Primary colour, and it doesn’t make much sense to use the Secondary colour alone.


#### Semantic tokens

::: image-block
![List of colours with preview: background/primary, background/primary-subtle, line/primary, border/primary, text/primary and icon/primary](/foundations/dataviz/colourlist-secondarycolours.png){width=620px}
:::

### Category – to differentiate between categories

![Screenshot from Figma](/foundations/dataviz/color-category.png)

There are **8 category colours** to indicate different categories of data: indigo, yellow, pink, green, orange, teal, blue and gray.

The category colours are suited for “nominal data” – which means data that represents different categories without any inherent order. In other words: things that are of equal importance. Examples: different brands, verticals, countries or product types.

#### Order of colours

The colours don’t have to be applied in any particular order, and all combinations of categorical colours should work reasonably well. However, randomly choosing colours can have some negative consequences. 

If you choose to not follow the order of colour in the library, consider this:
- Avoid using orange unless there are already many other categorical colours in use, as orange alone can easily be perceived as negative. In particular, avoid orange together with green or teal. Use the evaluation colours if the intension is to indicate something good or bad
- If possible, only use orange if the graph already includes pink. This reduces the risk of interpreting orange as negative
- Only use blue and grey from the category palette when many other colours are in use. Otherwise the information can wrongly be interpreted as primary and secondary.

If you use the order of the colours in the library, you don’t have to think about these issues.

#### Don't use colour alone to differentiate between categories

<do-dont>
  <do imgurl="/docs/foundations/dataviz/category-do.png" imgalt="..." >
    Use other methods than colour alone to distinguish between categories. Example: add text labels, group into fewer categories, use distinctive patterns or shapes, or use small multiples. 
  </do>
  <do not imgurl="/docs/foundations/dataviz/category-dont.png" imgalt="...">
    Don’t use too many colours at once. Extensive use of colour can make a graph and a page appear busy and chaotic, and be impossible to read for people with colour deficiencies.  
  </do>
</do-dont>

See [visual success criteria nr. 1: Don’t rely on colour alone to explain data](/foundations/data-visualization/success-criteria/).

#### Be careful using category colours for specific data types
It is possible to use Category colours in a way that makes it easier for users to recognise specific types of data or differentiate between graphs. For example, in Mobility you could always use specific colours to represent cars running on petrol, diesel or electricity. This is especially useful if there are several graphs in a view that share the same data types. In addition, using different colours for different data types and graphs can make it easier for people to recognise and differentiate between the graphs.

However, be aware of some **potential issues** with this approach:
- You will run out of colours!
- If there are many graphs with many different colours in a view, the result might become chaotic and overwhelming, thereby appear less professional and trustful
- There will be inconsistencies across verticals (and even between services within a vertical) as it is impossible to have enough colours for all data options.


### Evaluation - to indicate something positive, neutral or negative

<span style="display: inline-block; width: 14px; height: 14px; background-color: #00a881; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #c88800; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #f2334e; border-radius: 2px; vertical-align: -1px;"></span> <span style="display: inline-block; width: 14px; height: 14px; background-color: #81858c; border-radius: 2px; vertical-align: -1px;"></span> **– To indicate something positive, neutral or negative** 

::: image-block
![3 red bars below a baseline, 3 green bars above the baseline](/foundations/dataviz/evaluation.png){width=433px}
:::

Use evaluation colours when you need the colours to indicate if the data is positive or negative for the intended user in a specific use case. The semantic options are:
- <span style="display: inline-block; width: 14px; height: 14px; background-color: #00a881; border-radius: 2px; vertical-align: -1px;"></span> – **Positive** (green) to indicate positive data, such as increase in sales or engagement, or the effect of using a product or service. Sometimes it might be better to use the Primary colour
- <span style="display: inline-block; width: 14px; height: 14px; background-color: #f2334e; border-radius: 2px; vertical-align: -1px;"></span> – **Negative** (red) to indicate negative data, such as decrease in sales or engagement
- <span style="display: inline-block; width: 14px; height: 14px; background-color: #c88800; border-radius: 2px; vertical-align: -1px;"></span> – **Warning** (yellow) to indicate data that need attention or may soon encounter problems
- <span style="display: inline-block; width: 14px; height: 14px; background-color: #81858c; border-radius: 2px; vertical-align: -1px;"></span> – **Neutral** (grey) to indicate baseline or standard data next to positive or negative data.

Green and red area well established for indicating positive or negative values. However, this colour combination is particularly challenging for people with colour deficiencies. Here are some measures you can take to make the colours work for everyone:
- Make sure to use something in addition to colour to indicate the value, for example shape or text
- Combine a default colour with a subtle colour, for example Primary Default with Negative Subtle
- Use the Primary colour (blue) instead of Positive (green). Blue and red is a safer combination than green and red.
