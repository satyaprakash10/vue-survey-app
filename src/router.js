import { createWebHistory, createRouter } from 'vue-router'

// Auth
import Login from './resources/views/Login.vue'

// Admin
import AdminDashboard from './resources/views/admin/AdminDashboard.vue'

// Views Page
import SurveyIndex from './resources/views/admin/surveys/SurveyIndex.vue'
import CreateSurvey from './resources/views/admin/surveys/CreateSurvey.vue'

import UsersIndex from './resources/views/admin/users/UserIndex.vue'
import UsersCreate from './resources/views/admin/users/UserCreate.vue'

// Login
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },

  // Admin section
  {
    path: '/dashboard',
    name: 'dashboard',
    component: AdminDashboard,
  },

  // Surveys
  {
    path: '/survey',
    name: 'survey',
    component: SurveyIndex,
  },
  {
    path: '/survey/create',
    name: 'CreateSurvey',
    component: CreateSurvey,
  },

  {
    path: '/users',
    name: 'users',
    component: UsersIndex,
  },
  {
    path: '/users/create',
    name: 'usersCreate',
    component: UsersCreate,
  },

  // Users Section
  // {
  //   path: '/user-dashboard',
  //   name: 'user dashboard',
  //   component: User,
  // },

  // // User attempt surveys
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
