# Radio buttons - iOS

Radio buttons let users choose one value from a compact row of button-shaped options.

<ComponentsStatus />

## iOS

<FrameworkTabs />

### Single-selection Button group

The iOS counterpart is `Warp.ButtonGroup` with `singleSelect: true`. The same component also supports multiple selection, documented under [Button group](/components/button-group/frameworks/ios.md). Set the mode explicitly: `singleSelect` defaults to `false`.

```swift
import SwiftUI
import Warp

struct RentalPeriod: View {
    @State private var periods: [(title: String, isSelected: Bool)] = [
        ("Day", false),
        ("Week", true),
        ("Month", false)
    ]

    var body: some View {
        VStack(alignment: .leading) {
            Text("Rental period")
            Warp.ButtonGroup(buttons: $periods, singleSelect: true)
        }
    }
}
```

### Selection

The binding contains every option's title and selection state. Start with no selected options, or with exactly one. In single-selection mode, tapping an option selects it and clears the other selections. Tapping the selected option keeps it selected.

The component normalises selection after a tap; it does not correct multiple initially selected entries. Keep the binding consistent when restoring an answer or updating it from application code. There is no separate value or identifier in the tuple, so maintain any domain identifiers in application state.

### Parameters

| Name | Type | Default | Purpose |
| --- | --- | --- | --- |
| `buttons` | `Binding<[(title: String, isSelected: Bool)]>` | Required | Titles and selection state for the options. |
| `singleSelect` | `Bool` | `false` | Set to `true` for Radio buttons behaviour. |
| `onSelectionChange` | `(([(String, Bool)]) -> Void)?` | `nil` | Receives the updated options after a selection change. |

### Layout and validation

Unlike the web implementations, `Warp.ButtonGroup` has no regular/small or fill-width setting. It lays out its options in a connected horizontal row with fixed padding. Check long labels, narrow screens and enlarged text.

Supply the group question and any help or error text in the surrounding view. The component has no built-in label, required, invalid or per-option disabled API. Validate the binding in application code before accepting the answer.

### Accessibility considerations

In Warp iOS 0.0.86, each option is a `Text` view with an `onTapGesture`. The component does not explicitly expose Radio roles, selected-state traits, group semantics or keyboard handling. The example above supplies a visible question; it does not add those missing semantics.

Verify each option's announcement and activation with VoiceOver and hardware keyboard input. Provide an accessible alternative when the selection cannot be understood or operated, and preserve at least a 44×44pt activation area. See [Accessibility](/components/radio-buttons/accessibility.md) for the platform differences.

<component-questions />
