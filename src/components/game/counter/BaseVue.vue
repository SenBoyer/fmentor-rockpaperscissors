<template>
  <button @click="selectCounter()" class="outer">
    <div class="inner">
      <figure>
        <img :src="icon" :alt="name" />
      </figure>
    </div>
  </button>
</template>

<script setup>
import { toRefs } from "vue";
import useStore from "../../../store";

// eslint-disable-next-line no-undef
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const store = useStore();
const { name } = toRefs(props);

const icon = `/icon-${name.value}.svg`;

const selectCounter = () => {
  store.setCounterPlayer(name.value);
  store.setStage(1);
};
</script>

<style lang="scss" scoped>
.outer {
  @apply flex
    items-center
    justify-center
    bg-primary-white
    bg-gradient-to-tr
    rounded-full
    aspect-square
    sm:p-7
    p-4
    shadow-[inset_1px_-7px_0_0_rgba(59,67,99,.39)];

  .inner {
    @apply flex
      items-center
      justify-center
      bg-primary-white
      aspect-square
      rounded-full
      w-full
      shadow-[inset_-1px_8px_0_0_rgba(59,67,99,.2)];

    figure {
      @apply w-2/5;

      img {
        @apply mx-auto w-full;
      }
    }
  }
}
</style>
