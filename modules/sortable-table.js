import { LitElement, html } from '../web_modules/lit-element.js';
import tableCss from './css/sortable-table.js';

class SortableTable extends LitElement {
  constructor() {
    super();
    this.headings = [];
  }

  onBeforeEnter() {
    return new Promise((resolve) => {
      fetch('/json/sortable-table.json')
        .then((res) => res.json())
        .then((json) => {
          this.headings = json.headings;
          this.rows = json.rows;
          resolve();
        });
    });
  }

  renderHeadings() {
    return this.headings.map((h) => html`<th>${h}</th>`);
  }

  renderYesNo(bool) {
    return bool ? 'Yes' : 'No';
  }

  formatPrice(price) {
    return `$${(+price).toFixed(2)}`;
  }

  renderRows() {
    return this.rows.map((r) => (
      html`
        <tr>
          <td>${r.id}</td>
          <td>${r.console}</td>
          <td>${r.name}</td>
          <td>${this.formatPrice(r.price)}</td>
          <td>${this.renderYesNo(r.box)}</td>
          <td>${this.renderYesNo(r.manual)}</td>
          <td>${this.renderYesNo(r.sold)}</td>
        </tr>
      `
    ));
  }

  static get styles() {
    return tableCss;
  }

  render() {
    return html`
      <table>
        <thead>
          <tr>${this.renderHeadings()}</tr>
        </thead>
        <tbody>
          ${this.renderRows()}
        </tbody>
      </table>
    `;
  }
}

customElements.define('sortable-table', SortableTable);
