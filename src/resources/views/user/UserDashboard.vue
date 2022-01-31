<template>
  <div>
    <div class="px-6 py-2">
      <!-- User Dashboard cards -->
      <div
        class="grid grid-cols-1 gap-4 sm:max-w-7xl sm:mx-auto lg:px-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div
          class="px-4 py-4 mt-4 bg-gray-100 border-t-8 border-indigo-500 border-solid rounded-md shadow cursor-pointer hover:bg-blue-200 hover:shadow-2xl"
        >
          <div class="px-4">
            <h1
              class="font-serif text-lg font-bold text-gray-900 sm:text-xl lg:text-4xl"
            >
              2023
            </h1>
            <p
              class="mt-10 text-sm italic font-medium text-indigo-700 sm:text-lg lg:text-xl"
            >
              Survey Vue js
            </p>
          </div>
        </div>

        <div
          class="px-4 py-4 mt-4 bg-gray-100 border-t-8 border-orange-500 border-solid rounded-md shadow cursor-pointer hover:bg-orange-200 hover:shadow-2xl"
        >
          <div class="px-4">
            <h1
              class="font-serif text-lg font-bold text-gray-900 sm:text-xl lg:text-4xl"
            >
              2023
            </h1>
            <p
              class="mt-10 text-sm italic font-medium text-orange-500 sm:text-lg lg:text-xl"
            >
              Survey Vue js
            </p>
          </div>
        </div>

        <div
          class="px-4 py-4 mt-4 bg-gray-100 border-t-8 border-yellow-500 border-solid rounded-md shadow cursor-pointer hover:bg-yellow-200 hover:shadow-2xl"
        >
          <div class="px-4">
            <h1
              class="font-serif text-lg font-bold text-gray-900 sm:text-xl lg:text-4xl"
            >
              2023
            </h1>
            <p
              class="mt-10 text-sm italic font-medium text-yellow-500 sm:text-lg lg:text-xl"
            >
              Survey Vue js
            </p>
          </div>
        </div>
      </div>

      <!-- Attempt Survey List -->
      <div
        class="px-2 lg:mx-auto sm:mt-24 sm:flex sm:justify-between lg:max-w-7xl lg:px-6"
      >
        <h1
          class="w-full px-6 py-2 mb-4 text-base font-bold text-center bg-gray-100 border-t-4 border-indigo-600 border-solid rounded-md shadow sm:mb-0 sm:max-w-sm lg:max-w-lg sm:text-xl"
        >
          Surveys List
        </h1>
        <router-link
          to="/user/surveys"
          class="flex justify-center w-full px-4 py-2 mt-1 border border-indigo-500 rounded-md sm:max-w-xs lg:flex-none lg:w-auto hover:bg-indigo-200 hover:shadow-md"
        >
          Attained Survey
        </router-link>
      </div>

      <hr class="mt-10" />

      <div class="lg:max-w-7xl lg:mx-auto lg:px-6">
        <SurveyList class="px-2 py-4 mt-8 bg-gray-100 rounded-md shadow-md" />
      </div>
    </div>
  </div>
</template>

<script setup>
import SurveyList from '../../../components/SurveyList.vue'
</script>
