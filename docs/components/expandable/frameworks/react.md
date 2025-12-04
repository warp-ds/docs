# Expandable

## React

### Import

You can import the component like so:
```js
import { Expandable } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Expandable } from '@warp-ds/react/components/expandable'

```

### Visual options

#### Default

```js
<Expandable title="I am expandable">
  <p>Expandable contents go here.</p>
</Expandable>
```

#### Expandable box

```js
<Expandable title="I am expandable box" box>
  <p>Expandable contents go here.</p>
</Expandable>
```

#### Expandable box with icon

```js
import { IconBag16 } from '@fabric-ds/icons/react';

<Expandable
  title={
    <div className="flex flex-row items-center">
      <IconBag16 />
      <p className="ml-8 mb-0">This is a title with an icon</p>
    </div>
  }
  box
>
  <p>Expandable contents go here.</p>
</Expandable>;
```

#### Expandable animated box

```js
<Expandable title="I am expandable animated box" box animated>
  <p>Expandable contents go here.</p>
</Expandable>
```

#### The expanded prop

You can set whether the component is open or collapsed using the `expanded` prop.

```js
<Expandable title="I am initially..." expanded>
  <p>...expanded</p>
</Expandable>
```

#### onChange event

```js
<Expandable title="I am expandable" onChange={(state) => console.log(state)}>
  <h1>onChange example</h1>
  <p>Expandable contents go here.</p>
</Expandable>
```

#### Controlling the component

If you need to take control of expansion, use the `onChange` event in combination with the `expanded` prop.

```js
function Example() {
  const [open, setOpen] = React.useState(true);

  return (
    <Expandable title="Expandable box" box expanded={open} onChange={setOpen}>
      <p>I am expanded</p>
    </Expandable>
  );
}
```

### Props

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | string |  | The title for the expandable |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| className | string |  | Additional classes to include |
| style | CSSProperties |  | CSS styles to inline on the component |
| expanded | boolean | false | The state of the component, either true for expanded or false for closed |
| bleed | boolean |  | Will make the expandable full-width on sm-size |
| box | boolean |  | Will make the expandable a Box |
| buttonClass | string |  | Additional CSS classes to include on the button part of the component |
| contentClass | string |  | Additional CSS classes to include on the content part of the component |
| animated | boolean |  | Will animate the expansion/collapse |
| chevron | boolean | true | Controls chevron visibility |
| headingLevel | HeadingLevel |  | Wrap the toggle button in a heading element with the specified level. If headingLevel is not specified, the button will not be wrapped by a heading element |

#### Events

| Name | Description |
| --- | --- |
| onChange | (state: boolean) => void |