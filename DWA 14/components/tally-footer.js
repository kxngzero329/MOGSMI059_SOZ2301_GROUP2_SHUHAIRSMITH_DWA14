import { html, LitElement } from '../Libs/lit-html.js';
class TallyFooter extends LitElement { 
  render() {
    return html`
      <footer style ="text-align:center; margin:auto; padding-top:50px; font-size:25px; color:white">
        Inspired by
        <a class="footer__link" href="https://tallycount.app/">Tally Count</a>.
      </footer>
    `;
  }
}
customElements.define('tally-footer', TallyFooter)
