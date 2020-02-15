import { css } from '../../web_modules/lit-element.js';

export default css`
  :host {
    font-size: 1.4rem;
  }

  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
  }

  th {
    padding: .5rem 1rem;
    text-align: left;
    border-bottom: 2px solid #ccc;
  }

  .sorted {
    color: #0066cc;
    background: #f0f033;
  }
  .sorted:after {
    /* ∆ */
    content: "\\2206";
  }
  .descending:after {
    /* ∇ */
    content: "\\2207";
  }

  td {
    padding: .5rem 1rem;
  }
`;
