# Menu - Overview

A menu presents a list of actions the user can choose from. It opens from a button, or from a long press on an item as a context menu. Warp menus are built on the native SwiftUI menu system, so the platform handles presentation and gestures. Warp adds its icons and the destructive style.

See also [Confirmation dialog](/components/confirmation-dialog/overview.md).

<ComponentsStatus />

## General

A menu groups related actions behind one trigger. Each item has a title and an optional icon.

Menus come in two forms:

- **Menu button:** a trigger that opens the menu on tap.
- **Context menu:** a menu attached to an existing view that opens on long press.

Item titles are set by the operating system, so Warp controls only the icon colour and the destructive role. A destructive item is shown in red by the system.

## When to use

- Grouping secondary actions for one item or screen, such as share, bookmark or archive.
- Offering shortcuts on a list row or card through a context menu.

## When not to use

- A single destructive action that needs confirmation. Use the [Confirmation dialog](/components/confirmation-dialog/overview.md) instead.
- The main actions of a screen. Show them as buttons so they stay visible.

<component-questions />
