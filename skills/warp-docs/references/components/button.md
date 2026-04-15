# Button

Buttons initiate events or actions within a page, informing users of what to expect next.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/button/overview), [Usage](https://warp-ds.github.io/docs/components/button/usage), [Accessibility](https://warp-ds.github.io/docs/components/button/accessibility), [React](https://warp-ds.github.io/docs/components/button/frameworks/react), [React 19](https://warp-ds.github.io/docs/components/button/frameworks/react-19), [Vue](https://warp-ds.github.io/docs/components/button/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/button/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/button/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/button/frameworks/ios)

**Framework support:** Android, Elements, iOS, React, React 19, Vue

## Overview

Buttons initiate events or actions within a page, informing users of what to expect next.

## Inline Demo Markup

```html
<div class="flex flex-wrap gap-16">
        <w-button variant="primary">Primary</w-button>
        <w-button variant="primary" loading>Loading</w-button>
        <w-button variant="utility">Utility</w-button>
        <w-button variant="secondary">Secondary</w-button>
        <w-button variant="secondary" quiet>Secondary Quiet</w-button>
        <w-button variant="negative">Negative</w-button>
        <w-button variant="negative" quiet>Negative Quiet</w-button>
        <w-button variant="utility" quiet><w-icon name="Share" size="small"></w-icon></w-button>
        <w-button variant="link">Link</w-button>
        <w-button full-width variant="primary">Primary full width</w-button>
    </div>
```

## Usage

> This page is still in progress in the public docs.

## Accessibility

Buttons initiate events or actions within a page, informing users of what to expect next.

If the button doesn't have visible text content, such as when used with only an icon, an `aria-label` prop must be provided for accessibility.

## Frameworks

### React

Buttons initiate events or actions within a page, informing users of what to expect next.

You can import the component like so:

```js
import { Button } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Button } from '@warp-ds/react/components/button';
```

```jsx
<Button>Save</Button>
```

#### Primary 

The primary button is a call to action. As a general rule, there should only be one of them on the screen. This guides the user towards the happy path.

```jsx
<Button primary>Save</Button>
```

#### Negative 

Used for destructive actions, like deletion. Shouldn't be used on the same screen as a primary button.

```jsx
<Button negative>Delete</Button>
```

#### Secondary 

Secondary buttons are without background, and are often used for secondary actions. This is the default, so you may simply omit the secondary property unless you want to use it with `quiet` variation.

```jsx
<div className="flex space-x-32">
  <Button secondary>Save</Button>
  <Button>Save</Button>
</div>
```

#### Loading/In progress 

Used for visual feedback that the action the user triggered is loading.

```jsx
<Button loading>Save</Button>
```

#### Small 

```jsx
<Button small>Small</Button>
```

#### Utility 

The `utility` button combined with `quiet` replaces the deprecated button `pill` prop.

```jsx
<Button utility quiet><IconShare16 /></Button>
```

#### Link 

Buttons will be rendered as an anchor (a tag) if they use an `href` attribute.

```jsx
<Button href="https://google.no">Link</Button>
```

But if you need a button to look like a link, use the `link` property.

```jsx
<Button link>Link</Button>
```

However, it is not recommended to use `link` property in combination with the `href` attribute. If there is a need to have an anchor (a tag) that should still look like a link, the recommendation is to instead use the [`<a>` HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).

#### Disabled 

Disabled is an anti-pattern and is not supported. There will always be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons.

#### Full width 

The fullWidth prop sets the button's width to its parent's width.

```jsx
<Button fullWidth primary>Full width</Button>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| className | string |  | Additional classes to include |
| style | CSSProperties |  | CSS styles to inline on the component |
| type | "button"\|"submit"\|"reset" | button | Button type, only applied when href is not set. |
| primary | boolean | false | Set the button to be a primary, call to action button. Can be combined with small. |
| secondary | boolean | false | Set the button to be a secondary button. Can be combined with quiet and small. |
| negative | boolean | false | Set the button to be a negative, destructive style button. Can be combined with quiet and small. |
| utility | boolean | false | Set the button to be a utility style button. Can be combined with small and quiet. |
| quiet | boolean | false | Quieten down the button, can be combined with other button types. |
| small | boolean | false | Set the button to be a small size, can be combined with other button types. |
| link | boolean | false | Set the button to look like a link. Can be combined with small. Should not be combined with href |
| pill | boolean | false | Set the button to look like a pill style button. @deprecated use utility together with quiet instead. |
| loading | boolean | false | Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type. |
| href | string |  | Set the href for the location where clicking the button will take you to. Uses an a tag instead of a button tag for the underlying implementation. Should not be combined with link |
| target | string |  | Anchor target, see The Anchor element / MDN Web Docs. |
| rel | string |  | The relationship of the linked URL. |
| fullWidth | boolean |  | Sets the button's width to its parent's width. Useful especially on mobile when button should take full width. |

### React 19

Buttons initiate events or actions within a page, informing users of what to expect next.

You can import the component like so:

```js
import { Button } from '@warp-ds/components/react/button';
```

```jsx
<Button>Default</Button>
```

#### Primary 

The primary button is a call to action. As a general rule, there should only be one of them on the screen. This guides the user towards the happy path.

```jsx
<Button variant="primary">Primary</Button>
```

#### Negative 

Used for destructive actions, like deletion. Shouldn't be used on the same screen as a primary button.

```jsx
<Button variant="negative">Negative</Button>
```

#### Secondary 

Secondary buttons are without background, and are often used for secondary actions. This is the default, so you may simply omit the secondary property unless you want to use it with `quiet` variation.

```jsx
<Button variant="secondary">Secondary</Button>
```

#### Utility 

The `utility` button.

```jsx
<Button variant="utility">Utility</Button>
```

#### Link 

Button to look like a link, use the `link` property.

```jsx
<Button variant="link">button</Button>
```

#### Negative Quiet 

The `negativeQuiet` button.

```jsx
<Button variant="negativeQuiet">Negative-Quiet</Button>
```

#### Utility Quiet 

The `utilityQuiet` button.

```jsx
<Button variant="utilityQuiet">utility-Quiet</Button>
```

#### Loading/In progress 

Used for visual feedback that the action the user triggered is loading.

```jsx
<Button loading>Default loading</Button>
```

#### Small 

```jsx
<Button size="small">Default small</Button>
```

#### Full width 

The fullWidth prop sets the button's width to its parent's width.

```jsx
<Button fullWidth>Full width</Button>
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | ReactNode |  | The contents of the Button |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| className | string |  | Additional classes to include |
| style | CSSProperties |  | CSS styles to inline on the component |
| type | "button"\|"submit"\|"reset" | button | Button type, only applied when href is not set. |
| variant | 'primary' \| 'secondary' \| 'negative' \| 'utility' \| 'overlay' \| 'overlayInverted' \|'quiet'\| 'negativeQuiet' \| 'utilityQuiet'\| 'overlayQuiet' \| 'overlayInvertedQuiet' \| 'link' |  | Set the correct variant on the button. |
| size | 'small' \| 'default' | default | Set the button to be either small or default size. |
| loading | boolean | false | Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type. |
| fullWidth | boolean | false | Sets the button's width to its parent's width. Useful especially on mobile when button should take full width. |
| hasIconOnly | boolean |  | Facilitate a round button for icon. |

### Vue

Buttons initiate events or actions within a page, informing users of what to expect next.

> Use in entire app

```js
import { Button } from '@warp-ds/vue';
app.use(Button);
```

> Use in one component and special imports

You can import the component like so:

```js
import { wButton } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wButton } from '@warp-ds/vue/button';
```

```html
<w-button primary>Click me</w-button>
<w-button>Click me</w-button>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | string |  | Interchangeable with the default slot for labelling |
| href | string |  | When set, an anchor tag will be used instead of a button. Should not be combined with variant link |
| type | string | button | Controls the button's type, unused when href is present |
| fullWidth | boolean |  | Sets the button's width to its parent's width. Useful especially on mobile when button should take full width. |

#### Variants 

| Variant | Modifiers | Notes |
| --- | --- | --- |
| primary | quiet, small, loading |  |
| secondary | quiet, small, loading |  |
| negative | quiet, small, loading |  |
| link | small |  |
| utility | small, loading, quiet |  |
| pill |  | @deprecated use utility together with quiet instead. |

### Elements

Buttons initiate events or actions within a page, informing users of what to expect next.

```html
<w-button variant="primary">Primary button</w-button>
```

**Do:**

-   Use the `<w-button>` component when you need a button that looks like a button.
-   Use the `<w-button>` component when you need a button that looks like a link.

**Do Not:**

-   Use the `<w-button>` component when you need a link that looks like a button. In that case, use the native `<w-link>`tag.
-   Use the `<w-button>` component when you need a link that looks like a link. In that case, use the native `<a>`tag.

The following table illustrates use cases and which element to use for the purpose.

| if desired behaviour is | and desired styling is | then use |
| --- | --- | --- |
| link | button | w-link |
| button | button | w-button |
| link | link | a |
| button | link | w-button |

#### Primary 

The primary button is a call to action. Can be combined with "small" attribute.

```html
<w-button variant="primary">Primary button</w-button>
<w-button variant="primary" small>Primary button small</w-button>
```

#### Secondary 

The secondary button is for secondary or tertiary actions. Can be combined with "small" and "quiet" attributes. "secondary" is the default value of the "variant" attribute.

```html
<w-button variant="secondary">Secondary button</w-button>
<w-button variant="secondary" small>Secondary button small</w-button>
```

#### Negative 

The negative button is for emphasizing actions that can be destructive or have negative consequences if taken. Can be combined with "small" and "quiet" attributes.

```html
<w-button variant="negative">Negative button</w-button>
<w-button variant="negative" small>Negative button small</w-button>
```

#### Utility 

```html
<w-button variant="utility">Utility button</w-button>
<w-button variant="utility" small>Utility button small</w-button>
```

The `utility` variant combined with `quiet` replaces the deprecated `pill` variant.

```html
<w-button variant="utility" quiet="">
  <w-icon-share-16></w-icon-share-16>
</w-button>
```

#### Link 

Style the button to look like a link

```html
<w-button variant="link">Link button</w-button>
<w-button variant="link" small>Link button small</w-button>
```

#### Quiet 

By default, buttons have a visible stroke and fill. Quiet buttons do not have this visible stroke or fill and should only be used for secondary actions within a button group. Quiet buttons have the same padding rules as other action buttons and reveal a button-like background color when hovered.

```html
<w-button quiet="">Quiet secondary button</w-button>
<w-button quiet="" variant="negative">Quiet negative button</w-button>
<w-button quiet="" variant="utility">Quiet utility button</w-button>
```

#### Link 

Buttons will be rendered as an anchor (a tag) if they use the `href` attribute.

```html
<w-button href="https://google.no">Button as anchor</w-button>
```

But if you need a button to look like a link, use the `link` variant.

```html
<w-button variant="link">Link button</w-button>
```

However, it is not recommended to use the `link` variant in combination with the `href` attribute. If there is a need to have an anchor (a tag) that should still look like a link, the recommendation is to instead use the [`<a>` HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).

#### Loading state 

To show the user that the action they triggered has begun, buttons have an in progress or loading state.

```html
<w-button variant="primary" loading="">Primary button loading</w-button>
```

#### Full width 

The fullWidth prop sets the button's width to its parent's width.

```html
<div class="w-full">
  <w-button full-width variant="primary">Primary button full width</w-button>
</div>
```

#### Disabled state 

Disabled is an anti-pattern and is not supported. There will always be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons.

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | "button"\|"submit"\|"reset" | button | Button type, only applied when href is not set. |
| variant | "primary" \| "secondary" \| "negative" \| "utility" \| "link" \| "~~pill~~" | secondary | Variant of button. pill has been @deprecated. Use utility together with quiet instead. |
| quiet | boolean | false |  |
| small | boolean | false |  |
| loading | boolean | false |  |
| href | string |  | Set the href for the location where clicking the button will take you to. Uses an a tag instead of a button tag for the underlying implementation. Should not be combined with variant link |
| target | string |  | Anchor target, see The Anchor element / MDN Web Docs. |
| rel | string |  | The relationship of the linked URL. |
| fullWidth | boolean |  | Sets the button's width to its parent's width. Useful especially on mobile when button should take full width. |

### Android

Buttons initiate events or actions within a page, informing users of what to expect next.

There are 2 options - button with pre-defined content and custom content. This showcases the pre-defined option with a text and an optional leading or trailing icon.

```kotlin
@Composable
fun WarpButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    style: WarpButtonStyle = WarpButtonStyle.Primary,
    maxLines: Int = 1,
    loading: Boolean = false,
    @DrawableRes leadingIcon: Int? = null,
    leadingIconContentDescr: String? = null,
    @DrawableRes trailingIcon: Int? = null,
    trailingIconContentDescr: String? = null,
    small: Boolean = false,
    iconModifier: Modifier = Modifier
)

