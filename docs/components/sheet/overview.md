# Sheet - Overview

A sheet is a surface that slides up over the current screen to present related content or a focused task, while keeping the underlying screen in context.

<ComponentsStatus />

## General

Warp sheets are built on the native SwiftUI sheet. Warp adds the sheet style, drag indicator and background treatment.

Sheets come in two styles:

- **Medium:** a half-height sheet that can be dragged up to full height.
- **Full screen:** a full-height sheet that has one size only.

## Background

- **Glass:** on iOS 26 a medium sheet is translucent Liquid Glass. The system turns it opaque when it is dragged to full height.
- **Solid:** an opaque elevated surface on every OS version. Use it when translucency hurts legibility over a busy backdrop, or when the sheet should read as a focused task.

## When to use

- To present a short, related task or extra details without leaving the screen.
- For content that people can dismiss and return from easily.

## When not to use

- For critical decisions that need a response. Use [Confirmation dialog](/components/confirmation-dialog/overview.md).
- For a short list of actions. Use [Menu](/components/menu/overview.md).
