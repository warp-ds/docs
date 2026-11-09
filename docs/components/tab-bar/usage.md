# Tab bar - Usage

A tab bar lets users switch between the main sections of an app.

See also [Navigation bar](/components/navigation-bar/overview.md).

<ComponentsStatus />

## Guidelines

- Use between three and five tabs.
- Keep titles to one short word where possible.
- Always show a title together with the icon.
- Keep the order of the tabs the same on every screen.
- Do not hide the tab bar on top-level screens.

## Badges

- Use a count badge for a number of unread items. Counts above the maximum (99 by default) are shown as "99+".
- Use a presence badge when there is something new but the number does not matter.
- Clear the badge when the user has seen the new content.

## Behaviour

- On iOS 26 and later the tab bar uses Liquid Glass. The selected tab uses the Warp selected icon colour for the icon and title in all layouts.
- On iOS 18 to 25 the tab bar is opaque with the Warp background colour, and the selected tab uses the Warp selected icon colour.
- In a compact width, such as an iPhone in portrait, unselected tabs use the Warp icon colour. In a regular width the system colour is used. The colour updates when the size class changes, for example on iPad rotation or multitasking.

<component-questions />
