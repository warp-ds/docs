# Button - Frameworks
Buttons initiate events or actions within a page, informing users of what to expect next.

<ComponentsStatus />

## React 19

<FrameworkTabs />

### Import

You can import the component like so:
```js
import { Button } from '@warp-ds/components/react/button';
```

### Syntax

```jsx example
<Button>Default</Button>
```

### Visual options

#### Primary

The primary button is a call to action. As a general rule, there should only be
one of them on the screen. This guides the user towards the happy path.

```jsx example
<Button variant="primary">Primary</Button>
```

#### Negative

Used for destructive actions, like deletion. Shouldn't be used on the same
screen as a primary button.

```jsx example
<Button variant="negative">Negative</Button>
```

#### Secondary

Secondary buttons are without background, and are often used for secondary actions.
This is the default, so you may simply omit the secondary property unless you want to use it with `quiet` variation.

```jsx example
<Button variant="secondary">Secondary</Button>
```

#### Utility
The `utility` button.

```jsx example
<Button variant="utility">Utility</Button>
```

#### Link
Button to look like a link, use the `link` property.

```jsx example
<Button variant="link">button</Button>
```

#### Negative Quiet
The `negativeQuiet` button.

```jsx example
<Button variant="negativeQuiet">Negative-Quiet</Button>
```

#### Utility Quiet
The `utilityQuiet` button.

```jsx example
<Button variant="utilityQuiet">utility-Quiet</Button>
```


#### Loading/In progress

Used for visual feedback that the action the user triggered is loading.

```jsx example
<Button loading>Default loading</Button>
```

#### Small

```jsx example
<Button size="small">Default small</Button>
```

#### Full width
The fullWidth prop sets the button's width to its parent's width.

```jsx example
<Button fullWidth>Full width</Button>
```

### Props

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | ReactNode |  | The contents of the Button |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| className | string |  | Additional classes to include |
| style | CSSProperties |  | CSS styles to inline on the component |
| type | `"button"\|"submit"\|"reset"` | button | Button type, only applied when href is not set. |
| variant | `'primary' \| 'secondary' \| 'negative' \| 'utility' \| 'overlay' \| 'overlayInverted' \|'quiet'\| 'negativeQuiet' \| 'utilityQuiet'\| 'overlayQuiet' \| 'overlayInvertedQuiet' \| 'link'` |  | Set the correct variant on the button. |
| size | `'small' \| 'default'` | default | Set the button to be either small or default size. |
| loading | boolean | false | Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type. |
| fullWidth | boolean | false | Sets the button's width to its parent's width. Useful especially on mobile when button should take full width. |
| hasIconOnly | boolean |  | Facilitate a round button for icon. |

<component-questions />