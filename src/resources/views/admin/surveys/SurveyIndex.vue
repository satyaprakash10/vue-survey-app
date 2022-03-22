<template>
  <div>
    <div class="px-6 py-4 mx-auto mt-12 max-w-7xl">
      <!-- Breadcrumb Start-->
      <div class="flex items-center justify-between">
        <nav class="" aria-label="Breadcrumb">
          <h1 class="mb-6 text-lg font-bold sm:text-xl">Surveys</h1>
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
                  Surveys
                </router-link>
              </div>
            </li>
          </ol>
        </nav>

        <router-link
          to="/survey/create"
          class="flex px-4 py-3 text-white transition-all duration-300 bg-indigo-500 border border-indigo-500 rounded-md hover:text-gray-900 hover:ease-in-out hover:bg-indigo-800 hover:bg-opacity-30 hover:shadow-lg"
        >
          <PlusIcon class="w-6 h-6 mr-3" />

          Add New Survey
        </router-link>
      </div>
      <!-- Breadcrumb end-->

      <!-- KANBAN BOARD Draggable DEMO -->
      <div class="flex justify-center">
        <div class="flex min-h-screen py-12 overflow-x-scroll">
          <div
            v-for="column in columns"
            :key="column.title"
            class="px-3 py-3 mr-4 bg-gray-100 rounded rounded-lg column-width"
          >
            <p
              class="font-sans text-sm font-semibold tracking-wide text-gray-700"
            >
              {{ column.title }}
            </p>
            <draggable
              :list="column.tasks"
              :animation="500"
              ghost-class="ghost-card"
              group="tasks"
            >
              <!-- Each element from here will be draggable and animated. Note :key is very important here to be unique both for draggable and animations to be smooth & consistent. -->
              <base-task-card
                v-for="task in column.tasks"
                :key="task.id"
                :task="task"
                class="mt-3 cursor-move"
              ></base-task-card>
              <!-- </transition-group> -->
            </draggable>
          </div>
        </div>
      </div>

      <!-- Total Surveys Analysis  -->
      <!-- <div class="flex items-center justify-between mx-auto mt-6 max-7-xl">
          <h1 class="text-sm font-normal text-gray-900 sm:text-lg">
            Total Surveys:
            <span class="text-sm font-semibold sm:text-lg">
              {{ surveyStore.surveys.length }}
            </span>
            out of
            <span class="text-sm font-semibold sm:text-lg">
              {{ surveyStore.surveys.length }}
            </span>
          </h1>

          <TrashIcon
            @click="deleteAllSurveys"
            class="w-8 h-8 cursor-pointer hover:text-indigo-600"
          />
        </div> -->

      <hr class="mt-6" />

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

                  <td></td>
                  <td></td>
                  <td></td>

                  <div class="flex justify-end">
                    <div
                      class="cursor-pointer hover:bg-gray-200 hover:text-indigo-500"
                    >
                      <td
                        class="px-6 py-4 text-sm font-medium text-center whitespace-nowrap"
                        @click="removeSurvey(survey.survey_id)"
                      >
                        <TrashIcon class="w-5 h-5" />
                      </td>
                    </div>
                    <div
                      class="cursor-pointer hover:bg-gray-200 hover:text-indigo-500"
                    >
                      <td class="px-6 py-4 text-sm font-medium text-center">
                        <router-link :to="`/survey/edit/${survey.survey_id}`">
                          <PencilIcon class="w-5 h-5" />
                        </router-link>
                      </td>
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
import { HomeIcon, PlusIcon, TrashIcon, PencilIcon } from '@heroicons/vue/solid'
import { useSurveyStore } from '../../../scripts/stores/survey'
import BaseTaskCard from '../../../../components/base/BaseTaskCard.vue'
// import draggable from 'vuedraggable'

import { reactive } from 'vue'

const columns = reactive([
  {
    title: 'Backlog',
    tasks: [
      {
        id: 1,
        title: 'Add discount code to checkout page',
        date: 'Sep 14',
        type: 'Feature Request',
      },
      {
        id: 2,
        title: 'Provide documentation on integrations',
        date: 'Sep 12',
      },
      {
        id: 3,
        title: 'Design shopping cart dropdown',
        date: 'Sep 9',
        type: 'Design',
      },
      {
        id: 4,
        title: 'Add discount code to checkout page',
        date: 'Sep 14',
        type: 'Feature Request',
      },
      {
        id: 5,
        title: 'Test checkout flow',
        date: 'Sep 15',
        type: 'QA',
      },
    ],
  },
  {
    title: 'In Progress',
    tasks: [
      {
        id: 6,
        title: 'Design shopping cart dropdown',
        date: 'Sep 9',
        type: 'Design',
      },
      {
        id: 7,
        title: 'Add discount code to checkout page',
        date: 'Sep 14',
        type: 'Feature Request',
      },
      {
        id: 8,
        title: 'Provide documentation on integrations',
        date: 'Sep 12',
        type: 'Backend',
      },
    ],
  },
  {
    title: 'Review',
    tasks: [
      {
        id: 9,
        title: 'Provide documentation on integrations',
        date: 'Sep 12',
      },
      {
        id: 10,
        title: 'Design shopping cart dropdown',
        date: 'Sep 9',
        type: 'Design',
      },
      {
        id: 11,
        title: 'Add discount code to checkout page',
        date: 'Sep 14',
        type: 'Feature Request',
      },
      {
        id: 12,
        title: 'Design shopping cart dropdown',
        date: 'Sep 9',
        type: 'Design',
      },
      {
        id: 13,
        title: 'Add discount code to checkout page',
        date: 'Sep 14',
        type: 'Feature Request',
      },
    ],
  },
  {
    title: 'Done',
    tasks: [
      {
        id: 14,
        title: 'Add discount code to checkout page',
        date: 'Sep 14',
        type: 'Feature Request',
      },
      {
        id: 15,
        title: 'Design shopping cart dropdown',
        date: 'Sep 9',
        type: 'Design',
      },
      {
        id: 16,
        title: 'Add discount code to checkout page',
        date: 'Sep 14',
        type: 'Feature Request',
      },
    ],
  },
])

const surveyStore = useSurveyStore()

surveyStore.fetchAllSurveys()

function removeSurvey(id) {
  surveyStore.deleteSurvey(id)
}

function deleteAllSurveys(index) {
  surveyStore.surveys.splice(index, 1)
}
</script>

<style scoped>
.column-width {
  min-width: 320px;
  width: 320px;
}
.ghost-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
</style>
