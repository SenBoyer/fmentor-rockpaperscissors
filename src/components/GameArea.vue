<template>
  <div class="main">
    <div class="arena">
      <Transition name="fade" mode="out-in">
        <Component
          :is="stage[store.stage]"
          :key="`game.arena.${store.stage}`"
        />
      </Transition>
    </div>

    <Rules class="rules-btn" />
  </div>
</template>

<script setup>
import GameStart from "./game/StartGame.vue";
import GamePlay from "./game/GameplayVue.vue";
import Rules from "./RulesVue.vue";
import useStore from "../store";

const store = useStore();

const stage = [GameStart, GamePlay];
</script>

<style lang="scss" scoped>
.main {
  @apply text-center relative sm:block flex flex-col items-center;

  .arena {
    @apply relative sm:h-full flex sm:items-center justify-center sm:p-0 pt-20;
  }

  :deep(.rules-btn) {
    @apply absolute bottom-0 sm:right-0 right-auto bottom-[-20];
  }
}
</style>
