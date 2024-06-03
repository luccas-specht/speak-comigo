function getWrapperListSection() {
  return document.getElementsByClassName('wrapper-persona-card')[0];
}

function createPersonaTag({ persona }) {
  const { imgPath, flagFrom, name, accent } = persona;

  const personaCardTag = document.createElement('persona-card');
  personaCardTag.setAttribute('img-path', imgPath);
  personaCardTag.setAttribute('flag-from', flagFrom);
  personaCardTag.setAttribute('name', name);
  personaCardTag.setAttribute('accent', accent);

  return personaCardTag;
}

function addPersonaIntoWrapperList({ sectionTag, personaTag }) {
  sectionTag.appendChild(personaTag);
}

function getPersonasFromLocalStorage() {
  const personas = localStorage.getItem('personas');
  const personasParsed = JSON.parse(personas);
  try {
    return Object.values(personasParsed);
  } catch (e) {
    console.log(e);
  }
}

(function main() {
  const personas = getPersonasFromLocalStorage();
  const sectionTag = getWrapperListSection();

  personas.forEach((element) => {
    addPersonaIntoWrapperList({
      sectionTag: sectionTag,
      personaTag: createPersonaTag({ persona: element }),
    });
  });
})();
