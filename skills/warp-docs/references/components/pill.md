# Pill

Pill is a type of button that is often used as a filter, but can also be used as a rounded button for overlays, etc.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/pill/overview), [Usage](https://warp-ds.github.io/docs/components/pill/usage), [React](https://warp-ds.github.io/docs/components/pill/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/pill/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/pill/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/pill/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/pill/frameworks/ios)

**Framework support:** Android, Elements, iOS, React, Vue

## Overview

Pill is a type of button that is often used as a filter, but can also be used as a rounded button for overlays, etc.

## Inline Demo Markup

```html
<div class="flex flex-wrap gap-16">
        <w-pill>Filter Pill</w-pill>
        <w-pill can-close>Closable Filter Pill</w-pill>
        <w-pill suggestion>Suggestion Pill</w-pill>
        <w-pill suggestion can-close>Closable Suggestion Pill</w-pill>
    </div>
```

## Usage

> This page is still in progress in the public docs.

## Frameworks

### React

Pill is a type of button that is often used as a filter, but can also be used as a rounded button for overlays, etc.

You can import the component like so:

```js
import { Pill } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Pill } from '@warp-ds/react/components/pill';
```

#### Filter Pill 

```jsx
<Pill label="Filter Pill" />
```

#### Filter Pill with changed pill screen reader label 

```jsx
<Pill label="Filter Pill" openSRLabel="Activate Filter" />
```

#### Closable Filter Pill 

```jsx
<Pill canClose label="Closable Filter Pill" />
```

#### Closable Filter Pill with changed close button screen reader label 

```jsx
<Pill canClose label="Closable Filter Pill" closeSRLabel="Deactivate Filter" />
```

#### Suggestion Pill 

```jsx
<Pill suggestion label="Suggestion Pill" />
```

#### Closable Suggestion Pill 

```jsx
<Pill suggestion canClose label="Closable Suggestion Pill" />
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | string | undefined | The text content of the pill. |
| icon | ReactNode | undefined | Used to render an icon inside the pill. You can pass any valid HTML. This will override the label property. @deprecated Do not use. |
| canClose | boolean | false | Whether the pill should be removable via a close button. |
| openSRLabel | string | "Open filter" | Label read by screen readers when targeting the pill. |
| closeSRLabel | string | "Remove filter {label}" | Label read by screen readers when targeting the close button. |
| suggestion | boolean | false | Whether the pill should be rendered as a suggestion. |
| className | string | undefined | Additional classes applied to the button element of the pill as long as canClose is set to false. |

#### Events 

| Name | Description |
| --- | --- |
| onClick | Action to be called when the pill is clicked. |
| onClose | Action to be called when the close button is clicked. |

### Vue

Pill is a type of button that is often used as a filter, but can also be used as a rounded button for overlays, etc.

> Use in entire app

```js
import { Pill } from '@warp-ds/vue';
app.use(Pill);
```

> Use in one component and special imports

You can import the component like so:

```js
import { wPill } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wPill } from '@warp-ds/vue/pill';
```

#### Filter Pill 

```vue
<w-pill label="Filter Pill" />
```

#### Filter Pill with changed pill screen reader label 

```vue
<w-pill label="Filter Pill" open-SR-label='Activate Filter'/>
```

#### Closable Filter Pill 

```vue
<w-pill can-close label="Closable Filter Pill" />
```

#### Closable Filter Pill with changed close button screen reader label 

```vue
<w-pill can-close label="Closable Filter Pill" close-SR-label='Deactivate Filter'/>
```

#### Suggestion Pill 

```vue
<w-pill suggestion label="Suggestion Pill" />
```

#### Closable Suggestion Pill 

```vue
<w-pill suggestion can-close label="Closable Suggestion Pill" />
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | string | undefined | The text content of the pill. |
| can-close | boolean | false | Whether the pill should be removable via a close button. |
| suggestion | boolean | false | Whether the pill should be rendered as a suggestion. |
| open-SR-label | string | "Open filter" | Label read by screen readers when targeting the pill |
| close-SR-label | string | "Remove filter {label}" | Label read by screen readers when targeting the close button |

#### Events 

| Name | Description |
| --- | --- |
| close | the close button is pressed |

### Elements

Pill is a type of button that is often used as a filter, but can also be used as a rounded button for overlays, etc.

#### Filter Pill 

```html
<w-pill>Filter Pill</w-pill>
```

#### Filter Pill with changed pill screen reader label 

```html
<w-pill open-sr-label='Activate Filter'>Filter Pill</w-pill>
```

#### Closable Filter Pill 

```html
<w-pill can-close>Closable Filter Pill</w-pill>
```

#### Closable Filter Pill with changed close button screen reader label 

```html
<w-pill can-close close-sr-label='Deactivate Filter'>Closable Filter Pill</w-pill>
```

