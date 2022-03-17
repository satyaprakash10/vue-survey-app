import { defineStore } from 'pinia'
import Ls from '../../../services/ls'

export const useTodoStore = defineStore({
  id: 'todoList',

  state: () => ({
    // TASK LOCAL STATE
    currentTask: null,
    taskData: {
      id: null,
      name: '',
      description: '',
      value: [],
    },

    taskList: [],

    // TODO LOCAL STATE
    currentTodo: null,
    todoList: [],

    todoData: {
      id: null,
      name: '',
      description: '',
      category: [],
      todoFile: null,
      user_name: '',
      user_email: '',
      status: [],
    },
  }),

  actions: {
    resetTodoData() {
      this.todoData = {
        id: null,
        status: [],
        name: '',
        category: [],
        description: '',
        user_name: '',
        user_email: '',
        todoFile: null,
      }
    },

    // TODO ACTIONS
    fetchAllTodoList() {
      this.todoList = JSON.parse(Ls.get('todoList'))
    },

    fetchTodo(id) {
      const todo = this.todoList.find((todo) => todo.id == id)
      this.todoData = todo
    },

    addTodo(data) {
      if (data) {
        this.todoList.push(data)
        Ls.set('todoList', JSON.stringify(this.todoList))
      }
    },

    updateTodo(data) {
      let pos = this.todoList.findIndex((todo) => todo.id === data.id)
      this.todoList[pos] = data
      Ls.set('todoList', JSON.stringify(this.todoList))
    },

    deleteTodo(id) {
      let index = this.todoList.findIndex((todo) => todo.id === id)
      this.todoList.splice(index, 1)
      Ls.set('todoList', JSON.stringify(this.todoList))
    },

    // TASK ACTIONS

    resetTaskData() {
      this.taskData = {
        id: null,
        name: '',
        description: '',
        value: [],
      }
    },

    addTask(data) {
      if (data) {
        this.taskList.push(data)
        Ls.set('taskList', JSON.stringify(this.taskList))
      }
    },
    fetchAllTaskList() {
      this.taskList = JSON.parse(Ls.get('taskList'))
    },
  },
})
