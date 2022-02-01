<template>
  <div>
    <div class="px-6 py-4 mx-auto max-w-7xl">
      <!-- Breadcrumb -->
      <h1 class="mb-6 text-lg font-bold sm:text-xl">Attempted User Survey</h1>
      {{ userSurvey }}
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from '@vue/runtime-core'
import { useSurveyStore } from '../resources/scripts/stores/survey'
import { useRoute } from 'vue-router'

const route = useRoute()

const surveyStore = useSurveyStore()

const userSurvey = ref(null)

watchEffect(() => {
  if (route.params.id) {
    const attemptedSurvey = surveyStore.surveys.find(
      (_s) => _s.survey_id === route.params.id
    )

    userSurvey.value = attemptedSurvey
    console.log(attemptedSurvey)
  }
})
</script>
