# Data Colors (dataviz)

*For implementation, see [Tokens & CSS](/foundations/data-visualization/tokens/introduction/).*

**On this page:**

[[toc]]

## Semantic data colors for dataviz

For data colors, there are different semantic colors that should be used intentionally: Primary, Secondary, Category and Evaluation colors.

In dataviz we use visual elements to encode data (sometimes referred to as ‘data marks’). 

### Primary – when you only need one color

![Example of blue bars and a blue line in light mode and dark mode](/foundations/dataviz/color-primary.png)

If you only need one color (or hue) in a chart, use the Primary color. The primary color is **blue**, but the shade varies across light mode, dark mode and the it is applied to.

By using the primary color across multiple graphs, our pages get a consistent and professional look and feel.

#### Primary: Blue
<!-- ::: image-block
![List of colors with preview: background/primary, background/primary-subtle, line/primary, border/primary, text/primary and icon/primary](/foundations/dataviz/colourlist-primary.png){width=620px}
::: -->

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Background/Primary` | ![blue boxes](/foundations/dataviz/col-preview/primary-bg.png){width=80px} | Bars and areas | 
| `Background/Primary-Subtle` | ![blue boxes](/foundations/dataviz/col-preview/primary-bg-subtle.png){width=80px} | Subtle color for bars and areas | 
| `Line/Primary` | ![blue lines](/foundations/dataviz/col-preview/primary-line.png){width=80px} | Lines and points | 
| `Border/Primary` | ![blue lines](/foundations/dataviz/col-preview/primary-border.png){width=80px} | Border around `-Subtle` | 
| `Text/Primary` | ![blue text](/foundations/dataviz/col-preview/primary-text.png){width=80px} | Text | 
| `Icon/Primary` |  ![blue icons](/foundations/dataviz/col-preview/primary-icon.png){width=80px} | Icons | 


### Secondary – for secondary information

![Example of blue and gray bars and a gray line in light mode and dark mode](/foundations/dataviz/color-primary-and-secondary.png)

When you want to indicate that a data category is secondary, you may use the secondary color. The primary color is **gray**. 

The secondary color can be useful if you want to compare some important data with reference data, for example this year against last year, or your own performance against others’. 

In general the Secondary color should be used together with the Primary color, and it doesn’t make much sense to use the Secondary color alone.


#### Secondary: Gray

<!-- ::: image-block
![List of colors with preview: background/primary, background/primary-subtle, line/primary, border/primary, text/primary and icon/primary](/foundations/dataviz/colourlist-secondary.png){width=620px}
::: -->

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Background/Secondary` | ![gray boxes](/foundations/dataviz/col-preview/secondary-bg.png){width=80px} | Bars and areas | 
| `Background/Secondary-Subtle` | ![gray boxes](/foundations/dataviz/col-preview/secondary-bg-subtle.png){width=80px} | Subtle color for bars and areas | 
| `Line/Secondary` | ![gray lines](/foundations/dataviz/col-preview/secondary-line.png){width=80px} | Lines and points | 
| `Border/Secondary` | ![gray lines](/foundations/dataviz/col-preview/secondary-border.png){width=80px} | Border around `-Subtle` | 
| `Text/Secondary` | ![gray text](/foundations/dataviz/col-preview/secondary-text.png){width=80px} | Text | 
| `Icon/Secondary` |  ![gray icons](/foundations/dataviz/col-preview/secondary-icon.png){width=80px} | Icons | 

### Category – to differentiate between categories

![8 stacked bars in light mode and dark mode with different colors: indigo, yellow, pink, green, red, teal, blue, gray](/foundations/dataviz/color-category.png)

There are **8 category colors** to indicate different categories of data: indigo, yellow, pink, green, orange, teal, blue and gray.

The category colors are suited for “nominal data” – which means data that represents different categories without any inherent order. In other words: things that are of equal importance. Examples: different brands, verticals, countries or product types.

#### Category1: Indigo

