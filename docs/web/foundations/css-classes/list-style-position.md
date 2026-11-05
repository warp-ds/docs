> Typography

# List Style Position

Utilities for controlling the position of bullets/numbers in lists.

## Quick reference

| Class | Description |
|-------|-------------|
| `list-inside` | `list-style-position: inside` |
| `list-outside` | `list-style-position: outside` |

## Basic usage

### Setting the list style position
Control the position of the markers and text indentation in a list using the `list-inside` and `list-outside` utilities.

<width-controller>
  <example-container>
    <div class="flex flex-col sm:flex-row gap-16">
      <div>
        <h4>list-inside</h4>
        <div class="ex-inner-box pl-32">
          <ul class="list-disc list-inside py-16 -my-32 border-l-1 pd-border-pink-500">
            <li>5 cups of coffee with enough caffeine to show how the line breaks</li>
            <li>0 cups of tea</li>
            <li>0 cups of water</li>
          </ul>
        </div>
      </div>
      <div>
        <h4>list-outside</h4>
        <div class="ex-inner-box pl-32">
          <ul class="list-disc list-outside py-16 -my-32 border-l-1 pd-border-pink-500">
            <li>5 cups of coffee with enough caffeine to show how the line breaks</li>
            <li>0 cups of tea</li>
            <li>0 cups of water</li>
          </ul>
        </div>
      </div>
    </div>
  </example-container>
</width-controller>

```html
<ul class="list-inside ...">
  <li>5 cups of coffee</li>
  <!-- ... -->
</ul>
<ul class="list-outside ...">
  <li>5 cups of coffee</li>
  <!-- ... -->
</ul>
```