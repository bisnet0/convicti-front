import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/views/SignIn.vue';
import Dashboard from '@/views/Dashboard.vue';
// import AddUser from '@/views/AddUser.vue';
// import AddProfile from '@/views/AddProfile.vue';
import Settings from '@/views/Settings.vue';
import type { RouteRecordRaw } from 'vue-router';

// Middleware de autenticação
function authGuard(to: any, from: any, next: any): void {
  const token = localStorage.getItem('access_token');
  if (!token) {
    next({ path: '/' }); // Redireciona para a página de login
  } else {
    next(); // Permite o acesso à rota
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: authGuard, // Protege a rota com o middleware
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    beforeEnter: authGuard, // Protege a rota de configurações
  },
];

// Criação da instância do router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