@Composable
fun WarpButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    style: WarpButtonStyle = WarpButtonStyle.Primary,
    maxLines: Int = 1,
    loading: Boolean = false,
    leadingIcon: @Composable (() -> Unit)? = null,
    trailingIcon: @Composable (() -> Unit)? = null,
    small: Boolean = false
)
```

To add custom content follow this syntax:

```kotlin
@Composable
fun WarpButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    style: WarpButtonStyle = WarpButtonStyle.Primary,
    loading: Boolean = false,
    small: Boolean = false,
    content: @Composable RowScope.() -> Unit
)
```

The button supports a variety of styles, including a small version for each of these:

```kotlin
WarpButtonStyle {
    Primary,
    Secondary,
    Quiet,
    Negative,
    NegativeQuiet,
    Utility,
    UtilityQuiet,
    UtilityOverlay,
}
```

The primary button is a call to action. As a general rule, there should only be one of them on the screen. This guides the user towards the happy path. This is the default style.

```kotlin
WarpButton(
    onClick = { }, 
    style = WarpButtonStyle.Primary, 
    text = "Save"
)
```

Secondary buttons are without background, and are often used for secondary actions. Also available as `quiet` style.

```kotlin
WarpButton(
    onClick = { }, 
    style = WarpButtonStyle.Secondary, 
    text = "Save"
)
WarpButton(
    onClick = { }, 
    style = WarpButtonStyle.Quiet, 
    text = "Save"
)
```

Used for destructive actions, like deletion. Shouldn't be used on the same screen as a primary button.

```kotlin
WarpButton(
    onClick = { }, 
    style = WarpButtonStyle.Negative, 
    text = "Cancel"
)
```

Used for visual feedback that the action the user triggered is loading.

```kotlin
var loading by remember { mutableStateOf(false) }
var buttonText by remember { mutableStateOf("Save") }
val onClickAction = { }

