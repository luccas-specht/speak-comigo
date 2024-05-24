var personas = [
  {
    imgPath: 'assets/image/matthew.png',
    flagFrom: 'united-states',
    name: 'Matthew brain',
    accent: 'USA',
  },
  {
    imgPath: 'assets/image/ruth.png',
    flagFrom: 'united-states',
    name: 'Ruth Brown',
    accent: 'USA',
  },
  {
    imgPath: 'assets/image/gregory.png',
    flagFrom: 'united-states',
    name: 'Gregory Smith',
    accent: 'USA',
  },
  {
    imgPath: 'assets/image/danielle.png',
    flagFrom: 'england',
    name: 'Danielle Miller',
    accent: 'British',
  },
  {
    imgPath: 'assets/image/brian.png',
    flagFrom: 'england',
    name: 'Brian Jones',
    accent: 'British',
  },
  {
    imgPath: 'assets/image/amy.png',
    flagFrom: 'england',
    name: 'Amy Williams',
    accent: 'British',
  },
  {
    imgPath: 'assets/image/emma.png',
    flagFrom: 'england',
    name: 'Emma Lindley',
    accent: 'British',
  },
  {
    imgPath: 'assets/image/niamh.png',
    flagFrom: 'ireland',
    name: 'Niamh Murphy',
    accent: 'Irish',
  },

  {
    imgPath: 'assets/image/ayanda.png',
    flagFrom: 'south-africa',
    name: 'Ayanda Dlamini',
    accent: 'South Africa',
  },
];

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

(function main() {
  const sectionTag = getWrapperListSection();

  personas.forEach((element) => {
    addPersonaIntoWrapperList({
      sectionTag: sectionTag,
      personaTag: createPersonaTag({ persona: element }),
    });
  });
})();
