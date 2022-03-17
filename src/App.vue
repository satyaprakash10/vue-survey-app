<template>
  <div class="w-full" style="height: 100vh">
    <NotificationRoot />

    <!-- The site header -->
    <TheSiteHeader
      :open="open"
      class="w-full"
      @toggle="open = !open"
      v-if="$route.name !== 'login'"
    />

    <!-- Main -->
    <div class="relative mt-28">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheSiteHeader from './components/TheSiteHeader.vue'
import NotificationRoot from './components/base/notifications/NotificationRoot.vue'

let open = ref(false)
</script>
