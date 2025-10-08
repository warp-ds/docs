import { createApp } from 'vue';
import Control from './Control.vue';
import Controls from './Controls.vue';

export const buildWc = (elementName, baseVueComponent, rootProperties) => {
  if (typeof window !== 'undefined' && !customElements.get(elementName)) {
    customElements.define(
      elementName,
      class extends HTMLElement {
        static observedAttributes = ['class'];

        constructor() {
          super();
          this.unoExampleWrapper = document.createElement('div');
          this.unoExampleWrapper.classList = 'example-container';
        }
        attributeChangedCallback(_name, _oldValue, newValue) {
          this.unoExampleWrapper.classList = 'example-container ' + newValue;
        }
        connectedCallback() {
          const currentTheme = localStorage.getItem('warpTheme') || 'finn-no';
          const tokens = `<link rel="stylesheet" type="text/css" href="https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/${currentTheme}.css" />`;
          const shadowUnoStyle = `<style>
        @unocss-placeholder

        h3 {
          font-weight: bold;
        }
        .example-container {
          --ex-bg-el-color: #3b82f680;
          --ex-bg-bg-color: #60a5fa1a;
          padding: 32px;
          border: 2px solid var(--vp-c-gray-1);
          border-radius: 8px;
          margin-bottom: 8px;
          background-color: var(--vp-c-bg-soft);
          color: var(--vp-c-text-2);
        }
        .ex-heading {
          margin-top: 0;
          margin-bottom: .8rem;
          font-weight: 700;
          color: var(--vp-c-text-1);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 1.4rem;
          line-height: 2.0rem;        
        }
        .ex-deprecated {
          position: relative;
        }
        .ex-deprecated::before {
          content: '';
          position: absolute;
          top:0;
          right: 0;
          bottom: 0;
          left: 0;
          background: linear-gradient(to bottom right, transparent 0%, transparent 47%, rgba(var(--w-s-rgb-border-warning), .2) 48%, rgba(var(--w-s-rgb-border-warning), .2) 52%, transparent 53%, transparent 100%);
        }
        .component {
          padding: 16px;
          border: 2px solid var(--vp-c-gray-1);
          border-radius: 8px;
          margin-bottom: 8px;
          background-color: var(--w-s-color-background);
        }
        .options {
          margin-bottom: 8px;
        }
        .options span {
          margin-right: 12px;
          margin-left: 4px;
        }
        .docs-table {
          width: 100%;
          display: table;
        }
        .docs-table tr {
          background-color: var(--vp-c-bg);
        }
        .docs-table tr:nth-child(2n) {
          background-color: var(--vp-c-bg-soft);
        }
        .docs-table th,
        .docs-table td {
          border: 1px solid var(--vp-c-divider);
          padding: 8px 16px;
          font-size: 14px;
        }
        .docs-table thead th {
          text-align: left;
          color: var(--vp-c-text-2);
          background-color: var(--vp-c-bg-soft);
        }
        .docs-table code, .docs-modal code {
          border-radius: 4px;
          padding: 3px 6px;
          background-color: var(--vp-code-bg);
          font-size: var(--vp-code-font-size);
          color: var(--vp-code-color);
        }
        .docs-modal code {
          position: relative;
          display: inline-block;
          cursor: pointer;
          background-color: var(--vp-c-default-soft);
          color: #BE3830;
        }
        .docs-modal code::after {
          content: "";
          position: absolute;
          top: -6px;
          right: -10px;
          width: 24px;
          height: 24px;
          opacity: 0;
          border: 1px solid var(--vp-code-copy-code-border-color);
          border-radius: 4px;
          background-color: var(--vp-code-copy-code-bg);
          background-image: var(--vp-icon-copy);
          background-position: 50%;
          background-size: 16px;
          background-repeat: no-repeat;
          transition: opacity .25s, border-color .25s;
        }
        .docs-modal code:hover::after {
          opacity: 1;
        }
        .docs-modal code:active::after {
          border-color: rgba(0, 0, 0, .5);
        }
        .ex-bg--purple {
          --ex-bg-el-color: #a855f780;
          --ex-bg-bg-color: #c084fc1a;
        }
        .ex-bg--violet {
          --ex-bg-el-color: #8b5cf680;  
          --ex-bg-bg-color: #a78bfa1a;
        }
        .ex-bg--pink {
          --ex-bg-el-color: #ec489980;
          --ex-bg-bg-color: #f472b61a;
        }
        .ex-bg--indigo {
          --ex-bg-el-color: #6366f180;
          --ex-bg-bg-color: #818cf81a;
        }
        .ex-bg--blue {
          --ex-bg-el-color: #3b82f680;
          --ex-bg-bg-color: #60a5fa1a;
        }
        .ex-bg--cyan {
          --ex-bg-el-color: #06b6d480;
          --ex-bg-bg-color: #22d3ee1a;
        }
        .ex-bg--fuchsia {
          --ex-bg-el-color: #d946ef80;
          --ex-bg-bg-color: #e879f91a; 
        }
        .ex-bg--white {
          --ex-bg-el-color: #ffffffbf;
        }
        .ex-bg--dotted {
          --ex-bg-dot-size: 8px;
          --ex-bg-bg-size: var(--ex-bg-dot-size) var(--ex-bg-dot-size);
          --ex-bg-dot-position: 0 0, calc(var(--ex-bg-dot-size) / 2) calc(var(--ex-bg-dot-size) / 2);
          background-image:
            radial-gradient(var(--ex-bg-el-color) 30%, transparent 30%),
            radial-gradient(var(--ex-bg-el-color) 30%, transparent 30%);
          background-size: var(--ex-bg-bg-size);
          background-position: var(--ex-bg-dot-position);
          background-color: var(--ex-bg-bg-color);
        }
        .ex-bg--striped {
          background-color: var(--ex-bg-bg-color);
          background-size: 7px 7px;
          background-image:
            linear-gradient(135deg,
              var(--ex-bg-el-color) 10%,
              transparent 0,
              transparent 50%,
              var(--ex-bg-el-color) 0,
              var(--ex-bg-el-color) 60%,
              transparent 0,
              transparent);
        }
      </style>`;

          this.shadow = this.attachShadow({ mode: 'open' });
          this.shadow.innerHTML += shadowUnoStyle + tokens;

          if (baseVueComponent) {
            this.shadow.innerHTML += '<div id="app" class="mt-16"></div>';
            createApp(baseVueComponent, rootProperties)
              .component('demo-control', Control)
              .component('demo-controls', Controls)
              .mount(this.appEl);
          } else {
            this.unoExampleWrapper.innerHTML = this.innerHTML;
            this.shadow.appendChild(this.unoExampleWrapper);
          }
        }
        get appEl() {
          return this.shadow.querySelector('#app');
        }
      },
    );
  }
};
