# Text field

## Android

### Syntax

```kotlin
@Composable
fun WarpTextField(
    value: String, 
    onValueChange: (String) -> Unit, 
    modifier: Modifier = Modifier, 
    label: String? = null,
    enabled: Boolean = true, 
    readOnly: Boolean = false, 
    optionalLabel: String? = null, 
    placeholderText: String? = null, 
    helpText: String? = null, 
    prefixText: String? = null,
    suffixText: String? = null,
    leadingIcon: @Composable () -> Unit? = null, 
    trailingIcon: @Composable () -> Unit? = null, 
    isError: Boolean = false, 
    visualTransformation: VisualTransformation = VisualTransformation.None, 
    keyboardOptions: KeyboardOptions = KeyboardOptions(capitalization = KeyboardCapitalization.Sentences), 
    keyboardActions: KeyboardActions = KeyboardActions.Default, 
    singleLine: Boolean = true, 
    minLines: Int = 1,
    maxLines: Int = Int.MAX_VALUE, 
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
)
```

### Value

A TextField's value is empty by default, but an initial value can be provided using the `value` param.

```kotlin
var text by rememberSaveable { mutableStateOf("0") }

WarpTextField(
    value = text,
    onValueChange = { text = it },            
    label = "Price",           
    )
```

### Labeling

A visual label should be provided for the TextField using the `label` param.
Add the `optionalLabel` param to indicate that the textfield is not required.

```kotlin
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "Price",         
    optionalLabel = "(optional)"  
    )
```
### Help text

TextFields can provide additional context with `helpText` if the label and placeholder aren't enough.

```kotlin
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "Address",         
    helpText = "Street name & house nr"  
    )
```
### Validation

TextFields can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the `isError` prop to display it as invalid.

`isError` is often paired with `helpText` to provide feedback to the user about the error.

```kotlin
var text by rememberSaveable { mutableStateOf("") }
var isError by remember { mutableStateOf(false)}
var errorText by remember { mutableStateOf("")}

WarpTextField(
    value = text,
    onValueChange = { text = it },            
    label = "Zipcode",
    isError = isError,          
    helpText = errorText  
    )
```


### Visual options

### Placeholder

Placeholder text can be used to describe the expected value or formatting for the TextField. Placeholder text will only appear when the TextField is empty, and should not be used as a substitute for labeling the component with a visible label.

```kotlin
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "E-mail",         
    placeholderText = "email@mail.com"  
    )
```

### Disabled

Keep in mind that using disabled in its current form is an anti-pattern. There will ALWAYS be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons. Please consider more informative alternatives before choosing to use disabled on an element.

```kotlin
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "E-mail",         
    enabled = false  
    )
```



### Read only

The readOnly boolean prop makes the TextField's text content immutable. 

```kotlin
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "Name",
    readOnly = true 
    )
```

### Icons
 
WarpTextField supports showing a leading and/or a trailing icon. The component expects a @Composable which ideally should be an icon composable.

```kotlin
val leadingIcon: @Composable () -> Unit = { Icon(Icons.Filled.Email, contentDescription = "Content description for the leading icon") }

WarpTextField(
    value = "",
    onValueChange = { },            
    label = "E-mail",
    leadingIcon = leadingIcon 
    )
```

### Prefix & Suffix
 
WarpTextField supports showing a prefix or suffix text. When set this text will appear permanently infront of or behind the value. 

```kotlin
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "Price",
    suffixText = "kr" 
    )
    
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "Price",
    prefixText = "kronor" 
    )
```

### Legacy support
To support layouts still written in xml the WarpTextField can be used as a custom view.

```xml example
<com.schibsted.nmp.warp.components.WarpTextFieldView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        app:label="Label"
        app:optionalLabel="(optional)"
        app:placeholderText="Placeholder/hint"
        app:helpText="Help text under the textfield"
        app:textFieldEnabled="true"
        app:readOnly="false"
        app:leadingIcon="@drawable/leading_icon"
        app:leadingIconContentDescr="Leading icon description"
        app:trailingIcon="@drawable/trailing_icon"
        app:trailingIconContentDescr="Trailing icon description"
        app:isError="false"
        app:prefixText="kronor"
        app:suffixText="kr"
        app:maxLines="6"
        app:minLines="2"
        app:singleLine="false"
        />
```
### Parameters

<api-table type=android component="TextField" />