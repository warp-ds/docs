# Menu - iOS

A menu presents a list of actions the user can choose from.

<ComponentsStatus />

## iOS

<FrameworkTabs />

### Syntax

```swift example
Warp.Menu(
    _ title: String,
    icon: Warp.Icon? = nil,
    @ViewBuilder content: () -> Content
)

Warp.MenuButton(
    _ title: String,
    icon: Warp.Icon? = nil,
    style: Warp.MenuButtonStyle = .default,
    action: @escaping () -> Void
)

// Applies Warp icon colour and font to a native SwiftUI Menu trigger.
.warpMenuButton(style: Warp.MenuButtonStyle = .default)
```

```swift example
// Warp.MenuButtonStyle
.default              // Standard item with the Warp icon colour.
.destructive          // Destructive role. The system shows the title in red, the icon uses the negative icon colour.
```

### Usage

A menu with a nested submenu and a destructive item:

```swift example
Warp.Menu("Actions") {
    Warp.MenuButton("Share", icon: .shareIOS) { share() }
    Warp.Menu("More", icon: .dots) {
        Warp.MenuButton("Bookmark", icon: .bookmark) { bookmark() }
        Warp.MenuButton("Archive", icon: .archiveBox) { archive() }
    }
    Warp.MenuButton("Delete", icon: .bin, style: .destructive) { delete() }
}
```

Use `Warp.MenuButton` inside a context menu:

```swift example
Text("Ad title")
    .contextMenu {
        Warp.MenuButton("Share", icon: .shareIOS) { share() }
        Warp.MenuButton("Delete", icon: .bin, style: .destructive) { delete() }
    }
```

Style a native SwiftUI `Menu` with a custom label:

```swift example
SwiftUI.Menu("Options") {
    Warp.MenuButton("Share", icon: .shareIOS) { share() }
    Warp.MenuButton("Delete", icon: .bin, style: .destructive) { delete() }
}
.warpMenuButton(style: .default)
```

The text of menu items is rendered by the system. Only the icon colour and the destructive role can be controlled.

### Parameters

#### Warp.Menu

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String |  | Label of the menu trigger, or of the row when nested. |
| icon | Warp.Icon? | `nil` | Icon shown next to the title. |
| content | @ViewBuilder () -> Content |  | The items of the menu. |

#### Warp.MenuButton

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String |  | Text of the item. |
| icon | Warp.Icon? | `nil` | Icon shown next to the title. |
| style | Warp.MenuButtonStyle | `.default` | `.destructive` applies the destructive role and the negative icon colour. |
| action | () -> Void |  | Runs when the item is selected. |

<component-questions />
