# Navigation bar - Usage

A navigation bar shows the screen title, a back button and the actions for the screen.

See also [Tab bar](/components/tab-bar/overview.md).

<ComponentsStatus />

## Guidelines

- Keep titles short so they are not truncated. Use a large title on top-level screens.
- Show at most one primary action. Use the default style for other actions.
- Place the primary action on the trailing side, and close or cancel on the leading side.
- Use the same icons for the same actions across the app.
- Apply the Warp style to every navigation bar in the app so the bars look the same.

## Behaviour

- The back button returns to the previous screen in the navigation stack.
- On iOS 26 and later the bar is transparent and uses Liquid Glass. Content scrolls underneath it, and the primary action uses the prominent glass style.
- On iOS 18 to 25 the bar is opaque with the Warp background colour. The primary action uses the bordered prominent style in SwiftUI and the done style in UIKit.
- Titles, subtitles and bar buttons use Warp typography and colours on every supported version.

<component-questions />
