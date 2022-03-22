import { createWebHistory, createRouter } from 'vue-router'
// import auth_middleware from './resources/middleware/'
// Auth
import Login from './resources/views/Login.vue'

// Demo
import Demo from './components/Demo.vue'
// Admin Side

// Board
import Board from './resources/views/Board.vue'

// Dashboard
import Dashboard from './resources/views/Dashboard.vue'

// Views Page
import SurveyIndex from './resources/views/admin/surveys/SurveyIndex.vue'
import CreateSurvey from './resources/views/admin/surveys/CreateSurvey.vue'

import UserSurveyView from './components/UserSurveyView.vue'

import UsersIndex from './resources/views/admin/users/UserIndex.vue'
import UsersCreate from './resources/views/admin/users/UserCreate.vue'

// User Side
import UserDashboard from './resources/views/user/UserDashboard.vue'
import UserSurveyIndex from './resources/views/user/surveys/UserSurveyIndex.vue'
import UserSurvey from './resources/views/user/surveys/UserSurvey.vue'

// Todo App
import TodoIndex from './resources/views/todo/TodoIndex.vue'
import TodoCreate from './resources/views/todo/TodoCreate.vue'

// Login
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },

  // Demo
  {
    path: '/demo',
    name: 'demo',
    component: Demo,
  },

  // Admin section
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },

  // board
  {
    path: '/board',
    name: 'board',
    component: Board,
  },
  // Surveys
  {
    path: '/surveys',
    name: 'survey',
    component: SurveyIndex,
  },
  {
    path: '/surveys/create',
    name: 'CreateSurvey',
    component: CreateSurvey,
  },
  {
    path: '/surveys/edit/:id',
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

  // manage survey
  {
    path: '/user/surveys/manage-survey',
    name: 'userManageSurvey',
    component: UserSurvey,
  },

  {
    path: '/:id',
    name: 'userSurvey',
    component: UserSurveyView,
  },

  //  Todo
  {
    path: '/todo',
    name: 'todo index',
    component: TodoIndex,
  },
  {
    path: '/todo/todo-create',
    name: 'todo create',
    component: TodoCreate,
  },
  {
    path: '/todo/todo-create/edit/:id',
    name: 'todo edit',
    component: TodoCreate,
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
})

router.beforeEach((to, from, next) => {
  const isAdmin = localStorage.getItem('isAdmin')
  const isUser = localStorage.getItem('isUser')
  if (to.name !== 'login' && !isAdmin && to.name !== 'login' && !isUser)
    next('/')
  else next()
})

export default router
