import { createWebHistory, createRouter } from 'vue-router'

// Auth
import Login from './resources/views/Login.vue'

// Admin
import AdminDashboard from './resources/views/admin/AdminDashboard.vue'
// import LayoutBasic from './'

// Views Page

// Login
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },

  // Admin
  {
    path: '/admin-dashboard',
    name: 'dashboard',
    component: AdminDashboard,
  },

  // Admin Surveys
  // {
  //   path: 'dashboard',
  //   name: 'dashboard',
  //   component: AdminDashboard,
  // },
  // {
  //   path: 'survey',
  //   name: 'survey',
  //   component: SurveyIndex,
  // },

  // Users
  // {
  //   path: 'dashboard',
  //   name: 'dashboard',
  //   component: AdminDashboard,
  // },

  // user attempt surveys
  // {
  //   path: 'survey',
  //   name: 'survey',
  //   component: UserSurvey,
  // },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
})

export default router