<!-- ::: image-block
![List of colors with preview: background/category1, background/category1, line/category1, border/category1, text/category1 and icon/category1](/foundations/dataviz/colourlist-category1.png){width=620px}
::: -->

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Background/Category1` | ![indigo boxes](/foundations/dataviz/col-preview/category1-bg.png){width=80px} | Bars and areas | 
| `Background/Category1-Subtle` | ![indigo boxes](/foundations/dataviz/col-preview/category1-bg-subtle.png){width=80px} | Subtle color for bars and areas | 
| `Line/Category1` | ![indigo lines](/foundations/dataviz/col-preview/category1-line.png){width=80px} | Lines and points | 
| `Border/Category1` | ![indigo lines](/foundations/dataviz/col-preview/category1-border.png){width=80px} | Border around `-Subtle` | 
| `Text/Category1` | ![indigo text](/foundations/dataviz/col-preview/category1-text.png){width=80px} | Text | 
| `Icon/Category1` |  ![indigo icons](/foundations/dataviz/col-preview/category1-icon.png){width=80px} | Icons | 

#### Category2: Yellow

<!-- ::: image-block
![List of colors with preview: background/category2, background/category2, line/category2, border/category2, text/category2 and icon/category2](/foundations/dataviz/colourlist-category2.png){width=620px}
::: -->

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Background/Category2` | ![yellow boxes](/foundations/dataviz/col-preview/category2-bg.png){width=80px} | Bars and areas | 
| `Background/Category2-Subtle` | ![yellow boxes](/foundations/dataviz/col-preview/category2-bg-subtle.png){width=80px} | Subtle color for bars and areas | 
| `Line/Category2` | ![yellow lines](/foundations/dataviz/col-preview/category2-line.png){width=80px} | Lines and points | 
| `Border/Category2` | ![yellow lines](/foundations/dataviz/col-preview/category2-border.png){width=80px} | Border around `-Subtle` | 
| `Text/Category2` | ![yellow text](/foundations/dataviz/col-preview/category2-text.png){width=80px} | Text | 
| `Icon/Category2` |  ![yellow icons](/foundations/dataviz/col-preview/category2-icon.png){width=80px} | Icons | 

#### Category3: Pink

<!-- ::: image-block
![List of colors with preview: background/category3, background/category3, line/category3, border/category3, text/category3 and icon/category3](/foundations/dataviz/colourlist-category3.png){width=620px}
::: -->

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Background/Category3` | ![pink boxes](/foundations/dataviz/col-preview/category3-bg.png){width=80px} | Bars and areas | 
| `Background/Category3-Subtle` | ![pink boxes](/foundations/dataviz/col-preview/category3-bg-subtle.png){width=80px} | Subtle color for bars and areas | 
| `Line/Category3` | ![pink lines](/foundations/dataviz/col-preview/category3-line.png){width=80px} | Lines and points | 
| `Border/Category3` | ![pink lines](/foundations/dataviz/col-preview/category3-border.png){width=80px} | Border around `-Subtle` | 
| `Text/Category3` | ![pink text](/foundations/dataviz/col-preview/category3-text.png){width=80px} | Text | 
| `Icon/Category3` |  ![pink icons](/foundations/dataviz/col-preview/category3-icon.png){width=80px} | Icons | 

#### Category4: Green

<!-- ::: image-block
![List of colors with preview: background/category4, background/category4, line/category4, border/category4, text/category4 and icon/category4](/foundations/dataviz/colourlist-category4.png){width=620px}
::: -->

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Background/Category4` | ![green boxes](/foundations/dataviz/col-preview/category4-bg.png){width=80px} | Bars and areas | 
| `Background/Category4-Subtle` | ![green boxes](/foundations/dataviz/col-preview/category4-bg-subtle.png){width=80px} | Subtle color for bars and areas | 
| `Line/Category4` | ![green lines](/foundations/dataviz/col-preview/category4-line.png){width=80px} | Lines and points | 
| `Border/Category4` | ![green lines](/foundations/dataviz/col-preview/category4-border.png){width=80px} | Border around `-Subtle` | 
| `Text/Category4` | ![green text](/foundations/dataviz/col-preview/category4-text.png){width=80px} | Text | 
| `Icon/Category4` |  ![green icons](/foundations/dataviz/col-preview/category4-icon.png){width=80px} | Icons | 

#### Category5: Orange

