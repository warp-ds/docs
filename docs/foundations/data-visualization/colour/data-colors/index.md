# Data Colours

*For implementation, see [Tokens & CSS](/foundations/data-visualization/tokens/introduction/).*

**On this page:**

[[toc]]



## Semantic data colours

For data colours, there are different semantic colours that should be used intentionally: Primary, Secondary, Category and Evaluation colours.

In dataviz we use visual elements to encode data (sometimes referred to as ‘data marks’). 


### Primary – when you only need one colour

![Example of blue bars and a blue line in light mode and dark mode](/foundations/dataviz/color-primary.png)

If you only need one colour (or hue) in a chart, use the Primary colour. The primary colour is **blue**, but the shade varies across light mode, dark mode and the it is applied to.

By using the primary colour across multiple graphs, our pages get a consistent and professional look and feel.

#### Primary: Blue
::: image-block
![List of colours with preview: background/primary, background/primary-subtle, line/primary, border/primary, text/primary and icon/primary](/foundations/dataviz/colourlist-primary.png){width=620px}
:::

| Name | Light/Dark mode | Description | 
| ---- | -- | ----------- | 
| `Background/Primary` | ![blue boxes](/foundations/dataviz/col-preview/primary-bg.png){width=80px} | Bars and areas | 
| `Background/Primary-Subtle` | ![blue boxes](/foundations/dataviz/col-preview/primary-bg-subtle.png){width=80px} | Subtle colour for bars and areas | 
| `Line/Primary` | ![blue lines](/foundations/dataviz/col-preview/primary-line.png){width=80px} | Lines and points | 
| `Border/Primary` | ![blue lines](/foundations/dataviz/col-preview/primary-border.png){width=80px} | Border around `-Subtle` | 
| `Text/Primary` | ![blue text](/foundations/dataviz/col-preview/primary-text.png){width=80px} | Text | 
| `Icon/Primary` |  ![blue icons](/foundations/dataviz/col-preview/primary-icon.png){width=80px} | Icons | 


### Secondary – for secondary information

![List of colours with preview: background/primary, background/primary-subtle, line/primary, border/primary, text/primary and icon/primary](/foundations/dataviz/color-primary-and-secondary.png)

When you want to indicate that a data category is secondary, you may use the secondary colour. The primary colour is **gray**. 

The secondary colour can be useful if you want to compare some important data with reference data, for example this year against last year, or your own performance against others’. 

In general the Secondary colour should be used together with the Primary colour, and it doesn’t make much sense to use the Secondary colour alone.


#### Secondary: Gray

::: image-block
![List of colours with preview: background/primary, background/primary-subtle, line/primary, border/primary, text/primary and icon/primary](/foundations/dataviz/colourlist-secondary.png){width=620px}
:::

### Category – to differentiate between categories

![Screenshot from Figma](/foundations/dataviz/color-category.png)

There are **8 category colours** to indicate different categories of data: indigo, yellow, pink, green, orange, teal, blue and gray.

The category colours are suited for “nominal data” – which means data that represents different categories without any inherent order. In other words: things that are of equal importance. Examples: different brands, verticals, countries or product types.

#### Category1: Indigo

::: image-block
![List of colours with preview: background/category1, background/category1, line/category1, border/category1, text/category1 and icon/category1](/foundations/dataviz/colourlist-category1.png){width=620px}
:::

#### Category2: Yellow

::: image-block
![List of colours with preview: background/category2, background/category2, line/category2, border/category2, text/category2 and icon/category2](/foundations/dataviz/colourlist-category2.png){width=620px}
:::

#### Category3: Pink

::: image-block
![List of colours with preview: background/category3, background/category3, line/category3, border/category3, text/category3 and icon/category3](/foundations/dataviz/colourlist-category3.png){width=620px}
:::

#### Category4: Green

::: image-block
![List of colours with preview: background/category4, background/category4, line/category4, border/category4, text/category4 and icon/category4](/foundations/dataviz/colourlist-category4.png){width=620px}
:::

#### Category5: Orange

::: image-block
![List of colours with preview: background/category5, background/category5, line/category5, border/category5, text/category5 and icon/category5](/foundations/dataviz/colourlist-category5.png){width=620px}
:::

#### Category6: Teal

::: image-block
![List of colours with preview: background/category6, background/category6, line/category6, border/category6, text/category6 and icon/category6](/foundations/dataviz/colourlist-category6.png){width=620px}
:::

#### Category7: Blue

::: image-block
![List of colours with preview: background/category7, background/category7, line/category7, border/category7, text/category7 and icon/category7](/foundations/dataviz/colourlist-category7.png){width=620px}
:::

#### Category8: Gray

::: image-block
![List of colours with preview: background/category8, background/category8, line/category8, border/category8, text/category8 and icon/category8](/foundations/dataviz/colourlist-category8.png){width=620px}
:::

