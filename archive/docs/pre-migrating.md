# Moving to Fabric, to prepare for Warp

## CSS

- Avoid use of `.button` and any semantic button classes
  - Prefer the use of the Button component
- Avoid the use of `.input` and any semantic form element classes
  - Prefer the use of the form element-components - e.g. [TextField](https://react.fabric-ds.io/textfield) in React or [fInput](https://vue.fabric-ds.io/forms) in Vue
- Fabric color shim?

## Components

## Strings

Adopting a "strings" approach when refactoring will likely make internationalization easier.

### Example

Instead of:

```html
<div>
  <h1>Welcome to FINN!</h1>
</div>
```

prefer:

```html
<div>
  <h1>{ titles.welcome }</h1>
</div>
```
