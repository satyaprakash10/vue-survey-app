import { defineStore } from 'pinia'
import Ls from '../services/ls'

export const useAuthStore = defineStore({
  id: 'auth',

  state: () => ({
    isUser: JSON.parse(Ls.get('isUser')),
    isAdmin: JSON.parse(Ls.get('isAdmin')),
  }),

  actions: {
    adminLogout() {
      Ls.remove('isAdmin')
    },

    userLogout() {
      Ls.remove('isUser')
    },
  },
})
