---
title: 'WARP iOS release v.0.0.68'
date: 2025-10-30
---

Select component & Icon updates
---

# Warp iOS release 0.0.68

## 2025-10-30

#### Selector component
- New [Select](https://warp-ds.github.io/docs/components/select/) component allows users to choose one option from a dropdown list of options.

```swift
@Binding private var selectedOption: Warp.Select.SelectorOption?
private let options: [Warp.Select.SelectorOption]

Warp.Select(
    selectedOption: $selectedOption,
    options: options,
    placeholder: "Select an option",
    title: "Select Option",
    additionalInformation: "Additional info",
    style: .default,
    helpText: "This field is required."
)
```

#### New & updated icons

12 new icons added
- **ArchiveBox**  
- **CalendarBlank**  
- **ClockCountdown**  
- **Code**  
- **Cookie**  
- **DeliveryKey**  
- **FileArrowDown**  
- **Globe**  
- **Moon**  
- **SidebarChevronLeft**  
- **SidebarChevronRight**  
- **Sun**

6 updated/refined icons:
- **Calendar**  
- **CalendarPlus**  
- **Discount**  
- **Image**  
- **PictureStack**  
- **PinRound**

#### Minor fixes

- expand tappable area of `TextField` & `TextArea` to match space inside border