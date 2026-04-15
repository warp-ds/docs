# Tooltip

A tooltip is a message box that is displayed when a user hovers over or gives focus to a UI element.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/tooltip/overview), [Usage](https://warp-ds.github.io/docs/components/tooltip/usage), [React](https://warp-ds.github.io/docs/components/tooltip/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/tooltip/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/tooltip/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/tooltip/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/tooltip/frameworks/ios)

**Framework support:** Android, Elements, iOS, React, Vue

## Overview

A tooltip is a message box that is displayed when a user hovers over or gives focus to a UI element.

Tooltips should be used sparingly and contain succinct, supplementary information.

## Example

## Usage

> This page is still in progress in the public docs.

## Frameworks

### React

A tooltip is a message box that is displayed when a user hovers over or gives focus to a UI element.

You can import the component like so:

```js
import { Attention } from '@warp-ds/react'
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Attention } from '@warp-ds/react/components/attention'
```

```js
function Example() {
  const [show, setShow] = React.useState(false)
  const targetEl = React.useRef()

  return (
    <div>
      <Button
        ref={targetEl}
        utility
        aria-describedby='tooltip-bubbletext'
        aria-expanded={show}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
      >
        hover this for useless info
      </Button>
      <Attention
        tooltip
        placement='right'
        targetEl={targetEl}
        isShowing={show}
      >
        <p id='tooltip-bubbletext'>I am a tooltip</p>
      </Attention>
    </div>
  )
}
```

The attention component uses the Floating-ui library to calculate its position. By default, the `flip` prop is set to `false`, which means that the attention component will not flip its position to the opposite side.

Try to scroll up and down and see how the attention component doesn't move:

When `flip` is set to `true`, it will instead trigger [Floating-ui's flip() function](https://floating-ui.com/docs/flip) that will make sure that the attention component stays in viewport, by flipping it to the opposite side.

Try to scroll up and down and see how the attention component moves its position to the opposite side to keep itself in viewport as long as possible:

The `crossAxis` prop decides whether to check for cross axis overflow or not when `flip` is set to `true`. By default, the `crossAxis` prop is set to `false`, which means that the attention component will ignore cross axis overflow.

Read more: [Floating-ui crossAxis](https://floating-ui.com/docs/flip#crossaxis)

By default, `fallbackPlacements` is `undefined`. If `flip`is set to `true`, then you have the option to also use `fallbackPlacements` prop and pass in an array of preferred placements that you want the attention component to try if there is no longer any space left to position it to the initial `placement`, e.g. `['right', 'top']`.

Read more: [Floating-ui fallbackPlacements](https://floating-ui.com/docs/flip#fallbackplacements)

Try to scroll up and down and see how the attention component's position starts at the `right` but then moves to the `top`:

The attention component handles accessibility automatically by wrapping its slotted content with a `div` that has a default `role` attribute set to `tooltip` when the `tooltip` prop is activated, and a default localized `aria-label`.

It is possible to remove the default `role` and override the `aria-label` attribute:

```js
<Attention tooltip placement='right' isShowing={true} role='' aria-label=''>
  <p id='tooltip-bubbletext' role='tooltip'>
    I'm a tooltip speech bubble with overridden role and aria-label attributes
    pointing up.
  </p>
</Attention>
```

If the user chooses to remove the `role` and/or override the `aria-label` attributes then it is important to also add `aria-details` on the target element.

Read more: [MDN aria-details](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details)

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| targetEl | MutableRefObject |  | The reference container to which the Attention component is positioned relative to. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| isShowing | boolean | false | Whether Attention component is shown. |
| placement | 'top-start' \| 'top' \| 'top-end' \| 'bottom-start' \| 'bottom' \| 'bottom-end' \| 'left-start' \| 'left' \| 'left-end' \| 'right-start' \| 'right' \| 'right-end' | 'bottom' | Placement according to the target element. The arrow will point to the opposite side of this position |
| children | Element \| Element[] |  | Elements inside of the Attention component |
| className | string |  | Extend the Attention component container styling |
| tooltip | boolean | false | Whether Attention component is rendered as a tooltip |
| role | string | tooltip | Allows the user to remove the default ARIA role attribute for the Attention component, by supplying an empty role (role=""). Default role is set to tooltip. |
| aria-label | string |  | Allows the user to override the default aria-label attribute for the Attention component |
| noArrow | boolean | false | Render Attention component without arrow |
| distance | number | 8 | Distance from which to offset the Attention component from the targetEl vertically |
| skidding | number | 0 | Distance from which to offset the Attention component along its targetEl horizontally. |
| flip | boolean | false | Whether Attention element should flip its placement in order to keep it in view |
| crossAxis | boolean | false | Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when flip is set to true. |
| fallbackPlacements | array | undefined | Choose which preferred placements the Attention element should flip to. Can only be used when flip is set to true. |

#### Events 

| Name | Description |
| --- | --- |
| onDismiss | Called when user clicks the close button or presses Escape when the button is in focus. |

### Vue

A tooltip is a message box that is displayed when a user hovers over or gives focus to a UI element.

> Use in entire app

```js
import { Attention } from '@warp-ds/vue';
app.use(Attention);
```

> Use in one component and special imports

You can import the component like so:

```js
import { wAttention } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wAttention } from '@warp-ds/vue/attention';
```

```vue
<script setup>
import { ref } from 'vue';
import { wAttention, wButton } from '#components';

const target = ref(null);
const showing = ref(false);
</script>
<template>
  <w-button
    utility
    ref="target"
    aria-describedby="tooltip-bubbletext"
    :aria-expanded="showing"
    @mouseenter="
      showing = true
      target = $refs.target
    "
    @mouseleave="showing = false"
    @keydown.escape="showing = false"
    @focus="showing = true"
    @blur="showing = false"
  >
    Hover over me
  </w-button>
  <w-attention
    tooltip
    placement="right"
    :target-el="target?.$el"
    v-model="showing"
  >
    <p id="tooltip-bubbletext">Hello Warp!</p>
  </w-attention>
</template>
```

The attention component uses the Floating-ui library to calculate its position. By default, the `flip` prop is set to `false`, which means that the attention component will not flip its position to the opposite side.

Try to scroll up and down and see how the attention component doesn't move:

When `flip` is set to `true`, it will instead trigger [Floating-ui's flip() function](https://floating-ui.com/docs/flip) that will make sure that the attention component stays in viewport, by flipping it to the opposite side.

Try to scroll up and down and see how the attention component moves its position to the opposite side to keep itself in viewport as long as possible:

The `cross-axis` prop decides whether to check for cross axis overflow or not when `flip` is set to `true`. By default, the `cross-axis` prop is set to `false`, which means that the attention component will ignore cross axis overflow.

Read more: [Floating-ui crossAxis](https://floating-ui.com/docs/flip#crossaxis)

By default, `fallback-placements` is `undefined`. If `flip`is set to `true`, then you have the option to also use `fallback-placements` prop and pass in an array of preferred placements that you want the attention component to try if there is no longer any space left to position it to the initial `placement`, e.g. `['right', 'top']`.

Read more: [Floating-ui fallbackPlacements](https://floating-ui.com/docs/flip#fallbackplacements)

Try to scroll up and down and see how the attention component's position starts at the `bottom` but then moves to the `right` but then moves to the `top`:

The attention component handles accessibility automatically by wrapping its slotted content with a `div` that has a default `role` attribute set to `tooltip` when the `tooltip` prop is activated, and a default localized `aria-label`.

It is possible to remove the default `role` and override the `aria-label` attribute:

```vue
<w-attention
  tooltip
  placement='bottom'
  v-model='tooltipShowing'
  role=''
  aria-label=''
>
  <p id='tooltip-bubbletext' role='tooltip'>
    I'm a tooltip speech bubble with overridden role and aria-label attributes pointing up.
  </p>
</w-attention>
```

If the user chooses to remove the `role` and/or override the `aria-label` attributes then it is important to also add `aria-details` on the target element.

Read more: [MDN aria-details](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details)

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| v-model | boolean |  | Whether Attention component should be visible |
| target-el | string |  | Selector of element that the Attention component is rendered relatively to. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| placement | 'top-start' \| 'top' \| 'top-end' \| 'bottom-start' \| 'bottom' \| 'bottom-end' \| 'left-start' \| 'left' \| 'left-end' \| 'right-start' \| 'right' \| 'right-end' | 'bottom' | Placement according to the target element. The arrow will point to the opposite side of this position. |
| tooltip | boolean | false | Whether Attention component is rendered as a tooltip |
| role | string | tooltip | Allows the user to remove the default ARIA role attribute for the Attention component, by supplying an empty role (role=""). Default role is set to tooltip. |
| aria-label | string |  | Allows the user to override the default aria-label attribute for the Attention component |
| no-arrow | boolean | false | Render Attention component without arrow |
| distance | number | 8 | Distance from which to offset the Attention component from the targetEl vertically |
| skidding | number | 0 | Distance from which to offset the Attention component along its targetEl horizontally |
| flip | boolean | false | Whether Attention element should flip its placement in order to keep it in view |
| cross-axis | boolean | false | Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when flip is set to true. |
| fallback-placements | array | undefined | Choose which preferred placements the Attention element should flip to. Can only be used when flip is set to true. |

#### Events 

| Name | Description |
| --- | --- |
| @dismiss | Triggered when user clicks the close button or presses Escape when the button is in focus. |

### Elements

A tooltip is a message box that is displayed when a user hovers over or gives focus to a UI element.

```js
<w-attention tooltip placement="right">
  <button id="target" slot="target">
    Hover or focus to show a tooltip on right
  </button>
  <span slot="message">I'm a tooltip on right</span>
</w-attention>
```

The attention component uses the Floating-ui library to calculate its position. By default, the `flip` prop is set to `false`, which means that the attention component will not flip its position to the opposite side.

Try to scroll up and down and see how the attention component doesn't move:

When `flip` is set to `true`, it will instead trigger [Floating-ui's flip() function](https://floating-ui.com/docs/flip) that will make sure that the attention component stays in viewport, by flipping it to the opposite side.

Try to scroll up and down and see how the attention component moves its position to the opposite side to keep itself in viewport as long as possible:

The `cross-axis` prop decides whether to check for cross axis overflow or not when `flip` is set to `true`. By default, the `cross-axis` prop is set to `false`, which means that the attention component will ignore cross axis overflow.

Read more: [Floating-ui crossAxis](https://floating-ui.com/docs/flip#crossaxis)

By default, `fallback-placements` is `undefined`. If `flip`is set to `true`, then you have the option to also use `fallback-placements` prop and pass in an array of preferred placements that you want the attention component to try if there is no longer any space left to position it to the initial `placement`, e.g. `['right', 'top']`.

Read more: [Floating-ui fallbackPlacements](https://floating-ui.com/docs/flip#fallbackplacements)

Try to scroll up and down and see how the attention component's position starts at the `bottom` but then moves to the `right` but then moves to the `top`:

If the Attention element has "left" or "top" position, it should be placed before the target element in the DOM.

Attention element handles accessibility automatically by wrapping its slotted content with a `div` that has a default `role` attribute set to `tooltip` when the `tooltip` prop is activated, and a default localized `aria-label`. In addition, Attention automatically sets an `aria-details` on its target element, pointing to the slotted message element.

It is possible to tell assistive technologies to recognize only a part of Attention's text content. To do that set the `role` attribute on the relevant text element nested in `w-attention` and reference it by id through the use of `aria-details`. The `aria-details` attribute is on the target element, not on `w-attention`.

```js
<w-attention placement="top" tooltip>
  <div slot="message">
    <p id="aria-content" role="tooltip">This tooltip text is important</p>
    <p>(this text is less relevant)</p>
  </div>
  <button aria-describedby="aria-content" id="target" slot="target">
    Click to toggle a tooltip on top
  </button>
</w-attention>
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| target-selector | string |  | Selector of element that the Attention component is rendered relatively to |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| placement | 'top-start' \| 'top' \| 'top-end' \| 'bottom-start' \| 'bottom' \| 'bottom-end' \| 'left-start' \| 'left' \| 'left-end' \| 'right-start' \| 'right' \| 'right-end' | 'bottom' | Placement according to the target element. Arrow would be on the opposite side of this position |
| show | boolean | false | Whether Attention element should be visible |
| tooltip | boolean | false | Whether Attention component is rendered as a tooltip |
| no-arrow | boolean | false | Render Attention element without an arrow |
| distance | number | 8 | Distance from which to offset the Attention component from the targetEl vertically |
| skidding | number | 0 | Distance from which to offset the Attention component along its targetEl horizontally. |
| flip | boolean | false | Whether Attention element should flip its placement in order to keep it in view |
| cross-axis | boolean | false | Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when flip is set to true. |
| fallback-placements | array | undefined | Choose which preferred placements the Attention element should flip to. Can only be used when flip is set to true. |

#### Events 

| Name | Description |
| --- | --- |
| @close | Triggered when user clicks the close button or presses Escape when the button is in focus. |

### Android

A tooltip is a message box that is displayed when a user hovers over or gives focus to a UI element.

```kotlin
@Composable
fun WarpTooltip(
    modifier: Modifier = Modifier,
    state: WarpTooltipState,
    text: String,
    edge: Edge = Edge.Top,
    horizontalOffset: Dp = 0.dp,
    verticalOffset: Dp = 0.dp,
    inline: Boolean = false,
    anchorView: @Composable (() -> Unit)? = null,
)
```

The tooltip will be displayed as a popup and it's arrow will be pointing towards the center of the anchor view, the edge - direction in which the tooltip will be pointing - must be provided as a param. It is also possible to place the tooltip as you wish by setting the inline param to true.

```kotlin
val topState = remember { WarpTooltipState(false) }

WarpTooltip(
    modifier = Modifier.padding(horizontal = dimensions.space1),
    state = topState,
    text = "Top",
    edge = Edge.Top
) {
    WarpButton(
        text = "Top Tooltip",
        onClick = { topState.isVisible = !topState.isVisible })
}
```

Use the WarpTooltipState class to toggle between show & hide. Use the Edge class to choose the arrow direction. When using the inline Tooltip, no anchor is needed, you place the Tooltip as any Composable.

```kotlin

class WarpTooltipState(isVisible: Boolean = false) {
    var isVisible: Boolean by mutableStateOf(isVisible)
}

enum class Edge {
    Top,
    Bottom,
    Leading,
    Trailing
}
```

Not supported

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | The text to be displayed in the tooltip |
| state | WarpTooltipState |  | The state of the tooltip. If visible or not |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier for the tooltip |
| edge | Edge.Top, Edge.Bottom, Edge.Leading, Edge.Trailing | Edge.Top | Edge that determines the direction of the arrow |
| horizontalOffset | Dp | 0.dp | Horizontal offset for the tooltip |
| verticalOffset | Dp | 0.dp | Vertical offset for the tooltip |
| inline | Boolean | false | Shows the tooltip as a standalone inline view |
| anchorView | @Composable () -> Unit | null | The anchor which the tooltip points to |

### iOS

A tooltip is a message box that is displayed when a user hovers over or gives focus to a UI element.

```swift
Warp.Tooltip(
    title: String,
    arrowEdge: Edge = .top,
    arrowOffset: CGFloat? = nil // customizable arrow offset from edge
)
```

```swift
Warp.Tooltip(title: "This is a Tooltip")
```

There are a variety of positions supported for the `Tooltip` component:

```swift
enum Edge {
    case top
    case leading
    case bottom
    case trailing
}
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.Tooltip(title: "This is a Tooltip").uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String |  | The text to be displayed |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| arrowEdge | Edge | .top | The direction of the arrow. Use one of the predefined Edge values: .top, .leading, .bottom, or .trailing |
| arrowOffset | CGFloat? | nil | The offset of the arrow from the edge. If nil, the arrow will be centered. |
