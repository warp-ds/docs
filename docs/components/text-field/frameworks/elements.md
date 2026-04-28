# Text field - Elements
A text field is a single-line input component used for entering and editing textual data.

<ComponentsStatus />
<FrameworkTabs />
<ThemeSwitcher />

<!--@include: ../../../../node_modules/@warp-ds/elements/dist/docs/textfield/accessibility.md-->
<!--@include: ../../../../node_modules/@warp-ds/elements/dist/docs/textfield/usage.md-->
<!--@include: ../../../../node_modules/@warp-ds/elements/dist/docs/textfield/examples.md-->
<!--@include: ../../../../node_modules/@warp-ds/elements/dist/docs/textfield/api.md-->

### Affix

If you wish to use an affix you must first use the w-affix element in conjunction with
w-textfield. Include the affix as a child of w-textfield and set the appropiate attributes.
You must specify which slot to set the affix into (either prefix or suffix).

> Suffix

```html
<w-textfield label="Price">
  <w-affix slot="suffix" label="kr"></w-affix>
</w-textfield>
```

> Prefix

```html
<w-textfield label="Price">
  <w-affix slot="prefix" label="kr"></w-affix>
</w-textfield>
```

> For prefixes wider than 40px, push the input further to the right by setting a `--w-prefix-width` value on the w-textfield element.
> This will increase left padding of its input element. This value needs to be hardcoded until we find a more robust solution.

```html
<w-textfield class="[--w-prefix-width:56px]" label="Price in kroner">
  <w-affix slot="prefix" label="kroner"></w-affix>
</w-textfield>
```

> You can also use both a prefix and suffix

```html
<w-textfield label="Price">
  <w-affix slot="prefix" label="kr"></w-affix>
  <w-affix slot="suffix" search aria-label="Search"></w-affix>
</w-textfield>
```
#### Affix props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| aria-label | string |  | Defines a string value that labels the affix element |
| clear | boolean |  | Displays a clear icon |
| search | boolean |  | Displays a search icon |
| label | string |  | Displays a string |

### Read only
The read-only boolean attribute makes the w-textfield's text content immutable. Unlike
disabled the w-textfield remains focusable and the contents can still be copied. See the MDN
docs for more information.

```html
<div class="flex flex-col space-y-32">
  <w-textfield label="Email" read-only value="puse@finn.no"></w-textfield>
  <w-textfield label="Email" read-only></w-textfield>
</div>
```

<component-questions />