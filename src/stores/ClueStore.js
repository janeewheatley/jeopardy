import { defineStore } from "pinia";
import axios from "axios";

export const useClueStore = defineStore("ClueStore", {
  state: () => ({
    clues: [],
    category: [],
    response: [],
  }),
  // getters: {
  //   getClues(state) {
  //     return state.clues;
  //   },
  //   getCategory(state) {
  //     return state.category;
  //   },
  //   getResponse(state) {
  //     return state.response;
  //   },
  // },
  actions: {
    async fetchClues() {
      try {
        const response = await axios.get("/clues/random");
        this.clues = response.data.data[0].clue;
        this.category = response.data.data[0].category;
        this.response = response.data.data[0].response;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
