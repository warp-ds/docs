# Card - Frameworks
Card is an interactive layout component to display information.

<ComponentsStatus />

## Elements

<FrameworkTabs />

### Syntax

```html
<w-card selected="">
  <div class="m-20">This example shows a card that looks selected</div>
</w-card>
```

### Props

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| selected | boolean |  | If the card is selected |
| clickable | boolean |  | Applies styling to indicate click-ability |
| flat | boolean |  | Removes box shadow around card |

#### Selected

You can control whether the card looks "selected" by setting the `selected` attribute OR property.

Attribute:
```html example
<w-card selected="">
  <div class="m-20">This example shows a card that looks selected</div>
</w-card>
```

Property:
```html example
<w-card id="card-selected-property-example">
  <div class="m-20">This example shows a card that looks selected</div>
</w-card>
<script>document.querySelector('#card-selected-property-example').selected = true;</script>
```

#### Clickable

Whenever you add event listeners or use the onclick attribute, you should set the component's `clickable` attribute. This ensures that things such as keyboard navigation works as expected.

```html example
<w-card clickable="" onclick="alert('clicked!');">
  <div class="m-20">This example shows content as a clickable div</div>
</w-card>
```

#### Flat

If you need to give the component a flat look, set the `flat` attribute.

```html example
<w-card flat="">
  <div class="m-20">This example shows content with a flat look</div>
</w-card>
```

### Examples

#### Semantics

When you need the component to behave like a section, article or what have you, you should set the `role` attribute.

```html example
<w-card role="section">
  <div class="m-20">This example shows the card behaving like a section</div>
</w-card>
```

#### Click event handler example

You can register click events with onclick or addEventListener as per any other HTML element. When you do so, be sure to set the `clickable` attribute on the element for styling and accessibility reasons.

```html example
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

```html example
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
```html example
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

<component-questions />