#### Suggestion Pill 

```html
<w-pill suggestion>Suggestion Pill<w-pill/>
```

#### Closable Suggestion Pill 

```html
<w-pill suggestion can-close>Closable Suggestion Pill</w-pill>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| open-sr-label | string | "Open filter" | Label read by screen readers when targeting the pill |
| close-sr-label | string | "Remove filter {label}" | Label read by screen readers when targeting the close button |
| can-close | boolean | false | Whether the pill should be removable via a close button. |
| suggestion | boolean | false | Whether the pill should be rendered as a suggestion. |

#### Events 

| Name | Description |
| --- | --- |
| w-pill-click | Event to be called when the pill is clicked. |
| w-pill-close | Event to be called when the close button is clicked. |

### Android

Pill is a type of button that is often used as a filter, but can also be used as a rounded button for overlays, etc.

```kotlin
@Composable
fun WarpPill(
    modifier: Modifier = Modifier,
    text: String,
    onClick: () -> Unit,
    style: WarpPillStyle = WarpPillStyle.Filter,
    selected: Boolean = false,
    closable: Boolean = false,
    icon: WarpIconResource? = null
)
```

The default style for the pill using the primary color for background. Accepts a custom. If closable is set to true the pill will show a close icon and override any custom icon if provided.

```kotlin
WarpPill(
    modifier = Modifier,
    text = "Filter",
    onClick = { },
    style = WarpPillStyle.Filter,
    selected = false,
    closable = true
    )

WarpPill(
    modifier = Modifier,
    text = "Filter",
    onClick = { openLink() },
    style = WarpPillStyle.Filter,
    selected = false,
    icon = icons.linkExternal
    )
```

Suggestion style pill using gray color for background. As with the Filter pill, if a custom icon is provided it will be displayed on the right side and if closable is set to true the pill will show a close icon.

```kotlin
WarpPill(
    modifier = Modifier,
    text = "Suggestion",
    onClick = { },
    style = WarpPillStyle.Suggestion,
    selected = false,
    closable = true
    )

WarpPill(
    modifier = Modifier,
    text = "Suggestion",
    onClick = { openLink() },
    style = WarpPillStyle.Suggestion,
    selected = false,
    icon = icons.linkExternal
    )
```

To support layouts still written in xml the WarpPill can be used as a custom view.

```xml
<com.schibsted.nmp.warp.components.legacy.WarpPillView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:closable="true"
    app:pillText="Filter pill"
    app:selected="false"
    app:warpPillStyle="filter" />

<com.schibsted.nmp.warp.components.legacy.WarpPillView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:closable="true"
    app:pillText="Suggestion pill"
    app:selected="false"
    app:warpPillStyle="suggestion" />

<com.schibsted.nmp.warp.components.legacy.WarpPillView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:pillText="Suggestion pill"
    app:selected="false"
    app:pillIcon="linkexternal"
    app:warpPillStyle="suggestion" />
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | The text to be displayed on the pill |
| onClick | () -> Unit |  | Lambda to be invoked when clicked |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the pill |
| style | WarpPillStyle.Filter WarpPillStyle.Suggestion | WarpPillStyle.Filter | Sets the appearance of the pill |
| selected | boolean | false | Whether the pill appears in selected mode or not |
| closable | boolean | false | Whether the pill should be removable via a close button. Will override the custom icon |
| icon | WarpIconResource? | null | The icon to be displayed in the pill after the text |

### iOS

Pill is a type of button that is often used as a filter, but can also be used as a rounded button for overlays, etc.

```swift
Warp.Pill(
    text: String,
    icon: Warp.Icon? = nil,
    onTap: @escaping () -> Void = {},
    onClose: (() -> Void)? = nil,
    iconContentDescription: String? = nil,
    style: Warp.PillStyle = .filter
)
```

```swift
Warp.Pill(
    text: "This is a pill"
)
```

There are a variety of variants supported for the pill component:

```swift
enum Warp.PillStyle {
    /// Used to represent a removable value the user has chosen.
    case filter
    /// Used to represent a proposed/recommended value a user can choose.
    case suggestion
}
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.Pill(
    text: "This is a pill"
).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | The text to be displayed on the pill |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| icon | Warp.Icon? | nil | Pill icon. If you provide onClose then the Pill will have a close button instead of this icon. |
| onTap | () -> Void | {} | The action that will trigger on pill tap. |
| onClose | (() -> Void)? | nil | If added will show a close button and replace any provided icon, and the action will trigger on pill close. |
| iconContentDescription | String? | nil | The content description of the icon. Used for accessibility purposes. If not provided and we have onClose the default accessibility text is Close and for the Warp.Icon it is the accessibility of the icon. |
| style | Warp.PillStyle | .filter | The style of the pill (.filter, .suggestion) |
