<template>
  <div>
    <div
      class="mt-8 overflow-x-auto sm:-mx-6 lg:-mx-8"
      v-if="surveyStore.surveys"
    >
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
                  Id
                </th>

                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                >
                  Name
                </th>

                <th scope="col" class="relative px-6 py-3"></th>
                <th scope="col" class="relative px-6 py-3"></th>
                <th scope="col" class="relative px-6 py-3"></th>

                <th scope="col" class="relative px-6 py-3 text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(survey, surveyIdx) in surveyStore.surveys"
                :key="surveyIdx"
                :class="surveyIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
                class="cursor-pointer hover:bg-gray-200"
              >
                <td
                  class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                >
                  {{ survey.survey_id }}
                </td>
                <td
                  class="px-6 py-4 text-sm font-medium text-center text-indigo-500 whitespace-nowrap"
                >
                  {{ survey.survey_name }}
                </td>

                <td></td>
                <td></td>
                <td></td>

                <div class="flex justify-end" v-if="$route.name !== 'admin'">
                  <router-link :to="`/user/surveys/manage-survey`">
                    <td
                      @click="userSurvey(survey.survey_id)"
                      class="px-6 py-4 text-sm font-medium text-center"
                    >
                      <PencilIcon class="w-5 h-5 mr-3" />
                    </td>
                  </router-link>
                </div>

                <div class="flex justify-end" v-if="$route.name !== 'user'">
                  <router-link
                    :to="`/admin/survey/edit/${survey.survey_id}`"
                    v-if="$route.name === 'admin'"
                  >
                    <td class="px-6 py-4 text-sm font-medium text-center">
                      <PencilIcon class="w-5 h-5 mr-3" />
                    </td>
                  </router-link>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- message if no survey attempt! -->
    <div
      v-else
      class="w-full px-5 py-6 mb-10 font-serif text-lg font-semibold text-center text-gray-500 bg-orange-100 rounded-md shadow-lg sm:text-xl lg:text-2xl"
    >
      <ExclamationIcon
        class="w-10 h-10 mx-auto mb-4 text-center text-gray-600"
      />
      No Surveys yet!
    </div>
  </div>
</template>

<script setup>
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  PencilIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
  ExclamationIcon,
} from '@heroicons/vue/outline'

import { useSurveyStore } from '../resources/scripts/stores/survey'
import { useUserSurveyStore } from '../resources/scripts/stores/userSurvey'

const userSurveyStore = useUserSurveyStore()
const surveyStore = useSurveyStore()

surveyStore.fetchAllSurveys()
surveyStore.fetchUserSurveys()
</script>
