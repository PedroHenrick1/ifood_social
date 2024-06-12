import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Home from '../views/HomeView.vue'
import Principal from '../views/PrincipalView.vue'
import CadastroView from '../views/CadastroView.vue'
import RegistroProdutoView from '../views/RegistroProdutoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeApp',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/principal',
      name: 'PrincipalApp',
      component: Principal
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: CadastroView
    },
    {
      path: '/registrar',
      name: 'Registrar',
      component: RegistroProdutoView
    },
  ]
})

export default router
