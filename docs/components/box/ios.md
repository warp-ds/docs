
## Syntax

```swift example
func Warp.Box(
            style: Warp.BoxStyle,
            title: String?,
            shouldShowToolTipImage: Bool = true,
            subtitle: String,
            link: ButtonConstructor? = nil,
            button: ButtonConstructor? = nil
        )
```

```swift example
Warp.Box(
        style: .info,
        title: "Success",
        subtitle: "Your message goes here"
    )
```

There are a variety of variants and combination supported for the box component. Supporting a button and a link, a title and an icon.

```swift example
Warp.BoxStyle {
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
Coming soon

### Parameters

<api-table type=iOS component="Box" />