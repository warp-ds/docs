# Text & Icons

*For implementation, see [Tokens & CSS](/foundations/data-visualization/tokens/introduction/) > [Text](/foundations/data-visualization/tokens/text/) or [Icon](/foundations/data-visualization/tokens/icon/).*

## Text

In general, use `ChartText` (black/gray/white) colour for numbers and labels. 

However, the `Text` data colours can be relevant to use in two situations:
- **Text labels**. Colour can be used on labels, matching the colour of the visual data element (such as a line or a bar) 
- **Data values**. Colour can be used on data values.

![Area chart with intense blue colour fill in light mode and dark mode](/foundations/dataviz/element-text.png)

Only use colour on text if it makes it easier to visually connect the text to the data marks, or interpret values. Otherwise, use the default text colour. See Chart colours.   

Use `Body Strong` font style or larger with `Text` to ensure good contrast.

## Icons

In general, use WARP colours on icons in the interface.

However, the dataviz `icon` colours can be relevant in two situations:
- **Indicate trend**. Place an icon next to a value to help users understand if the value is trending up or down. Use Evaluation colours to reinforce the message of the icon.
- **Label values**. Use an icon to label the data, possibly in combination with text labels. Using the same colour on the icon and the text can help users visually connect the label to the data.

Only use colour on icons if it makes it easier to visually connect the text to the data marks, or interpret values. Otherwise, use the default icon colour.

The `icon` colours are the same as the `text` colours, to make them work well together and have good contrast against the background.

![Left: blue icon with arrow pointing up, gray icon with arrow pointing right, red icon with arrow pointing down. Right: happy, neutral and sad face icons coloured green, yellow and red](/foundations/dataviz/element-icon.png)

## Colour tokens

### Text colour tokens

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Text/Primary` | ![blue boxes](/foundations/dataviz/col-preview/primary-text.png){width=80px} | Blue – if you only need one colour | 
| `Text/Secondary` | ![gray boxes](/foundations/dataviz/col-preview/secondary-text.png){width=80px} | Gray – for a secondary colour | 
| `Text/Category1` | ![indigo boxes](/foundations/dataviz/col-preview/category1-text.png){width=80px} | Indigo - representing category 1 | 
| `Text/Category2` | ![yellow boxes](/foundations/dataviz/col-preview/category2-text.png){width=80px} | Yellow - representing category 2 | 
| `Text/Category3` | ![pink boxes](/foundations/dataviz/col-preview/category3-text.png){width=80px} | Pink - representing category 3 | 
| `Text/Category4` | ![green boxes](/foundations/dataviz/col-preview/category4-text.png){width=80px} | Green - representing category 4 | 
| `Text/Category5` | ![orange boxes](/foundations/dataviz/col-preview/category5-text.png){width=80px} | Orange - representing category 5 | 
| `Text/Category6` | ![teal boxes](/foundations/dataviz/col-preview/category6-text.png){width=80px} | Teal - representing category 6 | 
| `Text/Category7` | ![blue boxes](/foundations/dataviz/col-preview/category7-text.png){width=80px} | Blue - representing category 7 | 
| `Text/Category8` | ![gray boxes](/foundations/dataviz/col-preview/category8-text.png){width=80px} | Gray - representing category 8 | 
| `Text/Positive` | ![green boxes](/foundations/dataviz/col-preview/positive-text.png){width=80px} | Gray - representing something positive | 
| `Text/Warning` | ![yellow boxes](/foundations/dataviz/col-preview/warning-text.png){width=80px} | Warning - representing something worrisome | 
| `Text/Negative` | ![red boxes](/foundations/dataviz/col-preview/positive-text.png){width=80px} | Red - representing something negative | 
| `Text/Neutral` | ![gray boxes](/foundations/dataviz/col-preview/positive-text.png){width=80px} | Gray - representing something neutral | 

### Icon colour tokens

| Name | Light/Dark mode | Description | 
| ---- | --------------- | ----------- | 
| `Icon/Primary` | ![blue boxes](/foundations/dataviz/col-preview/primary-icon.png){width=80px} | Blue – if you only need one colour | 
| `Icon/Secondary` | ![gray boxes](/foundations/dataviz/col-preview/secondary-icon.png){width=80px} | Gray – for a secondary colour | 
| `Icon/Category1` | ![indigo boxes](/foundations/dataviz/col-preview/category1-icon.png){width=80px} | Indigo - representing category 1 | 
| `Icon/Category2` | ![yellow boxes](/foundations/dataviz/col-preview/category2-icon.png){width=80px} | Yellow - representing category 2 | 
| `Icon/Category3` | ![pink boxes](/foundations/dataviz/col-preview/category3-icon.png){width=80px} | Pink - representing category 3 | 
| `Icon/Category4` | ![green boxes](/foundations/dataviz/col-preview/category4-icon.png){width=80px} | Green - representing category 4 | 
| `Icon/Category5` | ![orange boxes](/foundations/dataviz/col-preview/category5-icon.png){width=80px} | Orange - representing category 5 | 
| `Icon/Category6` | ![teal boxes](/foundations/dataviz/col-preview/category6-icon.png){width=80px} | Teal - representing category 6 | 
| `Icon/Category7` | ![blue boxes](/foundations/dataviz/col-preview/category7-icon.png){width=80px} | Blue - representing category 7 | 
| `Icon/Category8` | ![gray boxes](/foundations/dataviz/col-preview/category8-icon.png){width=80px} | Gray - representing category 8 | 
| `Icon/Positive` | ![green boxes](/foundations/dataviz/col-preview/positive-icon.png){width=80px} | Gray - representing something positive | 
| `Icon/Warning` | ![yellow boxes](/foundations/dataviz/col-preview/warning-icon.png){width=80px} | Warning - representing something worrisome | 
| `Icon/Negative` | ![red boxes](/foundations/dataviz/col-preview/positive-icon.png){width=80px} | Red - representing something negative | 
| `Icon/Neutral` | ![gray boxes](/foundations/dataviz/col-preview/positive-icon.png){width=80px} | Gray - representing something neutral | 

