# Expandable

Expandable is a layout component used for creating content that can be expanded and collapsed.

**Public docs:** [Overview](https://warp-ds.github.io/docs/components/expandable/overview), [Usage](https://warp-ds.github.io/docs/components/expandable/usage), [React](https://warp-ds.github.io/docs/components/expandable/frameworks/react), [Vue](https://warp-ds.github.io/docs/components/expandable/frameworks/vue), [Elements](https://warp-ds.github.io/docs/components/expandable/frameworks/elements), [Android](https://warp-ds.github.io/docs/components/expandable/frameworks/android), [iOS](https://warp-ds.github.io/docs/components/expandable/frameworks/ios)

**Framework support:** Android, Elements, iOS, React, Vue

## Overview

Expandable is a layout component used for creating content that can be expanded and collapsed.

## Inline Demo Markup

```html
<div>
        <h3 class="h4">Default</h3>
        <w-expandable title="I am expandable">
            <p>Expandable contents go here.</p>
        </w-expandable>
    </div>
    <div>
        <h3 class="h4">Expandable box</h3>
        <w-expandable title="I am an expandable box" box>
            <p>Expandable contents go here.</p>
        </w-expandable>
    </div>
    <div>
        <h3 class="h4">Expandable animated box</h3>
        <w-expandable title="I am an animated expandable box" animated box>
            <p>Expandable contents go here.</p>
        </w-expandable>
    </div>
```

## Usage

> This page is still in progress in the public docs.

## Frameworks

### React

Expandable is a layout component used for creating content that can be expanded and collapsed.

You can import the component like so:

```js
import { Expandable } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { Expandable } from '@warp-ds/react/components/expandable'
```

#### Default 

```js
<Expandable title="I am expandable">
  <p>Expandable contents go here.</p>
</Expandable>
```

#### Expandable box 

```js
<Expandable title="I am expandable box" box>
  <p>Expandable contents go here.</p>
</Expandable>
```

#### Expandable box with icon 

```js
import { IconBag16 } from '@fabric-ds/icons/react';

<Expandable
  title={
    <div className="flex flex-row items-center">
      <IconBag16 />
      <p className="ml-8 mb-0">This is a title with an icon</p>
    </div>
  }
  box
>
  <p>Expandable contents go here.</p>
</Expandable>;
```

#### Expandable animated box 

```js
<Expandable title="I am expandable animated box" box animated>
  <p>Expandable contents go here.</p>
</Expandable>
```

#### The expanded prop 

You can set whether the component is open or collapsed using the `expanded` prop.

```js
<Expandable title="I am initially..." expanded>
  <p>...expanded</p>
</Expandable>
```

#### onChange event 

```js
<Expandable title="I am expandable" onChange={(state) => console.log(state)}>
  <h1>onChange example</h1>
  <p>Expandable contents go here.</p>
</Expandable>
```

#### Controlling the component 

If you need to take control of expansion, use the `onChange` event in combination with the `expanded` prop.

```js
function Example() {
  const [open, setOpen] = React.useState(true);

  return (
    <Expandable title="Expandable box" box expanded={open} onChange={setOpen}>
      <p>I am expanded</p>
    </Expandable>
  );
}
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | string |  | The title for the expandable |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| className | string |  | Additional classes to include |
| style | CSSProperties |  | CSS styles to inline on the component |
| expanded | boolean | false | The state of the component, either true for expanded or false for closed |
| bleed | boolean |  | Will make the expandable full-width on sm-size |
| box | boolean |  | Will make the expandable a Box |
| buttonClass | string |  | Additional CSS classes to include on the button part of the component |
| contentClass | string |  | Additional CSS classes to include on the content part of the component |
| animated | boolean |  | Will animate the expansion/collapse |
| chevron | boolean | true | Controls chevron visibility |
| headingLevel | HeadingLevel |  | Wrap the toggle button in a heading element with the specified level. If headingLevel is not specified, the button will not be wrapped by a heading element |

#### Events 

| Name | Description |
| --- | --- |
| onChange | (state: boolean) => void |

### Vue

Expandable is a layout component used for creating content that can be expanded and collapsed.

> Use in entire app

```js
import { Expandable } from '@warp-ds/vue';
app.use(Expandable);
```

> Use in one component and special imports

You can import the component like so:

```js
import { wExpandable, wExpandTransition, wWillExpand } from '@warp-ds/vue';
```

or import it individually to optimize your JS bundle size by adding only the components you need:

```js
import { wExpandable, wExpandTransition, wWillExpand } from '@warp-ds/vue/expandable';
```

```vue
<w-expandable title="I am expandable">
  <p>Hello there I am some informative content</p>
</w-expandable>
```

#### Default 

```vue
<w-expandable title="I am expandable">
  <p>Hello there I am some informative content</p>
</w-expandable>
```

#### Expandable box 

```vue
<w-expandable title="I am expandable" box>
  <p>Hello there I am some informative content</p>
</w-expandable>
```

#### You should only use this feature under careful supervision of your friendly local UXer. 

The w-expandable component can be animated using the animated prop.

```vue
<w-expandable animated title="I am expandable">
  <p>Hello there I am some informative content</p>
</w-expandable>
```

The wExpandTransition component can wrap one or more wWillExpand components.

```vue
<w-expand-transition group>
  <w-will-expand v-if="expanded">Hello</w-will-expand>
  <w-will-expand v-else>Hi</w-will-expand>
<w-expand-transition>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| v-model | boolean | false | If not provided, the component will use an internal value that starts the expandable 'closed' |
| as | string | div | The DOM element to emit |
| box | boolean |  | Will make the expandable a Box |
| bleed | boolean |  | Will make the expandable full-width on sm-size |
| buttonClass | string |  | Additional CSS classes to include on the button part of the component |
| contentClass | string |  | Additional CSS classes to include on the content part of the component |
| chevron | boolean | true | Controls chevron visibility |

#### Slots 

| Name | Description |
| --- | --- |
| title | string |
| default | string |

#### Events 

| Name | Description |
| --- | --- |
| expand | boolean |
| collapse | boolean |

### Elements

Expandable is a layout component used for creating content that can be expanded and collapsed.

#### Default 

```html
<w-expandable title="I'm expandable">
  <p>with expanded content</p>
</w-expandable>
```

#### Expandable box 

```html
<w-expandable title="I'm expandable" box>
  <p>with expanded content</p>
</w-expandable>
```

#### Expandable box with custom title 

This can be used if more control over styling is needed than the `title` prop allows

```html
<w-expandable box>
  <div slot="title" class="flex flex-row items-center">
    <w-icon-bag-16></w-icon-bag-16>
    <p class="ml-8 mb-0">This is a title with an icon</p>
  </div>
  <p>with expanded content</p>
</w-expandable>
```

#### With expanded prop 

```html
<w-expandable box title="I'm expanded by default" expanded>
  <p>content should be visible</p>
</w-expandable>
```

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| expanded | boolean | false | Controls component's expanded state |
| bleed | boolean |  | Will make the expandable full-width on sm-size |
| box | boolean | false | Will make the expandable a Box |
| animated | boolean | false | Will animate the expansion/collapse |
| no-chevron | boolean | false | Whether to hide the chevron on the button part of the component |
| title | string |  | Component title. Used to display the title value which is always present regardless of whether the component is open or closed. |
| heading-level | number |  | Wrap the toggle button in a heading element with the specified level. If headingLevel is not specified, the button will not be wrapped by a heading element |
| button-class | string |  | Additional CSS classes to include on the button part of the component |
| content-class | string |  | Additional CSS classes to include on the content part of the component |
| as | string | div | The DOM element to emit |
| v-model | boolean |  | Controls the expansion/collapse |
| chevron | boolean | true | Controls chevron visibility |

### Android

Expandable is a layout component used for creating content that can be expanded and collapsed.

```kotlin
@Composable
fun WarpExpandable(
    modifier: Modifier = Modifier,
    title: String,
    initiallyExpanded: Boolean = false,
    type: WarpExpandableType = WarpExpandableType.Default,
    expandedContent: @Composable () -> Unit,
)
```

Can be shown in these styles. Both can be shown either collapsed or expanded to begin with.

```kotlin
enum class WarpExpandableType {
    Default,
    Box
}
```

The default style for the expandable is just title with the icon button. The expanded content is a @Composable.

```kotlin
WarpExpandable(
    title = "Title"
) {
    WarpText("Expandable content")
}
```

Boxed style will show the expandable in a WarpBox with neutral style & gray background.

```kotlin
WarpExpandable(
    title = "Title",
    type = WarpExpandableType.Box,
    initiallyExpanded = false
) {
    WarpText("Expandable content")
}
```

Not supported

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | String |  | The title to be displayed in the expandable |
| expandedContent | @Composable () -> Unit |  | The content to be shown when expanded |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modifier | Modifier | Modifier | Sets the modifier for the expandable |
| initiallyExpanded | Boolean | false | If should show expanded content |
| type | WarpExpandableType.Default WarpExpandableType.Box | WarpExpandableType.Default | Style of the expandable |

### iOS

Expandable is a layout component used for creating content that can be expanded and collapsed.

```swift
// If you need a `Expandable` with a custom view use this
Warp.Expandable(
        style: Warp.ExpandableStyle,
        title: String,
        @ViewBuilder expandableView: () -> Content,
        isAnimated: Bool = true,
        isExpanded: Bool = false
)

// If you need a `Expandable` with a simple String use this instead
Warp.Expandable(
        style: Warp.ExpandableStyle,
        title: String,
        subtitle: String,
        isAnimated: Bool = true,
        isExpanded: Bool = false
)
```

```swift
Warp.Expandable(
        style: .box,
        title: "Title",
        subtitle: "SubTitle"
)
```

```swift
enum Warp.ExpandableStyle {
    /// Basic expandable component with clear background.
    case `default`
    /// Expandable component with a boxed layout. Round corners
    case box
    /// Expandable component with a boxed layout. Square corners
    case boxBleed
}
```

By default all Warp components return a `SwiftUI View` but there is always a `UIKit UIView` available to use also.

```swift
Warp.Expandable(
        style: .box,
        title: "Title",
        subtitle: "SubTitle"
).uiView
```

#### Required props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| style | Warp.ExpandableStyle |  | The style of the Expandable. Use one of the predefined ExpandableStyle values: .default, .box, or .boxBleed |
| title | String |  | The title for the top sticky part of the Expandable |

#### Optional Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| expandableView | View |  | The view for the bottom hidden part of the Expandable. Either this or subtitle needs to be provided. |
| subtitle | String |  | The subtitle for the bottom hidden part of the Expandable. Either this or expandableView needs to be provided. |
| isAnimated | Bool | true | Determines if the Expandable will expand and collapse with animation |
| isExpanded | Bool | false | Controls the state of the Expandable |
