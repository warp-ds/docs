The width is automatically adjusted according to the numbers of dots.  
The height of the component is fixed and should not be changed.

::: image-block
![Styling diagram of a page indicator component. It features four circular dots arranged horizontally, with the first dot filled in blue to indicate the active page. The remaining dots are light gray. A label indicates 10px spacing between dots. Two numbered callouts are shown: (1) highlights the active indicator styling, and (2) highlights the inactive indicators.](/components/pageindicator/pageindicator-styling.svg)
:::

| Element             | Properties                                                                    |
| ------------------- | ----------------------------------------------------------------------------- |
| **1. Active dot**   | **Size**: 10px circle <br> **Color fill**: semantic/color/icon/selected       |
| **2. Inactive dot** | **Size**: 10px circle <br> **Color fill**: semantic/color/background/disabled |

## Layout and spacing

<div class="flex flex-col gap-40">
<div class="flex gap-16">
  <img src="/components/pageindicator/layout-container.svg" alt="Layout diagram of the container used in the page indicator component. The image shows a vertically stacked layout with bottom center alignment, 12px bottom padding, and a horizontal resizing behavior set to Fill." />

<div class="flex flex-col">
<span class="flex font-bold"><img src="/components/pageindicator/layout-icon.svg" alt="Square icon" class="mr-4"/>Container</span>
Direction: Vertical  
Alignment: Bottom center  
Vertical resizing: Fixed  
Horizontal resizing: Fill 
Item spacing: 8  
Padding bottom: 12
</div>

</div>

<div class="flex gap-16">

<img src="/components/pageindicator/layout-pageindicator.svg" alt="Layout diagram of the page indicator component. It shows a horizontally arranged row of dots, aligned to the top left, with both vertical and horizontal resizing set to Hug. Item spacing between indicators is 8 pixels." />

<div class="flex flex-col">
<span class="flex font-bold"><img src="/components/pageindicator/indicator-icon.svg" alt="Diamond icon" class="mr-4"/>Page indicator</span>
Direction: Horizontal  
Alignment: Top left  
Vertical resizing: Hug  
Horizontal resizing: Hug  
Item spacing: 8
</div>
</div>

</div>

## Placement

<div class="flex gap-20 w-full">

<div class="w-1/2">
You can place the page indicator inside or outside the content. We recommend you leave a margin of 16px when placing it outside the image and 12px when using it inside. You can adjust this margin if necessary.
<br />
<br />
The page indicator should always be horizontally centred within its parent container.
</div>

<span class="w-1/2 flex flex-col gap-20">

  <img src="/components/pageindicator/placement-inside.svg" alt="Page indicator placed inside the content container with 12px right margin" />

  <img src="/components/pageindicator/placement-outside.svg" alt="Page indicator placed outside the content container with 24px margin" />

</span>

</div>

## Resizing
