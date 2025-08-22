<script setup>
  import Vue from './vue.md';
  import Elements from './elements.md';
  import React from './react.md';
  import Android from './android.md';
  import iOS from './ios.md';
  import OtherTable from '../../.vitepress/OtherTable.vue';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';

  const deprecatedIcons = [
  { old: 'AlertWarning', new: 'Warning' },
  { old: 'AlertError', new: 'Error' },
  { old: 'AlertSuccess', new: 'Success' },
  { old: 'AlertInfo', new: 'Info' },
  { old: 'BankId', new: 'BankIdNo' },
  { old: 'BankIdent', new: 'CheckShield' },
  { old: 'Car42', new: 'Minivan' },
  { old: 'Favorite', new: 'Heart' },
  { old: 'File', new: 'FileAdd' },
  { old: 'Honk42', new:'HonkLight' },
  { old: 'Market', new: 'Sofa' },
  { old: 'Nettbil42', new:'NettbilLight' },
  { old: 'RatingEmpty', new:'StarEmpty' },
  { old: 'RatingFull', new:'StarFull' },
  { old: 'RatingHalf', new:'StarHalf' },
  { old: 'Paw16', new:'AnimalPaw' },
  { old: 'Paw24', new:'AnimalPaw' },
  { old: 'Paw32', new:'AnimalPaw' },
  { old: 'PhoneNew', new:'Phone' },
  { old: 'TableSortUp', new:'ArrowUp' },
  { old: 'TableSortDown', new:'ArrowDown' },
  { old: 'TorgetBrowser', new:'Browser' },
  { old: 'TorgetDelivery', new:'Delivery' },
  { old: 'TorgetHeadset', new:'Headset' },
  { old: 'TorgetLamp', new:'Lamp' },
  { old: 'TorgetShipping', new:'Shipping' },
  { old: 'TorgetUsers', new:'UserGroup' },
  { old: 'TorgetVerified', new:'Verified' },
  { old: 'TorgetShopping', new:'ShoppingCart' },
  { old: 'TorgetMixer', new:'Mixer' },
  { old: 'Triangle', new:'Warning' },
  { old: 'TableInfo', new:'Info' },
]
</script>

# Icons
{{ data.description }}

Warp icon library contains of ~300 icons in sizes 16px, 24px and 32px. It's based on the [Streamline icon library](https://home.streamlinehq.com/) with more than 17.000 icons.

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Need new icons?
If you need a new icon or adjustments to an existing one, please make a request in #smp-warp-design-system in Slack.


## Usage

### Typescript support
Starting from `@warp-ds/icons@1.3.0`, we are fully typescript compliant.
You'll need to switch to module & moduleResolution as `NodeNext`.
You can read more about it [here](https://www.typescriptlang.org/docs/handbook/modules/reference.html#node16-nodenext).

### Internationalization
Since warp components are internationalised, you'd need to either set `NMP_LANGUAGE` for server-side rendering of the component, or set html document lang with a two-letter-code, eg: `<html lang="en">`.
The server-side variable is read as `process.env.NMP_LANGUAGE` so you could either define this in your `package.json` script, or use `.env` files to leverage [dotenv](https://github.com/motdotla/dotenv).

<component-questions />

## Examples

The following icons are available in the latest version of `@warp-ds/icons` package.
Check the [Deprecated icons](/components/icons/#deprecated-icons) section if you're migrating from previous major versions or from `@fabric-ds/icons`.

Click any icon to open usage modal.

<icon-example />

## Frameworks

<tabs-content>
  <template #react>
    <react />
  </template>
  <template #vue>
    <vue />
  </template>
  <template #elements>
    <elements />
  </template>
  <template #android>
    <android />
  </template>
    <template #iOS>
    <iOS />
  </template>
</tabs-content>

## Deprecated icons

In `@warp-ds/icons v2.0.0` some icons were renamed or deleted as they had similarly looking equivalents.
Below you can find a list of icons and their respective replacements.

<other-table :headers="['Old icon', 'New icon']" :data="deprecatedIcons" plain-text />
