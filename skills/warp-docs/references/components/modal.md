# Modal

A modal is a focused dialog that temporarily blocks the interface to request a specific decision or input.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/modal/overview), [Usage](https://warp-ds.github.io/docs/components/modal/usage), [Accessibility](https://warp-ds.github.io/docs/components/modal/accessibility), [React](https://warp-ds.github.io/docs/components/modal/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/modal/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/modal/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/modal/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/modal/frameworks/ios)

**Framework support:** Android, Elements, iOS, React, Vue

## Overview

A modal is a focused dialog that temporarily blocks the interface to request a specific decision or input. Because it pauses the experience, use it sparingly for high-priority tasks.

A modal overlays the page and prevents interaction with the underlying UI until the user completes an action (for example, confirm, cancel, or provide required input). This interruption is useful for time-sensitive or high-impact decisions, but it can be disruptive if overused. When a modal is necessary, keep content concise, make the primary action clear, offer a safe dismiss option, and avoid stacking multiple modals.

## Usage

A modal is a focused dialog that temporarily blocks the interface to request a specific decision or input. Because it pauses the experience, use it sparingly for high-priority tasks.

Modals is a pattern where we display a view on top of the current page. The most common use of modals is where users' full attention is required for a specific task.

Often seen use cases are for example: ‘app intro slides’ or ‘payment flows’.

A fast transition that pushes the new screen on top of your current screen, from the bottom to the top. Open your Messages app and hit the compose button in the top right corner to see how it works. LINK

Quite similar to how it is handled on iOS, except the way the content itself animates.See examples here: LINK

Normal behaviour would be to slide up a new view on top of the current but with a transparent black layer in the back that animates in quickly together with the modal itself.

Normal behaviour for a bottom sheet when translated from mobile web to desktop web would be to open a “modal box” centered on the screen on top of the current screen with a shadow (transparent black layer) in between, as full screen modals does not work well on big screens.

Similar to how it animates in, just reversed when it slides out again. LINK

Similar to how it animates in, just reversed when it slides out again. LINK

Similar to how it animates in, just reversed when it slides out again.

Similar to how it animates in, just reversed when it slides out again.

When the content exceeds the height of the modal, scrolling should be supported, where modal header and bottom CTA’s are available at all time. Remember that users are able to scale and zoom on their devices, which means we always support scroll view when needed.

Modals should be displayed full screen on handheld devices to support complex views and keep focus on single tasks.

The consistency makes it easy for users to recognise and for us to develop/maintain.

Modals take users out of their current context, so it’s important only to use for tasks requiring exclusive attention.

It is important to always give users the option to close the modal and return to the previous view. The “close” button needs to be in the right side, so we can support a left-sided “back” button for horizontal in/out navigation within the modal view.

While always offering the ability to close the entire modal, we must also support regular horizontal in/out navigation within a modal view.

Keep the top left of the modal navigation bar open to always support a “back button”.

When users close a modal, they expect to return to the previous view. When closing a modal directs a user into another modal, they can loose track of where they are.

Consider displaying an alert if users have unsaved information in the modal. Explain the potential data loss and give the user the possibility to confirm if they want to close or not.

Our modals always supports “drag down”. This makes it easier for left handed users to close the modals, without having to stretch their thumb for the top right close button.

## Accessibility

A modal is a focused dialog that temporarily blocks the interface to request a specific decision or input. Because it pauses the experience, use it sparingly for high-priority tasks.

Modal needs either aria-label or aria-labelledby to be accessible to screen readers.

All dialogs must have a title. Titles appear in bold at the top of the dialog and use a few words to convey the outcome of what will happen if a user continues with an action. Use the property title for this.

## Frameworks

### React

A modal is a focused dialog that temporarily blocks the interface to request a specific decision or input. Because it pauses the experience, use it sparingly for high-priority tasks.

You can import the component like so:

```js
import { Modal } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Modal } from '@warp-ds/react/components/modal'
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | Element \|Element[] |  | The modal contents |
| open | boolean |  | Whether the modal is open or not |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | string \|Element \|Element[] |  | A string or your own custom elements |
| left | boolean \|Element \|Element[] |  | Whether a default back button should render with an onDismiss() callback. It can also be your own custom element(s). |
| right | boolean \|Element \|Element[] |  | A default close button or your own custom elements |
| footer | Element \|Element[] |  | Buttons passed to the footer |
| className | string |  | Additional classes added to the container |
| id | string |  | An id for the container and ARIA attributes. A random id is generated if none is provided. |
| style | CSSProperties |  | Additional styles to the container. More info about CSSProperties |
| aria-label | number |  | Defines a string value that labels the current element. Must be set if neither aria-labelledby or `` is defined, |
| aria-labelledby | string |  | Identifies the element (or elements) that labels the current element. Must be set if neither aria-label or `` is defined. |
| initialFocusRef | RefObject |  | A reference to the element that should be focused. By default it'll be the first interactive element. More info |

#### Events 

| Name | Description |
| --- | --- |
| onDismiss | () => void |
| onLeftClick | () => void |

```jsx
function Example() {
  const [open, setOpen] = React.useState(false);
  const [left, setLeft] = React.useState(true);
  const [height, setHeight] = React.useState('68%');

  const toggleModal = () => setOpen(!open);

  return (
    <>
      <Button utility onClick={toggleModal}>
        Open modal
      </Button>

      <Modal
        left={left}
        right
        open={open}
        onDismiss={toggleModal}
        title="Hello title"
        footer={
          <Button primary onClick={toggleModal}>
            Confirm
          </Button>
        }
        style={{
          '--w-modal-max-height': height,
          '--w-modal-height': '100%',
        }}
      >
        <div className="space-x-8">
          <button
            onClick={() => setHeight(height === '68%' ? '100%' : '68%')}
            className="button button--utility button--small mb-32"
          >
            Modify height
          </button>
          <button
            onClick={() => setLeft(!left)}
            className="button button--utility button--small mb-32"
          >
            Toggle the back-button
          </button>
        </div>
        <div>
          <h1 className="h4 mb-16">This is a title for the content area</h1>
          <p>
            Life as a shorty shouldn't be so rough. Behold the bold soldier
            control the globe slowly, proceeds to blow, swinging swords like
            Shinobi. The game of chess, is like a swordfight, you must think
            first before you move. My beats travel like a vortex through your
            spine, to the top of your cerebral cortex. I smoke on the mic like
            smoking Joe Frazier, the hell raiser, raising hell with the flavor.
          </p>
          <p>
            I breaks it down to the bone gristle, Ill speaking Scud missile heat
            seeking, Johnny Blazing. Protect Ya Neck, my sword still remain
            imperial before I blast the mic, RZA scratch off the serial.
            Shackling the masses with drastic rap tactics, graphic displays melt
            the steel like blacksmiths. Perpendicular to the square we stay in
            gold like Flair, escape from your dragon's lair in particular. Shame
            on you when you stepped through to The Ol Dirty Bastard straight
            from the Brooklyn Zoo. Protect Ya Neck, my sword still remain
            imperial before I blast the mic, RZA scratch off the serial.
          </p>
          <p>
            Life as a shorty shouldn't be so rough. Handcuffed in the back of a
            bus, forty of us. Rae got it going on pal, call me the rap
            assassinator, rhymes rugged and built like Schwarzenegger. My beats
            travel like a vortex through your spine, to the top of your cerebral
            cortex. Life as a shorty shouldn't be so rough. Well I'm a sire, I
            set the microphone on fire, rap styles vary and carry like Mariah.
          </p>
        </div>
      </Modal>
    </>
  );
}
```

WARP guidelines state the following:

-   The cancel action should always be on the left, while the main action is to the right.

The `onDismiss` prop is optional. It can be dropped to create a modal that won't respond to `esc` key presses and/or clicking outside the modal.

```jsx
function Example() {
  const [open, setOpen] = React.useState(false);
  const [mustAgree, setMustAgree] = React.useState(false);
  const [hasAgreed, setHasAgreed] = React.useState(false);

  const toggleModal = () => {
    if (open && !hasAgreed) {
      setMustAgree(true);
      return;
    }
    setMustAgree(false);
    setOpen(!open);
  };

  return (
    <>
      <Button utility onClick={toggleModal}>
        Open modal
      </Button>

      <Modal
        open={open}
        onDismiss={hasAgreed ? toggleModal : undefined}
        title="Non dismissable"
        footer={
          <>
            {mustAgree && <p className="m-10">You must agree first!</p>}
            <Button primary onClick={toggleModal}>
              Save
            </Button>
          </>
        }
      >
        <p>To go further, you need to agree to these bogus terms</p>
        <Toggle
          type="checkbox"
          label="I agree"
          checked={hasAgreed}
          onChange={(state) => setHasAgreed(state)}
        />
      </Modal>
    </>
  );
}
```

By default, the first interactive element in the modal will be focused when the modal opens. Use `initialFocusRef` to customize this behavior. For instance, this can be used to focus a call-to-action button.

```jsx
function Example() {
  const [open, setOpen] = React.useState(false);
  const focusRef = React.useRef();

  const toggleModal = () => setOpen(!open);

  return (
    <>
      <Button utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal
        open={open}
        initialFocusRef={focusRef}
        title="Customized focus behavior"
        footer={
          <>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary ref={focusRef} onClick={toggleModal}>
              Accept
            </Button>
          </>
        }
      >
        <p>The call to action button has inital focus.</p>
      </Modal>
    </>
  );
}
```

### Vue

A modal is a focused dialog that temporarily blocks the interface to request a specific decision or input. Because it pauses the experience, use it sparingly for high-priority tasks.

> Use in entire app

```js
import { Modal } from '@warp-ds/vue'
app.use(Modal)
```

> Use in one component and special imports

You can import the component like so:

```js
import { wModal } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wModal } from '@warp-ds/vue/modal'
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| v-model | boolean |  | Whether or not to show the modal |
| left | boolean \|object |  | When truthy, will show the left button of the header. Object properties will be used as attributes on the button. |
| right | boolean \|object |  | When truthy, will show the right button of the header. Object properties will be used as attributes on the button. |
| title | string |  |  |
| titleAttrs | object |  | Properties will be set as attributes of the title in the header. |
| headerClasses | string \|object |  | Classes here will be set on the wrapper for the header. |
| contentClasses | string \|object |  | Classes here will be set on the wrapper for the content. |
| contentId | string |  | This id is useful if you need to programmatically scroll content in the modal. |

