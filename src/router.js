import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      title: 'Вход',
      layout: 'empty'
    }
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('./views/Map.vue'),
    meta: {
      title: 'Главная',
      layout: 'menu',
      // requiredAuth: true,
    }
  },
  {
    path: '/drivers',
    name: 'Drivers',
    component: () => import('./views/Drivers.vue'),
    meta: {
      title: 'Водители',
      layout: 'empty',
      // requiredAuth: true,
    }
  },
  {
    path: '/aboutapp',
    name: 'aboutapp',
    component: () => import('./views/InfoAboutApp'),
    meta: {
      title: 'Информация о приложении',
      layout: 'empty',
      // requiredAuth: true,
    }
  },
  {
      path: '/support',
    name: 'support',
    component: () => import('./views/Support'),
    meta: {
      title: 'Служба поддержки',
      layout: 'empty',
      // requiredAuth: true,
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('./views/Settings'),
    meta: {
      title: 'Настройки приложения',
      layout: 'empty',
      // requiredAuth: true,
    }
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('./views/Account'),
    meta: {
      title: 'Настройки аккаунта',
      layout: 'empty',
      // requiredAuth: true,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
