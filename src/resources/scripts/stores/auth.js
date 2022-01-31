import { defineStore } from 'pinia'
import Ls from '../../../services/ls'

export const useAuthStore = defineStore({
  id: 'auth',

  state: () => ({
    isUser: JSON.parse(Ls.get('isUser')),
    isAdmin: JSON.parse(Ls.get('isAdmin')),
    currentUser: JSON.parse(Ls.get('currentUser')),
  }),

  actions: {
    getCurrentUser(data) {
      if (data) {
        const users = JSON.parse(Ls.get('users'))
        const user = users.find((_u) => _u.email === data.email)
        Ls.set('currentUser', JSON.stringify(user))
      }
    },

    adminLogout() {
      Ls.remove('isAdmin')
    },

    userLogout() {
      Ls.remove('isUser')
      Ls.remove('currentUser')
    },
  },
})
