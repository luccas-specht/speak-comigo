const { createPreviousURLAudio } = window.polly;

const speechParams = {
  OutputFormat: 'mp3',
  SampleRate: '16000',
  Text: undefined,
  VoiceId: undefined,
};

function getWrapperListDiv() {
  return document.querySelector('.main-layout');
}

function renderPersonaDetailsCard({ persona, HTMLElementToAppend, url }) {
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
             <audio-speaker label-description="Listening my voice" url=${url}>
             </audio-speaker>
          </div>
          <div class="wrapper-persona-info">
            <a href="/chat?name=${name}">Let's to have a chat <i class="arrow-right"></i></a>
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

(async function main() {
  if (window.location) {
    const personaData = localStorage.getItem('personaData');
    const persona = JSON.parse(personaData);
    const mainDiv = getWrapperListDiv();

    const url = await createPreviousURLAudio({
      ...speechParams,
      ...{ Text: persona.description, VoiceId: persona.name.split(' ')[0] },
    });

    renderPersonaDetailsCard({
      persona,
      HTMLElementToAppend: mainDiv,
      url,
    });
  }
})();
