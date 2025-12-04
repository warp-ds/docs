# Box

## React

### Import

You can import the component like so:
```js
import { Box } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Box } from '@warp-ds/react/components/box';

```

### Syntax

```js
<Box info>
    <p>This is <strong>info</strong> variant of the box component</p>
</Box>
```

### Props

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| as | string | div | The DOM element to emit |
| bleed | boolean | false | Will make a box full-width on sm-size |
| bordered | boolean | false | Adds a lovely border |
| info | boolean | false | Will style the box with colors for indicating that it has informative content |
| neutral | boolean | false | Will style the box in a neutral fashion |
| role | string | region | Sets the ARIA `role` attribute to provide semantic meaning. To remove the default role attribute, supply an empty role (`role=""`). |