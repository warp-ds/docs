# Badge

Badges are used to highlight a relevant piece of information, like status or category.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/badge/overview), [Usage](https://warp-ds.github.io/docs/components/badge/usage), [Styling](https://warp-ds.github.io/docs/components/badge/styling), [Accessibility](https://warp-ds.github.io/docs/components/badge/accessibility), [React](https://warp-ds.github.io/docs/components/badge/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/badge/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/badge/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/badge/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/badge/frameworks/ios)

**Framework support:** Android, Elements, iOS, React, Vue

## Overview

Badges are used to highlight a relevant piece of information, like status or category.

Badges are small, contextual elements used to display concise, informative labels. They highlight relevant information such as statuses, categories, counts, roles, or activity indicators, helping users quickly identify and differentiate items at a glance.

Visually styled and colour-coded to indicate contextual metadata.

Related components: [Pill](https://warp-ds.github.io/docs/components/pill/overview)

![Neutral badge](https://warp-ds.github.io/docs/components/badge/badge-variants-neutral.svg)

The neutral badge shows subtle or non-urgent information. It's used for general statuses or relevant information that don't require immediate attention.

![Info badge](https://warp-ds.github.io/docs/components/badge/badge-variants-info.svg)

The info badge shows normal and informative details or context. It's used to highlight key aspects or provide additional context.

![Positive badge](https://warp-ds.github.io/docs/components/badge/badge-variants-positive.svg)

The positive badge is used to indicate a successful action or the completion of a task. It uses the green semantic colour, universally associated with success or positive connotations.

![Warning badge](https://warp-ds.github.io/docs/components/badge/badge-variants-warning.svg)

The warning badge highlights cautionary or advisory information with the intention of drawing more attention than the other variants, but are not yet critical or destructive.

![Negative badge](https://warp-ds.github.io/docs/components/badge/badge-variants-negative.svg)

The negative badge indicates critical or destructive information that requires immediate attention.

![Sponsored badge](https://warp-ds.github.io/docs/components/badge/badge-variants-sponsored.svg)

The sponsored badge is used to indicate that a particular ad appears at the top of a list due to plaid placement by the seller. This variant is reserved exclusively for this use case and should not be used in any other context.

![Price badge](https://warp-ds.github.io/docs/components/badge/badge-variants-price.svg)

The primary purpose of the price badge is to display prices across user journeys. However, this variant can also be used in cases where it needs to stand out prominently on the screen. It features a darker background, creating stronger contrast with the content behind it. While the variant is currently named “price,” its applications extend beyond pricing alone, so the description should reflect its broader use cases.

![Disabled badge](https://warp-ds.github.io/docs/components/badge/badge-variants-disabled.svg)

The disabled badge indicates an inactive state. It should be used when a feature or item exists but is not currently active—for example, when a user has created a draft ad that hasn't been published or made publicly visible. This badge helps communicate that the item is present but not in effect, and no immediate action can be taken.

![Diagram of a badge component anatomy. The badge is a rounded rectangle container with three labeled parts: a leading icon (optional, shown on the left), and a text label in the center displaying the badge content, and the overall container that holds these elements.](https://warp-ds.github.io/docs/components/badge/badge-anatomy.svg)

**1\. Container**

**2\. Leading icon (optional):** Visual indicator that reinforces the badge's label.

**3\. Label:** Communicates what is being highlighted.

## Inline Demo Markup

```html
<div>
        <h3 class="t4">Default</h3>
        <w-badge variant="neutral">Rendered as neutral variant as default</w-badge>
    </div>
    <div>
        <h3 class="h4">Variants</h3>
        <ul class="flex flex-wrap gap-16">
            <w-badge variant="neutral">neutral</w-badge>
            <w-badge variant="info">info</w-badge>
            <w-badge variant="positive">positive</w-badge>
            <w-badge variant="warning">warning</w-badge>
            <w-badge variant="negative">negative</w-badge>
            <w-badge variant="disabled">disabled</w-badge>
            <w-badge variant="price">price</w-badge>
            <w-badge variant="sponsored">sponsored</w-badge>
        </ul>
    </div>
    <div>
        <h3 class="t4">Positioning</h3>
        <div class="relative border border-0 rounded overflow-hidden h-96">
            <img class="w-full h-96 rounded-8 object-cover" src="/images/profile1.jpg" />
            <w-badge variant="price" position="top-left">position: top-left</w-badge>
            <w-badge variant="price" position="top-right">position: top-right</w-badge>
            <w-badge variant="price" position="bottom-left">position: bottom-left</w-badge>
            <w-badge variant="price" position="bottom-right">position: bottom-right</w-badge>
        </div>
    </div>
```

## Usage

-   Badges are used to display small but yet important pieces of information in list views, cards, or dashboards.
-   They should contain clear, easy-to-understand, and descriptive text, paired with intentional colour choices that reinforce their meaning.
-   Use badges in a consistent way across your product to help users become familiar with their meaning.
-   Use badges consistently across your product to help users quickly recognise and understand their purpose.

-   Use badges to highlight statuses, categories, or important updates.

-   Don't use badges for large amounts of text, such as long descriptions, or critical information that users must engage with directly.
-   Avoid using multiple badges in one place, which can clutter the UI and overwhelm users.
-   Don't use badges for actions. They should be non-interactive.

-   Badges are non-interactive UI elements, meaning that no state changes are expected when users hover or tap/click on them.
-   A badge's width automatically adjusts to fit its content, so it's important to keep the text concise. Overly long text can break the layout or require fallback behaviours such as truncation or text wrapping.

Badges can be used as standalone elements or placed within a parent container, such as a card. When placing a badge inside a container, make sure to set the appropriate position prop so that the badge renders with the correct border radius. This ensures the badge visually aligns with the container's corner radius and overall style.

Although possible, avoid placing more than one badge per container.

![Mobile app screen showing a list of items for sale, each with a standalone badge indicating status such as "Active", "Draft", "Sold", or "Expired".](https://warp-ds.github.io/docs/components/badge/badge-placement-1.svg)  
![Card component displaying a job listing with a "Deadline" badge positioned at the top left of the card.](https://warp-ds.github.io/docs/components/badge/badge-placement-2.svg)

-   Use descriptive text (use adjectives and avoid verbs).
-   Avoid using multiple words.

## Styling

Badges are used to highlight a relevant piece of information, like status or category.

Even though the badge is implemented as a slot (container), the spacing between its elements should always follow the specifications defined below. Respecting these measurements ensures consistent alignment, readability, and visual balance across all use cases.

![Badge component with an icon on the left and text label, demonstrating spacing: 8px padding above and 4px padding on the left, right, and bottom.](https://warp-ds.github.io/docs/components/badge/badge-style-measurements.svg)

**Measurements:**

-   Padding-left: `8px`
-   Padding-top: `4px`
-   Padding-right: `s8px`
-   Padding-bottom: `4px`
-   Gap: `4px`

## Accessibility

Badges are used to highlight a relevant piece of information, like status or category.

By itself, the badge component only provides a consistent visual styling to text. Product teams should consider how the badges will be used, and how to provide semantic/programmatic information for screen reader users.

## Frameworks

### React

Badges are used to highlight a relevant piece of information, like status or category.

You can import the component like so:

```js
import { Badge } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Badge } from '@warp-ds/react/components/badge';
```

```jsx
<Badge>Default badge rendered as neutral variant</Badge>
<Badge variant="info">Info variant badge</Badge>
<Badge variant="price" position="top-left">Price badge with a top-left position</Badge>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| as | string | div | The DOM element to emit |
| variant | 'neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'price', 'sponsored' | 'neutral' |  |
| position | 'top-left', 'top-right', 'bottom-right', 'bottom-left' | undefined | Used for absolute positioning of the badge within a container |
| children | Element \| Element[] \| string |  | Content of the Badge component |
| className | string |  | Additional CSS classes to apply to the component |
| style | CSSProperties |  | CSS styles to inline on the component |

### Vue

Badges are used to highlight a relevant piece of information, like status or category.

> Use in entire app

```js
import { Badge } from '@warp-ds/vue';
app.use(Badge);
```

> Use in one component and special imports

You can import the component like so:

```js
import { wBadge } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wBadge } from '@warp-ds/vue/badge';
```

```template
<w-badge>Default badge rendered as neutral variant</w-badge>
<w-badge variant="info">Info variant badge</w-badge>
<w-badge variant="price" position="top-left">Price badge with a top-left position</w-badge>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| as | string | div | The DOM element to emit |
| variant | 'neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'price', 'sponsored' | 'neutral' |  |
| position | 'top-left', 'top-right', 'bottom-right', 'bottom-left' | undefined | Used for absolute positioning of the badge within a container |

### Elements

Badges are used to highlight a relevant piece of information, like status or category.

#### Neutral 

```html
<w-badge variant="neutral">Badge text</w-badge>
```

#### Info 

```html
<w-badge variant="info">Badge text</w-badge>
```

#### Positive 

```html
<w-badge variant="positive">Badge text</w-badge>
```

#### Warning 

```html
<w-badge variant="warning">Badge text</w-badge>
```

#### Negative 

```html
<w-badge variant="negative">Badge text</w-badge>
```

#### Disabled 

```html
<w-badge variant="disabled">Badge text</w-badge>
```

#### Price 

```html
<w-badge variant="price">Badge text</w-badge>
```

#### Sponsored 

```html
<w-badge variant="sponsored">Badge text</w-badge>
```

#### Positioned 

```html
<div style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px; overflow: hidden;">
  <w-badge variant="price" position="top-right">Badge</w-badge>
</div>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| variant | 'neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'price', 'sponsored' | 'neutral' |  |
| position | 'top-left', 'top-right', 'bottom-right', 'bottom-left' | undefined | Used for absolute positioning of the badge within a container |

## Inline Demo Markup

```html
<w-badge variant="neutral">Badge text</w-badge>
```

```html
<w-badge variant="info">Badge text</w-badge>
```

```html
<w-badge variant="positive">Badge text</w-badge>
```

```html
<w-badge variant="warning">Badge text</w-badge>
```

```html
<w-badge variant="negative">Badge text</w-badge>
```

```html
<w-badge variant="disabled">Badge text</w-badge>
```

```html
<w-badge variant="price">Badge text</w-badge>
```

```html
<w-badge variant="sponsored">Badge text</w-badge>
```

```html
<div style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px; overflow: hidden;">
  <w-badge variant="price" position="top-right">Badge</w-badge>
</div>
```

### Android

Badges are used to highlight a relevant piece of information, like status or category.

```kotlin
@Composable
fun WarpBadge(
    modifier: Modifier = Modifier,
    text: String,
    style: WarpBadgeStyle = WarpBadgeStyle.Neutral,
    alignmentStyle: WarpBadgeAlignment = WarpBadgeAlignment.None,
    icon: WarpIconResource? = null
)
```

The default style for the badge is Neutral.

```kotlin
WarpBadge(
    text = "Success",
    style = WarpBadgeStyle.Success,
    alignment = Alignment.BottomStart
    )
```

There are a variety of styles and alignments supported for the badge component:

```kotlin
WarpBadgeStyle {
    Info,
    Success,
    Warning,
    Error,
    Disabled,
    Neutral,
    Sponsored,
    Price
}

WarpBadgeAlignment {
    None,
    TopStart,
    TopEnd,
    BottomStart,
    BottomEnd
}
```

To support layouts still written in xml the WarpBadge can be used as a custom view.

```xml
<com.schibsted.nmp.warp.components.legacy.WarpBadgeView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Warp badge!"
    app:alignmentStyle="topEnd"
    app:warpBadgeStyle="sponsored" />
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | The text to be displayed on the badge |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the badge |
| style | WarpBadgeStyle.Neutral WarpBadgeStyle.Info WarpBadgeStyle.Success WarpBadgeStyle.Warning WarpBadgeStyle.Error WarpBadgeStyle.Disabled WarpBadgeStyle.Sponsored WarpBadgeStyle.Price | WarpBadgeStyle.Neutral | Sets the appearance of the badge |
| alignmentStyle | WarpBadgeAlignment.None WarpBadgeAlignment.TopStart WarpBadgeAlignment.TopEnd WarpBadgeAlignment.BottomStart WarpBadgeAlignment.BottomEnd | WarpBadgeAlignment.None | Sets the alignment style for the badge |
| icon | WarpIconResource? | null | Sets the icon for the badge |

### iOS

Badges are used to highlight a relevant piece of information, like status or category.

```swift
Warp.Badge(
    text: String,
    icon: Warp.Icon? = nil,
    variant: Warp.BadgeVariant,
    position: Warp.BadgePosition = .default
)
```

```swift
Warp.Badge(
    text: "Success",
    variant: .success,
    position: .bottomLeft
)
```

There are a variety of variants and positions supported for the badge component:

```swift
enum Warp.BadgeVariant {
    /// Used to convey general information that isn’t critical.
    case info
    /// Used to communicate success.
    case success
    /// Used to communicate warning.
    case warning
    /// Used to communicate error.
    case negative
    /// Used to communicate disabled.
    case disabled
    /// Used to communicate sponsored.
    case sponsored
    /// Used to communicate neutral.
    case neutral
    /// Used to communicate price.
    case price
}

enum Warp.BadgePosition {
    case `default`
    case topLeft
    case topRight
    case bottomLeft
    case bottomRight
}
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.Badge(
    text: "Success",
    variant: .success,
    position: .bottomLeft
).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | The text to display inside the badge. |
| variant | Warp.BadgeVariant |  | The style of the badge. Use one of the predefined BadgeVariant values: .info, .success, .warning, .negative, .disabled, .sponsored, .neutral, or .price |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| icon | Warp.Icon? | nil | The optional icon to display inside the badge. |
| position | Warp.BadgePosition | .default | The corner position for the badge. Use one of the predefined BadgePosition values: .default, .topLeft, .topRight, .bottomLeft, or .bottomRight |
