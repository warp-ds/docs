# Steps - iOS
The steps component is built to handle user journeys, showing progress.

<ComponentsStatus />

## iOS

<FrameworkTabs />

### Syntax
A step indicator displays a user’s progress through a set of steps, guiding toward the completion of a specified process.

```swift example
Warp.StepIndicator(
    layoutOrientation: Warp.StepIndicator.LayoutOrientation = .vertical,
    numbered: Bool = false,
    stepModel: Warp.StepIndicatorModel
)
```

Use step indicators to keep the user on track when completing a specific set of tasks or processes.

`Warp.StepIndicatorModel(from:)` throws when the steps are in an invalid order (see [Validation](#validation)).
Create the model in a `do`/`catch` block, or with `try?` and handle the `nil` case. Do not mix the two.

### Horizontal

```swift example
struct CheckoutStepsView: View {
    private let stepModel = try? Warp.StepIndicatorModel(from: [
        .init(title: "Step 1", description: "Delivery", progress: .complete),
        .init(title: "Step 2", description: "Payment", progress: .inProgress),
        .init(title: "Step 3", description: "Confirmation", progress: .incomplete)
    ])

    var body: some View {
        if let stepModel {
            Warp.StepIndicator(layoutOrientation: .horizontal, stepModel: stepModel)
        }
    }
}
```

### Vertical

```swift example
func makeStepModel() -> Warp.StepIndicatorModel? {
    do {
        return try Warp.StepIndicatorModel(from: [
            .init(title: "Step 1", description: "Delivery", progress: .complete),
            .init(title: "Step 2", description: "Payment", progress: .inProgress),
            .init(title: "Step 3", description: "Confirmation", progress: .incomplete)
        ])
    } catch {
        print("Invalid steps: \(error.localizedDescription)")
        return nil
    }
}

// In the view body
if let stepModel = makeStepModel() {
    Warp.StepIndicator(layoutOrientation: .vertical, stepModel: stepModel)
}
```

### Progress

Each `Warp.StepIndicatorItem` has a `progress` of type `Warp.StepIndicatorItem.Progress`. The default is `.incomplete`.

| Case | Description |
| --- | --- |
| `.incomplete` | The task or process has not been completed yet. |
| `.inProgress` | The task or process is in progress. Shows the user the current step. |
| `.complete` | The task or process has been completed. Shows a checkmark. |
| `.error` | The task or process failed, was canceled or is invalid. Shows an X icon and overrides both the `.complete` and `.inProgress` visuals. |

### Error state

Use `.error` for a step that failed. An error step can be placed anywhere, but only `.incomplete` steps can follow it.

```swift example
let stepModel = try? Warp.StepIndicatorModel(from: [
    .init(title: "Step 1", description: "Delivery", progress: .complete),
    .init(title: "Step 2", description: "Payment failed", progress: .error),
    .init(title: "Step 3", description: "Confirmation", progress: .incomplete)
])

if let stepModel {
    Warp.StepIndicator(layoutOrientation: .vertical, stepModel: stepModel)
}
```

### Numbered

Set `numbered: true` to show the 1-based step number in active and upcoming steps.
Completed steps keep the checkmark and error steps keep the X icon.
VoiceOver also announces the position of each numbered step, for example "Step 2 of 3".

```swift example
if let stepModel = try? Warp.StepIndicatorModel(from: [
    .init(title: "Step 1", description: "Delivery", progress: .complete),
    .init(title: "Step 2", description: "Payment", progress: .inProgress),
    .init(title: "Step 3", description: "Confirmation")
]) {
    Warp.StepIndicator(layoutOrientation: .horizontal, numbered: true, stepModel: stepModel)
}
```

### Custom title

Use the initializer with a `titleView` closure to replace the title and description of each step.
Use `Warp.StepIndicator.TitleView(step:layoutOrientation:)` inside the closure to keep the default formatting.

```swift example
Warp.StepIndicator(layoutOrientation: .horizontal, stepModel: stepModel) { step in
    VStack(spacing: Warp.Spacing.spacing50) {
        Text(step.title.uppercased())
            .font(.caption.bold())
        Text(step.description)
            .font(.footnote)
            .foregroundStyle(.secondary)
    }
}
```

### Validation

`Warp.StepIndicatorModel(from:)` checks the order of the steps and throws a `Warp.StepIndicatorError` when it is invalid.
You cannot:

- add an `.inProgress` or `.complete` step after an `.incomplete` step
- add a `.complete` step after an `.inProgress` step
- add an `.inProgress` step after another `.inProgress` step
- add an `.inProgress` or `.complete` step after an `.error` step

An `.error` step can be placed anywhere.

| Error | Description |
| --- | --- |
| `.completedStepAfterIncompletedStep` | You cannot add a completed step after an incompleted step |
| `.completedStepAfterInProgressStep` | You cannot add a completed step after a step in progress |
| `.stepInProgressAfterIncompleteStep` | You cannot add a step in progress after an incompleted step |
| `.stepInProgressAfterAnotherStepInProgress` | You cannot add a step in progress after another step in progress |
| `.activeOrCompletedStepAfterErrorStep` | You cannot add a completed step or a step in progress after a step in error |

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.StepIndicator(layoutOrientation: .horizontal, stepModel: stepModel).uiView
```

### Parameters

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| stepModel | Warp.StepIndicatorModel |  | A validated list of `Warp.StepIndicatorItem` objects. Each item has a `title`, a `description` and a `progress` (`.incomplete`, `.inProgress`, `.complete` or `.error`, default `.incomplete`). |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| layoutOrientation | Warp.StepIndicator.LayoutOrientation | .vertical | The orientation of the step indicator: `.vertical` or `.horizontal`. |
| numbered | Bool | false | When `true`, active and upcoming steps show their 1-based step number. Completed steps keep the checkmark and error steps keep the X icon. |
| titleView | (Warp.StepIndicatorItem) -> View | nil | Custom title and description view for each step. Without it the default `TitleView` is used. |

<component-questions />
