<template>
  <div class="row text-center">
    <div class="col-md-8 offset-md-2 text-center">
      <div class="h4 border rounded clue-word">
        {{ category }}
      </div>
    </div>
    <div class="col-md-8 offset-md-2 text-left">
      <div class="h3 border rounded clue-text">
        {{ clues }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useClueStore } from "../stores/ClueStore";
const store = useClueStore();

const clues = computed(() => {
  return store.clues;
});

const category = computed(() => {
  return store.category;
});
</script>

<style>
.clue-word {
  text-align: center;
  padding: 1em;
}

.clue-text {
  padding: 2em;
}
</style>