<!-- ::: image-block
![List of colors with preview: background/category5, background/category5, line/category5, border/category5, text/category5 and icon/category5](/foundations/dataviz/colourlist-category5.png){width=620px}
::: -->

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Background/Category5` | ![orange boxes](/foundations/dataviz/col-preview/category5-bg.png){width=80px} | Bars and areas | 
| `Background/Category5-Subtle` | ![orange boxes](/foundations/dataviz/col-preview/category5-bg-subtle.png){width=80px} | Subtle color for bars and areas | 
| `Line/Category5` | ![orange lines](/foundations/dataviz/col-preview/category5-line.png){width=80px} | Lines and points | 
| `Border/Category5` | ![orange lines](/foundations/dataviz/col-preview/category5-border.png){width=80px} | Border around `-Subtle` | 
| `Text/Category5` | ![orange text](/foundations/dataviz/col-preview/category5-text.png){width=80px} | Text | 
| `Icon/Category5` |  ![orange icons](/foundations/dataviz/col-preview/category5-icon.png){width=80px} | Icons | 

#### Category6: Teal

<!-- ::: image-block
![List of colors with preview: background/category6, background/category6, line/category6, border/category6, text/category6 and icon/category6](/foundations/dataviz/colourlist-category6.png){width=620px}
::: -->

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Background/Category6` | ![teal boxes](/foundations/dataviz/col-preview/category6-bg.png){width=80px} | Bars and areas | 
| `Background/Category6-Subtle` | ![teal boxes](/foundations/dataviz/col-preview/category6-bg-subtle.png){width=80px} | Subtle color for bars and areas | 
| `Line/Category6` | ![teal lines](/foundations/dataviz/col-preview/category6-line.png){width=80px} | Lines and points | 
| `Border/Category6` | ![teal lines](/foundations/dataviz/col-preview/category6-border.png){width=80px} | Border around `-Subtle` | 
| `Text/Category6` | ![teal text](/foundations/dataviz/col-preview/category6-text.png){width=80px} | Text | 
| `Icon/Category6` |  ![teal icons](/foundations/dataviz/col-preview/category6-icon.png){width=80px} | Icons | 

#### Category7: Blue

<!-- ::: image-block
![List of colors with preview: background/category7, background/category7, line/category7, border/category7, text/category7 and icon/category7](/foundations/dataviz/colourlist-category7.png){width=620px}
::: -->

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Background/Category7` | ![blue boxes](/foundations/dataviz/col-preview/category7-bg.png){width=80px} | Bars and areas | 
| `Background/Category7-Subtle` | ![blue boxes](/foundations/dataviz/col-preview/category7-bg-subtle.png){width=80px} | Subtle color for bars and areas | 
| `Line/Category7` | ![blue lines](/foundations/dataviz/col-preview/category7-line.png){width=80px} | Lines and points | 
| `Border/Category7` | ![blue lines](/foundations/dataviz/col-preview/category7-border.png){width=80px} | Border around `-Subtle` | 
| `Text/Category7` | ![blue text](/foundations/dataviz/col-preview/category7-text.png){width=80px} | Text | 
| `Icon/Category7` |  ![blue icons](/foundations/dataviz/col-preview/category7-icon.png){width=80px} | Icons | 

#### Category8: Gray

<!-- ::: image-block
![List of colors with preview: background/category8, background/category8, line/category8, border/category8, text/category8 and icon/category8](/foundations/dataviz/colourlist-category8.png){width=620px}
::: -->

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Background/Category8` | ![gray boxes](/foundations/dataviz/col-preview/category8-bg.png){width=80px} | Bars and areas | 
| `Background/Category8-Subtle` | ![gray boxes](/foundations/dataviz/col-preview/category8-bg-subtle.png){width=80px} | Subtle color for bars and areas | 
| `Line/Category8` | ![gray lines](/foundations/dataviz/col-preview/category8-line.png){width=80px} | Lines and points | 
| `Border/Category8` | ![gray lines](/foundations/dataviz/col-preview/category8-border.png){width=80px} | Border around `-Subtle` | 
| `Text/Category8` | ![gray text](/foundations/dataviz/col-preview/category8-text.png){width=80px} | Text | 
| `Icon/Category8` |  ![gray icons](/foundations/dataviz/col-preview/category8-icon.png){width=80px} | Icons | 

