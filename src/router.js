import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'costume',
      component: DashboardLayout,
      children: [
        {
          path: '/costume',
          name: 'Skin Costume',
          component: () => import('./views/Costume.vue')
        },
        {
          path: '/weapon',
          name: 'Skin Weapon',
          component: () => import('./views/Weapon.vue')
        },
        {
          path: '/create',
          name: 'Create Skin',
          component: () => import('./views/UserProfile.vue')
        },
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    }
  ]
})
