<script setup>
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

A link is interactive text that serves as a lightweight navigational element. It directs users to another location, such as a different website, a specific section on the same page, or an external resource.

See the component in Figma: [Warp - Components / Link](https://www.figma.com/design/pLorEdyAMCZXoxkaCSgREO/Warp-Portal---Documentation?node-id=2436-1497&m=dev)

Related components: [Button](https://www.figma.com/design/pLorEdyAMCZXoxkaCSgREO/Warp-Portal---Documentation?node-id=2392-6379&m=dev)

## Example
<ThemeSwitcher />
<link-example />

## Variants

### Text link

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/link/link-text-styled.svg" alt="Text link example" />
  </div>  
  <div class="py-16">
  This is the default and recommended link variant. It renders as hyperlinked text and can be used either as a standalone element or inline within a block of text.
  </div>
</div>

### Button styled

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/link/link-button-styled.svg" alt="Button styled link example" />
  </div>  

  <div class="py-16">
  Alternative variant in which the link is visually styled as a button (web only). This variant is not recommended, but it is still available in Warp for legacy support.
  </div>
</div>

## Anatomy

::: image-block
![A visual diagram of a text link with two labeled parts. The link reads “This is a link” and has a trailing external link icon. Label 1 points to the underlined blue hyperlink text, while Label 2 points to the trailing icon. Below the diagram, a legend explains: Hyperlinked text/text link: Communicates what is being linked to. Trailing icon: Visual indicator that reinforces the purpose of the text link (optional).](/components/link/link-anatomy.svg)
:::

1. <b>Hyperlinked text/text link:</b> Communicates what is being linked to.
2. <b>Trailing icon:</b> Visual indicator that reinforces the purpose of the text link (optional).

