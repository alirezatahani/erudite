import Vue from 'vue';
import VueRouter from 'vue-router';
import Books from '../views/Books.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Books',
    component: Books
  },
  {
    path: '/viewed-books',
    name: 'VisitedBooks',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/VisitedBooks.vue')
  },

  {
    path: '/book/:id',
    name: 'Book-detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/BookDetail.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
