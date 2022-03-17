<template>
  <div>
    <div class="px-6 py-2 mx-auto max-w-7xl">
      <!-- User cards -->
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          class="flex justify-between px-4 py-4 mt-4 bg-gray-100 border-t-8 border-indigo-500 border-solid rounded-md shadow cursor-pointer hover:bg-blue-200 hover:shadow-2xl"
        >
          <div class="px-4">
            <h1
              class="font-serif text-lg font-extrabold text-gray-900 sm:text-3xl lg:text-4xl"
            >
              <!-- {{ authStore.currentUser }} -->
              User Id
            </h1>

            <hr class="w-full mt-2 border-gray-500 sm:mx-auto sm:max-w-2xl" />
            <p
              class="mt-12 italic font-medium text-gray-500 hover:text-gray-700 text-md lg:text-lg"
            >
              Email
              <!-- {{ userStore.currentUser.email }} -->
            </p>
          </div>

          <UserIcon
            class="w-20 h-20 px-4 py-4 mt-10 mr-4 text-gray-800 bg-gray-400 border border-indigo-500 rounded-full"
          />
        </div>

        <!--total attempt surveys card -->
        <div
          class="px-4 py-4 mt-4 bg-gray-100 border-t-8 border-orange-500 border-solid rounded-md shadow cursor-pointer hover:bg-orange-200 hover:shadow-2xl"
        >
          <div class="flex items-center justify-between">
            <div class="px-4">
              <h1
                v-if="surveyStore.userSurveys.length"
                class="font-serif text-lg font-extrabold text-gray-900 sm:text-3xl lg:text-4xl"
              >
                {{ surveyStore.userSurveys.length }}
              </h1>
              <p
                v-else
                class="font-serif text-lg font-extrabold text-gray-900 sm:text-xl lg:text-xl"
              >
                No Surveys Attempted!
              </p>
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

        <!-- total surveys card -->
        <div
          class="px-4 py-4 mt-4 bg-gray-100 border-t-8 border-yellow-500 border-solid rounded-md shadow cursor-pointer hover:bg-yellow-200 hover:shadow-2xl"
        >
          <div class="flex items-center justify-between">
            <div class="px-4">
              <h1
                v-if="surveyStore.surveys.length"
                class="font-serif text-lg font-extrabold text-gray-900 sm:text-3xl lg:text-4xl"
              >
                {{ surveyStore.userSurveys.length }}
              </h1>
              <p
                v-else
                class="font-serif text-lg font-extrabold text-gray-900 sm:text-xl lg:text-xl"
              >
                NO Surveys!
              </p>
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
          <PlusIcon class="w-6 h-6 mr-3 border border-indigo-500 rounded-md" />

          New User
        </router-link>
      </div>

      <hr class="mt-10" />
      <UserList class="px-2 py-4" />

      <hr class="mt-10" />

      <!-- Survey List -->
      <div
        class="px-2 mt-16 lg:mx-auto sm:mt-10 sm:flex sm:justify-between lg:max-w-7xl"
      >
        <h1
          class="w-full px-6 py-2 mb-4 text-base font-bold text-center bg-gray-100 border-t-4 border-indigo-600 border-solid rounded-md shadow sm:mb-0 sm:max-w-sm lg:max-w-lg sm:text-xl"
        >
          Surveys
        </h1>
        <router-link
          to="/survey/create"
          class="flex justify-center w-full px-4 py-2 mt-1 border border-indigo-500 rounded-md lg:w-auto hover:bg-indigo-200 hover:shadow-md"
        >
          <PlusIcon class="w-6 h-6 mr-3 border border-indigo-500 rounded-md" />

          New Survey
        </router-link>
      </div>

      <hr class="mt-10" />

      <!-- Surveys list  -->
      <div class="">
        <SurveyList class="px-2 py-4" />
      </div>

      <hr class="mt-10" />

      <!-- Attempt Surveys List -->
      <div class="px-2 sm:mt-10 lg:flex lg:justify-center">
        <h1
          class="w-full px-6 py-2 mb-4 text-base font-bold text-center bg-gray-100 border-t-4 border-indigo-500 border-solid rounded-md shadow sm:mb-0 lg:max-w-lg sm:text-xl"
        >
          Attempted Surveys
        </h1>
      </div>

      <div class="mb-10">
        <AttemptedSurveyList class="px-2 py-4 mt-2" />
      </div>
    </div>

    <!-- DEMO -->
  </div>
</template>

<script setup>
import AttemptedSurveyList from '../../views/admin/AttemptedSurveyList.vue'
import SurveyList from '../../../components/SurveyList.vue'
import UserList from '../../../components/UserList.vue'
import { UserIcon, PlusIcon, CheckCircleIcon } from '@heroicons/vue/solid'
import { useUserStore } from '../../scripts/stores/user'
import { useUserSurveyStore } from '../../scripts/stores/userSurvey'
import { useSurveyStore } from '../../scripts/stores/survey'
import { useAuthStore } from '../../scripts/stores/auth'
import Ls from '../../../services/ls'

const userStore = useUserStore()
const surveyStore = useSurveyStore()
const authStore = useAuthStore()
const userSurveyStore = useUserSurveyStore()
const user = userStore.user
authStore.getCurrentUser()
Ls.set('currentUser', JSON.stringify(user))
</script>
