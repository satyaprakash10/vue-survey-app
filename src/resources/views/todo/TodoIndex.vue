<template>
  <div>
    <div class="px-6 py-4 mx-auto mt-12">
      <!-- Breadcrumb -->
      <div class="flex items-center justify-between">
        <nav class="" aria-label="Breadcrumb">
          <h1 class="mb-6 text-lg font-bold sm:text-xl">Todo List</h1>
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
                  to="#"
                  class="ml-4 font-medium text-gray-500 hover:text-gray-700"
                >
                  Todo List
                </router-link>
              </div>
            </li>
          </ol>
        </nav>

        <router-link
          @click="todoStore.resetTodoData"
          to="/todo/todo-create"
          class="flex items-center px-4 py-3 text-white transition-all duration-300 bg-indigo-500 border rounded-md hover:ease-in-out hover:bg-indigo-400 hover:bg-opacity-90 hover:shadow-lg"
        >
          <PlusIcon class="w-6 h-6 mr-3" />
          Add New Todo
        </router-link>
      </div>

      <BaseModal :isShow="isModal" />

      <div class="mt-8 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div
            class="gap-6 overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <!-- Todo Delete Alert Modal -->
            <TransitionRoot as="template" :show="open">
              <Dialog
                as="div"
                class="fixed inset-0 z-10 overflow-y-auto"
                @close="open = false"
              >
                <div
                  class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
                >
                  <TransitionChild
                    as="template"
                    enter="ease-out duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in duration-200"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                  >
                    <DialogOverlay
                      class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                    />
                  </TransitionChild>

                  <!-- This element is to trick the browser into centering the modal contents. -->
                  <span
                    class="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                    >&#8203;</span
                  >
                  <TransitionChild
                    as="template"
                    enter="ease-out duration-300"
                    enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leave-from="opacity-100 translate-y-0 sm:scale-100"
                    leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <div
                      class="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                    >
                      <div class="sm:flex sm:items-start">
                        <div
                          class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
                        >
                          <ExclamationIcon
                            class="w-6 h-6 text-red-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div
                          class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                        >
                          <DialogTitle
                            as="h3"
                            class="text-lg font-medium leading-6 text-gray-900"
                          >
                            Delete Todo
                          </DialogTitle>
                          <div class="mt-2">
                            <p class="text-sm text-gray-500">
                              Are you sure you want to delete your todo?
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button
                          type="button"
                          class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                          @click="deleteItem"
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                          @click="open = false"
                          ref="cancelButtonRef"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </TransitionChild>
                </div>
              </Dialog>
            </TransitionRoot>
          </div>

          <!-- <div v-else>
            <div
              class="px-6 py-6 mt-4 text-lg font-bold text-center text-gray-500 bg-gray-100 rounded-md shadow-md"
            >
              <h3>No Todo List found yet!</h3>
            </div>
            <router-link
              to="/todo/todo-create"
              class="px-4 py-3 mt-4 transition-all duration-300 border border-indigo-500 rounded-md hover:ease-in-out hover:bg-indigo-500 hover:bg-opacity-30 hover:shadow-lg"
            >
              <PlusIcon class="w-6 h-6 mr-3" />

              Add New Todo
            </router-link>
          </div> -->
        </div>
      </div>

      <!-- Todo's Table Lists -->
      <div class="w-full mt-1">
        <div class="">
          <div class="overflow-auto lg:overflow-visible">
            <table
              style="width: 100%"
              class="table space-y-6 text-sm text-gray-600 border-separate"
            >
              <thead class="w-full text-white bg-gray-800" style="width: 100%">
                <tr class="uppercase">
                  <th class="p-3 px-4 text-left">Profile</th>
                  <th class="p-3 text-left">ID</th>
                  <th class="p-3 text-left">Label</th>
                  <!-- <th class="p-3 text-left">Description</th> -->
                  <th class="p-3 text-left">Categories</th>
                  <th class="p-3 text-left">Status</th>
                  <th class="p-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  class="transition-all duration-500 bg-gray-100 border shadow cursor-pointer hover:border-gray-900 hover:ease-out hover:bg-gray-300 hover:text-indigo-500 hover:shadow-xl"
                  v-for="(todo, todoIdx) in todoStore.todoList"
                  :key="todoIdx"
                >
                  <td class="p-3">
                    <div class="flex align-items-center">
                      <img
                        class="object-cover w-12 h-12 rounded-full"
                        alt="todo image"
                        v-if="todo.todoFile"
                        :src="todo.todoFile"
                      />
                      <img
                        v-else
                        class="object-cover w-12 h-12 rounded-full"
                        src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                        alt="unsplash image"
                      />

                      <div class="ml-3">
                        <div class="font-semibold text-gray-900 uppercase">
                          {{ todo.user_name }}
                        </div>
                        <div class="text-indigo-500 hover:text-gray-900">
                          {{ todo.user_email }}
                        </div>
                        <div
                          v-if="!todo.user_email"
                          class="text-gray-500 hover:text-gray-900"
                        >
                          NA
                        </div>
                      </div>
                    </div>
                  </td>

                  <td class="p-3 ml-4">
                    {{ todo.id }}
                  </td>
                  <td
                    class="p-3 text-base font-semibold text-indigo-500"
                    @click="$router.push(`/todo/todo-create/edit/${todo.id}`)"
                  >
                    {{ todo.name }}
                  </td>
                  <!-- <td class="max-w-sm p-3 font-bold truncate">
                    {{ todo.description }}
                  </td> -->
                  <td class="items-center p-3 space-x-2 truncate lg:flex-none">
                    <span
                      v-for="(cat, index) in todo.category"
                      :key="index"
                      class="px-3 py-2 space-x-4 text-xs font-semibold text-gray-900 bg-green-500 shadow-md rounded-2xl"
                    >
                      {{ cat }}
                    </span>
                  </td>

                  <td
                    class="items-center p-3 space-x-2 lg:flex-none"
                    @click="isStatus != isStatus"
                  >
                    <span
                      class="px-3 py-2 space-x-4 text-xs font-semibold text-gray-900 bg-orange-300 shadow-md rounded-2xl"
                    >
                      {{ todo.status }}
                    </span>
                  </td>

                  <div class="flex items-center justify-center text-center">
                    <td
                      @click="removeTodo(todo.id)"
                      class="px-2 py-4 mt-2 text-sm font-medium text-left cursor-pointer hover:bg-gray-500 hover:text-white whitespace-nowrap"
                    >
                      <TrashIcon class="w-5 h-5" />
                    </td>
                    <td
                      class="px-2 py-4 mt-2 text-sm font-medium text-left cursor-pointer hover:bg-gray-500 hover:text-white"
                    >
                      <router-link :to="`/todo/todo-create/edit/${todo.id}`">
                        <PencilIcon class="w-5 h-5" />
                      </router-link>
                    </td>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseModal from '../../../components/base/BaseModal.vue'
