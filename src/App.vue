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

<script>
import { ref } from 'vue'
import TheSiteHeader from './components/TheSiteHeader.vue'
import NotificationRoot from './components/base/notifications/NotificationRoot.vue'

export default {
  components: {
    TheSiteHeader,
    NotificationRoot,
  },

  setup() {
    let open = ref(false)

    return { open }
  },
}
</script>
