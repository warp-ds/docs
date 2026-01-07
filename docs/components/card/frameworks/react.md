# Card - Frameworks
Card is an interactive layout component to display information.

<ComponentsStatus />

## React

<FrameworkTabs />

### Import

You can import the component like so:
```js
import { Card } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Card } from '@warp-ds/react/components/card'

```

### Props

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | Element \|Element[] |  | The contents of the Card |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| className | string |  | Add your own custom styles to the container element |
| as | string \|Component | div | The wrapping container element |
| selected | boolean |  | If the card is selected |
| flat | boolean |  | Removes box shadow around card |

### DeadToggle props

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| radio | boolean |  | Passes radio type to the underlying toggle |
| checkbox | boolean |  | Passes checkbox type to the underlying toggle |
| value | string |  | Value for the input |
| checked | boolean |  | Whether the toggle is checked |
| className | string |  | Additional classnames to the toggle wrapper |
| labelClassName | string |  | Additional classnames to the toggle label |

### Code

The `<Card>` component takes any set of JSX elements as its children.


```jsx example
<Card className="full-width">
  <article className="p-16">
    <img className="h-128 w-full object-cover" src="#" alt="Description">
    <h2>
      <Clickable href="#" title="title">
        Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a.
        vv/fyring.
      </Clickable>
    </h2>
  </article>
</Card>
```

### Selecting cards

You can mark a Card as selected by passing the `selected` property. This will add an outline to indicate the selected state.

Try clicking one of the cards below and watch them all get selected at once.

```jsx example
function Example() {
  const [selected, setSelected] = React.useState(false);

  return (
    <div className="space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32">
      <Card selected={selected} className="full-width">
        <article className="p-16">
          <img className="h-128 w-full object-cover" src="#" alt="Description">
          <h2>
            <Clickable checkbox onClick={() => setSelected(!selected)} className="text-left">
              Option 1
            </Clickable>
          </h2>
        </article>
      </Card>
       <Card selected={selected} className="full-width">
        <article className="p-16">
          <img className="h-128 w-full object-cover" src="#" alt="Description">
          <h2>
            <Clickable checkbox onClick={() => setSelected(!selected)} className="text-left">
              Option 2
            </Clickable>
          </h2>
        </article>
      </Card>
    </div>
  );
}
```

### Anchor Cards

Keep in mind that if you wish to make the Card a clickable anchor card, you must add a article as the very first element with the attribute aria-owns set to the id of the title element. In this example we set it to the id of title and assign the h3 this id.

You should follow these semantics, but styling is up to you.

```jsx example
<Card>
  <article aria-owns="title">
    ...
    <h3 id="title">
      <Clickable href="..." title="content">
        content
      </Clickable>
    </h3>
    ...
  </article>
</Card>
```


### Toggles inside of Cards

Using Toggles([Radios](/components/radio/) or [Checkboxes](/components/checkbox/)) inside of cards has the limitation of only being able to pass forward a label. If you wish to further enhance the look and feel of these you must use the DeadToggle helper component, which we cover a bit further down.

```jsx example
function Example() {
  const [checked, setChecked] = React.useState(false);
  const [selected, setSelected] = React.useState('');

  return (
    <div>
      <Card selected={checked} className="mt-32 w-max p-24 flex items-center">
        <DeadToggle checkbox checked={checked} className="-mt-8" />
        <Clickable
          checkbox
          labelClassName="ml-12"
          onClick={() => setChecked(!checked)}
        >
          Checkbox in a card
        </Clickable>
      </Card>

      <div className="flex gap-32 mt-32">
        <Card selected={selected === 'a'} className="p-24 flex items-center">
          <DeadToggle radio checked={selected === 'a'} className="-mt-8" />
          <Clickable
            radio
            labelClassName="ml-12"
            name="gfdhjk2"
            onClick={() => setSelected('a')}
          >
            Radio in a card - A
          </Clickable>
        </Card>
        <Card selected={selected === 'b'} className="p-24 flex items-center">
          <DeadToggle radio checked={selected === 'b'} className="-mt-8" />
          <Clickable
            radio
            labelClassName="ml-12"
            name="gfdhjk2"
            onClick={() => setSelected('b')}
          >
            Radio in a card - B
          </Clickable>
        </Card>
      </div>
    </div>
  );
}
```

### Using the DeadToggle and Clickable helper component

First we must import the necessary helper components:

```jsx example
import { Clickable, DeadToggle } from '@warp-ds/react';
```

By using the DeadToggle and Clickable helper components, we can utilize the UI of the Toggle, whilst being able to style the card however we want.

```jsx example
function Example() {
  const [selected, setSelected] = React.useState('');

  return (
    <div className="flex">
      <Card
        flat
        className="py-12 px-16 w-max flex items-center"
        selected={selected === 'a'}
      >
        <DeadToggle radio checked={selected === 'a'} className="-mt-6" />
        <div className="ml-16">
          <h4 className="mb-0">
            <Clickable radio name="purchase" onClick={() => setSelected('a')}>
              Purchase foo
            </Clickable>
          </h4>
          <p className="mb-0 text-14">520 kr/mnd</p>
        </div>
      </Card>
      <Card
        flat
        className="py-12 px-16 w-max ml-20 flex items-center"
        selected={selected === 'b'}
      >
        <DeadToggle radio checked={selected === 'b'} className="-mt-6" />
        <div className="ml-16">
          <h4 className="mb-0">
            <Clickable radio name="purchase" onClick={() => setSelected('b')}>
              Purchase bar
            </Clickable>
          </h4>
          <p className="mb-0 text-14">124 kr/mnd</p>
        </div>
      </Card>
    </div>
  );
}
```

**Note** the `className="-mb-4"` on the Toggle component. This removes the `margin-bottom` that follows the component.
