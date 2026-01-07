# Modal - Frameworks
A modal is a focused dialog that temporarily blocks the interface to request a specific decision or input. Because it pauses the experience, use it sparingly for high-priority tasks.

## Elements

<FrameworkTabs 
  :tabs="[
    { name: 'Elements', url: './elements' },
    { name: 'Vue', url: './vue' },
    { name: 'React', url: './react' },
    { name: 'Android', url: './android' },
    { name: 'iOS', url: './ios' },
    { name: 'Figma', url: './figma' },
  ]" 
  activeTab="Elements" 
/>

### With a titlebar

```js
<div>
  <w-button aria-haspopup='dialog'>
    Open a modal
  </w-button>
  <w-modal>
    <w-modal-header
      slot='header'
      title='An example modal'
    ></w-modal-header>
    <div slot='content'>
      <w-button variant='utility' small>
        Toggle back button
      </w-button>
      <p>
        I bomb atomically, Socrates' philosophies and hypotheses...
      </p>
      <p>
        First I'm gonna getcha, once I gotcha, I gat-cha...
      </p>
    </div>
    <w-modal-footer slot='footer'>
      <w-button variant='primary'>
        OK
      </w-button>
    </w-modal-footer>
  </w-modal>
</div>
```

### With an image at the top

```js
<div>
  <w-button aria-haspopup="dialog">
    Open a modal
  </w-button>
  <w-modal>
    <w-modal-header slot="header" title="Look a doggo!">
      <img
        slot="top"
        class="h-[256] w-full object-cover"
        src="/pages/public/unocssmusical.jpeg"
        alt="AI-generated picture of a band in colourful setup"
      >
    </w-modal-header>
    <div slot="content">
      <p>I bomb atomically, Socrates' philosophies and hypotheses...</p>
    </div>
    <w-modal-footer slot="footer">
      <w-button variant="primary" id="modal-close-button-two">OK</w-button>
    </w-modal-footer>
  </w-modal>
</div>
```

### Modal Props
#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| show | boolean | false | Controls if the modal should show or hide |
| ignore-backdrop-clicks | boolean | false | Ignores clicks to the backdrop when true |


### Modal header props
#### Required props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | string |  | A short but descriptive title for the modal |

#### Optional Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| back | boolean | false | Whether the modal header should have a back button |
| no-close | boolean | false | Whether the modal header should have a close button |