### Evaluation - to indicate something positive, neutral or negative

::: image-block
![Icon and text with similar colors: blue arrow going up, gray arrow across, red arrow going down. Icons with color next to bars with same color: green smile, yellow flat mouth, red unhappy face](/foundations/dataviz/color-evaluation.png){width=462px}
:::

Use evaluation colors when you need the colors to indicate if the data is positive or negative for the intended user in a specific use case. The semantic options are:
- **Positive** (green) to indicate positive data, such as increase in sales or engagement, or the effect of using a product or service. You can also use the Primary color (blue) to indicate something positive
- **Warning** (yellow) to indicate data that need attention or may soon encounter problems
- **Negative** (red) to indicate negative data, such as decrease in sales or engagement
- **Neutral** (grey) to indicate baseline or standard data next to positive or negative data.

::: details How can red and green work for people with color deficiencies?
Green and red are well established colors for indicating positive or negative values. However, this color combination is particularly challenging for people with color deficiencies. We have tried to find shades of red and green that can work for many with color deficiencies, but the colors will not be possible to differentiate for everyone. 

#### What you can do to make the colors work for everyone:
- Make sure to use something in addition to color to indicate the value, for example an icon or text. Think that the visualization should make sense even if it was printed in black and white. See illustration above for an example.
- Use the Primary color (blue) instead of Positive (green). Blue and red is a safer combination than green and red
- Use areas and bars rather than lines. It is easier for people to differentiate colors for large areas than for small elements  
- Combine a background color with a background-subtle color, for example `Background/Positive` with `Background/Negative-Subtle`
:::

What is positive or negative for the user depends on the context. Sometimes it is positive that a number goes up, sometimes it is positive that it goes down. Sometimes it is positive that a value is low or high, other times it is more important if the trend is going up or down.

#### Positive: Green

<!-- ::: image-block
![List of colors with preview: background/positive, background/positive, line/positive, border/positive, text/positive and icon/positive](/foundations/dataviz/colourlist-positive.png){width=620px}
::: -->

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Background/Positive` | ![green boxes](/foundations/dataviz/col-preview/positive-bg.png){width=80px} | Bars and areas | 
| `Background/Positive-Subtle` | ![green boxes](/foundations/dataviz/col-preview/positive-bg-subtle.png){width=80px} | Subtle color for bars and areas | 
| `Line/Positive` | ![green lines](/foundations/dataviz/col-preview/positive-line.png){width=80px} | Lines and points | 
| `Border/Positive` | ![green lines](/foundations/dataviz/col-preview/positive-border.png){width=80px} | Border around `-Subtle` | 
| `Text/Positive` | ![green text](/foundations/dataviz/col-preview/positive-text.png){width=80px} | Text | 
| `Icon/Positive` |  ![green icons](/foundations/dataviz/col-preview/positive-icon.png){width=80px} | Icons | 

#### Warning: Yellow

<!-- ::: image-block
![List of colors with preview: background/warning, background/warning, line/warning, border/warning, text/warning and icon/warning](/foundations/dataviz/colourlist-warning.png){width=620px}
::: -->

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Background/Warning` | ![yellow boxes](/foundations/dataviz/col-preview/warning-bg.png){width=80px} | Bars and areas | 
| `Background/Warning-Subtle` | ![yellow boxes](/foundations/dataviz/col-preview/warning-bg-subtle.png){width=80px} | Subtle color for bars and areas | 
| `Line/Warning` | ![yellow lines](/foundations/dataviz/col-preview/warning-line.png){width=80px} | Lines and points | 
| `Border/Warning` | ![yellow lines](/foundations/dataviz/col-preview/warning-border.png){width=80px} | Border around `-Subtle` | 
| `Text/Warning` | ![yellow text](/foundations/dataviz/col-preview/warning-text.png){width=80px} | Text | 
| `Icon/Warning` |  ![yellow icons](/foundations/dataviz/col-preview/warning-icon.png){width=80px} | Icons | 

#### Negative: Red

