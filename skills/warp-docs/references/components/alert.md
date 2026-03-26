# Alert

Alerts show high-signal messages meant to be noticed and prompting users.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/alert/overview), [Usage](https://warp-ds.github.io/docs/components/alert/usage), [React](https://warp-ds.github.io/docs/components/alert/frameworks/react), [React 19](https://warp-ds.github.io/docs/components/alert/frameworks/react-19), [Vue](https://warp-ds.github.io/docs/components/alert/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/alert/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/alert/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/alert/frameworks/ios)

**Framework support:** Android, Elements, iOS, React, React 19, Vue

## Overview

Alerts show high-signal messages meant to be noticed and prompting users.

## Inline Demo Markup

```html
<div>
        <h3 class="h4">Info</h3>
        <w-alert variant="info" show role="status">
            <p>This is the info variant of the alert element</p>
        </w-alert>
    </div>
    <div>
        <h3 class="h4">Positive</h3>
        <w-alert variant="positive" show role="status">
            <p>With an additional description</p>
        </w-alert>
    </div>
    <div>
        <h3 class="h4">Negative</h3>
        <w-alert variant="negative" show>
            <p>With an additional description</p>
        </w-alert>
    </div>
    <div>
        <h3 class="h4">Warning</h3>
        <w-alert variant="warning" show>
            <p>With an additional description</p>
        </w-alert>
    </div>
```

## Usage

> This page is still in progress in the public docs.

## Frameworks

### React

Alerts show high-signal messages meant to be noticed and prompting users.

You can import the component like so:

```js
import { Alert } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Alert } from '@warp-ds/react/components/alert';
```

```js
<Alert type="info" show>
  This is "info" variant of the alert element
</Alert>
```

Use the ARIA live region `role` attribute to provide meaning to the alert element (defaults to "alert"). If you want to remove the role from the alert and assign it to its particular child (e.g. title), you can do so by setting `role` property of the `Alert` component to an empty string and assigning a respective `role` attribute on the child element. Read more about live region `role` attribute on [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#roles_with_implicit_live_region_attributes).

#### Alert with "alert" role on a descendant element 

```js
<Alert type="info" show={show} role="">
  <h3 role="alert" className="t5">
    This is "info" variant of the alert element
  </h3>
  <p>With an additional description</p>
</Alert>
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | 'negative' \| 'positive' \| 'warning' \| 'info' | undefined | Type of Alert |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| show | boolean | undefined | Controls when the alert shows |
| role | string | alert | ARIA live region "role" attribute value |
| className | string | undefined | Additional classes to include |
| style | string | undefined | Additional CSS styles for the container |

### React 19

Alerts show high-signal messages meant to be noticed and prompting users.

You can import the component like so:

```js
import { Alert } from '@warp-ds/components/react/alert';
```

```js
<Alert type="info" show>
  This is "info" variant of the alert element
</Alert>
```

Use the ARIA live region `role` attribute to provide meaning to the alert element (defaults to "alert"). If you want to remove the role from the alert and assign it to its particular child (e.g. title), you can do so by setting `role` property of the `Alert` component to an empty string and assigning a respective `role` attribute on the child element. Read more about live region `role` attribute on [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#roles_with_implicit_live_region_attributes).

#### Alert with "alert" role on a descendant element 

```js
<Alert type="info" show={show} role="">
  <h3 role="alert" className="t5">
    This is "info" variant of the alert element
  </h3>
  <p>With an additional description</p>
</Alert>
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | 'negative' \| 'positive' \| 'warning' \| 'info' | undefined | Type of Alert |
| children | React.ReactNode | undefined | Content to render inside the alert |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| show | boolean | undefined | Controls when the alert shows |
| role | string | alert | ARIA live region "role" attribute value |
| className | string | undefined | Additional classes to include |
| style | React.CSSProperties | undefined | Additional CSS styles for the container |
| id | string | undefined | Used to uniquely identify the alert — for ARIA attributes or other DOM interactions |

### Vue

Alerts show high-signal messages meant to be noticed and prompting users.

> Use in entire app

```js
import { Alert } from '@warp-ds/vue';
app.use(Alert);
```

> Use in one component and special imports

You can import the component like so:

```js
import { wAlert } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wAlert } from '@warp-ds/vue/alert';
```

```vue
<w-alert v-model="showAlert" info title="I am a title">
  <p>I am an excellent message for the user.</p>
</w-alert>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| v-model | boolean | undefined | Controls when the alert shows |
| title | string | undefined | The title for the alert |
| role | string | alert | The aria role for the alert |
| negative | boolean | undefined | Creates a negative alert |
| positive | boolean | undefined | Creates a positive alert |
| warning | boolean | undefined | Creates a warning alert |
| info | boolean | undefined | Creates an info alert |

### Elements

Alerts show high-signal messages meant to be noticed and prompting users.

#### Info 

```html
<w-alert variant="info" show>
  <p>This is "info" variant of the alert element</p>
</w-alert>
```

#### Warning 

```html
<w-alert variant="warning" role="alert" show="">
  <p>This is an alert message</p>
</w-alert>
```

#### Negative 

```html
<w-alert variant="negative" role="alert" show="">
  <p>This is an alert message</p>
</w-alert>
```

#### Positive 

```html
<w-alert variant="positive" role="alert" show="">
  <p>This is an alert message</p>
</w-alert>
```

Use the ARIA live region `role` attribute to provide meaning to the alert element (defaults to "alert"). If you want to remove the role from the alert and assign it to its particular child (e.g. title), you can do so by setting `role` property of the `Alert` component to an empty string and assigning a respective `role` attribute on the child element. Read more about live region `role` attribute on [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#roles_with_implicit_live_region_attributes).

#### Alert with "alert" role on a descendant element 

```html
<w-alert variant="info" show role="">
  <h3 role="alert" class="t5">
    This is "info" variant of the alert element
  </h3>
  <p>With an additional description</p>
</w-alert>
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| variant | 'negative' \| 'positive' \| 'warning' \| 'info' | undefined | Variant of the alert |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| show | boolean | false | Controls when the alert shows |
| role | string | alert | ARIA live region "role" attribute value |

## Inline Demo Markup

```html
<w-alert variant="info" show>
  <p>This is "info" variant of the alert element</p>
</w-alert>
```

```html
<w-alert variant="warning" role="alert" show="">
  <p>This is an alert message</p>
</w-alert>
```

```html
<w-alert variant="negative" role="alert" show="">
  <p>This is an alert message</p>
</w-alert>
```

```html
<w-alert variant="positive" role="alert" show="">
  <p>This is an alert message</p>
</w-alert>
```

```html
<w-alert variant="info" show role="">
    <h3 role="alert" class="t5">
      This is "info" variant of the alert element
    </h3>
    <p>With an additional description</p>
  </w-alert>
```

### Android

Alerts show high-signal messages meant to be noticed and prompting users.

```kotlin
@Composable
fun WarpAlert(
    modifier: Modifier = Modifier,
    type: WarpAlertType = WarpAlertType.Info,
    title: String? = null,
    body: String,
    linkText: String? = null,
    linkAction: (() -> Unit)? = null,
    secondaryButtonText: String? = null,
    secondaryButtonAction: (() -> Unit)? = null,
    quietButtonText: String? = null,
    quietButtonAction: (() -> Unit)? = null,
)
```

The default style for the alert is Info and will be used if nothing is passed in the type param.

```kotlin
WarpAlert(
    type = WarpAlertType.Critical,
    title = "This is the critical variant of the alert element",
    body = "With an additional description"
    )
```

There are four types of alert styles:

```kotlin
WarpAlertType {
    Info,
    Positive,
    Critical,
    Warning
}
```

It is possible to add an optional title, link text, secondary button and a quiet button or all together.

```kotlin
WarpAlert(
    modifier = Modifier.padding(WarpTheme.dimensions.space2),        
    title = "This is the info variant with all options",
    body = "Click here to read more",
    type = WarpAlertType.Warning,
    linkText = "A link to read more here",
    linkAction = {  },
    secondaryButtonText = "Button",
    secondaryButtonAction = {  },
    quietButtonText = "Quiet Button",
    quietButtonAction = {  }
    )
```

To support layouts still written in xml the WarpAlert can be used as a custom view. To add functionality to the optional link and buttons, set click listeners.

```kotlin
fun setLinkOnClickListener(onClick: OnClickListener?)
fun setSecondaryButtonOnClickListener(onClick: OnClickListener?)
fun setQuietButtonOnClickListener(onClick: OnClickListener?)
```

```xml
<com.schibsted.nmp.warp.components.legacy.WarpAlertView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:warpAlertType="critical"
    app:title="This is the title"
    app:body="This is the body"
    app:linkText="This is the link"
    app:quietButtonText="Button"
    app:secondaryButtonText="Button"/>
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| body | String |  | The body text to be displayed in the alert |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String | null | The title to be displayed in the alert |
| modifier | Modifier | Modifier | Sets the modifier for the alert |
| type | WarpAlertType.Info WarpAlertType.Positive WarpAlertType.Critical WarpBadgeStyle.Warning | WarpAlertType.Info | Sets the style and icon of the alert |
| linkText | String | null | The link text to be displayed in the alert |
| linkAction | () -> Unit | null | Lambda to be invoked when clicked |
| secondaryButtonText | String | null | The secondary button text to be displayed in the alert |
| secondaryButtonAction | () -> Unit | null | Lambda to be invoked when clicked |
| quietButtonText | String | null | The quiet button text to be displayed in the alert |
| quietButtonAction | () -> Unit | null | Lambda to be invoked when clicked |

### iOS

Alerts show high-signal messages meant to be noticed and prompting users.

```swift
Warp.Alert(
    style: Warp.AlertStyle,
    title: String,
    subtitle: String,
    link: ButtonConstructor? = nil,
    primaryButton: ButtonConstructor? = nil,
    secondaryButton: ButtonConstructor? = nil
)
```

ButtonConstructor is a typealias for `(title: String, action: () -> Void)`.

```swift
Warp.Alert(
    style: .critical,
    title: "This is the critical variant of the alert component",
    subtitle: "With an additional description"
)
```

There are four types of alert styles:

```swift
enum Warp.AlertStyle {
    /// Used to display messages that provide the user with general information.
    case info
    /// Used to indicate that something is not working as expected or might need attention.
    case warning
    /// Used to indicate a severe problem or error that requires immediate attention.
    case critical
    /// Used to indicate that an action was successful or that a task was completed successfully.
    case success
}
```

It is possible to add an optional link text, primary button and a secondary button or all together.

```swift
Warp.Alert(
    style: .critical,
    title: "This is the critical variant of the alert component",
    subtitle: "With an additional description",
    link: (title: "Link to more information", action: {}),
    primaryButton: (title: "Button", action: {}),
    secondaryButton: (title: "Button", action: {})
)
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.Alert(
    style: .critical,
    title: "This is the critical variant of the alert component",
    subtitle: "With an additional description"
).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| style | Warp.AlertStyle |  | The visual style of the alert, which dictates its colors, icons, and overall appearance. Use one of the predefined AlertStyle values: .info, .warning, .critical, or .success. |
| title | String |  | The primary text displayed at the top of the alert, used to capture the user's attention. |
| subtitle | String |  | Additional information displayed below the title, used to provide further context to the alert. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| link | (title: String, action: () -> Void)? | nil | An optional tuple containing the title and action for a clickable link that appears below the subtitle. |
| primaryButton | (title: String, action: () -> Void)? | nil | An optional tuple containing the title and action for a primary button. |
| secondaryButton | (title: String, action: () -> Void)? | nil | An optional tuple containing the title and action for a secondary button. |
