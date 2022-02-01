<template>
  <div>
    <div class="px-6 py-4 mx-auto mt-12 max-w-7xl">
      <!-- Breadcrumb -->
      <div class="flex items-center justify-between">
        <nav class="" aria-label="Breadcrumb">
          <h1 class="mb-6 text-lg font-bold sm:text-xl">Surveys</h1>
          <ol role="list" class="flex items-center space-x-4">
            <li>
              <div>
                <router-link
                  to="/user/dashboard"
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
                  class="ml-4 font-medium text-gray-800 hover:text-gray-700"
                >
                  User Surveys
                </router-link>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Surveys Table Lists -->
      <div class="mt-8 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div
            class="overflow-hidden border-t-4 border-indigo-500 shadow border-rounded-t-md sm:rounded-lg"
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
                  <th
                    scope="col"
                    class="py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                  >
                    Questions
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
                >
                  <td
                    class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                  >
                    {{ survey.survey_id }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
                  >
                    {{ survey.survey_name }}
                  </td>

                  <td
                    class="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
                  >
                    {{ survey.questions.length }}
                  </td>

                  <td></td>
                  <td></td>
                  <td></td>

                  <div class="flex justify-end">
                    <div
                      class="cursor-pointer hover:bg-gray-300 hover:text-indigo-500"
                    >
                      <router-link
                        :to="`/user/surveys/${survey.survey_id}/manage-survey`"
                      >
                        <td
                          @click="userSurvey(survey.survey_id)"
                          class="px-6 py-4 text-sm font-medium text-center"
                        >
                          <PencilIcon class="w-5 h-5 mr-3" />
                        </td>
                      </router-link>
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
import { useSurveyStore } from '../../../scripts/stores/survey'
import { useUserSurveyStore } from '../../../scripts/stores/userSurvey'

const surveyStore = useSurveyStore()
const userSurveyStore = useUserSurveyStore()

surveyStore.fetchAllSurveys()

function userSurvey(id) {
  userSurveyStore.fetchUserSurvey(id)
}
</script>
