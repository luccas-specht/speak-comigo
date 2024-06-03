function getWrapperListDiv() {
  return document.querySelector('.main-layout');
}

function getNameFromURL({ urlCoded }) {
  const params = new URLSearchParams(urlCoded.split('?')[1]);
  return params.get('name');
}

function getPersonaByName({ name, personas }) {
  return personas[name];
}

function renderPersonaDetailsCard({ persona, HTMLElementToAppend }) {
  const { imgPath, flagClass, from, name, accent, description } = persona;

  const htmlStructure = `
        <main class="wrapper-persona-details">
        <aside>
          <i class="arrow-left"></i>
          <a href="/personas"> Go back </a>
        </aside>
        <aside>
          <div class="wrapper-persona-info">
            <ul>
              <div class="wrapper-info-columns">
                <li class="wrapper-label-content">
                  <div>
                    <i class="icon icon-profile"></i>
                    <span>Name</span>
                  </div>
                </li>
                <li class="wrapper-name-content">
                  <span>${name}</span>
                </li>
                <li class="wrapper-label-content">
                  <div>
                    <i class="world"></i>
                    <span>From</span>
                  </div>
                </li>
                <li class="wrapper-name-content">
                  <span>${from}</span>
                </li>
              </div>
              <div class="wrapper-info-columns">
                <li class="wrapper-label-content">
                  <div>
                    <i class="${flagClass} custom-flag"></i>
                    <span>Speaks</span>
                  </div>
                </li>
                <li class="wrapper-name-content">
                  <span>${accent} English</span>
                </li>
              </div>
            </ul>
          </div>
          <div class="wrapper-persona-info">
            <em>
            ${description}
            </em>
          </div>
          <div class="wrapper-persona-info wrapper-content-actions">
            <figure>
              <figcaption>Listening my voice</figcaption>
              <audio id="audioPlayback" controls>
              <source id="audioSource" type="audio/mp3" />
            </audio>
            </figure>
          </div>
        </aside>
      </main>
  `;

  HTMLElementToAppend.innerHTML = htmlStructure;
  const element = document.querySelector(
    '.wrapper-persona-details > aside:first-child'
  );

  element.style.backgroundImage = `url('${imgPath}')`;
}

function getPersonasFromLocalStorage() {
  try {
    const personas = localStorage.getItem('personas');
    const personasParsed = JSON.parse(personas);
    return personasParsed;
  } catch (e) {
    console.log(e);
  }
}

(function main() {
  if (window.location) {
    const urlCoded = window.location.href;
    const name = getNameFromURL({ urlCoded });
    const personas = getPersonasFromLocalStorage();
    const persona = getPersonaByName({ name, personas });
    const mainDiv = getWrapperListDiv();

    renderPersonaDetailsCard({ persona, HTMLElementToAppend: mainDiv });
  }
})();
