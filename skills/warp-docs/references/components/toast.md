# Toast

Toasts are brief user feedback messages that overlay content.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/toast/overview), [Usage](https://warp-ds.github.io/docs/components/toast/usage), [Accessibility](https://warp-ds.github.io/docs/components/toast/accessibility), [React 19](https://warp-ds.github.io/docs/components/toast/frameworks/react-19), [Elements](https://warp-ds.github.io/docs/components/toast/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/toast/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/toast/frameworks/ios)

**Framework support:** Android, Elements, iOS, React 19

## Overview

Toasts are brief user feedback messages that overlay content.

A toast overlay is used to provide system status notifications, such as error, completion, and loading progress messages. The icons and colours are available, which must be selectively used according to the component's attention level.

![Positive toast](https://warp-ds.github.io/docs/components/toast/overview-variants-positive.svg)

The positive toast uses the green semantic colour and includes a checkmark icon (Success) to support clarity for those with colour vision deficiency. **It’s used to indicate a successful action or the completion of a task.**

![Warning toast](https://warp-ds.github.io/docs/components/toast/overview-variants-warning.svg)

The warning toast uses the orange semantic colour and features a triangular warning icon (Warning) to aid those with colour vision deficiency in recognising the message tone. **It should be used when the message needs to draw more attention than the other variants.**

![Negative toast](https://warp-ds.github.io/docs/components/toast/overview-variants-negative.svg)

The negative toast uses the red semantic colour and includes an error icon (Error) to help those with colour vision deficiency understand the message tone. **It’s used to indicate an error or failure.**

![Example of a success toast message with a green border and light green background. The toast contains the text "Toast message" and is surrounded by four numbered highlights: (1) the left border of the toast container, (2) a circular checkmark icon indicating success, (3) the toast message text itself, and (4) a close button represented by an "X" icon on the far right side of the toast.](https://warp-ds.github.io/docs/components/toast/toast-anatomy.svg)

1.  Toast container
2.  Icon
3.  Text
4.  Close button (optional)

## Usage

Toasts are brief user feedback messages that overlay content.

-   Toasts automatically disappear after a predefined timeout of 5000 ms ("short"), 10000 ms ("long") or "infinite" (6000000 ms), depending on the context or the length of the message.
-   When appropriate, and if the message isn’t critical, the toast can also be dismissed manually using the close button.
-   Toasts have a minimum width of 328px, and a maximum width of 420px to maintain readability on wide viewports.

-   Toasts shouldn’t interrupt the user’s experience.
-   They should appear at the bottom of the user interface.

A toast is used for global notifications of small importance that are not critical and do not need to interrupt the user’s flow. It can be triggered by either a system event or user interaction.

-   **For immediate attention:** If the notification requires users’ attention right away, consider using an [Alert](https://warp-ds.github.io/docs/components/alert/overview) or [Modal](https://warp-ds.github.io/docs/components/modal/overview) instead.
-   **For long-term global information:** If the notification conveys information that is relevant to all users or a group of users over a longer period, consider using an [Alert](https://warp-ds.github.io/docs/components/alert/overview) instead.

Toast notifications are positioned at the bottom centre of the screen, 16px above the viewport edge. They overlay the content without shifting the layout and remain visible even while scrolling.

We do not recommend placing toasts in any other part of the viewport.

![Example of toast placement at the bottom of the page on mobile](https://warp-ds.github.io/docs/components/toast/toast-placement-1.svg)

![Text: Example of toast](https://warp-ds.github.io/docs/components/toast/toast-position-1.svg)  
![Example of toast position on FINN.no](https://warp-ds.github.io/docs/components/toast/toast-position-2.svg)

## Accessibility

Toasts are brief user feedback messages that overlay content.

From an accessibility perspective, toasts should never contain interactive elements, as these should always appear in the same location as the action that triggered them. Additionally, auto-clearing toasts based on a timeout violate WCAG 2 SC 2.2.1, unless the information they contain is either redundant (i.e. also available elsewhere in a persistent manner) or insignificant to all people. You are also advised to avoid putting information in a toast that cannot be re-accessed in any other way due to the impermanent nature of the current toast implementation.

Because of these limitations, we consider the use of toasts to be somewhat of an anti-pattern, and recommend exploring alternative approaches wherever possible. That said, you may still use toasts, as long as you avoid interactive elements like links or close buttons.

## Frameworks

### React 19

Toasts are brief user feedback messages that overlay content.

[Android](https://warp-ds.github.io/docs/components/toast/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/toast/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/toast/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/toast/frameworks/react-19)

The Toast system consists of two parts. You can import the component like so:

```js
import { addWToast, WToastContainer } from "@warp-ds/components/react/toast";
```

`WToastContainer` — A React component that renders all toast messages. It uses a React Portal to position itself at the bottom of the body. This placement helps avoid layout issues and ensures screen readers can access the toast content properly (a11y compliant).

`addWToast` — A function you can call from anywhere in your application to trigger a new toast. This works both inside and outside of React components.

You create a new toast by giving it a message and a variant:

```js
addWToast({
  text: 'I am a toast message',
  variant: 'positive',
});
```

#### Duration 

```js
addWToast({
  text: 'You did the thing!'
  variant: 'positive',
  duration: 10000
});
```

#### Dismiss button 

WARNING!

The toast component is designed to automatically close by default, and it is recommended to avoid adding the manual dismiss button due to accessibility guidelines. If the toast absolutely must be dismissible, set the `dismissible` property to `true`.

**Read more** under [Accessibility](https://warp-ds.github.io/docs/components/toast/accessibility).

```js
addWToast({
  text: 'I am a toast message'
  variant: 'positive',
  dismissible: true
});
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | string | undefined | The toast message. |
| variant | 'positive' \| 'warning' \| 'negative' | undefined | Defines the type of toast. |

#### Optional props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| duration | 5000 \| 10000 \| 6000000 | 5000 | Sets how long the toast stays visible in the user interface before it dismisses automatically (in milliseconds). |
| dismissible | boolean | false | Adds a close button. Not recommended from an accessibility perspective. |

### Elements

Toasts are brief user feedback messages that overlay content.

[Android](https://warp-ds.github.io/docs/components/toast/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/toast/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/toast/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/toast/frameworks/react-19)

The toast is intended to be used programmatically. JavaScript APIs are provided to create, update and remove toasts from a page while managing things like placement on the page for you.

Toast is a bit different from other packages in Warp Elements. You need to import functions from the package and call them as needed.

Import functions for working with toasts:

```js
import { toast, removeToast, updateToast } from '@warp-ds/elements/toast';
```

You create a new toast by giving it a message:

```js
toast('This is a toast');
```

Create a new toast giving it a message and some options and then get back an id that can be used later to remove or edit the toast:

```js
const id = toast('This is a toast', { type: 'warning' });
```

Update an existing toast by id:

```js
updateToast(id, { text: 'This is a toast' });
```

#### Success 

```js
toast('message goes here', { type: 'success' });
```

#### Warning 

```js
toast('message goes here', { type: 'warning' });
```

#### Error 

```js
toast('message goes here', { type: 'error' });
```

#### Success with close button 

WARNING! The close icon is designed to automatically close by default, and it is recommended to avoid adding the manual close function due to accessability reasons. If the toast absolutely must be dismissible, set the `canclose` property to `true`.

```js
toast('message goes here', { type: 'success', canclose: true });
```

#### Auto removal with duration 

```js
toast('message goes here', { type: 'success', duration: 2500 });
```

#### Text content 

```js
const id = toast('message goes here'); updateToast({ id, text: 'change the message' });
```

#### Optional props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | 'success' \| 'warning' \| 'error' | 'success' | Type of toast |
| text | string | undefined | The toast message. Only needed when updating text on existing toast |
| duration | number | 5000 | Duration of toast in milliseconds. For accessibility reasons, toasts should never be interactive and therefore need to auto remove. If you must disable auto remove, set duration to Number.POSITIVE_INFINITY. |
| canclose | boolean | false | Adds a close button. WARNING! For accessibility reasons, toasts should not be interactive and canclose should always be false. If the toast absolutely must be dismissible, set this to true. |

### Android

Toasts are brief user feedback messages that overlay content.

[Android](https://warp-ds.github.io/docs/components/toast/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/toast/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/toast/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/toast/frameworks/react-19)

```kotlin
@Composable
fun WarpToast(
    modifier: Modifier = Modifier,
    state: WarpToastState,
    type: WarpToastType = WarpToastType.Success,
    duration: Long = WarpToastDuration.SHORT,
    onDismiss: () -> Unit = { },
)
```

The Toast has a default duration set to SHORT, but other options are also available. Success toast is default but can be also shown in these styles:

```kotlin
enum class WarpToastType {
    Success,
    Warning,
    Error
}

object WarpToastDuration {
    const val SHORT = 3000L
    const val LONG = 10000L
    const val INFINITE = 6000000L
}
```

The toast can be used by creating it once and then shown by setting text using the WarpToastState. Duration can be adjusted as well as the style. If needed it is possible to set a custom onDismiss function, but if not set it will show for the built in duration time until it disappears.

```kotlin
val toastSuccess = remember { WarpToastState() }
val toastWarning = remember { WarpToastState() }
val toastError = remember { WarpToastState() }

WarpButton(modifier = Modifier.padding(bottom = dimensions.space2),
    text = "Show Success toast",
    onClick = {
        toastSuccess.showToast("Toast success")
    })
WarpButton(modifier = Modifier.padding(bottom = dimensions.space2),
    text = "Show Warning toast",
    onClick = {
        toastWarning.showToast("Toast warning")
    })
WarpButton(modifier = Modifier.padding(bottom = dimensions.space2),
    text = "Show Negative toast",
    onClick = {
        toastError.showToast("Toast error")
    })
WarpToast(
    state = toastSuccess
    )
WarpToast(
    state = toastWarning,
    type = WarpToastType.Warning,
    duration = WarpToastDuration.LONG
    )
WarpToast(
    state = toastError,
    type = WarpToastType.Error,
    duration = WarpToastDuration.INFINITE
    )
```

Not supported

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| state | WarpToastState |  | State of the toast used in hide/show logic and to set the text |

#### Optional props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | The modifier for the Toast. |
| type | WarpToastType.Success WarpToastType.Warning WarpToastType.Error | WarpToastType.Success | Style of the toast |
| duration | WarpToastDuration.SHORT WarpToastDuration.LONG WarpToastDuration.INFINITE | WarpToastDuration.SHORT | Duration the Toast is shown |
| onDismiss | () -> Unit | {} | The function to be invoked when dismissed |

### iOS

Toasts are brief user feedback messages that overlay content.

[Android](https://warp-ds.github.io/docs/components/toast/frameworks/android)[Elements](https://warp-ds.github.io/docs/components/toast/frameworks/elements)[iOS](https://warp-ds.github.io/docs/components/toast/frameworks/ios)[React 19](https://warp-ds.github.io/docs/components/toast/frameworks/react-19)

```swift
Warp.Toast(
    style: Warp.ToastStyle,
    title: String,
    toastEdge: Warp.ToastEdge,
    duration: Duration = .short,
    showCloseButton: Bool = true,
    isPresented: Binding<Bool>
)
```

You can create the `Toast` yourself or add it as a modifier to your view.

```swift
Warp.Toast(
    style: .success,
    title: "This is a toast",
    toastEdge: .top,
    duration: .short,
    isPresented: .constant(true)
)

.warpToast(
    style: .success,
    title: "This is a toast",
    toastEdge: .top,
    duration: .short,
    isPresented: .constant(true)
)
```

There are a variety of variants and positions supported for the toast component:

```swift
enum Warp.ToastStyle {
    /// Disruptive message describes a critical, fatal error that affects action. Example: Internal server error
    case error
    /// Positive message, which describes successful action. Example: Item added
    case success
    /// Non-critical message, which describes unsuccessful action. Example: Internet disconnected
    case warning
}

enum Warp.ToastEdge {
    case top
    case bottom
}
```

```swift
enum Warp.Toast.Duration {
    /// Short duration, typically used for quick feedback messages.
    /// Default is 5 seconds.
    case short
    /// Long duration, typically used for more significant messages that require user attention.
    /// Default is 10 seconds.
    case long
    /// Infinite duration, typically used for messages that require user interaction to dismiss.
    case infinite
    /// Custom duration time interval
    case custom(interval: TimeInterval)
}
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.Toast(
    style: .success,
    title: "This is a toast",
    toastEdge: .top,
    isPresented: .constant(true)
).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| style | Warp.ToastStyle |  | Sets the style and icon of the Toast. Use one of the predefined ToastStyle values: .error, .success, or .warning |
| title | String |  | The title to be displayed in the Toast |
| toastEdge | Warp.ToastEdge |  | The position of the toast to be displayed. Use one of the predefined ToastEdge values: .top, or .bottom |
| isPresented | Binding Bool |  | The binding to control the visibility |

#### Optional props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| duration | Warp.Toast.Duration.short Warp.Toast.Duration.long Warp.Toast.Duration.custom(interval:) | .short | Duration the Toast is shown |
| showCloseButton | Bool | true | Whether to show the close button on the Toast |
