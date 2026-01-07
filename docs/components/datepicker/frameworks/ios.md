# Date picker - Frameworks
A date picker allows the user to select a specific calendar date.

## iOS

<FrameworkTabs 
  :tabs="[
    { name: 'React 19', url: './react-19' },
    { name: 'Android', url: './android' },
    { name: 'iOS', url: './ios' }
  ]" 
  activeTab="iOS" 
/>

### Inline DatePicker

A graphical calendar interface that can be embedded directly in your view hierarchy.

### Syntax

```swift
Warp.DatePicker(
    date: Binding<Date>
)
```

#### Basic usage

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

### Syntax

```swift
 .warpDatePicker(
    date: Binding<Date>
) -> some View
```

#### Basic usage

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

### Legacy support

Not supported

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| date | Binding |  | A binding to the currently selected date. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| range | ClosedRange\|PartialRangeFrom\|PartialRangeThrough |  | The range of selectable dates. If not provided, there is no date range restriction. |