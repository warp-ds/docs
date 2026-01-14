# Badge - Overview

Badges are used to highlight a relevant piece of information, like status or category.

<ComponentsStatus />

Badges are small, contextual elements used to display concise, informative labels. They highlight relevant information such as statuses, categories, counts, roles, or activity indicators, helping users quickly identify and differentiate items at a glance.

Visually styled and colour-coded to indicate contextual metadata.

Related components: [Pill](../pill/overview.md)

## Example
<ThemeSwitcher />
<badge-example />

## Variants

### Neutral

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/badge/badge-variants-neutral.svg" alt="Neutral badge" />
  </div>

  <div class="py-16">The neutral badge shows subtle or non-urgent information. It's used for general statuses or relevant information that don't require immediate attention.
  </div>
</div>

### Info

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/badge/badge-variants-info.svg" alt="Info badge" />
  </div>

  <div class="py-16">The info badge shows normal and informative details or context. It's used to highlight key aspects or provide additional context.
  </div>
</div>

### Positive

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/badge/badge-variants-positive.svg" alt="Positive badge" />
  </div>

  <div class="py-16">The positive badge is used to indicate a successful action or the completion of a task. It uses the green semantic colour, universally associated with success or positive connotations.
  </div>
</div>

### Warning

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/badge/badge-variants-warning.svg" alt="Warning badge" />
  </div>

  <div class="py-16">The warning badge highlights cautionary or advisory information with the intention of drawing more attention than the other variants, but are not yet critical or destructive.
  </div>
</div>

### Negative

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/badge/badge-variants-negative.svg" alt="Negative badge" />
  </div>

  <div class="py-16">The negative badge indicates critical or destructive information that requires immediate attention.
  </div>
</div>

### Sponsored

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/badge/badge-variants-sponsored.svg" alt="Sponsored badge" />
  </div>

  <div class="py-16">The sponsored badge is used to indicate that a particular ad appears at the top of a list due to plaid placement by the seller. This variant is reserved exclusively for this use case and should not be used in any other context.
  </div>
</div>

### Price

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/badge/badge-variants-price.svg" alt="Price badge" />
  </div>

  <div class="py-16">The primary purpose of the price badge is to display prices across user journeys. However, this variant can also be used in cases where it needs to stand out prominently on the screen. It features a darker background, creating stronger contrast with the content behind it. While the variant is currently named “price,” its applications extend beyond pricing alone, so the description should reflect its broader use cases.
  </div>
</div>

### Disabled

<div class="grid grid-cols-2 gap-24">
  <div class="py-16">
    <img src="/components/badge/badge-variants-disabled.svg" alt="Disabled badge" />
  </div>

  <div class="py-16">The disabled badge indicates an inactive state. It should be used when a feature or item exists but is not currently active—for example, when a user has created a draft ad that hasn't been published or made publicly visible. This badge helps communicate that the item is present but not in effect, and no immediate action can be taken.
  </div>
</div>

## Anatomy

::: image-block
![Diagram of a badge component anatomy. The badge is a rounded rectangle container with three labeled parts: a leading icon (optional, shown on the left), and a text label in the center displaying the badge content, and the overall container that holds these elements.](/components/badge/badge-anatomy.svg)
:::


**1. Container**

**2. Leading icon (optional):** Visual indicator that reinforces the badge's label.

**3. Label:** Communicates what is being highlighted.

<br>

<component-questions />