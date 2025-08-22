
### Syntax
A step indicator displays a user’s progress through a set of steps, guiding toward the completion of a specified process.

```swift example
Warp.StepIndicator(
    layoutOrientation: LayoutOrientation = .vertical,
    stepModel: Warp.StepIndicatorModel
)
```

Use step indicators to keep the user on track when completing a specific set of tasks or processes.

Horizontal `StepIndicator`.
```swift example
var steps: [Warp.StepIndicatorItem] = [
        .init(
            title: "Step 1",
            description: "progress = .complete",
            progress: .complete
        ),
        .init(
            title: "Step 2",
            description: "progress = .inProgress",
            progress: .inProgress
        ),
        .init(
            title: "Step 3",
            description: "progress = .incomplete",
            progress: .incomplete
        )
    ]
do {
    var stepModel = try? Warp.StepIndicatorModel(from: steps)
    Warp.StepIndicator(layoutOrientation: .horizontal, stepModel: stepModel)
} catch {
    print("Error: \(error)")
}
```
Vertical `StepIndicator`.

```swift example
var steps: [Warp.StepIndicatorItem] = [
        .init(
            title: "Step 1",
            description: "progress = .complete",
            progress: .complete
        ),
        .init(
            title: "Step 2",
            description: "progress = .inProgress",
            progress: .inProgress
        ),
        .init(
            title: "Step 3",
            description: "progress = .incomplete",
            progress: .incomplete
        )
    ]
do {
    var stepModel = try? Warp.StepIndicatorModel(from: steps)
    Warp.StepIndicator(layoutOrientation: .vertical, stepModel: stepModel)
} catch {
    print("Error: \(error)")
}
```
`StepIndicatorModel` is a helper class that takes an array of `StepIndicatorItem`s and creates the model for the `StepIndicator`.
Run through all steps and ensure that there are : <br />
    - no `inProgress` steps after an `incompleted` step<br />
    - no `completed` steps after an `incompleted` step<br />
    - no `completed` steps after an `inProgress` step<br />
    - one `inProgress` step at a time<br />

### Legacy support

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift example
Warp.StepIndicator(layoutOrientation: .horizontal, stepModel: stepModel).uiView
```

### Parameters

<api-table type=iOS component="StepIndicator" />