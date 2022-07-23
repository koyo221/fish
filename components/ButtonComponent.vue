<template>
<div>
  <button @click="changeGameStateToPlaying()">click to find fish</button>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
methods: {
  changeGameStateToPlaying() {
    this.$emit("onClick", "2");
  }
}
})
</script>

<style scoped>
div {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
