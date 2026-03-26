# Popover

A Popover is a message box that is displayed floating over page content after pressing a trigger element, like an info-icon.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/popover/overview), [Usage](https://warp-ds.github.io/docs/components/popover/usage), [React](https://warp-ds.github.io/docs/components/popover/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/popover/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/popover/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/popover/frameworks/android)

**Framework support:** Android, Elements, React, Vue

## Overview

A Popover is a message box that is displayed floating over page content after pressing a trigger element, like an info-icon.

## Example

## Usage

> This page is still in progress in the public docs.

## Frameworks

### React

A Popover is a message box that is displayed floating over page content after pressing a trigger element, like an info-icon.

You can import the component like so:

```js
import { Attention } from '@warp-ds/react'
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Attention } from '@warp-ds/react/components/attention'
```

#### Default 

```js
function Example() {
  const [show, setShow] = React.useState(false)
  const targetEl = React.useRef()

  return (
    <div>
      <Button
        small
        aria-expanded={show}
        aria-controls='popover-attention-example'
        aria-details='popover-bubbletext'
        utility
        onClick={() => setShow(!show)}
        ref={targetEl}
      >
        Open menu
      </Button>
      <Attention
        popover
        placement='right'
        isShowing={show}
        flip={true}
        crossAxis={true}
        fallbackPlacements={['left', 'bottom', 'top']}
        targetEl={targetEl}
        id='popover-attention-example'
      >
        <ul id='popover-bubbletext'>
          <li>Hello</li>
          <li>World</li>
        </ul>
      </Attention>
    </div>
  )
}
```

#### With icon as target element 

```js
function PopoverIconAsTargetEl() {
  const [show, setShow] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const targetEl = React.useRef<any>(null);

  React.useEffect(() => {
    function onBlurHandler(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShow(false)
      }
    }
    document.addEventListener('mousedown', onBlurHandler)
    return () => {
      document.removeEventListener('mousedown', onBlurHandler)
    }
  })

  return (
  <div className='flex items-center justify-center'>
    <div ref={containerRef}>
      <Button
        small
        aria-expanded={show}
        aria-controls='popover-icon-target-el-attention-example'
        utility
        quiet
        onClick={() => setShow(!show)}
        className='w-max mb-0'
        ref={targetEl}
      >
        <IconInfo16 />
      </Button>
      <Attention
        popover
        placement='right-end'
        distance={-8}
        skidding={27}
        targetEl={targetEl}
        isShowing={show}
      >
        <ul className='bg-white w-full text-center'>
          <li
            tabIndex={0}
            className='p-2 px-40 hover:bg-blue-200 hover:text-blue-500 cursor-pointer'
          >
            Hello
          </li>
          <li
            tabIndex={0}
            className='p-2 px-40 hover:bg-blue-200 hover:text-blue-500 cursor-pointer'
          >
            World
          </li>
        </ul>
      </Attention>
    </div>
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

Try to scroll up and down and see how the attention component's position starts at the `bottom` but then moves to the `right` and then to the `top`:

The attention component handles accessibility automatically by wrapping its slotted content with a `div` that has a default `role` attribute set to `img` when the `popover` prop is activated, and a default localized `aria-label`.

It is possible to remove the default `role` and override the `aria-label` attribute:

```js
<Attention popover placement='right' isShowing={true} role='' aria-label=''>
  <p id='popover-bubbletext'>
    I'm a popover speech bubble with overridden role and aria-label attributes
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
| popover | boolean | false | Whether Attention component is rendered as a popover |
| role | string | img | Allows the user to remove the default ARIA role attribute for the Attention component, by supplying an empty role (role=""). Default role is set to img. |
| aria-label | string |  | Allows the user to override the default aria-label attribute for the Attention component |
| noArrow | boolean | false | Render Attention component without arrow |
| canClose | boolean | false | Whether a close button is shown |
| distance | number | 8 | Distance from which to offset the Attention component from the targetEl vertically |
| skidding | number | 0 | Distance from which to offset the Attention component along its targetEl horizontally. |
| flip | boolean | false | Whether Attention element should flip its placement in order to keep it in view |
| crossAxis | boolean | false | Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when flip is set to true. |
| fallbackPlacements | array | undefined | Choose which preferred placements the Attention element should flip to. Can only be used when flip is set to true. |

#### Events 

| Name | Description |
| --- | --- |
| onDismiss | () => void |

### Vue

A Popover is a message box that is displayed floating over page content after pressing a trigger element, like an info-icon.

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

#### Default 

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
    :aria-expanded="showing"
    aria-controls="popover-example"
    aria-details="popover-bubbletext"
    ref="target"
    @click="() => (showing = !showing)"
  >
    Open popover
  </w-button>
  <w-attention
    popover
    placement="right"
    flip
    cross-axis
    :fallback-placements="['left', 'bottom', 'top']"
    :target-el="target ? target.$el : null"
    v-model="showing"
    id="popover-example"
  >
    <p id="popover-bubbletext">Hello Warp!</p>
  </w-attention>
</template>
```

#### With icon as target element 

```vue
<script setup>
import { ref } from 'vue';
import { wAttention, wButton } from '#components';

const target = ref(null);
const showing = ref(false);
</script>
<template>
 <w-button
  :aria-expanded="popoverIconTargetShowing"
  aria-controls="popover-icon-target-example"
  type="button"
  utility
  quiet
  ref="popoverIconTarget"
  @click="() => (popoverIconTargetShowing = !popoverIconTargetShowing)"
  >
    <w-icon name="info" size="small" />
  </w-button>
  <w-attention
    popover
    placement="right-end"
    :distance="-8"
    :skidding="27"
    :target-el="popoverIconTarget ? popoverIconTarget.$el : null"
    v-model="popoverIconTargetShowing"
  >
    <p>Hello Warp!</p>
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

Try to scroll up and down and see how the attention component's position starts at the `bottom` but then moves to the `right` and then to the `top`:

The attention component handles accessibility automatically by wrapping its slotted content with a `div` that has a default `role` attribute set to `img` when the `popover` prop is activated, and a default localized `aria-label`.

It is possible to remove the default `role` and override the `aria-label` attribute:

```vue
<w-attention
  popover
  placement='bottom'
  v-model='popoverShowing'
  role=''
  aria-label=''
>
  <p id='popover-bubbletext'>
    I'm a popover speech bubble with overridden role and aria-label attributes pointing up.
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
| popover | boolean | false | Whether Attention component is rendered as a popover |
| role | string | img | Allows the user to remove the default ARIA role attribute for the Attention component, by supplying an empty role (role=""). Default role is set to img. |
| aria-label | string |  | Allows the user to override the default aria-label attribute for the Attention component |
| no-arrow | boolean | false | Render Attention component without arrow |
| can-close | boolean | false | Whether a close button is shown |
| distance | number | 8 | Distance from which to offset the Attention component from the targetEl vertically |
| skidding | number | 0 | Distance from which to offset the Attention component along its targetEl horizontally |
| flip | boolean | false | Whether Attention element should flip its placement in order to keep it in view |
| cross-axis | boolean | false | Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when flip is set to true. |
| fallback-placements | array | undefined | Choose which preferred placements the Attention element should flip to. Can only be used when flip is set to true. |

#### Events 

| Name | Description |
| --- | --- |
| @dismiss |  |

### Elements

A Popover is a message box that is displayed floating over page content after pressing a trigger element, like an info-icon.

#### Default 

```js
<w-attention placement="right" popover flip cross-axis fallback-placements='["left", "bottom", "top"]'>
  <button id="target" onclick="toggleShow()" slot="target">
    Click to toggle a popover on bottom
  </button>
  <span slot="message">I'm a popover on bottom</span>
</w-attention>
```

#### With icon as target element 

```js
<w-attention placement="right-end" popover distance="-8" skidding='27'>
  <button id="target" quiet variant="utility" onclick="toggleShow()" slot="target">
    <w-icon-info-16></w-icon-info-16>
  </button>
  <span slot="message">I'm a popover on right-end</span>
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

Try to scroll up and down and see how the attention component's position starts at the `bottom` but then moves to the `right` and then to the `top`:

If the Attention element has "left" or "top" position, it should be placed before the target element in the DOM.

Attention element handles accessibility automatically by wrapping its slotted content with a `div` that has a default `role` attribute set to `img` when the `popover` prop is activated, and a default localized `aria-label`. In addition, Attention automatically sets an `aria-details` on its target element, pointing to the slotted message element.

It is possible to tell assistive technologies to recognize only a part of Attention's text content. To do that set the `role` attribute on the relevant text element nested in `w-attention` and reference it by id through the use of `aria-details`. The `aria-details` attribute is on the target element, not on `w-attention`.

```js
<w-attention placement="top" popover>
  <div slot="message">
    <p id="aria-content">This popover text is important</p>
    <p>(this text is less relevant)</p>
  </div>
  <button aria-describedby="aria-content" id="target" slot="target">
    Click to toggle a popover on top
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
| popover | boolean | false | Whether Attention element is rendered as a popover |
| no-arrow | boolean | false | Render Attention element without an arrow |
| can-close | boolean | false | Render Attention element with a close button |
| distance | number | 8 | Distance from which to offset the Attention component from the targetEl vertically |
| skidding | number | 0 | Distance from which to offset the Attention component along its targetEl horizontally. |
| flip | boolean | false | Whether Attention element should flip its placement in order to keep it in view |
| cross-axis | boolean | false | Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when flip is set to true. |
| fallback-placements | array | undefined | Choose which preferred placements the Attention element should flip to. Can only be used when flip is set to true. |

#### Events 

| Name | Description |
| --- | --- |
| @close |  |

### Android

A Popover is a message box that is displayed floating over page content after pressing a trigger element, like an info-icon.

```kotlin
@Composable
fun WarpPopover(
    modifier: Modifier = Modifier,
    title: String,
    body: String,
    state: WarpPopoverState,
    edge: Edge = Edge.Top,
    horizontalOffset: Dp = 0.dp,
    verticalOffset: Dp = 0.dp,
    inline: Boolean = false,
    dismissPopoverOnClickOutside: Boolean = true,
    onDismiss: () -> Unit = {},
    anchorView: @Composable (() -> Unit)? = null,
)
```

The popover will be displayed as a popup and its arrow will be pointing towards the center of the anchor view, the edge - direction in which the popover will be pointing - must be provided as a param. It is also possible to place the popover as you wish by setting the inline param to true.

```kotlin
val topState = remember { WarpPopoverState(false) }

WarpPopover(
    modifier = Modifier.padding(horizontal = dimensions.space1),
    state = topState,
    title = "Top Popover",
    body = "Top Popover body text",
    edge = Edge.Top
) {
    WarpButton(
        text = "Top Popover",
        onClick = { topState.isVisible = !topState.isVisible })
}
```

Use the WarpPopoverState class to toggle between show & hide. Use the Edge class to choose the arrow direction. When using the inline Popover, no anchor is needed, you place the Popover as any Composable.

```kotlin

class WarpPopoverState(isVisible: Boolean = false) {
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
| title | String |  | The text to be displayed in the popover |
| body | String |  | The text to be displayed in the popover |
| state | WarpPopoverState |  | The state of the popover. If visible or not |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier for the popover |
| edge | Edge.Top Edge.Bottom Edge.Leading Edge.Trailing | Edge.Top | Edge that determines the direction of the arrow |
| horizontalOffset | Dp | 0.dp | Horizontal offset for the popover |
| verticalOffset | Dp | 0.dp | Vertical offset for the popover |
| inline | Boolean | false | Shows the popover as a standalone inline view |
| dismissPopoverOnClickOutside | Boolean | true | If should dismiss the popover when clicked outside it |
| onDismiss | () -> Unit | {} | The lambda to be invoked when dismissed |
| anchorView | @Composable () -> Unit | null | The anchor which the popover points to |
