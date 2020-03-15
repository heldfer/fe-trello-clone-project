import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import SignUp from './views/SignUp'
import Login from './views/Login'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      meta: { layout: 'no-sidebar'}
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { layout: 'no-sidebar'}
    }
  ]
})