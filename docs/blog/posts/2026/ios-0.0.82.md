---
title: 'WARP iOS release v.0.0.82'
date: 2026-06-29
---

DatePicker update and new ConfirmationDialog component

---

# Warp iOS release 0.0.82

## 2026-06-29

#### ConfirmationDialog component

New `.warpConfirmationDialog()` modifier wraps the native iOS confirmation dialog with Warp-styled actions.

```swift
Text("Content")
    .warpConfirmationDialog(
        title: "Delete item?",
        message: "This action cannot be undone.",
        actions: [
            Warp.ConfirmationDialog.Action(title: "Delete", style: .destructive) { handleDelete() },
            Warp.ConfirmationDialog.Action(title: "Archive") { handleArchive() }
        ],
        isPresented: $showDialog
    )
```

A Cancel button is provided automatically by the system.

#### DatePicker update

- Updated `DatePicker` component with latest design changes
