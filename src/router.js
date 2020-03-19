import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import Boards from './views/Boards'
import SignUp from './views/SignUp'
import Login from './views/Login'
import store from './store'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter (to, from, next) {
        if (!store.getters['auth/isAuthenticated']) {
          next('/login')
        } else {
          next()
        }
      }
    },
    {
      path: '/boards',
      name: 'boards',
      component: Boards,
      beforeEnter (to, from, next) {
        if (!store.getters['auth/isAuthenticated']) {
          next('/login')
        } else {
          next()
        }
      }
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
    },
    {
      path: '*',
      redirect: '/dashboard'
    }
  ]
})