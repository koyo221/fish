<template>
  <div class="sea">
    <div v-if="!gameEnd" class="fish-position" :style="fishPositionStyle">
      <FishComponent @onFishClick="onFishClick()" />
    </div>
    <transition name="fade">
      <div v-if="gameEnd" class="game-end">
        <p>You found a fish.</p>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      fishPositionStyle: '',
      left: 0,
      top: 0,
      gameEnd: false,
    }
  },

  created() {
    this.left = this.getRandomNumber(15, 85)
    this.top = this.getRandomNumber(15, 85)
    this.fishPositionStyle = this.createFishPosition()
  },

  methods: {
    /**
     * Event Listener on FishComponent
     */
    onFishClick() {
      const interval = setInterval(async () => {
        this.left += 0.1
        this.fishPositionStyle = this.createFishPosition()

        if (this.left >= 105) {
          clearInterval(interval)
          await this.sleep(2000)
          this.gameEnd = true
        }
      }, 5)
    },

    getRandomNumber(max: number, min: number) {
      return Math.random() * (max - min) + min
    },

    createFishPosition() {
      return `left: ${this.left}%; top: ${this.top}%`
    },

    sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    },
  },
})
</script>

<style scoped>
.sea {
  min-height: 100vh;
  min-width: 100vh;
}

.fish-position {
  position: absolute;
}

.game-end {
  min-height: 100vh;
  min-width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fade-enter-active {
  transition: opacity 2s ease;
}

.fade-enter {
  opacity: 0;
}
</style>
