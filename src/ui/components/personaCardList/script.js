var personas = [
  {
    imgPath: 'assets/image/matthew.png',
    flagFrom: 'united-states',
    from: 'California, United States',
    name: 'Matthew Brain',
    accent: 'American',
  },
  {
    imgPath: 'assets/image/ruth.png',
    flagFrom: 'united-states',
    from: 'Washington, D.C, United States',
    name: 'Ruth Brown',
    accent: 'American',
  },
  {
    imgPath: 'assets/image/gregory.png',
    flagFrom: 'united-states',
    from: 'Arkansas, United States',
    name: 'Gregory Smith',
    accent: 'American',
  },
  {
    imgPath: 'assets/image/danielle.png',
    flagFrom: 'united-states',
    from: 'New York City, United States',
    name: 'Danielle Miller',
    accent: 'American',
  },
  {
    imgPath: 'assets/image/brian.png',
    flagFrom: 'england',
    from: 'London, England',
    name: 'Brian Jones',
    accent: 'British',
  },
  {
    imgPath: 'assets/image/amy.png',
    flagFrom: 'england',
    from: 'London, England',
    name: 'Amy Williams',
    accent: 'British',
  },
  {
    imgPath: 'assets/image/emma.png',
    flagFrom: 'england',
    from: 'Nottingham, England',
    name: 'Emma Lindley',
    accent: 'British',
  },
  {
    imgPath: 'assets/image/niamh.png',
    flagFrom: 'ireland',
    from: 'Dublin, Ireland',
    name: 'Niamh Murphy',
    accent: 'Irish',
  },

  {
    imgPath: 'assets/image/ayanda.png',
    flagFrom: 'south-africa',
    from: 'Joanesburgo, South Africa',
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
