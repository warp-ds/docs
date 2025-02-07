# Interaction with dataviz

It can be highly useful for a user to be able to get more details on demand, for example about each data point in a graph. 

Interactive features should be accessible for all users – including [keyboard navigation](/foundations/data-visualization/success-criteria/keyboard/) and [screen reader](/foundations/data-visualization/success-criteria/screenreader/). In addition, consider making the information available in a table view.

**On this page:**

[[toc]]

## Guidelines

Guidelines for interaction with graphs and charts.

### Hover and tap
::: image-block
![Bar chart](/foundations/dataviz/interaction-hover.png){width=433px}
:::

For graphs, users typically expect the same interactive behaviour for hover (using a pointing device) and tap (on a touch device). When hovering or tapping, they expect to get details about the data point.

Optionally, keep the tooltip open until another tooltip opens, or the pointing device has left the graph.

#### Styling for hover and tap
Use [highlight colour](#highlight-colour) for the data mark, and provide information about the data mark in a [tooltip](#tooltip). You can also [dim other data marks](#dim-other-elements).

#### Target size for hover and tap

The interactive area for hover and tap (the 'target') can be larger than the data element itself. The target size should ideally be at least [44 by 44 CSS pixels](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html). We should strive for this, even thought it might not always be possible, for example if multiple points are close to one another.

**Bars:**

- Make the full height/width behind the bar hoverable. In that way, it becomes easier to move the cursor across the graph and get additional information about each bar, including bars that have low data values
- Arrange the target areas side by side with no gaps between them, to avoid flickering when moving the cursor along the graph
- Optionally, add a subtle background that fills the target area. We don't have a specific token for this for now, but for now can for example use `Background/Secondary-Subtle` with 50% opacity. See illustration below.

::: image-block
![Bar chart](/foundations/dataviz/interaction-hotspot-bg.png){width=433px}
:::

**Lines and points:**

- Add a larger target area around the data elements
- Be aware that it might be hard to reach certain lines or points if they are overlapping or close to one another. If the foremost element have too large touch/hover targets, it might be impossible for the user to reach the underlying elements.

### Focus (keyboard navigation)

::: image-block
![Bar chart](/foundations/dataviz/interaction-focus.png){width=433px}
:::

All the information that can be reached using a mouse pointer should also be possible to reach using a keyboard. 

#### Interaction pattern
A typical pattern for navigating graphs using a keyboard:
1. As the user reaches the graph using the `tab` key, the first data mark is in focus
2. The user can then use the `arrow keys` to navigate between the data marks
3. When the user hits `tab` again, the focus goes to the next interactive element outside the graph.

For working examples of how this works, check out the graphs on [uutilsynet.no](https://www.uutilsynet.no/statistikk-og-rapporter/alder-og-digital-deltaking/2049). For more information on keyboard navigation, check out the success criteria for [keyboard navigation](/foundations/data-visualization/success-criteria/keyboard/).

#### Styling for 'Focus'

For **bars**, **areas** and **points**, add a [focus outline](#keyboard-focus) around the data mark. There should be some space between the bar/point and the focus border. In addition, use [highlight colour](#highlight-colour) for the data mark, and provide information in a [tooltip](#tooltip). You can also [dim other data marks](#dim-other-elements).

For **lines**, adding a focus border for the whole line will become messy. In stead, add focus border around the point on the line that us currently in focus, and [dim any other lines](#dim-other-elements) in the graph.

## Components and tokens

Information about which components and tokens to use for interactive graphs and charts. 

### Tooltip
For tooltip, use the WARP [Tooltip](/components/tooltip/) component.

### Highlight colour
Use the `highlight` colour on hover, touch/tap and keyboard focus.

All dataviz colours (except the chart colours) have a highlight version. These tokens have a name ending with `-highlight`. 

See [this Figma prototype](https://www.figma.com/proto/jKb3gWUebdHyRBsK0naqB6/WARP---DataViz-(Beta)?page-id=1%3A285&node-id=2532-18695&viewport=-2724%2C329%2C0.21&t=k48dzMq2bHNm9UVm-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2532%3A18695) for an interactive preview of the highlight colours. 

#### Example: CSS variable

CSS variable example, primary background colour:

| Default colour | Highlight colour |  
| ----- | ------ | 
| `var(--w-dv-s-color-background-primary)` | `var( --w-dv-s-color-background-primary-highlight)` | 

#### Example: Utility class

Utility class example, primary background colour:

| Type | Default colour | Highlight colour |  
| --- | ----- | ------ |  
| HTML background | `dv-s-bg-primary` | `dv-s-bg-primary-highlight` | 
| SVG fill| `dv-s-fill-bg-primary` | `dv-s-fill-bg-primary-highlight` | 

For applying utility classes to HTML vs SVG elements, see [Introduction to Tokens & CSS](/foundations/data-visualization/tokens/introduction/#alternative-2-utility-classes). 

### Dim other elements
In addition to using the highlight colour, consider **dimming the other elements** that are not highlighted. A good starting point is **80% opacity** when using hover and keyboard focus.

In bar charts, place hoverable areas immediately next to each other with no space in-between, to avoid a 'flickering effect' when moving the cursor across the bars. If you are not able to do so, you should probably not dim the other bars.

For dimming colours using utility classes, ses [opacity modifier](https://warp-ds.github.io/docs/foundations/css-classes/background-color#opacity).

### Keyboard focus
When using keyboard navigation, use a focus border around the active data element. There is no dedicated focus colour for dataviz – use the regular WARP tokens:

`s-border-focus` or `border-color: var(--w-s-color-border-focus)`.

See [CSS Border Colour](/foundations/css-classes/border-color/).
