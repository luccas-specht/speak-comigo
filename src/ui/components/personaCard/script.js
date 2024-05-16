class PersonaCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    // Criar e adicionar o estilo ao shadow DOM
    const style = document.createElement('style');
    style.textContent = `
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
    shadow.appendChild(style);

    // Criar e adicionar o elemento div ao shadow DOM com a classe 'persona-card'
    const personaCard = document.createElement('div');
    personaCard.classList.add('persona-card');

    // Criar o conteúdo HTML dentro do persona-card
    personaCard.innerHTML = `
      <header>
        <i class="icon arrow"></i>
      </header>
      <footer>
        <div>
          <i class="icon icon-profile"></i>
          <span>Sandra gorgina</span>
        </div>
        <div>
          <i class="flag flag-gb-england"></i>
          <span>British Accent</span>
        </div>
      </footer>
    `;

    // Adicionar o personaCard ao shadow DOM
    shadow.appendChild(personaCard);
  }
}

customElements.define('persona-card', PersonaCard);
