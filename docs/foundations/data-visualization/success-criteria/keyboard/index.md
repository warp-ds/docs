# Keyboard Navigation

Interactive charts should be easy to operate using a keyboard. Everything that can be done through pointer interaction (e.g. click or hover), should be achievable through keyboard interaction as well. 

Interactive elements should be easily identifiable and have focus outlines, and the focus order should be in logical order. Any custom interaction should be explained.

**Criteria for Keyboard Accessibility:**
[[toc]]

## 1. Information accessible through pointer interaction is also available through keyboard interaction
![Blue tech tag](/foundations/dataviz/tag-tech.svg)

For example, hover interaction on bars or lines should be possible to reach using the keyboard.

## 2. Interactive elements have focus outlines
![Red design tag and blue tech tag](/foundations/dataviz/tag-design-and-tech.svg)

People who use a keyboard to navigate a page or chart need to be able to see clearly which element is in focus.

::: details How to enable focus outline

### Set an outline or border on `:focus`

Either use the default system outline (so it will follow user preferences with regards to contrast), or make sure the contrast between the background and outline is at least **3:1**, ideally **4.5:1**.

### Make sure interactive elements can receive focus

Interactive elements (such as `<button>`, `<a>`, `<input>`) automatically are focusable by keyboard, and will receive `:focus` states.

Sometimes, interactions are added to non-interactive elements, such as shapes within an `<svg>` element. In those cases, it's necessary to make sure the elements are reachable by keyboard interactions.

- Either by setting `tabindex=0` (will follow the tab order),
- Or by programmatically changing the focus on certain commands (eg. the arrow keys).

Read more in [(WCAG) Understanding 2.4.7: Focus Visible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html#navigation-mechanisms-focus-visible-examples-head).

:::

## 3. The chart does not have keyboard traps
![Blue tech tag](/foundations/dataviz/tag-tech.svg)

For example, when opening a modal, make sure it is possible to close it using the keyboard.

## 4. Interactive elements are identifiable
![Red design tag](/foundations/dataviz/tag-design.svg) 

It should be possible to see visually that an element is interactive. For example, if it is possible to click a header in a table to sort the table, there should be some visual indication that the header can be clicked or reached by using a keyboard.

If the interaction is explained somewhere else, it should be possible to reach the explanation using a keyboard.

<!-- This example needs to be handled in the design system --> 

## 5. The keyboard navigation is intuitive and uses conventional combinations
![Blue tech tag](/foundations/dataviz/tag-tech.svg)

- The `tab` key should navigate to the first interactive element of the chart <!-- And then go outside on next click? --> 
- Arrow keys should navigate between data points, legend items, menu options, or toggle between data series
- `Space`/`Enter` should activate buttons or toggles.

## 6. Unconventional keyboard interaction is explained
![Red design tagn and blue tech tag](/foundations/dataviz/tag-design-and-tech.svg)

If keyboard interaction is unconventional, make sure to include information about how to navigate the chart/page. This should be visible on the page, but can appear as the user is navigating using a keyboard. 
<!-- Is it ok if it appears on interaction? --> 
