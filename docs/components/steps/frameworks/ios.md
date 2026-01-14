# Steps - Frameworks
The steps component is built to handle user journeys, showing progress.

<ComponentsStatus />

## iOS

<FrameworkTabs />

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

#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| stepModel | Warp.StepIndicatorModel |  | An array of `Warp.StepIndicatorItem` objects which contains `title`, `description` and `progress` of the steps, the first two are strings and `progress` can be `incomplete`, `inProgress`, or `complete` with default value as `incomplete`. |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| layoutOrientation | LayoutOrientation | .vertical | The orientation of the step indicator.  Use one of the predefined `LayoutOrientation` values: `.vertical`, or `.horizontal`. |

<component-questions />