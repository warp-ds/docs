# Toast

## Elements


### Import 

The toast is intended to be used programmatically. JavaScript APIs are provided to create, update and remove toasts from a page while managing things like placement on the page for you.

Toast is a bit different from other packages in Warp Elements. You need to import functions from the package and call them as needed.

Import functions for working with toasts:

```js
import { toast, removeToast, updateToast } from '@warp-ds/elements/toast';
```

### Syntax
You create a new toast by giving it a message:

```js
toast('This is a toast');
```

Create a new toast giving it a message and some options and then get back an id that can be used later to remove or edit the toast:

```js
const id = toast('This is a toast', { type: 'warning' });
```

Update an existing toast by id:

```js
updateToast(id, { text: 'This is a toast' });
```

### Visual options

#### Success

```js
toast('message goes here', { type: 'success' });
```

#### Warning

```js
toast('message goes here', { type: 'warning' });
```

#### Error

```js
toast('message goes here', { type: 'error' });
```

#### Success with close button
WARNING! The close icon is designed to automatically close by default, and it is recommended to avoid adding the manual close function due to accessability reasons. If the toast absolutely must be dismissible, set the `canclose` property to `true`.

```js
toast('message goes here', { type: 'success', canclose: true });
```

### Options

#### Auto removal with duration

```js
toast('message goes here', { type: 'success', duration: 2500 });
```

#### Text content

```js
const id = toast('message goes here'); updateToast({ id, text: 'change the message' });
```

### Props

<api-table type="elements" component="Toast" />