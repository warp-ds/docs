# Badge - Frameworks

Badges are small, contextual elements used to display concise, informative labels. They highlight relevant information such as statuses, categories, counts, roles, or activity indicators, helping users quickly identify and differentiate items at a glance.

Visually styled and colour-coded to indicate contextual metadata.

Related components: [Pill](../pill/index.md)

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
Warp.Badge(
    text: String,
    icon: Warp.Icon? = nil,
    variant: Warp.BadgeVariant,
    position: Warp.BadgePosition = .default
)
```

```swift example
Warp.Badge(
    text: "Success",
    variant: .success,
    position: .bottomLeft
)
```

There are a variety of variants and positions supported for the badge component:

```swift example
enum Warp.BadgeVariant {
    /// Used to convey general information that isn’t critical.
    case info
    /// Used to communicate success.
    case success
    /// Used to communicate warning.
    case warning
    /// Used to communicate error.
    case negative
    /// Used to communicate disabled.
    case disabled
    /// Used to communicate sponsored.
    case sponsored
    /// Used to communicate neutral.
    case neutral
    /// Used to communicate price.
    case price
}

enum Warp.BadgePosition {
    case `default`
    case topLeft
    case topRight
    case bottomLeft
    case bottomRight
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift exmaple
Warp.Badge(
    text: "Success",
    variant: .success,
    position: .bottomLeft
).uiView
```

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String |  | The text to display inside the badge. |
| variant | Warp.BadgeVariant |  | The style of the badge.  Use one of the predefined `BadgeVariant` values: `.info`, `.success`, `.warning`, `.negative`, `.disabled`, `.sponsored`, `.neutral`, or `.price` |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| icon | Warp.Icon? | nil | The optional icon to display inside the badge. |
| position | Warp.BadgePosition | .default | The corner position for the badge.  Use one of the predefined `BadgePosition` values: `.default`, `.topLeft`, `.topRight`, `.bottomLeft`, or `.bottomRight` |