<script setup>
  import Lines from './lines.md';
  import Points from './points.md';
  import Bars from './bars.md';
  import Areas from './areas.md';
  import Text from './text.md';
  import Icons from './icons.md';
  import Patterns from './patterns.md';
</script>

# Data Colours

In dataviz we use visual elements to encode data (sometimes referred to as ‘data marks’). We have defined a set of semantic colour categories. There is not always a direct mapping between visual elements and the semantic colours.

::: image-block
![Screenshot from Figma](/foundations/dataviz/mapping-datavizelement-to-token.png){width=433px}
:::

**Semantic colour categories**

There are five types of semantic colour tokens:
- **Background**: Fill colour used for areas like bars and columns. In addition to the `default` background colour, there is a `subtle` background colour 
- **Line**: Stroke colour used for lines and points
- **Border**: Stroke colour applied around areas with subtle fill colours
- **Icon**: Fill or stroke colour applied to icons
- **Text**: Text colour for... your guessed it... text!


**Visual elements representing data**

In dataviz we use visual elements to encode data (sometimes referred to as ‘data marks’). These elements include:
- **Lines**, for example in a line chart. Use the `line` colours
- **Points**, for example in a scatter plot. Use the `line` colours, and `background` inside if  the point (if applicable)
- **Bars** or columns, for example in a bar chart 
- **Areas**, for example in an area chart
- **Text**, for example for numbers or labels
- **Icons**, for example to indicate a trend
- **Patterns**, for example in a bar chart


Specific semantic colours should be used for each type of visual element. 

<tabs-content>
  <template #lines>
   <Lines />
  </template>
  <template #points>
    <Points />
  </template>
  <template #bars>
   <bars />
  </template>
  <template #areas>
    <Areas />
  </template>
  <template #text>
   <Text />
  </template>
  <template #icons>
    <Icons />
  </template>
  <template #patterns>
    <Patterns />
  </template>
</tabs-content>

 