import { HomeIcon, PlusIcon, TrashIcon, PencilIcon } from '@heroicons/vue/solid'
import { useTodoStore } from '../../scripts/stores/todo'
import { useNotificationStore } from '../../scripts/stores/notification'
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { ExclamationIcon } from '@heroicons/vue/outline'

const open = ref(false)
const isModal = ref(false)
let item_id = ref(null)
const previewImage = ref('')

// stores
const notificationStore = useNotificationStore()
const todoStore = useTodoStore()

// created
todoStore.fetchAllTodoList()

// methods
function removeTodo(id) {
  item_id.value = id
  open.value = true
}

function deleteItem() {
  if (item_id.value) {
    todoStore.deleteTodo(item_id.value)
    open.value = false
    item_id.value = null
    notificationStore.showNotification({
      type: 'success',
      message: 'Todo Deleted Successfully.',
    })
  }
}

function deleteAllTodoList(index) {
  todoStore.todoList.splice(index, 1)
}

function uploadImage(event) {
  const input = event.target
  if (input.files) {
    let reader = new FileReader()
    reader.onload = (e) => {
      previewImage.value = e.target.result
      formData.todo_file = e.target.result
    }
    formData.todo_file = input.files[0]
    reader.readAsDataURL(input.files[0])
  }
}
</script>

<style scoped>
/* ::-webkit-scrollbar {
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
} */

.table {
  border-spacing: 0 18px;
  width: 100%;
}

i {
  font-size: 1rem !important;
}

.table tr {
  border-radius: 20px;
  border: gray;
}

tr td:nth-child(n + 10),
tr th:nth-child(n + 10) {
  border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(n + 12),
tr th:nth-child(n + 12) {
  border-radius: 0.625rem 0 0 0.625rem;
}
</style>
