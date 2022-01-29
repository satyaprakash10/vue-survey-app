<template>
  <div class="" style="height: 100vh">
    <!-- The site header -->
    <TheSiteHeader :open="open" @toggle="open = !open" />

    <!-- Main -->
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import TheSiteHeader from './components/TheSiteHeader.vue'

export default {
  components: {
    TheSiteHeader,
  },

  setup() {
    let open = ref(false)

    return { open }
  },
}
</script>
