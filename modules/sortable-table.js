import { LitElement, html } from '../web_modules/lit-element.js';
import tableCss from './css/sortable-table.js';

class SortableTable extends LitElement {
  constructor() {
    super();
    this.headings = [];
    this.rows = [];
    this.column_sorted = 'id';
    this.direction = 'ascending';
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
    const sorted_class = (h) => this.column_sorted === h.id ? `sorted ${this.direction}` : '';
    return this.headings.map((h) => html`<th class=${sorted_class(h)} @click=${(e) => this.sortRows(e, h.id)}>${h.name}</th>`);
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

  setDirection(column) {
    if (this.column_sorted !== column) {
      this.direction = 'ascending';
      return;
    }
    this.direction = /^a/.test(this.direction) ? 'descending' : 'ascending';
  }

  sortRows(e, column) {
    this.setDirection(column);
    this.column_sorted = column;
    const sort = {
      ascending: (a, b) => a[column] > b[column] ? 1 : a[column] < b[column] ? -1 : 0,
      descending: (a, b) => a[column] < b[column] ? 1 : a[column] > b[column] ? -1 : 0
    };
    const sorted_rows = this.rows.sort(sort[this.direction]);
    this.rows = sorted_rows;
  }

  static get properties() {
    return {
      headings: { type: Array },
      rows: { type: Array },
      column_sorted: { type: String },
      direction: { type: String },
    };
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
