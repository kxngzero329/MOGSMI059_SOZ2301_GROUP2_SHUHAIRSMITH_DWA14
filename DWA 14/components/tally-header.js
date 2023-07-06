import { html, css, LitElement } from '../Libs/lit-html.js';

class TallyHeader extends LitElement {
  static styles = css`
    header {
      display: flex;
      margin: 15px;
      justify-content: space-between;
      
    }
    h1 {
      margin: auto;
      font-size: 2rem;
      color: orange;
  text-shadow: 0 0 10px orange, 0 0 20px orange, 0 0 30px orange, 0 0 40px orange, 0 0 50px orange, 0 0 60px orange, 0 0 70px orange;
    }
  `;

  render() {
    return html`
      <header>
        <h1>Tally Count</h1>
      </header>
    `;
  }
}

customElements.define('tally-header', TallyHeader);