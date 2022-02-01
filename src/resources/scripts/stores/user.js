import { defineStore } from 'pinia'
import Ls from '../../../services/ls'

export const useUserStore = defineStore({
  id: 'users',

  state: () => ({
    currentUser: null,
    roles: [],
    users: [
      {
        id: '1',
        email: 'admin@gmail.com',
        password: 'admin',
        role: 'admin',
      },

      // {
      //   id: '2',
      //   email: 'test@user.com',
      //   password: 'test@123',
      //   role: 'user',
      // },
    ],

    userData: {
      id: '',
      email: '',
      password: '',
      role: '',
    },
  }),

  actions: {
    resetUserData() {
      this.userData = {
        id: '',
        email: '',
        password: null,
        role: null,
      }
    },

    fetchAllUsers() {
      this.users = JSON.parse(Ls.get('users'))
    },

    fetchUser(id) {
      const user = this.users.find((user) => user.id === id)
      this.userData = user
    },

    addUser(data) {
      if (data) {
        this.users.push(data)
        console.log('user data =>', data)
        Ls.set('users', JSON.stringify(this.users))
      }
    },

    updateUser(data) {
      let pos = this.users.findIndex((user) => user.id === data.id)
      this.users[pos] = data
      Ls.set('users', JSON.stringify(this.users))
    },

    deleteUser(id) {
      let index = this.users.findIndex((user) => user.id === id)
      this.users.splice(index, 1)
      Ls.set('users', JSON.stringify(this.users))
    },
  },
})
