class PersonaCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
  }
}

customElements.define('persona-card', PersonaCard);
