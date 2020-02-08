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

  td {
    padding: .5rem 1rem;
  }
`;
