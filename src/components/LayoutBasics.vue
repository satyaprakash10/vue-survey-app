<template>
  <div class="" style="height: 100vh">
    <NotificationRoot />

    <!-- The site header -->
    <TheSiteHeader :open="open" @toggle="open = !open" />

    <!-- Main -->
    <div class="mt-12">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import TheSiteHeader from './components/TheSiteHeader.vue'
import NotificationRoot from './components/base/notifications/NotificationRoot.vue'
import { useAuthStore } from './resources/scripts/stores/auth'
import Ls from './services/ls'

let open = ref(false)
const isUser = ref()
const isAdmin = ref()
const authStore = useAuthStore()

watchEffect(() => {
  isUser.value = JSON.parse(Ls.get('isUser'))
  isAdmin.value = JSON.parse(Ls.get('isAdmin'))
})
</script>
