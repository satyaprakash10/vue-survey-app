import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import './plugins/axios'
// import utils from '@/scripts/helpers/utilities.js'
// import { defineGlobalComponents } from './global-components'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())
// defineGlobalComponents(app)

// app.provide('$utils', utils)

app.mount('body')
