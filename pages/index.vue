<template>
  <div class="world">
    <div v-if="gameState === '1'">
      <ButtonComponent @onClick="changeGameState($event)" />
    </div>
    <div v-if="gameState === '2'">
      <SeaComponent />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export type GameState = "1" | "2"

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      gameState: '1'
    }
  },
  methods: {
    changeGameState(event: GameState) {
      this.gameState = event;
    }
  }
})
</script>

<style scoped>
.world {
  min-height: 100vh;
  min-width: 100vh;
}
</style>
