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

### Visual option

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

### Flip prop
The attention component uses the Floating-ui library to calculate its position.
By default, the `flip` prop is set to `false`, which means that the attention component will not flip its position to the opposite side.

Try to scroll up and down and see how the attention component doesn't move:

<tooltip-static-example />

When `flip` is set to `true`, it will instead trigger [Floating-ui's flip() function](https://floating-ui.com/docs/flip) that will make sure that the attention component stays in viewport, by flipping it to the opposite side.

Try to scroll up and down and see how the attention component moves its position to the opposite side to keep itself in viewport as long as possible:

<tooltip-flip-example />

### Cross-axis prop
The `cross-axis` prop decides whether to check for cross axis overflow or not when `flip` is set to `true`.
By default, the `cross-axis` prop is set to `false`, which means that the attention component will ignore cross axis overflow.

Read more: [Floating-ui crossAxis](https://floating-ui.com/docs/flip#crossaxis)

### Fallback-placements prop
By default, `fallback-placements` is `undefined`.
If `flip`is set to `true`, then you have the option to also use `fallback-placements` prop and pass in an array of preferred placements that you want the attention component to try if there is no longer any space left to position it to the initial `placement`, e.g. `['right', 'top']`.

Read more: [Floating-ui fallbackPlacements](https://floating-ui.com/docs/flip#fallbackplacements)

Try to scroll up and down and see how the attention component's position starts at the `bottom` but then moves to the `right` but then moves to the `top`: 

<tooltip-fallback-placements-example />

### Accessibility
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

### Props

<api-table type="vue" component="Tooltip" />