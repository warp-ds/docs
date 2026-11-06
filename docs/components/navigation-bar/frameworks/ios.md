# Navigation bar - iOS

A navigation bar shows the screen title, a back button and the actions for the screen.

<ComponentsStatus />

## iOS

<FrameworkTabs />

Warp does not provide its own navigation bar view. It styles the native `UINavigationBar` and SwiftUI toolbar with Warp tokens.
All functions are available on every supported iOS version (iOS 18 and later) and pick the right appearance for the running OS:

- **iOS 26 and later (Liquid Glass):** transparent background so Liquid Glass shows through, Warp title (`title4`), large title (`title1`) and subtitle (`title6`, `textSubtle`) typography, Warp's `chevronLeft` back indicator and a prominent button appearance. The tint colour is the `icon` token.
- **iOS 18 to 25:** opaque `background` token, Warp title and large title typography, and a `.done` button appearance in place of prominence. The tint colour is the `textLink` token.

### Syntax

```swift example
// UIKit
UINavigationBar.warpStyle()                       // Global, through the appearance proxy
navigationBar.warpStyle()                         // One UINavigationBar instance
navigationController.warpStyle()                  // A UINavigationController's bar
navigationItem.warpStyle()                        // One UINavigationItem
viewController.warpNavigationBarStyle()           // A view controller's navigation item
barButtonItem.warpNavigationBarButton(style: Warp.NavigationBarButtonStyle = .default)

// SwiftUI
Warp.ToolbarItem(
    title: String? = nil,
    icon: Warp.Icon? = nil,
    placement: ToolbarItemPlacement = .automatic,
    style: Warp.NavigationBarButtonStyle = .default,
    action: @escaping () -> Void
)
Button { } label: { }.warpNavigationBarButton(style: Warp.NavigationBarButtonStyle = .default)
```

```swift example
// Warp.NavigationBarButtonStyle
.default              // Warp icon colour and body typography. For secondary actions.
.primary              // Primary button background colour, prominent style. For the main action.
```

### Global styling (UIKit)

Call `UINavigationBar.warpStyle()` once at app launch to style every navigation bar.
It sets the standard, compact and scroll edge appearances, turns off translucency and sets the tint colour.

```swift example
func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
) -> Bool {
    UINavigationBar.warpStyle()
    return true
}
```

### Per-instance styling (UIKit)

```swift example
// A single navigation bar
let navigationBar = UINavigationBar()
navigationBar.warpStyle()

// A navigation controller's bar.
// On iOS 26 and later it also sets extendedLayoutIncludesOpaqueBars so Liquid Glass has content to refract.
let navigationController = UINavigationController(rootViewController: rootViewController)
navigationController.warpStyle()

// A single navigation item
navigationItem.warpStyle()

// From a view controller. Finds the view controller owned by the navigation controller,
// styles its navigationItem and, on iOS 26 and later, extends the layout under the bar.
override func viewDidLoad() {
    super.viewDidLoad()
    warpNavigationBarStyle()
}
```

### Bar buttons (UIKit)

`warpNavigationBarButton(style:)` styles a `UIBarButtonItem` and returns it, so calls can be chained.
The primary style uses the `.prominent` item style on iOS 26 and later (Liquid Glass) and `.done` below.

```swift example
let saveButton = UIBarButtonItem(title: "Save", style: .plain, target: self, action: #selector(save))
saveButton.warpNavigationBarButton(style: .primary)
navigationItem.rightBarButtonItem = saveButton
```

### Toolbar items (SwiftUI)

`Warp.ToolbarItem` is a toolbar item with an optional title and Warp icon.
The primary style uses `.glassProminent` on iOS 26 and later and `.borderedProminent` below.

```swift example
NavigationStack {
    ContentView()
        .navigationTitle("Edit ad")
        .toolbar {
            Warp.ToolbarItem(icon: .close, placement: .topBarLeading) {
                dismiss()
            }
            Warp.ToolbarItem(title: "Save", placement: .topBarTrailing, style: .primary) {
                save()
            }
        }
}
```

### Buttons (SwiftUI)

Use `.warpNavigationBarButton(style:)` to style your own SwiftUI `Button` in a toolbar.

```swift example
.toolbar {
    ToolbarItem(placement: .topBarTrailing) {
        Button(action: save) {
            Label("Save", systemImage: "checkmark")
        }
        .warpNavigationBarButton(style: .primary)
    }
}
```

### Deprecated

The `warpLiquidGlassStyle()` functions on `UINavigationBar`, `UINavigationController` and `UINavigationItem` are deprecated.
They did nothing below iOS 26. Use `warpStyle()` instead, which applies the solid appearance below iOS 26.

### Parameters

#### Warp.ToolbarItem

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String? | nil | Text shown in the toolbar item. |
| icon | Warp.Icon? | nil | Warp icon shown in the toolbar item. |
| placement | ToolbarItemPlacement | .automatic | Placement of the toolbar item. |
| style | Warp.NavigationBarButtonStyle | .default | Visual style: `.default` or `.primary`. |
| action | () -> Void |  | Action performed when the item is tapped. |

#### warpNavigationBarButton(style:)

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| style | Warp.NavigationBarButtonStyle | .default | Visual style: `.default` or `.primary`. Available on `UIBarButtonItem` and SwiftUI `Button`. |

<component-questions />
