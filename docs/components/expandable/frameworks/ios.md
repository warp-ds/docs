# Expandable - Frameworks
Expandable is a layout component used for creating content that can be expanded and collapsed.

## iOS

<FrameworkTabs 
  :tabs="[
    { name: 'Elements', url: './elements' },
    { name: 'Vue', url: './vue' },
    { name: 'React', url: './react' },
    { name: 'Android', url: './android' },
    { name: 'iOS', url: './ios' }
  ]" 
  activeTab="iOS" 
/>

### Syntax

```swift example
// If you need a `Expandable` with a custom view use this
Warp.Expandable(
        style: Warp.ExpandableStyle,
        title: String,
        @ViewBuilder expandableView: () -> Content,
        isAnimated: Bool = true,
        isExpanded: Bool = false
)

// If you need a `Expandable` with a simple String use this instead
Warp.Expandable(
        style: Warp.ExpandableStyle,
        title: String,
        subtitle: String,
        isAnimated: Bool = true,
        isExpanded: Bool = false
)
```

```swift example
Warp.Expandable(
        style: .box,
        title: "Title",
        subtitle: "SubTitle"
)
```

### Visual options

```swift example
enum Warp.ExpandableStyle {
    /// Basic expandable component with clear background.
    case `default`
    /// Expandable component with a boxed layout. Round corners
    case box
    /// Expandable component with a boxed layout. Square corners
    case boxBleed
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Expandable(
        style: .box,
        title: "Title",
        subtitle: "SubTitle"
).uiView
```

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| style | Warp.ExpandableStyle |  | The style of the `Expandable`.  Use one of the predefined `ExpandableStyle` values: `.default`, `.box`, or `.boxBleed` |
| title | String |  | The title for the top sticky part of the `Expandable` |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| expandableView | View |  | The view for the bottom hidden part of the `Expandable`. Either this or `subtitle` needs to be provided. |
| subtitle | String |  | The subtitle for the bottom hidden part of the `Expandable`. Either this or `expandableView` needs to be provided. |
| isAnimated | Bool | true | Determines if the `Expandable` will expand and collapse with animation |
| isExpanded | Bool | false | Controls the state of the `Expandable` |
