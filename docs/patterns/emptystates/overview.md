# Empty states

Empty states are moments in the user experience when we don't have specific info or data to display to the user. They're also an opportunity to guide the user by explaining what to do next, preventing confusion.

#### Common alternative names
State, no-data state, empty view, zero-data state, no results, first-use state, missing state, loading

## Anatomy

::: image-block
![Example of a focused date input field with an open calendar below displaying January 2023 and the current selection is the 11th. The example is surrounded by four numbered highlights, pointing to the label, date input field, the optional calendar icon and the calendar popover](/patterns/emptystates/overview-anatomy.svg)
:::


1. **Visual (optional)**: A non-interactive icon or illustration that relates to the situation.

2. **Title**: A short and concise explanation.

3. **Description (optional)**: Explains the situation in more detail and clearly provides guidance on the next action to populate the space.

4. **Primary action (optional)**: The primary call to action referenced in the description copy above.

5. **Secondary action (optional)**: If there is a secondary action, such as referencing documentation for further reading or an alternative destination, include it as a less visually emphasised button (Button Quiet).

6.  **Tagline (optional)**: Endorses Vend and helps build brand awareness at key user journey's touch points. [See the Vend Endorsement guidelines](https://app.pickit.com/#/documents/collection/6800c6610614a4f90e543d36?filter=e30%3D) for more information.

## Variants

### Fail to load (error)

Use when content can't be retrieved or displayed due to a data or API error. Include an option to reload.

<div class="width: 100%;">
    <img src="/patterns/emptystates/use_cases-fail_to_load.svg" alt="Example of the 'Fail to load' empty state for when the system fails loading data." />
</div>

### Page not found (error)

Use for 404 pages or when the user tries to access a page that doesn't exist or they don't have permission for. **Available in web and Figma only.**

<div class="width: 100%;">
    <img src="/patterns/emptystates/use_cases-page_not_found.svg" alt="Example of the 'Page not found' empty state for a user trying to access a page that doesn't exist." />
</div>

### Not logged in (error)

Use when a feature or page requires authentication and the user isn't logged in. Provide clear log-in and sign-up actions. 

<div class="width: 100%;">
    <img src="/patterns/emptystates/use_cases-not_logged_in.svg" alt="Example of the 'Not logged in' empty state for when a user tries to access a page that requires authentication." />
</div>

### Verify identity (error)

Use when identity verification is required before continuing an action (e.g., contacting a seller). Adapt the content based on the country's identity verification provider. 

<div class="width: 100%;">
    <img src="/patterns/emptystates/use_cases-verify_identity.svg" alt="Example showing the 'Verify identity' empty state used when a user tries to access a feature that requires identity verification." />
</div>

### No network connection (error)

Use when the user's internet connection is lost or unstable. Include a retry option. 

<div class="width: 100%;">
    <img src="/patterns/emptystates/use_cases-no_network_connection.svg" alt="Example of the 'No connection' empty state for when the user loses internet connection." />
</div>

### No search results (no data)

Use when no items match the user's search. Let users save the search to get notified about new items or clear filters to try again. 

<div class="width: 100%;">
    <img src="/patterns/emptystates/use_cases-no_search_results.svg" alt="Example of the 'No search results' empty state for when a search returns no results." />
</div>

### No messages (no data)

Use when the user's inbox is empty and there are no messages to display. **Available in Figma only.**

<div class="width: 100%;">
    <img src="/patterns/emptystates/use_cases-no_messages.svg" alt="Example of the 'No messages' empty state for when the messages inbox is empty." />
</div>

### No favourites (no data)

Use when the user hasn't saved any favourite items yet. **Available in Figma only.**

<div class="width: 100%;">
    <img src="/patterns/emptystates/use_cases-no_favourites.svg" alt="Example of the 'No favourites' empty state for when a user hasn't saved items yet." />
</div>

### No payment cards (no data)

Use when the user has no payment cards saved to complete a transaction. **Available in Figma only.**

<div class="width: 100%;">
    <img src="/patterns/emptystates/use_cases-no_payment_card.svg" alt="Example of the 'No payment card' empty state for when a user has no cards saved in their account." />
</div>

### Loading (no data)

Use to indicate that the system is loading data for the screen or section the user is trying to access. You can include a short message, but keep it brief since it's only visible for a few seconds. 

<div class="width: 100%;">
    <img src="/patterns/emptystates/use_cases-loading.svg" alt="Example of the 'Loading' empty state for when the system is retrieving data before showing it to the user." />
</div>