#### Events 

| Name | Description |
| --- | --- |
| dismiss | A user presses ESC or clicks outside the dialog |
| left | The left title-button has been clicked |
| right | The right title-button has been clicked |
| shown | Modal entrance transitions are complete and content has been mounted |
| hidden | Modal exit transitions are complete and content has been torn down or hidden |

#### Slots 

Note that to dynamically control the left/right slots, one must use the left/right props instead of showing and hiding the slot itself.

#### Slots 

| Name | Description |
| --- | --- |
| default | Content for the modal |
| footer | Footer (button drawer) for the modal - the footer is sticky |
| left | Overrides the default icon (a back arrow) |
| right | Overrides the default icon (an X symbol) |

#### Custom Properties 

Use percentage-based units as opposed to `vh` for adjusting heights. This ensures correct behavior on mobile devices when toolbars show/hide and cause changes to the inner height.

| name | notes |
| --- | --- |
| --w-modal-max-height | The max-height of the modal dialog |
| --w-modal-height | The height of the modal dialog |
| --w-modal-width | The max-width of the modal dialog |

```vue
<w-modal @dismiss="modalIsOpen = false" v-model="modalIsOpen">
  <h1>Hello I am a modal</h1>
</w-modal>
```

### Elements

A modal is a focused dialog that temporarily blocks the interface to request a specific decision or input. Because it pauses the experience, use it sparingly for high-priority tasks.

