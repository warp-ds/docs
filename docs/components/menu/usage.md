# Menu - Usage

A menu presents a list of actions the user can choose from.

See also [Confirmation dialog](/components/confirmation-dialog/overview.md).

<ComponentsStatus />

## Guidelines

- Keep item titles short and start them with a verb, such as "Share" or "Archive".
- Keep the number of items small so the menu can be scanned at a glance.
- Place destructive items last, away from the items people use most.
- Use icons consistently. Either every item in a menu has an icon, or none does.
- Nest a submenu only when several related actions belong together. Avoid deeper levels of nesting.

## Behaviour

- A menu button opens on tap. A context menu opens on long press.
- Choosing an item runs its action and closes the menu.
- The menu closes when the user taps outside it.
- Items appear in the order in which they are declared.
- Destructive items use the destructive role. The system shows their title in red, and Warp shows their icon in the negative icon colour.
- The `.warpMenuButton(style:)` modifier applies Warp colour and font to a native SwiftUI `Menu` trigger. Use it when you need a native `Menu` with a custom label. Use `Warp.Menu` otherwise.

<component-questions />
