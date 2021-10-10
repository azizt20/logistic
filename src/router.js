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
    }
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('./views/Map.vue'),
    meta: {
      title: 'Главная',
      // requiredAuth: true,
    }
  },
  {
    path: '/drivers',
    name: 'Drivers',
    component: () => import('./views/Drivers.vue'),
    meta: {
      title: 'Водители',
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
