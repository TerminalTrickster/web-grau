import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../components/views/HomeView.vue';
import AboutView from '../components/views/AboutView.vue';
import RoomsView from '../components/views/RoomsView.vue';
import PricesView from '../components/views/PricesView.vue';
import AttractionsView from '../components/views/AttractionsView.vue';
import ContactView from '../components/views/ContactView.vue';
import LocationView from '../components/views/LocationView.vue';
import WildparkView from '../components/views/WildparkView.vue';
import ImpressumView from '../components/views/ImpressumView.vue';
import TermsView from '../components/views/TermsView.vue';
import GuestbookView from '../components/views/GuestbookView.vue';
import MapView from '../components/views/MapView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/rooms', component: RoomsView },
  { path: '/prices', component: PricesView },
  { path: '/attractions', component: AttractionsView },
  { path: '/contact', component: ContactView },
  { path: '/location', component: LocationView },
  { path: '/wildpark', component: WildparkView },
  { path: '/impressum', component: ImpressumView },
  { path: '/terms', component: TermsView },
  { path: '/guestbook', component: GuestbookView },
  { path: '/map', component: MapView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
