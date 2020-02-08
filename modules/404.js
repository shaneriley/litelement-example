import { LitElement, html, css } from '../web_modules/lit-element.js';
import baseStyles from './css/base.js';

class Http404 extends LitElement {
  static get styles() {
    return [
      baseStyles,
      css`
        :host {
          font: normal 14px Helvetica, Arial, sans-serif;
        }
        h1 {
          color: #b00b00;
        }
      `,
    ]
  }

  render() {
    return html`
      <main>
        <header>
          <h1>404</h1>
        </header>
        <p>Route requested: ${this.location.pathname}</p>
      </main>
    `;
  }
}

customElements.define('http-404', Http404);
