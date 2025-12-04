# Callout

## Vue

### Import

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

### Visual options

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
### Flip prop
The attention component uses the Floating-ui library to calculate its position.
By default, the `flip` prop is set to `false`, which means that the attention component will not flip its position to the opposite side.

Try to scroll up and down and see how the attention component doesn't move:

<callout-static-example />

When `flip` is set to `true`, it will instead trigger [Floating-ui's flip() function](https://floating-ui.com/docs/flip) that will make sure that the attention component stays in viewport, by flipping it to the opposite side.

Try to scroll up and down and see how the attention component moves its position to the opposite side to keep itself in viewport as long as possible:

<callout-flip-example />

### Cross-axis prop
The `cross-axis` prop decides whether to check for cross axis overflow or not when `flip` is set to `true`.
By default, the `cross-axis` prop is set to `false`, which means that the attention component will ignore cross axis overflow.

Read more: [Floating-ui crossAxis](https://floating-ui.com/docs/flip#crossaxis)

### Fallback-placements prop
By default, `fallback-placements` is `undefined`.
If `flip`is set to `true`, then you have the option to also use `fallback-placements` prop and pass in an array of preferred placements that you want the attention component to try if there is no longer any space left to position it to the initial `placement`, e.g. `['right', 'top']`.

Read more: [Floating-ui fallbackPlacements](https://floating-ui.com/docs/flip#fallbackplacements)

Try to scroll up and down and see how the attention component's position starts at the `bottom` but then moves to the `right` and then to the `top`: 

<callout-fallback-placements-example />

### Accessibility
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

### Props

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| v-model | boolean |  | Whether Attention component should be visible |
| target-el | string |  | Selector of element that the Attention component is rendered relatively to. Required if `highlight` but optional if `callout`. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| placement | `'top-start' \| 'top' \| 'top-end' \| 'bottom-start' \| 'bottom' \| 'bottom-end' \| 'left-start' \| 'left' \| 'left-end' \| 'right-start' \| 'right' \| 'right-end'` | 'bottom' | Placement according to the target element. The arrow will point to the opposite side of this position. |
| callout | boolean | false | Whether Attention component is rendered as a callout, displayed inline within content. |
| highlight | boolean | false | Whether Attention component is rendered as a highlight, elevated above content with shadow. |
| role | string | img | Allows the user to remove the default ARIA role attribute for the Attention component, by supplying an empty role (`role=""`). Default role is set to `img`. |
| aria-label | string |  | Allows the user to override the default aria-label attribute for the Attention component |
| no-arrow | boolean | false | Render Attention component without arrow |
| can-close | boolean | false | Whether a close button is shown |
| distance | number | 8 | Distance from which to offset the Attention component from the targetEl vertically |
| skidding | number | 0 | Distance from which to offset the Attention component along its targetEl horizontally |
| flip | boolean | false | Whether Attention element should flip its placement in order to keep it in view |
| cross-axis | boolean | false | Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when `flip` is set to true. |
| fallback-placements | array | undefined | Choose which preferred placements the Attention element should flip to. Can only be used when `flip` is set to true. |

#### Events

| Name | Description |
| --- | --- |
| @dismiss |  |