<template>
  <div class="">
    <div class="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h1
          class="flex justify-center text-lg italic font-bold text-indigo-800 sm:text-2xl"
        >
          Todo

          <span
            class="mt-1 ml-2 font-serif text-lg font-semibold text-orange-800"
          >
            App
          </span>
        </h1>

        <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" action="" @submit.prevent="submitLoginData">
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div class="mt-1">
                <input
                  id="email"
                  v-model="loginData.email"
                  name="email"
                  type="email"
                  class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div class="mt-1">
                <input
                  id="password"
                  v-model="loginData.password"
                  name="password"
                  type="password"
                  class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              class="flex justify-center , w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </form>

          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup type="text/babel">
import { reactive } from 'vue'
import { useAuthStore } from '../../../src/resources/scripts/stores/auth'
import { useNotificationStore } from '../../../src/resources/scripts/stores/notification'
import { useRouter } from 'vue-router'
import Ls from '../../services/ls'

const router = useRouter()

let loginData = reactive({
  email: '',
  password: '',
})

const notificationStore = useNotificationStore()
const authStore = useAuthStore()

function submitLoginData() {
  try {
    if (loginData.email === 'admin@gmail.com') {
      router.push('/demo')
      Ls.set('isAdmin', JSON.stringify(true))
    } else {
      router.push('/user/dashboard')
      Ls.set('isUser', JSON.stringify(true))
      authStore.getCurrentUser(loginData)
    }
    notificationStore.showNotification({
      type: 'success',
      message: 'Logged in Successfully.',
    })
  } catch (error) {
    console.log(error)
  }
}
</script>
