import { Router } from '../web_modules/@vaadin/router.js';
import './index.js';
import './404.js';
import './blog/index.js';
import './blog/post.js';

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
  {
    path: '/sortable-table',
    component: 'sortable-table',
    bundle: {
      module: './modules/sortable-table.js'
    },
  },
  { path: '(.*)', component: 'http-404' },
]);
