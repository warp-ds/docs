# Card

Card is an interactive layout component to display information.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/card/overview), [Usage](https://warp-ds.github.io/docs/components/card/usage), [React](https://warp-ds.github.io/docs/components/card/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/card/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/card/frameworks/elements)

**Framework support:** Elements, React, Vue

## Overview

Card is an interactive layout component to display information.

## Inline Demo Markup

```html
<h3 class="t4">Default Card</h3>
    <p>
        The card can have any content but it needs to at least have one interactive item.
    </p>
    <h5>with box-shadow (default)</h5>
    <div class="grid grid-cols-3 gap-24 mb-32 mt-24">
        <w-card clickable>
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Title</p>
                </h2>
            </article>
        </w-card>
        <w-card clickable>
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Title</p>
                </h2>
            </article>
        </w-card>
        <w-card clickable>
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Title</p>
                </h2>
            </article>
        </w-card>
    </div>
    <h5>without box-shadow (using the flat prop)</h5>
    <div class="grid grid-cols-3 gap-24 mb-32 mt-24">
        <w-card flat clickable>
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Title</p>
                </h2>
            </article>
        </w-card>
        <w-card flat clickable>
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Title</p>
                </h2>
            </article>
        </w-card>
        <w-card flat clickable>
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Title</p>
                </h2>
            </article>
        </w-card>
    </div>
    <h3 class="t4">Selected Card</h3>
    <div class="grid grid-cols-3 gap-24 mb-32 mt-24">
        <w-card selected>
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Selected Card</p>
                </h2>
            </article>
        </w-card>
        <w-card>
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Normal Card</p>
                </h2>
            </article>
        </w-card>
    </div>
    <h3 class="t4">Card with click toggle selection</h3>
    <div class="grid grid-cols-3 gap-24 mb-32 mt-24">
        <w-card clickable onclick="this.selected = !this.selected">
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Click to toggle selection</p>
                </h2>
            </article>
        </w-card>
    </div>
```

## Usage

> This page is still in progress in the public docs.

## Frameworks

### React

Card is an interactive layout component to display information.

You can import the component like so:

```js
import { Card } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Card } from '@warp-ds/react/components/card'
```

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

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| radio | boolean |  | Passes radio type to the underlying toggle |
| checkbox | boolean |  | Passes checkbox type to the underlying toggle |
| value | string |  | Value for the input |
| checked | boolean |  | Whether the toggle is checked |
| className | string |  | Additional classnames to the toggle wrapper |
| labelClassName | string |  | Additional classnames to the toggle label |

The `<Card>` component takes any set of JSX elements as its children.

```jsx
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

You can mark a Card as selected by passing the `selected` property. This will add an outline to indicate the selected state.

Try clicking one of the cards below and watch them all get selected at once.

```jsx
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

Keep in mind that if you wish to make the Card a clickable anchor card, you must add a article as the very first element with the attribute aria-owns set to the id of the title element. In this example we set it to the id of title and assign the h3 this id.

You should follow these semantics, but styling is up to you.

```jsx
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

Using Toggles([Radios](https://warp-ds.github.io/docs/components/radio/overview) or [Checkboxes](https://warp-ds.github.io/docs/components/checkbox/overview)) inside of cards has the limitation of only being able to pass forward a label. If you wish to further enhance the look and feel of these you must use the DeadToggle helper component, which we cover a bit further down.

```jsx
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

First we must import the necessary helper components:

```jsx
import { Clickable, DeadToggle } from '@warp-ds/react';
```

By using the DeadToggle and Clickable helper components, we can utilize the UI of the Toggle, whilst being able to style the card however we want.

```jsx
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

### Vue

Card is an interactive layout component to display information.

> Use in entire app

```js
import { Card } from '@warp-ds/vue'
app.use(Card)
```

> Use in one component and special imports

You can import the component like so:

```js
import { wCard } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wCard } from '@warp-ds/vue/card'
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| selected | boolean |  | If the card is selected |
| flat | boolean |  | Removes box shadow around card |
| as | string | div | The DOM element to emit |

### Elements

Card is an interactive layout component to display information.

