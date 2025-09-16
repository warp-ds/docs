
# Get started for Android developers

This page describes how to get started building an application with Warp components.

If you have any questions or need clarification, please don't hesitate to reach out to the Warp team on the [#warp-design-system](https://sch-chat.slack.com/archives/C04NF2K46LB) channel on Slack!


## 1. Integrate Warp

A guide on how to integrate Warp into your project.

### Gradle

Warp is used together with a brand theme and should be installed for a specific flavor of the code. Currently Finn, Tori and DBA are supported.

```groovy
implementation("com.schibsted.nmp.warp:warp-android:0.0.27")

finnImplementation("com.schibsted.nmp.warp:warp-android-finn:0.0.27")

toriImplementation("com.schibsted.nmp.warp:warp-android-tori:0.0.27")

dbaImplementation("com.schibsted.nmp.warp:warp-android-dba:0.0.27")

```



## 2. Apply theme
To start using Warp you must first initialize the theme depending on the selected flavor of the code. There should be a file like this for each flavor and this file should live in the flavor specific code package. This applies only to compose. To use legacy components in xml see [legacy support](#legacy-support).

```kotlin

@Composable
fun WarpNmpTheme(content: @Composable () -> Unit) {
    FinnWarpTheme(content) // or ToriWarpTheme(content) or DbaWarpTheme(content) depending on the selected flavor
    
}
```

## 3. Use Warp components
Use the composable theme which you initiated earlier to be able to use Warp components. The selected flavor of the code will give it the correct colors and styling. 

```kotlin exmaple
@Composable
fun MainScreen() {
    val warpTheme = WarpNmpTheme() // if LegacyWarpTheme is extended, otherwise just use WarpNmpTheme { }
    warpTheme {
      Column(
        modifier = Modifier
            .fillMaxWidth()
            .verticalScroll(rememberScrollState())
            .padding(vertical = 16.dp)
        ) {
            WarpTextField(
              value = text,
              onValueChange = { text = it },
              label = "E-mail address",
              placeholderText = "email@mail.com",
              )
            WarpButton(
              onClick = {  },
              style = WarpButtonStyle.Primary,
              text = "Submit"
              )
          }
    }
}
```
### Legacy support
All Warp components have xml support to be able to use Warp with legacy layouts. Use Warp components as any other custom View components.

To be able to apply the correct styling to legacy components it is required to use Koin dependency injection. You will need to integrate Koin into your project (unless it already is there).

```groovy
implementation("io.insert-koin:koin-androidx-compose:3.5.0")
```

Then start Koin in your Application
```kotlin
class WarpApplication : Application() {
        override fun onCreate() {
            super.onCreate()
            startKoin {
                androidContext(this@WarpApplication)
                modules(warpAppModule)
            }
        }
}
```
Next, create a Theme class (one for each flavor) which implemets the LegacyWarpTheme. This code should live in the flavor specific packages. 
```kotlin

class WarpNmpTheme : LegacyWarpTheme {

    @Composable
    override fun invoke(content:@Composable  () -> Unit) {
        FINN -> FinnWarpTheme(content) // or ToriWarpTheme(content) depending on the selected flavor
    }
}
```
Create an instance of the theme class within a koin module
```kotlin
val warpAppModule = module {
    single<LegacyWarpTheme> { WarpNmpTheme() }
}
```
Now the warp components will show correct colors and styling.

To use compose with this setup follow this example:

```kotlin exmaple
@Composable
fun MainScreen() {

    val warpTheme = WarpNmpTheme()
    warpTheme {
      WarpButton(
              onClick = {  },
              style = WarpButtonStyle.Primary,
              text = "Submit"
              )
    }
}
```

Xml implementation example

```xml example
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">
    
  <com.schibsted.nmp.warp.components.WarpButtonView
      android:id="@+id/warp_button"
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      app:layout_constraintStart_toStartOf="parent"
      app:layout_constraintTop_toTopOf="parent"
      app:warpButtonStyle="primary"
      app:buttonText="Send"
      app:loading="false"
      app:enabled="true"/>

  <com.schibsted.nmp.warp.components.WarpTextFieldView
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      app:layout_constraintStart_toStartOf="parent"
      app:layout_constraintTop_toBottomOf="@id/warp_button"
      app:label="Label"
      app:optionalLabel="(optional)"
      app:placeholderText="Placeholder text inside the textField"
      app:helpText="Help text under the textfield"
      app:textFieldEnabled="true"
      app:readOnly="false"
      app:leadingIcon="@drawable/leading_icon"
      app:leadingIconContentDescr="Leading icon description"
      app:trailingIcon="@drawable/trailing_icon"
      app:trailingIconContentDescr="Trailing icon description"
      app:isError="false"/>

</androidx.constraintlayout.widget.ConstraintLayout>
```
