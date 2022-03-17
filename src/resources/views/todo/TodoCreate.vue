<template>
  <div
    class="top-0 px-12 py-4 mt-5 border-b border-gray-300 border-solid"
    style="height: 150vh"
  >
    <div class="px-6 mx-auto max-w-7xl">
      <!-- Breadcrumb -->
      <div class="flex items-center justify-between">
        <nav class="" aria-label="Breadcrumb">
          <h1 class="mb-6 text-lg font-bold sm:text-xl">New Todo List</h1>
          <ol role="list" class="flex items-center pr-6 space-x-4">
            <li>
              <div>
                <router-link
                  to="/"
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
                  to="/todo"
                  class="ml-4 font-medium text-gray-500 hover:text-gray-700"
                >
                  Todo List
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
                <!-- to="#"  -->
                <button
                  @click="isModal != isModal"
                  class="ml-4 font-medium text-gray-500 hover:text-gray-700"
                >
                  New Todo List
                </button>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Form Page -->
      <form
        action=""
        class="mt-4 lg:mt-4"
        enctype="multipart/form-data"
        @submit.prevent="submitForm"
      >
        <div
          class="p-10 border-t-4 border-indigo-500 shadow bg-gray-50 rounded-2xl"
        >
          <h1 class="text-lg font-medium text-gray-900 sm:text-2xl">
            Vue 3 Todo App Form
          </h1>
          <p class="mt-2 text-sm font-normal text-gray-500 sm:text-lg">
            This is a Todo App form page using Vuelidate and Vue 3.
          </p>
          <hr class="mt-3" />

          <div
            class="grid gap-4 my-6 sm:grid-col-1 sm:mt-8 sm:gap-6 md:grid-cols-2"
          >
            <!-- Basic Input  -->
            <div>
              <label
                for="price"
                class="flex text-base font-medium text-gray-700"
              >
                Id
              </label>

              <div class="mt-1">
                <input
                  v-model="todoStore.todoData.id"
                  placeholder="Enter todo ID"
                  type="number"
                  name="id"
                  id="id"
                  class="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for="price"
                class="flex text-base font-medium text-gray-700"
              >
                User Name
              </label>

              <div class="mt-1">
                <input
                  v-model="todoStore.todoData.user_name"
                  placeholder="Enter User Name"
                  type="text"
                  name="user_name"
                  id="user_name"
                  class="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for="price"
                class="flex text-base font-medium text-gray-700"
              >
                Todo Name
              </label>

              <div class="mt-1">
                <input
                  placeholder="Enter todo Name"
                  v-model="todoStore.todoData.name"
                  type="text"
                  name="name"
                  id="name"
                  class="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />

                <!-- <span
                  class="flex mt-2 font-medium text-left text-red-500 text-md"
                  v-if="
                    v$.todoStore.name.$error &&
                    v$.todoStore.name.$errors[0].$message
                  "
                >
                  {{ v$.todoStore.name.$errors[0].$message }}
                </span> -->
              </div>
            </div>

            <div>
              <label
                for="price"
                class="flex text-base font-medium text-gray-700"
              >
                User Email
              </label>

              <div class="mt-1">
                <input
                  placeholder="Enter User Email"
                  v-model="todoStore.todoData.user_email"
                  type="email"
                  name="email"
                  id="email"
                  class="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for="price"
                class="flex text-base font-medium text-gray-700"
              >
                Todo Categories
              </label>

              <div class="mt-1">
                <Multiselect
                  placeholder="Select Todo Category"
                  mode="tags"
                  :close-on-select="false"
                  :filter-results="false"
                  :loading="false"
                  :min-chars="1"
                  :resolve-on-load="true"
                  :delay="0"
                  :searchable="false"
                  :options="categories"
                  v-model="todoStore.todoData.category"
                />
              </div>
            </div>
            <div>
              <label
                for="price"
                class="flex text-base font-medium text-gray-700"
              >
                Status
              </label>

              <div class="mt-1">
                <Multiselect
                  placeholder="Select Issue Status"
                  :close-on-select="false"
                  :filter-results="false"
                  :loading="false"
                  :min-chars="1"
                  class="border-indigo-500 focus:outline-border"
                  :resolve-on-load="true"
                  :delay="0"
                  :options="statuses"
                  v-model="todoStore.todoData.status"
                />
              </div>
            </div>
            <!-- File Upload -->
            <div>
              <label
                for="price"
                class="flex text-base font-medium text-gray-700"
              >
                File Upload
              </label>

              <div
                class="flex justify-center px-6 pt-5 pb-6 mt-2 border-2 border-gray-300 border-dashed rounded-md mb-7"
              >
                <div class="space-y-1 text-center">
                  <svg
                    v-if="!previewImage"
                    class="w-12 h-12 mx-auto text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span v-if="!previewImage">Upload a file</span>
                      <input
                        id="file-upload"
                        name="image"
                        type="file"
                        class="sr-only"
                        @change="uploadImage"
                      />
                      <img
                        v-if="previewImage"
                        :src="previewImage"
                        alt=""
                        class="w-20 h-20"
                      />
                      <span v-if="previewImage" @click="remove">remove</span>
                    </label>
                    <p v-if="!previewImage" class="pl-1">or drag and drop</p>
                  </div>
                  <p v-if="!previewImage" class="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 mt-6 sm:grid-cols-1 lg:gap-6">
            <div>
              <label
                for="price"
                class="flex text-base font-medium text-gray-700"
              >
                Description
              </label>

              <div class="w-full mx-auto mt-1 max-w-7xl">
                <textarea
                  v-model="todoStore.todoData.description"
                  rows="4"
                  cols="9"
                  placeholder="Enter some description"
                  name="description"
                  id="description"
                  class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <hr class="mt-3" />

          <!-- Submit form Button -->
          <div class="flex justify-end mt-6">
            <button
              type="submit"
              class="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm sm:w-auto hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <SaveIcon class="w-5 h-5 mr-3" />
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import BaseTable from '../../../components/base/BaseTable.vue'
import { reactive, ref, computed, watch } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
import { useTodoStore } from '../../scripts/stores/todo'
import { useNotificationStore } from '../../scripts/stores/notification'
import { useRoute, useRouter } from 'vue-router'
import { SaveIcon, HomeIcon } from '@heroicons/vue/solid'
import Multiselect from '@vueform/multiselect'
import BaseFileUpload from '../../../components/base/BaseFileUpload.vue'
const route = useRoute()
const router = useRouter()

