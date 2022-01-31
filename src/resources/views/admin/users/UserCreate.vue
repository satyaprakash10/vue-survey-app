<template>
  <div>
    <div class="px-6 py-4 mx-auto max-w-7xl">
      <!-- Breadcrumb -->
      <h1 class="mb-6 text-lg font-bold sm:text-xl">New User</h1>

      <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div>
              <router-link
                to="/dashboard"
                class="flex text-gray-400 hover:text-gray-500"
              >
                <HomeIcon
                  class="flex-shrink-0 w-5 h-5 mr-3"
                  aria-hidden="true"
                />
                Home
              </router-link>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <router-link
                to="/users"
                class="ml-4 font-medium text-gray-500 hover:text-gray-700"
              >
                Users
              </router-link>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <router-link
                to="#"
                class="ml-4 font-medium text-gray-500 hover:text-gray-700"
              >
                New User
              </router-link>
            </div>
          </li>
        </ol>
      </nav>

      <!-- survey form start -->
      <form action="" @submit="submitUserData">
        <div
          class="px-6 py-5 mt-5 bg-white border-t-2 border-indigo-500 border-solid rounded-md shadow rounded-t-md"
        >
          <div class="sm:grid sm:grid-cols-2 sm:gap-6">
            <div class="py-4 mt-2 sm:border-gray-200 sm:pt-4">
              <label
                for=""
                class="block text-sm font-medium text-gray-700 sm:mt-px"
              >
                Id
              </label>
              <div class="mt-1 sm:mt-3 sm:col-span-2">
                <input
                  type="text"
                  v-model="userStore.userData.id"
                  name="id"
                  id="id"
                  class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:ring-none focus:outline-none focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="py-4">
              <label
                for=""
                class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Email
              </label>
              <div class="mt-1 sm:mt-3 sm:col-span-2">
                <input
                  v-model="userStore.userData.email"
                  type="email"
                  name="email"
                  id="email"
                  class="block w-full max-w-xl px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:ring-none focus:outline-none focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="py-4 sm:border-t sm:border-gray-200">
              <label
                for=""
                class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Role
              </label>
              <div class="mt-1 sm:mt-3 sm:col-span-2">
                <input
                  v-model="userStore.userData.role"
                  type="text"
                  name="role"
                  id="role"
                  class="block w-full max-w-xl px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:ring-none focus:outline-none focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="py-4 sm:border-t sm:border-gray-200">
              <label
                for=""
                class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Password
              </label>
              <div class="mt-1 sm:mt-3 sm:col-span-2">
                <input
                  v-model="userStore.userData.password"
                  type="password"
                  name="password"
                  id="password"
                  class="block w-full max-w-xl px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:ring-none focus:outline-none focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {{ userStore.userData }}

          <div
            class="flex justify-center mx-auto mt-6 mb-6 sm:pt-12 sm:justify-start max-w-7xl"
          >
            <button
              type="submit"
              class="flex justify-center w-full px-2 py-3 text-white bg-indigo-600 rounded-md shadow sm:w-40 hover:bg-blue-500 hover:bg-opacity-90"
            >
              <SaveIcon class="w-6 h-6 mr-4" />
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, computed, watchEffect } from 'vue'
import { HomeIcon, PlusIcon, SaveIcon, TrashIcon } from '@heroicons/vue/solid'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '../../../../resources/scripts/stores/user'
import { useNotificationStore } from '../../../scripts/stores/notification'

// local state variable
const userStore = useUserStore()
const notificationStore = useNotificationStore()

let isSaving = ref(false)
let isEdit = ref(false)
const route = useRoute()
const router = useRouter()

// watcher
watchEffect(() => {
  if (route.params.id) {
    userStore.fetchUser(route.params.id)
  }
})

// methods
function submitUserData() {
  isSaving.value = true
  if (route.params.id) {
    userStore.updateUser(userStore.userData)
    notificationStore.showNotification({
      type: 'success',
      message: 'User Updated Successfully.',
    })
  } else {
    userStore.addUser(userStore.userData)
    notificationStore.showNotification({
      type: 'success',
      message: 'User Added Successfully.',
    })
  }

  isSaving.value = false

  router.push('/users')
}
</script>
