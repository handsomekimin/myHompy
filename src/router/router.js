import { createRouter, createWebHistory } from 'vue-router';
import mainView from '../View/mainView.vue';

const routes = [
  { path: '/', component: mainView },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