WarpButton(
    onClick = onClickAction, 
    style = WarpButtonStyle.Primary, 
    text = buttonText,
    loading = loading
)
```

```kotlin
var enabled by remember { mutableStateOf(false) }

WarpButton(
    onClick = { }, 
    style = WarpButtonStyle.Secondary, 
    text = "Edit",
    enabled = enabled
)
```

An optional leading or trailing icon can be displayed at the start of the button text. There are 2 options - by supplying a drawable id or by using the WarpIcon component. WarpIcon handles content description for each brand automatically.

```kotlin
WarpButton(
    onClick = { },
    style = WarpButtonStyle.Secondary,
    text = "With icon",
    leadingIcon = R.drawable.ic_duck,
    leadingIconContentDescr = "Duck icon"
)

WarpButton(
    onClick = { },
    style = WarpButtonStyle.Secondary,
    text = "With icon",
    trailingIcon = R.drawable.clock,
    trailingIconContentDescr = R.string.clock
)

WarpButton(
    onClick = { },
    style = WarpButtonStyle.Secondary,
    text = "With Warp icon",
    leadingIcon = { WarpIcon(icon = icons.clock, size = dimensions.icon.small) }
)
```

To support layouts still written in xml the WarpButton can be used as a custom view.

```xml
<com.schibsted.nmp.warp.components.WarpButtonView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:warpButtonStyle="primary"
    app:buttonLeadingIcon="@drawable/duck"
    app:buttonleadingIconContentDescr="@string/duck"
    app:buttonTrailingIcon="@drawable/clock"
    app:buttonTrailingIconContentDescr="@string/clock"
    app:buttonText="Send"
    app:loading="false"
    app:small="false"
    app:enabled="true"/>
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | The text to be displayed on the button |
| onClick | () -> Unit |  | Lambda to be invoked when clicked |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| style | WarpButtonStyle.Primary WarpButtonStyle.Secondary WarpButtonStyle.Quiet WarpButtonStyle.Negative WarpButtonStyle.NegativeQuiet WarpButtonStyle.Utility WarpButtonStyle.UtilityQuiet WarpButtonStyle.UtilityOverlay | WarpButtonStyle.Primary | Controls the appearance of the button |
| enabled | Boolean | true | Sets the button in disabled mode |
| modifier | Modifier | Modifier | Sets the modifier for the button |
| maxLines | Integer | 1 | Limits the lines of the text on the button |
| loading | Boolean | false | Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type |
| leadingIcon | Int or @Composable () -> Unit | null | The id of the icon drawable resource or the WarpIcon component to be displayed in the button before the text |
| leadingIconContentDescr | String | null | The content description of the icon |
| trailingIcon | Int or @Composable () -> Unit | null | The id of the icon drawable resource or the WarpIcon component to be displayed in the button after the text |
| trailingIconContentDescr | String | null | The content description of the icon |
| small | Boolean | false | Set to show a smaller slimmed version of the button |
| iconModifier | Modifier | Modifier | Sets the modifier for the icon |

