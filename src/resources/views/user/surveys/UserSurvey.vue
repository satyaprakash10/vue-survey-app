<template>
  <div>
    <div class="px-6 py-4 mx-auto max-w-7xl">
      <!-- Breadcrumb -->
      <h1 class="mb-6 text-lg font-bold sm:text-xl">Survey</h1>

      <nav class="flex" aria-label="Breadcrumb">
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
                to="/user/surveys"
                class="ml-4 font-medium text-gray-500 hover:text-gray-700"
              >
                Surveys
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
                class="ml-4 font-medium text-indigo-500 hover:text-gray-700"
              >
                Survey Name
              </router-link>
            </div>
          </li>
        </ol>
      </nav>

      <!-- survey form start -->
      <div
        class="px-6 py-5 mt-5 bg-white border-t-4 border-indigo-500 border-solid rounded-md shadow"
      >
        <div v-for="(survey, index) in surveyStore.survey" :key="index">
          <div class="sm:grid sm:grid-cols-2 sm:gap-2">
            <div class="py-4 mt-2 sm:border-gray-200 sm:pt-4">
              <label
                for=""
                class="block text-sm font-medium text-gray-700 sm:mt-px"
              >
                Survey Id
              </label>
              <div class="mt-1 font-bold sm:mt-3 sm:col-span-2">
                {{ survey.survey_id }}
              </div>
            </div>

            <div class="py-4">
              <label
                for=""
                class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Survey Name
              </label>
              <div class="mt-1 font-bold sm:mt-3 sm:col-span-2">
                {{ survey.survey_name }}
              </div>
            </div>
          </div>

          <!-- Survey Questions -->
          <div class="px-6 py-4 pb-6 rounded-t-lg shadow bg-gray-50">
            <h1 class="py-3 mt-3 text-lg font-bold sm:text-xl">
              Surveys Questions :
            </h1>
            <div
              v-for="(question, questionIndex) in survey.questions"
              :key="questionIndex"
              :class="''
                  ? 'border-indigo-500 border-solid border-t-2 mb-3 mt-4'
                  : questionIndex > 1
              "
            >
              <div class="border-b-2 sm:grid sm:grid-cols-3">
                <h1
                  class="py-3 mt-3 text-sm font-semibold text-gray-500 sm:text-lg"
                >
                  Question No :
                  <span class="text-sm font-semibold text-gray-900 sm:text-xl">
                    {{ questionIndex + 1 }}
                  </span>
                </h1>
              </div>

              <div class="flex items-center space-x-12">
                <div class="py-3 sm:border-gray-200">
                  <label
                    for="id"
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Question Id
                  </label>
                  <div class="mt-1 font-bold sm:mt-0">
                    {{ question.question_id }}
                  </div>
                </div>
                <div class="py-3 sm:border-gray-200">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Question Name
                  </label>
                  <div class="mt-1 font-bold sm:mt-0">
                    {{ question.question_name }}
                  </div>
                </div>
              </div>

              <!-- Survey Questions Options -->
              <div
                class="flex items-center space-x-12"
                v-for="(opt, optionIndex) in question.options"
                :key="optionIndex"
              >
                <h1
                  class="py-3 mt-3 text-sm font-bold text-gray-500 sm:text-lg"
                >
                  Option {{ opt.option_id }}:
                  <span class="text-sm font-semibold text-gray-900 sm:text-xl">
                  </span>
                </h1>

                <div class="py-4 mt-2 sm:border-gray-200">
                  <div class="flex items-center space-x-2">
                    <input
                      name=""
                      type="radio"
                      :id="opt.id"
                      :checked="opt.id"
                      :value="opt.option_text"
                      v-model="opt.answer"
                      class="w-6 h-6 text-indigo-600 border-gray-300 cursor-pointer focus:ring-indigo-500"
                    />
                    <div class="font-bold sm:mt-0">
                      {{ opt.option_text }}
                    </div>
                  </div>
                  {{ opt.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex justify-center px-6 pt-16 mx-auto mb-6 sm:justify-end max-w-7xl"
        >
          <button
            @click.prevent="submitSurvey"
            class="flex justify-center px-6 py-3 text-base text-white bg-indigo-600 rounded-md shadow lg:w-auto sm:max-w-xs hover:bg-blue-500 hover:bg-opacity-90"
          >
            <SaveIcon class="w-6 h-6 mr-4" />
            Submit Survey
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, watchEffect, computed } from 'vue'
import { HomeIcon, PlusIcon, SaveIcon, TrashIcon } from '@heroicons/vue/solid'
import { useRouter, useRoute } from 'vue-router'
import { useSurveyStore } from '../../../scripts/stores/survey'
import { useUserSurveyStore } from '../../../scripts/stores/userSurvey'
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import { useAuthStore } from '../../../scripts/stores/auth'
import { useNotificationStore } from '../../../scripts/stores/notification'

const surveyStore = useSurveyStore()
const userSurveyStore = useUserSurveyStore()
const notificationStore = useNotificationStore()
const authStore = useAuthStore()

let isSaving = ref(false)
const route = useRoute()
const router = useRouter()

// created
surveyStore.fetchSurvey()

watchEffect(() => {
  if (route.params.id) {
    surveyStore.fetchSurvey(route.params.id)
  }
})

// methods
function submitSurvey() {
  // if (validate.error) {
  //   return false
  // }
  isSaving.value = true
  let surveyData = {
    user_id: authStore.currentUser.id,
    survey_id: surveyStore.survey_id,
    surveyData: {
      question_id: surveyStore.question_id,
      option_id: surveyStore.option_id,
    },
  }

  userSurveyStore.submitUserSurvey(surveyData)
  console.log('Survey submit =>', surveyData)

  notificationStore.showNotification({
    type: 'success',
    message: 'Survey Submit Successfully.',
  })
  isSaving.value = false

  router.push('/user/surveys')
}
</script>
