> Typography

# Text Overflow

Utilities for controlling text overflow in an element.

## Quick reference

| Class | Description |
|-------|-------------|
| `truncate` | `overflow: hidden text-overflow: ellipsis white-space: nowrap` |
| `text-ellipsis` | `text-overflow: ellipsis` |
| `text-clip` | `text-overflow: clip` |

## Basic usage

### Truncate
Use `truncate` to prevent text from wrapping and truncate overflowing text with an ellipsis (`…`).

<width-controller>
  <example-container>
    <div class="ex-inner-box s-text text-body max-w-full">
      <p class="truncate mb-0">
        A really long finnish word, that has nothing to do with Warp technology, is
        Lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas, meaning
        Aeroplane jet turbine motor assistant mechanic non-commissioned officer in training.
      </p>
    </div>
  </example-container>
</width-controller>

```html
<p class="truncate ...">...</p>
```

### Ellipsis
Use `text-ellipsis` to truncate overflowing text with an ellipsis (`…`).

<width-controller>
  <example-container>
    <div class="ex-inner-box s-text text-body max-w-[400]">
      <p class="text-ellipsis overflow-hidden mb-0">
        A really long finnish word, that has nothing to do with warp technology, is
        <strong>Lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas</strong>, meaning
        Aeroplane jet turbine motor assistant mechanic non-commissioned officer in training.
      </p>
    </div>
  </example-container>
</width-controller>

```html
<p class="text-ellipsis overflow-hidden ...">...</p>
```

### Clip
Use `text-clip` to clip the text at the limit of the content area.

<width-controller>
  <example-container>
    <div class="ex-inner-box s-text text-body max-w-[400]">
      <p class="text-clip overflow-hidden mb-0">
        A really long finnish word, that has nothing to do with warp technology, is
        <strong>Lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas</strong> meaning
        Aeroplane jet turbine motor assistant mechanic non-commissioned officer in training.
      </p>
    </div>
  </example-container>
</width-controller>

```html
<p class="text-clip overflow-hidden ...">...</p>
```
