### Import

You can import the component like so:
```js
import { Attention } from '@warp-ds/react'
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Attention } from '@warp-ds/react/components/attention'
```

### Visual options

#### Callout

```js
<div>
  <Box info>
    <h1 aria-details='callout-bubbletext'>I am a box full of info</h1>
  </Box>
  <Attention callout placement='right' isShowing={true}>
    <p id='callout-bubbletext'>
      I'm a callout because that box over there is new or something
    </p>
  </Attention>
</div>
```

#### Tooltip

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
        flip={true}
        targetEl={targetEl}
        isShowing={show}
      >
        <p id='tooltip-bubbletext'>I am a tooltip</p>
      </Attention>
    </div>
  )
}
```

#### Popover

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
        flip={true}
        crossAxis={true}
        fallbackPlacements={['left', 'bottom', 'top']}
        targetEl={targetEl}
        isShowing={show}
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

#### Popover with icon as target element

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

#### Highlight (with optional close button)

```js
function DismissibleHighlight() {
  const [show, setShow] = React.useState(false)
  const targetEl = React.useRef()

  return (
    <div className='flex flex-col justify-between h-[200]'>
      <Button
        small
        aria-expanded={show}
        aria-controls='highlight-attention-example'
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
          canClose
          onDismiss={() => setShow(false)}
          placement='bottom'
          isShowing={show}
          targetEl={targetEl}
          flip={true}
          fallbackPlacements={['top']}
          id='highlight-attention-example'
        >
          <p id='highlight-bubble-text'>
            I'm a highlight that can dismiss itself
          </p>
        </Attention>
      </div>
    </div>
  )
}
```

### Flip prop
The attention component uses the Floating-ui library to calculate its position.
By default, the `flip` prop is set to `false`, which means that the attention component will not flip its position to the opposite side.

Try to scroll and see how the attention component doesn't move:

<attention-static-example />

When `flip` is set to `true`, it will instead trigger [Floating-ui's flip() function](https://floating-ui.com/docs/flip) that will make sure that the attention component stays in viewport, by flipping it to the opposite side.

Try to scroll and see how the attention component moves its position to the opposite side to keep itself in viewport as long as possible:

<attention-flip-example />

### CrossAxis prop
The `crossAxis` prop decides whether to check for cross axis overflow or not when `flip` is set to `true`.
By default, the `crossAxis` prop is set to `false`, which means that the attention component will ignore cross axis overflow.

Read more: [Floating-ui crossAxis](https://floating-ui.com/docs/flip#crossaxis)

### FallbackPlacements prop
By default, `fallbackPlacements` is `undefined`.
If `flip`is set to `true`, then you have the option to also use `fallbackPlacements` prop and pass in an array of preferred placements that you want the attention component to try if there is no longer any space left to position it to the initial `placement`, e.g. `['right', 'top']`.

Read more: [Floating-ui fallbackPlacements](https://floating-ui.com/docs/flip#fallbackplacements)

Try to scroll and see how the attention component's position starts at the `bottom` but then moves to the `right` and then to the `top`: 

<attention-fallback-placements-example />

### Accessibility
The attention component handles accessibility automatically by wrapping its slotted content with a `div` that has a default `role` attribute (`role="tooltip"` for tooltip and `role="img"` otherwise), and a default localized `aria-label`.

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

<api-table type="react" component="Attention" />
