# Menu - Accessibility

A menu presents a list of actions the user can choose from.

<ComponentsStatus />

## General

Menus are built on the native SwiftUI `Menu` and context-menu system, so focus, keyboard and VoiceOver navigation come from the platform. Warp adds icons and the destructive role. It does not add custom accessibility behaviour to menus.

Every item needs a title. The title is what VoiceOver reads, so write titles that make sense on their own, without the icon.

A menu trigger that uses a custom label, through `.warpMenuButton(style:)`, needs a text label or an explicit `.accessibilityLabel`. An icon alone does not tell VoiceOver what the menu does.

## Touch targets

Menu rows use the system row height. If you build a custom trigger, keep its tappable area at least 44 × 44 pt.

## iOS (VoiceOver)

- The trigger is announced with its title, as a menu.
- Items are read in the order in which they are declared. Activating an item with a double tap runs its action.
- Destructive items are shown in red. Their titles should name the action, such as "Delete", so the meaning does not depend on colour.
- The standard VoiceOver dismiss gesture closes the menu without choosing an item.

<component-questions />