let value = ref('')
const categories = reactive([
  'Bugs',
  'Issues',
  'Functionality',
  'Testing',
  'Styling',
  'Api Integration',
  'QA',
])
const statuses = reactive([
  'POW',
  'Todo',
  'In Progress',
  'Review',
  'Completed',
  'Deferred',
  'Rejected',
])

let todoInfo = ref(null)
let data = reactive(null)
let isSaving = ref(false)

// stores
const notificationStore = useNotificationStore()
const todoStore = useTodoStore()
const previewImage = ref('')
const todoImage = ref('')

if (route.params.id) {
  todoStore.fetchAllTodoList()
  todoStore.fetchTodo(route.params.id)
}

// Method
function uploadImage(event) {
  const input = event.target
  if (input.files) {
    let reader = new FileReader()
    reader.onload = (e) => {
      previewImage.value = e.target.result
      todoImage.value = e.target.result
    }
    reader.readAsDataURL(input.files[0])
  }
}

function submitForm() {
  todoStore.todoData.todoFile = todoImage.value

  if (todoStore.todoData) {
    if (route.params.id) {
      todoStore.updateTodo(todoStore.todoData)
      notificationStore.showNotification({
        type: 'success',
        message: 'Todo Updated successfully.',
      })
    } else {
      todoStore.addTodo(todoStore.todoData)

      notificationStore.showNotification({
        type: 'success',
        message: 'Todo Added successfully.',
      })
    }
    router.push('/todo')
  }
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
  overflow: hidden;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
