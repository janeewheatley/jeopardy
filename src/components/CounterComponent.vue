<template>
  <div class="h4 col-md-8 offset-md-2 text-center">
    {{ counterCorrect }} / {{ counterTotal }}
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/CounterStore";
import { computed } from "vue";
const counterStore = useCounterStore();

const counterCorrect = computed(() => {
  return counterStore.counterCorrect;
});

const counterTotal = computed(() => {
  return counterStore.counterTotal;
});
</script>
