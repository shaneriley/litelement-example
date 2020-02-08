import { LitElement, html, css } from '../web_modules/lit-element.js';
import baseStyles from './css/base.js';

class IndexPage extends LitElement {
  static get styles() {
    return [
      baseStyles,
      css`
      `,
    ];
  }

  render() {
    return html`
      <main>
        <header>
          <h1>Home page</h1>
        </header>
        <section>
          <a href="/blog/">Blog</a>
        </section>
      </main>
    `;
  }
}

customElements.define('index-page', IndexPage);
