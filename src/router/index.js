import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import HomeApp from '../views/HomeApp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'HomeApp',
      component: HomeApp
    }
  ]
})

export default router
