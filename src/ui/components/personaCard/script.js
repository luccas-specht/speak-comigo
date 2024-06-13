class PersonaCard extends HTMLElement {
  static observedAttributes = ['flag-from', 'name', 'accent', 'img-path'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._flagFrom = 'X';
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

  attributeChangedCallback(name, _, newValue) {
    const attributes = {
      name: () => (this._name = newValue),
      accent: () => (this._accent = newValue),
      'img-path': () => (this._imgPath = newValue),
      'flag-from': () => (this._flagFrom = newValue),
    };
    attributes[name]();
  }

  build() {
    const htmlStructure = `
      <a class="persona-card" href="/persona-details?name=${this._name}">
        <header>
          <i class="icon arrow"></i>
        </header>
        <footer>
          <div>
            <i class="icon icon-profile"></i>
            <span id="name">${this._name}</span>
          </div>
          <div>
            <i class="flag flag-england"></i>
            <span id="accent">${this._accent} Accent</span>
          </div>
        </footer>
      </a>
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
        text-decoration: none;
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
        filter: drop-shadow(0px 4px 4px var(--back-secondary));
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
        background-color: var(--gray-quaternary);
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
        width: 20px;
        height: 20px;
        margin-right: 1px;
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
      
      .flag-england {
        background-image: url(${this.getFlag({
          from: this._flagFrom,
        })}); /* caminho da bandeira */
      }
      
      .arrow {
        background-image: url(assets/svg/arrow.svg); /* caminho do ícone da seta */
      }
    `;
    return styleElement;
  }

  getFlag({ from }) {
    const images = new Map();

    images.set('england', 'assets/svg/england.svg');
    images.set('australia', 'assets/svg/australia.svg');
    images.set('united-states', 'assets/svg/united-states.svg');
    images.set('ireland', 'assets/svg/ireland.svg');
    images.set('india', 'assets/svg/india.svg');
    images.set('south-africa', 'assets/svg/south-africa.svg');
    images.set('wales', 'assets/svg/wales.svg');

    return images.get(from);
  }
}

customElements.define('persona-card', PersonaCard);
