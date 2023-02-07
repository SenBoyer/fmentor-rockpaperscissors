<template>
  <header>
    <h1>
      <figure>
        <img src="/logo.svg" alt="Rock, Paper, Scissors" />
      </figure>
    </h1>

    <div class="score-panel">
      <h6>Score</h6>
      <p>{{ store.score }}</p>
    </div>
  </header>
</template>

<script setup>
import useStore from "../store";

const store = useStore();

// eslint-disable-next-line no-undef
defineProps({
  score: Number,
});
</script>

<style lang="scss" scoped>
header {
  @apply flex
    justify-between
    items-center
    rounded-lg
    border-2
    border-primary-header-outline
    sm:p-6
    p-3
    sm:pl-8
    pl-6
    sm:pb-5
    pb-3
    max-w-[705px]
    mx-auto
    w-full;

  figure {
    @apply sm:w-auto w-9/12 sm:mt-0 mt-2;
  }
}

.score-panel {
  @apply sm:max-w-[150px]
    max-w-[100px]
    w-full
    bg-primary-white
    rounded-lg
    p-2
    text-lg
    uppercase
    text-center
    text-primary-dark-text;

  h6 {
    @apply text-sm
        tracking-widest;
  }

  p {
    @apply text-6xl
        leading-none
        font-bold;
  }
}
</style>
