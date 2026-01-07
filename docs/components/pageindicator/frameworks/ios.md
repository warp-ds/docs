# Page indicator - Frameworks
A page indicator shows the total amount of pages (or images) and the current page using dots.

## iOS

<FrameworkTabs 
  :tabs="[
    { name: 'React 19', url: './react-19' },
    { name: 'Android', url: './android' },
    { name: 'iOS', url: './ios' },
  ]" 
  activeTab="iOS" 
/>

### Syntax

```swift example
Warp.PageIndicator(
    pageCount: Int,
    selectedPage: Binding<Int> = .constant(0)
)
```
```swift example
Warp.PageIndicator(pageCount: 5)
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.PageIndicator(pageCount: 5).uiView
```

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| pageCount | Int |  | The total number of pages. |
| selectedPage | Binding Int |  | Binding to an integer representing the currently selected page. |