import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Principal from '../views/PrincipalView.vue'
import CadastroView from '../views/CadastroView.vue'
import RegistrarProduto from '../views/RegistrarProduto.vue'
import CadastroFuncionario from '../views/CadastroFuncionario.vue'
import CadastroEfuncionario from '../views/CadastroEfuncionario.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeApp',
      component: Home
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
      path: '/registrarProduto',
      name: 'RegistrarProduto',
      component: RegistrarProduto
    },

    {
      path: '/cadastroFuncionario',
      name: 'CadastroFuncionario',
      component: CadastroFuncionario
    },

    {
      path: '/cadastroEfuncionario',
      name: 'CadastroEfuncionario',
      component: CadastroEfuncionario
    },
  ]
})

export default router