```js
<div>
  <w-button aria-haspopup='dialog'>
    Open a modal
  </w-button>
  <w-modal>
    <w-modal-header
      slot='header'
      title='An example modal'
    ></w-modal-header>
    <div slot='content'>
      <w-button variant='utility' small>
        Toggle back button
      </w-button>
      <p>
        I bomb atomically, Socrates' philosophies and hypotheses...
      </p>
      <p>
        First I'm gonna getcha, once I gotcha, I gat-cha...
      </p>
    </div>
    <w-modal-footer slot='footer'>
      <w-button variant='primary'>
        OK
      </w-button>
    </w-modal-footer>
  </w-modal>
</div>
```

```js
<div>
  <w-button aria-haspopup="dialog">
    Open a modal
  </w-button>
  <w-modal>
    <w-modal-header slot="header" title="Look a doggo!">
      <img
        slot="top"
        class="h-[256] w-full object-cover"
        src="/pages/public/unocssmusical.jpeg"
        alt="AI-generated picture of a band in colourful setup"
      >
    </w-modal-header>
    <div slot="content">
      <p>I bomb atomically, Socrates' philosophies and hypotheses...</p>
    </div>
    <w-modal-footer slot="footer">
      <w-button variant="primary" id="modal-close-button-two">OK</w-button>
    </w-modal-footer>
  </w-modal>
</div>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| show | boolean | false | Controls if the modal should show or hide |
| ignore-backdrop-clicks | boolean | false | Ignores clicks to the backdrop when true |

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | string |  | A short but descriptive title for the modal |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| back | boolean | false | Whether the modal header should have a back button |
| no-close | boolean | false | Whether the modal header should have a close button |

### Android

A modal is a focused dialog that temporarily blocks the interface to request a specific decision or input. Because it pauses the experience, use it sparingly for high-priority tasks.

```kotlin
@Composable
fun WarpModal(
    modifier: Modifier = Modifier,
    title: String,
    body: String,
    onDismiss: () -> Unit,
    dismissOnClickOutside: Boolean = true,
    dismissOnBackPress: Boolean = true,
    subtitle: String? = null,
    primaryButtonText: String? = null,
    onPrimaryButtonClick: (() -> Unit)? = null,
    secondaryButtonText: String? = null,
    onSecondaryButtonClick: (() -> Unit)? = null,
    showCloseIcon: Boolean = false
)
```

The default style for the modal requires a title and a body text. The buttons displayed are WarpButtons using Primary and Secondary style.

It's possible to add an optional subtitle.

```kotlin
var openModal by remember { mutableStateOf(false) }
if(openModal) {
    WarpModal(
        title = "Hello warp!",
        body = "Some important text here, not too long, not too short.",
        subtitle = "Warp",
        primaryButtonText = "Meow",
        onPrimaryButtonClick = { openModal = false },
        secondaryButtonText = "Nope",
        onSecondaryButtonClick = { openModal = false }
    )
}
```

It's possible to just show one button.

```kotlin
var openModal by remember { mutableStateOf(false) }
if(openModal) {
    WarpModal(
        title = "Hello warp!",
        body = "Wow such button. Much click.",
        subtitle = "Warp",
        primaryButtonText = "Meow",
        onPrimaryButtonClick = { openModal = false }
    )
}
```

It's possible to show a modal without buttons. In this case it is recommended to show the close icon.

```kotlin
var openModal by remember { mutableStateOf(false) }
if(openModal) {
    WarpModal(
        title = "Hello warp!",
        body = "No buttons variant",  
        onDismiss = { openModal = false },
        showCloseIcon = true
    )
}
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String |  | The title to be displayed in the modal |
| body | String |  | The text to be displayed in the modal |
| onDismiss | () -> Unit |  | The lambda to be invoked when closing the modal |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the modal Card |
| subtitle | String | null | The subtitle to be displayed in the modal |
| primaryButtonText | String | null | The text to be displayed on the positive button. |
| onPrimaryButtonClick | () -> Unit | null | The lambda to be invoked on the positive button click. |
| secondaryButtonText | String | null | The text to be displayed on the negative button. |
| onSecondaryButtonClick | () -> Unit | null | The lambda to be invoked on the positive button click. |
| showCloseIcon | Boolean | false | Whether the close icon (X) should be displayed in the top right corner. |
| dismissOnClickOutside | Boolean | true | Whether the modal should be closed when clicking outside of its layout. |
| dismissOnBackPress | Boolean | true | Whether the modal should be closed when pressing back. |

