# Modal - Usage
A modal is a focused dialog that temporarily blocks the interface to request a specific decision or input. Because it pauses the experience, use it sparingly for high-priority tasks.

<ComponentsStatus />

## What are modals?
Modals is a pattern where we display a view on top of the current page. The most common use of modals is where users' full attention is required for a specific task.

Often seen use cases are for example:  ‘app intro slides’ or ‘payment flows’.

## Open modal
### iOS: ‘Slide in’
A fast transition that pushes the new screen on top of your current screen, from the bottom to the top. Open your Messages app and hit the compose button in the top right corner to see how it works.
LINK

### Android
Quite similar to how it is handled on iOS, except the way the content itself animates.See examples here:
LINK

### Mobile Web
Normal behaviour would be to slide up a new view on top of the current but with a transparent black layer in the back that animates in quickly together with the modal itself.

### Desktop Web
Normal behaviour for a bottom sheet when translated from mobile web to desktop web would be to open a “modal box” centered on the screen on top of the current screen with a shadow (transparent black layer) in between, as full screen modals does not work well on big screens.

## Close modal
### iOS: ‘Slide out’
Similar to how it animates in, just reversed when it slides out again.
LINK

### Android
Similar to how it animates in, just reversed when it slides out again.
LINK

### Mobile Web
Similar to how it animates in, just reversed when it slides out again.

### Desktop Web
Similar to how it animates in, just reversed when it slides out again.

## Best practices
### Modals should always support scroll view
When the content exceeds the height of the modal, scrolling should be supported, where modal header and bottom CTA’s are available at all time. Remember that users are able to scale and zoom on their devices, which means we always support scroll view when needed.

### Modals for handheld devices
Modals should be displayed full screen on handheld devices to support complex views and keep focus on single tasks.

### Always use default navigation bar in top of modals
The consistency makes it easy for users to recognise and for us to develop/maintain.

### Use only if it gives a clear benefit
Modals take users out of their current context, so it’s important only to use for tasks requiring exclusive attention.

### Our modals always contain a close button
It is important to always give users the option to close the modal and return to the previous view. The “close” button needs to be in the right side, so we can support a left-sided “back” button for horizontal in/out navigation within the modal view.

### Our modals support regular in/out navigation
While always offering the ability to close the entire modal, we must also support regular horizontal in/out navigation within a modal view.

Keep the top left of the modal navigation bar open to always support a “back button”.

### Never present a modal on top of a modal
When users close a modal, they expect to return to the previous view. When closing a modal directs a user into another modal, they can loose track of where they are.

### Alert users upon close with unsaved input
Consider displaying an alert if users have unsaved information in the modal. Explain the potential data loss and give the user the possibility to confirm if they want to close or not.

### Support ‘drag down’ gesture
Our modals always supports “drag down”. This makes it easier for left handed users to close the modals, without having to stretch their thumb for the top right close button.

<component-questions />