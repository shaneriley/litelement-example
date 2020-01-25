import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import baseStyles from '../css/base';
import posts from './posts';
import './post-time';

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
            ${unsafeHTML(post.summary)}
            ${unsafeHTML(post.body)}
          </article>
        </section>
      </main>
    `;
  }
}

customElements.define('blog-post', BlogPost);
