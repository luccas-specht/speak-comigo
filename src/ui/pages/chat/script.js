function renderHeadInfos({ persona, HTMLElementToAppend }) {
  const { imgPath, flagClass, from, name, accent } = persona;

  const htmlStructure = `
    <div class="chat-container">
      <header class="header">
          <img src=${imgPath} alt=${name} />
          <div class="wrapper-header-info">
            <strong>${name}</strong>
            <div class="header-info">
              <div>
                <i class="world"></i>
                <span>From</span>
              </div>
              <div>
                <i class="${flagClass} custom-flag"></i>
                <span>Speaks</span>
              </div>
            </div>
            <div class="header-info-locales">
              <span>${from}</span>
              <span class="last-span-wrapper">${accent} English</span>
            </div>
          </div>
        </header>
        <div class="border"></div>
      </div>
  `;
  HTMLElementToAppend.innerHTML = htmlStructure;
}

(async function main() {
  if (window.location) {
    const personaData = localStorage.getItem('personaData');
    const persona = JSON.parse(personaData);
    const HTMLElementToAppend = document.querySelector('.main-layout');
    renderHeadInfos({ persona, HTMLElementToAppend });
  }
})();
