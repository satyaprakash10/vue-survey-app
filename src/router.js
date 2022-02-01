import { createWebHistory, createRouter } from 'vue-router'

// Auth
import Login from './resources/views/Login.vue'

// Admin
import AdminDashboard from './resources/views/admin/AdminDashboard.vue'

// Views Page
import SurveyIndex from './resources/views/admin/surveys/SurveyIndex.vue'
import CreateSurvey from './resources/views/admin/surveys/CreateSurvey.vue'

import UserSurveyView from './components/UserSurveyView.vue'

import UsersIndex from './resources/views/admin/users/UserIndex.vue'
import UsersCreate from './resources/views/admin/users/UserCreate.vue'

import UserDashboard from './resources/views/user/UserDashboard.vue'
import UserSurveyIndex from './resources/views/user/surveys/UserSurveyIndex.vue'
import UserSurvey from './resources/views/user/surveys/UserSurvey.vue'

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
    path: '/survey/edit/:id',
    name: 'EditSurvey',
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
  {
    path: '/users/edit/:id',
    name: 'usersEdit',
    component: UsersCreate,
  },

  // Users Section
  {
    path: '/user/dashboard',
    name: 'userDashboard',
    component: UserDashboard,
  },

  // User attempt surveys
  {
    path: '/user/surveys',
    name: 'userSurveyIndex',
    component: UserSurveyIndex,
  },
  {
    path: '/user/surveys/manage-survey',
    name: 'userSurvey',
    component: UserSurvey,
  },

  {
    path: '/:id',
    name: 'userSurvey',
    component: UserSurveyView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
})

export default router