### iOS

Buttons initiate events or actions within a page, informing users of what to expect next.

```swift
Warp.Button(
    title: String,
    leadingIcon: Warp.Icon? = nil,
    trailingIcon: Warp.Icon? = nil,
    action: @escaping () -> Void,
    type: Warp.ButtonType = .primary,
    size: Warp.ButtonSize = .big,
    isEnabled: Bool = true,
    fullWidth: Bool = false,
    isLoading: Bool = false
)
```

```swift
Warp.Button(title: "Save") { /* Your action goes here */ }
```

There are a variety of different button types and sizes. It also supports disabled or loading state. It can contain a title and leading/trailing icons.

```swift
enum Warp.ButtonType {
    /// Primary button style, used for the main action on a screen.
    case primary
    /// Secondary button style, typically used for less prominent actions, styled as subtitle or caption buttons.
    case secondary
    /// Quiet button style, used for plain buttons without borders, suitable for actions with minimal emphasis.
    case quiet
    /// Critical button style, used for red alert or destructive actions that require attention.
    case critical
    /// Critical Quiet button style, used for plain red alert or destructive buttons without borders.
    case criticalQuiet
    /// Utility button style, used for supplementary or supporting actions, often with a neutral appearance.
    case utility
    /// Utility Quiet button style, used for plain buttons related to supplementary or supporting actions without borders.
    case utilityQuiet
    /// Utility overlay button style, used for actions that overlay other content, often with a transparent or semi-transparent background.
    case utilityOverlay 
}

enum Warp.ButtonSize {
    case big
    case small
}
```

Used for visual feedback that the action the user triggered is loading.

```swift
Warp.Button(
    title: "Saving",
    action: {},
    isLoading: true
)
```

Disabled is an anti-pattern and is not supported. There will ALWAYS be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons.

```swift
Warp.Button(
    title: "Save",
    action: {},
    isEnabled: false
)
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.Button(title: "Save") { /* Your action goes here */ }.uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String |  | The text to be displayed on the button |
| action | @escaping () -> Void |  | Action to be invoked when tapped |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| leadingIcon | Warp.Icon? | nil | Sets the button icon leading the title |
| trailingIcon | Warp.Icon? | nil | Sets the button icon trailing the title |
| type | Warp.ButtonType | .primary | Controls the appearance of the button. Use one of the predefined ButtonType values: .primary, .secondary, .quiet, .critical, .criticalQuiet, .utility, .utilityQuiet, or .utilityOverlay |
| size | Warp.ButtonSize | .big | Sets the size of button. Use one of the predefined ButtonSize values: .big, or .small |
| isEnabled | Bool | true | Indicating that interactions are enabled. |
| fullWidth | Bool | false | Change the width behaviour of the button |
| isLoading | Bool | false | Indicating whether the button is loading. |
