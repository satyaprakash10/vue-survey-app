<template>
  <Disclosure
    as="nav"
    class="fixed top-0 z-10 text-white bg-gray-900 shadow-2xl"
    v-slot="{ open }"
  >
    <div class="px-2 py-0 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-20">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile Toggle button -->
          <DisclosureButton
            class="inline-flex items-center justify-center text-white rounded-md hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
            <XIcon v-else class="block w-6 h-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <!-- Web Logo -->
        <div
          class="flex items-center justify-center flex-shrink-0 hidden mt-6 transition-all duration-100 transform border-b-2 border-blue-500 sm:block lg:justify-start rounded-b-md hover:border-none"
        >
          <a
            href="/demo"
            class="text-base italic font-bold text-blue-500 lg:text-4xl"
          >
            Vue
            <span
              class="ml-3 font-serif text-base font-semibold text-white sm:text-2xl"
            >
              DEMO
            </span>
          </a>
        </div>

        <!--Desktop Menu -->
        <div
          class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-center"
        >
          <!-- Mobile logo -->
          <div
            class="flex items-center justify-center flex-shrink-0 transition-all duration-100 transform border-b-2 border-blue-500 sm:hidden lg:justify-start rounded-b-md hover:border-none"
          >
            <a
              href="/demo"
              class="text-base italic font-bold text-blue-500 lg:text-4xl"
            >
              Vue
              <span
                class="ml-3 font-serif text-base font-semibold text-gray-600 sm:text-xl"
              >
                Demo
              </span>
            </a>
          </div>

          <!-- Menu Items -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- Admin side -->
            <!-- v-if="isAdmin" -->
            <router-link
              to="/Demo"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-transparent hover:text-indigo-500 hover:font-semibold"
            >
              Demo
            </router-link>
            <router-link
              to="/board"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-transparent hover:text-indigo-500 hover:font-semibold"
            >
              Board
            </router-link>

            <router-link
              to="/todo"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-transparent hover:text-indigo-500 hover:font-semibold"
            >
              Todo
            </router-link>

            <router-link
              v-if="isAdmin"
              to="/users"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-transparent hover:text-indigo-500 hover:font-semibold"
            >
              <!-- Users -->
            </router-link>

            <!-- <router-link
              v-if="isAdmin"
              to="/surveys"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-transparent hover:text-indigo-500 hover:font-semibold"
            >
              Surveys
            </router-link> -->

            <!-- User side  -->
            <router-link
              v-if="!isAdmin"
              to="/user/dashboard"
              class="inline-flex items-center px-1 text-sm font-medium text-white border-transparent hover:text-indigo-500 hover:font-semibold"
            >
              Dashboard
            </router-link>

            <router-link
              v-if="!isAdmin"
              to="/user/surveys"
              class="inline-flex items-center px-1 text-sm font-medium text-white border-transparent hover:text-indigo-500 hover:font-semibold"
            >
              User Survey
            </router-link>
          </div>
        </div>

        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <Menu as="div" class="relative mt-2 ml-3">
            <div>
              <MenuButton
                class="flex text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-10 h-10 rounded-md"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    @click="signOut"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <DisclosurePanel class="sm:hidden">
      <div class="pt-2 pb-4 space-y-1">
        <DisclosureButton
          v-if="isAdmin"
          as="a"
          href="/board"
          class="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50"
        >
          <!-- Board -->
        </DisclosureButton>
        <!-- <DisclosureButton
          v-if="isAdmin"
          as="a"
          href="/surveys"
          class="block py-2 pl-3 pr-4 text-base font-medium text-white border-l-4 border-transparent hover:bg-gray-50 hover:text-gray-700"
        >
          Survey
        </DisclosureButton> -->
        <DisclosureButton
          v-if="isAdmin"
          as="a"
          href="/demo"
          class="block py-2 pl-3 pr-4 text-base font-medium text-white border-l-4 border-transparent hover:bg-gray-50 hover:text-gray-700"
        >
          Demo
        </DisclosureButton>
        <DisclosureButton
          v-if="isAdmin"
          as="a"
          href="/todo"
          class="block py-2 pl-3 pr-4 text-base font-medium text-white border-l-4 border-transparent hover:bg-gray-50 hover:text-gray-700"
        >
          Todo
        </DisclosureButton>
        <DisclosureButton
          v-if="isUser"
          as="a"
          href="/user/dashboard"
          class="block py-2 pl-3 pr-4 text-base font-medium text-white border-l-4 border-transparent hover:bg-gray-50 hover:text-gray-700"
        >
          Board
        </DisclosureButton>
        <DisclosureButton
          v-if="isUser"
          as="a"
          href="/user/surveys/user-survey"
          class="block py-2 pl-3 pr-4 text-base font-medium text-white border-l-4 border-transparent hover:bg-gray-50 hover:text-gray-700"
        >
          User Survey
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import Ls from '../services/ls'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../resources/scripts/stores/auth'
import { useNotificationStore } from '../resources/scripts/stores/notification'
import { watchEffect, ref } from 'vue'

const authStore = useAuthStore()
const notificationStore = useNotificationStore()

const router = useRouter()

const isUser = ref()
const isAdmin = ref()

watchEffect(() => {
  isUser.value = JSON.parse(Ls.get('isUser'))
  isAdmin.value = JSON.parse(Ls.get('isAdmin'))
})

function signOut() {
  try {
    if (authStore.isAdmin === true) {
      authStore.adminLogout()
      router.push('/')
    } else {
      authStore.userLogout()
      router.push('/')
    }
    notificationStore.showNotification({
      type: 'success',
      message: 'Logged out successfully.',
    })
  } catch (error) {
    console.log(error)
  }
}
</script>
