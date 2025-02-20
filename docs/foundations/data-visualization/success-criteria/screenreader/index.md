# Screen Reader (dataviz)

All data that is accessible for sighted users should also be accessible for those using screen readers. This can be achieved by either turning the chart into an image with alternative text, adding table alternatives, or adding additional screen reader information to the visual elements. In addition, screen reader users should get the same insights as sighted people.

**Criteria for Screen Reader Accessibility:**
[[toc]]

## 1. Use correct heading elements
![Red design tag and blue tech tag](/foundations/dataviz/tag-design-and-tech.svg)

The correct use of heading levels is necessary for screen reader users to navigate a page and chart effectively.

::: details How to achieve correct heading levels

### Use heading tags
Use heading tags (`<h1>`, `<h2>`, `<h3>` etc.) instead of text elements. Normally the visual styling will follow the heading levels, but this is not always necessary.

### Heading levels should be in a hierarchical order
Think of the headings as an outline in the table of contents of a book. Avoid skipping heading levels.

<!-- Do we only want one H1 on a page? --> 

See also [(WCAG) Page Structures: Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)
:::

## 2. Communicate visually apparent features such as trends or patterns
![Red design tag and blue tech tag](/foundations/dataviz/tag-design-and-tech.svg)

If possible, describe trends or patterns in writing, so that it is available for both screen readers and people who struggle to understand the graph.

## 3. Provide an accessible table alternative
![Red design tag and blue tech tag](/foundations/dataviz/tag-design-and-tech.svg)

If the graph has more than 3 data points there should be an accessible table alternative for the graph. The table does not have to be visible. However, a visible table can also be useful for many users.

If the graph has 3 data points or less, wrap the graph in an `<img>` tag and write a descriptive ALT text that includes the data points.

If there are a lot of data points (more than 30), consider grouping the data into larger chunks, or using additional ways of conveying the insight for people using screen readers. For example, describe trends, patterns or outliers.

## 4. The chart elements can be navigated using a screen reader
![Blue tech tag](/foundations/dataviz/tag-tech.svg)

Data visualizations mainly consist of SVG shapes (`<rect>`, `<circle>`, etc) and `<text>` elements for labels.

By default, assistive technology does pick up on the text elements, and reads them in the order they appear in the accessibility tree, but it can't announce anything about the different graphical elements that make a chart unless we add that functionality ourselves.

::: details How to make elements accessible for screen readers 

### Sort the data before rendering and pay attention to the order of the different chart elements.

When drawing with D3.js (or other libraries), from a visual point of view it doesn't really matter how an array is sorted or in which order we render the different elements. Where on the page things are rendered depends on the `x` and `y` coordinates.

Assistive technology, however, reads out the contents of a page in the order they appear in the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model). In practice, this means we will need to:

1. Render the different areas of the graph in a logical order.
2. Sort the data array with data points in the order it should be read in before drawing the elements.

Ideally, the order and sorting is documented by the designers and included in the handoff spec.

### Add roles and labels to the different chart elements

