# Toast - Frameworks
Toasts are brief user feedback messages that overlay content.

<ComponentsStatus />

## React 19

<FrameworkTabs />

### Import

The Toast system consists of two parts.
You can import the component like so:

```js
import { addWToast, WToastContainer } from "@warp-ds/components/react/toast";
```

`WToastContainer` — A React component that renders all toast messages. It uses a React Portal to position itself at the bottom of the body. This placement helps avoid layout issues and ensures screen readers can access the toast content properly (a11y compliant).

`addWToast` — A function you can call from anywhere in your application to trigger a new toast. This works both inside and outside of React components.

### Syntax

You create a new toast by giving it a message and a variant:

```js
addWToast({
  text: 'I am a toast message',
  variant: 'positive',
});
```

### Options

#### Duration

```js
addWToast({
  text: 'You did the thing!'
  variant: 'positive',
  duration: 10000
});
```

#### Dismiss button

::: warning WARNING!
The toast component is designed to automatically close by default, and it is recommended to avoid adding the manual dismiss button due to accessibility guidelines. If the toast absolutely must be dismissible, set the `dismissible` property to `true`.
:::

**Read more** under [Accessibility](/components/toast/tab_accessibility).

```js
addWToast({
  text: 'I am a toast message'
  variant: 'positive',
  dismissible: true
});
```

### Props

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | string | undefined | The toast message. |
| variant | `'positive' \| 'warning' \| 'negative'` | undefined | Defines the type of toast. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| duration | 5000 \| 10000 \| 6000000 | 5000 | Sets how long the toast stays visible in the user interface before it dismisses automatically (in milliseconds). |
| dismissible | boolean | false | Adds a close button. Not recommended from an accessibility perspective. |