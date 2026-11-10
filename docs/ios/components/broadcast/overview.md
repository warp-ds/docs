---
status: deprecated
pendingReview: true
---

# Broadcast

<ComponentsStatus />

A longer broadcast message that can span several lines, shown at the top or bottom edge of a view.

See also [Alert](/ios/components/alert/overview.md).

::: warning Deprecated
`Warp.Broadcast` is deprecated in warp-ios and will be removed in a future release. Use an [Alert](/ios/components/alert/overview.md) with the warning variant instead.
:::

## When to use

Broadcast was meant for announcements or information outside the normal user flow. For new work, use an Alert with the warning variant.

## Behaviour

- Appears from the top or bottom edge of the view (`Warp.BroadcastEdge`: `.top` or `.bottom`).
- Can be dismissible by the user, which adds a close button (`isDismissable`, on by default).
- Shown and hidden through a binding (`isPresented`). Added with the `.warpBroadcast` modifier, it overlays the view at that edge and animates in and out.

See [Code](/ios/components/broadcast/code.md) for the full API.

<component-questions />
