### Import

You can import the component like so:
```js
import { Button } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Button } from '@warp-ds/react/components/button';

```

### Syntax

```jsx example
<Button>Save</Button>
```

### Visual options

#### Primary

The primary button is a call to action. As a general rule, there should only be
one of them on the screen. This guides the user towards the happy path.

```jsx example
<Button primary>Save</Button>
```

#### Negative

Used for destructive actions, like deletion. Shouldn't be used on the same
screen as a primary button.

```jsx example
<Button negative>Delete</Button>
```

#### Secondary

Secondary buttons are without background, and are often used for secondary actions.
This is the default, so you may simply omit the secondary property unless you want to use it with `quiet` variation.

```jsx example
<div className="flex space-x-32">
  <Button secondary>Save</Button>
  <Button>Save</Button>
</div>
```

#### Loading/In progress

Used for visual feedback that the action the user triggered is loading.

```jsx example
<Button loading>Save</Button>
```

#### Small

```jsx example
<Button small>Small</Button>
```

#### Utility
The `utility` button combined with `quiet` replaces the deprecated button `pill` prop.
```jsx example
<Button utility quiet><IconShare16 /></Button>
```

#### Link
Buttons will be rendered as an anchor (a tag) if they use an `href` attribute.

```jsx example
<Button href="https://google.no">Link</Button>
```

But if you need a button to look like a link, use the `link` property.

```jsx example
<Button link>Link</Button>
```

However, it is not recommended to use `link` property in combination with the `href` attribute. 
If there is a need to have an anchor (a tag) that should still look like a link, the recommendation is to instead use the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" target="_blank" rel="noopener">`<a>` HTML element</a>. 

#### Disabled
Disabled is an anti-pattern and is not supported. There will always be users who
don't understand why an element is disabled, or users who can't even see that it
is disabled because of poor lighting conditions or other reasons.

#### Full width
The fullWidth prop sets the button's width to its parent's width. 

```jsx example
<Button fullWidth primary>Full width</Button>
```

### Props

<api-table type=react component="Button" />
