import { createRouter, createWebHistory } from 'vue-router';

import AboutView from '../components/views/AboutView.vue';
import AgbView from '../components/views/AgbView.vue';
import ImpressumView from '../components/views/ImpressumView.vue';
import TourismusView from '../components/views/TourismusView.vue';
import MainView from '../components/views/MainView.vue';
import RoomsView from '../components/views/RoomsView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainView, // Hauptseite, die aufgerufen wird, wenn der Benutzer die Root-URL besucht
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView, // Über uns Seite
  },
  {
    path: '/agb',
    name: 'AGB',
    component: AgbView, // AGB Seite
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: ImpressumView, // Impressum Seite
  },
  {
    path: '/tourismus',
    name: 'Tourismus',
    component: TourismusView, // Links Seite
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: RoomsView, // Zimmer Seite
  },
  {
    path: '/:pathMatch(.*)*',
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
