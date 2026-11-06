# Sheet - iOS

A sheet presents related content or a focused task over the current screen.

<ComponentsStatus />

## iOS

<FrameworkTabs />

### Syntax

```swift example
.warpSheetStyle(
    _ style: Warp.SheetStyle = .medium,
    dragIndicator: Visibility = .visible,
    background: Warp.SheetBackground = .automatic
)
```

```swift example
// Warp.SheetStyle
.medium               // Half-height sheet with medium and large detents.
.fullScreen           // Full-height sheet with the large detent only.

// Warp.SheetBackground
.automatic            // Liquid Glass where iOS 26 draws it, surfaceElevated100 where the sheet is always opaque.
.solid                // Opaque surfaceElevated100 on every OS version.
.color(Color)         // A custom background colour.
.none                 // No background applied. The content styles its own.
```

### Usage

Apply the modifier to the root content inside the `.sheet` closure:

```swift example
.sheet(isPresented: $showSheet) {
    NavigationStack {
        MyContentView()
            .navigationTitle("Title")
    }
    .warpSheetStyle(.medium)
}
```

A full-height sheet with a solid background and no drag indicator:

```swift example
.sheet(isPresented: $showSheet) {
    NavigationStack {
        MyContentView()
    }
    .warpSheetStyle(.fullScreen, dragIndicator: .hidden, background: .solid)
}
```

On iOS 26, dragging a `.medium` sheet to full height makes it opaque in the system colour, not the Warp token. Pass `background: .solid` if the sheet must stay on-brand at every height.

Navigation bar styling is separate. Apply it to the content inside the `NavigationStack`, not to the sheet root.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| style | Warp.SheetStyle | `.medium` | `.medium` allows medium and large detents. `.fullScreen` allows the large detent only. |
| dragIndicator | Visibility | `.visible` | Visibility of the grabber. Use `.hidden` for sheets that must not be dismissed by dragging. |
| background | Warp.SheetBackground | `.automatic` | Background treatment: `.automatic`, `.solid`, `.color(Color)` or `.none`. |

<component-questions />
