# Getting started

Here you will find guidelines about data visualisation in customer facing products and services.

![A bar chart, donut chart and bubble graph](/foundations/dataviz-graphs.svg)

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

![A scale ranging from Explain to Explore, and another scale ranging from Read to Feel](/foundations/dataviz-explain-explore-read-feel.svg)

### Explain vs Explore

- **Explanatory**: your visualisation explains or communicates a specific story or insight to someone. In this case, you need to figure out what story to tell, and how to tell it.
- **Exploratory**: users should explore data freely and find their own insight, for example in an analytical dashboard. In this case, you need to figure out how they are going to do that, for example using filters and sorting.

### Read vs Feel
- **Read**: the focus is on being able to read the data as efficiently and precise as possible. In this case, make sure to use the graph types and elements that allows for a precise reading. For example, it is hard to compare one angle with another, or the size of an area with another, while it is easier to compare the length of lines next to each other.
- **Feel**: the focus is on evoking a feeling or overall impression of the data. In this case, consider visual means that evoke associations and emotions and make the visualisation memorable.


## What is a good visualisation?

A good visualisation communicates insight in a clear and engaging way without the need of somebody to explain the insight to you. Don’t be afraid to add some text to make the visualisation clear. The best visualisations enable users to take action based on the insights they get from the visualisation.

Consider this example:

![A pile of bottles next to The Eiffel tower. Text: Every day the equivalent of a bottle pile half the size of the Eiffel Tower in Paris is sold around the world. ](/foundations/dataviz-eiffel.jpg)
Source: [REUTERS](https://www.reuters.com/graphics/ENVIRONMENT-PLASTIC/0100B275155/index.html)

The visualisation above puts a number (that otherwise would be very abstract) into a context that makes it possible to understand. In addition, the visual form itself grabs your attention and makes the insight memorable. Text is used to explain the visuals.

It seems that the goal of this visualisation is to explain a specific message, rather than make you explore a dataset. In addition, the goal seems to be to make you feel something and get an overall understanding rather than enable you to read off exact values.

![A scale where a dot is placed close to 'Explain' and far from 'Explore'. Another scale with a dot placed close to 'Feel' and far from 'Read' ](/foundations/dataviz-explain-feel.svg)


## Which visualisation library should you use?
There are many JavaScript libraries available, such as [HighCharts](https://www.highcharts.com), [D3](https://d3js.org/), [visx](https://airbnb.io/visx/), [Recharts](https://recharts.org/) and [Apexcharts](https://apexcharts.com/). 

We have not (yet) decided on a recommended charting library. Make sure to check if the library allows you to follow the [Success criteria](/foundations/data-visualization/success-criteria/), for example for screen reader accessibility.


## How do you provide feedback or get help?

Don’t hesitate to reach out to the design system team [on Slack (#smp-warp-design-system)](https://sch-chat.slack.com/archives/C04P0GYTHPV) if you have any feedback or questions.

[Jon Olav](https://sch-chat.slack.com/team/U03KEH3V4) is an information designer working across verticals and brands in NMP, and can help you with:

- Questions or unresolved needs related to these guidelines
- Process guidance on how to figure out what data to present to users
- Designing concrete graphs and visualisations