A toast overlay is used to provide system status notifications, such as error, completion, and loading progress messages. The icons and colours are available, which must be selectively used according to the component's attention level.

## Variants

### Positive


<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/toast/toast-positive.svg" alt="Positive toast" />
  </div>

  <div>

The positive toast uses the green semantic colour and includes a checkmark icon (Success) to support clarity for those with colour vision deficiency. **It’s used to indicate a successful action or the completion of a task.**

  </div>
</div>

### Warning

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/toast/toast-warning.svg" alt="Warning toast" />
  </div>

  <div>

  The warning toast uses the orange semantic colour and features a triangular warning icon (Warning) to aid those with colour vision deficiency in recognising the message tone. **It should be used when the message needs to draw more attention than the other variants.**

  </div>
</div>

### Negative

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/toast/toast-negative.svg" alt="Negative toast" />
  </div>

  <div>

  The negative toast uses the red semantic colour and includes an error icon (Error) to help those with colour vision deficiency understand the message tone. **It’s used to indicate an error or failure.**

  </div>
</div>

## Anatomy

::: image-block
![Example of a success toast message with a green border and light green background. The toast contains the text "Toast message" and is surrounded by four numbered highlights: (1) the left border of the toast container, (2) a circular checkmark icon indicating success, (3) the toast message text itself, and (4) a close button represented by an "X" icon on the far right side of the toast.](/components/toast/toast-anatomy.svg)
:::

1. Toast container

2. Icon

3. Text

4. Close button (optional)