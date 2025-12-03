# Modal 

## Elements

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
<api-table type=elements component="Modal" />


### Modal header props
<api-table type=elements component="ModalHeader" />