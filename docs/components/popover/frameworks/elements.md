# Popover

## Elements

### Visual options

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

### Flip prop
The attention component uses the Floating-ui library to calculate its position.
By default, the `flip` prop is set to `false`, which means that the attention component will not flip its position to the opposite side.

Try to scroll up and down and see how the attention component doesn't move:

<popover-static-example />

When `flip` is set to `true`, it will instead trigger [Floating-ui's flip() function](https://floating-ui.com/docs/flip)  that will make sure that the attention component stays in viewport, by flipping it to the opposite side.

Try to scroll up and down and see how the attention component moves its position to the opposite side to keep itself in viewport as long as possible:

<popover-flip-example />

### Cross-axis prop
The `cross-axis` prop decides whether to check for cross axis overflow or not when `flip` is set to `true`.
By default, the `cross-axis` prop is set to `false`, which means that the attention component will ignore cross axis overflow.

Read more: [Floating-ui crossAxis](https://floating-ui.com/docs/flip#crossaxis)

### Fallback-placements prop
By default, `fallback-placements` is `undefined`. If `flip`is set to `true`, then you have the option to also use `fallback-placements` prop and pass in an array of preferred placements that you want the attention component to try if there is no longer any space left to position it to the initial `placement`, e.g. `['right', 'top']`.

Read more: [Floating-ui fallbackPlacements](https://floating-ui.com/docs/flip#fallbackplacements)

Try to scroll up and down and see how the attention component's position starts at the `bottom` but then moves to the `right` and then to the `top`: 

<popover-fallback-placements-example />

### Accessibility
If the Attention element has "left" or "top" position, it should be placed before the target element in the DOM.

Attention element handles accessibility automatically by wrapping its slotted content with a `div` that has a default `role` attribute set to `img` when the `popover` prop is activated, and a default localized `aria-label`.
In addition, Attention automatically sets an `aria-details` on its target element, pointing to the slotted message element.

It is possible to tell assistive technologies to recognize only a part of Attention's text content.
To do that set the `role` attribute on the relevant text element nested in `w-attention` and reference it by id through the use of `aria-details`.
The `aria-details` attribute is on the target element, not on `w-attention`.

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

### Props

<api-table type="elements" component="Popover" />