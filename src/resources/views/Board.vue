<template>
  <div>
    <div class="px-6 py-2 mx-auto max-w-7xl">
      <div class="flex items-center justify-between px-4">
        <h1
          class="font-serif text-base font-bold text-gray-900 sm:text-xl lg:text-2xl"
        >
          KANBAN BOARD is in development!
        </h1>

        <router-link
          to="/todo/todo-create"
          class="flex items-center px-4 py-2 text-white bg-indigo-800 rounded-md shadow-sm hover:bg-opacity-50"
        >
          <PlusIcon class="w-5 h-5 mr-3" /> Create Task
        </router-link>
      </div>

      <div
        class="grid w-full h-auto grid-cols-1 gap-4 px-4 py-3 mx-auto mt-4 mb-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 max-w-7xl"
      >
        <div class="h-full px-4 py-4 mb-4 bg-gray-100 rounded-md">
          <div
            class="flex items-center justify-between px-2 py-2 bg-blue-500 rounded-md"
          >
            <h1 class="font-serif text-base font-medium text-white">TODO</h1>
            <!-- Add More Task -->
            <PlusIcon
              @click="add"
              class="w-6 h-6 text-white cursor-pointer hover:bg-gray-300 hover:rounded-full hover:text-indigo-900"
            />
          </div>

          <!-- RENDER ADDED TASKS LIST -->
          <draggable
            class="w-full h-full dragArea list-group"
            :list="taskList"
            group="people"
            :group="{ name: 'people', pull: 'clone', put: false }"
            @change="log"
            :animation="500"
          >
            <transition-group type="transition" name="flip-list">
              <div
                v-for="(element, index) in taskList"
                :key="index"
                class="relative w-auto px-4 py-2 mt-4 overflow-auto transition-all duration-700 ease-in-out bg-white border rounded-md shadow-md cursor-move group hover:border hover:border-indigo-500 hover:shadow-xl hover:bg-blue-200 border-gray-50"
              >
                <div class="absolute right-3 top-2">
                  <XIcon
                    @click="removeTask(index)"
                    class="w-4 h-4 cursor-pointer hover:rounded-full hover:bg-gray-300 hover:text-indigo-500"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <label for="" class="text-base font-semibold text-gray-900">
                    {{ element.name }}
                  </label>
                  <label
                    for=""
                    class="text-base font-normal text-gray-300 group-hover:text-gray-900"
                  >
                    {{ element.id }}
                  </label>
                </div>

                <p class="mt-4 font-normal text-gray-500">
                  {{ element.description }}
                </p>
                <div class="">
                  <div class="flex mt-6 mb-4">
                    <div>
                      <label
                        v-for="val in element.value"
                        :key="val"
                        style="font-size: 10px"
                        for=""
                        class="px-2 py-1 mr-2 font-normal text-white uppercase bg-indigo-600 rounded-full shadow-sm cursor-pointer"
                      >
                        {{ val }}
                      </label>
                    </div>
                  </div>

                  <!-- <div class="relative flex justify-end px-2">
                    <img
                      src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                      class="w-8 h-8 border-2 border-indigo-500 rounded-full cursor-pointer"
                      alt=""
                    />
                  </div> -->
                </div>
              </div>

              <!-- Add New task data -->
              <div>
                <div
                  v-for="taskField in addTaskList"
                  :key="task.name"
                  class="relative w-auto px-4 py-2 mt-4 overflow-auto bg-white border rounded-md shadow-md cursor-move group hover:border hover:border-indigo-500 hover:shadow-xl hover:bg-blue-50 border-gray-50"
                >
                  <div class="absolute right-3 top-2">
                    <XIcon
                      @click="removeItem(id)"
                      class="w-4 h-4 cursor-pointer hover:rounded-full hover:bg-gray-300 hover:text-indigo-500"
                    />
                  </div>
                  <div class="mt-6">
                    <input
                      v-model="taskField.name"
                      placeholder="Enter Task Name"
                      class="w-full px-4 py-2 border border-indigo-500 rounded-md shadow-md hover:bg-gray-200 focus:border-outline-ring focus:ring-cyan-100"
                    />
                  </div>

                  <textarea
                    v-model="taskField.description"
                    placeholder="Enter Todo Description"
                    class="w-full px-3 py-2 mt-2 transition-all ease-in-out border-none rounded-md shadow-md duration-600 focus:outline-indigo-500 hover:bg-gray-200"
                    rows="4"
                  />
                  <div class="mt-6 mb-4">
                    <Multiselect
                      v-model="taskField.value"
                      mode="tags"
                      class="w-full text-xs font-normal"
                      placeholder="Categories"
                      :close-on-select="false"
                      :search="true"
                      :options="categories"
                    >
                    </Multiselect>
                  </div>

                  <button
                    type="submit"
                    class="inline-flex items-center justify-center w-full px-2 py-1 text-xs font-medium text-white transition-all duration-700 bg-indigo-600 border border-transparent rounded-md shadow-sm sm:w-auto hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    @click.prevent="addNewTask(taskField)"
                  >
                    <SaveIcon class="w-4 h-4 mr-2" />
                    Save
                  </button>
                </div>
              </div>
            </transition-group>
          </draggable>
        </div>

        <!-- IN PROGRESS -->
        <div class="px-4 py-4 mb-4 bg-gray-100 rounded-md">
          <div
            class="flex items-center justify-between px-2 py-2 rounded-md bg-cyan-500"
          >
            <h1 class="font-serif text-base font-medium text-gray-900">
              IN PROGRESS
            </h1>
          </div>
          <draggable
            class="w-full dragArea list-group"
            :list="progress"
            :animation="500"
            group="people"
            @change="log"
          >
            <transition-group type="transition" name="flip-list">
              <div
                v-for="element in progress"
                :key="element.name"
                class="w-auto px-4 py-2 mt-4 overflow-auto bg-white border rounded-md shadow-md cursor-move group hover:border hover:border-indigo-500 hover:shadow-xl hover:bg-blue-200 border-gray-50"
              >
                <div class="flex items-center justify-between">
                  <label for="" class="text-base font-semibold text-gray-900">
                    {{ element.name }}
                  </label>
                  <label
                    for=""
                    class="text-base font-normal text-gray-300 group-hover:text-gray-900"
                  >
                    {{ element.id }}
                  </label>
                </div>

                <p class="mt-4 font-normal text-gray-500">
                  {{ element.description }}
                </p>
                <div class="flex items-center justify-between mt-6 mb-4">
                  <label
                    for=""
                    class="px-4 py-1.5 cursor-pointer uppercase text-sm font-normal text-white bg-gray-600 rounded-full shadow-sm"
                  >
                    {{ element.status }}
                  </label>

                  <div class="relative flex px-2">
                    <img
                      src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                      class="w-8 h-8 border-2 border-indigo-500 rounded-full cursor-pointer"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </transition-group>
          </draggable>
        </div>

        <!-- REVIEW STATE -->
        <div class="px-4 py-4 mb-4 bg-gray-100 rounded-md">
          <div
            class="flex items-center justify-between px-2 py-2 bg-red-100 rounded-md"
          >
            <h1 class="font-serif text-base font-medium text-gray-900">
              REVIEW
            </h1>
          </div>

          <draggable
            class="w-full dragArea list-group"
            :list="review"
            group="people"
            :animation="500"
            @change="log"
          >
            <transition-group type="transition" name="flip-list">
              <div
                v-for="element in review"
                :key="element.name"
                class="w-auto px-4 py-2 mt-4 overflow-auto bg-white border rounded-md shadow-md cursor-move hover:border hover:border-indigo-500 hover:shadow-xl hover:bg-blue-200 border-gray-50"
              >
                <div class="flex items-center justify-between">
                  <label for="" class="text-base font-semibold text-gray-900">
                    {{ element.name }}
                  </label>
                  <label for="" class="text-base font-normal text-gray-300">
                    {{ element.id }}
                  </label>
                </div>

                <p class="mt-4 font-normal text-gray-500">
                  {{ element.description }}
                </p>
                <div class="flex items-center justify-between mt-6 mb-4">
                  <label
                    for=""
                    class="px-4 py-1.5 cursor-pointer uppercase text-sm font-normal text-white bg-gray-600 rounded-full shadow-sm"
                  >
                    {{ element.status }}
                  </label>

                  <div class="relative flex px-2">
                    <img
                      src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                      class="w-8 h-8 border-2 border-indigo-500 rounded-full cursor-pointer"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </transition-group>
          </draggable>
        </div>

        <!-- COMPLETED STATE -->
        <div class="px-4 py-4 mb-4 bg-gray-100 rounded-md">
          <div
            class="flex items-center justify-between px-2 py-2 bg-green-500 rounded-md"
          >
            <h1 class="font-serif text-base font-medium text-white">
              COMPLETED
            </h1>
          </div>
          <draggable
            class="w-full dragArea list-group"
            :list="completed"
            :animation="500"
            group="people"
            @change="log"
          >
            <transition-group type="transition" name="flip-list">
              <div
                v-for="element in completed"
                :key="element.name"
                class="w-auto px-4 py-2 mt-4 overflow-auto bg-white border rounded-md shadow-md cursor-move hover:border hover:border-indigo-500 hover:shadow-xl hover:bg-blue-200 border-gray-50"
              >
                <div class="flex items-center justify-between">
                  <label for="" class="text-base font-semibold text-gray-900">
                    {{ element.name }}
                  </label>
                  <label for="" class="text-base font-normal text-gray-300">
                    {{ element.id }}
                  </label>
                </div>

                <p class="mt-4 font-normal text-gray-500">
                  {{ element.description }}
                </p>
                <div class="flex items-center justify-between mt-6 mb-4">
                  <label
                    for=""
                    class="px-4 py-1.5 cursor-pointer uppercase text-sm font-normal text-white bg-gray-600 rounded-full shadow-sm"
                  >
                    {{ element.status }}
                  </label>

                  <div class="relative flex px-2">
                    <img
                      src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                      class="w-8 h-8 border-2 border-indigo-500 rounded-full cursor-pointer"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </transition-group>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import draggable from 'vuedraggable'
