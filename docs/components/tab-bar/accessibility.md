# Tab bar - Accessibility

A tab bar lets users switch between the main sections of an app.

<ComponentsStatus />

## General

The Warp tab bar is the native iOS tab bar with Warp styling. Focus order, selection state, VoiceOver and Dynamic Type come from the platform.

Every tab item needs a title, even if the icon is clear. VoiceOver reads the title as the name of the tab.

## Badges

The Warp badge functions set an accessibility value on the tab item, so VoiceOver announces the badge together with the tab:

- `warpSetBadge(count:)` announces the real count, for example "5 unread", even when the badge shows "99+".
- `warpSetPresenceBadge()` announces "new notification".
- `warpClearBadge()` removes the badge and its accessibility value.

If you set `badgeValue` directly instead of using these functions, also set a meaningful `accessibilityValue`.

The announcements are localised in the languages supported by Warp.

## iOS (VoiceOver)

- Each tab is read as "Tab", with its title, its position (for example "2 of 4") and whether it is selected.
- Do not rely on colour alone to show the selected tab; the system also announces the selection state.

<component-questions />
