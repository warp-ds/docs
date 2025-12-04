# Steps

## Android

### Syntax
Vertical and Horizontal versions are separate implementations in Compose so choose accordingly:

```kotlin example
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


```kotlin example
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

```kotlin example
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

### Legacy support
To support layouts still written in xml the WarpStepIndicator can be used as a custom view. To add functionality to the step click, set a click listener. The title and description is a function that needs to be set programmatically. 
The custom content for the vertical orientation is also set programmatically and should be in Compose.

```kotlin example
fun setOnStepClickedListener(onClick: (Int) -> Unit)

var stepContent: @Composable ((Int) -> Unit)? 
```

```xml example
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

### Parameters

<api-table type=android component="StepIndicator" />