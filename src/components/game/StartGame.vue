<template>
  <div class="background">
    <figure>
      <img src="/bg-triangle.svg" alt="background" />
    </figure>

    <Scissors class="counter scissors" />
    <Rock class="counter rock" />
    <Paper class="counter paper" />
  </div>
</template>

<script setup>
import Scissors from "./counter/ScissorsVue.vue";
import Rock from "./counter/RockVue.vue";
import Paper from "./counter/PaperVue.vue";
</script>

<style lang="scss" scoped>
.counter {
  @apply w-[44.6%] absolute z-10;

  &.paper {
    top: -4%;
    left: -2%;

    @screen sm {
      top: -1%;
    }
  }

  &.scissors {
    top: -4%;
    left: 57%;

    @screen sm {
      top: -1%;
    }
  }

  &.rock {
    top: 55%;
    left: 27%;

    @screen sm {
      left: 29%;
    }
  }
}

.background {
  @apply relative sm:p-24 p-12;
}
</style>
