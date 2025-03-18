import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/views/SignIn.vue';
// import Dashboard from '@/views/Dashboard.vue';
// import AddUser from '@/views/AddUser.vue';
// import AddProfile from '@/views/AddProfile.vue';
// import Settings from '@/views/Settings.vue';

// Type import for RouteRecordRaw
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn,
  },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   component: Dashboard,
  // },
  // {
  //   path: '/add-user',
  //   name: 'AddUser',
  //   component: AddUser,
  // },
  // {
  //   path: '/add-profile',
  //   name: 'AddProfile',
  //   component: AddProfile,
  // },
  // {
  //   path: '/settings',
  //   name: 'Settings',
  //   component: Settings,
  // },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
