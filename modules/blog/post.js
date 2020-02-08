import { LitElement, html, css } from '../../web_modules/lit-element.js';
import baseStyles from '../css/base.js';
import posts from './posts.js';
import './post-time.js';

class BlogPost extends LitElement {
  static get styles() {
    return baseStyles;
  }

  fetchPost(slug) {
    return posts.find((post) => post.slug === slug);
  }

  render() {
    const post = this.fetchPost(this.location.params.slug);
    if (!post) { return ''; }

    return html`
      <main>
        <header>
          <h1>${post.title}</h1>
        </header>
        <section>
          <article>
            <p><post-time datetime=${post.date}></post-time></p>
            ${post.summary}
            ${post.body}
          </article>
        </section>
      </main>
    `;
  }
}

customElements.define('blog-post', BlogPost);
