# Tab bar - iOS

A tab bar lets users switch between the main sections of an app.

<ComponentsStatus />

## iOS

<FrameworkTabs />

Warp does not provide its own tab bar view. It styles the native UIKit `UITabBar` and `UITabBarItem` with Warp tokens.
All functions are available on every supported iOS version (iOS 18 and later) and pick the right appearance for the running OS:

- **iOS 26 and later (Liquid Glass):** the system glass background is kept. The selected title and icon use `Warp.UIColor.navbarIconSelected` in the stacked, inline and compact inline layouts, for both the standard and scroll edge appearance.
- **iOS 18 to 25:** opaque bar with the `background` token, and `navbarIconSelected` as the tint colour.
- **All versions:** in a compact horizontal size class, unselected items use the `icon` token. In a regular size class the system default is used.

### Syntax

```swift example
// UITabBar
UITabBar.warpConfigureAppearanceProxy()   // Global, through the appearance proxy. Call once at app launch.
tabBar.warpStyle()                        // One UITabBar instance, incl. the compact size class rule
tabBarController.warpStyle()              // Same as tabBarController.tabBar.warpStyle()

// UITabBarItem
item.warpSetBadge(count: Int, max: Int = 99)
item.warpSetPresenceBadge()
item.warpClearBadge()
item.warpConfigureImages(_ base: UIImage)

// UIImage
image.warpTabBarItemTinted(state: Warp.TabBarItemState) -> UIImage   // .normal or .selected
```

### Styling the tab bar

`UITabBar.warpConfigureAppearanceProxy()` styles every tab bar and every badge set directly through `badgeValue`.
It cannot set the unselected tint for compact size classes, because the appearance proxy has no trait collection.
Use `warpStyle()` on the instance for full styling. It also re-applies the unselected tint when the horizontal size class changes, for example on iPad rotation or in multitasking.

```swift example
// At app launch
UITabBar.warpConfigureAppearanceProxy()

// For one tab bar controller
let tabBarController = UITabBarController()
tabBarController.warpStyle()
```

### Tab item images

`warpConfigureImages(_:)` sets the normal and selected images of an item from one base image.
The normal image is tinted with `Warp.UIToken.icon` and the selected image with `Warp.UIColor.navbarIconSelected`, both with the `.alwaysOriginal` rendering mode.

```swift example
let item = UITabBarItem(title: "Home", image: nil, selectedImage: nil)
if let icon = UIImage(systemName: "house") {
    item.warpConfigureImages(icon)
}

// Or tint one image yourself
let selectedIcon = icon.warpTabBarItemTinted(state: .selected)
```

### Badges

Badges use the `backgroundNotification` token, `textInvertedStatic` text colour and `detailStrong` typography.
The functions also set the `accessibilityValue` of the item, so VoiceOver announces the badge.

```swift example
// Count badge. Counts above max show as "\(max)+", for example 150 → "99+".
// A count of 0 or less clears the badge.
messagesItem.warpSetBadge(count: 5)
messagesItem.warpSetBadge(count: 150, max: 99)   // Shows "99+"

// Presence badge: a filled badge without text
notificationsItem.warpSetPresenceBadge()

// Remove the badge and its accessibility value
messagesItem.warpClearBadge()
```

`warpSetBadgeDot()` is deprecated. Use `warpSetPresenceBadge()` instead.

### Parameters

#### warpSetBadge(count:max:)

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| count | Int |  | Number shown in the badge. A value of 0 or less clears the badge. VoiceOver announces the real count. |
| max | Int | 99 | Highest number shown. Larger counts show as "\(max)+". |

#### warpConfigureImages(_:)

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| base | UIImage |  | Base image, tinted for the normal and selected states. |

#### warpTabBarItemTinted(state:)

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| state | Warp.TabBarItemState |  | `.normal` (`icon` token) or `.selected` (`navbarIconSelected`). |

<component-questions />
