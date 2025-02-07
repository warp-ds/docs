# Text & Icons

*For implementation, see [Tokens & CSS](/foundations/data-visualization/tokens/introduction/) > [Text](/foundations/data-visualization/tokens/text/) or [Icon](/foundations/data-visualization/tokens/icon/).*


### Use `Text` or `ChartText` colours for text

In general, use `ChartText` (black/gray/white) colour for numbers and labels. 

However, `Text` colours from the dataviz library can be relevant to use in two situations:
- **Text labels**. Colour can be used on labels, matching the colour of the visual data element (such as a line or a bar) 
- **Data values**. Colour can be used on data values.

![Area chart with intense blue colour fill in light mode and dark mode](/foundations/dataviz/element-text.png)

Only use colour on text if it makes it easier to visually connect the text to the data marks, or interpret values. Otherwise, use the default text colour. See Chart colours.   

Use `Body Strong` font style or larger with `Text` to ensure good contrast.

### Use `Icon` colours for icons

In general, use WARP colours on icons in the interface.

However, icons with the dataviz `icon` colours can be relevant in two situations:
- **Indicate trend**. Place an icon next to a value to help users understand if the value is trending up or down. Use Evaluation colours to reinforce the message of the icon.
- **Label values**. Use an icon to label the data, possibly in combination with text labels. Using the same colour on the icon and the text can help users visually connect the label to the data.

Only use colour on icons if it makes it easier to visually connect the text to the data marks, or interpret values. Otherwise, use the default icon colour.

The `icon` colours are the same as the `text` colours, to make them work well together and have good contrast against the background.

![Left: blue icon with arrow pointing up, gray icon with arrow pointing right, red icon with arrow pointing down. Right: happy, neutral and sad face icons coloured green, yellow and red](/foundations/dataviz/element-icon.png)