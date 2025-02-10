<script setup>
const pages = [{
  title: "Figma Library",
  description: "How to connect and use the Figma library. Mostly for designers.",
  href: "../figma-library/",
},
{
  title: "Components for dataviz",
  description: "Overview of Figma components. Mostly for designers.",
  href: "../components/",
},
{
  title: "Colour Guidelines",
  description: "Guidelines for using the dataviz colours. Mostly for designers.",
  href: "../colour/introduction/",
},
{
  title: "Tokens & CSS",
  description: "Guidelines for implementing colours in code using tokens and CSS. Mostly for developers.",
  href: "../tokens/introduction/",
},
{
  title: "Interaction",
  description: "Guidelines for interacting with dataviz. For designers and developers.",
  href: "../interaction/",
},
{
  title: "Success Criteria",
  description: "Success criteria for creating accessible and useful data visualisations. For designers and developers.",
  href: "../success-criteria/introduction/",
}]
</script>

# Introduction to Data Visualisation

![A bar chart, donut chart and bubble graph](/foundations/dataviz/graphs-light-and-dark.png)


<br>
<cards class="grid grid-cols-1 sm:grid-cols-2 gap-12">
  <card
    v-for="page in pages"
    :key="page.title"
    class="flex flex-col border border-gray-200 p-4 rounded-md shadow-sm"
  >
    <h3 class="h4 text-m! static! mt-16! mx-16!">
      <a
        :href="page.href"
        class="block before:content-empty before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 focus:outline-0"
      >
        {{ page.title }}
      </a>
    </h3>
    <p class="m-16! text-s">{{ page.description }}</p>
  </card>
</cards>
<br>


On this page you will find a general introduction to working with data visualisation – commonly referred to as ✨ **dataviz** ✨.

**On this page:**

[[toc]]

## Dataviz in WARP

WARP offers a comprehensive **colour palette** for data visualisation, available both in Figma and code. See [Colour usage](/foundations/data-visualization/colour-usage/) for guidelines, and [Tokens & CSS](/foundations/data-visualization/colour-usage/) for implementation in code.

There is no dedicated dataviz library in Vend, as different teams currently use a variety of libraries. However, there are some components available in Figma. See [Components](/foundations/data-visualization/components/).

These guidelines and resources primarily apply to graphs and charts, not maps.

## What do you need to think about?

When you create visualisations you want to:

1. **Answer real questions**<br>
   Visualisation is not a goal in itself, so don’t visualise data just because you can. Show information in the best way you can to make it useful and actionable for your users.
2. **Present data honestly**<br>
   Be truthful and transparent when presenting information in order to gain trust.
3. **Choose clarity and understanding over wow**<br>
   The purpose of our visualisations is to create insight. Beauty can be a bonus, but should not be your primary goal.
4. **Make the information accessible for everyone**<br>
   Make the information available in multiple ways so that all users can benefit from it.

These are high level principles we should strive for. In the section [Success criteria](/foundations/data-visualization/success-criteria/) there are more specific guidelines.

## How do you define the goal of your visualisation?

Before you make a visualisation it can be useful to define the goal of the visualisation. One way of doing so is two answer two core questions:

- Should your visualisation **explain** an insight, or allow people to **explore** on their own?
- Should your visualisation enable people to **read** off the information in detail, or rather provide them an overall **feeling** of the data?

::: image-block
![A scale ranging from Explain to Explore, and another scale ranging from Read to Feel](/foundations/dataviz/explain-explore-read-feel.png){width=400px}
:::

### Explain vs Explore

- **Explanatory**: your visualisation explains or communicates a specific story or insight to someone. In this case, you need to figure out what story to tell, and how to tell it
- **Exploratory**: users should explore data freely and find their own insight, for example in an analytical dashboard. In this case, you need to figure out how they are going to do that, for example using filters and sorting.

### Read vs Feel

- **Read**: the focus is on being able to read the data as efficiently and precise as possible. In this case, make sure to use the graph types and elements that allow for a precise reading. For example, it is hard to compare one angle with another, or the size of an area with another, while it is easier to compare the length of lines next to each other
- **Feel**: the focus is on evoking a feeling or overall impression of the data. In this case, consider visual means that evoke associations and emotions and make the visualisation memorable.

## Chart functions

In order to find a good chart it is useful to figure out what you want to show about the data. In other words, what function the chart should serve.

::: image-block
![Circles organised to show comparison, correlation, distribution, trend over time, parts to whole, and geolocation. ](/foundations/dataviz/chart-functions.png){width=500px}
:::

The most common functions are:

- **Comparison**. Compare two or more values
- **Correlation.** See the relationship between two or more values
- **Distribution.** See how values are spread out within one variable
- **Trend over time**. See how values change over time
- **Part to whole**. See the composition of a whole
- **Geolocation**. See the geographical distribution of a particular variable.

::: tip
For a full overview of different chart types you can use for different functions, have a look at the [DataViz Project](https://datavizproject.com/).
:::

## What is a good visualisation?

A good visualisation communicates insight in a clear and engaging way without the need of somebody to explain the insight to you. Don’t be afraid to add some text to make the visualisation clear. The best visualisations enable users to take action based on the insights they get from the visualisation.

Consider this example:
::: image-block
![A pile of bottles next to The Eiffel tower. Text: Every day the equivalent of a bottle pile half the size of the Eiffel Tower in Paris is sold around the world. ](/foundations/dataviz/eiffel.jpg)
:::
Image source: [REUTERS](https://www.reuters.com/graphics/ENVIRONMENT-PLASTIC/0100B275155/index.html)

The visualisation above puts a number (that otherwise would be very abstract) into a context that makes it possible to understand. In addition, the visual form itself grabs your attention and makes the insight memorable. Text is used to explain the visuals.

It seems that the goal of this visualisation is to explain a specific message, rather than make you explore a dataset. In addition, the goal seems to be to make you feel something and get an overall understanding rather than enable you to read off exact values.

::: image-block
![A scale where a dot is placed close to 'Explain' and far from 'Explore'. Another scale with a dot placed close to 'Feel' and far from 'Read' ](/foundations/dataviz/explain-feel.png){width=400px}
:::

## How do you provide feedback or get help?

Don’t hesitate to reach out to the design system team [on Slack (#smp-warp-design-system)](https://sch-chat.slack.com/archives/C04P0GYTHPV) if you have any feedback or questions.
