<template>
  <div>
    <div class="px-6 py-4 mx-auto max-w-7xl">
      <!-- Breadcrumb -->
      <h1 class="mb-6 font-serif text-lg font-bold sm:text-xl">
        Attempted User Survey
      </h1>
      <!-- User info -->
      <div
        class="h-auto px-6 py-4 mt-10 bg-gray-100 border-t-4 border-indigo-500 rounded-md shadow"
      >
        <div class="px-4 mt-2">
          <h1
            class="text-lg italic font-bold text-gray-900 underline list-disc sm:text-2xl"
          >
            User Info :
          </h1>

          <h3
            class="mt-6 text-base font-semibold text-gray-900 list-disc sm:text-lg"
          >
            User Id:
            <span class="ml-4 font-bold text-gray-700" userSurvey.user_id>
              {{ userSurvey.user_id }}
            </span>
          </h3>

          <p class="mt-3 text-base font-semibold text-gray-900">
            Email:
            <span
              class="ml-4 font-normal text-gray-700"
              v-if="userSurvey.user_email"
            >
              {{ userSurvey.user_email }}
            </span>
          </p>

          <p class="mt-3 text-base font-semibold text-gray-900">
            Role:
            <span
              class="ml-4 font-semibold text-gray-700 uppercase"
              v-if="userSurvey.user_role"
            >
              {{ userSurvey.user_role }}
            </span>
          </p>
        </div>
      </div>

      <div
        class="h-auto px-6 py-4 mt-10 bg-gray-100 border-t-4 border-indigo-500 rounded-md shadow"
      >
        <div class="px-4 mt-2">
          <h1
            class="flex justify-between space-x-6 text-lg italic font-bold text-gray-900 list-disc sm:text-2xl"
          >
            Survey Name :
            <span class="underline">
              {{ userSurvey.survey_name }}
            </span>
          </h1>

          <h3
            class="flex items-center justify-between mt-6 text-base font-semibold text-gray-900 list-disc sm:text-lg"
          >
            Questions Attempted:
            <div
              class="flex justify-end px-3 space-x-4 border border-indigo-500 rounded-md"
            >
              <span> Total Questions: </span>
              <h3 class="text-lg font-semibold text-orange-500">
                {{ userSurvey.surveyData.length }}
              </h3>
            </div>
          </h3>

          <ul
            class="py-2 mt-6 text-base text-gray-600 list-disc font-regular sm:text-lg"
          >
            <li
              class="mb-4 text-lg"
              v-if="surveyData"
              v-for="(quest, index) in surveyData"
              :key="index"
            >
              <h3 class="font-semibold text-gray-900">
                Question: {{ index + 1 }}
              </h3>
              <p class="text-gray-900">{{ quest.question_id }}</p>
              <div class="flex items-center space-x-5">
                <p class="mt-4 text-lg font-semibold text-indigo-500">
                  Answer:
                </p>
                <p class="mt-4 text-lg font-normal text-gray-900">
                  {{ quest.option_id }}
                </p>
              </div>
              <hr class="mt-4 mb-4" />
            </li>
          </ul>
        </div>

        <!-- {{ userSurvey }} -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, computed } from '@vue/runtime-core'
import { useSurveyStore } from '../resources/scripts/stores/survey'
import { useRoute } from 'vue-router'

const route = useRoute()

const surveyStore = useSurveyStore()

const userSurvey = ref('')

watchEffect(() => {
  surveyStore.fetchUserSurveys()

  if (route.params.id) {
    const attemptedSurvey = surveyStore.userSurveys.find(
      (_s) => _s.survey_id === route.params.id
    )

    userSurvey.value = attemptedSurvey
  }
})

const surveyData = computed(() => {
  let index = userSurvey.value.surveyData.findIndex(
    (survey) => survey.question_id === 0
  )

  return userSurvey.value.surveyData.splice(index, 1)
})
</script>