In order for assistive technology to read out graphical objects (such as `<rect>` on a bar chart), they should have a label. This can be solved in several ways, common solutions are to announce the data as:
- [Lists](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role)
- [Tables](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
- [Images](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role)

All this can be done by adding [roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) and additional labelling (eg. [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label), visible text labels, visually hidden text labels).

### Use ARIA roles to create interactive chart elements

Most of our charts are built using SVGs. This means, interactive elements may be built using `<g>`, `<rect>`, `<circle>`, `<text>` or similar elements. These don't really carry a meaning for screen readers. That's why we want to give them a custom `<role>`, matching their functionality.

Some interactive roles include:
- [Button](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)
- [Checkbox](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [Radio](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role)[ (Radiogroup)](https://developer.mozilla.org/en-US/docs/web/accessibility/aria/roles/radiogroup_role)
- [Link](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/link_role)

[View all roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles).

:::

## 5. Interactive elements on the chart should have the appropriate ARIA roles, labels and attributes
![Blue tech tag](/foundations/dataviz/tag-tech.svg)

Using the correct ARIA roles and attributes ensures that screen reader users get the same contextual information about interactive elements as sighted users do. For example, when using `<button>` or `role="button"` elements, the screen reader will automatically announce that the element is a button.

::: details How to achieve correct roles and attributes

### Use semantic HTML elements where possible
Where possible, opt to use semantic HTML elements, such as button, a, input, etc. instead of generic divs or text elements.
    
However, inside SVG elements it's not always possible to do this. In those instances we have to:
    
- Add the corresponding role (eg. `role="button"`)
- Add the correct labels (eg. `aria-label`)
- Make the component reachable by keyboard (eg. `tabindex="0"`)
- Create custom keyboard interaction (eg. `space` or `enter` to submit)
- Add relevant ARIA properties (eg. `aria-expanded="true"`)

### Use ARIA roles to create interactive chart elements.
    
Most of our charts are built using SVGs. This means, interactive elements may be built using `<g>`, `<rect>`, `<circle>`, `<text>` or similar elements. These don't really carry a meaning for screen readers. That's why we want to give them a custom `<role>`, matching their functionality.

Some interactive roles include:
- [Button](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)
- [Checkbox](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [Radio](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role)([group](https://developer.mozilla.org/en-US/docs/web/accessibility/aria/roles/radiogroup_role))
- [Link](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/link_role)

[View all roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles).

### Use ARIA properties to give more info about the interaction

Depending on the type of interaction, [ARIA properties](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) should be set to give people using screen readers more information about the component.
    
Common statuses and properties include:    
- [aria-controls](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls): Identifies the element (or elements) whose contents or presence are controlled by the element on which this attribute is set.
- [aria-expanded](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded): Is set on an element to indicate if a control is expanded or collapsed, and whether or not its child elements are displayed or hidden.
- [aria-haspopup](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup): Indicates the availability and type of interactive popup element that can be triggered by the element on which the attribute is set.
- [aria-pressed](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed): Indicates the current "pressed" state of a toggle button.

### Relevant Links

- [(MDN) ARIA Attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes)
- [(MDN) ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
- [(WCAG) Understanding Success Criterion 4.1.2: Name, Role, Value](https://finn.dataviza11y.fossheim.io/criteria/dataviz/detail/appropriate-aria-roles-attributes/index.html)
- [Perceived affordances and the functionality mismatch](https://tink.uk/perceived-affordances-and-the-functionality-mismatch/)

:::

## 6. Explain unconventional screen reader interaction
![Red design tag and blue tech tag](/foundations/dataviz/tag-design-and-tech.svg)

If the screen reader interaction is unconventional, make sure to include information about how to navigate the chart/page. This text should only be accessible for screen readers, and not be visible on the page.

## 7. Use appropriate alternative text and ARIA roles
![Red design tag and blue tech tag](/foundations/dataviz/tag-design-and-tech.svg)

::: details How to implement alternative text

### Give the SVG element an image role and aria-label
    
This will make assistive technology announce the object as an image with the added label as alt text.
    
Eg. `<svg role="img" aria-label="YOUR_ALTERNATIVE_TEXT">`
    
### Add a visual text summary
    
In some cases, everyone can benefit from a textual summary, in which case it can be added as a title, description, or caption to the graph.
    
### Alternative text should be concise
Everything that's inside the alternative text of an image gets read in one go to screen reader users, with no possibility to skip text. If lots of data points need to be read, other solutions may be better.

### Relevant links

- [(MDN) aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [(MDN) Image role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role)
- [Accessible SVGs](https://css-tricks.com/accessible-svgs/)
- [Complex images approaches](https://www.w3.org/WAI/tutorials/images/complex/)

:::

## 8. Explanatory elements such as legends are either hidden from screen readers, or given additional context
![Blue tech tag](/foundations/dataviz/tag-tech.svg)

It does not make sense to listen to all the labels on an axis. One solution is to label the axis as an image with the range as ALT text. The axis can also be hidden using `aria-hidden`.