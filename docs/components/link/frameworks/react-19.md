# Link - Frameworks
Link component to use when creating links that look like buttons.

<ComponentsStatus />

## React 19

<FrameworkTabs />

### Import

You can import the component like so:

```js
import { Link } from "@warp-ds/components/react/link";
```

### Syntax

This is same as an html anchor tag

```jsx example
<Link href="https://google.com">Link</Link>
```

You should ideally use this when you need a Link styled as a button. Check the visual options below.

### Visual options

#### Primary

The primary button link is a call to action. As a general rule, there should only be
one of them on the screen. This guides the user towards the happy path.

```jsx example
<Link button variant="primary" href="https://google.com/" target="_blank">
  Link as button primary
</Link>
```

#### Negative

Used for destructive actions, like deletion. Shouldn't be used on the same
screen as a primary button link.

```jsx example
<Link button variant="negative" href="https://google.com/" target="_blank">
  Link as button negative
</Link>
```

#### Secondary

Secondary button links are without background, and are often used for secondary actions.

```jsx example
<Link button variant="secondary" href="https://google.com/" target="_blank">
  Link as button secondary
</Link>
```

#### Utility

The `utility` button link.

```jsx example
<Link button variant="utility" href="https://google.com/" target="_blank">
  Link as button utility
</Link>
```

#### Negative Quiet

The `negativeQuiet` button link.

```jsx example
<Link button variant="negativeQuiet" href="https://google.com/" target="_blank">
  Link as button negative quiet
</Link>
```

#### Utility Quiet

The `utilityQuiet` button link.

```jsx example
<Link button variant="utilityQuiet" href="https://google.com/" target="_blank">
  Link as button utility quiet
</Link>
```

#### Small

```jsx example
<Link button size="small" href="https://google.com/" target="_blank">
  Link as button
</Link>
```

#### Full width

The fullWidth prop sets the links width to its parent's width.

```jsx example
<Link button fullWidth variant="primary" href="https://google.com/">
  Go to google.com
</Link>
```

### Props

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | ReactNode |  | The contents of the Link |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| className | string |  | Additional classes to include |
| style | CSSProperties |  | CSS styles to inline on the component |
| onClick | `(event: MouseEvent) => void` |  | Handler that is called when the link is clicked. |
| button | boolean | false | Set the link to look like a button. |
| variant | `'primary' \| 'secondary' \| 'negative' \| 'utility' \| 'overlay' \| 'overlayInverted' \|'quiet'\| 'negativeQuiet' \| 'utilityQuiet'\| 'overlayQuiet' \| 'overlayInvertedQuiet' \| 'link'` |  | Set the correct variant on the link. |
| size | `'small' \| 'default'` | default | Set the link to be either small or default size. |
| fullWidth | boolean | false | Sets the links width to its parent's width. Useful especially on mobile when link should take full width. |
| href | string |  | Set the href for the location where clicking the link will take you to. |
| target | string |  | Anchor target, see [The Anchor element / MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a). |
| rel | string |  | The relationship of the linked URL. |