<!-- ::: image-block
![List of colors with preview: background/negative, background/negative, line/negative, border/negative, text/negative and icon/negative](/foundations/dataviz/colourlist-negative.png){width=620px}
::: -->

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Background/Negative` | ![red boxes](/foundations/dataviz/col-preview/negative-bg.png){width=80px} | Bars and areas | 
| `Background/Negative-Subtle` | ![red boxes](/foundations/dataviz/col-preview/negative-bg-subtle.png){width=80px} | Subtle color for bars and areas | 
| `Line/Negative` | ![red lines](/foundations/dataviz/col-preview/negative-line.png){width=80px} | Lines and points | 
| `Border/Negative` | ![red lines](/foundations/dataviz/col-preview/negative-border.png){width=80px} | Border around `-Subtle` | 
| `Text/Negative` | ![red text](/foundations/dataviz/col-preview/negative-text.png){width=80px} | Text | 
| `Icon/Negative` |  ![red icons](/foundations/dataviz/col-preview/negative-icon.png){width=80px} | Icons | 

#### Neutral: Gray

<!-- ::: image-block
![List of colors with preview: background/neutral, background/neutral, line/neutral, border/neutral, text/neutral and icon/neutral](/foundations/dataviz/colourlist-neutral.png){width=620px}
::: -->

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Background/Neutral` | ![gray boxes](/foundations/dataviz/col-preview/neutral-bg.png){width=80px} | Bars and areas | 
| `Background/Neutral-Subtle` | ![gray boxes](/foundations/dataviz/col-preview/neutral-bg-subtle.png){width=80px} | Subtle color for bars and areas | 
| `Line/Neutral` | ![gray lines](/foundations/dataviz/col-preview/neutral-line.png){width=80px} | Lines and points | 
| `Border/Neutral` | ![gray lines](/foundations/dataviz/col-preview/neutral-border.png){width=80px} | Border around `-Subtle` | 
| `Text/Neutral` | ![gray text](/foundations/dataviz/col-preview/neutral-text.png){width=80px} | Text | 
| `Icon/Neutral` |  ![gray icons](/foundations/dataviz/col-preview/neutral-icon.png){width=80px} | Icons | 


## Color guidelines

### Don't use color alone to differentiate between categories

<do-dont>
  <do imgurl="/docs/foundations/dataviz/category-do.png" imgalt="A blue circle next to 7 gray circles, all directly labelled" >
    Use other methods than color alone to distinguish between categories. Example: add text labels, group into fewer categories, use distinctive patterns or shapes, or use small multiples. 
  </do>
  <do not imgurl="/docs/foundations/dataviz/category-dont.png" imgalt="8 circles in different colors, with legend below">
    Don’t use too many colors at once. Extensive use of color can make a graph and a page appear busy and chaotic, and be impossible to read for people with color deficiencies.  
  </do>
</do-dont>

See [visual success criteria nr. 1: Don’t rely on color alone to explain data](/foundations/data-visualization/success-criteria/visual/).

### Consider the order of categorical colors

The colors don’t have to be applied in any particular order, and all combinations of categorical colors should work reasonably well. However, randomly choosing colors can have some negative consequences. 

If you choose to not follow the order of color in the library, consider this:
- Avoid using orange unless there are already many other categorical colors in use, as orange alone can easily be perceived as negative. In particular, avoid orange together with green or teal. Use the evaluation colors if the intension is to indicate something good or bad
- If possible, only use orange if the graph already includes pink. This reduces the risk of interpreting orange as negative
- Only use blue and grey from the category palette when many other colors are in use. Otherwise the information can wrongly be interpreted as primary and secondary.

If you use the order of the colors in the library, you don’t have to think about these issues.

### Be careful using category colors for specific data types
It is possible to use Category colors in a way that makes it easier for users to recognise specific types of data or differentiate between graphs. For example, in Mobility you could always use specific colors to represent cars running on petrol, diesel or electricity. This is especially useful if there are several graphs in a view that share the same data types. In addition, using different colors for different data types and graphs can make it easier for people to recognise and differentiate between the graphs.

However, be aware of some **potential issues** with this approach:
- You will run out of colors!
- If there are many graphs with many different colors in a view, the result might become chaotic and overwhelming, thereby appear less professional and trustful
- There will be inconsistencies across verticals (and even between services within a vertical) as it is impossible to have enough colors for all data options.


