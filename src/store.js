import { defineStore } from "pinia";

const useStore = defineStore("main", {
  state: () => ({
    score: 0,
    counterPlayer: "",
    counterAi: "",
    stage: 0,
  }),
  actions: {
    setScore(score) {
      this.score = score;
    },
    setCounterPlayer(counter) {
      this.counterPlayer = counter;
    },
    setStage(stage) {
      this.stage = stage;
    },
  },
});

export default useStore;
