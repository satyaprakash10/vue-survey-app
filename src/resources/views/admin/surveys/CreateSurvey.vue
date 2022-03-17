<template>
  <div>
    <div class="px-6 py-4 mx-auto max-w-7xl">
      <!-- Breadcrumb -->
      <h1 class="mb-6 text-lg font-bold sm:text-xl">Surveys</h1>

      <nav class="flex" aria-label="Breadcrumb">
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
                to="/survey"
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
                class="ml-4 font-medium text-gray-500 hover:text-gray-700"
              >
                New Survey
              </router-link>
            </div>
          </li>
        </ol>
      </nav>

      <!-- survey form start -->
      <div
        class="px-6 py-5 mt-5 bg-white border-t-2 border-gray-200 border-indigo-500 border-solid rounded-md shadow"
      >
        <div>
          <div class="sm:grid sm:grid-cols-2 sm:gap-2">
            <div class="py-4 mt-2 sm:border-gray-200 sm:pt-4">
              <label
                for=""
                class="block text-sm font-medium text-gray-700 sm:mt-px"
              >
                Survey Id
              </label>
              <div class="mt-1 sm:mt-3 sm:col-span-2">
                <input
                  type="text"
                  v-model="survey_id"
                  name="survey_id"
                  id="survey_id"
                  class="block w-full max-w-sm px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:ring-none focus:outline-none focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="py-4">
              <label
                for=""
                class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Survey Name
              </label>
              <div class="mt-1 sm:mt-3 sm:col-span-2">
                <input
                  type="text"
                  name="survey_id"
                  id="survey_id"
                  v-model="survey_name"
                  class="block w-full max-w-xl px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:ring-none focus:outline-none focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <!-- Survey Questions -->
          <div class="px-6 py-4 pb-6 rounded-t-lg shadow bg-gray-50">
            <h1 class="py-3 mt-3 text-lg font-bold sm:text-xl">
              Surveys Questions :
            </h1>
            <div
              v-for="(question, questionIndex) in questions"
              :key="questionIndex"
              :class="''
                  ? 'border-indigo-500 border-solid border-t-2 mb-3 mt-4'
                  : questionIndex > 1
              "
            >
              <div class="border-b-2 sm:grid sm:grid-cols-4">
                <h1
                  class="py-3 mt-3 text-sm font-semibold text-gray-500 sm:text-lg"
                >
                  Question No :
                  <span class="text-sm font-semibold text-gray-900 sm:text-xl">
                    {{ questionIndex + 1 }}
                  </span>
                </h1>
                <div></div>
                <div></div>
                <TrashIcon
                  v-if="questions.length > 1"
                  class="flex justify-end w-8 h-8 mx-auto mt-6 mb-3 mr-2 text-center text-gray-600 cursor-pointer hover:text-gray-900"
                  @click="removeQuestions(questionIndex)"
                />
              </div>

              <div class="sm:grid sm:gap-8 sm:grid-cols-2">
                <div class="py-3 sm:border-gray-200">
                  <label
                    for="id"
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Question Id
                  </label>
                  <div class="mt-1 sm:mt-0">
                    <input
                      id="id"
                      name="id"
                      v-model="question.question_id"
                      type="text"
                      class="block w-full px-4 py-3 mt-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:ring-none focus:outline-none focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div class="py-3 sm:border-gray-200">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Question Name
                  </label>
                  <div class="mt-1 sm:mt-0">
                    <input
                      id="id"
                      name="id"
                      v-model="question.question_name"
                      type="text"
                      class="block w-full px-4 py-3 mt-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:ring-none focus:outline-none focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <!-- Survey Questions Options -->
              <div class="">
                <div
                  class="sm:grid-cols-4 sm:grid sm:gap-6"
                  v-for="(question, optionIndex) in question.options"
                  :key="optionIndex"
                >
                  <h1
                    class="py-3 mt-3 text-sm font-bold text-gray-500 sm:text-lg"
                  >
                    Option :
                    <span
                      class="text-sm font-semibold text-gray-900 sm:text-xl"
                    >
                      {{ optionIndex + 1 }}
                    </span>
                  </h1>

                  <div class="py-4 sm:border-gray-200">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Option Id
                    </label>
                    <div class="mt-1 sm:mt-0">
                      <input
                        v-model="question.option_id"
                        id=""
                        name=""
                        type="text"
                        class="block w-full px-4 py-3 mt-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:ring-none focus:outline-none focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div class="py-4 sm:border-gray-200">
                    <label
                      for=""
                      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Option Name
                    </label>
                    <div class="mt-1 sm:mt-0">
                      <input
                        v-model="question.option_text"
                        id=""
                        name=""
                        type="text"
                        class="block w-full px-4 py-3 mt-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:ring-none focus:outline-none focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <TrashIcon
                    v-if="optionIndex > 0"
                    @click="removeOption(optionIndex)"
                    class="w-8 h-8 mx-auto mt-3 mb-3 mr-2 text-center text-gray-600 cursor-pointer sm:mt-16 hover:text-gray-900"
                  />
                </div>

                <div class="">
                  <button
                    @click.prevent="addMoreOption(questionIndex)"
                    class="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-gray-900 transition-all duration-500 ease-in-out border border-indigo-500 shadow hover:border-indigo-500 hover:border-2 focus:ring-indigo-500 rounded-b-md sm:justify-auto sm:text-sm hover:bg-gray-500 hover:bg-opacity-30"
                  >
                    <PlusIcon class="w-6 h-6 mr-4" />
                    Add More Option
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            @click.prevent="addMoreQuestion()"
            class="flex justify-center w-full px-4 py-3 text-gray-900 transition-all duration-500 bg-gray-100 rounded-b-lg hover:border-indigo-500 hover:border-2 hover:bg-gray-300 hover:focus:outline-indigo-500 hover:focus-ring-2"
          >
            <PlusIcon class="w-6 h-6 ml-2 mr-3" />
            Add More Question
          </button>
        </div>

        <div
          class="flex justify-center px-6 pt-16 mx-auto sm:justify-start max-w-7xl"
        >
          <button
            @click.prevent="submitSurveyData"
            class="flex justify-center w-full px-2 py-3 text-white bg-indigo-600 rounded-md shadow sm:w-40 hover:bg-blue-500 hover:bg-opacity-90"
          >
            <SaveIcon class="w-6 h-6 mr-4" />
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, computed } from 'vue'
import { HomeIcon, PlusIcon, SaveIcon, TrashIcon } from '@heroicons/vue/solid'
import { useRouter, useRoute } from 'vue-router'
import { useSurveyStore } from '../../../../resources/scripts/stores/survey'
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import { useNotificationStore } from '../../../scripts/stores/notification'

