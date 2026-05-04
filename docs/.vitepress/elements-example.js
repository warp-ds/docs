class ElementsExample extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._hasRendered = false;
  }

  static get observedAttributes() {
    return ['stylesheet'];
  }

  connectedCallback() {
    this.style.display = 'block';
    this.style.marginTop = '16px';

    // Use requestAnimationFrame to ensure light DOM content is parsed
    if (!this._hasRendered) {
      requestAnimationFrame(() => this._render());
    }
  }

  attributeChangedCallback(_name, oldValue, newValue) {
    if (oldValue !== newValue && this._hasRendered) {
      this._render();
    }
  }

  _render() {
    const stylesheet = this.getAttribute('stylesheet');

    // Get current WARP theme tokens
    const currentTheme = localStorage.getItem('warpTheme') || 'finn-no';
    const tokensUrl = `https://assets.finn.no/pkg/@warp-ds/css/~2/tokens/${currentTheme}.css`;

    // Get the text content of the <code> element and recreate it as HTML inside
    // the shadow root for style isolation.
    const content = document.createDocumentFragment();
    const codeEl = this.firstChild.querySelector('code');

    // Clear shadow root
    this.shadowRoot.innerHTML = '';

    // Add WARP theme tokens
    const tokensLink = document.createElement('link');
    tokensLink.rel = 'stylesheet';
    tokensLink.href = tokensUrl;
    this.shadowRoot.appendChild(tokensLink);

    // Add base styles for wrapper
    const style = document.createElement('style');
    style.textContent = `
    @unocss-placeholder

      h3 {
        font-weight: bold;
      }
      .component {
        padding: 16px;
        border: 2px solid var(--vp-c-gray-1);
        border-radius: 8px;
        background-color: var(--w-s-color-background);
      }
      .space-y-16 > * + * {
        margin-top: 16px;
      }
    `;
    this.shadowRoot.appendChild(style);

    // Add external stylesheet if specified
    if (stylesheet) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = stylesheet;
      this.shadowRoot.appendChild(link);
    }

    // Create wrapper div and include code
    const wrapper = document.createElement('div');
    wrapper.innerHTML = codeEl.innerText;
    wrapper.className = 'component space-y-16';
    wrapper.appendChild(content);

    // Append the wrapped content to shadow DOM
    this.shadowRoot.appendChild(wrapper);

    // Show the code example as-is in the light-DOM via slots
    this.shadowRoot.appendChild(document.createElement('slot'));

    this._hasRendered = true;
  }
}

// Register the custom element
if (!customElements.get('elements-example')) {
  customElements.define('elements-example', ElementsExample);
}