### Evaluation - to indicate something positive, neutral or negative

::: image-block
![3 red bars below a baseline, 3 green bars above the baseline](/foundations/dataviz/color-evaluation.png){width=462px}
:::

Use evaluation colours when you need the colours to indicate if the data is positive or negative for the intended user in a specific use case. The semantic options are:
- **Positive** (green) to indicate positive data, such as increase in sales or engagement, or the effect of using a product or service. You can also use the Primary colour (blue) to indicate something positive
- **Warning** (yellow) to indicate data that need attention or may soon encounter problems
- **Negative** (red) to indicate negative data, such as decrease in sales or engagement
- **Neutral** (grey) to indicate baseline or standard data next to positive or negative data.

::: details How can red and green work for people with colour deficiencies?
Green and red are well established colours for indicating positive or negative values. However, this colour combination is particularly challenging for people with colour deficiencies. We have tried to find shades of red and green that can work for many with colour deficiencies, but the colours will not be possible to differentiate for everyone. 

#### What you can do to make the colours work for everyone:
- Make sure to use something in addition to colour to indicate the value, for example an icon or text. Think that the visualisation should make sense even if it was printed in black and white. See illustration above for an example.
- Use the Primary colour (blue) instead of Positive (green). Blue and red is a safer combination than green and red
- Use areas and bars rather than lines. It is easier for people to differentiate colours for large areas than for small elements  
- Combine a background colour with a background-subtle colour, for example `Background/Positive` with `Background/Negative-Subtle`
:::

What is positive or negative for the user depends on the context. Sometimes it is positive that a number goes up, sometimes it is positive that it goes down. Sometimes it is positive that a value is low or high, other times it is more important if the trend is going up or down.

#### Positive: Green

::: image-block
![List of colours with preview: background/positive, background/positive, line/positive, border/positive, text/positive and icon/positive](/foundations/dataviz/colourlist-positive.png){width=620px}
:::

#### Warning: Yellow

::: image-block
![List of colours with preview: background/warning, background/warning, line/warning, border/warning, text/warning and icon/warning](/foundations/dataviz/colourlist-warning.png){width=620px}
:::

#### Negative: Red

::: image-block
![List of colours with preview: background/negative, background/negative, line/negative, border/negative, text/negative and icon/negative](/foundations/dataviz/colourlist-negative.png){width=620px}
:::

#### Neutral: Gray

::: image-block
![List of colours with preview: background/neutral, background/neutral, line/neutral, border/neutral, text/neutral and icon/neutral](/foundations/dataviz/colourlist-neutral.png){width=620px}
:::




## Colour guidelines

### Don't use colour alone to differentiate between categories

<do-dont>
  <do imgurl="/docs/foundations/dataviz/category-do.png" imgalt="..." >
    Use other methods than colour alone to distinguish between categories. Example: add text labels, group into fewer categories, use distinctive patterns or shapes, or use small multiples. 
  </do>
  <do not imgurl="/docs/foundations/dataviz/category-dont.png" imgalt="...">
    Don’t use too many colours at once. Extensive use of colour can make a graph and a page appear busy and chaotic, and be impossible to read for people with colour deficiencies.  
  </do>
</do-dont>

See [visual success criteria nr. 1: Don’t rely on colour alone to explain data](/foundations/data-visualization/success-criteria/).

### Consider the order of categorical colours

The colours don’t have to be applied in any particular order, and all combinations of categorical colours should work reasonably well. However, randomly choosing colours can have some negative consequences. 

If you choose to not follow the order of colour in the library, consider this:
- Avoid using orange unless there are already many other categorical colours in use, as orange alone can easily be perceived as negative. In particular, avoid orange together with green or teal. Use the evaluation colours if the intension is to indicate something good or bad
- If possible, only use orange if the graph already includes pink. This reduces the risk of interpreting orange as negative
- Only use blue and grey from the category palette when many other colours are in use. Otherwise the information can wrongly be interpreted as primary and secondary.

If you use the order of the colours in the library, you don’t have to think about these issues.

### Be careful using category colours for specific data types
It is possible to use Category colours in a way that makes it easier for users to recognise specific types of data or differentiate between graphs. For example, in Mobility you could always use specific colours to represent cars running on petrol, diesel or electricity. This is especially useful if there are several graphs in a view that share the same data types. In addition, using different colours for different data types and graphs can make it easier for people to recognise and differentiate between the graphs.

However, be aware of some **potential issues** with this approach:
- You will run out of colours!
- If there are many graphs with many different colours in a view, the result might become chaotic and overwhelming, thereby appear less professional and trustful
- There will be inconsistencies across verticals (and even between services within a vertical) as it is impossible to have enough colours for all data options.


