<template>
  <div>
    <div class="px-6 py-2">
      <!-- Surveys List Attained by User -->
      <div class="px-2 sm:mt-6 lg:flex lg:justify-between">
        <h1
          class="w-full px-6 py-2 mb-4 text-base font-bold text-center bg-gray-100 border-t-4 border-indigo-500 border-solid rounded-md shadow sm:mb-0 lg:max-w-lg sm:text-xl"
        >
          Surveys List
        </h1>
        <router-link
          to="/user/surveys/create"
          class="flex justify-center w-full px-4 py-2 mt-1 border border-indigo-500 rounded-md lg:flex-none lg:w-auto hover:bg-indigo-200 hover:shadow-md"
        >
          Attained Survey
        </router-link>
      </div>

      <hr class="mt-10" />

      <div class="">
        <SurveyList class="px-2 py-4 mt-8 bg-gray-100 rounded-md shadow-md" />
      </div>
    </div>
  </div>
</template>

<script>
import SurveyList from '../../../components/SurveyList.vue'
import UserList from '../../../components/UserList.vue'

export default {
  components: {
    SurveyList,
    UserList,
  },

  setup() {
    return {}
  },
}
</script>
