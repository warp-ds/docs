# Tooltip

## React

### Import

You can import the component like so:
```js
import { Attention } from '@warp-ds/react'
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Attention } from '@warp-ds/react/components/attention'
```

### Visual option

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

### Flip prop
The attention component uses the Floating-ui library to calculate its position.
By default, the `flip` prop is set to `false`, which means that the attention component will not flip its position to the opposite side.

Try to scroll up and down and see how the attention component doesn't move:

<tooltip-static-example />

When `flip` is set to `true`, it will instead trigger [Floating-ui's flip() function](https://floating-ui.com/docs/flip) that will make sure that the attention component stays in viewport, by flipping it to the opposite side.

Try to scroll up and down and see how the attention component moves its position to the opposite side to keep itself in viewport as long as possible:

<tooltip-flip-example />

### CrossAxis prop
The `crossAxis` prop decides whether to check for cross axis overflow or not when `flip` is set to `true`.
By default, the `crossAxis` prop is set to `false`, which means that the attention component will ignore cross axis overflow.

Read more: [Floating-ui crossAxis](https://floating-ui.com/docs/flip#crossaxis)

### FallbackPlacements prop
By default, `fallbackPlacements` is `undefined`.
If `flip`is set to `true`, then you have the option to also use `fallbackPlacements` prop and pass in an array of preferred placements that you want the attention component to try if there is no longer any space left to position it to the initial `placement`, e.g. `['right', 'top']`.

Read more: [Floating-ui fallbackPlacements](https://floating-ui.com/docs/flip#fallbackplacements)

Try to scroll up and down and see how the attention component's position starts at the `right` but then moves to the `top`: 

<tooltip-fallback-placements-example />

### Accessibility
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

### Props

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| targetEl | MutableRefObject |  | The reference container to which the Attention component is positioned relative to. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| isShowing | boolean | false | Whether Attention component is shown. |
| placement | `'top-start' \| 'top' \| 'top-end' \| 'bottom-start' \| 'bottom' \| 'bottom-end' \| 'left-start' \| 'left' \| 'left-end' \| 'right-start' \| 'right' \| 'right-end'` | 'bottom' | Placement according to the target element. The arrow will point to the opposite side of this position |
| children | Element \| Element[] |  | Elements inside of the Attention component |
| className | string |  | Extend the Attention component container styling |
| tooltip | boolean | false | Whether Attention component is rendered as a tooltip |
| role | string | tooltip | Allows the user to remove the default ARIA role attribute for the Attention component, by supplying an empty role (`role=""`). Default role is set to `tooltip`. |
| aria-label | string |  | Allows the user to override the default aria-label attribute for the Attention component |
| noArrow | boolean | false | Render Attention component without arrow |
| distance | number | 8 | Distance from which to offset the Attention component from the targetEl vertically |
| skidding | number | 0 | Distance from which to offset the Attention component along its targetEl horizontally. |
| flip | boolean | false | Whether Attention element should flip its placement in order to keep it in view |
| crossAxis | boolean | false | Whether Attention element should ignore cross axis overflow when flip is enabled. Can only be used when `flip` is set to true. |
| fallbackPlacements | array | undefined | Choose which preferred placements the Attention element should flip to. Can only be used when `flip` is set to true. |

#### Events

| Name | Description |
| --- | --- |
| onDismiss | () => void |