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
                  <th scope="col" class="relative px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody v-if="getUsers">
                <tr
                  v-for="(user, personIdx) in getUsers"
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

                  <td
                    class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                  >
                    <TrashIcon class="w-5 h-5 mr-3" />
                  </td>
                  <td
                    class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                  >
                    <PencilIcon class="w-5 h-5 mr-3" />
                  </td>
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

const people = []
const userStore = useUserStore()

let getUsers = userStore.fetchAllUsers()
</script>