import Multiselect from '@vueform/multiselect'
import {
  CheckCircleIcon,
  HomeIcon,
  XIcon,
  SaveIcon,
  PlusIcon,
} from '@heroicons/vue/solid'
import { ref, reactive, computed } from 'vue'
import { mapActions } from 'pinia'
import { mapState } from 'pinia'
import { useTodoStore } from '../scripts/stores/todo'
import { useNotificationStore } from '../scripts/stores/notification'
export default {
  name: 'clone-on-control',
  display: 'Clone on Control',
  instruction: 'Press Ctrl to clone element from list 1',
  order: 1,

  components: {
    draggable: VueDraggableNext,
    CheckCircleIcon,
    Multiselect,
    HomeIcon,
    XIcon,
    SaveIcon,
    PlusIcon,
  },

  data() {
    return {
      taskField: [],
      addTaskList: [],
      enabled: true,
      task: [],
      users: [],
      categories: ['Testing', 'Bugs', 'Issues', 'Styling', 'UX'],

      dragging: false,

      progress: [],

      review: [],

      completed: [],
    }
  },

  computed: {
    ...mapState(useTodoStore, ['taskList']),
  },

  mounted() {
    this.fetchAllTaskList()
  },

  watch: {
    progress(newValue) {
      console.log('new Value =>', newValue)
      localStorage.setItem('progress', JSON.stringify(newValue))
    },
  },

  methods: {
    ...mapActions(useTodoStore, ['addTask', 'fetchAllTaskList']),
    ...mapActions(useNotificationStore, ['showNotification']),

    log(event) {
      console.log(event)
    },

    // Add task fields
    add: function () {
      this.addTaskList.push({ name: '', description: '', value: [] })
    },

    addNewTask(data) {
      this.addTask(data)
      this.addTaskList = []
      this.showNotification({
        type: 'success',
        message: 'Task Created successfully.',
      })
    },

    removeItem(id) {
      this.addTaskList.splice(id, 1)
    },

    removeTask(index) {
      this.taskList.splice(index, 1)
      localStorage.setItem('taskList', JSON.stringify(this.taskList))
      this.showNotification({
        type: 'success',
        message: 'Task deleted successfully.',
      })
    },

    checkMove(event) {
      console.log('checkMove', event.draggedContext)
      console.log('Future index: ' + event.draggedContext.futureIndex)
    },
  },
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
