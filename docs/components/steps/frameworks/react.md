# Steps - Frameworks
The steps component is built to handle user journeys, showing progress.

<ComponentsStatus />

## React

<FrameworkTabs />

### Import

You can import the component like so:
```js
import { Steps, Step } from '@warp-ds/react';
```

or import it individually to optimize your JS bundle size by adding only the components you need:
```js
import { Steps, Step } from '@warp-ds/react/components/steps';

```

### Syntax

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

### Props

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