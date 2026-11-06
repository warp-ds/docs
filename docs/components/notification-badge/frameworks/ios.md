# Notification badge - iOS

A notification badge is a dot or a count signalling new or unread items.

<ComponentsStatus />

## iOS

<FrameworkTabs />

### Syntax

```swift example
Warp.NotificationBadge(
    _ content: Warp.NotificationBadgeContent,
    type: Warp.NotificationBadgeType = .default,
    size: Warp.NotificationBadgeSize = .medium,
    maxCount: Int = 99
)
```

```swift example
// Warp.NotificationBadgeContent
.dot                  // A solid dot indicating a new item.
.count(Int)           // A numeric count. Counts of zero or less are not shown.

// Warp.NotificationBadgeType
.default              // Red, notification background token.
.primary              // Blue, primary background token.

// Warp.NotificationBadgeSize
.medium               // 16×16 pt dot, 24 pt high count.
.small                // 10×10 pt dot, 16 pt high count.
```

### Usage

A count badge placed at the end of a row. The host row carries the badge's accessibility value, because the badge itself is hidden from VoiceOver.

```swift example
struct MessagesRow: View {
    let unreadCount: Int

    var body: some View {
        let badge = Warp.NotificationBadge(.count(unreadCount))

        HStack {
            Text("Messages")
            Spacer()
            badge
        }
        .accessibilityValue(badge.accessibilityValue ?? "")
    }
}
```

A dot for new items, in the blue primary style:

```swift example
Warp.NotificationBadge(.dot, type: .primary, size: .small)
```

Counts above `maxCount` show as "99+" by default:

```swift example
Warp.NotificationBadge(.count(150))   // Shows "99+"
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.NotificationBadge(.count(3)).uiView
```

The `uiView` is static. To change the count, replace the view:

```swift example
func showUnreadBadge(_ count: Int, in container: UIView, host: UIView) {
    let badge = Warp.NotificationBadge(.count(count))
    let badgeView = badge.uiView
    badgeView.translatesAutoresizingMaskIntoConstraints = false
    container.addSubview(badgeView)
    host.accessibilityValue = badge.accessibilityValue
}
```

Remove the previous badge view before calling it again.

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| content | Warp.NotificationBadgeContent |  | `.dot` shows a solid dot. `.count(Int)` shows a number. Counts of zero or less show nothing. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | Warp.NotificationBadgeType | `.default` | `.default` is red. `.primary` is blue. |
| size | Warp.NotificationBadgeSize | `.medium` | `.medium` is a 16×16 pt dot and 24 pt high count. `.small` is a 10×10 pt dot and 16 pt high count. |
| maxCount | Int | `99` | Counts above this value show as the value followed by "+", for example "99+". Values below 1 are clamped to 1. |

<component-questions />
