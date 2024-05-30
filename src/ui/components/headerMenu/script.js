class HeaderMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const shadow = this.shadowRoot;

    const styleElement = document.createElement('style');
    const styleStructure = this.stylesheet({ styleElement });
    const htmlStructure = this.build();

    shadow.innerHTML = htmlStructure;
    shadow.appendChild(styleStructure);
  }

  build() {
    const htmlStructure = `
      <header class="header-wrapper"> 
        <div class="nav-background">
         <div> 
         <a href="/personas"> 
            <img src="assets/image/full-logo-speak-comigo.png" alt="logo speak comigo full version"/>
         </a>
         <button aria-label="open-menu"> </button>
         </div>
        </div>
      </header>
    `;
    return htmlStructure;
  }

  stylesheet({ styleElement }) {
    styleElement.textContent = `
      :host {
        width: 100%;
        height: 60px;
        display: block;
        z-index: 10;
      }

      .header-wrapper { 
        position: fixed; 
        top: 0; 
        left: 0;
        z-index: 99;
        max-height: 60px;
        display: flex;
        height: 100%;
        width: 100%;
        border-top: 11px solid;
        border-image: linear-gradient(to right, 
          #E5A75F 33.33%, 
          #DED15A 33.33%, 
          #DED15A 66.66%, 
          #F2B20E 66.66%) 1; 
      }

      .nav-background {
        width: 100%;
        background: #333333;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .nav-background > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        max-width: var(--max-width-container);
        padding: var(--padding-container);
      }    

      .nav-background > div > button {
        height: 15px;
        width: 20px;
        cursor: pointer;
        position: relative; 
        background-color: transparent; 
        border: none; 
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 3px 0;
      }    

      .nav-background > div > button::before, 
        .nav-background > div > button::after {
            content: "";
            height: 2px; 
            width: 25px;
            background-color: #EAEAEA; 
        }
    `;
    return styleElement;
  }
}

customElements.define('header-menu', HeaderMenu);
