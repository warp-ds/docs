# Sheet - Accessibility

A sheet presents related content or a focused task over the current screen.

<ComponentsStatus />

## General

Sheets use the native SwiftUI sheet, so focus handling and dismissal come from the platform. Warp styling does not change them.

- Give the sheet content a title so VoiceOver users know what opened.
- Always offer a visible close or done button. Do not rely on the drag gesture alone.
- Keep text and icons readable against the sheet background. Choose the solid background if the glass background reduces contrast.

## Touch targets

Controls inside a sheet should be at least 44 × 44 pt.

## iOS (VoiceOver)

- When a sheet opens, VoiceOver focus moves into it and the content behind is not reachable.
- The standard VoiceOver dismiss gesture closes the sheet.
