# Callout

Callouts are snippets of information, drawing attention to important content.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/callout/overview), [Usage](https://warp-ds.github.io/docs/components/callout/usage), [React](https://warp-ds.github.io/docs/components/callout/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/callout/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/callout/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/callout/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/callout/frameworks/ios)

**Framework support:** Android, Elements, iOS, React, Vue

## Overview

Callouts are snippets of information, drawing attention to important content.

## Inline Demo Markup

```html
<div>
        <h3 class="t4">Inline type (callout)</h3>
        <w-attention callout placement="right" show class="flex items-center">
            <div slot="target">
                <w-box neutral>I am a box full of info</w-box>
            </div>
            <span slot="message">Callout message</span>
        </w-attention>
    </div>
    <div>
        <h3 class="t4">Popover type (highlight)</h3>
        <w-attention highlight placement="right" can-close show>
            <w-button slot="target" variant="utility">Target element</w-button>
            <span slot="message">Highlight message that is dismissable</span>
        </w-attention>
    </div>
```

## Usage

> This page is still in progress in the public docs.

## Frameworks

### React

Callouts are snippets of information, drawing attention to important content.

You can import the component like so:

```js
import { Attention } from '@warp-ds/react'
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Attention } from '@warp-ds/react/components/attention'
```

#### Default (inline type) 

```js
<div>
  <Box info>
    <h1 aria-details='callout-bubbletext'>I am a box full of info</h1>
  </Box>
  <Attention callout placement='right' isShowing={true}>
    <p id='callout-bubbletext'>
      I'm a callout (inline type)
    </p>
  </Attention>
</div>
```

#### Highlight with close button (popover type) 

```js
function DismissibleHighlight() {
  const [show, setShow] = React.useState(false)
  const targetEl = React.useRef()

  return (
    <div className='flex flex-col justify-between h-[200]'>
      <Button
        small
        aria-expanded={show}
        aria-controls='highlight-example'
        utility
        onClick={() => setShow(!show)}
        className='w-max mb-0'
      >
        Show an onboarding hint
      </Button>
      <div>
        <div ref={targetEl} className="w-2/3" aria-details='highlight-bubble-text'>
          <Box info>
            <h1>I am a box full of info</h1>
          </Box>
        </div>
        <Attention
          highlight
          placement='right'
          isShowing={show}
          canClose
          onDismiss={() => setShow(false)}
          targetEl={targetEl}
          id='highlight-example'
        >
          <p id='highlight-bubble-text'>
            I'm a highlight (popover type) that is dismissable
          </p>
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

The attention component handles accessibility automatically by wrapping its slotted content with a `div` that has a default `role` attribute set to `img` when the `callout` or `highlight` prop is activated, and a default localized `aria-label`.

It is possible to remove the default `role` and override the `aria-label` attribute:

```js
<Attention highlight placement='right' isShowing={true} role='' aria-label=''>
  <p id='highlight-bubbletext'>
    I'm a highlight (popover type) speech bubble with overridden role and aria-label attributes
    pointing up.
  </p>
</Attention>
```

If the user chooses to remove the `role` and/or override the `aria-label` attributes then it is important to also add `aria-details` on the target element.

Read more: [MDN aria-details](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details)

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| targetEl | MutableRefObject |  | The reference container to which the Attention component is positioned relative to. Required if highlight but optional if callout. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| isShowing | boolean | false | Whether Attention component is shown. |
| placement | 'top-start' \| 'top' \| 'top-end' \| 'bottom-start' \| 'bottom' \| 'bottom-end' \| 'left-start' \| 'left' \| 'left-end' \| 'right-start' \| 'right' \| 'right-end' | 'bottom' | Placement according to the target element. The arrow will point to the opposite side of this position |
| children | Element \| Element[] |  | Elements inside of the Attention component |
| className | string |  | Extend the Attention component container styling |
| callout | boolean | false | Whether Attention component is rendered as a callout, displayed inline within content. |
| highlight | boolean | false | Whether Attention component is rendered as a highlight, elevated above content with shadow. |
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

Callouts are snippets of information, drawing attention to important content.

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

#### Default (inline type) 

```vue
<script setup>
import { ref } from 'vue';
import { wAttention, wBox } from '#components';

const showing = ref(false);
</script>
<template>
  <w-box neutral as="h4" aria-details="callout-bubbletext">
    I am a box full of info
  </w-box>
  <w-attention callout placement="right" v-model="showing">
    <p id="callout-bubbletext">I am a callout (inline type)</p>
  </w-attention>
</template>
```

#### Highlight with close button (popover type) 

```vue
<script setup>
import { ref } from 'vue'
import { wAttention, wButton } from '#components'

const highlightTarget = ref(null)
const highlightShowing = ref(false)
</script>
<template>
  <w-button
    :aria-expanded="highlightShowing"
    aria-controls="highlight-example"
    aria-details="highlight-bubble-text"
    ref="highlightTarget"
    @click="highlightShowing = !highlightShowing"
    >Click me</w-button
  >
  <w-attention
    highlight
    placement="right"
    can-close
    id="highlight-example"
    @dismiss="highlightShowing = false"
    :target-el="highlightTarget ? highlightTarget.$el : null"
    v-model="highlightShowing"
  >
    <p id="highlight-bubble-text">I'm a highlight (popover type) that is dismissable</p>
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

The attention component handles accessibility automatically by wrapping its slotted content with a `div` that has a default `role` attribute set to `img` when the `callout` or `highlight` prop is activated, and a default localized `aria-label`.

It is possible to remove the default `role` and override the `aria-label` attribute:

```vue
<w-attention
  highlight
  placement='bottom'
  v-model='highlightShowing'
  role=''
  aria-label=''
>
  <p id='popover-bubbletext'>
    I'm a highlight (popover type) speech bubble with overridden role and aria-label attributes pointing up.
  </p>
</w-attention>
```

If the user chooses to remove the `role` and/or override the `aria-label` attributes then it is important to also add `aria-details` on the target element.

Read more: [MDN aria-details](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details)

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| v-model | boolean |  | Whether Attention component should be visible |
| target-el | string |  | Selector of element that the Attention component is rendered relatively to. Required if highlight but optional if callout. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| placement | 'top-start' \| 'top' \| 'top-end' \| 'bottom-start' \| 'bottom' \| 'bottom-end' \| 'left-start' \| 'left' \| 'left-end' \| 'right-start' \| 'right' \| 'right-end' | 'bottom' | Placement according to the target element. The arrow will point to the opposite side of this position. |
| callout | boolean | false | Whether Attention component is rendered as a callout, displayed inline within content. |
| highlight | boolean | false | Whether Attention component is rendered as a highlight, elevated above content with shadow. |
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

Callouts are snippets of information, drawing attention to important content.

#### Default (inline type) 

```js
<w-attention callout placement="right" show class="flex items-center">
  <div id="target" slot="target">
    <p>This is a target to callout element</p>
  </div>
  <span slot="message">I am a callout (inline type)</span>
</w-attention>
```

#### Highlight with close button (popover type) 

```js
<w-attention highlight placement="right" can-close id="highlight">
  <button
    id="highlightTarget"
    slot="target"
  >
    Click to toggle a highlight (popover type) on the right
  </button>
  <span slot="message">I'm a highlight (popover type) that is dismissable</span>
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

Attention element handles accessibility automatically by wrapping its slotted content with a `div` that has a default `role` attribute set to `img` when the `callout` or `highlight` prop is activated, and a default localized `aria-label`. In addition, Attention automatically sets an `aria-details` on its target element, pointing to the slotted message element.

It is possible to tell assistive technologies to recognize only a part of Attention's text content. To do that set the `role` attribute on the relevant text element nested in `w-attention` and reference it by id through the use of `aria-details`. The `aria-details` attribute is on the target element, not on `w-attention`.

```js
<w-attention highlight placement="top">
  <div slot="message">
    <p id="aria-content">This text is important</p>
    <p>(this text is less relevant)</p>
  </div>
  <button aria-describedby="aria-content" id="target" slot="target">
    Click to toggle a highlight (popover type) on top
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
| callout | boolean | false | Whether Attention element is rendered as a callout, displayed inline within content. |
| highlight | boolean | false | Whether Attention element is rendered as a highlight, elevated above content with shadow. |
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
| @close | Triggered when user clicks the close button or presses Escape when the button is in focus. |

### Android

Callouts are snippets of information, drawing attention to important content.

```kotlin
@Composable
fun WarpCallout(
    text: String,
    state: CalloutState,
    size: CalloutSize = CalloutSize.Default,
    type: CalloutType = CalloutType.Popover,
    inlineModifier: Modifier = Modifier,
    horizontalOffset: Dp = 0.dp,
    verticalOffset: Dp = 0.dp,
    edge: Edge = Edge.Top,
    closable: Boolean = false,
    dismissPopoverOnClickOutside: Boolean = true,
    onDismiss: () -> Unit,
    paddingOffset: Dp? = null,
    anchorView: @Composable (() -> Unit)? = null,
)
```

Basic WarpCallout with a Button anchor:

```kotlin
val state = remember { CalloutState(false) }

WarpCallout(
    text = "This is a callout",
    state = state,
    onDismiss = { state.isVisible = false },
) {
    WarpButton(
        text = "Show callout",
        onClick = {
            state.isVisible = !state.isVisible
        }
    )
}
```

The callout supports small and default size as well as inline or popup type:

```kotlin
enum class CalloutType {
    Popover,
    Inline
}

enum class CalloutSize {
    Small,
    Default
}
```

There are four types of edges - the direction in which the arrow will point - available. If not specified the default will be Edge.Top

```kotlin
enum class Edge {
    Top,
    Bottom,
    Leading,
    Trailing
}
```

To show/hide the callout you should pass a CalloutState and then toggle the boolean inside the onDismiss and anchor interaction method.

When using the CalloutType.Popover, you can adjust margins by using horizontalOffset and/or verticalOffset, which are 0.dp by default.

The callout accepts an anchor view that will be used to determine the position of the callout. If you use CalloutType.Popover it will automatically place itself pointing to the anchor view depending on the direction of the edge. To correctly display the arrow when the callout cannot be centered, please provide paddingOffset for the parent layout. To add anchor content:

```kotlin
val state = remember { CalloutState(false) }

WarpCallout(
    text = "This is a callout",
    edge = Edge.Leading,
    state = state,
    type = CalloutType.Popover,
    horizontalOffset = 8.dp,
    verticalOffset = 8.dp
    size = CalloutSize.Default,
    closable = false,
    paddingOffset = 8.dp,
    onDismiss = { state.isVisible = false },
) {
    WarpButton (
        text = "Show callout",
        onClick = {
            state.isVisible = !state.isVisible
        }
    )
}
```

When using the CalloutType.Inline variant, then use the inlineModifier param to adjust padding.

```kotlin
val state = remember { CalloutState(false) }

WarpCallout(
    text = "This is a callout",
    state = state,
    type = CalloutType.Inline,
    inlineModifier = Modifier.padding(8.dp),
    edge = Edge.Leading,
    size = CalloutSize.Small,
    closable = true,
    onDismiss = { state.isVisible = false },
) {
    WarpButton(
        text = "Inline",
        onClick = {
            state.isVisible = !state.isVisible
        }
    )
}
```

To support layouts still written in xml the WarpCallout can be used as a custom view. To add functionality to the onDismiss funtion, set a click listener. To provide an anchor view you need to set it programmatically as it acceps a @Composable () -> Unit param.

```kotlin
fun setOnDismissClickListener(onClick: OnClickListener?)
```

```xml
<com.schibsted.nmp.warp.components.legacy.WarpCalloutView
android:id="@+id/callout1"
android:layout_width="wrap_content"
android:layout_height="wrap_content"
app:calloutEdge="leading"
app:calloutIsClosable="false"
app:calloutIsVisible="false"
app:calloutSize="small"
app:calloutText="This is the callout text"
app:calloutType="popover"
app:calloutVerticalOffset="0"
app:calloutHorizontalOffset="0" />
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String |  | The text to be displayed in the callout |
| state | CalloutState |  | The state of the callout. If visible or not |
| onDismiss | () -> Unit |  | The lambda to be invoked when dismissed |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| size | CalloutSize.Default CalloutSize.Small | CalloutSize.Default | Size of the callout |
| type | CalloutSize.Popover CalloutSize.Inline | CalloutSize.Popover | Type of the callout |
| inlineModifier | Modifier | Modifier | Modifier only used for the Inline callout type |
| horizontalOffset | Dp | 0.dp | Horizontal offset used only for the Popover type callout |
| verticalOffset | Dp | 0.dp | Vertical offset used only for the Popover type callout |
| edge | Edge.Top Edge.Bottom Edge.Leading Edge.Trailing | Edge.Top | Edge that determines the direction of the arrow |
| closable | Boolean | false | If should show the close icon |
| dismissPopoverOnClickOutside | Boolean | true | If should dismiss the callout when clicked outside it |
| paddingOffset | Dp | null | Padding offset in the parent layout to correctly calculate the arrow position in relation to the anchor |
| anchorView | @Composable () -> Unit | null | The anchor which the callout points to |

### iOS

Callouts are snippets of information, drawing attention to important content.

```swift
Warp.Callout(
    size: CalloutSize = .default,
    type: CalloutType = .inline,
    title: String,
    arrowEdge: Edge = .top,
    arrowOffset: CGFloat? = nil // customizable arrow offset from edge
)
```

```swift
Warp.Callout(title: "This is a Callout")
```

There are a variety of variants and positions supported for the Callout component:

```swift
enum Warp.CalloutSize {
    case small
    case `default`
}

enum Warp.CalloutType {
    case inline
    case popover(onTapped: (() -> Void)?)
}

enum Edge {
    case top
    case leading
    case bottom
    case trailing
}
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.Callout(title: "This is a Callout").uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String |  | The text to be displayed |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| size | Warp.CalloutSize | .default | The size of the Callout. Use one of the predefined CalloutSize values: .default, or .small. |
| type | Warp.CalloutType | .inline | The type of the Callout. Use one of the predefined CalloutType values: .inline, or .popover. Popover accepts an optional onClose action, which will display a close button. |
| arrowEdge | Edge | .top | The direction of the arrow. Use one of the predefined Edge values: .top, .leading, .bottom, or .trailing |
| arrowOffset | CGFloat? | nil | The offset of the arrow from the edge. If nil, the arrow will be centered. |
