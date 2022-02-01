<template>
  <div>
    <div class="px-6 py-2 mx-auto max-w-7xl">
      <!-- User cards -->
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3">
        <div
          class="flex justify-between px-4 py-4 mt-4 bg-gray-100 border-t-8 border-indigo-500 border-solid rounded-md shadow cursor-pointer hover:bg-blue-200 hover:shadow-2xl"
        >
          <div class="px-4">
            <h1
              class="font-serif text-lg font-bold text-gray-900 sm:text-3xl lg:text-4xl"
            >
              User Id
            </h1>
            <p
              class="mt-10 text-lg italic font-medium text-indigo-700 hover:text-gray-700 lg:text-xl"
            >
              User Name
            </p>
            <hr class="w-full mt-2 border-gray-500 sm:mx-auto sm:max-w-2xl" />
            <p
              class="mt-2 italic font-medium text-gray-500 hover:text-gray-700 text-md lg:text-lg"
            >
              User email
            </p>
          </div>

          <UserIcon
            class="w-20 h-20 px-4 py-4 mt-10 mr-4 text-gray-800 bg-gray-400 border border-indigo-500 rounded-full"
          />
        </div>

        <div
          class="px-4 py-4 mt-4 bg-gray-100 border-t-8 border-orange-500 border-solid rounded-md shadow cursor-pointer hover:bg-orange-200 hover:shadow-2xl"
        >
          <div class="flex items-center justify-between">
            <div class="px-4">
              <h1
                class="font-serif text-lg font-bold text-gray-900 sm:text-3xl lg:text-4xl"
              >
                2023
              </h1>
              <p
                class="mt-10 text-lg italic font-medium text-indigo-700 hover:text-gray-700 lg:text-xl"
              >
                Survey Attempted
              </p>
            </div>

            <CheckCircleIcon
              class="w-20 h-20 px-4 py-4 mt-10 mr-4 text-gray-800 bg-gray-400 border border-orange-500 rounded-full"
            />
          </div>
        </div>

        <div
          class="px-4 py-4 mt-4 bg-gray-100 border-t-8 border-yellow-500 border-solid rounded-md shadow cursor-pointer hover:bg-yellow-200 hover:shadow-2xl"
        >
          <div class="flex items-center justify-between">
            <div class="px-4">
              <h1
                class="font-serif text-lg font-bold text-gray-900 hover:text-gray-700 sm:text-3xl lg:text-4xl"
              >
                10
              </h1>
              <p
                class="mt-10 text-xl italic font-medium text-indigo-700 hover:text-gray-900 lg:text-xl"
              >
                Surveys
              </p>
            </div>

            <svg
              class="w-20 h-20 px-4 py-4 mt-10 mr-4 text-gray-800 bg-gray-400 border border-yellow-500 rounded-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Users List -->
      <div class="px-2 mt-12 sm:mt-20 lg:flex lg:justify-between">
        <h1
          class="w-full px-6 py-2 mb-4 text-base font-bold text-center bg-gray-100 border-t-4 border-indigo-500 border-solid rounded-md shadow sm:mb-0 lg:max-w-lg sm:text-xl"
        >
          Users
        </h1>
        <router-link
          to="/users/create"
          class="flex justify-center w-full px-4 py-2 mt-1 border border-indigo-500 rounded-md lg:w-auto hover:bg-indigo-200 hover:shadow-md"
        >
          New User
        </router-link>
      </div>

      <hr class="mt-10" />
      <UserList class="px-2 py-4" />

      <hr class="mt-10" />

      <!-- Surveys List -->
      <div class="px-2 sm:mt-4 lg:flex lg:justify-between">
        <h1
          class="w-full px-6 py-2 mb-4 text-base font-bold text-center bg-gray-100 border-t-4 border-indigo-500 border-solid rounded-md shadow sm:mb-0 lg:max-w-lg sm:text-xl"
        >
          Surveys Attempted By Users
        </h1>
      </div>

      <hr class="mt-10" />

      <div class="mb-10">
        <AttemptedSurveyList class="px-2 py-4 mt-8" />
      </div>
    </div>
  </div>
</template>

<script setup>
import SurveyList from '../../../components/SurveyList.vue'
import AttemptedSurveyList from '../../../components/AttemptedSurveyList.vue'
import UserList from '../../../components/UserList.vue'
import { UserIcon, CheckCircleIcon } from '@heroicons/vue/solid'
</script>
