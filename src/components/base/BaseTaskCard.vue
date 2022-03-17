<template>
  <div class="px-3 pt-3 pb-5 bg-white border border-white rounded shadow">
    <div class="flex justify-between">
      <p class="font-sans text-sm font-semibold tracking-wide text-gray-700">
        {{ task.title }}
      </p>

      <img
        class="w-6 h-6 ml-3 rounded-full"
        src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
        alt="Avatar"
      />
    </div>
    <div class="flex items-center justify-between mt-4">
      <span class="text-sm text-gray-600">{{ task.date }}</span>
      <base-badge v-if="task.type" :color="badgeColor">
        {{ task.type }}
      </base-badge>
    </div>
  </div>
</template>
<script>
import BaseBadge from '../base/BaseBadge.vue'
export default {
  components: {
    BaseBadge,
  },
  props: {
    task: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    badgeColor() {
      const mappings = {
        Design: 'purple',
        'Feature Request': 'teal',
        Backend: 'blue',
        QA: 'green',
        default: 'teal',
      }
      return mappings[this.task.type] || mappings.default
    },
  },
}
</script>
