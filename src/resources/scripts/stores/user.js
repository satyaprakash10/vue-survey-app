import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'users',

  state: () => ({
    currentUser: null,
    roles: [],
    users: [],
    totalUsers: 0,
    currentUser: null,
    selectedUsers: [],
    userData: {
      id: '',
      email: '',
      password: '',
      role: '',
    },
  }),

  getters: {
    getUsers: (state) => state.users,
  },

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
      return new Promise((resolve, reject) => {
        'allUsers'
      })
    },

    // fetchUsers() {
    //   //   console.log('fetch user =>', )
    //   return new Promise((resolve, reject) => {
    //     this.users = response.data
    //     this.totalUsers = response.data.meta.total
    //     resolve(response).catch((err) => {
    //       reject(err)
    //     })
    //   })
    // },

    fetchUser(id) {
      return new Promise((resolve, reject) => {
        this.userData = response.data
        resolve(response).catch((err) => {
          reject(err)
        })
      })
    },

    fetchRoles() {
      return new Promise((resolve, reject) => {
        this.roles = response.data
        resolve(response).catch((err) => {
          reject(err)
        })
      })
    },

    addUser(data) {
      return new Promise((resolve, reject) => {
        this.users.push(data)

        // resolve(response).catch((err) => {
        //   reject(err)
        // })
      })
    },

    updateUser(data) {
      return new Promise((resolve, reject) => {
        if (data) {
          let pos = this.users.findIndex(
            (user) => user.id === response.data.data.id
          )
          this.users[pos] = response.data.data
        }
        resolve(response).catch((err) => {
          reject(err)
        })
      })
    },

    deleteUser(id) {
      return new Promise((resolve, reject) => {
        let index = this.users.findIndex((user) => user.id === id)
        this.users.splice(index, 1)

        resolve(response).catch((err) => {
          reject(err)
        })
      })
    },

    deleteMultipleUsers() {
      return new Promise((resolve, reject) => {
        this.selectedUsers.forEach((user) => {
          let index = this.users.findIndex((_user) => _user.id === user.id)
          this.users.splice(index, 1)
          resolve(response).catch((err) => {
            reject(err)
          })
        })
      })
    },
  },

  mutations: {
    addUser(state, data) {
      if (data) {
        state.users.push(data)
        if (state.users) {
          window.localStorage.setItem('users', JSON.stringify(state.users))
        }
      }
    },

    allUsers(state) {
      const allUser = window.localStorage.getItem('users')
      state.users = JSON.parse(allUser)
    },
  },
})
