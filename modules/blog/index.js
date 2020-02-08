import { LitElement, html, css } from '../../web_modules/lit-element.js';
import baseStyles from '../css/base.js';
import posts from './posts.js';
import './post-time.js';

const postTmpl = (post) => (html`
  <article>
    <h2><a href="/blog/${post.slug}">${post.title}</a></h2>
    <p><post-time datetime="${post.date}"></post-time></p>
    ${post.summary}
  </article>
`);

class BlogIndex extends LitElement {
  static get styles() {
    return baseStyles;
  }

  render() {
    return html`
      <main>
        <header>
          <h1>Blog</h1>
        </header>
        <section>
          ${posts.map(postTmpl)}
        </section>
      </main>
    `;
  }
}

customElements.define('blog-index', BlogIndex);
