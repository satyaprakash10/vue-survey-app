<template>
  <div>
    <div class="px-6 py-2">
      <!-- Users List -->
      <h1 class="px-6 mt-12 text-base font-bold sm:text-xl">Users List</h1>
      <hr class="mt-10" />
      <UserList />

      <hr class="mt-10" />

      <!-- Surveys List -->
      <h1 class="px-6 mt-12 font-bold text-bas sm:text-xl">Surveys List</h1>
      <hr class="mt-10" />

      <div class="px-6">
        <SurveyList class="mt-8 shadow-md" />
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
