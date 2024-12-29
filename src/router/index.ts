import { createRouter, createWebHistory } from 'vue-router';

import AboutView from '../components/views/AboutView.vue';
import AgbView from '../components/views/AgbView.vue';
import ImpressumView from '../components/views/ImpressumView.vue';
import LinksView from '../components/views/LinksView.vue';
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
    path: '/links',
    name: 'Links',
    component: LinksView, // Links Seite
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: RoomsView, // Zimmer Seite
  },
];

const router = createRouter({
  history: createWebHistory('/web-grau/'),
  routes,
});

export default router;
