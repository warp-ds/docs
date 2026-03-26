# Steps

The steps component is built to handle user journeys, showing progress.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/steps/overview), [Usage](https://warp-ds.github.io/docs/components/steps/usage), [React](https://warp-ds.github.io/docs/components/steps/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/steps/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/steps/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/steps/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/steps/frameworks/ios)

**Framework support:** Android, Elements, iOS, React, Vue

## Overview

The steps component is built to handle user journeys, showing progress.

## Inline Demo Markup

```html
<h3 class="h4">Horizontal Steps</h3>
    <w-step-indicator horizontal class="mb-32">
        <w-step completed>
            <strong>Step 1</strong>
            <p>The first step</p>
        </w-step>
        <w-step active>
            <strong>Step 2</strong>
            <p>The second step</p>
        </w-step>
        <w-step>
            <strong>Step 3</strong>
            <p>The last step</p>
        </w-step>
    </w-step-indicator>
    <h3 class="h4 pt-12">Vertical Steps</h3>
    <w-step-indicator class="mb-32">
        <w-step completed>
            <strong>Step 1</strong>
            <p>The first step</p>
        </w-step>
        <w-step active>
            <strong>Step 2</strong>
            <p>The second step</p>
        </w-step>
        <w-step>
            <strong>Step 3</strong>
            <p>The last step</p>
        </w-step>
    </w-step-indicator>
    <h3 class="h4 pt-12">Vertical Steps (Right aligned)</h3>
    <w-step-indicator right>
        <w-step completed>
            <strong>Step 1</strong>
            <p>The first step</p>
        </w-step>
        <w-step active>
            <strong>Step 2</strong>
            <p>The second step</p>
        </w-step>
        <w-step>
            <strong>Step 3</strong>
            <p>The last step</p>
        </w-step>
    </w-step-indicator>
```

## Usage

> This page is still in progress in the public docs.

## Frameworks

### React

The steps component is built to handle user journeys, showing progress.

You can import the component like so:

```js
import { Steps, Step } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Steps, Step } from '@warp-ds/react/components/steps';
```

```js
function Example() {
  return (
    <Steps>
      <Step completed>
        <h4>Step one</h4>
        <p>Content</p>
      </Step>
      <Step active>
        <h4>Step two</h4>
        <p>Content</p>
      </Step>
      <Step>
        <h4>Step three</h4>
        <p>Content</p>
      </Step>
    </Steps>
  );
}
```

**Note** the `active` and `completed` properties on the `<Step>` component. You have to conditionally set the truthiness of these properties depending on where in the process the user is. See interactive example below.

#### Interactive usage 

```js
function Example() {
  const [state, setState] = useState(0);
  const [horizontal, setHorizontal] = useState(false);
  const [right, setRight] = useState(false);

  const handleIncrease = () => {
    if (state === 3) {
      return setState(0);
    }

    return setState((state) => state + 1);
  };

  return (
    <>
      <Button onClick={handleIncrease} small>
        Complete a step
      </Button>
      <Button className="ml-8" onClick={() => setHorizontal(!horizontal)} small>
        {horizontal ? 'Vertical' : 'Horizontal'}
      </Button>
      {!horizontal && (
        <Button className="ml-8" onClick={() => setRight(!right)} small>
          {right ? 'Left' : 'Right'}
        </Button>
      )}

      <Steps className="mt-20" horizontal={horizontal} right={right}>
        <Step active={state === 0} completed={state > 0}>
          <h4 className="mt-0">Step one</h4>
          <p>Some content</p>
        </Step>
        <Step active={state === 1} completed={state > 1}>
          <h4 className="mt-0">Step two</h4>
          <p>Some content</p>
        </Step>
        <Step active={state === 2} completed={state > 2}>
          <h4 className="mt-0">Step three</h4>
          <p>Some content</p>
        </Step>
      </Steps>
    </>
  );
}
```

**Note** the `horizontal` and `right` properties on the `<Steps>` component. These choose the direction and alignment of the steps.

#### Steps 

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | Element[] |  | Two or more Step components |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| horizontal | boolean | false | Direction of steps |
| right | boolean | false | Align steps to the right |
| className | string |  | Additional CSS class for the container |

#### Step 

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | Element \| Element[] |  | Contents of Step component |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| active | boolean | false | Step is active |
| completed | boolean | false | Step is completed |

### Vue

The steps component is built to handle user journeys, showing progress.

> Use in entire app

```js
import { Steps } from '@warp-ds/vue';
app.use(Steps);
```

> Use in one component and special imports

You can import the component like so:

```js
import { wSteps, wStep } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wSteps, wStep } from '@warp-ds/vue/steps';
```

```vue
<w-steps>
  <w-step complete>Step 1</w-step>
  <w-step active>Step 2</w-step>
  <w-step>Step 3</w-step>
</w-steps>
```

#### Interactive usage 

```vue
<script setup>
import { computed, reactive, ref } from 'vue';
import { wButton, wSteps, wStep } from '@warp-ds/vue';

const steps = [
  { name: 'Step 1', desc: 'The first step' },
  { name: 'Step 2', desc: 'The second step' },
  { name: 'Step 3', desc: 'The last step' },
];

const currentStep = ref(0);

const stepControlButtonText = computed(() => {
  switch(currentStep.value) {
    case steps.length:
      return 'Start over';
    case (steps.length - 1):
      return 'Finish'
    default:
      return 'Next step';
  }
});

const nextStep = () => {
  if (++currentStep.value > steps.length) currentStep.value = 0;
};
</script>
<template>
  <w-steps horizontal>
    <w-step v-for="(step, stepIndex) in steps" :key="step.name" :active="currentStep === stepIndex" :complete="currentStep > stepIndex">
      <strong>{{ step.name }}</strong>
      <p>{{ step.desc }}</p>
    </w-step>
  </w-steps>
  <w-button @click="nextStep">{{ stepControlButtonText }}</w-button>
</template>
```

#### Steps 

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| horizontal | boolean | false | Direction of steps |
| right | boolean | false | Align steps to the right |

#### Step 

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| active | boolean | false | Step is active |
| completed | boolean | false | Step is completed |

### Elements

The steps component is built to handle user journeys, showing progress.

The steps component consists of two custom elements that work together:

-   `<w-step-indicator>` - The container that manages step layout and orientation
-   `<w-step>` - Individual step items within the indicator

Each `<w-step>` can be marked as `active` or `completed` to indicate progress. The `<w-step-indicator>` component automatically handles:

-   Vertical and horizontal layouts
-   Left and right alignment (for vertical layout)
-   Visual connecting lines between steps
-   ARIA attributes for accessibility

```html
<w-step-indicator>
  <w-step completed>
    <h4>Step one</h4>
    <p>This step is completed</p>
  </w-step>
  <w-step active>
    <h4>Step two</h4>
    <p>This is the current step</p>
  </w-step>
  <w-step>
    <h4>Step three</h4>
    <p>This step is upcoming</p>
  </w-step>
</w-step-indicator>

<script type="module">
  // Update step states programmatically
  const steps = document.querySelectorAll('w-step');

  // Mark a step as completed
  steps[0].completed = true;

  // Mark a step as active
  steps[1].active = true;
</script>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| horizontal | boolean | false | Display steps horizontally instead of vertically |
| right | boolean | false | Align steps to the right (vertical layout only) |

#### Slots 

| Name | Description |
| --- | --- |
| default | <w-step> elements for each step |

#### Horizontal (`horizontal`) 

Display steps in a horizontal layout instead of the default vertical layout.

Type: `boolean`

Default: `false`

```html
<w-step-indicator horizontal>
  <w-step completed>
    <h4>Step 1</h4>
    <p>Completed</p>
  </w-step>
  <w-step active>
    <h4>Step 2</h4>
    <p>In progress</p>
  </w-step>
  <w-step>
    <h4>Step 3</h4>
    <p>Upcoming</p>
  </w-step>
</w-step-indicator>
```

#### Right (`right`) 

Align the step indicator to the right side. This only applies to the vertical layout.

Type: `boolean`

Default: `false`

```html
<w-step-indicator right>
  <w-step completed>
    <h4>Step one</h4>
    <p>Completed step</p>
  </w-step>
  <w-step active>
    <h4>Step two</h4>
    <p>Current step</p>
  </w-step>
  <w-step>
    <h4>Step three</h4>
    <p>Next step</p>
  </w-step>
</w-step-indicator>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| active | boolean | false | Whether this step is active |
| completed | boolean | false | Whether this step is completed |

#### Slots 

| Name | Description |
| --- | --- |
| default | The step content |

#### Active (`active`) 

Mark a step as the currently active step. The active step displays a filled indicator.

Type: `boolean`

Default: `false`

```html
<w-step-indicator>
  <w-step>
    <h4>Step one</h4>
    <p>Not active</p>
  </w-step>
  <w-step active>
    <h4>Step two</h4>
    <p>This step is active</p>
  </w-step>
  <w-step>
    <h4>Step three</h4>
    <p>Not active</p>
  </w-step>
</w-step-indicator>
```

#### Completed (`completed`) 

Mark a step as completed. Completed steps display a checkmark icon and a filled indicator.

Type: `boolean`

Default: `false`

```html
<w-step-indicator>
  <w-step completed>
    <h4>Step one</h4>
    <p>This step is completed</p>
  </w-step>
  <w-step completed>
    <h4>Step two</h4>
    <p>This step is also completed</p>
  </w-step>
  <w-step active>
    <h4>Step three</h4>
    <p>Current step</p>
  </w-step>
</w-step-indicator>
```

You can programmatically update step states by setting the `active` and `completed` properties:

```html
<w-step-indicator id="controlled-steps">
  <w-step>
    <h4>Step one</h4>
    <p>First step</p>
  </w-step>
  <w-step>
    <h4>Step two</h4>
    <p>Second step</p>
  </w-step>
  <w-step>
    <h4>Step three</h4>
    <p>Third step</p>
  </w-step>
</w-step-indicator>
<script type="module">
  const stepIndicator = document.querySelector('#controlled-steps');
  const steps = stepIndicator.querySelectorAll('w-step');

  // Set initial state: first step completed, second active
  steps[0].completed = true;
  steps[1].active = true;
</script>
```

## Inline Demo Markup

```html
<w-step-indicator>
    <w-step completed>
      <h4>Step one</h4>
      <p>This step is completed</p>
    </w-step>
    <w-step active>
      <h4>Step two</h4>
      <p>This is the current step</p>
    </w-step>
    <w-step>
      <h4>Step three</h4>
      <p>This step is upcoming</p>
    </w-step>
  </w-step-indicator>
```

### Android

The steps component is built to handle user journeys, showing progress.

Vertical and Horizontal versions are separate implementations in Compose so choose accordingly:

```kotlin
@Composable
fun VerticalWarpStepIndicator(
    modifier: Modifier = Modifier,
    steps: Int,
    activeStep: Int = 0,
    onStepClicked: ((Int) -> Unit)? = null,
    stepContentDescription: (@Composable (Int) -> String)? = null,
    stepTitle: ((Int) -> String)? = null,
    stepDescription: ((Int) -> String)? = null,
    stepContent: @Composable (Int) -> Unit
)

@Composable
fun HorizontalWarpStepIndicator(
    modifier: Modifier = Modifier,
    steps: Int,
    activeStep: Int = 0,
    onStepClicked: ((Int) -> Unit)? = null,
    stepContentDescription: (@Composable (Int) -> String)? = null,
    stepTitle: ((Int) -> String)? = null,
    stepDescription: ((Int) -> String)? = null
)
```

The step indicator must have more than 1 step to function. Title and description are functions that provide the step value as Integer. The easiest way is to provide a list of titles and descriptions. The 1st step starts with 0 value. Also possible to provide content descriptions for each step.

```kotlin
var activeState by remember { mutableIntStateOf( 0) }
val labels = listOf("Start", "Profile", "Payment", "Add-ons", "Thanks!")
val descriptions = listOf("Start your journey here", "Something about you", "Nothing is for free", "Extra everything?", "Have a nice day!")

HorizontalWarpStepIndicator(
    modifier = Modifier,
    steps = 3,
    activeStep = activeState,
    onStepClicked = { activeState = it },
    stepContentDescription =  { labels[it] },
    stepTitle = { labels[it] },
    stepDescription = { descriptions[it] }
)
```

VerticalStepIndictor accepts custom content placed betweend the steps.

```kotlin
VerticalWarpStepIndicator(
    modifier = Modifier.fillMaxWidth(),
    steps = 5,
    activeStep = activeState,
    onStepClicked = { activeState = it },
    stepContentDescription =  { labels[it] },
    stepTitle = { labels[it] },
    stepDescription = { descriptions[it] }
) {
    /** Shows a "Continue" button while on the active step and a "Reset" button on all the other steps. 
    Clicking the "Continue" button will mark the current step as complete and take the user forward by 1 step. 
    Clicking on the "Reset" button will take the user to that step and mark it as active in addition to marking all the previous steps as incomplete.**/
    Column(modifier = Modifier.padding(vertical = dimensions.space1)) {
        WarpText(
            text = "Custom content! Maybe some text and maybe something else?",
            style = WarpTextStyle.Body
        )
        if (activeState == it) { 
            WarpButton(
                modifier = Modifier.padding(
                    top = dimensions.space1,
                    bottom = dimensions.space3
                ),
                onClick = { activeState++ },
                buttonStyle = WarpButtonStyle.Primary,
                text = "Continue"
            )
        } else {
            WarpButton(
                modifier = Modifier.padding(
                    top = dimensions.space1,
                    bottom = dimensions.space3
                ),
                onClick = { activeState = it },
                buttonStyle = WarpButtonStyle.Primary,
                text = "Reset"
            )
        }
    }
}
```

To support layouts still written in xml the WarpStepIndicator can be used as a custom view. To add functionality to the step click, set a click listener. The title and description is a function that needs to be set programmatically. The custom content for the vertical orientation is also set programmatically and should be in Compose.

```kotlin
fun setOnStepClickedListener(onClick: (Int) -> Unit)

var stepContent: @Composable ((Int) -> Unit)?
```

```xml
<com.schibsted.nmp.warp.components.legacy.WarpStepIndicatorView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:activeStep="0"
    app:stepIndicatorOrientation="horizontal"
    app:steps="3" />

<com.schibsted.nmp.warp.components.legacy.WarpStepIndicatorView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:activeStep="1"
    app:stepIndicatorOrientation="vertical"
    app:steps="5" />
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| steps | Int |  | The amount of steps in the indicator |
| stepContent | @Composable (Int) -> Unit |  | The custom content between the steps. Vertical orientation only |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the step indicator |
| activeStep | Int | 0 | The active step in the step indicator |
| onStepClicked | (Int) -> Unit | null | Lambda for the step click action, returns the integer value of the step clicked |
| stepContentDescription | @Composable (Int) -> String | null | The content description of the step. Used for accessibility purposes |
| stepTitle | (Int) -> String | null | Lambda for the step title, returns the integer value of the step |
| stepDescription | (Int) -> String | null | Lambda for the step description, returns the integer value of the step |

### iOS

The steps component is built to handle user journeys, showing progress.

A step indicator displays a user’s progress through a set of steps, guiding toward the completion of a specified process.

```swift
Warp.StepIndicator(
    layoutOrientation: LayoutOrientation = .vertical,
    stepModel: Warp.StepIndicatorModel
)
```

Use step indicators to keep the user on track when completing a specific set of tasks or processes.

Horizontal `StepIndicator`.

```swift
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

```swift
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

`StepIndicatorModel` is a helper class that takes an array of `StepIndicatorItem`s and creates the model for the `StepIndicator`. Run through all steps and ensure that there are :  
\- no `inProgress` steps after an `incompleted` step  
\- no `completed` steps after an `incompleted` step  
\- no `completed` steps after an `inProgress` step  
\- one `inProgress` step at a time  

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.StepIndicator(layoutOrientation: .horizontal, stepModel: stepModel).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| stepModel | Warp.StepIndicatorModel |  | An array of Warp.StepIndicatorItem objects which contains title, description and progress of the steps, the first two are strings and progress can be incomplete, inProgress, or complete with default value as incomplete. |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| layoutOrientation | LayoutOrientation | .vertical | The orientation of the step indicator. Use one of the predefined LayoutOrientation values: .vertical, or .horizontal. |
