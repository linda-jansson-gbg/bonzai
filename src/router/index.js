import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Rooms from '../views/Rooms.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Book from '../views/Book.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/book',
    name: 'Book',
    component: Book,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
