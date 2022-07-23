<template>
  <button>
    <p :class="moving ? 'nowrap' : 'wrap'" @click="onClick()">
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
      moving: false
    }
  },

  methods: {
    async onClick() {
      this.message = 'hi'
      await this.sleep(2000)
      this.message = 'hope you have a good day'
      await this.sleep(2000)
      this.moving = true;
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
.nowrap {
  white-space: nowrap;
}

.wrap {
  white-space: wrap;
}

.message {
  margin-left: 4px;
}
</style>
