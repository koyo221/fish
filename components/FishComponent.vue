<template>
  <button>
    <p @click="onClick()">
      {{ fish }}
      <span v-if="message" class="message">{{ message }}</span>
    </p>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      fish: '><>',
      message: '',
    }
  },

  methods: {
    async onClick() {
      this.message = 'hi'
      await this.sleep(2000)
      this.message = 'hope you have a good day'
      await this.sleep(2000)
      this.message = ''
      this.$emit('onFishClick')
    },

    sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    },
  },
})
</script>

<style scoped>
p {
  white-space: nowrap;
}

.message {
  margin-left: 4px;
}
</style>
