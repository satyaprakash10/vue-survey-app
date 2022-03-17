<template>
  <div>
    <div class="flex items-center space-x-3">
      <label for="price" class="flex text-base font-medium text-gray-700">
        Todo File Upload
      </label>
      <span class="text-sm font-normal text-gray-500"> (Optional) </span>
    </div>
    <div class="mt-2 sm:mt-0 sm:col-span-2">
      <div
        class="flex justify-center max-w-lg px-6 pt-5 pb-6 mt-2 border-2 border-gray-300 border-dashed rounded-md"
      >
        <div class="space-y-1 text-center">
          <svg
            v-if="!todoStore.todoData.todoFile"
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
              <span
                v-if="!todoStore.todoData.todoFile"
                class="font-bold hover:text-indigo-400"
              >
                Upload a file
              </span>
              <input
                type="file"
                id="file-upload"
                accept="image/*"
                class="cursor-pointer sr-only"
                @change="uploadImage"
              />

              <img
                v-if="todoStore.todoData.todoFile"
                :src="previewImage"
                alt=""
                class="w-20 h-20"
              />
              <span v-if="todoStore.todoData.todoFile" @click="remove"
                >remove</span
              >
            </label>
            <p class="pl-1" v-if="!todoStore.todoData.todoFile">
              or drag and drop
            </p>
          </div>
          <p class="text-xs text-gray-500" v-if="!todoStore.todoData.todoFile">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useTodoStore } from '../../resources/scripts/stores/todo'
// Local State

const todoStore = useTodoStore()
const previewImage = ref('')

// Method

function uploadImage(event) {
  const input = event.target
  if (input.files) {
    let reader = new FileReader()
    reader.onload = (e) => {
      previewImage.value = e.target.result
    }
    todoStore.todoData.todoFile = input.files[0]
    reader.readAsDataURL(input.files[0])
  }
}

function remove() {
  todoStore.todoData.todoFile = null
}
</script>
