<template>
  <main>
    <ScoreBoard class="score-board" />
    <GameArea class="game-area" />
  </main>
</template>

<script setup>
import ScoreBoard from "./components/ScoreBoard.vue";
import GameArea from "./components/GameArea.vue";
</script>

<style lang="scss" scoped>
main {
  @apply p-8
    flex
    flex-col
    min-h-screen;

  .score-board {
    @apply mb-8;
  }

  .game-area {
    @apply flex-1;
  }
}
</style>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
