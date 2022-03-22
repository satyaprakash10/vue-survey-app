<template>
  <div>
    <VueBotUI
      :messages="data"
      :options="botOptions"
      @msg-send="messageSendHandler"
    />
  </div>
</template>

<script>
import { VueBotUI } from 'vue-bot-ui'
export default {
  components: {
    VueBotUI,
  },

  data() {
    return {
      data: [],
      botOptions: {},
      messages: [
        {
          agent: 'bot', // Required. 'bot' or 'user'
          type: 'text', // Required. Bubble message component type: 'text' / 'button'
          text: 'Hello. How can I help you', // Required. The message
          disableInput: false, // Disable message input or not
        },
        {
          agent: 'user',
          type: 'text', // always
          text: 'I need a new laptop',
        },
      ],
    }
  },
}
</script>
