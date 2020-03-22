import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import Boards from './views/Boards'
import SignUp from './views/SignUp'
import Login from './views/Login'
import store from './store'

Vue.use(Router);

function isLoggedIn(to, from, next) {
  store.dispatch('auth/authenticate').then(() => {
    next();
  }).catch(() => {
    next('/login');
  });
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: isLoggedIn
    },
    {
      path: '/boards',
      name: 'boards',
      component: Boards,
      beforeEnter: isLoggedIn
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