<template>
  <div class="px-6 py-2 mt-12">
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <li
        v-for="person in userStore.users"
        :key="person.email"
        class="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow cursor-pointer hover:border-indigo-500 hover:border focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
      >
        <div class="flex items-center justify-between w-full p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-sm font-medium text-gray-900 truncate">
                {{ person.email }}
              </h3>
              <span
                class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"
                >{{ person.role }}</span
              >
            </div>
            <p class="mt-1 text-sm text-gray-500 truncate">
              {{ person.title }}
            </p>
          </div>
        </div>
        <div>
          <div class="flex -mt-px divide-x divide-gray-200">
            <div class="flex flex-1 w-0">
              <a
                :href="`mailto:${person.email}`"
                class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <MailIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                <span class="ml-3">Email</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { MailIcon, PhoneIcon } from '@heroicons/vue/solid'
import { useUserStore } from '../../src/resources/scripts/stores/user'

const userStore = useUserStore()

userStore.fetchAllUsers()
</script>
