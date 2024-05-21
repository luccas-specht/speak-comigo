class PersonaCard extends HTMLElement {
  static observedAttributes = ['from', 'name', 'accent', 'img-path'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._from = 'X';
    this._name = 'not defined';
    this._accent = 'not defined';
    this._imgPath = 'assets/image/person-not-found.png';
  }

  connectedCallback() {
    const shadow = this.shadowRoot;

    const styleElement = document.createElement('style');
    const styleStructure = this.stylesheet({ styleElement });
    const htmlStructure = this.build();

    shadow.innerHTML = htmlStructure;
    shadow.appendChild(styleStructure);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'name') {
      this._name = newValue;
    }
    if (name === 'accent') {
      this._accent = newValue;
    }
    if (name === 'img-path') {
      this._imgPath = newValue;
    }
    if (name === 'from') {
      this._from = newValue;
    }
  }

  build() {
    const htmlStructure = `
      <div class="persona-card">
        <header>
          <i class="icon arrow"></i>
        </header>
        <footer>
          <div>
            <i class="icon icon-profile"></i>
            <span id="name">${this._name}</span>
          </div>
          <div>
            <i class="flag flag-gb-england"></i>
            <span id="accent">${this._accent} Accent</span>
          </div>
        </footer>
      </div>
    `;
    return htmlStructure;
  }

  /* 
    Trade offs:
    - Scoped Styles: Can't get the css properties from the parent in DOM. What should to it's define the host pseud class as parenting styles
  */
  stylesheet({ styleElement }) {
    styleElement.textContent = `
      .persona-card {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        min-width: 140px;
        min-height: 160px;
        background-image: url(${this._imgPath});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 10px;
        cursor: pointer;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        justify-content: space-between;
        padding: 10px;
        position: relative;
      }
      
      .persona-card::after {
        content: '';
        align-self: center;
        position: absolute;
        bottom: -10px;
        width: 95%;
        height: 2px;
        background-color: rgba(140, 148, 164, 0.24);
      }
      
      .persona-card header {
        width: 100%;
        justify-content: flex-end;
        display: flex;
      }
      
      .persona-card footer {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 2px;
      }
      
      .persona-card footer > div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 5px;
      }
      
      .persona-card footer > div > span {
        font-style: normal;
        font-weight: 500;
        text-align: flex-start;
        color: var(--white-primary);
      }
      
      .icon {
        width: 25px;
        height: 25px;
        background-size: cover;
      }

      .flag {
        display: inline-block;
        min-width: 22px;
        min-height: 15px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
      
      .icon-profile {
        background-image: url(assets/svg/profile-name.svg); /* caminho do ícone do perfil */
      }
      
      .flag-gb-england {
        background-image: url(assets/svg/gb-england.svg); /* caminho da bandeira britânica */
      }
      
      .arrow {
        background-image: url(assets/svg/arrow.svg); /* caminho do ícone da seta */
      }
    `;
    return styleElement;
  }
}

customElements.define('persona-card', PersonaCard);
