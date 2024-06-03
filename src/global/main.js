const personas = {
  'Matthew Brain': {
    imgPath: 'assets/image/matthew.png',
    flagFrom: 'united-states',
    flagClass: 'flag-usa',
    from: 'California, United States',
    name: 'Matthew Brain',
    accent: 'American',
    description:
      'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
  },
  'Ruth Brown': {
    imgPath: 'assets/image/ruth.png',
    flagFrom: 'united-states',
    flagClass: 'flag-usa',
    from: 'Washington, D.C, United States',
    name: 'Ruth Brown',
    accent: 'American',
    description:
      'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
  },
  'Gregory Smith': {
    imgPath: 'assets/image/gregory.png',
    flagFrom: 'united-states',
    flagClass: 'flag-usa',
    from: 'Arkansas, United States',
    name: 'Gregory Smith',
    accent: 'American',
    description:
      'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
  },
  'Danielle Miller': {
    imgPath: 'assets/image/danielle.png',
    flagFrom: 'united-states',
    flagClass: 'flag-usa',
    from: 'New York City, United States',
    name: 'Danielle Miller',
    accent: 'American',
    description:
      'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
  },
  'Brian Jones': {
    imgPath: 'assets/image/brian.png',
    flagFrom: 'england',
    flagClass: 'flag-england',
    from: 'London, England',
    name: 'Brian Jones',
    accent: 'British',
    description:
      'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
  },
  'Amy Williams': {
    imgPath: 'assets/image/amy.png',
    flagFrom: 'england',
    flagClass: 'flag-england',
    from: 'London, England',
    name: 'Amy Williams',
    accent: 'British',
    description:
      'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
  },
  'Emma Lindley': {
    imgPath: 'assets/image/emma.png',
    flagFrom: 'england',
    flagClass: 'flag-england',
    from: 'Nottingham, England',
    name: 'Emma Lindley',
    accent: 'British',
    description:
      'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
  },
  'Niamh Murphy': {
    imgPath: 'assets/image/niamh.png',
    flagFrom: 'ireland',
    flagClass: 'flag-ireland',
    from: 'Dublin, Ireland',
    name: 'Niamh Murphy',
    accent: 'Irish',
    description:
      'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
  },
  'Ayanda Dlamini': {
    imgPath: 'assets/image/ayanda.png',
    flagFrom: 'south-africa',
    flagClass: 'flag-south-africa',
    from: 'Joanesburgo, South Africa',
    name: 'Ayanda Dlamini',
    accent: 'South Africa',
    description:
      'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
  },
};

(function main() {
  localStorage.setItem('personas', JSON.stringify(personas));
})();
