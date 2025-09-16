### Inline DatePicker

A graphical calendar interface that can be embedded directly in your view hierarchy.

#### Basic

```swift
Warp.DatePicker(date: $selectedDate)
```

#### Range Constraints

You can limit the selectable dates using different range types:

```swift
// Closed range (from-to)
Warp.DatePicker(date: $selectedDate, range: startDate...endDate)

// Partial range (from-infinity)
Warp.DatePicker(date: $selectedDate, range: startDate...)

// Partial range (infinity-to)
Warp.DatePicker(date: $selectedDate, range: ...endDate)
```

### Dialog DatePicker

A compact date picker that can be attached to any view using a view modifier.

#### Basic

This example shows how to attach a dialog date picker to Warp TextField using the `warpDatePicker` modifier + some formatting.

```swift
Warp.TextField(
    text: Binding(
        get: { formattedDate(selectedDate) },
        set: { _ in }
    ),
    placeholder: "Select a date",
    rightIcon: .calendar
)
.warpDatePicker(date: $selectedDate)
```

#### Range Constraints

Similar to the inline picker, you can constrain the selectable dates:

```swift
// Closed range
.warpDatePicker(date: $selectedDate, range: startDate...endDate)

// Partial range (from)
.warpDatePicker(date: $selectedDate, range: startDate...)

// Partial range (through)
.warpDatePicker(date: $selectedDate, range: ...endDate)
```

Note: The dialog picker will intercept all touch events on the view it's applied to.

### Parameters

<api-table type=iOS component="DatePicker" />