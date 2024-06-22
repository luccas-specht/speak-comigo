class AudioSpeaker extends HTMLElement {
  static observedAttributes = ['url', 'label-description'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._url = undefined;
    this._labelDescription = undefined;
  }

  connectedCallback() {
    const shadow = this.shadowRoot;
    const styleElement = document.createElement('style');
    const styleStructure = this.stylesheet({ styleElement });
    const htmlStructure = this.build();

    shadow.innerHTML = htmlStructure;
    shadow.appendChild(styleStructure);
  }

  attributeChangedCallback(name, _, newValue) {
    const attributes = {
      url: () => (this.url = newValue),
      'label-description': () => (this._labelDescription = newValue),
    };
    attributes[name]();
  }

  build() {
    const htmlStructure = `
      <h1>opa</h1>
    `;
    return htmlStructure;
  }

  stylesheet({ styleElement }) {
    styleElement.textContent = ``;
    return styleElement;
  }
}

customElements.define('audio-speaker', AudioSpeaker);
