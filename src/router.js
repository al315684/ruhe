import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Reports from './views/Reports.vue'
import Patients from './views/Patients.vue'
import Psychologists from './views/Psychologists.vue'
import Report from './components/Report.vue'
import Patient from './components/Patient.vue'
import Psychologist from './components/Psychologist.vue'
import Chat from './components/Chat.vue'

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
    },
    {
      path: '/patients/id',
      name: 'patient',
      component: Patient
    },
    {
      path: '/psychologists',
      name: 'psychologists',
      component: Psychologists
    },
    {
      path: '/psychologists/id',
      name: 'psychologist',
      component: Psychologist
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    }
  ]
})
