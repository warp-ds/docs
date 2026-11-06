# Navigation bar - Accessibility

A navigation bar shows the screen title, a back button and the actions for the screen.

<ComponentsStatus />

## General

The Warp navigation bar is the native iOS navigation bar with Warp styling. Focus order, VoiceOver and Dynamic Type come from the platform. Warp does not add custom accessibility behaviour.

Every bar button needs a text label. If a button shows only an icon, add an `.accessibilityLabel` (SwiftUI) or set `accessibilityLabel` (UIKit) that names the action, such as "Close".

## Touch targets

Bar buttons use the system size. If you build a custom bar button, keep its tappable area at least 44 × 44 pt.

## iOS (VoiceOver)

- The screen title is read as a heading.
- The back button is read with the title of the previous screen, or "Back".
- Bar buttons are read with their label, as buttons, in the order in which they appear.
- The primary style changes only the look of a button. Do not rely on colour alone to show which action is primary; use a clear label.

<component-questions />
