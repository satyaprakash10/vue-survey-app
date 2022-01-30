<template>
  <Disclosure as="nav" class="shadow-lg bg-indigo-50" v-slot="{ open }">
    <div class="px-2 py-0 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-24">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
            <XIcon v-else class="block w-6 h-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <!-- Logo -->
        <div
          class="flex items-center justify-center flex-shrink-0 hidden mt-6 transition-all duration-100 transform border-b-2 border-blue-500 sm:block lg:justify-start rounded-b-md hover:border-none hover:scale-x-90"
        >
          <a
            href="/"
            class="text-base italic font-bold text-blue-500 lg:text-4xl"
          >
            Vue
            <span
              class="ml-3 font-serif text-base font-semibold text-gray-600 sm:text-xl"
            >
              Survey
            </span>
          </a>
        </div>

        <!--Desktop Menu -->
        <div
          class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-center"
        >
          <!-- mobile logo -->
          <div
            class="flex items-center justify-center flex-shrink-0 transition-all duration-100 transform border-b-2 border-blue-500 sm:hidden lg:justify-start rounded-b-md hover:border-none hover:scale-x-90"
          >
            <a
              href="/"
              class="text-base italic font-bold text-blue-500 lg:text-4xl"
            >
              Vue
              <span
                class="ml-3 font-serif text-base font-semibold text-gray-600 sm:text-xl"
              >
                Survey
              </span>
            </a>
          </div>

          <!-- Menu items -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <router-link
              to="/dashboard"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
            >
              Dashboard
            </router-link>

            <router-link
              to="/survey"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              Survey
            </router-link>

            <router-link
              to="/users"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              Users
            </router-link>

            <!-- <router-link
              to="/user/dashboard"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              User
            </router-link> -->
          </div>
        </div>

        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton
                class="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
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
                  <router-link
                    to="/profile"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Your Profile
                  </router-link>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <router-link
                    to="/settings"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                  >
                    Settings
                  </router-link>
                </MenuItem>
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
          as="a"
          href="#"
          class="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50"
        >
          Dashboard
        </DisclosureButton>
        <DisclosureButton
          as="a"
          href="#"
          class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
        >
          Survey
        </DisclosureButton>
        <DisclosureButton
          as="a"
          href="#"
          class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
        >
          Users
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
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
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
  },

  setup() {
    let auth = ref(false)
    const route = useRoute()
    const router = useRouter()
    function signOut() {
      auth.value = true

      router.push('/')
    }

    return { signOut }
  },
}
</script>
