# Logo

<ComponentsStatus />

## iOS

<FrameworkTabs />

### Syntax

```swift
Warp.Logo(for brand: Warp.BrandLogo)
```

### Usage

```swift
Warp.Logo(for: .finn(.small))
```

### Sizes

There are two sizes for logos: `small` and `default`.

```swift
enum Warp.BrandLogo.LogoSize {
    case small // 32x32 square logo
    case `default` // Freeform logo
}
```

<component-questions />
