# Box

Box is a layout component used for separating content areas on a page.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/box/overview), [Usage](https://warp-ds.github.io/docs/components/box/usage), [Accessibility](https://warp-ds.github.io/docs/components/box/accessibility), [React](https://warp-ds.github.io/docs/components/box/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/box/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/box/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/box/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/box/frameworks/ios)

**Framework support:** Android, Elements, iOS, React, Vue

## Overview

Box is a layout component used for separating content areas on a page.

## Inline Demo Markup

```html
<div>
        <h3 class="h4">Neutral</h3>
        <w-box neutral>
            <p>This is the <strong>neutral</strong> variant of the box element</p>
        </w-box>
    </div>
    <div>
        <h3 class="h4">Info</h3>
        <w-box info>
            <p>This is the <strong>info</strong> variant of the box element</p>
        </w-box>
    </div>
    <div>
        <h3 class="h4">Bordered</h3>
        <w-box bordered>
            <p>This is the <strong>bordered</strong> variant of the box element</p>
        </w-box>
    </div>
```

## Usage

> This page is still in progress in the public docs.

## Accessibility

Box is a layout component used for separating content areas on a page.

Use the ARIA `role` attribute to provide semantic meaning to a Box element. If no role property is supplied, it will default to `role="region"`. To remove the default role attribute, supply an empty role (`role=""`). Consider using more suitable roles for your specific Box, as described on [MDN WAI-ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#aria_role_types).

## Frameworks

### React

Box is a layout component used for separating content areas on a page.

You can import the component like so:

```js
import { Box } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Box } from '@warp-ds/react/components/box';
```

```js
<Box info>
    <p>This is <strong>info</strong> variant of the box component</p>
</Box>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| as | string | div | The DOM element to emit |
| bleed | boolean | false | Will make a box full-width on sm-size |
| bordered | boolean | false | Adds a lovely border |
| info | boolean | false | Will style the box with colors for indicating that it has informative content |
| neutral | boolean | false | Will style the box in a neutral fashion |
| role | string | region | Sets the ARIA role attribute to provide semantic meaning. To remove the default role attribute, supply an empty role (role=""). |

### Vue

Box is a layout component used for separating content areas on a page.

> Use in entire app

```js
import { Box } from '@warp-ds/vue';
app.use(Box);
```

> Use in one component and special imports

You can import the component like so:

```js
import { wBox } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wBox } from '@warp-ds/vue/box';
```

```vue
<w-box info>
    <p>This is <strong>info</strong> variant of the box component</p>
</w-box>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| as | string | div | The DOM element to emit |
| bleed | boolean | false | Will make a box full-width on sm-size |
| bordered | boolean | false | Adds a lovely border |
| info | boolean | false | Will style the box with colors for indicating that it has informative content |
| neutral | boolean | false | Will style the box in a neutral fashion |
| role | string | region | Sets the ARIA role attribute to provide semantic meaning. To remove the default role attribute, supply an empty role (role=""). |

### Elements

Box is a layout component used for separating content areas on a page.

```js
<w-box info>
    <p>This is <strong>info</strong> variant of the box component</p>
</w-box>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| bleed | boolean | false | Will make a box full-width on sm-size |
| bordered | boolean | false | Adds a lovely border |
| info | boolean | false | Will style the box with colors for indicating that it has informative content |
| neutral | boolean | false | Will style the box in a neutral fashion |
| role | string | region | Sets the ARIA role attribute to provide semantic meaning. To remove the default role attribute, supply an empty role (role=""). |

### Android

Box is a layout component used for separating content areas on a page.

```kotlin
@Composable
fun WarpBox(
    modifier: Modifier = Modifier,
    boxStyle: WarpBoxStyle = WarpBoxStyle.Neutral,
    icon: @Composable (() -> Unit)? = null,
    heading: String? = null,
    text: String? = null,
    link: String? = null,
    linkAction: (() -> Unit)? = null,
    buttonText: String? = null,
    buttonAction: (() -> Unit)? = null,
)

@Composable
fun WarpBox(
    modifier: Modifier = Modifier,
    boxStyle: WarpBoxStyle = WarpBoxStyle.Neutral,
    content: @Composable () -> Unit
)
```

The default style for the box is Neutral and will be used if nothing is passed in the boxStyle param.

```kotlin
WarpBox(
    text = "Neutral Warp box"
)
```

There are three types of box styles:

```kotlin
WarpBoxStyle {
    Neutral,
    Info,
    Bordered
}
```

There are two ways the box component can be used - by providing custom content or by using some of the pre-defined layout options. To add custom content:

```kotlin
WarpBox(
    modifier = Modifier
        .padding(dimensions.space1),
    boxStyle = WarpBoxStyle.Info
) {
    WarpText(
        modifier = Modifier
            .padding(dimensions.space2)
            .fillMaxWidth(),
        text = "This is the info style with custom content."
    )
}
```

It is possible to add an optional heading, icon, body text, link and a secondary button or all together. The box layout will adjust depending on which optional components are specified.

```kotlin
WarpBox(
    modifier = Modifier
        .padding(vertical = dimensions.space1)
        .fillMaxWidth(),
    boxStyle = WarpBoxStyle.Info,
    heading = "Hello Box! ",
    icon = {
        Icon(
            imageVector = Icons.Filled.AccountCircle,
            contentDescription = "Content description for the icon",
            tint = colors.icon.primary
        )
    },
    text = "This box has all optional UI elements.",
    link = "This is a link",
    linkAction = { /* Click function here */ },
    buttonText = "This is a button",
    buttonAction = { /* Click function here */ }
)
```

To support layouts still written in xml the WarpBox can be used as a custom view. To add functionality to the optional link and button, set click listeners. When providing an icon drawable, please also include a content description string for accessibility.

```kotlin
fun setLinkOnClickListener(onClick: OnClickListener?)
fun setButtonOnClickListener(onClick: OnClickListener?)
```

```xml
<com.schibsted.nmp.warp.components.legacy.WarpBoxView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:boxText="This is the box text"
    app:boxHeading="Warp Box!"
    app:boxStyle="info"
    app:boxIcon="@drawable/ic_duck"
    app:boxIconContentDescr="Icon content description"
    app:boxIconColor="@color/warp_icon_primary"
    app:boxLink="This is the link"
    app:boxButtonText="Button"
 />
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the box |
| boxStyle | WarpBoxStyle.Neutral WarpBoxStyle.Info WarpBoxStyle.Bordered | WarpBoxStyle.Neutral | Sets the style of the box |
| icon | @Composable () -> Unit? | null | Sets the icon for the box. Please always include contentDescription text for accessibility. |
| heading | String | null | The heading to be displayed in the box |
| text | String | null | The body text to be displayed in the box |
| link | String | null | The link text to be displayed in the box |
| linkAction | () -> Unit | null | Lambda to be invoked when clicked on the link |
| buttonText | String | null | The button text to be displayed on the button in the box |
| buttonAction | () -> Unit | null | Lambda to be invoked when clicked on the button |

### iOS

Box is a layout component used for separating content areas on a page.

```swift
Warp.Box(
    style: Warp.BoxStyle,
    title: String?,
    shouldShowToolTipImage: Bool = true,
    subtitle: String,
    link: ButtonConstructor? = nil,
    button: Warp.Button? = nil
)
```

ButtonConstructor is a typealias for `(title: String, action: () -> Void)`.

```swift
Warp.Box(
    style: .info,
    title: "Success",
    subtitle: "Your message goes here"
)
```

There are a variety of variants and combinations supported for the box component. Supporting a button and a link, a title, a description and an icon.

```swift
enum Warp.BoxStyle {
    /// Used to group information that separates itself from other elements in a page layout.
    /// Use this box to show generic information that isn’t necessarily directly related to the main focus content on your page.
    case neutral

    /// Used to highlight content on a page. It differs from an “Info alert”, 
    /// which is used in a more contextual manner, where the information is presented to the user as a prompt to take action.
    /// Use this box to show information that is related, or relevant to the main focus content on your page.
    case info

    /// Can be used on coloured backgrounds, when a neutral or info box doesn’t work.
    /// It can also be used as an alternative way to group information on a page that might need a variation of grouped information.
    /// Use this box when showing generic information on coloured or low contrast backgrounds.
    case bordered
}
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.Box(
    style: .info,
    title: "Success",
    subtitle: "Your message goes here"
).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| style | Warp.BoxStyle |  | Preferred style of box. Use one of the predefined BoxStyle values: .neutral, .info, .bordered |
| title | String? |  | Text that will be shown as box's heading. |
| subtitle | String |  | Text that will be shown after title in the middle of the box. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| shouldShowToolTipImage | Bool | true | Flag indicating tooltip image should be shown. |
| link | (title: String, action: () -> Void)? | nil | Tuple that will provide a title and an action for creating a link view below subtitle. Passing nil will skip adding link view. |
| button | Warp.Button? | nil | A button view below link. Passing nil will skip adding button view. |
