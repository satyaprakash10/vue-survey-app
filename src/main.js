import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())

const components = import.meta.globEager('./components/base/*.vue')

Object.entries(components).forEach(([path, definition]) => {
  // Get name of component, based on filename
  // "./components/Fruits.vue" will become "Fruits"
  const componentName = path
    .split('/')
    .pop()
    .replace(/\.\w+$/, '')

  // Register component on this Vue instance
  app.component(componentName, definition.default)
})

app.mount('body')
