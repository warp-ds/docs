# Box - Frameworks
Box is a layout component used for separating content areas on a page.

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
Warp.Box(
    style: Warp.BoxStyle,
    title: String?,
    shouldShowToolTipImage: Bool = true,
    subtitle: String,
    link: ButtonConstructor? = nil,
    button: Warp.Button? = nil
)
```

ButtonConstructor is a typealias for `(title: String, action: () -> Void)`.

```swift example
Warp.Box(
    style: .info,
    title: "Success",
    subtitle: "Your message goes here"
)
```

There are a variety of variants and combinations supported for the box component. Supporting a button and a link, a title, a description and an icon.

```swift example
enum Warp.BoxStyle {
    /// Used to group information that separates itself from other elements in a page layout.
    /// Use this box to show generic information that isn’t necessarily directly related to the main focus content on your page.
    case neutral

    /// Used to highlight content on a page. It differs from an “Info alert”, 
    /// which is used in a more contextual manner, where the information is presented to the user as a prompt to take action.
    /// Use this box to show information that is related, or relevant to the main focus content on your page.
    case info

    /// Can be used on coloured backgrounds, when a neutral or info box doesn’t work.
    /// It can also be used as an alternative way to group information on a page that might need a variation of grouped information.
    /// Use this box when showing generic information on coloured or low contrast backgrounds.
    case bordered
}
```

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.Box(
    style: .info,
    title: "Success",
    subtitle: "Your message goes here"
).uiView
```

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| style | Warp.BoxStyle |  | Preferred style of box.  Use one of the predefined `BoxStyle` values: `.neutral`, `.info`, `.bordered` |
| title | String? |  | Text that will be shown as box's heading. |
| subtitle | String |  | Text that will be shown after title in the middle of the box. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| shouldShowToolTipImage | Bool | true | Flag indicating tooltip image should be shown. |
| link | `(title: String, action: () -> Void)?` | nil | Tuple that will provide a title and an action for creating a link view below subtitle.  Passing `nil` will skip adding link view. |
| button | Warp.Button? | nil | A button view below link.  Passing `nil` will skip adding button view. |