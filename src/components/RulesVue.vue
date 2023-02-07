<template>
  <button class="rules-btn" v-bind="$attrs" @click="toggleModal()">
    Rules
  </button>

  <Teleport to="body">
    <div v-if="modalOpen" class="modal-backdrop">
      <div class="modal">
        <header>
          <h2>Rules</h2>
          <button @click="toggleModal()">
            <figure><img src="/icon-close.svg" alt="close" /></figure>
          </button>
        </header>
        <figure class="rules">
          <img src="/image-rules.svg" alt="Rules" />
        </figure>
        <footer></footer>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from "vue";

const modalOpen = ref(false);

const toggleModal = () => {
  modalOpen.value = !modalOpen.value;
};
</script>

<style lang="scss" scoped>
button.rules-btn {
  @apply border-2
    border-primary-header-outline
    text-primary-white
    uppercase
    px-10
    py-2
    rounded-md
    tracking-widest
    hover:opacity-50;
}

.modal-backdrop {
  @apply fixed
    z-50
    inset-0
    bg-[rgba(0,0,0,0.5)]
    flex
    items-center
    justify-center;

  .modal {
    @apply bg-primary-white
        sm:p-6
        p-8
        pb-8
        sm:rounded-md
        sm:h-auto
        h-screen
        relative
        sm:w-auto
        w-full
        flex
        flex-col
        justify-evenly;

    header {
      @apply flex sm:justify-between justify-center items-center sm:mb-10;

      h2 {
        @apply text-3xl uppercase;
      }

      button {
        @apply hover:opacity-50
            sm:static
            absolute
            sm:bottom-auto
            bottom-[15%]
            sm:left-auto
            left-1/2
            transform
            sm:translate-x-0
            -translate-x-1/2;
      }
    }

    figure.rules {
      @apply sm:px-4;

      img {
        @apply w-full;
      }
    }
  }
}
</style>