// local state
let questions = reactive([
  {
    question_id: '',
    question_name: '',
    options: [
      {
        option_id: '',
        option_text: '',
      },
    ],
  },
])

const survey_id = ref('')
const survey_name = ref('')

const surveyStore = useSurveyStore()
const notificationStore = useNotificationStore()

let isSaving = ref(false)

const route = useRoute()
const router = useRouter()

const rules = {
  options: {
    required: required,
    minLength: minLength(4),
  },
}

const v$ = useVuelidate(
  rules,
  computed(() => questions)
)

//created
if (route.params.id) {
  surveyStore.fetchSurvey(route.params.id)
  survey_id.value = surveyStore.currentSurvey.survey_id
  console.log('current survey =>', surveyStore.currentSurvey)
  survey_name.value = surveyStore.currentSurvey.survey_name
  questions = surveyStore.currentSurvey.questions
}

// methods
function getCurrentSurvey() {
  let res = surveyStore.fetchSurvey()
}

// add more questions
function addMoreQuestion() {
  questions.push({
    question_id: '',
    question_name: '',
    options: [
      {
        option_id: '',
        option_text: '',
      },
    ],
  })
}

// add more options
function addMoreOption(id) {
  questions[id].options.push({
    option_id: '',
    option_text: '',
  })
}

// remove options
function removeOption(index) {
  questions.map((_q) => _q.options.splice(index, 1))
}

// remove questions
function removeQuestions(index) {
  questions.splice(index, 1)
}

function submitSurveyData() {
  let surveyData = {
    survey_id: survey_id.value,
    survey_name: survey_name.value,
    questions: questions,
  }
  isSaving.value = true
  if (route.params.id) {
    surveyStore.updateSurvey(surveyData)
    notificationStore.showNotification({
      type: 'success',
      message: 'Survey updated successfully.',
    })
  } else {
    surveyStore.addSurvey(surveyData)
    console.log('surveyData =>', surveyData)
    notificationStore.showNotification({
      type: 'success',
      message: 'Survey Added successfully.',
    })
  }

  isSaving.value = false

  router.push('/survey')
}
</script>
