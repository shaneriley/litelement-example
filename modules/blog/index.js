import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import baseStyles from '../css/base';
import posts from './posts';
import './post-time';

const postTmpl = (post) => (html`
  <article>
    <h2><a href="/blog/${post.slug}">${post.title}</a></h2>
    <p><post-time datetime="${post.date}"></post-time></p>
    ${unsafeHTML(post.summary)}
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
