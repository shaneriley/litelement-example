import { LitElement, html, css } from 'lit-element';

customElements.define('post-time', class extends LitElement {
  constructor() {
    super();
    this.datetime = '';
  }

  static get properties() {
    return {
      datetime: { type: String }
    };
  }

  static get styles() {
    return css`
      time {
        font-weight: 700;
      }
    `;
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toDateString().replace(/^\w+ /, '');
  }

  render() {
    return html`
      <time datetime="${this.datetime}">${this.formatDate(this.datetime)}</time>
    `;
  }
});
