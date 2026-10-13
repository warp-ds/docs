---
title: 'WARP iOS release v.0.0.85'
date: 2026-08-24
---

New Alert components, theme environment tokens and icons

---

# Warp iOS release 0.0.85

## 2026-08-24

#### Alert component (inline banner)

New `Warp.Alert` inline banner for displaying high-signal messages. Supports `.info`, `.warning`, `.critical`, and `.success` styles with optional link, primary button, and secondary button.

```swift
Warp.Alert(
    style: .info,
    title: "Title",
    subtitle: "Use this variant to call extra attention to useful, contextual information."
)

// With buttons and link
Warp.Alert(
    style: .warning,
    title: "Action required",
    subtitle: "Please review before continuing.",
    link: (title: "Learn more", action: { }),
    primaryButton: (title: "Confirm", action: { }),
    secondaryButton: (title: "Cancel", action: { })
)
```

#### Alert dialog (native modal)

New `.warpAlert()` modifier presents a native iOS alert dialog with Warp-styled actions. Supports an optional custom content view (e.g. `TextField`) above the action buttons.

```swift
// Basic usage
someView
    .warpAlert(
        title: "Delete item?",
        message: "This action cannot be undone.",
        actions: [
            Warp.AlertDialog.Action(title: "Delete", style: .destructive) { handleDelete() },
            Warp.AlertDialog.Action(title: "Cancel", style: .cancel) { }
        ],
        isPresented: $showAlert
    )

// With custom content
someView
    .warpAlert(
        title: "Rename item",
        actions: [
            Warp.AlertDialog.Action(title: "Save") { save() },
            Warp.AlertDialog.Action(title: "Cancel", style: .cancel) { }
        ],
        isPresented: $showAlert
    ) {
        TextField("Name", text: $name)
    }
```

#### Theme environment tokens

Warp token and UIToken providers are now accessible directly from the injected `warpTheme` environment value (`Warp.Brand`), enabling environment-safe token access without the global `Warp.Token`.

```swift
struct MyView: View {
    @Environment(\.warpTheme) private var theme

    var body: some View {
        Text("Hello")
            .foregroundColor(Color(theme.token.text))
    }
}
```

#### Context menu and Menu components

New `Warp.Menu`, `Warp.MenuButton`, and `.warpMenuButton(style:)` modifier for SwiftUI menus and context menus with Warp icon and token support.

```swift
Warp.Menu("Actions") {
    Warp.MenuButton("Share", icon: .shareIOS) { share() }
    Warp.Menu("More", icon: .dots) {
        Warp.MenuButton("Bookmark", icon: .bookmark) { bookmark() }
    }
    Warp.MenuButton("Delete", icon: .delete, style: .destructive) { delete() }
}
.warpMenuButton(style: .default)
```

#### New regular icons

- `PhoneIncoming`
- `PhoneX`

#### Bug fixes

- Fixed solid-fill presence badge rendering on tab bar
- Fixed wrong font color for navigation bar prominent title in Liquid Glass mode

#### Technical improvements

- Font token access refactored to use SwiftUI environment injection
