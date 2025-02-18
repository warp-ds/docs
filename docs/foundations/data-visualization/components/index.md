# Components for dataviz

**On this page:**
[[toc]]


## Components in Figma

### Chart examples 

In the [Dataviz library](https://www.figma.com/design/jKb3gWUebdHyRBsK0naqB6/WARP---DataViz?m=auto&node-id=3024-46970&t=RQcDLpHUn8jFU242-1) in Figma you will find a range of graph examples that are built using the dataviz color palette and the sub-components in the library. The examples are published as components, and can therefore easily be added to your sketches.

![21 random chart examples available in Figma, in light mode and dark mode](/foundations/dataviz/component-gallery.png)

Many of the chart examples have variants, for example showing how hover state can look like. The example charts are 328 px wide to work well on mobile, but are fully responsive.

### Sub-components

A chart is made up of a range of elements that are are available as components in Figma. 

![Sub-components that make up a chart, such as grid, ticks, labels, legend and bar elements](/foundations/dataviz/example-chart-composition.png)

Sub-components include:
- A `Grid` component with a `Gridline` and a `Baseline` components inside. Choose number of lines, orientation (Horizontal / Vertical), and show/hide baseline
- A `Ticks & Labels` component. Choose number of ticks, and which side of the graph the ticks should be placed (below or left). For each tick the label and visual tick can be turned on or off individually. For example, you might want to have a label for every second tick
- A `Legend` component with `Legend-item` components inside. Choose Chart type (Bar/area, Line, Point), Colors (Primary & Secondary, Category, Evaluation) and how many items to show.

These sup-components are available as components in the Figma library. Note that these components do not exist in code, as graphs are typically created using various libraries, and are therefore not composed in the same way.

### Chart elements component with slot

::: tip What is a slot?
In Figma, a "slot" is a designated area within a component where you can insert other components or UI elements without detaching the component.
:::

The sub-components listed above are combined in a `Chart elements` component with a slot that can be replaced with data elements such as bars or lines. There is one component with a horizontal baseline, and one for a vertical baseline.  

![Two empty charts with a red placeholder box in the middle](/foundations/dataviz/chart-element-component-with-slot.png)

You don't have to use this component when building a chart, but it makes your life easier as you get a lot for free.

### Adjust properties without detaching

When you use the `Chart elements` component or any of the sub-components you can change properties of the components without detaching the mother component. You will need to drill down to individual parts of the chart to find these options.

For example, you can change the text in the labels, and adjust the padding on the `Ticks & Labels` component like so:

![Adjusting horizontal padding for x axis ticks and labels, using auto layout panel in Figma](/foundations/dataviz/sub-component-padding.gif)

- Select the `X Ticks & labels` frame
- Adjust the `Horizontal padding' value under `Auto layout` in the right hand panel in Figma.

## Components in code

There is currently no WARP component library for data visualization. For web, the JavaScript library you use typically takes care of all the parts of a visualization.

### Which JavaScript library should you use for charts?
There are many JavaScript libraries available, such as [HighCharts](https://www.highcharts.com), [D3](https://d3js.org/), [visx](https://airbnb.io/visx/), [Recharts](https://recharts.org/) and [Apexcharts](https://apexcharts.com/). 

Product teams in Vend use a variety of charting libraries, and we have not decided on a recommended library. This is not straightforward, as different teams might have unique chart requirements.

Make sure to check if the library allows you to follow the [Success criteria](/foundations/data-visualization/success-criteria/introduction/), for example for screen reader accessibility.

If you are starting from scratch it might be a good idea to reach out to other teams that have already built graphs in Vend.