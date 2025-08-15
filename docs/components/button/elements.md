### Import

```js
import '@warp-ds/elements/components/button';

```

### Syntax

```html
<w-button variant="primary">Primary button</w-button>
```

### Variants

#### Primary
The primary button is a call to action. Can be combined with "small" attribute.

```html
<w-button variant="primary">Primary button</w-button>
<w-button variant="primary" small>Primary button small</w-button>
```

#### Secondary
The secondary button is for secondary or tertiary actions. Can be combined with "small" and "quiet" attributes. "secondary" is the default value of the "variant" attribute.

```html
<w-button variant="secondary">Secondary button</w-button>
<w-button variant="secondary" small>Secondary button small</w-button>
```

#### Negative
The negative button is for emphasizing actions that can be destructive or have negative consequences if taken. Can be combined with "small" and "quiet" attributes.

```html
<w-button variant="negative">Negative button</w-button>
<w-button variant="negative" small>Negative button small</w-button>
```

#### Utility

```html
<w-button variant="utility">Utility button</w-button>
<w-button variant="utility" small>Utility button small</w-button>
```
The `utility` variant combined with `quiet` replaces the deprecated `pill` variant.
```html
<w-button variant="utility" quiet="">
  <w-icon-share-16></w-icon-share-16>
</w-button>
```

#### Link

```html
<w-button variant="link">Link button</w-button>
<w-button variant="link" small>Link button small</w-button>
```

#### Quiet
By default, buttons have a visible stroke and fill. Quiet buttons do not have this visible stroke or fill and should only be used for secondary actions within a button group. Quiet buttons have the same padding rules as other action buttons and reveal a button-like background color when hovered.
```html
<w-button quiet="">Quiet secondary button</w-button>
<w-button quiet="" variant="negative">Quiet negative button</w-button>
<w-button quiet="" variant="utility">Quiet utility button</w-button>
```

#### Link
Buttons will be rendered as an anchor (a tag) if they use the `href` attribute.
```html
<w-button href="https://google.no">Button as anchor</w-button>
```

But if you need a button to look like a link, use the `link` variant.

```html
<w-button variant="link">Link button</w-button>
```
However, it is not recommended to use the `link` variant in combination with the `href` attribute. 
If there is a need to have an anchor (a tag) that should still look like a link, the recommendation is to instead use the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" target="_blank" rel="noopener">`<a>` HTML element</a>. 

#### Loading state
To show the user that the action they triggered has begun, buttons have an in progress or loading state.
```html
<w-button variant="primary" loading="">Primary button loading</w-button>
```
#### Full width

The fullWidth prop sets the button's width to its parent's width. 
```html
<div class="w-full">
  <w-button full-width variant="primary">Primary button full width</w-button>
</div>
```

#### Disabled state

Disabled is an anti-pattern and is not supported.
There will always be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons.

### Props

<api-table type=elements component="Button" />
