var personas = [
  {
    imgPath: 'assets/image/matthew.png',
    from: 'GB',
    name: 'Matthew brain',
    accent: 'USA',
  },
  {
    imgPath: 'assets/image/ruth.png',
    from: 'GB',
    name: 'Ruth Brown',
    accent: 'USA',
  },
  {
    imgPath: 'assets/image/gregory.png',
    from: 'GB',
    name: 'Gregory Smith',
    accent: 'USA',
  },
  {
    imgPath: 'assets/image/danielle.png',
    from: 'GB',
    name: 'Danielle Miller',
    accent: 'British',
  },
  {
    imgPath: 'assets/image/emma.png',
    from: 'GB',
    name: 'Emma Lindley',
    accent: 'British',
  },
  {
    imgPath: 'assets/image/brian.png',
    from: 'GB',
    name: 'Brian Jones',
    accent: 'British',
  },
  {
    imgPath: 'assets/image/amy.png',
    from: 'GB',
    name: 'Amy Williams',
    accent: 'British',
  },
  {
    imgPath: 'assets/image/niamh.png',
    from: 'GB',
    name: 'Niamh Murphy',
    accent: 'Irish',
  },
  {
    imgPath: 'assets/image/ayanda.png',
    from: 'GB',
    name: 'Ayanda Dlamini',
    accent: 'South Africa',
  },
];

function getWrapperListSection() {
  return document.getElementsByClassName('wrapper-persona-card')[0];
}

function createPersonaTag({ persona }) {
  const { imgPath, from, name, accent } = persona;

  const personaCardTag = document.createElement('persona-card');
  personaCardTag.setAttribute('img-path', imgPath);
  personaCardTag.setAttribute('from', from);
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
