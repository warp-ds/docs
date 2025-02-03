# Cognitive Accessibility

Our graphs should be easy to understand for everyone. Therefore, we use clear language and explain terminology, data, and interaction where necessary. Clear titles, descriptions, and labels can provide additional context to the data. Legends can explain categorisation, and in-line labelling and annotations can guide the user.

**Criteria for Cognitive Accessibility:**
[[toc]]

## 1. Use plain language
![Red design tag](/foundations/dataviz/tag-design.svg) 

Avoid long and complicated words. Explain abbreviations that readers might not be familiar with.

## 2. Include a descriptive title
![Red design tag](/foundations/dataviz/tag-design.svg) 

Clarify what the graph represents. For example, what data or variables are presented. You may also include the main message or key takeaway of the graph.

## 3. Provide a summary or description
![Red design tag](/foundations/dataviz/tag-design.svg) 

If not articulated in the title, include information about the data or variables presented. If possible, include a description of the main insight of the graph.

## 4. Use clear data labels
![Red design tag](/foundations/dataviz/tag-design.svg) 

A data label is a text element that explains the data point or value you are examining. Where possible, labels should be in-line (close to the number or visual data element). If data labels are presented on hover, they should also be accessible via keyboard navigation and for screen readers.

## 5. Explain colour coding
![Red design tag](/foundations/dataviz/tag-design.svg) 

Ensure to explain colour-coded categories in the graph and use a legend if necessary.

Whenever feasible, avoid using a legend and [label data directly](https://depictdatastudio.com/accessibility-quick-wins-remove-legends-and-directly-label/). For legends to be effective, the user must be able to associate the legend with corresponding elements in the chart, which can be challenging for many.

You don't need a legend if you only have one data category.

## 6. Communicate statistical uncertainty
![Red design tag](/foundations/dataviz/tag-design.svg) 

If there is uncertainty in the underlying data, this should be communicated to the user, in text and/or visually.

## 7. Provide context
![Red design tag](/foundations/dataviz/tag-design.svg) 

Numbers in isolation can be challenging to comprehend. Consider whether it's easier to understand the information if you provide context. For example:
- Historical trend: Are we doing better than last week?
- Compared to others: Are we doing better than average?
- Compared to something relatable. Example: Emissions compared to the number of people flying London–New York is easier to understand than tonnes of CO2.

## 8. Label the axes
![Red design tag](/foundations/dataviz/tag-design.svg) 

Clarify what the axes represent, preferably using a text label next to the axes.

## 9. Explain unconventional charts
![Red design tag](/foundations/dataviz/tag-design.svg) 

You can assume that most people know how bar charts or line charts work. But you're using an unconventional or uncommon chart, ensure that the users receive an explanation of how to interpret it.

## 10. The data/chart is not misleading
![Red design tagn and blue tech tag](/foundations/dataviz/tag-design-and-tech.svg)

Ensure that the data is collected, calculated, and filtered in a truthful way. For example, be aware of any gaps or biases in the dataset.

When presenting the data, make it clear:
- Where the data originates from
- What is included and excluded
- If there might be any gaps or biases in the data.

Also, make sure to choose a chart type that is appropriate for displaying the data.