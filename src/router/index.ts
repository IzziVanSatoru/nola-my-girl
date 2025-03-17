import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Love from '../pages/Love.vue';
import Gallery from '../pages/Gallery.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/love', component: Love },
  { path: '/gallery', component: Gallery },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
