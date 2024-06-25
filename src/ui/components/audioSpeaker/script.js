class AudioSpeaker extends HTMLElement {
  static observedAttributes = ['url', 'label-description'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._url = undefined;
    this._labelDescription = undefined;
  }

  connectedCallback() {
    const shadow = this.shadowRoot;
    const styleElement = document.createElement('style');
    const styleStructure = this.stylesheet({ styleElement });
    const htmlStructure = this.build();

    shadow.innerHTML = htmlStructure;
    shadow.appendChild(styleStructure);
  }

  attributeChangedCallback(name, _, newValue) {
    const attributes = {
      url: () => (this.url = newValue),
      'label-description': () => (this._labelDescription = newValue),
    };
    attributes[name]();
  }

  build() {
    const htmlStructure = `
      <div class="audio-player">
      <audio id="audio" controls>
        <source type="audio/mpeg" id=audio-source"/>
        Your browser does not support the audio element.
      </audio>
      <div class="controls">
        <span>Listening my voice</span>
        <div class="timers">
          <div id="current-time">0:00</div>
          <div id="total-time">0:00</div>
        </div>
      </div>
    </div>
    <div class="wrapper-play-button">
      <button id="play-pause-button">
         <img
          src="../../assets/svg/play.svg"
          alt="Play icon"
        />
      </button>
      <div class="progress">
        <div class="progress-bar" id="progress-bar"></div>
      </div>
    </div>
    `;
    return htmlStructure;
  }

  stylesheet({ styleElement }) {
    styleElement.textContent = `
        .audio-player { 
          display: flex;
          justify-content: space-between;
        }

        .controls {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }

        .controls > span {
          color: #333333;
          font-size: 14px;
          font-weight: 600;
        }

        .progress {
          height: 5px;
          border-top-right-radius: 5px;
          border-end-end-radius: 5px;
          background-color: #e2e2e2;
          width: 100%;
        }

        .progress-bar {
          width: 0;
          height: 100%;
          background-color: #ffa38e;
        }

        #current-time,
        #total-time {
          margin-top: 10px;
        }

        #audio {
          visibility: hidden;
          opacity: 0;
          height: 0 !important;
          width: 0 !important;
          outline: none;
        }

        .timers {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 60px;
          margin-left: -10px;
          margin-top: -5px;
          gap: 2px;
          color: #333333;
          font-size: 14px;
          font-weight: 500;
        }

        #current-time::after {
          content: '/';
          padding-left: 2px;
        }

        .wrapper-play-button {
          max-width: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          align-content: center;
        }

        #play-pause-button {
          height: 33px;
          width: 35px;
          background: none;
          border: none;
          border-radius: 50%;
          background-color: #fc5c4c;
          cursor: pointer;
          display: flex;
          text-align: center;
          align-items: center;
          justify-content: center;
        }
    `;
    return styleElement;
  }

  behavior() {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause-button');

    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const totalTimeDisplay = document.getElementById('total-time');

    let isPlaying = false;

    playPauseButton.addEventListener('click', () => {
      if (isPlaying) {
        audio.pause();
        playPauseButton.innerHTML = `
          <img
            src="../../assets/svg/play.svg"
            alt="Play icon"
          />
        `;
      } else {
        audio.play();
        playPauseButton.innerHTML = `
          <img
            src"../../"
            alt="Pause icon"
          />
        `;
      }
      isPlaying = !isPlaying;
    });

    audio.addEventListener('timeupdate', () => {
      const currentTime = audio.currentTime;
      const duration = audio.duration;

      const currentMinutes = Math.floor(currentTime / 60);
      const currentSeconds = Math.floor(currentTime % 60);
      const totalMinutes = Math.floor(duration / 60);
      const totalSeconds = Math.floor(duration % 60);

      currentTimeDisplay.textContent = `${currentMinutes}:${
        currentSeconds < 10 ? '0' : ''
      }${currentSeconds}`;
      totalTimeDisplay.textContent = `${totalMinutes}:${
        totalSeconds < 10 ? '0' : ''
      }${totalSeconds}`;

      const progress = (currentTime / duration) * 100;
      progressBar.style.width = `${progress}%`;
    });
  }
}

customElements.define('audio-speaker', AudioSpeaker);
