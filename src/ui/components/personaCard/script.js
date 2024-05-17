class PersonaCard extends HTMLElement {
  static observedAttributes = ['from', 'name', 'accent', 'img-path'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const shadow = this.shadowRoot;
    const style = this.stylesheet();

    this.build();
    shadow.appendChild(style);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
  }

  build() {
    this.shadowRoot.innerHTML = `
      <div class="persona-card">
        <header>
          <i class="icon arrow"></i>
        </header>
        <footer>
          <div>
            <i class="icon icon-profile"></i>
            <span id="name">Sandra gorgina</span>
          </div>
          <div>
            <i class="flag flag-gb-england"></i>
            <span id="accent">British Accent</span>
          </div>
        </footer>
      </div>
    `;
  }

  /* 
    Trade offs:
    - Scoped Styles: Can't get the css properties from the parent in DOM. What should to it's define the host pseud class as parenting styles
  */
  stylesheet() {
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: flex;
        width: 170px;
        height: 170px;
      }

      .persona-card {
        display: flex;
        flex-direction: column;
        flex: 1 1 170px;
        max-width: 170px;
        max-height: 170px;
        background-image: url(assets/danielle.png);
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: scroll;
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
        text-align: center;
        color: var(--white-primary);
      }
      
      .icon {
        width: 20px;
        height: 20px;
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
        background-image: url(assets/profile-name.svg); /* caminho do ícone do perfil */
      }
      
      .flag-gb-england {
        background-image: url(assets/gb-england.svg); /* caminho da bandeira britânica */
      }
      
      .arrow {
        background-image: url(assets/arrow.svg); /* caminho do ícone da seta */
      }
    `;

    return style;
  }
}

customElements.define('persona-card', PersonaCard);
