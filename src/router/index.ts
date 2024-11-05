import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../components/views/HomeView.vue';
import RoomView from '../components/views/RoomView.vue';
import ContactView from '../components/views/ContactView.vue';
const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/room', name: 'Room', component: RoomView },
  { path: '/contact', name: 'Contact', component: ContactView },
];
const router = createRouter({
  history: createWebHistory('/web-grau/'),
  routes,
});

export default router;
