> Typography

# Word Break

Utilities for controlling word breaks in an element.

## Quick reference

| Class | Description |
|-------|-------------|
| `break-normal` | `overflow-wrap: normal word-break: normal` |
| `break-words` | `overflow-wrap: break-word` |
| `break-all` | `word-break: break-all` |
| `break-keep` | `word-break: keep-all` |

## Basic usage

### Normal
Use `break-normal` to only add line breaks at normal word break points.

<width-controller>
  <example-container>
    <div class="ex-inner-box text-body s-text overflow-auto max-w-[400]">
      <p class="break-normal">
        A really long finnish word, that has nothing to do with warp technology, is
         <strong>Lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas</strong>, meaning
        Aeroplane jet turbine motor assistant mechanic non-commissioned officer in training.
      </p>
    </div>
  </example-container>
</width-controller>

```html
<p class="break-normal ...">...</p>
```

### Break Words
Use `break-words` to add line breaks mid-word if needed.

<width-controller>
  <example-container>
    <div class="ex-inner-box text-body s-text overflow-auto max-w-[400]">
      <p class="break-words">
        A really long finnish word, that has nothing to do with warp technology, is
         <strong>Lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas</strong>, meaning
        Aeroplane jet turbine motor assistant mechanic non-commissioned officer in training.
      </p>
    </div>
  </example-container>
</width-controller>

```html
<p class="break-words ...">...</p>
```

### Break All
Use `break-all` to add line breaks whenever necessary, without trying to preserve whole words.

<width-controller>
  <example-container>
    <div class="ex-inner-box text-body s-text overflow-auto max-w-[400]">
      <p class="break-all">
        A really long finnish word, that has nothing to do with warp technology, is
         <strong>Lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas</strong>, meaning
        Aeroplane jet turbine motor assistant mechanic non-commissioned officer in training.
      </p>
    </div>
  </example-container>
</width-controller>

```html
<p class="break-all ...">...</p>
```
