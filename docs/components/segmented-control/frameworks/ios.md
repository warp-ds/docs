# Segmented control - iOS

A segmented control is a native-styled control for switching between a small number of views. Each segment can show an optional notification badge.

<ComponentsStatus />

## iOS

<FrameworkTabs />

### Syntax

```swift example
Warp.SegmentedControl(
    items: [Warp.SegmentedControl.Item],
    selectedIdentifier: Binding<String?>,
    badgeType: Warp.NotificationBadgeType = .default
)
```

```swift example
Warp.SegmentedControl.Item(
    identifier: String,
    title: String,
    badge: Int? = nil
)
```

### Usage

A segmented control that filters a list. The selected identifier is a binding, so the view updates when the user taps a segment.

```swift example
struct InboxView: View {
    @State private var selected: String? = "all"

    var body: some View {
        Warp.SegmentedControl(
            items: [
                .init(identifier: "all", title: "All"),
                .init(identifier: "unread", title: "Unread", badge: 3),
                .init(identifier: "flagged", title: "Flagged", badge: 120),
            ],
            selectedIdentifier: $selected,
            badgeType: .primary
        )
    }
}
```

The `badge` value on each item sets its badge:

- `nil` (the default) shows no badge.
- `0` shows a dot.
- A positive number shows that count. Counts above 99 show as "99+".

### Liquid Glass and iOS versions

The minimum supported version is iOS 18.

- **iOS 26 and later**: the control uses `UISegmentedControl` with Liquid Glass. `badgeType` applies to every badge.
- **iOS 18 to 25**: the control uses a custom tab strip. Badges are always red, so `badgeType` has no effect.

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also. For a segmented control, the UIKit class is `Warp.GlassSegmentedControl`.

```swift example
final class InboxViewController: UIViewController, Warp.GlassSegmentedControlDelegate {
    private let segments = Warp.GlassSegmentedControl()

    override func viewDidLoad() {
        super.viewDidLoad()

        segments.delegate = self
        segments.configure(
            items: [
                .init(identifier: "all", title: "All"),
                .init(identifier: "unread", title: "Unread", badge: 3),
            ],
            selectedIdentifier: "all",
            badgeType: .primary
        )
        // Add `segments` to the view hierarchy and pin it with Auto Layout.
    }

    func glassSegmentedControl(_ control: Warp.GlassSegmentedControl, didSelectItemWithIdentifier identifier: String) {
        // Show the view for `identifier`.
    }
}
```

Call `updateShadow` as the content beneath the control scrolls. It shows a shadow under the control when content scrolls under it. On iOS 26 and later it does nothing.

```swift example
// In a UIScrollViewDelegate, where `segments` is the control above:
func scrollViewDidScroll(_ scrollView: UIScrollView) {
    segments.updateShadow(using: scrollView, scrollViewParentView: scrollView.superview)
}
```

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| items | [Warp.SegmentedControl.Item] |  | The segments, in order. |
| selectedIdentifier | Binding<String?> |  | The `identifier` of the selected segment. Set it to `nil` for no selection. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| badgeType | Warp.NotificationBadgeType | `.default` | Style for every badge. `.default` is red and `.primary` is blue. Applies on iOS 26 and later only. |

#### Warp.SegmentedControl.Item

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| identifier | String |  | Unique identifier for the segment. Reported to the delegate and used for the selection. |
| title | String |  | The text shown on the segment. |
| badge | Int? | `nil` | `nil` hides the badge. `0` shows a dot. A positive number shows a count, capped at "99+". |

#### UIKit: configure(items:selectedIdentifier:badgeType:)

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| items | [Warp.GlassSegmentedControl.Item] |  | The segments, in order. |
| selectedIdentifier | String? |  | The `identifier` of the segment to select, or `nil` for no selection. |
| badgeType | Warp.NotificationBadgeType | `.default` | Style for every badge. Applies on iOS 26 and later only. |

#### UIKit: GlassSegmentedControlDelegate

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| glassSegmentedControl(_:didSelectItemWithIdentifier:) | Method | | Called when the user selects a segment. Receives the control and the selected segment's `identifier`. |

#### UIKit: updateShadow(using:scrollViewParentView:)

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| scrollView | UIScrollView |  | The scroll view whose content sits beneath the control. |
| scrollViewParentView | UIView? |  | The view that contains the scroll view. |

<component-questions />
