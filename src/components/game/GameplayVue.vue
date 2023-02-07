<template>
  <div class="stage" :class="{ 'show-result': finish }">
    <div class="player you">
      <h3>You picked</h3>
      <Component
        class="counter"
        :class="{ winner: score === 1 }"
        :is="counter[counterPlayer].component"
        disabled
      />
    </div>

    <div class="player house">
      <h3>The house picked</h3>

      <Transition name="fade" mode="out-in">
        <Component
          v-if="play"
          class="counter"
          :class="{ winner: score === -1 }"
          :is="counter[counterHouse].component"
          disabled
        />
        <div v-else class="counter">
          <div class="loading-counter"></div>
        </div>
      </Transition>
    </div>

    <Transition name="fade">
      <div v-if="finish" class="result">
        <h3>{{ gameStatus }}</h3>
        <button @click="playAgain()">Play again</button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { findIndex } from "lodash";
import Scissors from "./counter/ScissorsVue.vue";
import Rock from "./counter/RockVue.vue";
import Paper from "./counter/PaperVue.vue";
import useStore from "../../store";

const store = useStore();

const counter = [
  {
    type: "scissors",
    component: Scissors,
  },
  {
    type: "paper",
    component: Paper,
  },
  {
    type: "rock",
    component: Rock,
  },
];

const counterPlayer = findIndex(counter, (o) => o.type === store.counterPlayer);
const counterHouse = ref(-1);
const play = ref(false);
const finish = ref(false);
const score = ref(0);

const chooseHouseCounter = () => {
  counterHouse.value = Math.floor(Math.random() * 3);
};

const decideTheGame = () => {
  const player = counterPlayer;
  const house = counterHouse.value;

  if (player === house) {
    return 0; // draw
  }

  if (1 === house - player) {
    return 1; // player wins
  }

  if (player === counter.length - 1 && house === 0) {
    return 1; // player wins
  }

  if (house === counter.length - 1 && player === 0) {
    return 1; // player wins
  }

  return -1; //lost
};

const playGame = () => {
  chooseHouseCounter();
  play.value = true;

  setTimeout(() => {
    score.value = decideTheGame();
    store.setScore(store.score + score.value);
    finish.value = true;
  }, 1000);
};

const playAgain = () => {
  store.setStage(0);
};

const gameStatus = computed(() => {
  if (score.value === 0) {
    return "Draw";
  }

  if (score.value === 1) {
    return "You Win";
  }

  return "You Lose";
});

setTimeout(() => playGame(), 1000);
</script>

<style lang="scss" scoped>
.stage {
  @apply sm:w-[57%]
    w-full
    sm:flex
    grid
    grid-cols-2
    grid-rows-2
    sm:gap-0
    gap-x-8
    gap-y-16
    sm:justify-around
    justify-between;

  @screen sm {
    &.show-result {
      .player.you {
        @apply -translate-x-1/2;
      }

      .player.house {
        @apply translate-x-1/2;
      }
    }
  }

  .player {
    @apply flex-1 transform transition-transform duration-500 flex flex-col sm:w-auto;

    h3 {
      @apply text-primary-white
        sm:text-xl
        tracking-widest
        uppercase
        sm:mb-8
        sm:mt-0
        mt-6
        sm:order-none
        order-1;
    }

    .counter {
      @apply sm:w-[73%] w-full mx-auto flex items-center justify-center relative;

      &:before {
        content: "";

        @apply shadow-none transition-shadow duration-1000 delay-100;
      }

      &.winner {
        &::before {
          content: "";

          @apply absolute aspect-square w-full rounded-full shadow-[0_0_110px_30px_rgba(255,255,255,0.5)];
        }
      }
    }

    .loading-counter {
      @apply bg-primary-dark-text opacity-20 rounded-full aspect-square w-full m-2;
    }
  }

  .result {
    @apply sm:absolute sm:top-1/2 sm:transform sm:-translate-y-1/2 col-span-2;

    h3 {
      @apply text-primary-white text-6xl uppercase mb-6;
    }

    button {
      @apply bg-primary-white
        rounded-md
        py-3
        sm:px-8
        px-20
        uppercase
        hover:opacity-70
        tracking-wider
        sm:w-full
        text-gradients-rock-from;
    }
  }
}
</style>
