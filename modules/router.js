import { Router } from '@vaadin/router';
import './';
import './404';
import './blog/';
import './blog/post';

const router = new Router(document.body);

router.setRoutes([
  { path: '/', component: 'index-page' },
  {
    path: '/blog',
    children: [
      { path: '/', component: 'blog-index' },
      { path: '/:slug', component: 'blog-post' },
    ],
  },
  { path: '(.*)', component: 'http-404' },
]);
