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
  'Salli Brown': {
    imgPath: 'assets/image/salli.png',
    flagFrom: 'united-states',
    flagClass: 'flag-usa',
    from: 'Washington, D.C, United States',
    name: 'Salli Brown',
    accent: 'American',
    description:
      'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
  },
  'Joey Smith': {
    imgPath: 'assets/image/joey.png',
    flagFrom: 'united-states',
    flagClass: 'flag-usa',
    from: 'Arkansas, United States',
    name: 'Joey Smith',
    accent: 'American',
    description:
      'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
  },
  'Joanna Miller': {
    imgPath: 'assets/image/joanna.png',
    flagFrom: 'united-states',
    flagClass: 'flag-usa',
    from: 'New York City, United States',
    name: 'Joanna Miller',
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
  'Geraint halls': {
    imgPath: 'assets/image/geraint.png',
    flagFrom: 'wales',
    flagClass: 'flag-wales',
    from: 'Cardiff, Wales',
    name: 'Geraint halls',
    accent: 'Wales',
    description:
      'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
  },
  'Nicole Baker': {
    imgPath: 'assets/image/nicole.png',
    flagFrom: 'australia',
    flagClass: 'flag-australia',
    from: 'Sydney, Australia',
    name: 'Nicole Baker',
    accent: 'Australian',
    description:
      'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
  },
  'Russell Evans': {
    imgPath: 'assets/image/russell.png',
    flagFrom: 'australia',
    flagClass: 'flag-australia',
    from: 'Melbourne, Australia',
    name: 'Russell Evans',
    accent: 'Australian',
    description:
      'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
  },

  'Raveena Devi': {
    imgPath: 'assets/image/aditi.png',
    flagFrom: 'india',
    flagClass: 'flag-india',
    from: 'Bangalore, India',
    name: 'Raveena Devi',
    accent: 'Indian',
    description:
      'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
  },
  'Aditi Dlamini': {
    imgPath: 'assets/image/raveena.png',
    flagFrom: 'india',
    flagClass: 'flag-india',
    from: 'Bombaim, India',
    name: 'Aditi Dlamini',
    accent: 'Indian',
    description:
      'Melbourne based Illustrator & Designer Ken Taylor works primarily within the music industry and is predominantly well known for his striking rock posters. Ken started in Perth Western Australia doing posters and album artwork for local bands.',
  },
};

function setPersonasOnLocalStorage() {
  localStorage.setItem('personas', JSON.stringify(personas));
}

(function main() {
  setPersonasOnLocalStorage();
})();



/**
 * 
 * 1 - 
 - return in string
 - if two mark, order the names by alphabetical order
 - sortByMarkDescending('[name: Alice, mark: 90]')
 * 2 - contact form in react
   3 - clicable card, initially only one card is face up. Whenever a card is clicked
   the card that was face up is turned over to face down and the clicked card is turned over
   to face up. Only one card is ever face up
   when an up card is clicked it remains up


   // example case:
   document.body.innerHTML = `
    <table>
    </table>
   `


 */

