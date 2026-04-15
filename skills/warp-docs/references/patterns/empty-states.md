# Empty states

Empty states are used to fill spaces when no content can be shown to the user, or is temporarily empty due to the nature of the feature.

**Public docs:** [Overview](https://warp-ds.github.io/docs/patterns/empty-states/overview), [Usage](https://warp-ds.github.io/docs/patterns/empty-states/usage), [Accessibility](https://warp-ds.github.io/docs/patterns/empty-states/accessibility), [Android](https://warp-ds.github.io/docs/patterns/empty-states/frameworks/android), [iOS](https://warp-ds.github.io/docs/patterns/empty-states/frameworks/ios)

**Framework support:** Android, iOS

## Overview

Empty states are used to fill spaces when no content can be shown to the user, or is temporarily empty due to the nature of the feature.

Empty states are moments in the user experience when we don't have specific info or data to display to the user. They're also an opportunity to guide the user by explaining what to do next, preventing confusion.

#### Common alternative names 

State, no-data state, empty view, zero-data state, no results, first-use state, missing state, loading

![Example of a focused date input field with an open calendar below displaying January 2023 and the current selection is the 11th. The example is surrounded by four numbered highlights, pointing to the label, date input field, the optional calendar icon and the calendar popover](https://warp-ds.github.io/docs/patterns/emptystates/overview-anatomy.svg)

1.  **Visual (optional)**: A non-interactive icon or illustration that relates to the situation.
    
2.  **Title**: A short and concise explanation.
    
3.  **Description (optional)**: Explains the situation in more detail and clearly provides guidance on the next action to populate the space.
    
4.  **Primary action (optional)**: The primary call to action referenced in the description copy above.
    
5.  **Secondary action (optional)**: If there is a secondary action, such as referencing documentation for further reading or an alternative destination, include it as a less visually emphasised button (Button Quiet).
    
6.  **Tagline (optional)**: Endorses Vend and helps build brand awareness at key user journey's touch points. [See the Vend Endorsement guidelines](https://app.pickit.com/#/documents/collection/6800c6610614a4f90e543d36?filter=e30%3D) for more information.
    

Use when content can't be retrieved or displayed due to a data or API error. Include an option to reload.

![Example of the 'Fail to load' empty state for when the system fails loading data.](https://warp-ds.github.io/docs/patterns/emptystates/use_cases-fail_to_load.svg)

Use for 404 pages or when the user tries to access a page that doesn't exist or they don't have permission for. **Available in web and Figma only.**

![Example of the 'Page not found' empty state for a user trying to access a page that doesn't exist.](https://warp-ds.github.io/docs/patterns/emptystates/use_cases-page_not_found.svg)

Use when a feature or page requires authentication and the user isn't logged in. Provide clear log-in and sign-up actions.

![Example of the 'Not logged in' empty state for when a user tries to access a page that requires authentication.](https://warp-ds.github.io/docs/patterns/emptystates/use_cases-not_logged_in.svg)

Use when identity verification is required before continuing an action (e.g., contacting a seller). Adapt the content based on the country's identity verification provider.

![Example showing the 'Verify identity' empty state used when a user tries to access a feature that requires identity verification.](https://warp-ds.github.io/docs/patterns/emptystates/use_cases-verify_identity.svg)

Use when the user's internet connection is lost or unstable. Include a retry option.

![Example of the 'No connection' empty state for when the user loses internet connection.](https://warp-ds.github.io/docs/patterns/emptystates/use_cases-no_network_connection.svg)

Use when no items match the user's search. Let users save the search to get notified about new items or clear filters to try again.

![Example of the 'No search results' empty state for when a search returns no results.](https://warp-ds.github.io/docs/patterns/emptystates/use_cases-no_search_results.svg)

Use when the user's inbox is empty and there are no messages to display. **Available in Figma only.**

![Example of the 'No messages' empty state for when the messages inbox is empty.](https://warp-ds.github.io/docs/patterns/emptystates/use_cases-no_messages.svg)

Use when the user hasn't saved any favourite items yet. **Available in Figma only.**

![Example of the 'No favourites' empty state for when a user hasn't saved items yet.](https://warp-ds.github.io/docs/patterns/emptystates/use_cases-no_favourites.svg)

Use when the user has no payment cards saved to complete a transaction. **Available in Figma only.**

![Example of the 'No payment card' empty state for when a user has no cards saved in their account.](https://warp-ds.github.io/docs/patterns/emptystates/use_cases-no_payment_card.svg)

Use to indicate that the system is loading data for the screen or section the user is trying to access. You can include a short message, but keep it brief since it's only visible for a few seconds.

![Example of the 'Loading' empty state for when the system is retrieving data before showing it to the user.](https://warp-ds.github.io/docs/patterns/emptystates/use_cases-loading.svg)

## Usage

Empty states are used to fill spaces when no content can be shown to the user, or is temporarily empty due to the nature of the feature.

Empty states are moments in the experience where there's no data or content to show — a chance to communicate with users that shouldn't be treated as an afterthought. They should clarify what the space is for, why it's empty, and what the user can do next. When designed thoughtfully, empty states become an essential part of a smooth experience, providing just enough context and guidance to help users stay productive.

Empty states can occur for different reasons. This component includes variants for the most common cases, from simple “no data” moments to error-related states that need more detailed guidance or troubleshooting. Using these ensures consistency and clarity across all empty and error screens in our marketplaces.

**Use for**

-   Educational and onboarding messages (e.g. no favourites to show because user hasn't saved any favourite items)
-   Error states

**Don't use for**

-   Global system messaging (e.g., system maintenance coming up). Use the [Alert](https://warp-ds.github.io/docs/components/alert/overview) instead.
-   Feedback messaging (e.g., address saved to favourites). Use the [Toast](https://warp-ds.github.io/docs/components/toast/overview) instead.

These are the most common and recognisable types of empty states. Use them when there's no data to display, either because the user hasn't engaged with the feature yet or because their action returned no results. They explain what will appear once the space is populated with data and guide the user on what to do next. And they should reassure users that the absence of content is normal and temporary, not an error.

**Use cases:** First-time use, no data yet, no results when searching, etc.

**Goal:** Users understand what will be available on the page when data has been added or is available. They understand how to add data themselves.

**✅ Dos:**

-   Be specific about what content will appear when data is available.
-   Keep the message short and actionable so it is easy to scan and understand.
-   Include a clear next step when possible. Use the available buttons or, alternatively, provide simple guidance to help users take action.

**🚫 Don'ts:**

-   Don't combine multiple use cases in one state. Focus on one clear action.
-   Don't reference other areas of the app. Be contextual.
-   Don't lead the user into dead ends. If there are useful next steps, include them.
-   Don't over-explain or use technical language. Keep it human and aligned with the product's voice and glossary.

![Example of a no data empty state, such as when the user can't access the messaging feature because they aren't logged in.](https://warp-ds.github.io/docs/patterns/emptystates/types-no_data_states.svg)

Empty states can occur when there is data but it cannot be surfaced for some reason. A higher level of specificity is helpful here, with the aim that the user will be able to address the issue comfortably themselves.

**Use cases:** Permission issues, system issues, configuration required, etc.

**Goal:** Users understand the problem and if there are corrective actions available, know what action to take or have options to correct the issue.

**✅ Dos:**

-   Consult with your team to explore what information is available (e.g., what kind of system errors can be experienced).
-   Include clear corrective actions when possible. Use the available buttons or, alternatively, provide simple guidance to help users take action.
-   When relevant, include a short reference to the error type or code to help users (and customer support) identify the issue more easily.
-   Any visuals used should reflect the situation and be sensitive to what might feel serious to the user.

**🚫 Don'ts:**

-   Don't include content that is about other areas of the app. Be contextual.
-   If there are multiple things for the user to try, be sure to include a hierarchy so that it's clear which option would be the primary action.

![Example of an error empty state, showing how to communicate a connection issue and include actions like retry.](https://warp-ds.github.io/docs/patterns/emptystates/types-error_management.svg)

For more detailed information about designing empty states, read Nielsen Norman group's [Designing Empty States in Complex Applications: 3 Guidelines](https://www.nngroup.com/articles/empty-state-interface-design/).

Empty states can include icons or illustrations to help communicate the message.

-   Use icons from the [❖ WARP Icons library](https://www.figma.com/design/yEx16ew6S0Xgd579dN4hsM/WARP---Icons?m=auto&node-id=0-1&t=jh1J3DGQYoryfwI9-1).
-   Use icons at the default size of `64×64px` and in the `Icon/Primary` colour token.
-   Don't use other icon sizes.

![Visual reference using an icon in empty states at default size 64x64px.](https://warp-ds.github.io/docs/patterns/emptystates/visual_guidelines-icons.svg)

-   Use imagery thoughtfully. Metaphors or objects may not translate across all cultures or languages. Illustrations are currently not provided by Warp, but can be added by product teams using their own assets. [See available branded illustration libraries here](https://warp-ds.github.io/docs/foundations/illustrations/#branded-illustration-libraries-in-figma).
-   Use illustrations at the default size of `200×200px`.
-   Don't use other illustration sizes or distort proportions.

![Visual reference using an illustration in empty states at default size 200×200px.](https://warp-ds.github.io/docs/patterns/emptystates/visual_guidelines-illustrations.svg)

The “Part of Vend” tagline can be used in empty states to remind users that Vend is the platform behind their local brand. It helps reinforce trust and awareness that the experience is part of a larger Vend ecosystem.

Use the tagline in empty states where the message refers to a functionality or service delivered by Vend (e.g., login, or account setup).

[See the Vend Endorsement guidelines](https://app.pickit.com/#/documents/collection/6800c6610614a4f90e543d36?filter=e30%3D) for more information.

![Example showing the 'Part of Vend' tagline placed at the bottom of the empty state.](https://warp-ds.github.io/docs/patterns/emptystates/visual_guidelines-vend_tagline.svg)

-   Keep empty state messages clear, purposeful, and action-oriented.
-   When using the predefined variants, use the microcopy available to maintain consistency across our apps.
-   If a predefined variant doesn't fit your use case, you can create your own message.

[Visit Astro for guidance and best practices](https://www.astro-contentguide.com/05b2d7be6/p/5027af-empty-states) to ensure clear and consistent messages in empty states.

If none of the existing variants fit your use case, create a custom version using the Custom state template.

Use the available properties in the component ([see Anatomy](https://warp-ds.github.io/docs/components/emptystates/?ds-main-tabs=Overview#anatomy)) and follow the [Content guidelines](https://warp-ds.github.io/docs/patterns/empty-states/usage#content-guidelines) to keep tone, structure, and messaging consistent with the system.

When creating a custom empty state:

-   Keep layout and spacing aligned with existing variants.
-   Use system tokens for colour, typography, and iconography.

These foundations should work out of the box but, if you need further guidance, reach out to the Warp team on Slack ([#warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV)).

The only required element in the Empty state component is the title, which uses the `T3` heading token. All other elements are optional and should be included based on the use case.

The component has a `420px` max width to ensure the message remains readable and doesn't stretch too wide on larger screens.

A loading state may briefly appear before the empty state is shown. When loading completes, the content fades in to replace the progress indicator.

![Example showing the expected loading behaviour before the 'Fail to load' empty state. A loading spinner appears in the centre of the page while the system retrieves data, then disappears as the empty state replaces it.](https://warp-ds.github.io/docs/patterns/emptystates/behaviour-loading.gif)

Consider adding an action button or relevant links to guide and help users proceed to the next step in resolving the case.

When interacting with a button to reload data, show a loading spinner after the user taps on the button. This indicates that the system is processing the request.

-   If reload succeeds, replace the empty state with the intended content.
-   If it fails, replace the spinner with a button so the user can retry the action.

![Example showing the reload interaction for an empty state. When the user taps 'Try again', a loading spinner briefly appears before either reloading the content or returning to the empty state if loading fails.](https://warp-ds.github.io/docs/patterns/emptystates/interaction-reload.gif)

Empty states can appear either as the main element on a screen or within a container (e.g., modal), depending on the context and user flow. Choose the placement that best matches how and where users encounter the empty state.

The empty state replaces the primary content area of the page. Global navigation elements such as headers, footers, or bottom menus should remain visible so users can continue browsing.

Always display the empty state close to where the missing content would normally appear, so the context remains clear to the user.

![Example showing an empty state centered in the main content area of an app screen prompting the user to login, with navigation elements still visible for continued browsing.](https://warp-ds.github.io/docs/patterns/emptystates/placement-main_element-app.svg)

Example showing an empty state centered in the main content area of an app screen prompting the user to login, with navigation elements still visible for continued browsing.  
  

![Example showing an empty state centered in the main content area of the search results page on desktop web, with navigation elements and filters still visible for continued browsing.](https://warp-ds.github.io/docs/patterns/emptystates/placement-main_element-web_desktop.svg)

Example showing an empty state centered in the main content area of the search results page on desktop web, with navigation elements and filters still visible for continued browsing.  
  

When used within a container, such as a modal or a section, the empty state should align with the layout and hierarchy of that container. Keep spacing consistent with surrounding content.

![Example showing an empty state displayed within a modal, aligned with the container layout.](https://warp-ds.github.io/docs/patterns/emptystates/placement-modal.svg)

Example showing an empty state displayed within a modal, aligned with the container layout.

## Accessibility

Empty states are used to fill spaces when no content can be shown to the user, or is temporarily empty due to the nature of the feature.

Icons and illustrations should remain their default size and not scale when users adjust text size in their device's accessibility settings.

## Frameworks

### Android

Empty states are used to fill spaces when no content can be shown to the user, or is temporarily empty due to the nature of the feature.

[Android](https://warp-ds.github.io/docs/patterns/empty-states/frameworks/android)[iOS](https://warp-ds.github.io/docs/patterns/empty-states/frameworks/ios)

```kotlin
@Composable
fun WarpState(
    modifier: Modifier = Modifier,
    type: WarpStateType? = null,
    painter: Painter? = null,
    icon: WarpIconResource? = null,
    tintColor: Color? = null,
    imageSize: Dp? = null,
    imageContentDescription: String? = null,
    title: String? = null,
    description: String? = null,
    primaryButtonText: String? = null,
    onPrimaryButtonClicked: () -> Unit = {},
    quietButtonText: String? = null,
    onQuietButtonClicked: () -> Unit = {},
    showLogo: Boolean = false
)
```

There are pre-defined types of WarpState that can be used out-of-the-box. If no type is provided all the fields will be null and you can customize freely. Supports illustrations by using the painter property.

```kotlin
enum class WarpStateType {
    NoSearchResults,
    LoadFailed,
    Loading,
    Login,
    Offline,
    Verify
}

WarpState(
    type = WarpStateType.NoSearchResults,
    onPrimaryButtonClicked = { }
)

WarpState(
    type = WarpStateType.Login,
    onPrimaryButtonClicked = { },
    onQuietButtonClicked = { }
)

//Custom state with icon
WarpState(
    modifier = Modifier.fillMaxSize(),
    title = "Custom title",
    description = "Custom text and custom content.",
    icon = icons.shovel,
    primaryButtonText = "Primary action",
    onPrimaryButtonClicked = { },
    quietButtonText = "Secondary action",
    onQuietButtonClicked = { }
)

//Custom state with illustration
WarpState(
    modifier = Modifier.fillMaxSize(),
    title = "Custom state",
    description = "Custom text and custom content.",
    painter = painterResource(R.drawable.warp_placeholder),
    imageContentDescription = "Placeholder illustration",
    primaryButtonText = "Okay",
    onPrimaryButtonClicked = { },
    quietButtonText = "Retry",
    onQuietButtonClicked = { }
        )
```

Not supported

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Modifier for the state component |
| type | WarpStateType.NoSearchResults WarpStateType.LoadFailed WarpStateType.Offline WarpStateType.Login WarpStateType.Verify WarpStateType.Loading | null | Pre-defined type of the state |
| painter | Painter | null | Painter for the illustration of the state component |
| icon | WarpIconResource | null | Icon for the state component |
| tintColor | Color | null | Icon color for the state component |
| imageSize | Dp | null | Image size |
| imageContentDescription | String | null | Content description of the illustration |
| title | String | null | Title to be displayed in the state |
| description | String | null | Description text to be displayed in the state |
| primaryButtonText | String | null | Text to be displayed on the primary button |
| onPrimaryButtonClicked | () -> Unit | null | Action when primary button is clicked |
| quietButtonText | String | null | Text to be displayed on the quiet button |
| onQuietButtonClicked | () -> Unit | null | Action when quiet button is clicked |
| showLogo | Boolean | false | Toggle to show the Vend Logo |

### iOS

Empty states are used to fill spaces when no content can be shown to the user, or is temporarily empty due to the nature of the feature.

[Android](https://warp-ds.github.io/docs/patterns/empty-states/frameworks/android)[iOS](https://warp-ds.github.io/docs/patterns/empty-states/frameworks/ios)

`StateView` is a flexible SwiftUI generic view component to display visual representations of various UI states. It supports an icon or illustration, optional title and description text, primary and secondary action buttons, and an optional brand logo endorsement. Designed for Warp, it is highly customizable and accessible.

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

Warp provides a set of predefined `StateView` variants for common UI states. Each variant wraps the base `StateView` with specific configuration, predefined images, texts, and actions to simplify displaying these states.

Note on overriding: Each variant conforms to `StateViewConfigurable` and can be customized using the provided `.override(...)` helpers. Use these helpers to change the image, image dimensions, tint color, accessibility label, title, description, primary/quiet buttons, or `showLogo`. They return a modified copy, so multiple overrides may be chained (for example: `LoginStateView(...).override(title: "Sign in").override(showLogo: false)`). This should be used as a last resort action because variants are designed to be used without modification to maintain similar appearance.

Represents a failure-to-load state with a sad smiley icon, localized title and description, and a retry button.

```swift
FailToLoadStateView(retryAction: {
    print("Retry tapped")
})
```

Shows a loading spinner with localized descriptive text for ongoing loading states.

```swift
LoadingStateView()
```

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

Indicates no network connectivity using a WiFi icon, localized text, and retry button.

```swift
NoNetworkStateView(retryAction: {
    print("Retry tapped")
})
```

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

-   Display either a Warp icon or a custom illustration image.
-   Optional title and rich description text with scroll support (for scalable fonts)
-   Primary and secondary (quiet) buttons for user interaction.
-   Optional brand logo endorsement that adapts theme-based branding.
-   Accessible illustration content description.
-   Customizable icon/illustration size and illustration tint color.

The illustration uses the provided `imageContentDescription` as its accessibility label. Warp icons use default accessibility label

Certain variants (i.e. `LoginStateView`) adapts the displayed endorsement logo according to the current Warp theme (`finn`, `blocket`, `tori`, `dba`, `vend`, `neutral`), ensuring consistent brand representation.

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | string |  | Main title text displayed in the state view. |

#### EmptyStates props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| image | StateImage? | nil | Optional state image — either a Warp icon or a custom illustration. If omitted, no image is displayed. |
| imageWidth | number? | nil | Optional width override for the image (overrides default icon size/illustration width; use sparingly). |
| imageHeight | number? | nil | Optional height override for the image (overrides default illustration height; use sparingly). |
| tintColor | Color? | nil | Optional tint color applied to the illustration where supported. |
| imageContentDescription | string? | nil | Accessibility label for the illustration — provide when the image conveys important information. |
| description | string? | nil | Optional descriptive text shown below the title; supports multiline content. |
| actionButton | StateButton? | nil | Optional primary action configuration (title and handler) for the main CTA. |
| quietButton | StateButton? | nil | Optional secondary (quiet) action configuration for less-prominent actions. |
| showLogo | boolean | false | Whether to display the brand endorsement logo beneath the state view. |
