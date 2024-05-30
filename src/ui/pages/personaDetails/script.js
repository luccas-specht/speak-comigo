function getWrapperListDiv() {
  return document.querySelector('.main-layout');
}

function getNameFromURL({ urlCoded }) {
  const params = new URLSearchParams(urlCoded.split('?')[1]);
  return params.get('name');
}

function getPersonaByName({ name }) {
  return [
    {
      imgPath: 'assets/image/matthew.png',
      flagFrom: 'united-states',
      flagClass: 'flag-usa',
      from: 'California, United States',
      name: 'Matthew Brain',
      accent: 'American',
      description:
        'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
    },
    {
      imgPath: 'assets/image/ruth.png',
      flagFrom: 'united-states',
      flagClass: 'flag-usa',
      from: 'Washington, D.C, United States',
      name: 'Ruth Brown',
      accent: 'American',
      description:
        'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
    },
    {
      imgPath: 'assets/image/gregory.png',
      flagFrom: 'united-states',
      flagClass: 'flag-usa',
      from: 'Arkansas, United States',
      name: 'Gregory Smith',
      accent: 'American',
      description:
        'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
    },
    {
      imgPath: 'assets/image/danielle.png',
      flagFrom: 'united-states',
      flagClass: 'flag-usa',
      from: 'New York City, United States',
      name: 'Danielle Miller',
      accent: 'American',
      description:
        'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
    },
    {
      imgPath: 'assets/image/brian.png',
      flagFrom: 'england',
      flagClass: 'flag-england',
      from: 'London, England',
      name: 'Brian Jones',
      accent: 'British',
      description:
        'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
    },
    {
      imgPath: 'assets/image/amy.png',
      flagFrom: 'england',
      flagClass: 'flag-england',
      from: 'London, England',
      name: 'Amy Williams',
      accent: 'British',
      description:
        'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
    },
    {
      imgPath: 'assets/image/emma.png',
      flagFrom: 'england',
      flagClass: 'flag-england',
      from: 'Nottingham, England',
      name: 'Emma Lindley',
      accent: 'British',
      description:
        'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
    },
    {
      imgPath: 'assets/image/niamh.png',
      flagFrom: 'ireland',
      flagClass: 'flag-ireland',
      from: 'Dublin, Ireland',
      name: 'Niamh Murphy',
      accent: 'Irish',
      description:
        'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
    },

    {
      imgPath: 'assets/image/ayanda.png',
      flagFrom: 'south-africa',
      flagClass: 'flag-south-africa',
      from: 'Joanesburgo, South Africa',
      name: 'Ayanda Dlamini',
      accent: 'South Africa',
      description:
        'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
    },
  ].find((element) => element.name === name);
}

function renderPersonaDetailsCard({ persona, HTMLElementToAppend }) {
  console.log({ persona, HTMLElementToAppend });
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
              <audio
                controls
                preload
                controlsList="nodownload noplaybackrate noplaybackspeed"
                src="../../assets/audio/test.mp3"
              ></audio>
            </figure>
          </div>
        </aside>
      </main>
  `;

  HTMLElementToAppend.innerHTML = htmlStructure;
}

(function main() {
  if (window.location) {
    const urlCoded = window.location.href;
    const name = getNameFromURL({ urlCoded });
    const persona = getPersonaByName({ name });
    const mainDiv = getWrapperListDiv();

    renderPersonaDetailsCard({ persona, HTMLElementToAppend: mainDiv });
  }
})();
