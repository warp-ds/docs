`StateView` is a flexible SwiftUI generic view component to display visual representations of various UI states. It supports an icon or illustration, optional title and description text, primary and secondary action buttons, and an optional brand logo endorsement. Designed for Warp, it is highly customizable and accessible.

### Generic usage

```swift
StateView(
    image: .icon(.check),
    tintColor: .blue,
    imageContentDescription: "Check icon",
    title: "Operation Successful",
    description: "Your changes have been saved.",
    actionButton: StateView.StateButton(title: "Retry") {
        print("Retry tapped")
    },
    quietButton: StateView.StateButton(title: "Cancel") {
        print("Cancel tapped")
    },
    showLogo: true
)
```

## Variants

Warp provides a set of predefined `StateView` variants for common UI states. Each variant wraps the base `StateView` with specific configuration, predefined images, texts, and actions to simplify displaying these states.

Note on overriding: Each variant conforms to `StateViewConfigurable` and can be customized using the provided `.override(...)` helpers. Use these helpers to change the image, image dimensions, tint color, accessibility label, title, description, primary/quiet buttons, or `showLogo`. They return a modified copy, so multiple overrides may be chained (for example: `LoginStateView(...).override(title: "Sign in").override(showLogo: false)`). This should be used as a last resort action because variants are designed to be used without modification to maintain similar appearance. 

### FailToLoadStateView

Represents a failure-to-load state with a sad smiley icon, localized title and description, and a retry button.

```swift
FailToLoadStateView(retryAction: {
    print("Retry tapped")
})
```

### LoadingStateView

Shows a loading spinner with localized descriptive text for ongoing loading states.

```swift
LoadingStateView()
```

### LoginStateView

Displays a login prompt with user icon, localized title and description, primary login button, secondary create account button, and brand logo.

```swift
LoginStateView(
    loginAction: {
        print("Login tapped")
    },
    createAccountAction: {
        print("Create Account tapped")
    }
)
```

### NoNetworkStateView

Indicates no network connectivity using a WiFi icon, localized text, and retry button.

```swift
NoNetworkStateView(retryAction: {
    print("Retry tapped")
})
```

### NoSearchResultsStateView

Shows a state for no search results with search icon, messages, and buttons to save the search or clear filters.

```swift
NoSearchResultsStateView(
    saveSearchAction: {
        print("Save Search tapped")
    },
    clearFiltersAction: {
        print("Clear Filters tapped")
    }
)
```

### VerifyIdentityStateView

Used in identity verification flows showing a verification icon, localized text, and a customizable button including the electronic ID provider name.

```swift
VerifyIdentityStateView(
    eidProvider: "BankID",
    verifyAction: {
        print("Verify tapped")
    }
)
```

Each variant leverages the consistent `StateView` styling and accessibility features, simplifying state management and UI presentation across Warp-based apps.

## Features

- Display either a Warp icon or a custom illustration image.
- Optional title and rich description text with scroll support (for scalable fonts)
- Primary and secondary (quiet) buttons for user interaction.
- Optional brand logo endorsement that adapts theme-based branding.
- Accessible illustration content description.
- Customizable icon/illustration size and illustration tint color.

## Accessibility

The illustration uses the provided `imageContentDescription` as its accessibility label. Warp icons use default accessibility label

## Theming and Branding

Certain variants (i.e. `LoginStateView`) adapts the displayed endorsement logo according to the current Warp theme (`finn`, `blocket`, `tori`, `dba`, `vend`, `neutral`), ensuring consistent brand representation.

### Parameters

<api-table type=iOS component="EmptyStates" />