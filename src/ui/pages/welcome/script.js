const texts = [
  'Developing your ears to understand any English Accent around the world using personas created by AI.',
  'Desenvolva seus ouvidos para\n entender qualquer sotaque em\n inglês ao redor do mundo, usando\n personas criadas por IA.',
  'Desarrolla tus oídos para\n comprender cualquier acento\n inglés en todo el mundo utilizando\n personajes creados por IA.',
];

const mainTag = document.querySelector('main');

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
    mainTag.innerHTML = '';
    renderFirstStep();
  });
}

function getCurrentStepToRender({ indexToRender }) {
  const step = {
    step_0: () => `
       <section class="step">
        <div class="align-skip">
          <a href="/personas">Skip</a>
        </div>
        <img
          src="assets/image/step-1.png"
          alt="fake persona"
        />
        <div class="bullets">
          <div class="current-bullet"></div>
          <div></div>
          <div></div>
        </div>
        <h1>Choose the AI Persona You want to speak with</h1>
        <span>
          They have their own ideas, locales characteristics and experiences.
        </span>
        <div class="wrapper-go-back-go-forward-buttons">
          <button class="not-allowed-click">
           <i class="step-arrow-right-disable"></i>
          </button>
          <div></div>
          <button onclick="renderSecondStep()">
           <i class="step-arrow-right-enable"></i>
          </button>
        </div>
      </section>`,
    step_1: () => `
      <section class="step">
       <div class="align-skip">
         <a href="/personas">Skip</a>
       </div>
       <img
         src="assets/image/step-2.png"
         alt="fake persona"
       />
       <div class="bullets">
          <div></div>
          <div class="current-bullet"></div>
          <div></div>
        </div>
       <h1>Get to know more about them</h1>
       <span>
         Locale, Accent, What is Their history, What do they do for living?
       </span>
       <div class="wrapper-go-back-go-forward-buttons">
           <button onclick="renderFirstStep()">
           <i class="step-arrow-left-enable"></i>
         </button>
         <div></div>
        <button onclick="renderThirdStep()">
          <i class="step-arrow-right-enable"></i>
         </button>
       </div>
     </section>`,
    step_2: () => `
       <section class="step">
        <div class="align-skip">
          <a href="/personas">Skip</a>
        </div>
        <img
          src="assets/image/step-3.png"
          alt="fake persona"
        />
        <div class="bullets">
          <div></div>
          <div></div>
          <div class="current-bullet"></div>
        </div>
        <h1>After that, let’s start a conversion </h1>
        <span>
         You’ll be able to have a chat like a native speaker would be speaking.
        </span>
          <div class="wrapper-go-back-go-forward-buttons">
            <button onclick="renderSecondStep()">
              <i class="step-arrow-left-enable"></i>
            </button>
            <div></div>
            <button onclick="goToPersonasPage()">
              <span>Personas</span>
              <i class="step-arrow-right-enable-blue"></i>
            </button>
          </div>
      </section>`,
  };

  return step[`step_${indexToRender}`]();
}

function goToPersonasPage() {
  window.location.href = './personas.html';
}

function renderFirstStep() {
  renderStep({ indexToRender: 0 });
}

function renderSecondStep() {
  renderStep({ indexToRender: 1 });
}

function renderThirdStep() {
  renderStep({ indexToRender: 2 });
}

function renderStep({ indexToRender }) {
  const step = getCurrentStepToRender({ indexToRender });
  mainTag.innerHTML = step;
}

(function main() {
  animatedTextTransition();
  handleCleanWelcomePage();
})();
