# Introduction to Colour Guidelines for Design

*For implementation, see [Tokens & CSS](/foundations/data-visualization/tokens/introduction/).*

Colour plays an important role in data visualisation, and can be used to encode data in many ways. In addition, colour is often the first thing we perceive on a screen and can be used to guide the user's attention.

**On this page:**
[[toc]]


## Chart colours vs data colours

::: image-block
![Empty chart with axes, labels and gridlines using WARP colours to the left, bars and lines using dataviz colours to the right](/foundations/dataviz/chart-vs-data-colours.png)
:::

There are two main categories of dataviz colours: 
- We use [**Chart colours**](/foundations/data-visualization/color/chart-colors/)  for non-data elements in the chart, such as gridlines, axes and text labels
- We use [**Data colours**](/foundations/data-visualization/color/data-colors/) are for visual elements that encode data, such as lines, bars and areas.

The dataviz colours are the same across all Vend brands. 

## Semantic tokens

The dataviz library is structured in a similar way as the regular WARP UI library, using **semantic tokens**. Semantic tokens are variables that refer to another colour, but can be changed dynamically, for example when switching between light mode and dark mode. 

![A blue HEX colour value is stored in a colour primitive, which is connected to a semantic token, which is applied to a dataviz bar](/foundations/dataviz/semantic-token.png)

Colour values are stored in colour primitives, which are connected to semantic tokens, which are applied to dataviz elements.

Semantic tokens allow us to use colours in a consistent and meaningful way, makes it easy to swap between light mode and dark mode. In addition, if we want to adjust a colour, we only have to change one value and it will be applied everywhere the token is used.

### Token categories 

Data visualisations can be made using a variety of shapes, and it is not necessary nor useful to define colours for all those shapes. We have defined 5 semantic token categories that should cater for most use cases: `line`, `background`, `border`, `text` and `icon`.

::: image-block
![Screenshot from Figma](/foundations/dataviz/semantic-categories.png){width=617px}
:::

### Mapping dataviz elements to semantic tokens

Some visual elements need to use more than one colour token. For example, a bar with a subtle background colour needs both a `background` colour and a `border` colour. 

::: image-block
![Screenshot from Figma](/foundations/dataviz/mapping-datavizelement-to-token.png){width=500px}
:::

In the following pages you can read more about the two main categories of dataviz colours:
- [Chart colours](/foundations/data-visualization/color/chart-colors/) 
- [Data colours](/foundations/data-visualization/color/data-colors/). 

Then, you can read more about which semantic tokens to use for data colours:
- [Lines & Points](/foundations/data-visualization/color/lines-points/)
- [Bars & Areas](/foundations/data-visualization/color/bars-areas/) (and Patterns)
- [Text & icons](/foundations/data-visualization/color/text-icons/)
 

## FAQ

#### Why should we use these colours? 🧐

When we use the dataviz colours, we get:
- Automagic theming for dark mode and light mode
- Colours that are suitable for data visualization (which UI colours most often are not)
- Colours that are accessible, both in terms of contrast, and for the most common colour deficiency (deuteranomaly, which affects 1 in 12 men)
- A consistent and great dataviz experience across our services.

#### Why do we use the same colours across all brands? 🙄
The value of having different colours for each brand would be quite low, while the cost of creating, implementing and maintaining accessible colours across multiple brands would be very high. That said, it is possible to override some or all colours for specific brands in the future if there is a good reason for doing so. But creating a new and accessible colour palette is not a trivial task.

#### Why did you choose blue for the Primary colour? 💦
The most important reasons for choosing blue as a primary colour:
- Blue is already central to most of our brands, and most brands use blue in the UI. Therefore we ensure a level of visual harmony between UI and visualizations
- Blue is not directly associated with positive or negative (in contrast to red and green, for example), and is therefore a good starting point for a colour palette.
- By using the same primary colour across multiple graphs, the page will get a harmonic look and feel.

#### Can I use the brand colour or UI colours for graphs? ⛔️
Do not use brand colours or UI colours from WARP in regular graphs in our products. Those colours are reserved for other use cases. 

The only exception we envision is to use the Primary UI colour if a graph is integrated in an interactive component, such as a slider.

#### Why are there sooo many colours? 🤯
Yes, we know it’s a lot. Here are some reasons why we need so many dataviz colours:
- Different colours for different visual elements such as lines and areas due to accessibility and readability. Thin lines need higher contrast than large areas. As a result, we use different colours shades for different visual elements. We also needed to adjust the colours per visual element type so that they work well together; for example, line colours are adjusted to make sure they are possible to differentiate when used next to each other.
- Define colours based on semantic use, not the colour itself. This allows us to change things in a meaningful way later. For example, a gray colour is used both for the `Secondary`, `Category8` and `Neutral` colours. If we later decide that we should use some other colour for Category8, for example, we can change that specific colour without changing the Secondary and Neutral colour.
- Allow for some flexibility, so that product teams have some options to choose from based on their specific needs

#### Why are the colours so light or dark? 🧑🏻‍🎨
The lightness of the colours are based on accessibility requirements.

For measuring contrast for each individual colour, we have used both WCAG 2 (3:1 for visual elements) the 
[Accessible Perceptual Contrast Algorithm](https://git.apcacontrast.com/documentation/APCAeasyIntro.html) (APCA). APCA more accurately accounts for how perception works than WCAG 2. In addition, it takes the size and width of elements into account. This is particularly noticeable in dark mode, where APCA requires higher contrast.

In addition, we have adjusted lightness in order to make the colours work well together in the different palettes. For example, the lightness of the categorical colours vary so that they are easier to differentiate for people with colour deficiencies.

#### Why use dataviz chart colours and not regular WARP colours?
Some of the chart colours are identical to regular WARP colours, for example the background and the text colours. However, there are a few reasons why we provide these colours in the dataviz library: 

- In Figma, it is convenient for designers to have all the colours they need for charts in one library
- In code, the dataviz colours can be applied to SVG elements using utility classes
- Some components (in Figma) need the `ChartBackground` colour as part of the component
- Users of the dataviz library get all the colours they need for creating charts, and the library can therefore be used independent of WARP
- The `ChartBackground` colour ensures good contrast between the dataviz elements and the background, which might not be the case if using other WARP background colours 
- At the time of writing (January 2025) there is no distinction between border and border subtle in WARP, which is needed for gridlines.

However, it is of course possible for a developer to use other colours for chart elements if there is a good reason to do so.
