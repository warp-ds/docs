# Visual Accessibility (dataviz)

Visual elements in graphs should be possible to perceive and distinguish from each other for everyone who can see. Therefore, we need to be mindful of font-sizes, color contrasts and color combinations, animations and responsiveness.

**Criteria for Visual Accessibility:**
[[toc]]

## 1. Don’t rely on color alone to explain data
![Red design tag](/foundations/dataviz/tag-design.svg) 

**Why:** People with color vision deficiencies may not be able to perceive color differences. In addition, charts or graphs can be printed in black and white or viewed on monochrome displays.

::: details How to use other means than color alone

### Use patterns or symbols in addition to color
A drawback is that many patterns can make the graph look busy, making it harder to read for everyone. This will have to be assessed by designers on a case-to-case basis.

*Examples will be provided later.*
<!-- Need examples-->

### Add in-line labelling
Adding a text label to the different categories in-line in the graph means people can just read the text.

### Include additional visual categorization in the legend
If icons, shapes or patterns are used, they should be included in the legend.
:::

## 2. Text has a color contrast of 4.5:1 or 3:1 with the background
![Red design tag](/foundations/dataviz/tag-design.svg)

<!-- We should refer to the Warp font sizes when ready and checked -->

- Normal text, less than 24px (18pt) must have a contrast ratio of at least 4.5:1.
- Large text, at least 24px (18pt) or 19px (14pt) bold, must have a contrast ratio of at least 3:1. This applies to Display, T1 and T2 i Figma.

In Figma, you can use the plugin [Contrast](https://www.figma.com/community/plugin/748533339900865323/Contrast) to check the contrast. You need to pass the AA contrast.

You can also enter the hex values in the [WebAIMs contrast checker](https://webaim.org/resources/contrastchecker/).

NB: remember that the actual text size for a given text style in Figma might not be the same across all NMP brands.

## 3. Graphical elements have a minimum color contrast of 3:1 with the background
![Red design tag](/foundations/dataviz/tag-design.svg)

This applies to visual elements that are necessary to understand the information, and does not apply to decorative elements. 

Axis lines may have less contrast than 3:1 as long as they are not crucial for reading the chart.

In Figma, you can use the plugin [Contrast](https://www.figma.com/community/plugin/748533339900865323/Contrast) to check the contrast levels.

## 4. Graphical elements have a minimum color contrast of 3:1 with adjacent elements
![Red design tag](/foundations/dataviz/tag-design.svg)

When shapes are placed close to each other it might be hard to differentiate between them. This typically happens in a pie chart, stacked bar chart, or when hovering. 

::: details Solutions and exceptions
### Possible solutions:
- add at least 1px margin between elements to keep them distinguishable
- use something other than color, such as patterns or shapes, to distinguish between elements.

### Exceptions:
- Lines that cross each other in a line chart. It is fine that they don't have a good contrast between each other. It is more important that the contrast against the background is good enough.
- Charts that use sequential or diverging color scales, for example choropleth maps or heat maps.

:::

## 5. Text elements within the chart are minimum 12px
![Red design tag](/foundations/dataviz/tag-design.svg)

As long as you stick to the font sizes in the design system (which you should), you'll be fine.

## 6. Insert at least 1px spacing between adjacent graphical elements
![Red design tag](/foundations/dataviz/tag-design.svg)

If you put data elements with different colors next to each other the contrast can be so low that it is hard to differentiate between the elements. Adding white space between the elements can help. 

This applies to areas and bars, not lines.

## 7. Avoid visual clutter
![Red design tag](/foundations/dataviz/tag-design.svg)

The more visual elements you add to a graph, the less attention the other elements receive. Consider carefully if you really need:
- grid lines
- axes
- tick marks on axes
- axes labels
- legend

However, make sure that the encoding of all the data is explained to the users.

## 8. The color scheme is safe for color blindness.
![Red design tag](/foundations/dataviz/tag-design.svg) 

Documentation for the dataviz colors will provide information about this.

::: details How to check your colors
For checking color combinations manually, you can use [Viz Palette](https://projects.susielu.com/viz-palette).

1. Enter the hex codes for the colors you want to compare
2. Check the different color deficiencies by using the tabs at the top of the page
3. Look at the Color report further down the page. Avoid color combinations that result in a medium or large line between colors.

:::

## 9. User preferences, such as high contrast mode, are respected
![Blue tech tag](/foundations/dataviz/tag-tech.svg)


## 10. It's possible to zoom in to 400% without breaking the layout. 
![Blue tech tag](/foundations/dataviz/tag-tech.svg)

::: details How to enable zoom 
### Use media queries to adjust the chart to different zoom levels.
If the chart is not zoomable by default, media queries can be used to adjust css properties. When zooming in, the viewport get smaller.

### Use relative and percentage based units

### Relevant Links
- [WCAG: Understanding SC 1.4.4 Resize text](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)
- [Stackoverflow: Media Queries for Different zoom Levels of Browser](https://stackoverflow.com/questions/22223866/media-queries-for-different-zoom-levels-of-browser)
- [Techniques for Data Visualization on both Mobile & Desktop](https://www.visualcinnamon.com/2019/04/mobile-vs-desktop-dataviz/)
- [D3.js Sizing & Responsivity](https://wattenberger.com/blog/react-and-d3#sizing-responsivity)

:::

## 11. Allow animations to be turned off, and follow the user's system/browser preferences
![Red design tag and blue tech tag](/foundations/dataviz/tag-design-and-tech.svg)

Animations can help users understand what is going on, and guide the users' attention. However, some users might experience distraction or nausea from animated content.

For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there should be a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential.
