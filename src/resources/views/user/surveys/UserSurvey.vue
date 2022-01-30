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
                to="/surveys"
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
              <div class="mt-1 font-bold sm:mt-3 sm:col-span-2">00 1</div>
            </div>

            <div class="py-4">
              <label
                for=""
                class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Survey Name
              </label>
              <div class="mt-1 font-bold sm:mt-3 sm:col-span-2">
                Vue Survey 1
              </div>
            </div>
          </div>

          <!-- Survey Questions -->
          <div class="px-6 py-4 pb-6 rounded-t-lg shadow bg-gray-50">
            <h1 class="py-3 mt-3 text-lg font-bold sm:text-xl">
              Surveys Questions :
            </h1>
            <div
              v-for="(question, index) in questions"
              :key="index"
              :class="''
                  ? 'border-indigo-500 border-solid border-t-2 mb-3 mt-4'
                  : index > 1
              "
            >
              <div class="border-b-2 sm:grid sm:grid-cols-3">
                <h1
                  class="py-3 mt-3 text-sm font-semibold text-gray-500 sm:text-lg"
                >
                  Question No :
                  <span class="text-sm font-semibold text-gray-900 sm:text-xl">
                    {{ index + 1 }}
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
                  <div class="mt-1 font-bold sm:mt-0">01</div>
                </div>
                <div class="py-3 sm:border-gray-200">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Question Name
                  </label>
                  <div class="mt-1 font-bold sm:mt-0">What is Vue Js?</div>
                </div>
              </div>

              <!-- Survey Questions Options -->
              <div class="flex items-center space-x-12">
                <h1
                  class="py-3 mt-3 text-sm font-bold text-gray-500 sm:text-lg"
                >
                  Option A:
                  <span class="text-sm font-semibold text-gray-900 sm:text-xl">
                  </span>
                </h1>

                <div class="py-4 sm:border-gray-200">
                  <label
                    for=""
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Option Name
                  </label>
                  <div class="mt-1 font-bold sm:mt-0">Framework</div>
                </div>

                <div>
                  <input
                    name="notification-method"
                    type="radio"
                    class="w-6 h-6 text-indigo-600 border-gray-300 cursor-pointer mt-9 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div class="flex items-center space-x-12">
                <h1
                  class="py-3 mt-3 text-sm font-bold text-gray-500 sm:text-lg"
                >
                  Option B:
                  <span class="text-sm font-semibold text-gray-900 sm:text-xl">
                  </span>
                </h1>

                <div class="py-4 sm:border-gray-200">
                  <label
                    for=""
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Option Name
                  </label>
                  <div class="mt-1 font-bold sm:mt-0">Framework</div>
                </div>

                <div>
                  <input
                    name="notification-method"
                    type="radio"
                    class="w-6 h-6 text-indigo-600 border-gray-300 cursor-pointer mt-9 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div class="flex items-center space-x-12">
                <h1
                  class="py-3 mt-3 text-sm font-bold text-gray-500 sm:text-lg"
                >
                  Option C
                  <span class="text-sm font-semibold text-gray-900 sm:text-xl">
                  </span>
                </h1>

                <div class="py-4 sm:border-gray-200">
                  <label
                    for=""
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Option Name
                  </label>
                  <div class="mt-1 font-bold sm:mt-0">Framework</div>
                </div>

                <div>
                  <input
                    name="notification-method"
                    type="radio"
                    class="w-6 h-6 text-indigo-600 border-gray-300 cursor-pointer mt-9 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div class="flex items-center space-x-12">
                <h1
                  class="py-3 mt-3 text-sm font-bold text-gray-500 sm:text-lg"
                >
                  Option D :
                  <span class="text-sm font-semibold text-gray-900 sm:text-xl">
                  </span>
                </h1>

                <div class="py-4 sm:border-gray-200">
                  <label
                    for=""
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Option Name
                  </label>
                  <div class="mt-1 font-bold sm:mt-0">Framework</div>
                </div>

                <div>
                  <input
                    name="notification-method"
                    type="radio"
                    class="w-6 h-6 text-indigo-600 border-gray-300 cursor-pointer mt-9 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex justify-center px-6 pt-16 mx-auto sm:justify-start max-w-7xl"
        >
          <button
            @click.prevent="submitSurvey"
            class="flex justify-center w-full px-2 py-3 text-white bg-indigo-600 rounded-md shadow sm:max-w-xs hover:bg-blue-500 hover:bg-opacity-90"
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
import { ref, reactive, watch, computed } from 'vue'
import { HomeIcon, PlusIcon, SaveIcon, TrashIcon } from '@heroicons/vue/solid'
import { useRouter, useRoute } from 'vue-router'
import { useSurveyStore } from '../../../../resources/scripts/stores/survey'
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

//   local data variable declaration
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
let question = ref()
let survey_id = ref('')
let survey_name = ref('')
const surveyStore = useSurveyStore()
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

// methods
function getCurrentSurvey() {
  let res = surveyStore.fetchSurvey()
}

// add more questions
function addMoreQuestion() {
  questions.push({
    question_id: '',
    question_name: '',
    options: [],
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
  questions.options.splice(index, 1)
}

// remove questions
function removeQuestions(index) {
  questions.splice(index, 1)
}

function submitSurvey() {
  if (validate.error) {
    return false
  }
  isSaving.value = true
  let surveyData = {
    survey_id: survey_id.value,
    survey_name: survey_name.value,
    questions: {
      question_id: questions.question_id,
      question: questions.question_name,
      options: {
        option_id: questions.options.option_id,
        option_text: questions.options.option_text,
      },
    },
  }
  surveyStore.addUser(...surveyData)
  console.log('add survey =>', surveyData)

  isSaving.value = false

  router.push('/surveys')
}
</script>