```html
<w-card selected="">
  <div class="m-20">This example shows a card that looks selected</div>
</w-card>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| selected | boolean |  | If the card is selected |
| clickable | boolean |  | Applies styling to indicate click-ability |
| flat | boolean |  | Removes box shadow around card |

#### Selected 

You can control whether the card looks "selected" by setting the `selected` attribute OR property.

Attribute:

```html
<w-card selected="">
  <div class="m-20">This example shows a card that looks selected</div>
</w-card>
```

Property:

```html
<w-card id="card-selected-property-example">
  <div class="m-20">This example shows a card that looks selected</div>
</w-card>
<script>document.querySelector('#card-selected-property-example').selected = true;</script>
```

#### Clickable 

Whenever you add event listeners or use the onclick attribute, you should set the component's `clickable` attribute. This ensures that things such as keyboard navigation works as expected.

```html
<w-card clickable="" onclick="alert('clicked!');">
  <div class="m-20">This example shows content as a clickable div</div>
</w-card>
```

#### Flat 

If you need to give the component a flat look, set the `flat` attribute.

```html
<w-card flat="">
  <div class="m-20">This example shows content with a flat look</div>
</w-card>
```

#### Semantics 

When you need the component to behave like a section, article or what have you, you should set the `role` attribute.

```html
<w-card role="section">
  <div class="m-20">This example shows the card behaving like a section</div>
</w-card>
```

#### Click event handler example 

You can register click events with onclick or addEventListener as per any other HTML element. When you do so, be sure to set the `clickable` attribute on the element for styling and accessibility reasons.

```html
<w-card class="mt-10 mr-10" clickable="" onclick="this.selected=!this.selected">
  <img class="h-128 w-full object-cover"
    src="https://source.unsplash.com/random/402x402" alt="Description">
  <p class="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4
    text-12">
    Ukens bolig
  </p>
  <div class="p-16">
    <p class="text-12 text-gray-300">DNB Eiendom</p>
    <p>
      Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a.
      vv/fyring.
    </p>
    <p class="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
    <p class="font-bold my-8">
      52 m
      <span style="font-size: 10px; vertical-align: super; margin-right: 5px">
        2 </span>
      Totalpris: 4 869 039 kr
    </p>
    <p class="text-14 text-gray-400 mb-0">
      Eier (Selveier) <span class="text-gray-200">•</span> Leilighet
      <span class="text-gray-200">•</span> 2 soverom
    </p>
  </div>
</w-card>
```

#### Anchor link example 

Keep in mind that if you wish to make the Card a clickable anchor card, you must add a div as the very first element with the attribute `aria-owns` set to the id of the title element. In this example we set it to the id of `title` and assign the `h3` this id.

You should follow these semantics, but styling is up to you.

```html
<w-card>
  <div aria-owns="title"></div>
  ...
  <h3 id="title">
    <a href="..." title="content"> content </a>
  </h3>
  ...
</w-card>
```

Full code example:

```html
<w-card class="mt-10 mr-10">
  <div aria-owns="title"></div>
  <img class="h-128 w-full object-cover"
    src="https://source.unsplash.com/random/402x402" alt="Description">
  <p class="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4
    text-12">
    Ukens bolig
  </p>
  <div class="p-16">
    <p class="text-12 text-gray-300">DNB Eiendom</p>
    <h3 class="text-16 font-normal text-gray-800" id="title">
      <a href="//finn.no" target="_blank" title="Stilfull og gjennomgående
        3-roms m/balkong. Oppusset i 2019.
        Inkl. bl.a. vv/fyring." class="text-current hover:no-underline
        focus:no-underline">
        Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a.
        vv/fyring.
      </a>
    </h3>
    <p class="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
    <p class="font-bold my-8">
      52 m
      <span style="font-size: 10px; vertical-align: super; margin-right: 5px">
        2 </span>
      Totalpris: 4 869 039 kr
    </p>
    <p class="text-14 text-gray-400 mb-0">
      Eier (Selveier) <span class="text-gray-200">•</span> Leilighet
      <span class="text-gray-200">•</span> 2 soverom
    </p>
  </div>
</w-card>
```
