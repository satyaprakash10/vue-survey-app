<template>
  <div
    class="px-6 overflow-hidden divide-y divide-gray-200 rounded-lg shadow sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
  >
    <router-link
      :to="`/user/surveys/${survey.id}/manage-survey`"
      v-for="(survey, index) in surveyStore.surveys"
      :key="index"
      class="relative p-6 bg-white border border-gray-300 cursor-pointer group hover:bg-blue-100 hover:border hover:border-indigo-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
    >
      <div>
        <span class="inline-flex rounded-lg ring-4 ring-white">
          <h3 class="text-lg font-medium text-gray-900 sm:text-xl">
            <span class="absolute inset-0" aria-hidden="true" />
            {{ survey.survey_id }}
          </h3>
          <!-- <component :is="action.icon" class="w-6 h-6" aria-hidden="true" /> -->
        </span>
      </div>
      <hr class="mt-3 text-gray-700" />
      <div class="mt-6">
        <p class="mt-2 text-sm text-gray-700">
          {{ survey.survey_name }}
        </p>
      </div>

      <router-link
        to="/user/surveys/manage-survey"
        class="hover:bg-gray-300 hover:rounded-full"
      >
        <span
          class="absolute text-gray-300 pointer-events-none top-6 right-6 group-hover:text-gray-400"
          aria-hidden="true"
        >
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
            />
          </svg>
        </span>
      </router-link>
    </router-link>
  </div>
</template>

<script setup>
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/vue/outline'

import { useSurveyStore } from '../resources/scripts/stores/survey'
import { useUserSurveyStore } from '../resources/scripts/stores/userSurvey'

const userSurveyStore = useUserSurveyStore()
const surveyStore = useSurveyStore()

surveyStore.fetchAllSurveys()
</script>