### iOS

A modal is a focused dialog that temporarily blocks the interface to request a specific decision or input. Because it pauses the experience, use it sparingly for high-priority tasks.

```swift
Warp.Modal(
    title: String,
    subtitle: String? = nil,
    bodyText: String,
    primaryButton: ButtonConstructor? = nil,
    secondaryButton: ButtonConstructor? = nil,
    hasCloseButton: Bool = false,
    onDismiss: (() -> Void)? = nil,
    isPresented: Binding<Bool>
)
```

ButtonConstructor is a typealias for `(title: String, action: () -> Void)`.

You can create the `Modal` yourself or add it as a modifier to your view.

```swift
Warp.Modal(
    title: "Modal",
    bodyText: "Body goes here",
    isPresented: $modalIsPresented
)

.warpModal(
    title: "Modal",
    bodyText: "Body goes here",
    dismissOnClickOutside: false,
    isPresented: $modalIsPresented
)
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.Modal(
    title: "Modal",
    bodyText: "Body goes here",
    isPresented: $modalIsPresented
).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String |  | The main title text to be displayed. |
| bodyText | String |  | The main body text content of the modal. |
| isPresented | Binding Bool |  | A binding to control the visibility of the modal. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| subtitle | String? | nil | An optional subtitle text to provide additional context or information. |
| primaryButton | (title: String, action: () -> Void)? | nil | An optional provider for defining the primary button. |
| secondaryButton | (title: String, action: () -> Void)? | nil | An optional provider for defining the secondary button. |
| hasCloseButton | Bool | false | A Boolean value indicating whether a close button should be shown. |
| dismissOnClickOutside | Bool | true | Determines whether the component should be dismissed when the user clicks outside of it. |
| onDismiss | (() -> Void)? | nil | Action to be executed when the Modal is dismissed, either by pressing the Close button or by clicking outside the Modal. |
