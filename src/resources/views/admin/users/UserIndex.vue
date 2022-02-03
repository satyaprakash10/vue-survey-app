<template>
  <div>
    <div class="px-6 py-4 mx-auto mt-12 max-w-7xl">
      <!-- Breadcrumb -->
      <div class="flex items-center justify-between">
        <nav class="" aria-label="Breadcrumb">
          <h1 class="mb-6 text-lg font-bold sm:text-xl">Users</h1>

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
                  to="#"
                  class="ml-4 font-medium text-gray-500 hover:text-gray-700"
                >
                  Users
                </router-link>
              </div>
            </li>
          </ol>
        </nav>

        <router-link
          to="/users/create"
          class="px-4 py-3 transition-all duration-300 border border-indigo-500 rounded-md hover:ease-in-out hover:bg-indigo-500 hover:bg-opacity-30 hover:shadow-lg"
        >
          Add New Users
        </router-link>
      </div>

      <!-- Total Users Analysis  -->
      <!-- <div class="flex items-center justify-between mx-auto mt-6 max-7-xl">
        <h1
          v-if="userStore.users.length"
          class="text-sm font-normal text-gray-900 sm:text-lg"
        >
          Total Users:
          <span class="text-sm font-semibold sm:text-lg">
            {{ userStore.users.length }}
          </span>
          out of
          <span class="text-sm font-semibold sm:text-lg">
            {{ userStore.users.length }}
          </span>
        </h1>

        <TrashIcon
          @click="deleteAllUsers"
          class="w-8 h-8 cursor-pointer hover:text-indigo-600"
        />
      </div> -->

      <hr class="mt-6" />

      <!-- Surveys Table Lists -->
      <div class="mt-8 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div
            class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Role
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                  <th scope="col" class="relative px-6 py-3"></th>
                  <th scope="col" class="relative px-6 py-3 text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody v-if="userStore.users">
                <tr
                  v-for="(user, personIdx) in userStore.users"
                  :key="personIdx"
                  :class="personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
                >
                  <td
                    class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                  >
                    {{ user.id }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ user.email }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ user.role }}
                  </td>

                  <td></td>
                  <td></td>

                  <div class="flex justify-end">
                    <div class="hover:bg-gray-100">
                      <td
                        class="px-6 py-4 text-sm font-medium text-right cursor-pointer whitespace-nowrap"
                        @click="removeUser(user.id)"
                      >
                        <TrashIcon class="w-5 h-5 mr-3" />
                      </td>
                    </div>
                    <div class="hover:bg-gray-100">
                      <td
                        class="px-6 py-4 text-sm font-medium text-right cursor-pointer whitespace-nowrap"
                      >
                        <router-link :to="`/users/edit/${user.id}`">
                          <PencilIcon class="w-5 h-5 mr-3" />
                        </router-link>
                      </td>
                    </div>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HomeIcon, TrashIcon, PencilIcon } from '@heroicons/vue/solid'
import { ref, reactive } from 'vue'
import { useUserStore } from '../../../../resources/scripts/stores/user'
import { useNotificationStore } from '../../../../resources/scripts/stores/notification'

const userStore = useUserStore()
const notificationStore = useNotificationStore()

userStore.fetchAllUsers()

function removeUser(id) {
  userStore.deleteUser(id)
  notificationStore.showNotification({
    type: 'success',
    message: 'User Deleted Successfully.',
  })
}
function deleteAllUsers(index) {
  userStore.users.splice(index, 1)
}
</script>
