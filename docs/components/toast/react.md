### Import

**Note:** this component is imported from the new components repository.

The Toast system consists of two parts.
You can import the component like so:

```js
import { addWToast, WToastContainer } from "@warp-ds/components/react/toast";
```

`WToastContainer` — A React component that renders all toast messages. It uses a React Portal to position itself at the bottom of the body. This placement helps avoid layout issues and ensures screen readers can access the toast content properly (a11y compliant).

`addWToast` — A function you can call from anywhere in your application to trigger a new toast. This works both inside and outside of React components.

### Syntax

### Variants

### Options

## Duration

## Dismiss button

**WARNING!** The toast component is designed to automatically close by default, and it is recommended to avoid adding the manual dismiss button due to accessibility reasons. If the toast absolutely must be dismissible, set the `dismissible` property to `true`. 

**Read more** under [Accessibility](#accessibility).
