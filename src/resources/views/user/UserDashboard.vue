<template>
  <div>
    <!-- Dashboard starts -->
    <div class="px-6 py-2 mb-10">
      <!-- User cards -->
      <div
        class="grid grid-cols-1 gap-4 sm:max-w-7xl sm:mx-auto lg:px-6 sm:grid-cols-1 lg:grid-cols-3"
      >
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

      <!-- Survey List -->
      <div
        class="px-2 mt-16 lg:mx-auto sm:mt-24 sm:flex sm:justify-between lg:max-w-7xl lg:px-6"
      >
        <h1
          class="w-full px-6 py-2 mb-4 text-base font-bold text-center bg-gray-100 border-t-4 border-indigo-600 border-solid rounded-md shadow sm:mb-0 sm:max-w-sm lg:max-w-lg sm:text-xl"
        >
          Surveys
        </h1>
        <router-link
          to="/user/surveys"
          class="flex items-center justify-center w-full px-4 py-2 mt-1 border border-indigo-500 rounded-md sm:max-w-xs lg:flex-none lg:w-auto hover:bg-indigo-200 hover:shadow-md"
        >
          <PlusIcon
            class="w-6 h-6 mr-4 text-indigo-500 border border-indigo-500"
          />
          Attained Survey
        </router-link>
      </div>

      <hr class="mt-10" />

      <!-- Survey list  -->
      <div class="lg:max-w-7xl lg:mx-auto lg:px-6">
        <SurveyList class="px-2 py-4 mt-8w t" />
      </div>

      <hr class="mt-10" />

      <!-- Attempt Survey List -->
      <div
        class="px-2 mt-16 lg:mx-auto sm:mt-24 sm:flex sm:justify-between lg:max-w-7xl lg:px-6"
      >
        <h1
          class="w-full px-6 py-3 mb-4 text-base font-bold text-center bg-gray-100 border-t-4 border-indigo-600 border-solid rounded-md shadow sm:mb-0 sm:max-w-sm lg:max-w-lg sm:text-xl"
        >
          Attempt Surveys
        </h1>

        <div
          class="px-4 py-2 text-lg font-bold text-center text-white bg-gray-500 border-t-4 border-black border-solid rounded-md shadow sm:text-auto sm:flex sm:justify-end border-rounded-t sm:text-2xl text-sans"
        >
          10
        </div>
      </div>
      <!-- Attempted Survey list  -->
      <div class="mb-10 lg:max-w-7xl lg:mx-auto lg:px-6">
        <AttemptedSurveyList class="px-2 py-4 mt-8w t" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { UserIcon, CheckCircleIcon, PlusIcon } from '@heroicons/vue/solid'

import SurveyList from '../../../components/SurveyList.vue'
import AttemptedSurveyList from '../../../components/AttemptedSurveyList.vue'
</script>
