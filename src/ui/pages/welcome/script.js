const texts = [
  'Developing your ears to understand any English Accent around the world using personas created by AI.',
  'Desenvolva seus ouvidos para\n entender qualquer sotaque em\n inglês ao redor do mundo, usando\n personas criadas por IA.',
  'Desarrolla tus oídos para\n comprender cualquier acento\n inglés en todo el mundo utilizando\n personajes creados por IA.',
];
function animatedTextTransition() {
  let currentIndex = 0;
  const textElement = document.getElementById('animated-text');

  function typeText(text, callback) {
    let i = 0;
    textElement.innerText = '';

    function type() {
      if (i < text.length) {
        textElement.innerHTML +=
          text.charAt(i) === ' ' ? '&nbsp;' : text.charAt(i);
        i++;
        setTimeout(type, 50);
      } else if (callback) {
        setTimeout(callback, 3500);
      }
    }

    type();
  }

  function eraseText(callback) {
    let text = textElement.innerText;
    let i = text.length;

    function erase() {
      if (i > 0) {
        textElement.innerText = text.substring(0, i - 1);
        i--;
        setTimeout(erase, 25);
      } else if (callback) {
        callback();
      }
    }

    erase();
  }

  function changeText() {
    eraseText(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      typeText(texts[currentIndex], changeText);
    });
  }

  typeText(texts[currentIndex], changeText);
}

function handleCleanWelcomePage() {
  const button = document.getElementById('get-started-button');

  button.addEventListener('click', function () {
    document.querySelector('main').innerHTML = '';
  });
}

function addFirstStepSection() {}

(function main() {
  animatedTextTransition();
  handleCleanWelcomePage();
})();
