import { defineStore } from "pinia";

export const useCounterStore = defineStore("CounterStore", {
  state: () => ({
    counterCorrect: 0,
    counterTotal: 0,
  }),
//   getters: {
//     getCounterCorrect(state) {
//       return state.counterCorrect;
//     },
//     getCounterTotal(state) {
//       return state.counterTotal;
//     },
//   },
  actions: {
    incrementCounterCorrect() {
      this.counterCorrect++;
    },

    incrementCounterTotal() {
      this.counterTotal++;
    },
  },
});
