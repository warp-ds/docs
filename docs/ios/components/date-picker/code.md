# Date picker - iOS
A date picker allows the user to select a specific calendar date.

<ComponentsStatus />

## iOS

<FrameworkTabs />

### Warp Style Modifier

The `.warpStyle()` modifier applies brand-specific theming (tint color) to a native SwiftUI `DatePicker`. It must be called directly on the `DatePicker` before any other modifiers.

### Syntax

```swift
DatePicker("", selection: $date, displayedComponents: [.date])
    .warpStyle()
```

### Graphical (Inline) DatePicker

A full calendar interface embedded directly in your view hierarchy.

```swift
DatePicker("", selection: $selectedDate, displayedComponents: [.date])
    .warpStyle()
    .datePickerStyle(.graphical)
    .labelsHidden()
```

#### With range constraint

```swift
DatePicker("", selection: $selectedDate, in: startDate...endDate, displayedComponents: [.date])
    .warpStyle()
    .datePickerStyle(.graphical)
    .labelsHidden()
```

### Compact (Popup) DatePicker

A compact tappable date label that opens a calendar popup when tapped.

```swift
DatePicker("", selection: $selectedDate, displayedComponents: [.date])
    .warpStyle()
    .labelsHidden()
```

### Wheel DatePicker

The classic iOS spinning wheel date picker.

```swift
DatePicker("", selection: $selectedDate, displayedComponents: [.date])
    .warpStyle()
    .datePickerStyle(.wheel)
    .labelsHidden()
```

### Date and Time

Include time selection by adding `.hourAndMinute` to displayed components:

```swift
DatePicker("", selection: $selectedDate, displayedComponents: [.date, .hourAndMinute])
    .warpStyle()
    .datePickerStyle(.graphical)
    .labelsHidden()
```

### Range Constraints

All native SwiftUI range types are supported:

```swift
// Closed range (from-to)
DatePicker("", selection: $selectedDate, in: startDate...endDate)
    .warpStyle()

// Partial range (from-infinity)
DatePicker("", selection: $selectedDate, in: startDate...)
    .warpStyle()

// Partial range (infinity-to)
DatePicker("", selection: $selectedDate, in: ...endDate)
    .warpStyle()
```

### Legacy support

Not supported

### Parameters

`.warpStyle()` is a `DatePicker` extension that applies brand tint color. All configuration is done via native SwiftUI `DatePicker` parameters.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| selection | Binding\<Date\> |  | A binding to the currently selected date. |
| displayedComponents | DatePicker.Components | [.date] | The date and time components to display. |
| in | ClosedRange\|PartialRangeFrom\|PartialRangeThrough |  | Optional range of selectable dates. |

### Deprecated

The following APIs are deprecated and will be removed in a future release:

- `Warp.DatePicker(date:)` — Use a native `DatePicker` with `.warpStyle()` instead.
- `.warpDatePicker(date:)` — Use a native `DatePicker` with `.warpStyle()` instead.

<component-questions />
