import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Reports from './views/Reports.vue'
import Patients from './views/Patients.vue'
import Report from './components/Report.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports
    },
    {
      path: '/patients',
      name: 'patients',
      component: Patients
    },
    {
      path: '/reports/id',
      name: 'report',
      component: Report
    }
  ]
})
