import { html, css, LitElement } from '../Libs/lit-html.js';
class TallyMain extends LitElement {
  static styles = css`
    .settings-save {
      float: right;
      padding-top: 1.2rem;
    }
    .theme_picker {
      font-size: 1.5rem;
    }
    .counter__value {
      color: orange;
      background-color: grey;
      width: 100%;
      border-width: 0;
      height: 15rem;
      text-align: center;
      font-size: 6rem;
      font-weight: 900;
    }
    .counter__actions {
      display: flex;
    }
    .counter__button {
      color: cyan;
      background: linear-gradient(to bottom, red, yellow);
      background-size: 100% 200%;
      animation: gradientAnimation 5s linear infinite;
      width: 50%;
      height: 10rem;
      border-width: 0;
      columns: #4c4e53;
      font-size: 3rem;
      border-bottom: 1px solid #4c4e53;
      transition: transform 0.3s;
      transform: translateY(0);
    } 
    .counter__button:active {
      background: black;
      transform: translateY(2%);
    }
    .counter__button:disabled {
      opacity: 0.2;
    }
    .reset_actions {
      padding-top: 90px;
      display: flex;
      justify-content: center;
    }
    .reset_button {
      padding:2.6rem;
      color: green;
      font-size: 2.6rem;
      font-family: "bangers", cursive;
      position: fixed;
      bottom: 20px;
      z-index: 9999;
      background-color: white;
      border-radius:40px;
      
    }
  `;

  static properties = {
    count: { type: Number },
    minReached: { type: Boolean },
    maxReached: { type: Boolean },
    reset: { type: Boolean },
  };

  constructor() {
    super();
    this.count = 0;
    this.minReached = false;
    this.maxReached = false;
  }

  increment() {
    if (this.count < 15) {
      this.count += 1;
      this.minReached = false;
      this.maxReached = false;
      this.reset = false;
    } else {
      this.maxReached = true;
    }
  }

  decrement() {
    if (this.count > -15) {
      this.count -= 1;
      this.minReached = false;
      this.maxReached = false;
      this.reset = false;
    } else {
      this.minReached = true;
    }
  }

  restart() {
    this.count = 0;
    this.minReached = false;
    this.maxReached = false;
    this.reset = true;
  }

  render() {
    return html`
      <main>
        <input
          readonly
          value="${this.count}"
          class="counter__value"
          size="large"
        />
        <div class="counter__actions">
          <button @click="${this.decrement}" ?disabled="${this.minReached}"
            class="counter__button"
          > - </button>
          <button @click="${this.increment}" ?disabled="${this.maxReached}"
            class="counter__button"
          > + </button>
        </div>
        <div class="reset_actions">
          <button @click="${this.restart}"
            class="reset_button"
            @click="${this.restart}"
            >RESET</button
          >
        </div>
      </main>
    `;
  }
}

customElements.define('tally-main', TallyMain);
